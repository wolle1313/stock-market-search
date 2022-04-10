import { Dispatch, SetStateAction } from "react";
import { GrayLine } from "../../components";
import { companyDetailsTypes } from "../../types";
import { CompaniesSearch } from "./CompaniesSearch"
import { Portfolio } from "./Portfolio"

interface MainScreenProps {
    toggleDetailsOn: () => void;
    setCompanyDetails: Dispatch<SetStateAction<companyDetailsTypes>>
}

export const MainScreen = ({toggleDetailsOn, setCompanyDetails}: MainScreenProps) => {

    return(
        <div className="mainWrapper">
            <CompaniesSearch/>
            <GrayLine/>
            <Portfolio toggleDetailsOn={toggleDetailsOn} setCompanyDetails={setCompanyDetails}/>
        </div>
    )
}