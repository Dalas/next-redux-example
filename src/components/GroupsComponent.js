/**
 * Created by yura on 16.12.16.
 */

import React from 'react';


export default ({ product, discount, addToCart, removeFromCart }) => {
    discount = parseFloat(product.cost * discount / 100).toFixed(2);

    return (
        <div className="productWrapper">
            <h2>{ product.title }</h2>
            <div className="imageWrapper">
                <img src={ product.imgUrl } />
            </div>
            <p>Cost: <span className={ discount > 0 ? 'red' : '' }>${ parseFloat(product.cost).toFixed(2) }</span><span className={ discount > 0 ? 'green' : 'hidden' }> ${ parseFloat(product.cost - discount).toFixed(2) } </span></p>
            <p>Available count: { product.availableCount }</p>
            <p>{ product.description }</p>

            <button className={ product.addedToCart ? 'remove' : 'add' } onClick={ product.addedToCart ? removeFromCart : addToCart } >{ product.added ? 'Remove from cart!' : 'Add to cart!' }</button>
        </div>
    )
}