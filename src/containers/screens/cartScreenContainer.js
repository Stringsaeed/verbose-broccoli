import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {removeProduct} from '../../actions';
import {CartScreen} from '../../views';

const mapStateToProps = state => ({
  data: state.products.products,
  cartData: state.products.cartProducts,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({removeProduct}, dispatch);

export const ConnectedCartScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartScreen);
