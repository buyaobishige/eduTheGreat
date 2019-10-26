<template>
  <div :class="nightmode == true ? 'night' : 'daylight'" id="app">
    <Navbar />
    <div class="container">
      <router-view />
      <div id="components-back-top-demo-custom">
        <a-back-top>
          <div class="ant-back-top-inner">TOP</div>
        </a-back-top>
      </div>
      <!-- <button @click="nightmode = !nightmode">NIGHT</button> -->
    </div>
    <MyFooter />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

import Navbar from "./components/Navbar.vue";
import MyFooter from "./components/MyFooter.vue";


export default {
  name: "app",
  components: {
    // HelloWorld,
    Navbar,
    MyFooter
  },
  data: () => {
    return {
      nightmode: false
    };
  }
};
</script>

<style lang="stylus">
@import 'assets/core.styl'

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
  margin 0
</style>
