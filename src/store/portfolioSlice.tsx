import { createSlice } from "@reduxjs/toolkit";
import { companyType } from "../types";
import { RootState } from "./store";

const initialState = [] as companyType[]

const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {
        addToPortfolio: (state, {payload}) => [...state, payload],
        removeFromPortfolio: (state, {payload}) => {
           return state.filter(company => company.symbol !== payload)
        }
    }
})
export const {addToPortfolio, removeFromPortfolio} = portfolioSlice.actions
export const selectedPortfolio = ({portfolio}: RootState) : companyType[] => portfolio
export default portfolioSlice.reducer