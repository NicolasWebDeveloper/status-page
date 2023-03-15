import { defineStore } from 'pinia';

export const useSystemInfo = defineStore('systemInfo', {
  state() {
    return {
      systemInfo: {},
      isReady: false,
    };
  },
  actions: {
    async fetchData() {
      const rawData = await fetch('http://localhost:3000/system/all');
      const data = await rawData.json();
      this.systemInfo = data;
      this.isReady = true;
    },
  },
});
