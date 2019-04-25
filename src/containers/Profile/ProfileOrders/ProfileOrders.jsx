import React, { PureComponent } from 'react';

import { 
    ProfileInfoHeaderWrapper, ProfileInfoHeader,
 } from '../styled';

class ProfileOrders extends PureComponent {
    render() {
        return(
            <ProfileInfoHeaderWrapper>
                <ProfileInfoHeader>Orders</ProfileInfoHeader>
            </ProfileInfoHeaderWrapper>
        )
    }
};

export default ProfileOrders;