<template>
  <div id="app" style="height:100%">
        <elx-main split-type="row">
            <elx-header><v-header></v-header></elx-header>
            <elx-scroll-content split-type="col" style="height:100%">
              <elx-aside  style="width:18%;height:100%"><v-left></v-left></elx-aside>
              <elx-scroll-content style="height:100%;width:80%;">
                <div class="content-demo"><router-view></router-view></div>
              </elx-scroll-content>
            </elx-scroll-content>
        </elx-main>
    

  </div>
  
</template>

<script>
import VHeader from "./components/header";
import VLeft from "./components/left";
export default {
  name: 'App',
  methods: {
   
  },
  components :{
    VHeader,
    VLeft

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
  
  }
}
</script>
<style>

#app {
  
}
</style>
