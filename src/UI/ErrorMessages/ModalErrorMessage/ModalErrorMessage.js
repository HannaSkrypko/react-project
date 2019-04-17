import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';

import * as colors from '../../../constants/colors';

export default ( props ) => {
    const ModalErrorMessage = styled.div`
        position: absolute;
        bottom: 0;
        left: 0;
        background: ${colors.DEFAULT_WHITE};
        height: 76%;
        width: 100%;
        padding: 50px 30px;
        text-align: justify;

        & i {
            padding-right: 10px;
        }
    `;

    return (
        <ModalErrorMessage {...props}>
            <h2>
                <Icon type="arrow-left" onClick={props.back}/>
                {props.message}
            </h2>
        </ModalErrorMessage>
    )
};