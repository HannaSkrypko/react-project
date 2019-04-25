import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, CloseButton } from '../../UI';
import Styled from './styled';
import * as actions from '../../store/action/allActions';
import CartItem from './CartItem';


class Cart extends Component {
    removeItemHandler = ( product ) => {
        let index = this.props.cart.findIndex(x=> x === product);
        if (index !== -1) {
            this.props.onRemoveFromCart(index);
        }
    }
    
    render() {
        let isCartEmpty;
        this.props.cart.length===0 ? isCartEmpty = true : isCartEmpty = false;

        let cartProductList = null;
        if (this.props.cart) {
            cartProductList = this.props.cart.map((item, index) => {
                return (
                    <CartItem 
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                        removeItem={() => this.removeItemHandler(item)}
                        incrementCartItem={() => this.props.onIncrementCartItem(item.id)}
                        decremetCartItem={() => this.props.onDecrementCartItem(item.id)}
                    />
                )
            })
        }
        
        return(
            <Styled.CartWrapper>
                <CloseButton onClick={this.props.toggleCart}/>
                <Styled.CartTitle>Cart</Styled.CartTitle>
                <Styled.CartListItems>
                    {cartProductList}
                </Styled.CartListItems>
                <Styled.OrderButtonWrapper>
                    <Button isDisabled={isCartEmpty}>Order</Button>
                </Styled.OrderButtonWrapper>
            </Styled.CartWrapper>
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
        onRemoveFromCart: (productId) => dispatch(actions.removeFromCart(productId)),
        onIncrementCartItem: (productId) => dispatch(actions.incrementCartItem(productId)),
        onDecrementCartItem: (productId) => dispatch(actions.decrementCartItem(productId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);