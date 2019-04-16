import React, { Component } from 'react';
import { Formik, FormikProps, Form, Field, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import passwordHash from 'password-hash';
import styled from 'styled-components';

import { Button, ModalErrorMessage} from '../../UI';
import { SingInSchema } from '../../constants/form-validation';
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

class SignInForm extends Component {
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
                        password: "",
                    }}
                    validationSchema={SingInSchema}
                    onSubmit={values => {
                        if (this.props.users.findIndex(x => x.email === values.email) !== -1 && this.props.users.findIndex(x => passwordHash.verify(values.password, x.password) === true) !== -1){
                            const userData = {
                                email: values.email, 
                                username: values.username,
                            }
                            this.props.onSetCurrentUser(userData);
                            this.props.close();
                            
                        } else {
                            this.setState({
                                isError: true,
                                errorMsg: "No user with this email or password. Please check your data and try again.",
                            });
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
                                name="password"
                                placeholder="Password"
                                type="password" />
                            <p><ErrorMessage name="password" /></p>

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
        onSetCurrentUser: (currentUser) => dispatch(actions.setCurrentUser(currentUser)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);