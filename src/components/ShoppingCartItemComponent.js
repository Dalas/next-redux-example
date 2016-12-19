/**
 * Created by yura on 16.12.16.
 */

import React from 'react';


export default ({ title, count, cost, incrementCount, decrementCount }) => {
    return (
        <div>
            <p className="title">{ title }</p>
            <p>Cost: ${ parseFloat(cost).toFixed(2) }</p>
            <p>Count: <i className="fa fa-minus-square" onClick={ decrementCount } /> { count } <i className="fa fa-plus-square" onClick={ incrementCount } /></p>
            <p>Total cost: ${ parseFloat(cost * count).toFixed(2) }</p>

            <style jsx>{`
                div {

                }
                i {
                    cursor: pointer;
                }
                p {
                    margin-top: 8px;
                    margin-bottom: 8px;
                }
                .title {
                    text-decoration: underline;
                    font-size: 18px;
                    font-weight: bold;
                }
            `}</style>
        </div>
    )
}