<template>
  <div id="app" class="container">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about-me">About Me</router-link>
    </div>
    <div id="footer">
      <Footer />
    </div>
    <router-view/>
  </div>
</template>

<script>
import Footer from './components/Footer.vue';

export default {
  components: {
    Footer
  },
};
</script>


<style lang="scss">
#app {
   -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#nav {
  padding: 30px;
  grid-area: navBar;
  min-width: $page-width;
  a {
    font-weight: bold;
    font-size: 24px;
    font-family: $theme-font-secondary;
    color: $base-text-color;
    &.router-link-exact-active {
      color: $secondary-color
    }
  }
}
#footer {
  grid-area: footer;
  min-width: $page-width;
}
</style>
