import { Dispatch, SetStateAction } from "react";
import { selectedPortfolio } from "../../store/portfolioSlice";
import { useAppSelector } from "../../store/store";
import { title } from "../../styles";
import { companyDetailsTypes } from "../../types";
import { PortfolioRow } from "./PortfolioRow";
import './styles/Portfolio.css'

interface PortfolioProps {
    toggleDetailsOn: () => void;
    setCompanyDetails: Dispatch<SetStateAction<companyDetailsTypes>>
}

export const Portfolio = ({toggleDetailsOn, setCompanyDetails}: PortfolioProps) => {
    const portfolioData = useAppSelector(selectedPortfolio)

    const portfolioRows = portfolioData.map(portfolioItem => <PortfolioRow key={`portfolio-${portfolioItem.symbol}`} portfolioData={portfolioItem} toggleDetailsOn={toggleDetailsOn} setCompanyDetails={setCompanyDetails}/>)
    return(
        <div>
            <div style={title}><span>Your portfolio</span></div>
            <div className="portfolioTable">
                <div className="portfolioRow titles">
                    <div className="firstRow row">Company Name</div>
                    <div className="secRow row">Symbol</div>
                    <div className="thirdRow row">Actions</div>
                </div>
                {portfolioRows}
            </div>
        </div>
    )
}