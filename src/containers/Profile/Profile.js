import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import {
    ProfileWrapper,
} from './styled';
import ProfileInfo from './ProfileInfo';
import ProfileOrders from './ProfileOrders';
import { NavLink } from 'react-router-dom';
import { Icon } from 'antd';

import * as actions from '../../store/action/allActions';

class Profile extends PureComponent {
    
    render() {
        return(
            <ProfileWrapper>
                <NavLink to='/' exact><Icon type="arrow-left" /> Back To Catalog</NavLink>
                
                <ProfileInfo 
                    users={this.props.users}
                    currentUser={this.props.currentUser}
                />
                <ProfileOrders />

            </ProfileWrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.user.users,
        currentUser: state.user.currentUser,
    }
}

const mapDispatchToProps = dispatch => {
    return null
}

export default connect(mapStateToProps, null)(Profile);