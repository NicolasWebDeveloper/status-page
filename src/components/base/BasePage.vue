<template>
  <div class="base__page">
    <div>
      <h1 class="base__page-title">{{ title }}</h1>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<style>
.base__page {
  height: 100vh;
  width: calc(100vw - 20rem);
  padding: 1rem;
}

.base__page-title {
  color: #b9c3cd;
  margin-bottom: 1rem;
}
</style>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
