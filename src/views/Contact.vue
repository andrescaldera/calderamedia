<template>
  <main class="container">
    <Banner :title="title"></Banner>
  </main>
</template>

<script>
import Banner from '@/components/molecules/Banner';

export default {
  name: 'Contact',
  components: {
    Banner,
  },
  data() {
    return {
      title: 'contact',
    }
  },
};
</script>

<style scoped lang="scss">

</style>
