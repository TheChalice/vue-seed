<template>
  <div class="banner-part">
    <img class="bg" src="/static/images/banner/banner_bg.png"/>
    <div>
      <ul :style="{'margin-left': - left + 'px'}">
        <li>
          <h5 v-text="data[data.length - 1].label"></h5>
          <p v-text="data[data.length - 1].remark"></p>
          <img :src="'/static/images/banner/' +data[data.length - 1].image"/>
        </li>
        <li v-for="banner in data">
          <h5 v-text="banner.label"></h5>
          <p v-text="banner.remark"></p>
          <img :src="'/static/images/banner/' + banner.image"/>
        </li>
        <li>
          <h5 v-text="data[0].label"></h5>
          <p v-text="data[0].remark"></p>
          <img :src="'/static/images/banner/' + data[0].image"/>
        </li>
      </ul>
    </div>
    <ul class="point-group">
      <li v-for="(banner, $index) in data" :class="$index == activeIndex ? 'active' : ''"
          @click="handleClick($index)"></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "banner",
    props: {
      data: Array
    },
    data: function () {
      return {
        activeIndex: 0,
        offsetWidth: 0,
        left: 0,
        ani: null,
        inClickAni: false
      }
    },
    methods: {
      changeLeft: function (callback) {
        var self = this;
        var oldLeft = this.left;
        if (oldLeft == this.offsetWidth * (this.activeIndex + 1)) {
          return;
        }
        var endLeft = this.activeIndex == 0 ? this.offsetWidth * 4 : this.offsetWidth * (this.activeIndex + 1);
        var speed = 20;
        var ani = function () {
          if (endLeft - self.left != 0) {
            self.left = endLeft - self.left < speed ? (endLeft) : (self.left + speed);
            requestAnimationFrame(ani);
          } else {
            if (typeof callback == 'function') {
              callback();
            }
          }
        }
        requestAnimationFrame(ani);
      },
      handleClick: function (val) {
        var self = this;
        this.inClickAni = true;
        this.left = this.offsetWidth * (this.activeIndex + 1);
        var oldLeft = this.left;
        var endLeft = this.offsetWidth * (val + 1);
        var speed = endLeft > oldLeft ? 20 : -20;
        this.activeIndex = val;
        var ani = function () {
          if (endLeft - self.left != 0) {
            self.left = Math.abs(endLeft - self.left) < Math.abs(speed) ? (endLeft) : (self.left + speed);
            requestAnimationFrame(ani);
          } else {
            self.inClickAni = false;
            clearTimeout(self.ani);
            self.setAni();
          }
        }
        requestAnimationFrame(ani);
      },
      changeActiveIndex: function (val) {
        var self = this;
        this.changeLeft(function () {
          if (val == 0) {
            self.left = self.offsetWidth;
          }
          self.setAni();
        });
      },
      addEvent: function (element, type, handler) {
        if (element.addEventListener) {
          element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
          element.attachEvent('on' + type, function () {
            handler.call(element);
          });
        } else {
          element['on' + type] = handler;
        }
      },
      getWidth: function () {
        this.offsetWidth = document.getElementById('app').offsetWidth - 10;
        this.left = this.offsetWidth * (this.activeIndex + 1);
      },
      changeIndex: function () {
        this.activeIndex = this.activeIndex == 2 ? 0 : this.activeIndex + 1;
      },
      setAni: function () {
        var self = this;
        if (this.inClickAni) {
          return;
        }
        this.ani = setTimeout(function () {
          if (self.inClickAni) {
            return;
          }
          self.changeIndex();
          self.changeActiveIndex(self.activeIndex);
        }, 5000);
      }
    },
    watch: {
      activeIndex: function (val) {
      }
    },
    created: function () {
      var self = this;
    },
    mounted: function () {
      this.getWidth();
      // this.setAni();
      this.addEvent(window, 'resize', this.getWidth);
    }
  }
</script>

<style scoped>
  @import "./banner.css";
</style>
