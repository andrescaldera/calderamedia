<template>
  <section class="section">
    <Banner :title="title"></Banner>
  </section>
</template>

<script>
import Banner from '@/components/molecules/Banner';

export default {
  name: 'Video',
  components: {
    Banner,
  },
  data() {
    return {
      title: 'video',
    };
  },
};
</script>

<style scoped lang="scss">

</style>
