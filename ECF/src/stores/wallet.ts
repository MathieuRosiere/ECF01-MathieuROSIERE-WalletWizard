import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { item } from "@/catalog/type";

export const useWalletStore = defineStore("wallet", () => {
  const wallet = ref<item[]>([]);
  const credit = ref<item[]>([]);
  const debit = ref<item[]>([]);

  const totalCredit = computed(() => {
    const total = credit.value.map((obj) => obj.amount);
    console.log(total);
    return total.reduce((a, c) => a + c, 0);
  });

  const addToCredit = (obj: item) => {
    credit.value.push(obj);
  };

  return { wallet, credit, debit, totalCredit, addToCredit };
});
