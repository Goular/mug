import Vue from 'vue'
import Router from 'vue-router'
import EquipmentData from '@/components/equipmentData/equipment-data'
import MonitoringData from '@/components/monitoringData/monitoring-data'
import ProduceData from '@/components/produceData/produce-data'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: EquipmentData,
      meta: {
        title: '设备数据'
      }
    },
    {
      path: '/equipment',
      component: EquipmentData,
      meta: {
        title: '设备数据'
      }
    },
    {
      path: '/monitor',
      component: MonitoringData,
      meta: {
        title: '监控数据'
      }
    },
    {
      path: '/produce',
      component: ProduceData,
      meta: {
        title: '生产数据'
      }
    }
  ]
})
