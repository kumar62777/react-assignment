import types from './types';
import { createDefaultReducer } from '../../helpers'

const initialState = {
    companies: [
        {
            name: 'Amazon',
            address: "123, Avenue Street",
            revenue: 650000,
            phone: '970-190-223',
            employee: [{
                name: 'Anil',
                address: 'JNTU, Htderabad',
            },
            {
                name: 'Anil',
                address: 'JNTU, Htderabad',
            }]
        },
        {
            name: 'Microsoft',
            address: "123, Avenue Street",
            revenue: 650000,
            phone: '970-190-223',
            employee: [{
                name: 'Anil',
                address: 'JNTU, Htderabad',
            },
            {
                name: 'Anil',
                address: 'JNTU, Htderabad',
            }]
        }
    ]
};

const addComapnyHandler = (companies, payload) => {
    payload.employee = [];
    const newArray = companies.slice();
    newArray.splice(companies.length, 0, payload);
    return newArray;
};

const addPersonHandler = (companies, payload) => {
    const updatedCompanies = companies.map(c=>{
        if(c.name==payload.company){
            c.employee.push(payload.personDetails)
        }
        return c;
    });
    return updatedCompanies;
};

const decrementNumberHandler = (state, payload) => {
    const number = state.number - 1
    return {
        ...state,
        number
    }
};

const resetNumberHandler = (state, payload) => {
    return {
        ...state,
        number: 0
    }
}

const actionMap = {
    [types.ADD_COMPANY]: addComapnyHandler,
    [types.ADD_PERSON]: addPersonHandler,
};

export default createDefaultReducer(actionMap, initialState.companies)