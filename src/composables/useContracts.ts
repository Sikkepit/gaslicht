import type { Contract } from '../types/types';

const contracts: Contract[] = [
    {
        rank: 1,
        supplier: 'UnitedConsumers',
        product: 'Nederlandse Groene stroom en Aardgas 1 jaar Vast',
        term: 'Vast tarief 1 jaar',
        details: 'Leverancier bepaalt termijnbedrag',
        discount: 430,
        monthly_cost: 148.33,
        annual_cost: 1779.94,
        estimated_savings: 742.12,
        electricity_sustainability: 'Groene stroom NL',
        gas_sustainability: 'Grijs gas',
        extra_info: 'Met gratis Bencompare energieinzicht',
        score: 8.1,
        cooling_off_period: '14 dagen bedenktijd'
    },
    {
        rank: 2,
        supplier: 'Innova Energie',
        product: 'Europese Groene Stroom en Aardgas Vast 1 jaar',
        term: 'Vast tarief 1 jaar',
        details: 'Leverancier bepaalt termijnbedrag',
        discount: 450,
        monthly_cost: 148.42,
        annual_cost: 1781.02,
        estimated_savings: 741.04,
        electricity_sustainability: 'Groene stroom',
        gas_sustainability: 'Grijs gas',
        extra_info: 'Met gratis Bencompare energieinzicht',
        score: 7.5,
        cooling_off_period: '14 dagen bedenktijd'
    },
    {
        rank: 3,
        supplier: 'Gewoon Energie',
        product: 'Europese Groene Stroom en Aardgas Vast 1 jaar',
        term: 'Vast tarief 1 jaar',
        details: 'Leverancier bepaalt termijnbedrag',
        discount: 445,
        monthly_cost: 148.83,
        annual_cost: 1786.02,
        estimated_savings: 736.04,
        electricity_sustainability: 'Groene stroom',
        gas_sustainability: 'Grijs gas',
        extra_info: 'Met gratis Bencompare energieinzicht',
        score: 8.0,
        cooling_off_period: '14 dagen bedenktijd'
    },
    {
        rank: 4,
        supplier: 'ENGIE',
        product: 'Nederlandse Groene Stroom en Aardgas 1 jaar Vast',
        term: 'Vast tarief 1 jaar',
        details: 'Korting € 400',
        discount: 400,
        monthly_cost: 149.96,
        annual_cost: 1799.51,
        estimated_savings: 722.55,
        electricity_sustainability: 'Groene stroom NL',
        gas_sustainability: 'Grijs gas',
        extra_info: 'Met gratis Bencompare energieinzicht',
        score: 8.7,
        cooling_off_period: '14 dagen bedenktijd'
    },
    {
        rank: 5,
        supplier: 'Vattenfall',
        product: 'Nederlandse Groene Stroom en Aardgas tot 1 jaar vast Actie',
        term: 'Vast tarief t/m 31-03-2026',
        details: 'Leverancier bepaalt termijnbedrag',
        discount: 380,
        monthly_cost: 151.81,
        annual_cost: 1821.74,
        estimated_savings: 700.31,
        electricity_sustainability: 'Groene stroom NL',
        gas_sustainability: 'Grijs gas',
        extra_info: 'Met gratis Bencompare energieinzicht',
        score: 8.8,
        cooling_off_period: '14 dagen bedenktijd'
    },
    {
        rank: 6,
        supplier: 'Budget Energie',
        product: 'Europese Groene Stroom en Aardgas Vast 1 jaar',
        term: 'Vast tarief 1 jaar',
        details: 'Korting € 420',
        discount: 420,
        monthly_cost: 151.98,
        annual_cost: 1823.8,
        estimated_savings: 698.25,
        electricity_sustainability: 'Groene stroom',
        gas_sustainability: 'Grijs gas',
        extra_info: 'Met gratis Bencompare energieinzicht',
        score: 7.9,
        cooling_off_period: '14 dagen bedenktijd'
    },
    {
        rank: 7,
        supplier: 'Budget Energie',
        product: 'NL Groene Stroom en Aardgas met CO2-compensatie Vast 1 jaar',
        term: 'Vast tarief 1 jaar',
        details: 'Korting € 420',
        discount: 420,
        monthly_cost: 152.28,
        annual_cost: 1827.4,
        estimated_savings: 694.66,
        electricity_sustainability: 'Groene stroom NL',
        gas_sustainability: 'CO2-compensatie',
        extra_info: 'Met gratis Bencompare energieinzicht',
        score: 8.4,
        cooling_off_period: '14 dagen bedenktijd'
    },
    {
        rank: 8,
        supplier: 'Vandebron',
        product:
            'NL Groene Stroom en Aardgas met Investering in Lokale Natuur 1 jr Vast',
        term: 'Vast tarief 1 jaar',
        details: 'Korting € 350',
        discount: 350,
        monthly_cost: 152.4,
        annual_cost: 1828.83,
        estimated_savings: 693.22,
        electricity_sustainability: 'Groene stroom NL',
        gas_sustainability: 'CO2-compensatie',
        extra_info: 'Met gratis Bencompare energieinzicht',
        score: 8.8,
        cooling_off_period: '14 dagen bedenktijd'
    },
    {
        rank: 9,
        supplier: 'Oxxio',
        product: 'Europese Windstroom en Aardgas 1 jaar Vast',
        term: 'Vast tarief 1 jaar',
        details: 'Korting € 385',
        discount: 385,
        monthly_cost: 153.84,
        annual_cost: 1846.06,
        estimated_savings: 676.0,
        electricity_sustainability: 'Groene stroom',
        gas_sustainability: 'Grijs gas',
        extra_info: 'Met gratis Bencompare energieinzicht',
        score: 7.7,
        cooling_off_period: '14 dagen bedenktijd'
    },
    {
        rank: 10,
        supplier: 'Oxxio',
        product: 'Nederlandse Windstroom en Aardgas 1 jaar Vast',
        term: 'Vast tarief 1 jaar',
        details: 'Korting € 385',
        discount: 385,
        monthly_cost: 154.34,
        annual_cost: 1852.06,
        estimated_savings: 670.0,
        electricity_sustainability: 'Groene stroom NL',
        gas_sustainability: 'Grijs gas',
        extra_info: 'Met gratis Bencompare energieinzicht',
        score: 8.1,
        cooling_off_period: '14 dagen bedenktijd'
    },
    {
        rank: 11,
        supplier: 'Eneco',
        product: 'Hollandse Wind&Zon en Aardgas 1 jaar vast',
        term: 'Vast tarief 1 jaar',
        details: 'Korting € 400',
        discount: 400,
        monthly_cost: 154.89,
        annual_cost: 1858.64,
        estimated_savings: 663.41,
        electricity_sustainability: 'Groene stroom NL',
        gas_sustainability: 'Grijs gas',
        extra_info: 'Met gratis Bencompare energieinzicht',
        score: 8.4,
        cooling_off_period: '14 dagen bedenktijd'
    },
    {
        rank: 12,
        supplier: 'Eneco',
        product:
            'Hollandse Wind&Zon en Aardgas met CO2-compensatie 1 jaar vast',
        term: 'Vast tarief 1 jaar',
        details: 'Korting € 400',
        discount: 400,
        monthly_cost: 155.89,
        annual_cost: 1870.64,
        estimated_savings: 651.41,
        electricity_sustainability: 'Groene stroom NL',
        gas_sustainability: 'CO2-compensatie',
        extra_info: 'Met gratis Bencompare energieinzicht',
        score: 8.6,
        cooling_off_period: '14 dagen bedenktijd'
    },
    {
        rank: 13,
        supplier: 'Mega',
        product: 'Europese Groene Stroom en Aardgas 1 jaar Vast',
        term: 'Vast tarief 1 jaar',
        details: 'Leverancier bepaalt termijnbedrag',
        discount: 458,
        monthly_cost: 156.88,
        annual_cost: 1882.6,
        estimated_savings: 639.46,
        electricity_sustainability: 'Groene stroom',
        gas_sustainability: 'Grijs gas',
        extra_info: 'Met gratis Bencompare energieinzicht',
        score: 7.0,
        cooling_off_period: '14 dagen bedenktijd'
    },
    {
        rank: 14,
        supplier: 'Greenchoice',
        product:
            'NL Groene Stroom en Aardgas met Natuur voor Morgen 1 jr Vast Actie',
        term: 'Vast tarief 1 jaar',
        details: 'Leverancier bepaalt termijnbedrag',
        discount: 300,
        monthly_cost: 157.66,
        annual_cost: 1891.92,
        estimated_savings: 630.14,
        electricity_sustainability: 'Groene stroom NL',
        gas_sustainability: 'CO2-compensatie',
        extra_info: 'Met gratis Bencompare energieinzicht',
        score: 9.1,
        cooling_off_period: '14 dagen bedenktijd'
    },
    {
        rank: 15,
        supplier: 'Energiedirect',
        product: 'Europese Groene Stroom en Aardgas 1 jaar Vast Actie',
        term: 'Vast tarief 1 jaar',
        details: 'Korting € 250',
        discount: 250,
        monthly_cost: 158.53,
        annual_cost: 1902.36,
        estimated_savings: 619.69,
        electricity_sustainability: 'Groene stroom',
        gas_sustainability: 'Grijs gas',
        extra_info: 'Met gratis Bencompare energieinzicht',
        score: 7.8,
        cooling_off_period: '14 dagen bedenktijd'
    },
    {
        rank: 16,
        supplier: 'Powerpeers',
        product: '100% Groene Stroom & Aardgas met CO2-compensatie 1 Jaar Vast',
        term: 'Vast tarief 1 jaar',
        details: 'Korting € 350',
        discount: 350,
        monthly_cost: 162.12,
        annual_cost: 1945.4,
        estimated_savings: 576.66,
        electricity_sustainability: 'Groene stroom NL',
        gas_sustainability: 'CO2-compensatie',
        extra_info: 'Met gratis Bencompare energieinzicht',
        score: 9.0,
        cooling_off_period: '14 dagen bedenktijd'
    },
    {
        rank: 17,
        supplier: 'Frank Energie',
        product: 'Nederlandse Groene Stroom en Aardgas 1 jaar vast',
        term: 'Vast tarief 1 jaar',
        details: 'Leverancier bepaalt termijnbedrag',
        discount: 380,
        monthly_cost: 162.4,
        annual_cost: 1948.83,
        estimated_savings: 573.23,
        electricity_sustainability: 'Groene stroom NL',
        gas_sustainability: 'Grijs gas',
        extra_info: 'Met gratis Bencompare energieinzicht',
        score: 7.2,
        cooling_off_period: '14 dagen bedenktijd'
    },
    {
        rank: 18,
        supplier: 'Innova Energie',
        product: 'Europese Groene Stroom en Aardgas Vast 2 jaar',
        term: 'Vast tarief 2 jaar',
        details: 'Leverancier bepaalt termijnbedrag',
        discount: 460,
        monthly_cost: 163.4,
        annual_cost: 1960.85,
        estimated_savings: 561.21,
        electricity_sustainability: 'Groene stroom',
        gas_sustainability: 'Grijs gas',
        extra_info: 'Met gratis Bencompare energieinzicht',
        score: 7.5,
        cooling_off_period: '14 dagen bedenktijd'
    },
    {
        rank: 19,
        supplier: 'Gewoon Energie',
        product: 'Europese Groene Stroom en Aardgas Vast 2 jaar',
        term: 'Vast tarief 2 jaar',
        details: 'Leverancier bepaalt termijnbedrag',
        discount: 455,
        monthly_cost: 163.61,
        annual_cost: 1963.35,
        estimated_savings: 558.71,
        electricity_sustainability: 'Groene stroom',
        gas_sustainability: 'Grijs gas',
        extra_info: 'Met gratis Bencompare energieinzicht',
        score: 7.9,
        cooling_off_period: '14 dagen bedenktijd'
    },
    {
        rank: 20,
        supplier: 'Coolblue Energie',
        product:
            'Nederlandse Groene stroom en Aardgas met CO2-compensatie 1 jaar Vast Actie',
        term: 'Vast tarief 1 jaar',
        details: 'Korting € 250',
        discount: 250,
        monthly_cost: 163.93,
        annual_cost: 1967.19,
        estimated_savings: 554.87,
        electricity_sustainability: 'Groene stroom NL',
        gas_sustainability: 'CO2-compensatie',
        extra_info: 'Met gratis Bencompare energieinzicht',
        score: 8.5,
        cooling_off_period: '14 dagen bedenktijd'
    },
    {
        rank: 21,
        supplier: 'Innova Energie',
        product: 'Europese Groene Stroom en Aardgas Vast 3 jaar',
        term: 'Vast tarief 3 jaar',
        details: 'Leverancier bepaalt termijnbedrag',
        discount: 600,
        monthly_cost: 165.4,
        annual_cost: 1984.76,
        estimated_savings: 537.3,
        electricity_sustainability: 'Groene stroom',
        gas_sustainability: 'Grijs gas',
        extra_info: 'Met gratis Bencompare energieinzicht',
        score: 7.5,
        cooling_off_period: '14 dagen bedenktijd'
    },
    {
        rank: 22,
        supplier: 'Budget Energie',
        product: 'Europese Groene Stroom en Aardgas Vast 2 jaar',
        term: 'Vast tarief 2 jaar',
        details: 'Korting € 500',
        discount: 500,
        monthly_cost: 165.49,
        annual_cost: 1985.94,
        estimated_savings: 536.12,
        electricity_sustainability: 'Groene stroom',
        gas_sustainability: 'Grijs gas',
        extra_info: 'Met gratis Bencompare energieinzicht',
        score: 7.8,
        cooling_off_period: '14 dagen bedenktijd'
    },
    {
        rank: 23,
        supplier: 'Gewoon Energie',
        product: 'Europese Groene Stroom en Aardgas Vast 3 jaar',
        term: 'Vast tarief 3 jaar',
        details: 'Leverancier bepaalt termijnbedrag',
        discount: 595,
        monthly_cost: 165.54,
        annual_cost: 1986.43,
        estimated_savings: 535.63,
        electricity_sustainability: 'Groene stroom',
        gas_sustainability: 'Grijs gas',
        extra_info: 'Met gratis Bencompare energieinzicht',
        score: 7.9,
        cooling_off_period: '14 dagen bedenktijd'
    },
    {
        rank: 24,
        supplier: 'Essent',
        product: 'Nederlandse Groene Stroom en Aardgas 1 jr vast Actie',
        term: 'Vast tarief 1 jaar',
        details: 'Korting € 250',
        discount: 250,
        monthly_cost: 166.05,
        annual_cost: 1992.64,
        estimated_savings: 529.42,
        electricity_sustainability: 'Groene stroom',
        gas_sustainability: 'Grijs gas',
        extra_info: 'Met gratis Bencompare energieinzicht',
        score: 8.0,
        cooling_off_period: '14 dagen bedenktijd'
    },
    {
        rank: 25,
        supplier: 'Greenchoice',
        product:
            'NL Groene Stroom en Aardgas met Natuur voor Morgen 2 jaar Vast Actie',
        term: 'Vast tarief 2 jaar',
        details: 'Leverancier bepaalt termijnbedrag',
        discount: 300,
        monthly_cost: 166.47,
        annual_cost: 1997.69,
        estimated_savings: 524.36,
        electricity_sustainability: 'Groene stroom NL',
        gas_sustainability: 'CO2-compensatie',
        extra_info: 'Met gratis Bencompare energieinzicht',
        score: 9.0,
        cooling_off_period: '14 dagen bedenktijd'
    },
    {
        rank: 26,
        supplier: 'ENGIE',
        product: 'Nederlandse Groene Stroom en Aardgas 3 jaar Vast',
        term: 'Vast tarief 3 jaar',
        details: 'Korting € 500',
        discount: 500,
        monthly_cost: 167.51,
        annual_cost: 2010.11,
        estimated_savings: 511.95,
        electricity_sustainability: 'Groene stroom NL',
        gas_sustainability: 'Grijs gas',
        extra_info: 'Met gratis Bencompare energieinzicht',
        score: 8.6,
        cooling_off_period: '14 dagen bedenktijd'
    },
    {
        rank: 27,
        supplier: 'Vandebron',
        product:
            'NL Groene Stroom en Aardgas met Investering in Lokale Natuur 2 jr Vast',
        term: 'Vast tarief 2 jaar',
        details: 'Korting € 320',
        discount: 320,
        monthly_cost: 168.4,
        annual_cost: 2020.82,
        estimated_savings: 501.24,
        electricity_sustainability: 'Groene stroom NL',
        gas_sustainability: 'CO2-compensatie',
        extra_info: 'Met gratis Bencompare energieinzicht',
        score: 8.8,
        cooling_off_period: '14 dagen bedenktijd'
    },
    {
        rank: 28,
        supplier: 'Budget Energie',
        product: 'Europese Groene Stroom en Aardgas Vast 3 jaar',
        term: 'Vast tarief 3 jaar',
        details: 'Korting € 540',
        discount: 540,
        monthly_cost: 169.11,
        annual_cost: 2029.32,
        estimated_savings: 492.74,
        electricity_sustainability: 'Groene stroom',
        gas_sustainability: 'Grijs gas',
        extra_info: 'Met gratis Bencompare energieinzicht',
        score: 7.9,
        cooling_off_period: '14 dagen bedenktijd'
    },
    {
        rank: 29,
        supplier: 'Coolblue Energie',
        product:
            'Nederlandse Groene stroom en Aardgas met CO2-compensatie 3 jaar Vast',
        term: 'Vast tarief 3 jaar',
        details: 'Korting € 515',
        discount: 515,
        monthly_cost: 170.21,
        annual_cost: 2042.5,
        estimated_savings: 479.56,
        electricity_sustainability: 'Groene stroom NL',
        gas_sustainability: 'CO2-compensatie',
        extra_info: 'Met gratis Bencompare energieinzicht',
        score: 8.5,
        cooling_off_period: '14 dagen bedenktijd'
    },
    {
        rank: 30,
        supplier: 'Coolblue Energie',
        product:
            'Nederlandse Groene stroom en Aardgas met CO2-compensatie 2 jr Vast',
        term: 'Vast tarief 2 jaar',
        details: 'Korting € 335',
        discount: 335,
        monthly_cost: 170.32,
        annual_cost: 2043.85,
        estimated_savings: 478.2,
        electricity_sustainability: 'Groene stroom NL',
        gas_sustainability: 'CO2-compensatie',
        extra_info: 'Met gratis Bencompare energieinzicht',
        score: 8.5,
        cooling_off_period: '14 dagen bedenktijd'
    },
    {
        rank: 31,
        supplier: 'Vattenfall',
        product: 'Nederlandse Groene Stroom en Aardgas tot 2 jaar vast',
        term: 'Vast tarief t/m 31-03-2027',
        details: 'Leverancier bepaalt termijnbedrag',
        discount: 390,
        monthly_cost: 170.5,
        annual_cost: 2045.98,
        estimated_savings: 476.07,
        electricity_sustainability: 'Groene stroom NL',
        gas_sustainability: 'Grijs gas',
        extra_info: 'Met gratis Bencompare energieinzicht',
        score: 8.7,
        cooling_off_period: '14 dagen bedenktijd'
    },
    {
        rank: 32,
        supplier: 'Mega',
        product: 'Europese Groene Stroom en Aardgas 2 jaar Vast',
        term: 'Vast tarief 2 jaar',
        details: 'Leverancier bepaalt termijnbedrag',
        discount: 652,
        monthly_cost: 170.51,
        annual_cost: 2046.16,
        estimated_savings: 475.9,
        electricity_sustainability: 'Groene stroom',
        gas_sustainability: 'Grijs gas',
        extra_info: 'Met gratis Bencompare energieinzicht',
        score: 6.9,
        cooling_off_period: '14 dagen bedenktijd'
    },
    {
        rank: 33,
        supplier: 'Mega',
        product: 'Europese Groene Stroom en Aardgas 3 jaar Vast',
        term: 'Vast tarief 3 jaar',
        details: 'Leverancier bepaalt termijnbedrag',
        discount: 870,
        monthly_cost: 170.76,
        annual_cost: 2049.15,
        estimated_savings: 472.91,
        electricity_sustainability: 'Groene stroom',
        gas_sustainability: 'Grijs gas',
        extra_info: 'Met gratis Bencompare energieinzicht',
        score: 6.9,
        cooling_off_period: '14 dagen bedenktijd'
    },
    {
        rank: 34,
        supplier: 'UnitedConsumers',
        product: 'Nederlandse Groene Stroom en Aardgas 3 jaar Vast',
        term: 'Vast tarief 3 jaar',
        details: 'Leverancier bepaalt termijnbedrag',
        discount: 500,
        monthly_cost: 171.53,
        annual_cost: 2058.32,
        estimated_savings: 463.74,
        electricity_sustainability: 'Groene stroom NL',
        gas_sustainability: 'Grijs gas',
        extra_info: 'Met gratis Bencompare energieinzicht',
        score: 8.0,
        cooling_off_period: '14 dagen bedenktijd'
    },
    {
        rank: 35,
        supplier: 'DELTA Energie',
        product: 'Europese Groene stroom en Aardgas 1 jaar vast Actie',
        term: 'Vast tarief 1 jaar',
        details: 'Korting € 250',
        discount: 250,
        monthly_cost: 173.04,
        annual_cost: 2076.53,
        estimated_savings: 445.53,
        electricity_sustainability: 'Groene stroom',
        gas_sustainability: 'Grijs gas',
        extra_info: 'Met gratis Bencompare energieinzicht',
        score: 8.0,
        cooling_off_period: '14 dagen bedenktijd'
    },
    {
        rank: 36,
        supplier: 'Vandebron',
        product:
            'NL Groene Stroom en Aardgas met Investering in Lokale Natuur 3 jr Vast',
        term: 'Vast tarief 3 jaar',
        details: 'Korting € 360',
        discount: 360,
        monthly_cost: 173.4,
        annual_cost: 2080.79,
        estimated_savings: 441.26,
        electricity_sustainability: 'Groene stroom NL',
        gas_sustainability: 'CO2-compensatie',
        extra_info: 'Met gratis Bencompare energieinzicht',
        score: 8.8,
        cooling_off_period: '14 dagen bedenktijd'
    },
    {
        rank: 37,
        supplier: 'Greenchoice',
        product:
            'NL Groene Stroom en Aardgas met Natuur voor Morgen Vast t/m 31-12-2026',
        term: 'Vast tarief t/m 31-12-2026',
        details: 'Leverancier bepaalt termijnbedrag',
        discount: 360,
        monthly_cost: 175.5,
        annual_cost: 2106.04,
        estimated_savings: 416.01,
        electricity_sustainability: 'Groene stroom NL',
        gas_sustainability: 'CO2-compensatie',
        extra_info: 'Met gratis Bencompare energieinzicht',
        score: 9.1,
        cooling_off_period: '14 dagen bedenktijd'
    },
    {
        rank: 38,
        supplier: 'Pure Energie',
        product:
            'Nederlandse Groene Stroom en Aardgas met CO2-compensatie 1 jaar Vast',
        term: 'Vast tarief 1 jaar',
        details: 'Korting € 140',
        discount: 140,
        monthly_cost: 178.52,
        annual_cost: 2142.27,
        estimated_savings: 379.78,
        electricity_sustainability: 'Groene stroom NL',
        gas_sustainability: 'CO2-compensatie',
        extra_info: 'Met gratis Bencompare energieinzicht',
        score: 8.9,
        cooling_off_period: '14 dagen bedenktijd'
    },
    {
        rank: 39,
        supplier: 'Oxxio',
        product: 'Europese Windstroom en Aardgas 3 jaar Vast',
        term: 'Vast tarief 3 jaar',
        details: 'Korting € 230',
        discount: 230,
        monthly_cost: 183.92,
        annual_cost: 2207.05,
        estimated_savings: 315.01,
        electricity_sustainability: 'Groene stroom',
        gas_sustainability: 'Grijs gas',
        extra_info: 'Met gratis Bencompare energieinzicht',
        score: 7.7,
        cooling_off_period: '14 dagen bedenktijd'
    },
    {
        rank: 40,
        supplier: 'Oxxio',
        product: 'Nederlandse Windstroom en Aardgas 3 jaar Vast',
        term: 'Vast tarief 3 jaar',
        details: 'Korting € 230',
        discount: 230,
        monthly_cost: 184.42,
        annual_cost: 2213.05,
        estimated_savings: 309.01,
        electricity_sustainability: 'Groene stroom NL',
        gas_sustainability: 'Grijs gas',
        extra_info: 'Met gratis Bencompare energieinzicht',
        score: 8.0,
        cooling_off_period: '14 dagen bedenktijd'
    }
];

export default function useContracts() {
    return { contracts };
}
