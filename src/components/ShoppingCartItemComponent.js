/**
 * Created by yura on 16.12.16.
 */

import React from 'react';


export default ({}) => {
    return (
        <div>
            <p className="title">Name</p>
            <p>Count: <i className="fa fa-plus-square" /> 12 <i className="fa fa-minus-square" /></p>

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