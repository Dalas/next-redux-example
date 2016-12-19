/**
 * Created by yura on 16.12.16.
 */

import React from 'react';


export default ({ title, count, maxCount, cost, incrementCount, decrementCount }) => {
    return (
        <div>
            <p className="title">{ title }</p>
            <p>Cost: ${ parseFloat(cost).toFixed(2) }</p>
            <p>
                Count:
                &nbsp;{ count > 1 ? <i className="fa fa-minus-square" onClick={ decrementCount } /> : ''}
                &nbsp;{ count }
                &nbsp;{ count < maxCount ? <i className="fa fa-plus-square" onClick={ incrementCount } /> : ''}
            </p>
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