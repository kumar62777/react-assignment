import { connect } from 'react-redux';
import CreateCompany from 'components/CreateCompany';
import actions from 'store/features/updateCompany/actions'

const mapDispatchToProps = dispatch => ({
	addCompany: (companyDetails) => dispatch(actions.addCompany(companyDetails)),
});




export default connect(null, mapDispatchToProps)(CreateCompany);

