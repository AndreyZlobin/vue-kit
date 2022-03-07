import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('global', {
  state: () => ({
    counter: 0,
  }),
  actions: {
  async  increment() {
    await new Promise(((resolve) => setTimeout(resolve, 300)));
    this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
});
