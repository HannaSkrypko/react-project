import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import * as actions from '../../store/action/allActions';

const CartWrapper = styled.div`
    width: 300px;
    height: 400px;
    overflow-y: auto;
    position: absolute;
    top: 50px;
    right: 50px;
    background: white;
    padding: 30px 0px;
    border: thin solid #f9f9f9;
    box-shadow: 0 0 10px 5px rgba(0,0,0,0.2);

    & h4 {
        display: block;
        padding: 10px 20px;
        
        &:nth-child(2n) {
            background-color: #f9f9f9;
        }
    }
`;

const CartTitle = styled.h1`
    padding-left: 20px;
    margin-bottom: 10px;
`;

class Cart extends PureComponent {
    state = {
        cart: this.props.cart,
    }
    
    
    render() {
        let cartProductList = null;
        if (this.state.cart) {
            cartProductList = this.state.cart.map((item, index) => {
                return (
                    <h4 key={item.index}>{item.name}</h4>
                )
            })
        }
        console.log(this.props.cart);
        return(
            <CartWrapper>
                <CartTitle>Cart</CartTitle>
                {cartProductList}
            </CartWrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        cart: state.catalog.cart,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRemoveFromCart: ((productId) => dispatch(actions.removeFromCart(productId))),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);