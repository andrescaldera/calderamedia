<template>
    <header class="header">
      <div class="navbar">
        <router-link to="/" class="logo" href="">
          <img src="../../assets/imgs/logo/logo_calderamedia@2x.png" alt="Caldera Media logo">
        </router-link>
        <nav class="nav">
          <div class="navbar_nav" :class="classOpen">
            <router-link class="nav_link" active-class="active" to="/" exact>Photo</router-link>
            <router-link
              class="nav_link"
              active-class="active"
              to="/galleries">galleries
            </router-link>
            <router-link class="nav_link" active-class="active" to="/video">video</router-link>
            <router-link class="nav_link" active-class="active" to="/contact">contact</router-link>
          </div>
          <div class="menu_toggle" @click="openNav">
            <img
              v-if="!isNavOpen"
              class="menu_icon_open"
              src="../../assets/imgs/icon/ic_menu_black_24px.svg"
              alt="Hamburguer menu">
            <img
              v-else
              class="menu_icon_close"
              src="../../assets/imgs/icon/ic_close_black_24px.svg"
              alt="Hamburguer menu">
          </div>
        </nav>
      </div>
    </header>
</template>

<script>

export default {
  name: 'HeaderNav',
  components: {
  },
  data() {
    return {
      isNavOpen: false,
    };
  },
  methods: {
    openNav() {
      this.isNavOpen = !this.isNavOpen;
    },
  },
  computed: {
    classOpen() {
      return {
        open: this.isNavOpen,
      };
    },
  },
};
</script>

<style scoped lang="scss">
@import '../../assets/scss/index';

.header {
  width: 100%;
  background-color: $color__bg_body;
  height: 5rem;
  box-shadow: $shadow_1;
}
.navbar {
  align-items: center;
  display: flex;
  height: 100%;
  padding: 0 2.5em;
  position: relative;
}
.logo {
  width: 6rem;
  height: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  img {
    width: 100%;
    object-fit: contain;
  }
}

.nav {
  display: flex;
  height: 100%;
  z-index: 1;
  display: flex;
  margin-left: auto;
  align-items: center;
}
.navbar_nav {
  display: none;
  position: absolute;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 80px);
  top: 80px;
  right: -120px;
  justify-content: space-around;
  align-items: center;
  background-color: $black_red;
  width: 110px;
  box-shadow: $shadow_1;
  transition: right 0.3s ease-in-out;
  &.open {
    right: 0px;
  }
  @include breakpoint(desktop) {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: row;
    top: auto;
    right: auto;
    align-items: center;
    background-color: transparent;
    width: auto;
    box-shadow: none;
  }
}
.menu_toggle {
  display: inline-block;
  cursor: pointer;
  @include breakpoint(desktop) {
    display: none;
  }
}
.nav_link {
  position: relative;
  text-decoration: none;
  line-height: $line_height;
  padding: 5px 10px 8px;
  background-color: transparent;
  border-radius: 25px;
  color: $color__text_white;
  margin: 0px;
  font-size: 1rem;
  border: 0;
  text-transform: lowercase;
  &:before {
    content: '';
    position: absolute;
    width: 0%;
    height: 3px;
    top: 100%;
    left: 10%;
    background: $color__bg_gradient;
    opacity: 0;
    border-radius: 25px;
    transition: opacity .3s ease-in-out, width .2s ease-in-out;
  }
  &:active, &:visited, &:focus {
    border: 0px;
    outline: none;
  }
  &:hover{
    &:before {
      opacity: 1;
      width: 80%;
    }
  }
  &.active {
    &:before {
      opacity: 1;
      width: 80%;
    }
  }
  @include breakpoint(desktop) {
    margin-right: 1em;
    color: $color__text;
  }
  &:last-child {
    margin-right: 0px;
  }
}
</style>
