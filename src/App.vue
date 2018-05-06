<template>
  <main id="app">
    <HeaderNav></HeaderNav>
    <router-view/>
  </main>
</template>

<script>
  import axios from 'axios';
  import HeaderNav from '@/components/molecules/HeaderNav';
  export default {
  components: {
    HeaderNav,
  },
  name: 'App',
  mounted() {
    axios.get('https://calderamedia-89c9d.firebaseio.com/galleries/banner.json').then((response) => {
      // console.log(response.data)
      // this.results = response.data.results;
      this.$store.dispatch('GET_PHOTOS', response.data);
    }).catch( error => { console.log(error); });
  },
  // async fetch (store) {
  //   try {
  //     const response = await axios.get('https://calderamedia-89c9d.firebaseio.com/galleries/banner.json')
  //     console.log(response.data);
  //     store.dispatch('GET_PHOTOS', response.data);
  //   } catch (e) {
  //     // this.errors.push(e)
  //     console.log('error');
  //   }
  // }
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
