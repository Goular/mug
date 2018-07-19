<template>
  <div class='contianer'>
    <date-selector></date-selector>
    <div class='main'>
      <!--<div class='chartPanel'>-->
        <!-- 图表区域 -->
        <ve-line class='chart' :height='chart1Height' :data='chartData1' :extend='revData.extendArr[0]'></ve-line>
        <ve-line class='chart m-top-12' :height='chart1Height' :data='chartData1' :extend='revData.extendArr[1]'></ve-line>
        <ve-line class='chart m-top-12' :height='chart1Height' :data='chartData1' :extend='revData.extendArr[2]'></ve-line>
        <div class='m-top-12'></div>
      <!--</div>-->
    </div>
  </div>
</template>

<script>
import DateSelector from 'base/dateSelector/date-selector'
import {getEquipment} from '../../api/equipment'

export default {
  components: {DateSelector},
  name: 'equipment-data',
  data: function () {
    return {
      revData: null,
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
          text: '生产时间: 100min',
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
          text: '生产数量: 100片',
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
      extend3: {
        'xAxis.0.axisLabel.rotate': 45,
        legend: {
          y: 'bottom',
          padding: [10, 10],
          selectedMode: false // 取消图例上的点击事件
        },
        title: {
          show: true,
          text: '运行速度: 106m/min',
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
    _getEquipmentList () {
      getEquipment().then((res) => {
        this.$nextTick(() => {
          this.revData = this.dealWithRawData(res.data)
        })
      })
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
      // let chartTime = this.createChart(rawData.option.process_time)
      // let chartNumber = this.createChart(rawData.option.number)
      // let chartSpeed = this.createChart(rawData.option.speed)
      // 创建图表数据
      let datas = {
        'xAxis': ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'],
        'yAxis': [{
          'name': '喷幅1号',
          'data': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '0', '0', 0, 0, '-0.1', '0', 0]
        }, {
          'name': '喷幅2号',
          'data': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '0', '0', 0, 0, '-0.05', '0', 0]
        }, {
          'name': '喷幅3号',
          'data': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '-0.1', '0', 0, 0, '-0.06', '0', 0]
        }, {
          'name': '喷幅4号',
          'data': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '-0.08', '0', 0, 0, '-0.07', '0', 0]
        }],
        'yUnit': 'bar'
      }
      let chartTime = this.createChart(datas)
      console.dir(chartTime)
      // let chartArr = [chartTime, chartNumber, chartSpeed]
      return {
        extendArr
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
      console.dir(rows)
      return {
        columns,
        rows
      }
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
</style>
