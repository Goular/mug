<template>
  <div class='contianer'>
    <date-selector @getSelectIndex="getIndex" :loading="loading"></date-selector>
    <div v-if="revData" class='main'>
      <!--<div class='chartPanel'>-->
      <!-- 图表区域 -->
      <ve-histogram class='chart' :colors="colorsNumber" :height='chart1Height' :data='revData.chartArr[0]' :extend='revData.extendArr[0]'></ve-histogram>
      <ve-histogram class='chart m-top-12' :colors="colorsArea" :height='chart1Height' :data='revData.chartArr[1]' :extend='revData.extendArr[1]'></ve-histogram>
      <div class='m-top-12'></div>
      <!--</div>-->
    </div>
    <div class="loading-container" v-show="loading">
      <loading :title="loadingTitle"></loading>
    </div>
  </div>
</template>

<script>
import DateSelector from 'base/dateSelector/date-selector'
import {getProduceData} from '../../api/produce'
import Loading from 'base/loading/loading'

export default {
  components: {DateSelector, Loading},
  name: 'produce-data',
  data: function () {
    return {
      revData: null,
      chart1Height: '300px',
      char1Width: '370px',
      colorsNumber: ['#ff8a55'],
      colorsArea: ['#305872'],
      dateIndex: 1,
      loading: false,
      loadingTitle: '图表加载中...'
    }
  },
  methods: {
    _getProduceList () {
      if (!this.loading) {
        this.loading = true
        this.revData = null
        getProduceData(this.dateIndex).then((res) => {
          this.$nextTick(() => {
            this.revData = this.dealWithRawData(res.data)
            this.loading = false
          })
        })
      }
    },
    dealWithRawData (rawData) {
      // 创建生产数量数据
      let extendNumber = {
        'xAxis.0.axisLabel.rotate': 45,
        legend: {
          y: 'bottom',
          padding: [10, 10],
          selectedMode: false // 取消图例上的点击事件
        },
        title: {
          show: true,
          text: rawData.production_title + rawData.production_unit,
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
      // 创建运行速度数据
      let extendArea = {
        'xAxis.0.axisLabel.rotate': 45,
        legend: {
          y: 'bottom',
          padding: [10, 10],
          selectedMode: false // 取消图例上的点击事件
        },
        title: {
          show: true,
          text: rawData.area_title + rawData.area_unit,
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
      // 创建表格属性集合
      let extendArr = [extendNumber, extendArea]
      let chartNumber = this.createChart(rawData.option.number)
      let chartArea = this.createChart(rawData.option.area)
      let chartArr = [chartNumber, chartArea]
      return {
        extendArr,
        chartArr
      }
    },
    createChart (data) {
      let columns = ['data']
      // 处理legend
      data.yAxis.forEach((value, key) => {
        columns.push(value.name)
      })
      // 处理数据
      let rows = []
      // 获取每条x轴的长度
      let colLen = columns.length
      let xLen = data.xAxis.length
      for (let i = 0; i < xLen; i++) {
        let xData = data.xAxis[i]
        let tmp = {}
        for (let j = 0; j < colLen; j++) {
          if (j === 0) {
            tmp[columns[j]] = xData
          } else {
            tmp[columns[j]] = data.yAxis[j - 1].data[i]
          }
        }
        rows.push(tmp)
      }
      return {
        columns,
        rows
      }
    },
    getIndex (data) {
      this.dateIndex = data
      this._getProduceList()
    }
  },
  created () {
    this._getProduceList()
  }
}
</script>

<style scoped lang='stylus'>
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
  .loading-container
    position: absolute
    width: 100%
    top: 50%
    transform: translateY(-50%)
</style>
