<template>
  <div class="container">
    <img alt class="records" src="../assets/icons/person.svg" />
    <span>{{ author }}</span>
    <img alt class="records" src="../assets/icons/views.svg" />
    <span>{{ views }}</span>
  </div>
</template>

<script>
import _ from "axios";

export default {
  name: "RecordSubmit",
  data() {
    return {
      author: "林某某",
      views: null
    };
  },
  mounted() {
    let pathname = location.hash.replace(/\//g, "`");
    _.get("https://lin.nenuyouth.com/server/records/recordsHandler.php", {
      // _.get("/server/records/recordsHandler.php", {
      params: { pathname }
    }).then(res => {
      this.views = res.data.views;
    });
  }
};
</script>

<style lang="stylus">
img.records
  width 30px
</style>
