import React, { PureComponent } from 'react';

import {
    ProfileInfoHeaderWrapper, ProfileInfoHeader, 
    ProfileInfoWrapper, ProfileInfoImage, ProfileInformation,
    ProfileInfoLine, ProfileInfoLabel, ProfileInfoField
} from '../styled';
import ProfileInfoForm from './ProfileInfoForm.jsx';
import { Button } from '../../../UI';
import userPhoto from '../../../assets/user.png';

class ProfileInfo extends PureComponent {
    state = {
        isEditMode: false,
        errorMsg: "",
    }

    toggleEditModeHandler = () => {
        this.setState(state => ({
            isEditMode: !state.isEditMode,
        }))
    }

    render() {
        console.log(this.props.currentUser);
        const userData = <ProfileInformation>
                            <ProfileInfoLine>
                                <ProfileInfoLabel>User:</ProfileInfoLabel>
                                <ProfileInfoField username>{this.props.currentUser.username}</ProfileInfoField>
                            </ProfileInfoLine>

                            <ProfileInfoLine>
                                <ProfileInfoLabel>email:</ProfileInfoLabel>
                                <ProfileInfoField >{this.props.currentUser.email}</ProfileInfoField>
                            </ProfileInfoLine>
                         </ProfileInformation>
            
        const userForm = <ProfileInformation>
                            <ProfileInfoForm 
                                toggleEditMode={this.toggleEditModeHandler}
                                user={this.props.currentUser}
                            />
                         </ProfileInformation>
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
                    {this.state.isEditMode
                        ? userForm
                        : userData
                    }
                    
                </ProfileInfoWrapper>
            </div>
        )
    }
};

export default ProfileInfo;