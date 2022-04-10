import { useState } from 'react';
import './App.css';
import { CompanyDetails } from './screens/CompanyDetails';
import { MainScreen } from './screens/MainScreen';
import { companyDetailsTypes } from './types';

function App() {
  const [companyDetails, setCompanyDetails] = useState<companyDetailsTypes>({})
  const [toggleDetails, setToggleDetails] = useState(false)
  return (
    <div className="App">
      {toggleDetails? 
      <CompanyDetails toggleOffDetails={() => setToggleDetails(false)} companyDetails={companyDetails} />
      : (<MainScreen toggleDetailsOn={() => setToggleDetails(true)} setCompanyDetails={setCompanyDetails}/>
      )
      }
    </div>
  );
}

export default App;
