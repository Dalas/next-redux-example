/**
 * Created by yura on 19.12.16.
 */

import React from 'react';

export default class extends React.Component {
    constructor (props) {
        super(props);

        this.handlePromoCodeInputChange = this.handlePromoCodeInputChange.bind(this);
        this.handlePromoCodeEnter = this.handlePromoCodeEnter.bind(this);

        this.state = { promoCode: props.promoCode };
    }

    handlePromoCodeInputChange(event) {
        this.setState({
            promoCode: event.target.value
        })
    }

    handlePromoCodeEnter() {
        this.props.handlePromoCodeEnter( this.state.promoCode )
    }

    render() {
        return (
            <div className="pc-container">
                <p className="current-discount">Current discount: { this.props.discount }%</p>
                <p>Promo Code:</p>
                <p><input type="text" name="promo-code" onChange={ this.handlePromoCodeInputChange } /></p>
                <button onClick={ this.props.handlePromoCodeEnter( ) }>Enter</button>

                <style jsx>{`
                    .pc-container {
                        width: 100%;
                        border: 1px solid black;
                        min-height: 10px;
                        padding: 20px 25px;
                        display: inline-block;
                        vertical-align: top;
                        margin-top: 10px;
                    }

                    .current-discount {
                        margin: 0;
                    }

                    input {
                        width: 100%;
                        padding: 5px 8px;
                        box-sizing: border-box;
                        font-size: 16px;
                    }

                    button {
                        width: 100%;
                        border: 0;
                        padding: 8px;
                        color: #ffffff;
                        font-weight: bold;
                        font-size: 14px;
                        background-color: #0a9a0a;
                        cursor: pointer;
                    }
                `}</style>
            </div>
        )
    }
}