import Vue from 'vue'
import Router from 'vue-router'
import EquipmentData from '@/components/equipmentData/equipment-data'
import MonitoringData from '@/components/monitoringData/monitoring-data'
import ProduceData from '@/components/produceData/produce-data'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/equipment',
      name: 'EquipmentData',
      component: EquipmentData,
      meta: {
        title: '设备数据'
      }
    },
    {
      path: '/monitor',
      name: 'MonitoringData',
      component: MonitoringData,
      meta: {
        title: '监控数据'
      }
    },
    {
      path: '/produce',
      name: 'ProduceData',
      component: ProduceData,
      meta: {
        title: '生产数据'
      }
    }
  ]
})
