<template>
  <div class="footer" id="footer">
    <ul class="list-inline footer-links" id="footnav">
      <li>
        <a href="https://github.com/buyaobishige/eduTheGreat">Github</a>
      </li>
      <li>
        <a
          href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzA5MTQ4NjUzMg==&scene=126&bizpsid=0&subscene=0#wechat_redirectnpm"
        >
          东师青年
        </a>
      </li>
      <li>
        <a href="https://buyaobishige.gitee.io/learning/">学教</a>
      </li>
      <li>
        <a href="http://buyaobishige.github.io/eduTheGreat/">功能部</a>
      </li>
      <li>
        <a href="http://wpa.qq.com/msgrd?v=3&uin=838801702&site=qq&menu=yes">联系我</a>
      </li>
    </ul>
    <ul class="list-inline">
      <!-- Please also join us at: -->
      <li class="double">
        <a href="http://twitter.com/ej_economics">
          <i aria-hidden="true" class="fa fa-twitter"></i>
        </a>
      </li>
      <li class="double">
        <a href="https://de-de.facebook.com/ejeconomics">
          <i aria-hidden="true" class="fa fa-facebook"></i>
        </a>
      </li>
      <li class="double">
        <a href="https://www.linkedin.com/in/economics-e-journal-25357460">
          <i class="fa fa-linkedin"></i>
        </a>
      </li>
    </ul>

    <ul class="list-inline">
      <li style="margin-right:25px;">
        <a href="https://www.ifw-kiel.de/">
          <img
            alt="Footer Logo IfW"
            src="/++theme++zbw.ejDiazo/static/img/logo.ifw.en.bw.trans.invert.png"
          />
        </a>
      </li>

      <li style="margin-left:25px;">
        <a href="http://zbw.eu/en">
          <img
            alt="Footer Logo ZBW"
            src="/++theme++zbw.ejDiazo/static/img/zbw-logo-trans-invert.png"
          />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default { name: "MyFooter" };
</script>

<style lang="stylus" scoped>
#footer
  background-color #455A64
  color white
  text-align center
  font-family 'Lato', sans-serif
  margin-bottom -20px
  padding-bottom 10px

.footer-links
  margin-top 1em
  padding 10px

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
</style>
