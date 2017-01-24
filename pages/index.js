import React from 'react'
import Head from 'next/head';
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import store from '../src/store/mainStore';
import * as actions from './../src/actions/Actions'

const mapStateToProps = ( state ) => {
    return {...state};
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};
class PageContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                <div className="divider"></div>
                <div className="row">
                    <div className="col-xs-12">
                        <h5>Add students task</h5>
                    </div>
                    <div className="col-xs-6">
                        <div className="row">

                            <div className="input-field col s12">
                                <select value={this.props.group.currentGroup}>
                                    <option value="" disabled selected>Choose group</option>
                                    {this.props.group.groups.map((item)=> <option value={item.id}>{item.title}</option>)}
                                </select>
                                <label>Select a group</label>
                            </div>

                            <div className="input-field col s12">
                                <select>
                                    <option value="" disabled>Choose task</option>
                                    {this.props.tasks.tasks.map((item)=> <option value={item.id}>{item.title}</option>)}
                                </select>
                                <label>Select a task for group</label>
                            </div>

                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="row">
                            <div className="input-field col s12">
                                <input value="" id="first_name2" type="text" className="validate" />
                                <label className="active" for="first_name2">Title</label>
                            </div>
                            <div className="input-field col s12">
                                <textarea id="textarea1" className="materialize-textarea"/>
                                <label for="textarea1">Text</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <a className="waves-effect waves-light btn" style={{marginRight: "10px"}}>Add</a>
                        <a className="waves-effect waves-light btn" style={{marginRight: "10px"}}>Delete</a>
                        <a className="waves-effect waves-light btn" style={{marginRight: "10px"}}>Save</a>
                    </div>
                </div>

            </div>
        );

    }
}

const PageContainerConnected = connect(
    mapStateToProps,
    mapDispatchToProps
)( PageContainer );

class Container extends React.Component {
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
    componentDidMount(){
        $(document).ready(function() {
            $('select').material_select();
        });
    }
    render() {
        return (

                <div className="main">
                    <Head>
                        <title>My page title</title>
                        <meta charSet="utf-8"/>
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
                    <Provider store={this.store}>
                        <PageContainerConnected />
                    </Provider>

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

export default Container;