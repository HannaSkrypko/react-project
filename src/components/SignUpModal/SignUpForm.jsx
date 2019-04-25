import React, { Component } from 'react';
import { Formik, FormikProps, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import { connect } from 'react-redux';
import passwordHash from 'password-hash';

import { Button, ModalErrorMessage } from '../../UI';
import { SingUpSchema } from '../../constants/form-validation';
import * as colors from '../../constants/colors';
import * as actions from '../../store/action/allActions';

const FormWrapper = styled.div`
    .form-wrapper {
        text-align: right;

        & input {
            width: 100%;
            margin-top: 20px;
            
        }
        & p {
            width: 100%;
            color: ${colors.DANGER};
        }

        & button {
            margin-top: 30px;
        }
    }
`;

class SignUpForm extends Component {
    state = {
        isError: false,
        errorMsg: "",
    }

    backButtonHandle = () => {
        this.setState({
            isError: false,
            errorMsg: "",
        });
    }

    render() {
        return (
            <FormWrapper>
                {this.state.isError 
                    ? <ModalErrorMessage
                        message={this.state.errorMsg}
                        back={this.backButtonHandle}
                      />
                    : null
                }
                <Formik
                    initialValues={{
                        email: "",
                        username: "",
                        password: "",
                        confirm_password: "",
                    }}
                    validationSchema={SingUpSchema}
                    onSubmit={values => {
                        if ((this.props.users.findIndex(x => x.username === values.username) !== -1) && (this.props.users.findIndex(x => x.email === values.email) !== -1)){
                            this.setState({
                                isError: true,
                                errorMsg: "Email and username already in use. Please choose another one.",
                            });
                        } else if (this.props.users.findIndex(x => x.email === values.email) !== -1) {
                            this.setState({
                                isError: true,
                                errorMsg: "Email already in use. Please choose another one.",
                            });
                        } else if (this.props.users.findIndex(x => x.username === values.username) !== -1) {
                            this.setState({
                                isError: true,
                                errorMsg: "Username already in use. Please choose another one.",
                            });
                        }else {
                            const userData = {
                                email: values.email, 
                                username: values.username, 
                                password: passwordHash.generate(values.password),
                                orders: [],
                            }
                            this.props.onSignUpUser(userData);
                            this.props.close();
                        }
                    }}
                    render={() => (
                        <Form className="form-wrapper">
                            <Field
                                name="email"
                                placeholder="Email"
                                type="email"
                            />
                            <p><ErrorMessage name="email" /></p>

                            <Field 
                                name="username" 
                                placeholder="Username" 
                                type="text"
                            />
                            <p><ErrorMessage name="username" /></p>

                            <Field 
                                name="password"
                                placeholder="Password"
                                type="password" />
                            <p><ErrorMessage name="password" /></p>

                            <Field 
                                name="confirm_password"
                                placeholder="Confirm password"
                                type="password" />
                            <p><ErrorMessage name="confirm_password" /></p>

                            <Button type="submit">Submit</Button>
                        </Form>
                    )}
                />
            </FormWrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.user.users,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSignUpUser: (userInfo) => dispatch(actions.signUpUser(userInfo)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);