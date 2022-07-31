import {connect} from 'react-redux';
import ContactForm from '../components/ContactForm';

const mapStateToProps = (state: any) => ({
  addContact: state.addContact,
});

const mapDispatchToProps = (dispatch: any) => ({
  onCallApi: (object: any) => dispatch(object),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
