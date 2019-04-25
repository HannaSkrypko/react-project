import React from 'react';
import styled from 'styled-components';

import * as colors from '../../constants/colors';

export default ( props ) => {

    const CloseButton = styled.button`
        position: absolute;
        top: 20px;
        right: 20px;
        background-color: transparent;
        border: none;
        color: ${colors.GRAY};

        &:hover {
            color: ${colors.DANGER};
        }
    `;

    return(
        <CloseButton {...props}> X </CloseButton>
    )
}
