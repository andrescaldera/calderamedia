<template>
  <div>
    <HeaderNav :title="title" />
    <v-content>
      <Banner/>
    </v-content>
  </div>
</template>

<script>
import axios from 'axios';
import HeaderNav from '../components/molecules/HeaderNav';
import Banner from '@/components/molecules/Banner';

export default {
  name: 'Photo',
  components: {
    HeaderNav,
    Banner,
  },
  data() {
    return {
      title: 'photo',
    };
  },
  async fetch ({ store, params }) {
    let { data } = await axios.get('https://calderamedia-89c9d.firebaseio.com/galleries/banner.json')
    store.dispatch('GET_PHOTOS', data)
  }
};
</script>
<style scoped lang="scss">

</style>
