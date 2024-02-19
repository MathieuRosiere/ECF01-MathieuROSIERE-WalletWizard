<script setup lang="ts">
import { useWalletStore } from '@/stores/wallet';
import { storeToRefs } from 'pinia';

const store = useWalletStore()
const { currentBalance } = storeToRefs(store)
</script>

<template>
    <p class="p-balance" >Your current balance is {{ currentBalance }} €</p>
</template>

<style scoped>

.p-balance {
  display: grid;
  place-content: center;
  font-size: 2.5rem;
}

</style>