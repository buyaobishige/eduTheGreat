<template>
  <div :class="nightmode == true ? 'night' : 'daylight'" id="app">
    <Navbar />
    <MessageList />
    <div class="container">
      <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
      <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
      <router-view></router-view>
      <ReviewModule />
      <router-link to="/main">
        <a-button type="primary">main</a-button>
      </router-link>
      <!-- <button @click="nightmode = !nightmode">NIGHT</button> -->
    </div>
    <MyFooter />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import ReviewModule from "./components/ReviewModule.vue";
import Navbar from "./components/Navbar.vue";
import MyFooter from "./components/MyFooter.vue";
import MessageList from "./components/MessageList.vue";

export default {
  name: "app",
  components: {
    // HelloWorld,
    ReviewModule,
    Navbar,
    MyFooter,
    MessageList
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
