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
                <div className="portfolioColumn titles">
                    <div className="firstColumn column">Company Name</div>
                    <div className="secColumn column">Symbol</div>
                    <div className="thirdColumn column">Actions</div>
                </div>
                {portfolioRows}
            </div>
        </div>
    )
}