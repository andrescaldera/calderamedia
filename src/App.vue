<template>
  <main id="app">
    <HeaderNav></HeaderNav>
    <router-view/>
  </main>
</template>

<script>
  import HeaderNav from '@/components/molecules/HeaderNav';
  export default {
  components: {
    HeaderNav,
  },
  name: 'App',
};
</script>

<style lang="scss">
@import './assets/scss/index';

* {
  margin: 0px;
  padding: 0px;
}
body {
  background-color: $color__bg_body;
}
#app {
  font-family: $font_main;
  font-size: $font_size;
  font-weight: $font_weight;
  text-align: center;
  color: $color__text;
  background-color: $color__bg_body;
}
</style>
