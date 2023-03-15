<template>
  <main>
    <the-sidebar></the-sidebar>
    <router-view></router-view>
  </main>
</template>

<script>
import TheSidebar from './components/layout/Sidebar/TheSidebar.vue';
export default {
  components: {
    TheSidebar,
  },
};
</script>

<style>
@font-face {
  font-family: 'Montserrat';
  src: url('../assets/fonts/Montserrat.ttf');
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
}

body {
  width: 100vw;
  background-color: #1c2039;
}

main {
  display: flex;
}
</style>
