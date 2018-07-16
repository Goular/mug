<template>
  <div class="contianer">
    <div class="date">
      <div class="dateButton" @click="switchSelector">
        <span>{{switchText}}</span>
        <img src="../../assets/img/arrow_triangle_down.png"/>
      </div>
    </div>
    <div class="main">
      <div v-show="switchPanel" class="datePanel">
        <span class="date-item" @click="selectDate(1)" :class="selectIndex == '1'?'select-font-color':'common-font-color'">本日</span>
        <span class="date-item" @click="selectDate(2)" :class="selectIndex == '2'?'select-font-color':'common-font-color'">本周</span>
        <span class="date-item" @click="selectDate(3)" :class="selectIndex == '3'?'select-font-color':'common-font-color'">本月</span>
      </div>
      <div style="clear: both"></div>
      <div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'equipment-data',
  data: function () {
    return {
      switchPanel: false,
      selectIndex: 1,
      switchText: '本日'
    }
  },
  methods: {
    switchSelector (e) { // 开启或者关闭日期选择器
      this.switchPanel = !this.switchPanel
    },
    selectDate (index) { // 选择日期
      console.dir(index)
      this.switchPanel = false
      this.selectIndex = index
      switch (index) {
        case 1:
          this.switchText = '本日'
          break
        case 2:
          this.switchText = '本周'
          break
        case 3:
          this.switchText = '本月'
          break
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  .contianer
    display flex
    flex-direction column
    width 100%
    height 100%
    .date
      line-height 55px
      background-color #011128
      .dateButton
        display flex
        align-items center
        font-size 18px
        color #e7e7e7
        padding 0px 24px
        img
          width 18px
          height 18px
          margin-left 8px
    .main
      flex 1
      background-color white
      position relative
      .datePanel
        position absolute
        display flex
        flex-direction column
        span
          width 176px
          text-align center
          align-content center
          background-color #011128
          padding-top 16px
          padding-bottom 16px
          margin-top 1px
          font-size 16px
    .common-font-color
      color #e7e7e7
    .select-font-color
      color #ff8a55
</style>
