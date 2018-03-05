<template>
  <div id="app">
    <elx-menu 
        v-on:sidebar-open="sidebarOpen" 
        v-on:last-child-node-click="lastChildNodeClick" 
        :location-source="'http://0.0.0.0:8085/'" 
        :is-post="true" 
        :post-message="'hide'" 
        v-on:menu-change="menuChange" 
        :menu-active.sync="menuActive" 
        :menu-open='menuOpen' 
        :menu-data="data2" 
        :menu-type="menuType" 
    >
    </elx-menu>
  </div>
</template>
<style>
div#sidebar .menu-content {
    height: 500px;
}
</style>

<script>
const data2 = [
  {
    url: "dataps/devops/overview",
    children: [
      {
        url: "ftl/distribute/distributeList",
        children: [
          {
            url: "ftl/distribute/distributeList1",
            children: [],
            sidebarType: null,
            descr: null,
            extendConf: null,
            open: false,
            active: false,
            modelcode: "distribute-list-1",
            modelname: "数据分发1",
            modeltype: "0",
            parentcode: "distribute-list",
            images: "uex-icon-platform-resource-allocation"
          }
        ],
        sidebarType: null,
        descr: null,
        extendConf: null,
        open: false,
        active: false,
        modelcode: "distribute-list",
        modelname: "数据分发",
        modeltype: "0",
        parentcode: "data-dev-summary",
        images: "uex-icon-platform-resource-allocation"
      },
      {
        url: "ftl/distribute/distributeList2",
        children: [],
        sidebarType: null,
        descr: null,
        extendConf: null,
        open: false,
        active: false,
        modelcode: "distribute-list-2",
        modelname: "数据分发2",
        modeltype: "0",
        parentcode: "data-dev-summary",
        images: "uex-icon-platform-resource-allocation"
      }
    ],
    descr: null,
    extendConf: null,
    menuName: "数据开发总览",
    open: false,
    active: false,
    modelcode: "data-dev-summary",
    modelname: "数据开发总览",
    modeltype: "0",
    parentcode: null,
    images: "uex-icon-command-config"
  },
  {
    url: "",
    children: [
      {
        url: "ftl/distribute/distributeList3",
        children: [],
        sidebarType: null,
        descr: null,
        extendConf: null,
        open: false,
        active: false,
        modelcode: "distribute-list-3",
        modelname: "数据分发3",
        modeltype: "0",
        parentcode: "task-mgr",
        images: "uex-icon-platform-resource-allocation"
      }
    ],
    menuName: "需求管理",
    open: false,
    active: false,
    modelcode: "task-mgr",
    modelname: "需求管理",
    modeltype: "0",
    parentcode: null,
    images: ""
  }
];
export default {
  data: function() {
    return {
      menuActive: "distribute-list-3",
      menuOpen: "",
      menuType: "outer",
      data2: [],
      defaultExpandedKeys: ["paas_proc", "paas_proc_6"],
      currentNodeKey: "paas_proc"
    };
  },
  methods: {
    handleNodeClick(data) {},
    sidebarOpen: function() {},
    lastChildNodeClick: function() {},
    menuChange: function() {}
  },
  watch: {
    menuActive: function(val, oldVal) {
      console.log("222222", val);
    }
  },
  created: function() {
    var _self = this;
    _self.data2 = data2;
  }
};
</script>
