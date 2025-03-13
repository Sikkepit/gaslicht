<script setup lang="ts">
import useSort from '../composables/useSort';
import type { Contract } from '../types/types';

const { sortBy, sortAscending } = useSort();

defineProps<{
    id: keyof Contract;
    initialSort: boolean;
}>();

function handleSort(id: keyof Contract, initialSort: boolean) {
    if (sortBy.value === id) {
        sortAscending.value = !sortAscending.value;
    } else {
        sortAscending.value = initialSort;
    }
    sortBy.value = id;
}
</script>
<template>
    <button @click="handleSort(id, initialSort)" type="button" class="sort__button"
        :class="{ 'sort__button--active': sortBy === id }">
        <slot></slot>

        <svg v-if="sortBy === id" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="icon size-2"
            :class="{ 'icon--rotate': sortAscending }">
            <path
                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
        </svg>
    </button>
</template>
