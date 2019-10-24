<template>
  <div>
    <a-col :span="12">
      <div class="mission-left">
        <div class="mis-img-left grid mask">
          <figure class="effect-jazz">
            <img alt="img02" class="img-responsive zoom-img" src="../assets/img2.jpg" />
            <figcaption>
              <h4>生涯图书馆</h4>
              <p>我组在韩冬老师指导下做的帮助大一新生适应大学生活的活动,我组用web开发技术把各种数据可视化、系统化地呈现给大家。</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </a-col>
    <a-col :span="12"></a-col>
  </div>
</template>

<script>
export default {
  name: "MyImage"
};
</script>
<style lang="stylus">
figure
  max-width 40%

img
  width 100%

figure.effect-jazz
  background -webkit-linear-gradient(-45deg, #f3cf3f 0%, #f33f58 100%)
  background linear-gradient(-45deg, #f3cf3f 0%, #f33f58 100%)

figure.effect-jazz img
  opacity 0.9

figure.effect-jazz figcaption::after, figure.effect-jazz img, figure.effect-jazz p
  -webkit-transition opacity 0.35s, -webkit-transform 0.35s
  transition opacity 0.35s, transform 0.35s

figure.effect-jazz figcaption::after
  position absolute
  top 0
  left 0
  width 100%
  height 100%
  border-top 1px solid #fff
  border-bottom 1px solid #fff
  content ''
  opacity 0
  -webkit-transform rotate3d(0, 0, 1, 45deg) scale3d(1, 0, 1)
  transform rotate3d(0, 0, 1, 45deg) scale3d(1, 0, 1)
  -webkit-transform-origin 50% 50%
  transform-origin 50% 50%

figure.effect-jazz h4, figure.effect-jazz p
  opacity 1
  -webkit-transform scale3d(0.8, 0.8, 1)
  transform scale3d(0.8, 0.8, 1)

figure.effect-jazz h4
  padding-top 32%
  -webkit-transition -webkit-transform 0.35s
  transition transform 0.35s
  font-size 36px
  color #fff

figure.effect-jazz p
  padding 3.5em 2em 0
  text-transform none
  font-size 0.85em
  opacity 0

figure.effect-jazz:hover img
  opacity 0.7
  -webkit-transform scale3d(1.05, 1.05, 1)
  transform scale3d(1.05, 1.05, 1)

figure.effect-jazz:hover figcaption::after
  opacity 1
  -webkit-transform rotate3d(0, 0, 1, 45deg) scale3d(1, 1, 1)
  transform rotate3d(0, 0, 1, 45deg) scale3d(1, 1, 1)

figure.effect-jazz:hover h4, figure.effect-jazz:hover p
  opacity 1
  -webkit-transform scale3d(1, 1, 1)
  transform scale3d(1, 1, 1)

figure.effect-jazz:hover h4
  padding-top 20%

.grid
  position relative
  clear both
  margin 0 auto
  list-style none
  text-align center

/* Common style */
.grid figure
  position relative
  float left
  overflow hidden
  text-align center
  background #576524

.grid figure img
  position relative
  display block
  min-height 100%
  max-width 100%
  opacity 0.8

.grid figure figcaption
  padding 2em
  color #fff
  text-transform uppercase
  font-size 1.25em
  -webkit-backface-visibility hidden
  backface-visibility hidden

.grid figure figcaption::before, .grid figure figcaption::after
  pointer-events none

.grid figure figcaption, .grid figure figcaption > a
  position absolute
  top 0
  left 0
  width 100%
  height 100%
</style>
