<script setup lang="ts">
import { useWalletStore } from "@/stores/wallet";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const store = useWalletStore();
const { credit, debit } = storeToRefs(store);

const displayMode = ref<string>("");
</script>

<template>
  <div class="display">
    <label class="font-size" for="display">Choose History :</label>
    <select v-model="displayMode" name="display" id="display">
      <option value="" hidden>Select an Option :</option>
      <option value="credit">Show credit history</option>
      <option value="debit">Show debit history</option>
    </select>
    <template v-if="displayMode === 'credit'">
      <div v-for="c in credit">
        <p class="font-bold">Date :</p>
        <p>{{ c.date }}</p>
        <p class="font-bold">Amount :</p>
        <p>{{ c.amount }} €</p>
        <p class="font-bold">Description :</p>
        <p>{{ c.desc }}</p>
      </div>
    </template>
    <template v-if="displayMode === 'debit'">
      <div v-for="d in debit">
        <p class="font-bold">Date :</p>
        <p>{{ d.date }}</p>
        <p class="font-bold">Amount :</p>
        <p>{{ d.amount }} €</p>
        <p class="font-bold">Description :</p>
        <p>{{ d.desc }}</p>
      </div>
    </template>
  </div>
</template>

<style scoped>
.display {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  overflow: auto;
}

p {
  font-size: 1.3rem;
  display: inline;
}

.font-bold {
  font-weight: bold;
  padding-left: 15px;
}
</style>
