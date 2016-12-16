import React from 'react'
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '../src/store/Store';
import ProductList from '../src/containers/ProductListContainer';
import ShoppingCart from '../src/components/ShoppingCartComponent';


export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps({req}) {
        const isServer = !!req;
        return {
            isServer: isServer
        }
    }

    render() {
        return (
            <div>
                <Head>
                    <title>My page title</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link rel="stylesheet" href="/static/css/font-awesome.min.css" />
                </Head>

                <Provider store={ store }>
                    <ProductList />
                </Provider>
                <ShoppingCart />

                <style jsx>{`
                    div {
                        display: flex;
                        justify-content: space-around;
                        width: 1000px;
                        margin: 0 auto;
                    }
                `}</style>
            </div>
        )
    }
}