<template>
     <div>
		<div class="top-title">
			<div class="header-left header-title">
				<a class="home-icon-link" href="${mvcPath}/" @click="backToIndex">
				    <img :class="menuType+'-img'" :src="logo"/>
				</a>
			</div>
			<div class="header-middle top-menu">
			    <el-menu theme="dark" mode="horizontal" :default-active="currentActiveIndex" @select="handleMenuSelect">
					<!--<el-menu-item class="view" index="view" @mouseenter.native="enterMenuList" @mouseleave.native="leaveMenuList">-->
	  				<!--<el-menu-item class="view" index="view">
	  					<span class="uex-icon-menu-row"></span>
	  				</el-menu-item>-->
					<el-menu-item index="home">
						<span>首页</span>
					</el-menu-item>
					<el-menu-item index="asset">
						<span>服务</span>
					</el-menu-item>
					<el-menu-item index="solution">
						<span>解决方案</span>
					</el-menu-item>
					<el-menu-item index="document">
						<span>帮助</span>
					</el-menu-item>
				</el-menu>
			</div>
			<div class="header-right user-info" id="userinfo">
				<el-menu theme="dark" default-active="0" mode="horizontal" @select="handleSelect">
                    <el-submenu index="2" class="top-menu-item switchLang">
                         <template slot="title">
                            <i class="uex-icon-elasticsearch"></i>
                            <span v-text="'数据中台'"></span>
                        </template>
                        <el-menu-item index="2-1" @click.native="change('cm')">
                            <i class="uex-icon-data-usage"></i>
                            <span v-text="'运营管控'"></span>
                        </el-menu-item>
                        <el-menu-item index="2-2" @click.native="change('aiop')">
                            <i class="uex-icon-system-configuration"></i>
                            <span v-text="'运维中心'"></span>
                        </el-menu-item>
                        <el-menu-item index="2-3" @click.native="change('df')">
                            <i class="uex-icon-host-platform-reg"></i>
                            <span v-text="'应用管理'"></span>
                        </el-menu-item>
                    </el-submenu>
                   <!--<tip-component></tip-component>-->

				    <el-submenu index="5" class="top-menu-item">
				        <!--<template slot="title">-->
				            <!--<img class="user-photo" src="${mvcPath}/prd-res/images/user-photo.jpeg"/>-->
				        <!--</template>-->
				        <!--<li class="group">-->
					        <!--<ul>-->
						        <!--<el-menu-item index="5-2" @click="personCenter">-->
						            <!--<span class="uex-icon-user"></span>-->
						            <!--<span v-html="'个人中心'"></span>-->
						        <!--</el-menu-item>-->
                                <!--<el-menu-item index="5-3" @click="sysSetting">-->
                                    <!--<span class="uex-icon-setting"></span>-->
                                    <!--<span v-html="'系统设置'"></span>-->
                                <!--</el-menu-item>-->
					        <!--</ul>-->
				        <!--</li>-->
				        <!--<li class="group">-->
				            <!--<el-menu-item index="5-5" @click.native="logout">-->
				                <!--<span class="uex-icon-export"></span>-->
				                <!--<span v-html="'退出'"></span>-->
				            <!--</el-menu-item>-->
				        <!--</li>-->
              <el-menu-item index="99" class="top-menu-item">
                <el-button type="text">
                  <span v-html="'登录'"></span>
                </el-button>
              </el-menu-item>
				    </el-submenu>



				</el-menu>
			</div>
		</div>
		<!--<topbar-menu-component bg-color="#092254" :columns="columns" :visible.sync="menuListVisible" @mouseenter.native="enterMenuList" @mouseleave.native="leaveMenuList"></topbar-menu-component>-->
	</div>
</template>
<script>

var ftlLogo = '/static/ydlogo.png';
var ftlSidemenuActive = "";
var ftlBackend = "";
var ftlUserInfoId = "";
var ftlUserInfoName = "";
var tipVisible = true;
var backToIndex = function() {

}
var columns = [
	{
		label: '运营管控',
		url: 'cmHost',
		children: [
           {
               name: '',
               label: '服务接入',
               url: '',
               children: [
                   { name: '', label: '服务管理', url: '', children: []},
                   { name: '', label: '服务接入', url: '', children: []},
               ]
           },
           {
               name: '',
               label: '租户管理',
               url: '',
               children: [
                   { name: '', label: '租户列表', url: '', children: []},
                   { name: '', label: '服务实例', url: '', children: []},
                   { name: '', label: '服务资源', url: '', children: []},
                   { name: '', label: '工具申请', url: '', children: []},
                   { name: '', label: '资源监控', url: '', children: []},
                   { name: '', label: '成员授权 ', url: '', children: []},
               ]
           },
       ]
	},
	{
		label: '数据资产',
		url: 'dacpHost'+'/console/frame?menuActive=use-home',
		children: [
           {
               name: '',
               label: '数据开发',
               url: '',
               children: [
                   { name: '', label: '团队管理', url: '', children: []},
                   { name: '', label: '开发者中心', url: '', children: []},
                   { name: '', label: '数据开发', url: '', children: []},
                   { name: '', label: '脚本开发', url: '', children: []},
                   { name: '', label: '数据查询', url: '', children: []},
               ]
           },
           {
               name: '',
               label: '任务调度',
               url: '',
               children: [
                   { name: '', label: '任务监控', url: '', children: []},
                   { name: '', label: '任务配置', url: '', children: []},
                   { name: '', label: '团队任务监控', url: '', children: []},
                   { name: '', label: '调度管理', url: '', children: []}
               ]
           },
           {
               name: '',
               label: '数据规划',
               url: '',
               children: [
                   { name: '', label: '架构设计', url: '', children: []},
                   { name: '', label: '流程管理', url: '', children: []},
                   { name: '', label: '数据标准', url: '', children: []}
               ]
           },
           {
               name: '',
               label: '数据治理',
               url: '',
               children: [
                   { name: '', label: '元数据管理', url: '', children: []},
                   { name: '', label: '生命周期', url: '', children: []},
                   { name: '', label: '数据质量', url: '', children: []}
               ]
           },
           {
        	   name: '',
        	   label: '资产管理',
        	   url: '',
        	   children: [
        	       { name: '', label: '数据资产地图', url: '', children: []},
        	       { name: '', label: '数据资产目录', url: '', children: []},
        	       { name: '', label: '数据资产盘点', url: '', children: []},
        	       { name: '', label: '数据资产运维', url: '', children: []},
        	       { name: '', label: '数据资产体检', url: '', children: []}
               ]
           },
           {
        	   name: '',
        	   label: '数据安全',
        	   url: '',
        	   children: [
        	       { name: '', label: '敏感数据管理', url: '', children: []},
        	       { name: '', label: '数据安全策略', url: '', children: []},
        	       { name: '', label: '数据安全审计', url: '', children: []}
        	   ]
           },
           {
        	   name: '',
        	   label: '数据服务',
        	   url: '',
        	   children: [
        	       { name: '', label: 'API管理', url: '', children: []},
        	       { name: '', label: '服务授权', url: '', children: []},
        	       { name: '', label: '服务调用监控', url: '', children: []},
        	       { name: '', label: '数据开放目录', url: '', children: []}
        	   ]
           }
       ]
	},
	{
		label: '统一运维',
		url:  'aiopHost'+'/#g=1&p=home-zl&c=1',
		children: [
           {
               name: '',
               label: '平台监控',
               url: '',
               children: [
                   { name: '', label: '主机监控', url: '', children: []},
                   { name: '', label: '集群监控', url: '', children: []},
                   { name: '', label: '租户监控', url: '', children: []},
                   { name: '', label: '容器监控', url: '', children: []}
               ]
           },
           {
               name: '',
               label: '服务监控',
               url: '',
               children: [
                   { name: '', label: '中间件监控', url: '', children: []},
                   { name: '', label: '租户服务监控', url: '', children: []},
                   { name: '', label: '采集服务监控', url: '', children: []}
               ]
           },
           {
               name: '',
               label: '数据监控',
               url: '',
               children: [
                   { name: '', label: '作业调度监控', url: '', children: []},
                   { name: '', label: '接口调度监控', url: '', children: []},
                   { name: '', label: '数据资产视图', url: '', children: []}
               ]
           },
           {
               name: '',
               label: '应用监控',
               url: '',
               children: [
                   { name: '', label: '应用报表监控', url: '', children: []},
                   { name: '', label: '应用系统监控', url: '', children: []}
               ]
           },
           {
               name: '',
               label: '监控告警',
               url: '',
               children: [
                   { name: '', label: '实时告警', url: '', children: []},
                   { name: '', label: '告警配置', url: '', children: []}
               ]
           },
           {
               name: '',
               label: '知识库管理',
               url: '',
               children: [
                   { name: '', label: '工单管理', url: '', children: []},
                   { name: '', label: '知识库', url: '', children: []}
               ]
           }
       ]
	},
	{
		label: '应用管理',
		url: 'dfHost',
		children: [
           {
               name: '',
               label: '应用管理',
               url: '',
               children: [
                   { name: '', label: '应用列表', url: '', children: []},
                   { name: '', label: '应用发布', url: '', children: []},
                   { name: '', label: '应用生命周期', url: '', children: []}
               ]
           },
           {
               name: '',
               label: '代码构建',
               url: '',
               children: [
                   { name: '', label: '构建任务管理', url: '', children: []},
                   { name: '', label: 'VM管理', url: '', children: []},
                   { name: '', label: '推送镜像仓库', url: '', children: []}
               ]
           },
           {
               name: '',
               label: '容器管理',
               url: '',
               children: [
                   { name: '', label: '容器状态', url: '', children: []},
                   { name: '', label: '存储卷管理', url: '', children: []},
                   { name: '', label: '域名管理', url: '', children: []},
                   { name: '', label: '镜像部署', url: '', children: []},
                   { name: '', label: '镜像仓库管理', url: '', children: []}
               ]
           },
           {
               name: '',
               label: '自定义编排',
               url: '',
               children: [
                   { name: '', label: 'yaml编排', url: '', children: []},
                   { name: '', label: 'yaml文件管理', url: '', children: []},
                   { name: '', label: 'yaml执行', url: '', children: []}
               ]
           }
       ]
	}
];
var _contextPath = 'test'
var _ssoUrl = "${ssoUrl!''}";
 // 运营管控
var cmHostUrl="${cmHostUrl!''}";
 // 应用管理
var dfHostUrl="${dfHostUrl!''}";
// ///统一运维
var aiopHostUrl="${aiopHostUrl!''}";

var getUrlParam = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return null;
}
export default {
  name: 'header-component',

  props:{
		activeIndex: String
	},

 	data:function(){
		return {
			currentActiveIndex: this.activeIndex,
			logo: ftlLogo,
			loading: false,
			menuType: 'outer',
			menuListVisible: false,
//	    	activeIndex: null,
	    	/*缩略顶部菜单列*/
	    	columns: columns,
		}
  },
   methods: {
   	enterMenuList: function() {
			//this.activeIndex = 'view';
			this.menuListVisible = true;
		},
		leaveMenuList: function() {
			this.menuListVisible = false;
		},
		change:function(type){
			var url="";
			if(type=='cm'){
				url=cmHostUrl;
			}else if(type=='df'){
			   url=dfHostUrl;
			}else if(type=='aiop'){
			   url=aiopHostUrl;
			}else{
			   url=_contextPath + '/logout';
			}
			window.location.href = url;
		},
		toConsole:function(){
			window.location.href = _contextPath + '/frame/console/';
		},
		handleMenuSelect: function(key, keyPath) {
			if (key != 'view') {
				window.location.href = _contextPath + '/frontend/' + key;
			}
		},
		/*点击系统图标*/
		backToIndex: function() {
			backToIndex();
		},
		/*普通nav选择事件*/
		handleSelect: function(key, keyPath) {
			if (key == '1') {
				backToIndex();

			//登录
			} else if (key == '99') {
                var currentUrl = encodeURI(window.location.href);
				window.location = _contextPath + '/login'+ '?callback='+currentUrl;
			}
		},
		//退出
		logout: function() {
		    var  _self =this;
            window.location.href = _contextPath + '/logout';
            /*$.ajax({
                type: 'get',
                url: _ssoUrl + "?token=" + getUrlParam('token'),
                contentType: 'application/json',
                async: false,
                dataType: 'json',
                success: function(data) {
                    var currentUrl = encodeURI(window.location.href);
                    window.location.href = _contextPath + '/logout';
                },
                error: function (data) {
                    _self.$notify.error({
                        title: '错误',
                        message: '系统异常'
                    });
                }
            });*/
		},
		/*访问个人中心*/
	    personCenter: function () {
	    	window.location.href = _contextPath + '/usercenter';
	    },
        sysSetting:function(){
            window.location.href = _contextPath + '/sysmgr';
		},
        openUrl: function(url) {
            window.open(url, '_blank');
        },
		tenantReg:function(){

		}
  },
	watch: {
		activeIndex: function() {
			this.currentActiveIndex = this.activeIndex;
		}
	},
	created: function() {
	}
}
</script>
<style>
  @import "./header.css";
</style>
