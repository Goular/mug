<template>
  <div class="date">
    <div class="dateButton" @click="switchSelector">
      <span>{{switchText}}</span>
      <img v-show="!switchPanel" src="./arrow_triangle_down.png"/>
      <img v-show="switchPanel" src="./arrow_triangle_up.png"/>
    </div>
    <div style="flex: 1"></div>
    <div v-show="switchPanel" class="datePanel">
      <span @click="selectDate(1)" :class="selectIndex == '1'?'select-font-color':'common-font-color'">本日</span>
      <span @click="selectDate(2)" :class="selectIndex == '2'?'select-font-color':'common-font-color'">本周</span>
      <span @click="selectDate(3)" :class="selectIndex == '3'?'select-font-color':'common-font-color'">本月</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'date-selector',
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
      switchPanel: false,
      selectIndex: 1,
      switchText: '本日'
    }
  },
  methods: {
    switchSelector (e) { // 开启或者关闭日期选择器
      if (this.loading === true) {
        return
      }
      this.switchPanel = !this.switchPanel
    },
    selectDate (index) { // 选择日期
      this.switchPanel = false
      if (index === this.selectIndex) {
        return
      }
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
      this.$emit('getSelectIndex', this.selectIndex)
    }
  }
}
</script>

<style scoped lang="stylus">
  .date
    line-height 44px
    background-color #011128
    position relative
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
    .datePanel
      position absolute
      display flex
      flex-direction column
      z-index 2
      span
        width 176px
        text-align center
        align-content center
        background-color #011128
        margin-top 1px
        font-size 16px
  .common-font-color
    color #e7e7e7
  .select-font-color
    color #ff8a55
</style>
