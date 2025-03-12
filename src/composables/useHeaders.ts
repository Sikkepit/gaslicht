import type { Header } from '../types/types';

const headers: Array<Header> = [
    { id: 'rank', label: 'Rang' },
    { id: 'supplier', label: 'Leverancier', isSearchable: true },
    { id: 'product', label: 'Product', isSearchable: true },
    { id: 'term', label: 'Termijn' },
    { id: 'details', label: 'Details' },
    { id: 'discount', label: 'Korting' },
    { id: 'monthly_cost', label: 'Maandelijkse kosten' },
    { id: 'annual_cost', label: 'Jaarlijkse kosten' },
    { id: 'estimated_savings', label: 'Geschatte besparingen' },
    { id: 'electricity_sustainability', label: 'Duurzaamheid elektriciteit' },
    { id: 'gas_sustainability', label: 'Soort gas' },
    { id: 'extra_info', label: 'Beschrijving' },
    { id: 'score', label: 'Score' },
    { id: 'cooling_off_period', label: 'Bedenktijd' }
];

export default function useHeaders() {
    return { headers };
}
