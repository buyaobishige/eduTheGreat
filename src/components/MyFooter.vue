<template>
  <div class="footer" id="footer">
    <ul class="list-inline footer-links" id="footnav">
      <li>
        <a href="https://github.com/buyaobishige/eduTheGreat" target="_blank">Github</a>
      </li>
      <li>
        <a
          href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzA5MTQ4NjUzMg==&scene=126&bizpsid=0&subscene=0#wechat_redirectnpm"
          target="_blank"
        >东师青年</a>
      </li>
      <li>
        <a href="https://buyaobishige.gitee.io/learning/" target="_blank">学教</a>
      </li>
      <li>
        <a href="http://buyaobishige.github.io/eduTheGreat/" target="_blank">功能部</a>
      </li>
      <li>
        <a href="http://wpa.qq.com/msgrd?v=3&uin=838801702&site=qq&menu=yes" target="_blank">联系我</a>
      </li>
    </ul>

    <ul class="list-inline">
      <!-- Please also join us at: -->
      <li class="second">
        <a href="https://vuejs.org/" target="_blank">
          <img class="footerIcon" src="../assets/vue.png" />
        </a>
      </li>
      <li class="second">
        <a href="https://vuepress.vuejs.org/" target="_blank">
          <img class="footerIcon" src="../assets/press.png" />
        </a>
      </li>
      <li class="second">
        <a href="https://vue.ant.design/docs/vue/introduce/" target="_blank">
          <img class="footerIcon" src="../assets/antd.svg" />
        </a>
      </li>
    </ul>

    <ul class="list-inline last">
      <li class="imageWrapper" id="edulogo">
        <a href="http://edu.nenu.edu.cn/">
          <img alt="Footer Logo edulogo" class="footerImg" src="../assets/eduLogo.png" />
        </a>
      </li>

      <li class="imageWrapper" id="xuexiaologo">
        <a href="http://buyaobishige.gitee.io/learning/">
          <img alt="Footer Logo logo" class="footerImg" src="../assets/logo.png" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default { name: "MyFooter" };
</script>

<style lang="stylus" scoped>
.footerImg
  height 70px

.footerIcon
  width 40px

.imageWrapper
  background rgba(255, 255, 255, 0.4)

#footer
  background-color #455A64
  color white
  text-align center
  font-family 'Lato', sans-serif
  margin-bottom -20px
  padding-bottom 10px

.footer-links
  margin-top 1em
  padding-top 10px

.list-inline
  padding-left 0
  margin-left -5px
  list-style none

ol, ul
  margin-bottom 10px

ul
  display block
  margin-block-start 1em
  margin-block-end 1em
  margin-inline-start 0px
  margin-inline-end 0px
  padding-inline-start 40px

.list-inline>li
  display inline-block
  padding-right 5px
  padding-left 5px

*
  box-sizing border-box

li a
  color white !important

#xuexiaologo
  width 373px
  padding 0
  max-width 100% !important

#edulogo
  padding 0

@media (max-width: 850px)
  #xuexiaologo
    margin-top 20px

@media (min-width: 849px)
  #xuexiaologo
    margin-left 25px

  #edulogo
    margin-right 25px

img
  max-width 100%
</style>
