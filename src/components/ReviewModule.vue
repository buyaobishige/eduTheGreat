<template>
  <div>
    <div id="gitalk-container"></div>
  </div>
</template>

<script>
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";

export default {
  name: "ReviewModule",
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
<style lang="stylus">
$font-color = #68be8d

.gt-action, .gt-link, .gt-btn-preview
  color $font-color !important

button.gt-btn
  border-color $font-color !important

.gt-btn-login
  background $font-color !important

a.gt-header-controls-tip
  display none

@media (max-width: 900px)
  .gt-meta
    margin 0 0 !important
    text-align left
</style>
