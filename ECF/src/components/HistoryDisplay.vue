<script setup lang="ts">
import { useWalletStore } from "@/stores/wallet";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { onMounted } from "vue";

const store = useWalletStore();
const { credit, debit } =
  storeToRefs(store);

onMounted(() => {
  const creditInStorage = JSON.parse(localStorage.getItem("creditTab"))
  console.log(creditInStorage);
  // credit.value.desc = creditInStorage.value.desc;
  // credit.value.amount =
  credit.value = creditInStorage
  
}) 

const displayMode = ref<string>("");
</script>

<template>
  <div class="display">
    <label for="display">Choose :</label>
    <select v-model="displayMode" name="display" id="display">
      <option value="credit">Show credit history</option>
      <option value="debit">Show debit history</option>
    </select>
    <template v-if="displayMode === 'credit'">
      <div v-for="c in credit">
        <p>{{ c.amount }} €</p>
        <p>{{ c.desc }}</p>
        <p>{{ c.date }}</p>
      </div>
    </template>
    <template v-if="displayMode === 'debit'">
      <div v-for="d in debit">
        <p>{{ d.amount }} €</p>
        <p>{{ d.desc }}</p>
        <p>{{ d.date }}</p>
      </div>
    </template>
  </div>
</template>

<style scoped>
.display {
}
</style>
