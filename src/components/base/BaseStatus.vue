<template>
  <div class="status__bar">
    <div class="status__bar-inner" :style="width"></div>
  </div>
</template>

<script>
export default {
  props: ['max', 'used'],
  computed: {
    width() {
      return `width: ${(this.used / this.max) * 100}%`;
    },
  },
};
</script>

<style>
.status__bar {
  width: 23rem;
  height: 4rem;
  border: 0;
  border-radius: 1rem;
  background-color: #2b466e;
}

.status__bar-inner {
  height: 4rem;
  background-color: #589bff;
  border-radius: 1rem 0 0 1rem;
}
</style>
