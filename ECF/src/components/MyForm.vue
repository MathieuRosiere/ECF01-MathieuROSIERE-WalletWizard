<script setup lang="ts">
import { ref, reactive } from "vue";
import type { item } from "@/catalog/type";
import { useWalletStore } from "@/stores/wallet";

const store = useWalletStore();
const { addToCredit, addToDebit } = store;

const formDisplay = ref<string>("");

const date = new Date().toLocaleString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

const operation: item = reactive({
  desc: "",
  amount: 0,
  date: date,
});

const addToCreditHandler = () => {
  addToCredit({ ...operation });
  operation.desc = "";
  operation.amount = 0;
};

const addToDebitHandler = () => {
  addToDebit({ ...operation });
  operation.desc = "";
  operation.amount = 0;
};
</script>

<template>
  <div class="form-display">
    <div class="select">
      <label for="operation">Choose your operation :</label>
      <select v-model="formDisplay" name="" id="operation">
        <option value="">Select an option :</option>
        <option value="add">Add</option>
        <option value="withdraw">Withdraw</option>
      </select>
    </div>
    <div class="form" v-if="formDisplay === 'add'">
      <form action="#" @submit.prevent="addToCreditHandler">
        <label for="add">Description :</label>
        <textarea
          maxlength="50"
          v-model="operation.desc"
          name="add"
          id="add"
          cols="30"
          rows="3"
        ></textarea>
        <label for="add">Amount :</label>
        <input type="number" id="add" v-model.number="operation.amount" />
        <button>Add</button>
      </form>
    </div>
    <div class="form" v-if="formDisplay === 'withdraw'">
      <form action="#" @submit.prevent="addToDebitHandler">
        <label for="withdraw">Description :</label>
        <textarea
          maxlength="50"
          v-model="operation.desc"
          name="withdraw"
          id="withdraw"
          cols="30"
          rows="3"
        ></textarea>
        <label for="withdraw">Amount :</label>
        <input v-model="operation.amount" type="number" id="withdraw" />
        <button>Withdraw</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.form-display {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

div.select {
  font-size: 2rem;
  option {
    font-size: 1.2rem;
  }
}

div.form {
  width: 50%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
}

form {
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
}

input,
textarea {
  margin-bottom: 25px;
  font-size: 1.3rem;
}

button {
  width: 100px;
  padding: 5px;
  font-size: 1.5rem;
  margin-top: 15px;
}
</style>
