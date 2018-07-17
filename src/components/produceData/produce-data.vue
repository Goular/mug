<template>
  <div class="contianer">
    <date-selector></date-selector>
    <div class="main">
      <!--<div class="chartPanel">-->
        <!-- 图表区域 -->
        <ve-line class="chart" :height="chart1Height" :data="chartData1" :extend="extend1"></ve-line>
        <ve-line class="chart m-top-12" :height="chart1Height" :data="chartData1" :extend="extend2"></ve-line>
        <div class="m-top-12"></div>
      <!--</div>-->
    </div>
  </div>
</template>

<script>
import DateSelector from 'base/dateSelector/date-selector'

export default {
  components: {DateSelector},
  name: 'produce-data',
  data: function () {
    return {
      chart1Height: '300px',
      char1Width: '370px',
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
          y: 'bottom',
          padding: [10, 10],
          selectedMode: false // 取消图例上的点击事件
        },
        title: {
          show: true,
          text: '生产片数: 100片',
          // subtext: '副标题',
          padding: [16, 8, 8, 8],
          left: 10,
          textStyle: {
            fontWeight: 'normal',
            fontSize: 16
          }
        },
        grid: {
          bottom: 30
        }
      },
      extend2: {
        'xAxis.0.axisLabel.rotate': 45,
        legend: {
          y: 'bottom',
          padding: [10, 10],
          selectedMode: false // 取消图例上的点击事件
        },
        title: {
          show: true,
          text: '面积统计: 102片',
          // subtext: '副标题',
          padding: [16, 8, 8, 8],
          left: 10,
          textStyle: {
            fontWeight: 'normal',
            fontSize: 16
          }
        },
        grid: {
          bottom: 30
        }
      }
    }
  },
  methods: {
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
  .main
    background-color #e7e7e7
    flex 1
    overflow scroll
  .chart
    background-color white
    width 98%
  .m-top-12
    margin-top 12px
</style>
