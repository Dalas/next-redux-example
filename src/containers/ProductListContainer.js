/**
 * Created by yura on 16.12.16.
 */

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductListComponent from '../components/ProductListComponent';
import * as actions from '../actions/CartActions';

const mapStateToProps = ( state ) => {
    console.log({...state['plReducer'], ...state['pcReducer']})
    return {...state['plReducer'], ...state['pcReducer']};
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};

const ProductListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)( ProductListComponent );

export default ProductListContainer;