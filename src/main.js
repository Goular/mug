import Vue from 'vue'
import App from './App'
import router from './router'
import VCharts from 'v-charts'

import 'common/stylus/index.styl'

// 添加VCharts用于图表显示
Vue.use(VCharts)

Vue.config.productionTip = false

// 为单个页面添加Title
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
