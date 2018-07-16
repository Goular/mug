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
      <div class="chartPanel">

        <!-- 图表区域 -->
        <ve-line class="chart" :data="chartData1" :extend="extend1"></ve-line>
        <ve-line class="chart m-top-12" :data="chartData1" :extend="extend1"></ve-line>

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
      switchText: '本日',
      chartData1: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
          { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
          { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
          { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
          { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
          { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 },
          { '日期': '1/7', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
          { '日期': '1/8', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
          { '日期': '1/9', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
          { '日期': '1/10', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
          { '日期': '1/11', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
          { '日期': '1/12', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
        ]
      },
      extend1: {
        'xAxis.0.axisLabel.rotate': 45,
        legend: {
          y: 'bottom'
        },
        title: {
          show: true,
          text: '主标题',
          // subtext: '副标题',
          x: 'center',
          padding: 8
        }
      }
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
  },
  mounted () {
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
      background-color #e7e7e7
      flex 1
      position relative
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
          padding-top 16px
          padding-bottom 16px
          margin-top 1px
          font-size 16px
      .chartPanel
        overflow scroll
    .common-font-color
      color #e7e7e7
    .select-font-color
      color #ff8a55
  .chart
    background-color white
    width 99%
  .m-top-12
    margin-top 12px
</style>
