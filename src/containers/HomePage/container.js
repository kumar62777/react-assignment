import { connect } from 'react-redux';
import HomePage from 'components/HomePage';
import actions from 'store/features/clickCounter/actions'

const mapDispatchToProps = dispatch => ({
	increment: () => dispatch(actions.incrementBy1()),
	decrement: () => dispatch(actions.decrementBy1()),
	resetNumberToZero: () => dispatch(actions.resetNumberToZero()),
});

const mapStateToProps = state => ({companies: state.companies});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

