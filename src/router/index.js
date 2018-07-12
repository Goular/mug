import Vue from 'vue'
import Router from 'vue-router'
import DataTraceability from '@/components/dataTraceability/data-traceability'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DataTraceability',
      component: DataTraceability
    }
  ]
})
