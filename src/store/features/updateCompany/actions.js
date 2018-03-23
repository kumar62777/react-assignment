import types from './types';

function addCompany(companyDetails) {
  return {
    type: types.ADD_COMPANY,
    payload: companyDetails
  }
}
function addPerson(personDetails, company) {
  return {
    type: types.ADD_PERSON,
    payload: {personDetails,company}
  }
}



export default {
    addCompany,
    addPerson
};