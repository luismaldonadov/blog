<template>
  <div class="home-container">
    <h1>{{ homePage.fields.heading_content }}</h1>
    <div>
      {{ homePage.fields.first_paragraph }}
    </div>
  </div>
</template>

<script>

import Butter from 'buttercms';

export const butter = Butter('08871835f21d88def0b1b835cd02cb110c963c0c');

export default {
  name: 'Home',
  data() {
    return {
      homePage: '',
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => vm.getHomePage());
  },
  created() {
    this.getHomePage();
  },
  methods: {
    getHomePage() {
      butter.page.retrieve('*', 'home')
        .then((response) => {
          this.homePage = response.data.data;
        }).catch((error) => {
          this.error = error.toString();
          throw new Error(error);
        });
    },
  }
};
</script>

<style scoped lang="scss">
.home-container {
  grid-area: body;
  margin: 35px;
  @media only screen and (min-width: 1224px) {
    min-height: 35vh;
    max-heigh: 50vh;
    max-width: $page-width;
  }
}

</style>
