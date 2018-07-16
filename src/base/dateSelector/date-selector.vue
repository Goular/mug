<template>
  <div class="container">
    <div class="button">
      <span>本日</span>
      <img src="./arrow_triangle_down.png"/>
    </div>
    <div class="blank"></div>
  </div>
</template>

<script>
export default {
  name: 'date-selector'
}
</script>

<style scoped lang="stylus">
  .container
    background-color #011128
    font-size 36px
    color #e7e7e7
    width 100%
    height 88px
    display flex
    .button
      height 100%
      display flex
      align-items center
      padding-left 48px
      img
        width 24px
        height 24px
        margin-left 24px
    .blank
      flex 1
</style>
