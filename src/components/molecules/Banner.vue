<template>
  <section class="section">
    <header class="title-container" >
      <h1 class="title">
       {{title}}
      </h1>
    </header>
    <div class="hero" >
      <!-- eslint-disable-next-line -->
      <!-- <img class="hero-img" :src="$store.state.photo.imgs[Math.floor(Math.random() * 10)].src_fullsize"  -->
      <!-- alt=""> -->
      <!-- eslint-disable-next-line -->
      <!-- <div class="hero-img" :style="{'background-image' : `url(${$store.state.photo.imgs[Math.floor(Math.random() * 10)].src_fullsize})`}" ></div> -->
      <div class="hero-body">
        <div class="container container-hero-content">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/index';

.hero{
  position: relative;
  min-height: 55vw;
  width: 90%;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: -3px 3px 41px 0 rgba(0,0,0,0.18);
  margin: 40px auto;
  overflow: hidden;
}

.hero-img {
  width: 100%;
  height: 55vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.hero-body{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
}
.title-container {
  position: absolute;
  height: 80px;
  width: 100vw;
  background-color: transparent;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;

}
.title {
  font-family: $font_title;
  color: $color__text;
  font-weight: 300;
  font-size: 1.5rem;
  letter-spacing: 1px;
  text-align: center;
  margin: 0px;
}

.subtitle {
  font-weight: 300;
  font-size: 1.2rem;
  color: #f7f7f7;
  word-spacing: 5px;
  padding-bottom: 15px;
  text-align: center;
}
</style>
