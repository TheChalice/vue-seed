<template>
  <div id="app">
    <elx-tree  
      @node-click="handleNodeClick" 
      :default-expanded-keys="defaultExpandedKeys" 
      :current-node-key="currentNodeKey"
      :data="data2"
      default-expand-all
      :expand-on-click-node="false">
    </elx-tree>
     <elx-select v-model="value" filterable placeholder="请选择">
    <elx-option
      v-for="(item, index) in options" :key="index"
      :label="item.label"
      :value="item.value">
    </elx-option>
  </elx-select>
  </div>
  
</template>

<script>
const data2 = [
  {
      "id": "paas_proc",
      "label": "程序",
      "children": [
          {
              "id": "paas_proc_2",
              "label": "流量经营哈哈哈哈哈哈",
              "children": [
                  {
                      "id": "paas_proc_21",
                      "label": "流量经营3u 互动呼呼呼呼",
                      "children": [
                          {
                              "id": "paas_proc_211",
                              "label": "流量经营31说为啥为啥为啥为啥为啥为啥",
                              "children": null
                          }
                      ]
                  }
              ]
          },
          {
              "id": "paas_proc_3",
              "label": "一经程序",
              "children": null
          },
          {
              "id": "paas_proc_4",
              "label": "话单统计",
              "children": null
          },
          {
              "id": "paas_proc_5",
              "label": "短彩信",
              "children": null
          },
          {
              "id": "paas_proc_6",
              "label": "营销活动",
              "children": null
          },
          {
              "id": "paas_proc_7",
              "label": "人均收入",
              "children": null
          },
          {
              "id": "paas_proc_tmp",
              "label": "临时文件夹",
              "children": null
          }
      ]
  }
];
export default {
  name: 'App',
  methods: {
    handleNodeClick(data) {
    },
  },
  data() {
    return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
      
      data2: [],
      defaultExpandedKeys: ['paas_proc', 'paas_proc_6'],
      currentNodeKey: 'paas_proc'
    };
  },
  created: function(){
    var _self = this;
    _self.data2 = data2
  }
}
</script>

<style>

#app {
  width: 200px;
}
</style>
