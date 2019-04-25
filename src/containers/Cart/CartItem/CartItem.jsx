import React, { PureComponent } from 'react';
import { Icon } from 'antd';

import {
    CartItemWrapper, 
    CartItemHeader, CartItemDelete,
    CartItemQuantity, QuantityButton, QuantityField, 
    CartItemPrice
} from './styled';

class CartItem extends PureComponent {

    render() {
        return(
            <CartItemWrapper>
                <CartItemHeader>
                    <h4>{this.props.name}</h4>
                    <CartItemDelete><Icon type="delete" onClick={this.props.removeItem}/></CartItemDelete>
                </CartItemHeader>
                <CartItemQuantity>
                    <QuantityButton><Icon type="minus-circle" onClick={this.props.decremetCartItem}/></QuantityButton>
                    <QuantityField> {this.props.quantity} </QuantityField>
                    <QuantityButton><Icon type="plus-circle" onClick={this.props.incrementCartItem}/></QuantityButton>
                </CartItemQuantity>
                <CartItemPrice>{(this.props.price * this.props.quantity).toFixed(2)}</CartItemPrice>
            </CartItemWrapper>
        )
    }
    
}

export default CartItem;