<script setup lang="ts">
import type { Contract } from '../types/types';
import IconComponent from './IconComponent.vue';

import { convertToEuro } from '../utils/currency';

defineProps<{ contract: Contract }>();
</script>
<template>
    <div class="card">
        <div class="card__header">
            <div>
                <h2>#{{ contract.rank }} {{ contract.supplier }}</h2>
                <h3>{{ contract.product }}</h3>
                <ul class="card__usps">
                    <li>{{ contract.term }}</li>
                    <li>{{ contract.details }}</li>
                </ul>
            </div>
            <div class="self-start ml-auto">
                <span class="card__monthly-rate">{{
                    convertToEuro(contract.monthly_cost)
                }}</span
                >/mnd
                <span class="card__discount"
                    >incl. {{ convertToEuro(contract.discount) }} korting</span
                >
            </div>
        </div>
        <ul class="card__meta">
            <li>
                <IconComponent variant="plug" />
                {{ contract.electricity_sustainability }}
            </li>
            <li>
                <IconComponent variant="flame" />
                {{ contract.gas_sustainability }}
            </li>
            <li>
                <IconComponent variant="star" />
                {{ contract.score }}
            </li>
            <li class="ml-auto">
                <button class="btn btn--cta">Meer informatie</button>
            </li>
        </ul>
    </div>
</template>
