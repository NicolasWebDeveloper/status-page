<template>
  <the-sidebar></the-sidebar>
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
  background-color: #1c2039;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
}
</style>
