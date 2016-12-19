/**
 * Created by yura on 16.12.16.
 */

import React from 'react';
import ShoppingCartItem from './ShoppingCartItemComponent';


export default ({ productsInCart, actions }) => {
    console.log(productsInCart);
    return (
        <div className="sc-container">
            <p className="summ-cost">Summ: { 12 } $</p>

            { Object.keys( productsInCart ).map(function(key){
                return (
                    <ShoppingCartItem
                        title={ productsInCart[key].title }
                        count={ productsInCart[key].count }
                        incrementCount={ () => actions.incrementProductCount( productsInCart[key].id ) }
                        decrementCount={ () => actions.decrementProductCount( productsInCart[key].id ) }
                        key={ key }
                    />
                )
            }) }

            <style jsx>{`
                .sc-container {
                    width: 200px;
                    border: 1px solid black;
                    min-height: 10px;
                    padding: 20px 25px;
                    display: inline-block;
                    vertical-align: top;
                }

                .summ-cost {
                    margin-top: 0;
                }
            `}</style>
        </div>
    )
}