import styled from 'styled-components';

import * as colors from '../../../constants/colors';

export const CartItemWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-bottom: 10px;

    &:nth-child(2n) {
        background-color: ${colors.DEFAULT_WHITE};
    }
`;

export const CartItemHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: thin solid ${colors.GRAY};
    padding: 10px 15px 0;

    & h4 {
        font-weight: 600;
    }
`;

export const CartItemDelete = styled.button`
    background: transparent;
    border: none;
    font-weight: normal;

    &:hover,
    &:focus {
        color: ${colors.DANGER};
    }
`;

export const CartItemQuantity = styled.div`
    display: flex;
    padding-left: 15px;
`;

export const QuantityButton = styled.button`
   background: transparent;
    border: none;
`;

export const QuantityField = styled.p`
    width: 45px;
    text-align: center;
`;

export const CartItemPrice = styled.h3`
    padding-right: 15px;
    font-weight: 600; 
`;