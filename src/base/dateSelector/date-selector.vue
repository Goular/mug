<template>
  <div >
    <div class="container">
      <div class="button" @click="switchSelector">
        <span>本日</span>
        <img src="./arrow_triangle_down.png"/>
      </div>
      <div class="blank"></div>
    </div>
    <!-- 显示可以选择的内容 -->
    <div>
      <div class="date-item" @click="selectDate">本日</div>
      <div class="date-item" @click="selectDate">本周</div>
      <div class="date-item" @click="selectDate">本月</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'date-selector',
  methods: {
    switchSelector (e) { // 开启或者关闭日期选择器
      console.dir(e)
    },
    selectDate (e) { // 选择日期
      console.log('1122334')
      console.dir(e)
    }
  }
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
  .date-item
    background-color #011128
    font-size 32px
    color #ff8a55
    width 176px
    padding-top 16px
    padding-bottom 16px
    text-align center
    align-content center
    margin-top 1px
</style>
