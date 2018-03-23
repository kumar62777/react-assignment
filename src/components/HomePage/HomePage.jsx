import React, { Component } from 'react';
import CompanySummary from '../CompoanySummary';
import CreateCompany from '../../containers/CreateCompany';
import CreatePerson from '../../containers/CreatePerson';
import PropTypes from 'prop-types';
import './styles.less';

const propTypes = {
	increment: PropTypes.func.isRequired,
	decrement: PropTypes.func.isRequired,
	resetNumberToZero: PropTypes.func.isRequired,
	companies: PropTypes.array.isRequired
};

class HomePage extends Component {
	render() {
		const { increment, decrement, resetNumberToZero,companies } = this.props;
		return (
			<React.Fragment>
				<div className="home__wrapper">
					<div className="home__abacus">
						<button onClick={increment}>
							Increment
						</button>
						<button onClick={decrement}>
							Decrement
						</button>
						<button onClick={resetNumberToZero}>
							Reset Number
						</button>
					</div>
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<div className="panel panel-default">
									<div className="panel-heading">Companies</div>
									<div className="panel-body">
										{
											companies.map((comp,i)=>{
												return <CompanySummary key={`company-${i}`} data={comp} showEmployee={false} />
											})
										}
									</div>	
								</div>
							</div>
							<div className="col-md-5 col-md-offset-1">
									<CreateCompany/>
									<CreatePerson/>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

HomePage.propTypes = propTypes;
export default HomePage;