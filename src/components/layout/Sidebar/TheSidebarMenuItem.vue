<template>
  <li class="menu__item">
    <router-link :to="link">
      <font-awesome-icon :icon="icon" />
      <p class="menu__item-title">{{ title }}</p>
    </router-link>
  </li>
</template>

<script>
export default {
  props: ['link', 'icon', 'title'],
};
</script>
