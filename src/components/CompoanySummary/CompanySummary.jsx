import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import './styles.less';

const propTypes = {
    data: PropTypes.object.isRequired,
};

class CompanySummary extends Component {
    render() {
        const { name, address, revenue, phone, employee } = this.props.data;
        return (
            <React.Fragment>
                <div className="row">
                    <div className="panel panel-default">
                        <div className="panel-heading">{name}</div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-md-8">
                                    <div>Address: {address}</div>
                                    <div>Revenue: {revenue}</div>
                                    <div>Phone No: {phone}</div>
                                </div>
                                {this.props.showEmployee &&
                                    <div className="col-md-4">
                                        <div>Employee: {employee.length}</div>
                                    </div>
                                }
                            </div>
                            {
                                this.props.showEmployee &&
                                <div className="row">
                                    <div className="panel panel-default">
                                        <div className="panel-heading">Employee</div>
                                        <div className="panel-body">
                                            {employee.map((e,i) => {
                                                return (
                                                    <div className="panel panel-default" key={i}>
                                                        <div className="panel-heading">{e.name}</div>
                                                        <div className="panel-body">{e.address}</div>
                                                    </div>
                                                )
                                            })
                                            }
                                        </div>
                                    </div>
                                </div>
                            }
                            {!this.props.showEmployee && <div className="panel-footer">
                                <Link to={`details/${name}`}>Overview</Link>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

CompanySummary.propTypes = propTypes;
export default CompanySummary;