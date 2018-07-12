import axios from 'axios'

// 获取测试图表数据
export function getChartData () {
  let url = 'https://pcbapi.pcbbao.com/mesdemo/index.php/wx_jinpeng/token/trace'
  const data = Object.assign({})
  return axios.get(url, {params: data}).then((res) => {
    return Promise.resolve(res.data)
  })
}
