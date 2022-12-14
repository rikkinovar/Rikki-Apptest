import {connect} from 'react-redux';
import ContactList from '../components/ContactList';

const mapStateToProps = (state: any) => ({
  getContact: state.getContact,
  deleteContact: state.deleteContact,
});

const mapDispatchToProps = (dispatch: any) => ({
  onCallApi: (object: any) => dispatch(object),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
