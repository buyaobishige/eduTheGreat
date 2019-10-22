<template>
  <div>
    <!-- <table border="1">
      <tr :key="i" v-for="i in 5">
        <td :key="j" v-for="j in 6">OK</td>
      </tr>
    </table>-->
    <div id="gitalk-container"></div>
    <h1>hello world</h1>
  </div>
</template>

<script>
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";

export default {
  name: "TableDemo",
  mounted() {
    const gitalk = new Gitalk({
      clientID: "f0e39100fb4cad63b187",
      clientSecret: "21da90ff8a967dba2ee52c9a323ff7feddbfbf39",
      repo: "eduTheGreat",
      owner: "buyaobishige",
      admin: ["buyaobishige"],
      id: location.pathname, // Ensure uniqueness and length less than 50
      distractionFreeMode: false, // ,Facebook-like distraction free mode
      number: 1
    });
    gitalk.render("gitalk-container");
  }
};
</script>
<style lang="stylus" scoped>
/* table
  for i in 0 1 2 3
    tr:nth-child({i})
      $set = red blue blue green
      background ($set[i]) */
</style>
