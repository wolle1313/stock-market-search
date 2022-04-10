import { addToPortfolio, selectedPortfolio } from "../../store/portfolioSlice"
import { useAppDispatch, useAppSelector } from "../../store/store"
import { companyType } from "../../types"

interface CompanyItemProps {
    companyData: companyType
}

export const CompanyItem = ({companyData}: CompanyItemProps) => {
    const dispatch = useAppDispatch()
    const portfolio = useAppSelector(selectedPortfolio);
    const findCompanyInPortfolio = () => portfolio.findIndex(company => company.symbol === companyData.symbol)
   const addPortfolio = (companyData: companyType) => {
    dispatch(addToPortfolio(companyData))
   }
    return(
        <li>
           <div>{companyData.symbol} - {companyData.name}</div> 
           {findCompanyInPortfolio() < 0 &&
           <button className="AddPortfolioBtn" onClick={() => addPortfolio(companyData)}><span>+</span></button>
           }
        </li>
    )
}