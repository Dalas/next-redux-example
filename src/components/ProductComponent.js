/**
 * Created by yura on 16.12.16.
 */

import React from 'react';


export default ({ title, availableCount, imgUrl, description, cost, added, discount, addToCart, removeFromCart }) => {
    return (
        <div className="productWrapper">
            <h2>{ title }</h2>
            <div className="imageWrapper">
                <img src={ imgUrl } />
            </div>
            <p>Cost: ${ cost }</p>
            <p>Discount: ${ parseFloat(cost * discount / 100) }</p>
            <p>Available count: ${ availableCount }</p>
            <p>{ description }</p>

            <button className={ added ? 'remove' : 'add' } onClick={ added ? removeFromCart : addToCart } >{ added ? 'Remove from cart!' : 'Add to cart!' }</button>

            <style jsx>{`
                h2 {
                    text-align: center;
                    margin-top: 10px;
                    text-decoration: underline;
                }

                p {
                    margin-top: 8px;
                    margin-bottom: 8px;
                }

                button {
                    width: 100%;
                    border: 0;
                    padding: 8px;
                    color: #ffffff;
                    font-weight: bold;
                    font-size: 14px;
                    cursor: pointer;
                }

                button.remove {
                    background-color: #d83838;
                }

                button.add {
                    background-color: #0a9a0a;
                }

                .productWrapper {
                    width: 200px;
                    background: #e2e2e2;
                    padding: 10px;
                    border-radius: 1px;
                    display: inline-block;
                    margin: 0 5px;
                }

                .imageWrapper {
                    width: 200px;
                    height: 200px;
                }

                .imageWrapper img {
                    width: 100%;
                    height: 100%;
                }
            `}</style>
        </div>
    )
}