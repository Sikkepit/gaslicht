import { ref, type Ref } from 'vue';
import type { Contract } from '../types/types';

const sortBy: Ref<keyof Contract> = ref('rank');
const sortAscending: Ref<boolean> = ref(true);

export default function useSort() {
    return {
        sortBy,
        sortAscending
    };
}
