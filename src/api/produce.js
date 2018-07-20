import axios from 'axios'
import qs from 'qs'

// 生产数据
export function getProduceData (type) {
  let url = 'https://pcbapi.pcbbao.com/mesdemo/index.php/wx_caixiang/token/production-data-chart'
  const data = Object.assign({type})
  return axios.post(url, qs.stringify(data), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then((res) => {
    return Promise.resolve(res.data)
  })
}
