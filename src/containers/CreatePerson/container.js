import { connect } from 'react-redux';
import CreatePerson from 'components/CreatePerson';
import actions from 'store/features/updateCompany/actions'

const mapDispatchToProps = dispatch => ({
	addPerson: (personDetails,company) => dispatch(actions.addPerson(personDetails,company)),
	
});

const mapStateToProps = state => ({companies: state.companies});


export default connect(mapStateToProps, mapDispatchToProps)(CreatePerson);

