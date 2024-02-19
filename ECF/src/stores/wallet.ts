import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { item } from "@/catalog/type";

export const useWalletStore = defineStore("wallet", () => {
  // Refs
  const wallet = ref<item[]>([]);
  const credit = ref<item[]>([]);
  const debit = ref<item[]>([]);

  //Computed
  const totalCredit = computed(() => {
    const total = credit.value.map((obj) => obj.amount);
    return total.reduce((a, c) => a + c, 0);
  });

  const totalDebit = computed(() => {
    const total = debit.value.map((obj) => obj.amount);
    return total.reduce((a, c) => a + c, 0);
  });

  const currentBalance = computed(() => {
    return totalCredit.value - totalDebit.value
  });

  // Functions
  const addToCredit = (obj: item) => {
    credit.value.push(obj);
    localStorage.setItem("creditTab", JSON.stringify(credit.value));
  };

  const addToDebit = (obj: item) => {
    debit.value.push(obj);
  };

  return {
    wallet,
    credit,
    debit,
    totalCredit,
    totalDebit,
    currentBalance,
    addToCredit,
    addToDebit,
  };
});
