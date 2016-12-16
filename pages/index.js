import React from 'react'
import { Provider } from 'react-redux';
import store from '../src/store/Store';
import ProductList from '../src/containers/ProductListContainer';


export default class extends React.Component {
    state = {
        products: [
            {
                title: 'P1',
                imgUrl: '/static/product1.png',
                description: 'Some description',
                cost: 10
            },
            {
                title: 'P2',
                imgUrl: '/static/product2.png',
                description: 'Some description',
                cost: 12
            },
            {
                title: 'P3',
                imgUrl: '/static/product3.png',
                description: 'Some description',
                cost: 20
            }
        ]
    };
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
            <Provider store={ store }>
                <ProductList />
            </Provider>
        )
    }
}