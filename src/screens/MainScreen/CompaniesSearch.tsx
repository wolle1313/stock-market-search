import { useEffect, useState } from "react"
import { selectedCompanies, setCompaniesData } from "../../store/companiesSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { rawCompanyTypes } from "../../types";
import { CompanyItem } from "./CompanyItem";
import { NoResults } from "../../components/NoResults";
import { key, Loading } from "../../components";
import { title } from "../../styles";
import './styles/CompaniesSearch.css'


export const CompaniesSearch = () => {
    const dispatch = useAppDispatch();
    const companiesData = useAppSelector(selectedCompanies);

    const [userInputCompanies, setUserInputCompanies] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const companies: JSX.Element[]= companiesData.length ? companiesData.map(companyData => <CompanyItem key={companyData.symbol} companyData={companyData}/>) : []
    const transformRawCompaniesData = (rawCompaniesData: rawCompanyTypes[]) =>  rawCompaniesData.map(company => ({name: company['2. name'], symbol: company[`1. symbol`]}))

    useEffect(() => {
        if(userInputCompanies) {
            setIsLoading(true);
            fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${userInputCompanies}&apikey=${key()}`)
            .then(response => response.json())
            .then(({bestMatches}) => {
                if(bestMatches) {
                    dispatch(setCompaniesData(transformRawCompaniesData(bestMatches)))
                }
                else {
                    dispatch(setCompaniesData([])) 
                }
                setIsLoading(false)
            }
            )
            .catch(err => {
                setIsLoading(false);
                console.log(err)})
        }
        else {
            dispatch(setCompaniesData([]))  
        }
    },[userInputCompanies])
    return(
        <div className="searchWrapper">
            <div className="inputWrapper">
                <div style={title}><span>Company Name</span></div>
                <input className="companySearchInput" placeholder="Write Company Name" value={userInputCompanies} onChange={(e) => setUserInputCompanies(e.target.value)} type="text"/>
            </div>
            {isLoading ? (<Loading/>) :
            !!companiesData.length ? (<div>
                <div style={title}><span>Search Results</span></div>
                <div>
                <ul className="companiesTable">
                {companies}
                    </ul>
                </div>
            </div>) : userInputCompanies ? <NoResults/> : null }
        </div>
    )
}