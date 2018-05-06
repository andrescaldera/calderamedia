<template>
  <section class="container">
    <Banner :title="title" class="" ></Banner>
    <!-- <container class="grid__container">
    </container> -->
  </section>
</template>

<script>
import axios from 'axios';
import Banner from '@/components/molecules/Banner';

export default {
  name: 'Photo',
  components: {
    Banner,
  },
  data() {
    return {
      title: 'photo',
    };
  },
  // async fetch ({ store, params }) {
  //   let { data } = await axios.get('https://calderamedia-89c9d.firebaseio.com/galleries/banner.json')
  //   cosole.log(data)
  //   store.dispatch('GET_PHOTOS', data)
  // }
};
</script>
<style scoped lang="scss">

</style>
