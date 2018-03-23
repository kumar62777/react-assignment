import { connect } from 'react-redux';
import DetailsPage from 'components/DetailsPage';
import actions from 'store/features/clickCounter/actions'

const mapStateToProps = state => {
    return {companies: state.companies}
};

export default connect(mapStateToProps,)(DetailsPage);

