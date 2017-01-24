/**
 * Created by yura on 19.12.16.
 */

import GroupsComponent from '../components/GroupsComponent';
import { connect } from 'react-redux';
import { changeGroup } from '../actions/Actions';

const mapStateToProps = ( state ) => {
    return { ...state.group };
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        handleGroupChange: ( id ) => dispatch(changeGroup( id ))
    }
};

const PromoCodeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)( GroupsComponent );

export default PromoCodeContainer;
