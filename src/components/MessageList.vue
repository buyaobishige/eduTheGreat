<template>
  <div>
    <div>
      <a-menu mode="horizontal" v-model="current">
        <a-menu-item @click="messageAqcuisition('edu')" key="edu">教育学部</a-menu-item>
        <a-menu-item @click="messageAqcuisition('bio')" key="bio">生命科学学院</a-menu-item>
        <a-menu-item @click="messageAqcuisition('psy')" key="psy">心理学院</a-menu-item>
        <a-menu-item @click="messageAqcuisition('chinese')" key="chinese">文学院</a-menu-item>
      </a-menu>
    </div>
    <!-- <P>{{list}}</P> -->
    <a-list :dataSource="list" :loading="isLoading" itemLayout="horizontal">
      <a-list-item slot="renderItem" slot-scope="item">
        <a-list-item-meta :description="item.time">
          <a :href="item.url" slot="title">{{item.text}}</a>
          <!-- <a-avatar slot="avatar" src="../assets/o2o.png" /> -->
        </a-list-item-meta>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
import _ from "axios";

export default {
  name: "MessageList",
  data() {
    return {
      list: null,
      isLoading: true,
      current: ["edu"]
    };
  },
  methods: {
    messageAqcuisition(faculty = "edu") {
      // _.get(`/api/${faculty}.php`).then(res => {
      _.get(`https://lin.nenuyouth.com/server/${faculty}.php`).then(res => {
        this.isLoading = false;
        let data = res.data;
        if (faculty == "chinese") {
          data.sort((a, b) => {
            return b.time.replace(/-/g, "") - a.time.replace(/-/g, "");
          });
        }
        data.length > 12 ? (data.length = 12) : data;
        this.list = data;
      });
    }
  },
  mounted() {
    this.messageAqcuisition();
  }
};
</script>

<style>
</style>