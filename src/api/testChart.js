import axios from 'axios'

// 获取测试图表数据
export function getChartData () {
  let url = 'http://localhost:8080/api/getChartData'
  const data = Object.assign({})
  return axios.get(url, {params: data}).then((res) => {
    return Promise.resolve(res.data)
  })
}
