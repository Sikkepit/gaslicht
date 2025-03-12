<script setup lang="ts">
import IconComponent from './IconComponent.vue';

const emit = defineEmits(['clearFilters']);
</script>
<template>
    <button
        type="button"
        class="btn btn--outline"
        @click="emit('clearFilters', '')"
    >
        Wis Filters
        <IconComponent variant="clear-filter" class="size-4" />
    </button>
</template>
