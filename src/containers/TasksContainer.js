/**
 * Created by yura on 16.12.16.
 */

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TasksComponent from '../components/TasksComponent';
import * as actions from '../actions/Actions';

const mapStateToProps = ( state ) => {
    return { ...state.tasks, ...state.group };
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};

const ProductListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)( TasksComponent );

export default ProductListContainer;