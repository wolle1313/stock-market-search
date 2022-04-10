
export interface companyType {
    name?: string;
    symbol?: string
}
export interface rawCompanyTypes {
    ['1. symbol']: string;
    ['2. name']: string;
}
export interface companyDetailsTypes extends companyType {
    address?: string;
    description?: string;
    marketCapitalization?: string;
    error?: string;
}