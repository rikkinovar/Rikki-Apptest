import {connect} from 'react-redux';
import ContactForm from '../components/ContactForm';

const mapStateToProps = (state: any) => ({
  addContact: state.addContact,
  updateContact: state.updateContact,
});

const mapDispatchToProps = (dispatch: any) => ({
  onCallApi: (object: any) => dispatch(object),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
