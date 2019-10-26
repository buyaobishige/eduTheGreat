<template>
  <div>
    <h1>MESSAGE</h1>
    <div class="group" style="display:flex;justify-content:space-around">
      <a-button @click="messageAqcuisition('bio')" type="primary">bio</a-button>
      <a-button @click="messageAqcuisition('edu')" type="primary">edu</a-button>
      <a-button @click="messageAqcuisition('chinese')" type="primary">chinese</a-button>
      <a-button @click="messageAqcuisition('psy')" type="primary">psy</a-button>
    </div>
    <!-- <P>{{list}}</P> -->
    <table border="1">
      <tr :key="index" v-for="(item, index) in list">
        <td>{{item.time}}</td>
        <td>{{item.text}}</td>
        <td>{{item.url}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import _ from "axios";

export default {
  name: "MessageList",
  data() {
    return {
      list: null
    };
  },
  methods: {
    messageAqcuisition(faculty = "edu") {
      // _.get(`/api/${faculty}.php`).then(res => {
      _.get(`http://lin.nenuyouth.com/server/${faculty}.php`).then(res => {
        let data = res.data;
        if (faculty == "chinese") {
          data.sort((a, b) => {
            return b.time.replace(/-/g, "") - a.time.replace(/-/g, "");
          });
          data.length > 12 ? (data.length = 12) : data;
        }
        data.length > 12 ? (data.length = 12) : data;
        this.list = data;
      });
    }
  },
  mounted() {
    this.messageAqcuisition("bio");
  }
};
</script>

<style>
</style>