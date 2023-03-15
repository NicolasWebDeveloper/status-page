<template>
  <base-page title="Overview">
    <div class="overview__page" v-if="ready">
      <base-card>
        <h1>Memory</h1>
        <base-status :max="systemInfo.memory.total" :used="systemInfo.memory.used"></base-status>
        <div>
          <h2>{{ systemInfo.memory.used.toFixed(2) + ' / ' + systemInfo.memory.total.toFixed(2) + ' GB' }}</h2>
          <h2>Usage</h2>
        </div>
      </base-card>
    </div>
  </base-page>
</template>

<script>
export default {
  data() {
    return {
      systemInfo: null,
      ready: false,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        console.log('test');
        const rawData = await fetch('http://localhost:3000/system/all');
        const data = await rawData.json();
        this.systemInfo = data;
        this.ready = true;
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>

<style scoped>
.overview__page {
  height: 100%;
  width: calc(100vw - 22rem);
}
</style>
