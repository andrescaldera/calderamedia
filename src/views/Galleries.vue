<template>
  <main class="container">
    <Banner :title="title"></Banner>
  </main>
</template>

<script>
import Banner from '@/components/molecules/Banner';

export default {
  name: 'Galleries',
  components: {
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
