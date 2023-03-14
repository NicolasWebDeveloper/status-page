<template>
  <div class="sidebar">
    <h1 class="title">SRV01 - Stats</h1>
    <div class="container">
      <p class="subtitle">Menu</p>
      <ul class="menu">
        <TheSidebarMenuItem
          v-for="item of menuItems"
          :title="item.title"
          :icon="item.icon"
          :link="item.link"
        ></TheSidebarMenuItem>
      </ul>
    </div>
  </div>
</template>

<script>
import TheSidebarMenuItem from './TheSidebarMenuItem.vue';

export default {
  data() {
    return {
      menuItems: [
        { title: 'Overview', icon: 'fa-solid fa-gauge', link: '/' },
        { title: 'Logs', icon: 'fa-solid fa-note-sticky', link: '/logs' },
        { title: 'Database', icon: 'fa-solid fa-database', link: '/database' },
        { title: 'Firewall', icon: 'fa-solid fa-ban', link: '/firewall' },
        { title: 'Analytics', icon: 'fa-solid fa-chart-pie', link: '/analytics' },
        { title: 'Development', icon: 'fa-solid fa-code', link: '/development' },
      ],
    };
  },
  components: {
    TheSidebarMenuItem,
  },
};
</script>

<style>
.sidebar {
  width: 20rem;
  height: 100vh;
  background-color: #252c48;
  padding: 1rem;
}

.title {
  color: #b9c3cd;
}

.subtitle {
  color: #4b506e;
  font-weight: bolder;
  margin-bottom: 1rem;
}

.container {
  margin-top: 5rem;
}

.menu {
  list-style-type: none;
}

.menu__item > a {
  display: flex;
  align-items: center;
  color: #71778f;
  text-decoration: none;
  margin: 0.4rem;
}

.menu__item-title {
  margin-left: 0.2rem;
}
</style>
