import React from 'react';
import Product from './ProductComponent';


export default ({ products, actions }) => {
    return (
        <div className="products-container">
            { products.map( (product, index) =>
                <Product
                    title={ product.title }
                    imgUrl={ product.imgUrl }
                    description={ product.description }
                    cost={ product.cost }
                    key={ index }
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