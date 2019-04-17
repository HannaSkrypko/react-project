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
        background-color: transparent;
        border: thin solid ${colors.GOLD};
        
        &:hover,
        &:focus {
            background-color: ${colors.GOLD};
            color: ${colors.DEFAULT_WHITE};
        }
    `;
    return(
        <Button {...props}/>
    )
}

