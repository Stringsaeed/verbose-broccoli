import {connect} from 'react-redux';

import {addData} from '../../actions';
import {bindActionCreators} from 'redux';
import {FormScreen} from '../../views/formScreen';

const mapStateToProps = state => ({
  name: state.form.name,
  savingIsLoading: state.form.savingIsLoading,
  savingSuccess: state.form.savingSuccess,
});

const mapDispatchToProps = dispatch => bindActionCreators({addData}, dispatch);

export const FormScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormScreen);
