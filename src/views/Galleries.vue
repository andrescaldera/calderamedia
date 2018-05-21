<template>
  <div>
    <HeaderNav :title="title" />
    <v-content>
      <Banner/>
      <!-- <section>
        <v-parallax
          :src="$store.state.photos.imgs[Math.floor(Math.random() * 10)].src_fullsize"
          height="450"
        >
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          > -->
            <!-- <img
              class="hero-img"
              :src="$store.state.photos.imgs[Math.floor(Math.random() * 10)].src_fullsize"
              alt=""
            > -->
            <!-- <h1 class="white--text mb-2 display-1 text-xs-center">Parallax Template</h1>
          </v-layout>
        </v-parallax>
      </section> -->
    </v-content>
  </div>
</template>

<script>
import HeaderNav from '../components/molecules/HeaderNav';
import Banner from '@/components/molecules/Banner';

export default {
  name: 'Galleries',
  components: {
    HeaderNav,
    Banner,
  },
  data() {
    return {
      title: 'galleries',
    };
  },
};
</script>

<style scoped lang="scss">

</style>
