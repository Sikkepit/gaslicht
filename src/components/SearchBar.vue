<script setup lang="ts">
import { ref } from 'vue';
import IconComponent from './IconComponent.vue';

const emit = defineEmits(['updateQuery']);
const searchValue = ref('');

function reset() {
    searchValue.value = '';
    emit('updateQuery', '');
}

defineExpose({
    searchValue
});
</script>
<template>
    <div class="searchbar relative ml-auto">
        <input type="search" v-model="searchValue" placeholder="Zoek op leverancier of productnaam..." class="w-84"
            @input="emit('updateQuery', searchValue)" />

        <IconComponent v-if="searchValue === ''" variant="search" class="size-4" />

        <button v-else @click="reset">
            <IconComponent variant="xmark" class="size-4" />
        </button>
    </div>
</template>
