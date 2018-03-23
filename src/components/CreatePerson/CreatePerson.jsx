import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    // companies: PropTypes.array.isRequired
};


class CreatePerson extends Component {
    handleSave() {
        const name = this.refs.name.value;
        const address = this.refs.add.value;
        const employer = this.refs.employer.value;
        this.props.addPerson({
            name,
            address
        }, employer);
    }

    render() {
        const {companies} = this.props;
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
                                <label htmlFor="revenue" >Employer:</label>
                                <select name="employer" className="form-control" ref="employer">
                                    {
                                        companies.map((comp,i)=>{
                                            return <option key={i} value={comp.name}>{comp.name}</option>
                                        })
                                    }
                                </select>
                            </div>
                           
                            <button type="button" className="btn btn-default" onClick={this.handleSave.bind(this)}>Save</button>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}

CreatePerson.propTypes = propTypes;
export default CreatePerson;