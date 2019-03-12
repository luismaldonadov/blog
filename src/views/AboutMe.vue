<template>
  <div class="about-me-container">
    <h1>{{ aboutMe.fields.heading_content }}</h1>
    <p>{{ aboutMe.fields.paragraph1 }}</p>
    <p>{{ aboutMe.fields.paragraph2 }}</p>
    <p>{{ aboutMe.fields.closing_quote }}</p>
  </div>
</template>

<script>
import Butter from 'buttercms';

export const butter = Butter('08871835f21d88def0b1b835cd02cb110c963c0c');

export default {
  name: 'AboutMe',
  data() {
    return {
      aboutMe: null,
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => vm.getAboutMePage());
  },
  created() {
    this.getHomePage();
  },
  methods: {
    getAboutMePage() {
      butter.page.retrieve('*', 'about-me')
        .then((response) => {
          this.aboutMe = response.data.data;
        }).catch((error) => {
          throw new Error(error);
        });
    },
  },
};
</script>

<style scoped lang="scss">
.about-me-container {
  grid-area: body;
  margin: 35px;
  @media only screen and (min-width: 1224px) {
    min-height: 35vh;
    max-heigh: 50vh;
    max-width: $page-width;
  }
}

</style>
