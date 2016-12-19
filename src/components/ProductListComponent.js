import React from 'react';
import Product from './ProductComponent';


export default ({ products, actions }) => {
    console.log(products);
    return (
        <div className="products-container">
            { products.map( (product, index) =>
                <Product
                    title={ product.title }
                    imgUrl={ product.imgUrl }
                    description={ product.description }
                    cost={ product.cost }
                    added={ product.addedToCart }
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