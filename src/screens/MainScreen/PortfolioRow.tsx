import { Dispatch, SetStateAction } from "react";
import { key } from "../../components";
import { removeFromPortfolio } from "../../store/portfolioSlice";
import { useAppDispatch } from "../../store/store";
import { companyDetailsTypes, companyType } from "../../types";

interface PortfolioRowProps {
    toggleDetailsOn: () => void;
    setCompanyDetails: Dispatch<SetStateAction<companyDetailsTypes>>
    portfolioData: companyType;
}
export const PortfolioRow = ({toggleDetailsOn, setCompanyDetails, portfolioData}: PortfolioRowProps) => {

    const dispatch = useAppDispatch();
    const shortenNumber = (marketCap: string) => {
        let number = parseInt(marketCap);
            if(number > 999999999) {
                const newNumber = (number / 1000000000).toFixed(2)
                return `${newNumber}bln`
            }
            else if (number > 999999) {
               const newNumber = (number / 1000000).toFixed(2)
                return `${newNumber}mln`
            }
            else return `${number}`
    }
    const openDetails = () => {
        toggleDetailsOn();
        fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${portfolioData.symbol}&apikey=${key()}`)
        .then(response => response.json())
        .then(companyDetails => {
            if(companyDetails.Name) {
                setCompanyDetails({
                name: companyDetails.Name,
                address: companyDetails.Address,
                description: companyDetails.Description,
                marketCapitalization: shortenNumber(companyDetails.MarketCapitalization)
            })
            }
            else {
                setCompanyDetails({
                    error: 'wrong identifier'
                })
            }
        })
        .catch(err => setCompanyDetails({error: err}))
    }
    return(
        <div className="portfolioRow companyRow">
            <div  className="firstRow row" onClick={openDetails}>{portfolioData.name}</div>
            <div className="secRow row" onClick={openDetails}>{portfolioData.symbol}</div>
            <div className="thirdRow row" onClick={() => dispatch(removeFromPortfolio(portfolioData.symbol))}>Remove</div>
        </div>
    )
}