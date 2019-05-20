import React, { Component } from 'react';
import { Formik, FormikProps, Form, Field, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import passwordHash from 'password-hash';

import {
    ProfileInfoLine, ProfileInfoLabel, ProfileInfoField, ProfileInfoInput,
    ProfileInfoLinePassword, ProfileInfoError,
} from '../styled';
import { Button } from '../../../UI';
import { EditProfileSchema } from '../../../constants/form-validation';
import * as actions from '../../../store/action/allActions';

class ProfileInfoForm extends Component {
    state = {
        errorMsg: "",
    }

    onSubmitFormHandler = ( values ) => {
        this.setState({
            errorMsg: "",
        });
        let userInfo = {
            email: this.props.currentUser.email,
            username: this.props.currentUser.username,
            password: this.props.currentUser.password,
            orders: this.props.currentUser.orders,
        }
        if (values.email === userInfo.email && values.username === userInfo.username && !values.old_password && !values.new_password) {
            this.setState({
                errorMsg: "Nothing has been changed.",
            });
        }  
        
        if (!values.old_password && values.new_password) {
            this.setState({
                errorMsg: "Enter old password to change it to new.",
            });
        } else if (values.new_password !== "" && values.new_password === values.old_password) {
            this.setState({
                isError: true,
                errorMsg: "New password must be different from old.",
            });
        } else if (values.new_password !== "" && passwordHash.verify(values.old_password, this.props.currentUser.password) !== true) {
            this.setState({
                errorMsg: "Please check old password.",
            });
        } else if (values.new_password !== "" && values.new_password !== values.old_password) {
            userInfo.password = passwordHash.generate(values.new_password);
        } 
        
        if (values.email !== userInfo.email && this.props.users.findIndex(x => x.email === values.email) !== -1) {
            this.setState({
                errorMsg: "Email already in use. Please choose another one.",
            });
        } else if (values.email !== userInfo.email && this.props.users.findIndex(x => x.email === values.email) === -1) {
            userInfo.email = values.email;
        }  
        
        if (values.username !== userInfo.username && this.props.users.findIndex(x => x.username === values.username) !== -1) {
            this.setState({
                errorMsg: "Username already in use. Please choose another one.",
            });
        } else if (values.username !== userInfo.username && this.props.users.findIndex(x => x.username === values.username) === -1) {
            userInfo.username = values.username;
        }

        if (this.state.errorMsg === "") {
            this.props.onSetCurrentUser(userInfo);
            this.props.toggleEditMode();
        }
    }

    render() {
        return(
            <Formik
                initialValues={{
                    email: this.props.user.email,
                    username: this.props.user.username,
                    old_password: "",
                    new_password: "",
                }}
                validationSchema={EditProfileSchema}
                onSubmit={values => {
                   this.onSubmitFormHandler(values);
                }}
                render={() => (
                    <Form className="form-wrapper">
                        <ProfileInfoLine>
                            <ProfileInfoLabel>User:</ProfileInfoLabel>
                            <Field 
                                name="username" 
                                placeholder="Username" 
                                type="text"
                            />
                        </ProfileInfoLine>

                        <ProfileInfoLine>
                            <ProfileInfoLabel>email:</ProfileInfoLabel>
                            <Field 
                                name="email" 
                                placeholder="Email" 
                                type="email"
                            />
                        </ProfileInfoLine>

                        <ProfileInfoLinePassword>
                            <div className="password">
                                <Field 
                                name="old_password"
                                placeholder="Old password"
                                type="password" 
                                />
                            </div>
    
                            <div className="password">
                                <Field 
                                    name="new_password"
                                    placeholder="New password"
                                    type="password"
                                    className="password"

                                /> 
                            </div>
                        </ProfileInfoLinePassword>
                        
                        <ProfileInfoError>
                            <p><ErrorMessage name="username" /></p>
                            <p><ErrorMessage name="email" /></p>
                            <p><ErrorMessage name="old_password" /></p>
                            <p><ErrorMessage name="new_password" /></p>
                            <p>{this.state.errorMsg} </p>
                        </ProfileInfoError>

                        <Button type="submit">Save</Button>
                    </Form>
                )}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.user.users,
        currentUser: state.user.currentUser,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSetCurrentUser: (currentUser) => dispatch(actions.setCurrentUser(currentUser)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfoForm);