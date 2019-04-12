import React, { Component } from 'react';

import {
    HeaderNav,HeaderDecoration, HeaderNavList, HeaderNavitem,н
} from './styled';

export default class Header extends Component {
    render() {
        return(
            <HeaderNav>
                <HeaderDecoration><span className="gold">internal</span> <br /> shop</HeaderDecoration>
                <HeaderNavList>
                    <HeaderNavitem>Sign Up</HeaderNavitem>
                    <HeaderNavitem>Sign In</HeaderNavitem>
                </HeaderNavList>
            </HeaderNav>
        )
    }
};