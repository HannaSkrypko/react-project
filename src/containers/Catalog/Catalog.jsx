import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { Button } from '../../UI';
import products from '../../constants/products';
import ProductItem from '../../components/ProductItem';
import * as colors from '../../constants/colors';
import * as actions from '../../store/action/allActions';

const CatalogWrapper = styled.div`
    width: 90%;
    min-width: 1075px;
    margin: 50px auto;
`;


class Catalog extends PureComponent {

    addToCartHandler = ( product, productId ) => {
        if (this.props.cart.findIndex(item => item.id === productId) !== -1) {
            this.props.onIncrementCartItem(productId);
        } else {
            this.props.onAddToCart(product);
        }
    } 

    render() {
        
        return(
            <CatalogWrapper>
                
                {products.map((product, index) => {
                    return (
                        <ProductItem 
                            key={product.id} 
                            img={product.img}
                            name={product.name}
                            price={product.price}
                            addToCart={() => this.addToCartHandler(product, product.id)}
                        />
                    )
                })}
            </CatalogWrapper>
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
        onAddToCart: (product) => dispatch(actions.addToCart(product)),
        onIncrementCartItem: (productId) => dispatch(actions.incrementCartItem(productId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);