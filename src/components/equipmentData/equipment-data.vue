<template>
  <div class='contianer'>
    <date-selector @getSelectIndex="getIndex" :loading="loading"></date-selector>
    <div v-if="revData" class='main'>
      <!--<div class='chartPanel'>-->
        <!-- 图表区域 -->
        <ve-histogram class='chart' :colors="colorsTime" :height='chart1Height' :data='revData.chartArr[0]' :extend='revData.extendArr[0]'></ve-histogram>
        <ve-histogram class='chart m-top-12' :colors="colorsNumber" :height='chart1Height' :data='revData.chartArr[1]' :extend='revData.extendArr[1]'></ve-histogram>
        <ve-histogram class='chart m-top-12' :colors="colorsSpeed" :height='chart1Height' :data='revData.chartArr[2]' :extend='revData.extendArr[2]'></ve-histogram>
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
import {getEquipmentData} from '../../api/equipment'
import Loading from 'base/loading/loading'

export default {
  components: {DateSelector, Loading},
  name: 'equipment-data',
  data: function () {
    return {
      revData: null,
      chart1Height: '300px',
      char1Width: '370px',
      colorsTime: ['#ff8a55'],
      colorsNumber: ['#305872'],
      colorsSpeed: ['#fcb595'],
      dateIndex: 1,
      loading: false,
      loadingTitle: '图表加载中...'
    }
  },
  methods: {
    _getEquipmentList () {
      if (!this.loading) {
        this.loading = true
        this.revData = null
        getEquipmentData(this.dateIndex).then((res) => {
          this.$nextTick(() => {
            this.revData = this.dealWithRawData(res.data)
            this.loading = false
          })
        })
      }
    },
    dealWithRawData (rawData) {
      // 创建生产时间数据
      let extendTime = {
        'xAxis.0.axisLabel.rotate': 45,
        legend: {
          y: 'bottom',
          padding: [10, 10],
          selectedMode: false // 取消图例上的点击事件
        },
        title: {
          show: true,
          text: rawData.process_time_title + rawData.process_time_unit,
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
          text: rawData.number_title + rawData.number_unit,
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
      let extendSpeed = {
        'xAxis.0.axisLabel.rotate': 45,
        legend: {
          y: 'bottom',
          padding: [10, 10],
          selectedMode: false // 取消图例上的点击事件
        },
        title: {
          show: true,
          text: rawData.speed_title + rawData.speed_unit,
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
      let extendArr = [extendTime, extendNumber, extendSpeed]
      let chartTime = this.createChart(rawData.option.process_time)
      let chartNumber = this.createChart(rawData.option.number)
      let chartSpeed = this.createChart(rawData.option.speed)
      let chartArr = [chartTime, chartNumber, chartSpeed]
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
      this._getEquipmentList()
    }
  },
  created () {
    this._getEquipmentList()
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
