import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {ProductsScreen} from '../../views';
import {fetchProducts, addProduct} from '../../actions';

const mapStateToProps = state => ({
  isLoading: state.products.isLoading,
  data: state.products.products,
  cartData: state.products.cartProducts,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({fetch: fetchProducts, add: addProduct}, dispatch);

export const ConnectedProductsScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsScreen);
