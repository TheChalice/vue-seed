<template>

  <div style="height:100%">
   <elx-menu v-on:sidebar-open="sidebarOpen"
    v-on:last-child-node-click="lastChildNodeClick" 
    :location-source="'http://0.0.0.0:8085/'" 
    :is-post="true" 
    :post-message="'hide'" 
    v-on:menu-change="menuChange" 
    :menu-active.sync="menuActive" :menu-open='menuOpenActive'
    :menu-data="testMenuData"
     :menu-type="menuType" 
     :guide-arrow-show="guideArrowShow">
     </elx-menu>
  </div>
</template>

<script>
  import $ from "jquery";
var testMenuData = [
  {
    "url": "",
    "children": [
        {
            "url": "/home/dashboard",
            "children": [],
            "menuId": "data-directory",
            "parentId": "use-home",
            "modelname": "dashboard",
            "menuType": "0",
            "hasright": "1",
            "menuIcon": "uex-fr-icon-obj-basic-standards"
        },
        {
            "url": "/home/dashboard1",
            "children": [],
            "menuId": "data-directory",
            "parentId": "use-home",
            "modelname": "dashboard111",
            "menuType": "0",
            "hasright": "1",
            "menuIcon": "uex-fr-icon-obj-basic-standards"
        },
        {
            "url": "",
            "children": [],
            "menuId": "data-atlas",
            "parentId": "use-home",
            "modelname": "数据图谱",
            "menuType": "0",
            "hasright": "1",
            "menuIcon": "uex-icon-obj-basic-standards"
        }
    ],
    "menuId": "use-home",
    "parentId": "console",
    "modelname": "数据门户",
    "menuType": "2",
    "hasright": "1",
    "menuIcon": "uex-icon-obj-basic-standards"
}
];
export default {
     data:function(){
	    return {
	    	testMenuData: [],
	    	refresh:0,
	    	focusMenu: '',
	    	menuActive: 'api_catalog_1_2',
	    	menuOpenActive: '',
	    	menuType: 'outer',
	    	filter: null,
	    	searchFocus: false,
        guideArrowShow:false,
	    }	
		},
		methods:{
			menuChange: function(model) {
			    this.focusMenu = model.modelcode;
			    this.refresh++;
			},
			sidebarOpen: function(type){
				this.menuType = type;
			    if(type === 'narrow'){
			    	$('.dataex-layout .dataex-container.include-sidemenu').css("margin-left","52px");
			    }else{
			    	$('.dataex-layout .dataex-container.include-sidemenu').css("margin-left","182px");
			    }
			},
			lastChildNodeClick: function(model){
         console.log('333333',model);
         this.$router.push(model.url);
			}
		},
		watch: {
			'menuActive': function(val, oldVal){
			 console.log('222222',val);
			}
		},
		created: function() {
			var fun=function(node){
				node.open=false;
				node.active=false;
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
