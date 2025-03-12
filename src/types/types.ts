export type Contract = {
    rank: number;
    supplier: string;
    product: string;
    term: string;
    details: string;
    discount: number;
    monthly_cost: number;
    annual_cost: number;
    estimated_savings: number;
    electricity_sustainability: string;
    gas_sustainability: string;
    extra_info: string;
    score: number;
    cooling_off_period: string;
};

export type Header = {
    id: keyof Contract;
    label: string;
    isArray?: boolean;
    isDate?: boolean;
    isSearchable?: boolean;
};
