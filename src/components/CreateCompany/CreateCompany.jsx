import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
};


class CreateCompany extends Component {
    handleSave() {
        const name = this.refs.name.value;
        const address = this.refs.add.value;
        const phone = this.refs.phone.value;
        const revenue = this.refs.revenue.value;
        this.props.addCompany({
            name,
            address,
            phone,
            revenue,
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Create New Company
                    </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" className="form-control" id="name" ref="name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="add">Address:</label>
                                <input type="text" className="form-control" id="add" ref="add" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="revenue">Revenue:</label>
                                <input type="text" className="form-control" id="revenue" ref="revenue" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone:</label>
                                <input type="text" className="form-control" id="phone" ref="phone" />
                            </div>
                            <button type="button" className="btn btn-default" onClick={this.handleSave.bind(this)}>Save</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

CreateCompany.propTypes = propTypes;
export default CreateCompany;