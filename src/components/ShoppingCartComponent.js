/**
 * Created by yura on 16.12.16.
 */

import React from 'react';
import ShoppingCartItem from './ShoppingCartItemComponent';


export default ({  }) => {
    return (
        <div className="sc-container">
            <p className="summ-cost">Summ: { 12 } $</p>

            <ShoppingCartItem />

            <style jsx>{`
                .sc-container {
                    width: 200px;
                    border: 1px solid black;
                    min-height: 10px;
                    display: inline-block;
                    vertical-align: top;
                }
            `}</style>
        </div>
    )
}