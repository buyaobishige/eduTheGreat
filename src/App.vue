<template>
  <div :class="nightmode == true ? 'night' : 'daylight'" id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <TableDemo />

    <button @click="nightmode = !nightmode">NIGHT</button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import TableDemo from "./components/TableDemo.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    TableDemo
  },
  data: () => {
    return {
      nightmode: false
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.night {
  background: #000;
}
</style>
