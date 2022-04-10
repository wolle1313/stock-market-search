import { title } from "../../styles";
import { companyDetailsTypes } from "../../types";
import './styles/CompanyDetails.css';

interface CompanyDetailsProps {
    companyDetails: companyDetailsTypes;
    toggleOffDetails: () => void
}

export const CompanyDetails = ({companyDetails, toggleOffDetails}: CompanyDetailsProps) => {
    console.log(companyDetails)
    return(

            <div className="detailsWrapper">
            <button className="backButton" onClick={toggleOffDetails}>Go Back</button>
            {!!companyDetails.error? <div>{companyDetails.error}</div>
            :<div>
                <div className="nameTitle rows"><span>{companyDetails.name}</span></div>
                <div className="rows"><span style={title}>Address: </span><span>{companyDetails.address}</span></div>
                <div className="rows"><span style={title}>Market Capitalization: </span><span>{companyDetails.marketCapitalization}</span></div>
                <div className="description"><span>{companyDetails.description}</span></div>
             </div>
        }
            </div>
    )
}