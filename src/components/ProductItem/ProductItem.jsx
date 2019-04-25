import React from 'react';
import styled from 'styled-components';

import { Button } from '../../UI';
import * as colors from '../../constants/colors';

const ProductWrapper = styled.div`
    width: 24%;
    margin-left: 100px;
    padding: 10px 20px;
    margin-bottom: 50px;
    display: inline-block;

    &:hover {
        box-shadow: 0 0 12px 3px rgba(0,0,0,.1);
    }
`;

const ButtonWrapper = styled.div`
    text-align: right;
    margin-top: 10px;
`;

const ProductItem = ( props ) => {
    return(
        <ProductWrapper>
            <img src={props.img} alt="product image" />
            <h3>{props.name}</h3>
            <h2>${props.price}</h2>
            <ButtonWrapper>
                <Button onClick={props.addToCart}> Add To Cart </Button>
            </ButtonWrapper>
        </ProductWrapper>
    )
}

export default ProductItem;