<script setup lang="ts">
import { ref, reactive } from "vue";
import type { item } from "@/catalog/type";
import { useWalletStore } from "@/stores/wallet";
import { storeToRefs } from "pinia";

const store = useWalletStore();
const { totalCredit } = storeToRefs(store);
const { addToCredit } = store

const formDisplay = ref<string>("");

const operation: item = reactive({
  desc: "",
  amount: 0,
});

const addToCreditHandler = () => {
  addToCredit({...operation})
  operation.desc = "";
  operation.amount = 0;
};
</script>

<template>
    <p>{{ totalCredit }}</p>
  <select v-model="formDisplay" name="" id="">
    <option value="add">Add</option>
    <option value="withdraw">Withdraw</option>
  </select>

  <div v-if="formDisplay === 'add'">
    <form action="#" @submit.prevent="addToCreditHandler">
      <div>
        <label for="add"></label>
        <textarea
          v-model="operation.desc"
          name="add"
          id="add"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div>
        <label for="add"></label>
        <input type="number" id="add" v-model.number="operation.amount" />
      </div>
      <button>Add</button>
    </form>
    
  </div>
  <div v-if="formDisplay === 'withdraw'">
    <form action="#" @submit.prevent="addToDebit">
      <div>
        <label for="withdraw"></label>
        <textarea name="withdraw" id="withdraw" cols="30" rows="10"></textarea>
      </div>
      <div>
        <label for="withdraw"></label>
        <input type="text" id="withdraw" />
      </div>
      <button>Withdraw</button>
    </form>
  </div>
</template>

<style scoped></style>
