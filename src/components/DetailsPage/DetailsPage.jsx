import React from 'react';
import CompanySummary from '../CompoanySummary'
function DetailsPage(props) {
  let companies = props.companies;
  if(props.match.params.name){
      companies = props.companies.filter(c=>c.name===props.match.params.name)
  }
  console.log(companies);
  return (
    <div className="container">
        {
          companies.map((comp,i)=>{
            return (
              <CompanySummary key={`company-${i}`} data={comp} showEmployee={true}/>
            )
          })
        }
    </div>
  );
}

export default DetailsPage;