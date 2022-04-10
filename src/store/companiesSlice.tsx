import { createSlice } from "@reduxjs/toolkit";
import { companyType } from "../types";
import { RootState } from "./store";

const initialState = [] as companyType[];

const companiesSlice = createSlice({
    name: 'companies',
    initialState,
    reducers: {
        setCompaniesData: (state, {payload}) => [...payload]
    },
})
export const {setCompaniesData} = companiesSlice.actions;
export const selectedCompanies = ({companies}: RootState) : companyType[] => companies
export default companiesSlice.reducer;