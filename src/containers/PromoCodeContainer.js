/**
 * Created by yura on 19.12.16.
 */

import PromoCodeComponent from '../components/PromoCodeComponent';
import { connect } from 'react-redux';
import { handlePromoCodeEnter } from '../actions/CartActions';

const mapStateToProps = ( state ) => {
    return state['pcReducer'];
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        handlePromoCodeEnter: (promoCode) => dispatch(handlePromoCodeEnter(promoCode))
    }
};

const PromoCodeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)( PromoCodeComponent );

export default PromoCodeContainer;
