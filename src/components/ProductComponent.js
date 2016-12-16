/**
 * Created by yura on 16.12.16.
 */

import React from 'react';


export default ({ title, imgUrl, description, cost }) => {
    return (
        <div className="productWrapper">
            <h2>{ title }</h2>
            <div className="imageWrapper">
                <img src={ imgUrl } />
            </div>
            <p>Cost: { cost }$</p>
            <p>{ description }</p>
            <button>Add to cart!</button>

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
                    background-color: #0a9a0a;
                    border: 0;
                    padding: 8px;
                    color: #ffffff;
                    font-weight: bold;
                    font-size: 14px;
                    cursor: pointer;
                }

                .productWrapper {
                    width: 200px;
                    background: #e2e2e2;
                    padding: 10px;
                    border-radius: 1px;
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