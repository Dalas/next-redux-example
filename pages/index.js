import React from 'react'
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '../src/store/mainStore';


export default class extends React.Component {
    constructor(props) {
        super(props);

        this.store = store;
    }

    static async getInitialProps({req}) {
        const isServer = !!req;
        return {
            isServer: isServer
        }
    }

    render() {
        return (
            <div className="main">
                <Head>
                    <title>My page title</title>
                    <meta charset="utf-8"/>
                        <title>Course project constructor</title>

                        <link href="/static/css/bootstrap.grid.css" rel="stylesheet" />
                        <link href="/static/css/materialize.min.css" rel="stylesheet" />
                        <link href="/static/css/styles.css" rel="stylesheet" />

                        <script src="/static/js/jq.js"></script>
                        <script src="/static/js/init.js"></script>
                        <script src="/static/js/materialize.min.js"/>
                </Head>

                <nav className="teal lighten-1" role="navigation">
                    <div className="nav-wrapper container-big"><a id="logo-container" href="/" className="brand-logo">Digital Education</a>
                        <ul className="right hide-on-med-and-down">
                            <li className="waves-effect waves-light"><a href="#">About Us</a></li>
                            <li className="waves-effect waves-light"><a href="/login">Login</a></li>
                        </ul>

                        <ul id="nav-mobile" className="side-nav">
                            <li><a href="#">Navbar Link</a></li>
                            <li><a href="/login">Login</a></li>
                        </ul>
                        <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
                    </div>
                </nav>

                <div className="container-big">

                </div>

                <footer className="page-footer teal">
                    <div className="container-big">
                        <div className="row shades-text text-white">
                            Nure
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}