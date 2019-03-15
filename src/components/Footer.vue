<template>
  <div class="footer-links">
    <div class="icons">
      <a :href="email">
        <font-awesome-icon :icon="['far', 'envelope']" size="2x"/>
      </a>
      <a :href="github">
        <font-awesome-icon :icon="['fab', 'github']" size="2x"/>
      </a>
      <a :href="linkedin">
        <font-awesome-icon :icon="['fab', 'linkedin']" size="2x"/>
      </a>
      <a :href="stackOverflow">
        <font-awesome-icon :icon="['fab', 'stack-overflow']" size="2x"/>
      </a>
    </div>
    <div class="buttercms">
      Powered by
      <a href="https://buttercms.com/">
        <img class="buttercms-logo" src="https://cdn.buttercms.com/PGJPyIwaQ2KnOA8UyKfH">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apiURL: "https://buttercms.com/",
      github: "https://github.com/luismaldonadov",
      linkedin: "https://www.linkedin.com/in/luismaldonadov/",
      stackOverflow:
        "https://stackoverflow.com/users/10286251/luis-maldonado?tab=profile",
      email: "mailto:contact@luism.me"
    };
  }
};
</script>

<style scoped lang="scss">
.footer-links {
  display: flex;
  justify-content: center;
  align-items: center;
  .icons {
    color: $main-color;
    display: flex;
    align-items: center;
    svg {
      margin-left: 20px;
      margin-right: 20px;
    }
  }
  .buttercms {
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: bold;
    font-family: $theme-font-display;
    font-size: 24px;
    .buttercms-logo {
      vertical-align: middle;
      height: 49px;
      width: 200px;
    }
  }
}
</style>
