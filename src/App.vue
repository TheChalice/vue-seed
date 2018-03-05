<template>
  <div id="app">
 <div class="menu-demo">
<elx-sidebar  :show.sync="show" :location-origin="locationOrigin" :title="title" :is-post="false" :message="message" :descr="descr" v-on:sidebar-open="sidebarOpen" v-on:menu-change="menuChange" :menu-active.sync="menuActive" :menu-open='menuOpen' :menu-data="testMenuData"  :guide-arrow-show="guideArrowShow"></elx-sidebar>
  
  
  
  </div>
  </div>
  
</template>

<script>
import testMenuData from '../src/assets/menu.json';
export default {
  name: 'App',
  methods:{
			receiveMessage: function(message){
			console.log(message);
		},
		menuChange: function(model) {
		    this.focusMenu = model.modelcode;
		    console.log(model);
		    this.refresh++;
		},
		sidebarOpen: function(show){
			console.log(show);
		}
		},
  data() {
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
       message: {menuType: 'narrow'},
	    	testMenuData: [],
	    	title: 'API管理',
	    	descr: '服务器分配的注释文字，这里可以放数据库分配的注释文字。',
	    	refresh:0,
	    	focusMenu: '',
	    	menuActive: '',
	    	menuOpen: '',
	    	menuType: 'outer',
	    	filter: null,
	    	searchFocus: false,
	    	guideArrowShow: false,
	    	refresh: 0,
	    	options: [],
	        openValue: '',
	        activeValue: '',
	        locationOrigin: location.origin
    };
  },
  
  watch: {
		openValue: function(val, oldVal) {
		    this.menuOpen = val;	
		},
		activeValue: function(val, oldVal) {
		    this.menuActive = val;	
		}
		},
  created: function(){
    
   var fun=function(node){
			node.open=false;
			node.active=false;
			node.modelcode=node.menuId;
			node.parentcode=node.parentId;
			node.modelname=node.menuName;
			node.modeltype=node.menuType;
			node.images=node.menuIcon;
			if(node.children.length==0)
				return;
			for(var i=0;i<node.children.length;i++){
				fun(node.children[i]);
			}
		};
		for (var i = 0;i < testMenuData.length;i++) {
			fun(testMenuData[i]);
		}
		this.testMenuData = testMenuData;
  }
}
</script>

<style>

#app {
  width: 200px;
}
</style>
