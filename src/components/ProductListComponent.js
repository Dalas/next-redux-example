import React from 'react';
import Product from './ProductComponent';


export default ({ products }) => {
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
                    display: flex;
                    width: 700px;
                    justify-content: space-between;
                }
            `}</style>
        </div>
    )
}