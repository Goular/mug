import axios from 'axios'
import qs from 'qs'

// 监控数据
export function getMonitorData (type) {
  let url = 'https://pcbapi.pcbbao.com/mesdemo/index.php/wx_caixiang/token/monitoring-data-chart'
  const data = Object.assign({type})
  return axios.post(url, qs.stringify(data), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then((res) => {
    return Promise.resolve(res.data)
  })
}
