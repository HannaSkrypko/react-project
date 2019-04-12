import styled from 'styled-components';

import * as colors from '../../constats/colors';

export const HeaderNav = styled.nav`
    position: relative;
    width: 100%;
    overflow-x: hidden;
    padding-top: 15px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderDecoration = styled.div`
    position: absolute;
    width: 26%;
    padding-left: 12%;

    font-size: 1.5em;
    font-weight: 500;
    color: ${colors.DEFAULT_WHITE};
    text-transform: uppercase;

    clip-path: polygon(0 0, 100% 0, 70% 100%, 0 100%);

    background-color: ${colors.DEFAULT_BLACK};

    & .gold {
        font-weight: 600;
        color: ${colors.GOLD};
    }
`;

export const HeaderNavList = styled.ul`
    background-color: ${colors.DEFAULT_WHITE};
    height: 50px;
    width: 79%;
    margin-left: auto;
    padding-right: 50px;
    clip-path: polygon(0 100%, 7% 0, 100% 0, 100% 100%);
    display: flex;
    justify-content: flex-end;
`; 

export const HeaderNavitem = styled.li`
    position: relative;
    display: inline-block;
    height: 50px;
    line-height: 50px;
    padding: 0 10px;
    cursor: pointer;

    &:last-child::before {
        content: "/";
        position: absolute;
        top: 0px;
        left: -2px;
    }

    &:hover {
        color: ${colors.GOLD};

        &:last-child::before {
            color: ${colors.DEFAULT_BLACK};
        }
    }
`; 
