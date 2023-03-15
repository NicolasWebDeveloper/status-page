<template>
  <base-page title="Overview">
    <div class="overview__page" v-if="store.isReady">
      <base-card>
        <h1>Memory</h1>
        <base-status :max="store.systemInfo.memory.total" :used="store.systemInfo.memory.used"></base-status>
        <div>
          <h2>
            {{ store.systemInfo.memory.used.toFixed(2) + ' / ' + store.systemInfo.memory.total.toFixed(2) + ' GB' }}
          </h2>
          <h2>Usage</h2>
        </div>
      </base-card>
      <base-card>
        <h1>CPU</h1>
        <div>
          <h1>{{ store.systemInfo.cpu.speed + ' GHz' }}</h1>
          <h2>Speed</h2>
        </div>
        <div></div>
      </base-card>
      <base-card>
        <h1>OS</h1>
        <div>
          <h1>{{ store.systemInfo.osInfo.platform }}</h1>
          <h2>{{ store.systemInfo.osInfo.distro }}</h2>
        </div>
        <div></div>
      </base-card>
    </div>
  </base-page>
</template>

<script>
import { useSystemInfo } from '../../stores/systemInfo';

export default {
  data() {
    return {
      systemInfo: null,
      ready: false,
    };
  },
  mounted() {
    this.store.fetchData();
  },
  setup() {
    const store = useSystemInfo();
    return { store };
  },
};
</script>

<style scoped>
.overview__page {
  height: 100%;
  width: calc(100vw - 22rem);
  display: flex;
  flex-wrap: wrap;
}
</style>
