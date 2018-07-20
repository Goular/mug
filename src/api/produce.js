import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

// 设备数据
export function getProduceData (type) {
  const url = 'https://pcbapi.pcbbao.com/mesdemo/index.php/wx_caixiang/token/production-data-chart'
  // 对象合并
  const data = Object.assign({type}, commonParams, {
  })
  return jsonp(url, data, options)
}
