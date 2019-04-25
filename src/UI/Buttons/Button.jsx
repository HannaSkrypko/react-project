import React from 'react';
import styled from 'styled-components';

import * as colors from '../../constants/colors';

export default ( props ) => {
    const elemWidth = props.width || "auto";

    const Button = styled.button`
        height: 40px;
        width: ${elemWidth};
        min-width: 150px;
        text-align: center;
        background-color: ${props => (props.isDisabled ? colors.GRAY : "transparent")};
        color: ${props => (props.isDisabled ? colors.DEFAULT_WHITE : "inherit")};
        border: thin solid ${props => (props.isDisabled ? colors.GRAY : colors.GOLD)};;
        pointer-events: ${props => (props.isDisabled ? "none" : "auto")};

        cursor: ${props => (props.isDisabled ? "not-allowed" : "pointer")};
        
        &:hover,
        &:focus {
            background-color:  ${props => (props.isDisabled ? colors.GRAY : colors.GOLD)};
            color: ${colors.DEFAULT_WHITE};
        }
    `;
    return(
        <Button {...props}/>
    )
}

