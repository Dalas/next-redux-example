import React from 'react';
import Product from './ProductComponent';


export default ({ products, discount, actions }) => {
    return (
        <div className="products-container">
            { products.map( (product, index) =>
                <Product
                    product={ product }
                    discount={ discount }
                    key={ index }
                    addToCart={() => actions.addToCart( product ) }
                    removeFromCart={() => actions.removeFromCart( product )}
                />
            ) }

            <style jsx>{`
                .products-container {
                    display: inline-block;
                    width: 700px;
                    text-align: justify;
                }
            `}</style>
        </div>
    )
}