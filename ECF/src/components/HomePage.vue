<script setup lang="ts">
import { useWalletStore } from '@/stores/wallet';
import { storeToRefs } from 'pinia';

const store = useWalletStore()
const { currentBalance } = storeToRefs(store)
</script>

<template>
    <p>{{ currentBalance }}</p>
</template>

<style scoped></style>