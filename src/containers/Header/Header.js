import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Icon } from 'antd';

import {
    HeaderNav,HeaderDecoration, HeaderNavList, HeaderNavitem,н
} from './styled';


import SignUpModal from '../../components/SignUpModal';
import SignInModal from '../../components/SignInModal';
import Cart from '../Cart';
import * as actions from '../../store/action/allActions';

class Header extends PureComponent {
    state = {
        modals: {
            signup: false,
            signin: false,
        }, 
        isCartOpen: false,           
    }

    modalsActions = {
        openModal: (modalName) => {
            !this.state.modals[modalName]
                ? this.setState({
                    modals: {
                        [modalName]: true,
                    }
                }) : null;
        },
        closeModal: (modalName) => {
            this.state.modals[modalName]
                ? this.setState({
                    modals: {
                        [modalName]: false,
                    }
                }) : null;
        }
    }

    toggleCartHandler = () => {
        this.setState(state => ({
            isCartOpen: !state.isCartOpen
        }));
    }
    
    render() {
        return(
            <div>
            <HeaderNav>
                <HeaderDecoration><span className="gold">internal</span> <br /> shop</HeaderDecoration>
                {!this.props.currentUser 
                    ? (
                    <HeaderNavList>
                        <HeaderNavitem onClick={()=>this.modalsActions.openModal("signup")}>Sign Up</HeaderNavitem>
                        <HeaderNavitem onClick={()=>this.modalsActions.openModal("signin")}>Sign In</HeaderNavitem>
                    </HeaderNavList>
                    )
                    : (
                    <HeaderNavList>
                        <HeaderNavitem><NavLink to='/profile'><Icon type="user" title="Profile "/></NavLink></HeaderNavitem>
                        <HeaderNavitem><Icon type="shopping-cart" title="Shopping cart" onClick={this.toggleCartHandler}/> </HeaderNavitem>
                        <HeaderNavitem className="exitItem"><Icon type="export" title="Exit" onClick={() => this.props.onSetCurrentUser(null)}/> </HeaderNavitem>
                    </HeaderNavList>
                    )
                }
            </HeaderNav>

            {this.state.isCartOpen ? <Cart /> : null}
            
            {this.state.modals.signup ? <SignUpModal close={() => this.modalsActions.closeModal("signup")}/> : null}
            {this.state.modals.signin ? <SignInModal close={() => this.modalsActions.closeModal("signin")}/> : null}
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        currentUser: state.user.currentUser,
        users: state.user.users,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSetCurrentUser: (currentUser) => dispatch(actions.setCurrentUser(currentUser)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);