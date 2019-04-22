import React, { PureComponent } from 'react';

import {
    ProfileInfoHeaderWrapper, ProfileInfoHeader, 
    ProfileInfoWrapper, ProfileInfoImage, ProfileInformation,
    ProfileInfoLine, ProfileInfoLabel, ProfileInfoField, ProfileInfoInput,
    ProfileInfoLinePassword, ProfileInfoError,
} from '../styled';
import { Button } from '../../../UI';
import userPhoto from '../../../assets/user.png';

class ProfileInfo extends PureComponent {
    state = {
        isEditMode: false,
        username: this.props.currentUser.username,
        email: this.props.currentUser.email,
        password: this.props.currentUser.password,
        value: {
            username: this.props.currentUser.username,
            email: this.props.currentUser.email,
            password: "",
            confirm_password: "",
        },
        errorMsg: "",
    }

    toggleEditModeHandler = () => {
        this.setState(state => ({
            isEditMode: !state.isEditMode,
        }))
    }

    inputOnChangeHandler = (e) => {
        const {name, value} = e.target;
        let newArr = {...this.state.value};
        newArr[name] = value;
        this.setState(state => ({
            value: newArr,
        }))
    }

    changeProfileInfoHandler = () => {
        if (this.state.value.username && (this.state.value.username !== this.state.username) && ((this.props.users.findIndex(x => x.username === this.state.value.username) === -1))) {
            this.setState( state => ({
                username: state.value.username,
                isEditMode: false,
            }));
        }
        if (this.state.value.email && (this.state.value.email !== this.state.email) && ((this.props.users.findIndex(x => x.email === this.state.value.email) === -1))) {
            this.setState( state => ({
                username: state.value.username,
                isEditMode: false,
            }));
        }
        if (this.state.value.password && this.state.value.confirm_password && (this.state.value.password === this.state.value.confirm_password)) {
            this.setState( state => ({
                password: state.value.password,
                isEditMode: false,
            }));
        }
        
        // this.setState( state => ({
        //     isEditMode: false,
        // }));
    }

    render() {
        return(

            <div>
                <ProfileInfoHeaderWrapper>
                    <ProfileInfoHeader>Profile Information</ProfileInfoHeader>
                    <Button type="submit" onClick={this.toggleEditModeHandler}>Edit</Button>
                </ProfileInfoHeaderWrapper>

                <ProfileInfoWrapper>
                    <ProfileInfoImage>
                        <img src={userPhoto} alt="User image"/>
                    </ProfileInfoImage>
                    <ProfileInformation>
                        <ProfileInfoLine>
                            <ProfileInfoLabel>User:</ProfileInfoLabel>
                            {this.state.isEditMode
                                ? <ProfileInfoInput 
                                    type="text" 
                                    name="username" 
                                    value={this.state.value.username}
                                    onChange={(e) => this.inputOnChangeHandler(e)}
                                  />
                                : <ProfileInfoField username>{this.state.username}</ProfileInfoField>
                            }
                        </ProfileInfoLine>

                        <ProfileInfoLine>
                            <ProfileInfoLabel>email:</ProfileInfoLabel>
                            {this.state.isEditMode
                                ? <ProfileInfoInput 
                                    type="email" 
                                    name="email" 
                                    value={this.state.value.email}
                                    onChange={(e) => this.inputOnChangeHandler(e)}
                                  />
                                : <ProfileInfoField >{this.state.email}</ProfileInfoField>
                            }
                        </ProfileInfoLine>

                        {!this.state.isEditMode 
                            ? null
                            : <ProfileInfoLinePassword>
                                <input 
                                    type="password" 
                                    name="password" 
                                    value={this.state.value.password}
                                    placeholder="old password"
                                    className="password"
                                    onChange={(e) => this.inputOnChangeHandler(e)}
                                />
                                <input 
                                    type="password" 
                                    name="confirm_password" 
                                    value={this.state.value.confirm_password}
                                    placeholder="new password"
                                    className="password"
                                    onChange={(e) => this.inputOnChangeHandler(e)}
                                />
                            </ProfileInfoLinePassword>
                        }

                        {!this.state.isEditMode
                            ? null
                            : <div>
                                <Button type="submit" onClick={this.changeProfileInfoHandler}>Save</Button>
                                <ProfileInfoError> {}</ProfileInfoError>
                              </div>
                        }
                    </ProfileInformation>
                </ProfileInfoWrapper>
            </div>
        )
    }
};

export default ProfileInfo;