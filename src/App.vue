<template>
  <div id="app" style="height:100%">
        <elx-main split-type="row">
            <elx-header>
              <header-component :active-index="activeIndex"></header-component>
            </elx-header>
          <div class="banner part">
            <banner :data="banners"></banner>
          </div>
          <!--<div class="all-system part">-->
            <!--<system :data="allSystem"></system>-->
          <!--</div>-->
          <!--<div class="service part">-->
            <!--<div class="content">-->
              <!--<service :data="services"></service>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="flow">-->
            <!--<div class="content">-->
              <!--<flow :data="flows"></flow>-->
            <!--</div>-->
          <!--</div>-->
          <!--
	            <div class="scene part">
	                <div class="title">场景</div>
	                <div class="content">
	                    <scene :data="scenes"></scene>
	                </div>
	        </div> -->

          <!--<div class="document part">-->
            <!--<div class="title">文档</div>-->
            <!--<div class="content">-->
              <!--<ul>-->
                <!--<li v-for="document in documents">-->
                  <!--<h6 v-text="document.label"></h6>-->
                  <!--<p v-text="document.remark"></p>-->
                <!--</li>-->
              <!--</ul>-->
            <!--</div>-->
          <!--</div>-->

            <!--<elx-scroll-content split-type="col" style="height:100%">-->
              <!--&lt;!&ndash; <elx-aside  style="width:18%;height:100%">-->
                <!--<v-left></v-left>-->
                <!--</elx-aside> &ndash;&gt;-->
              <!--<elx-scroll-content style="height:100%;width:80%;">-->
                <!--<div class="content-demo"><router-view></router-view></div>-->
              <!--</elx-scroll-content>-->
            <!--</elx-scroll-content>-->
        </elx-main>


  </div>

</template>

<script>
import headerComponent from "./components/header/header";
import banner from "./components/banner/banner";
import VLeft from "./components/left";
var banners = [
  {
    image: 'banner1.png',
    label: '践行集约运营，实施精益管理',
    remark: '通过大数据能力平台的统一规划、集中建设及规范管理，实现基础平台的集约化运营，进一步降本增效'
  },
  {
    image: 'banner2.png',
    label: '强化数据中台，实现前向赋能',
    remark: '聚焦数据的整合和封装，提升挖掘和开发的效率，为前台业务发展提供全程全网支撑'
  },
  {
    image: 'mind.png',
    label: '服务弹性伸缩，使能业务创新',
    remark: '提供弹性可伸缩的大数据计算及应用服务，进一步降低IT成本，提高运维效率，从而更好支撑核心业务创新'
  },
]
export default {
  name: 'App',
  methods: {

  },
  components :{
    headerComponent,
    VLeft,
    banner

  },
  data() {
    return {
      /*数据*/
      banners: banners,
//      allSystem: allSystem,
//      services: services,
//      flows: flows,
//      scenes: scenes,
//      documents: documents,

//      defaultUrl: _contextPath + '/console/frame?menuActive=',
      activeIndex: 'home'
    };
      // this.$http.get('/apis', {}, {
      //     headers: {}
      //   }
      // )
      // .then(
      //   function(response) {
      //     // 这里是处理正确的回调
      //     // this.articles = response.data["subjects"] 也可以
      //     console.log("response", response);
      //   },
      //   function(response) {
      //     // 这里是处理错误的回调
      //     console.log(response);
      //   }
      // );
    return {

    };
  },

  watch: {

		},
  created: function(){

  }
}
</script>
<style>

</style>
