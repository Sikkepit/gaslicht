<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Contract } from './types/types';

// Components
import FilterButton from './components/FilterButton.vue';

// Composables
import useHeaders from './composables/useHeaders';
import useContracts from './composables/useContracts';
import useSort from './composables/useSort';

import ClearFilterButton from './components/ClearFilterButton.vue';
import SearchBar from './components/SearchBar.vue';
import SupplierCard from './components/SupplierCard.vue';
import SortButton from './components/SortButton.vue';

const { contracts } = useContracts();
const { headers } = useHeaders();
const { sortBy, sortAscending } = useSort();

// Refs
const searchValue = ref('');
const originFilter = ref<InstanceType<typeof FilterButton>>();
const supplierFilter = ref<InstanceType<typeof FilterButton>>();
const termFilter = ref<InstanceType<typeof FilterButton>>();
const searchBar = ref<InstanceType<typeof SearchBar>>();

// Functions for contract filtering
const filteredContracts = computed(() => {
    const filteredContract = contracts
        .filter(filterBySearch)
        .filter(filterBySupplier)
        .filter(filterByTerm)
        .filter(filterByOrigin);

    if (sortBy.value) {
        return sortContracts(
            filteredContract,
            sortBy.value,
            sortAscending.value
        );
    }
    return filteredContract;
});

function sortContracts(
    contracts: Contract[],
    sortingKey: keyof Contract,
    sortAscending: boolean
) {
    return contracts.sort((a, b) => {
        const firstValue = (a as any)[sortingKey];
        const secondValue = (b as any)[sortingKey];

        if (typeof firstValue === 'string' && typeof secondValue === 'string') {
            return sortAscending
                ? firstValue.localeCompare(secondValue)
                : secondValue.localeCompare(firstValue);
        }
        if (typeof firstValue === 'number' && typeof secondValue === 'number') {
            return sortAscending
                ? firstValue - secondValue
                : secondValue - firstValue;
        }
        return 0;
    });
}

function filterBySearch(contract: Contract) {
    const search = searchValue.value.toLowerCase();
    if (!search) return true;

    return headers
        .filter((header) => header.isSearchable)
        .some((header) =>
            String(contract[header.id]).toLowerCase().includes(search)
        );
}

function filterBySupplier(contract: Contract) {
    const selectedOptions = supplierFilter.value?.selectedOptions || [];
    return (
        selectedOptions.length === 0 ||
        selectedOptions.includes(contract.supplier)
    );
}

function filterByTerm(contract: Contract) {
    const selectedOptions = termFilter.value?.selectedOptions || [];
    return (
        selectedOptions.length === 0 || selectedOptions.includes(contract.term)
    );
}

function filterByOrigin(contract: Contract) {
    const selectedOptions = originFilter.value?.selectedOptions || [];
    return (
        selectedOptions.length === 0 ||
        selectedOptions.includes(contract.electricity_sustainability) ||
        selectedOptions.includes(contract.gas_sustainability)
    );
}

function getUniqueValues(id: keyof Contract) {
    return [...new Set(contracts.map((contract) => contract[id]))].sort();
}

function clearFilters() {
    if (originFilter?.value?.selectedOptions) {
        originFilter.value.selectedOptions = [];
    }
    if (supplierFilter?.value?.selectedOptions) {
        supplierFilter.value.selectedOptions = [];
    }
    if (termFilter?.value?.selectedOptions) {
        termFilter.value.selectedOptions = [];
    }
    if (searchBar?.value?.searchValue) {
        searchBar.value.searchValue = '';
    }
    searchValue.value = '';
}
</script>

<template>
    <div class="overview container grid gap-4">
        <img src="./assets/logo.svg" class="w-[290px]" />

        <div class="flex mt-6 mb-4">
            <div class="flex gap-1 items-center flex-wrap">
                <FilterButton :options="[
                    ...getUniqueValues('electricity_sustainability'),
                    ...getUniqueValues('gas_sustainability')
                ].sort()" ref="originFilter">Duurzaamheid</FilterButton>

                <FilterButton :options="getUniqueValues('supplier')" ref="supplierFilter">Leverancier</FilterButton>

                <FilterButton :options="getUniqueValues('term')" ref="termFilter">Termijn</FilterButton>

                <ClearFilterButton v-if="
                    supplierFilter?.selectedOptions.length ||
                    originFilter?.selectedOptions.length ||
                    termFilter?.selectedOptions.length
                " @clear-filters="clearFilters" />
            </div>

            <SearchBar ref="searchBar" @update-query="(query) => (searchValue = query)" />
        </div>

        <div class="sort">
            Sorteer op:

            <SortButton id="rank" initialSort> Prijs </SortButton>

            <SortButton id="score" :initialSort="false">Beoordeling</SortButton>

            <SortButton id="discount" :initialSort="false">
                Korting
            </SortButton>

            <SortButton id="supplier" initialSort> Leverancier </SortButton>
        </div>

        <div class="overview__card-wrapper">
            <SupplierCard v-for="contract in filteredContracts" :contract="contract" />

            <div v-if="filteredContracts.length === 0" class="card text-center mt-8">
                <span>Er zijn geen resultaten gevonden. </span>

                <button class="underline text-[var(--c-astronaut-800)] cursor-pointer" @click="clearFilters">
                    <span>Wis alle filters</span>
                </button>
            </div>
        </div>
    </div>
</template>
