<template>
  <el-container>
    <el-header>
      <div class="logo" :style="'width:'+asideWidth">logo</div>
      <i class="iconfont  icon-caidan hideAside" @click='hideAside'></i>
    </el-header>
    <el-container>
      <el-aside :width="asideWidth">
        <Aside></Aside>
      </el-aside>
      <el-main>
        <Nav></Nav>
        <div class="blank"></div>
        <div class="main-container">
          <transition mode="out-in" enter-active-class="animated zoomIn">
            <keep-alive>
              <router-view />
            </keep-alive>
          </transition>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from './Aside.vue';
import Nav from './Nav.vue';
import {mapGetters, mapActions} from 'vuex';

export default {
  mounted () {
    // 刷新时以当前路由做为tab加入tabs
    if (this.$route.fullPath !== '/index/dashboard') {
      let routeInfo = {
        exist: false,
        closeable: true,
        route: this.$route.fullPath
      };
      if (this.$route.meta.getName === true) {
        routeInfo.name = this.$route.params.companyName;
      } else {
        routeInfo.name = this.$route.name;
      }
      this.$store.commit('addTabs', {route: '/index/dashboard', name: '首页', closeable: false});
      this.$store.commit('addTabs', routeInfo);
      this.$store.commit('setActiveTabs', this.$route.fullPath);
    } else {
      this.$store.commit('addTabs', {route: '/index/dashboard', name: '首页', closeable: false});
      this.$store.commit('setActiveTabs', '/index/dashboard');
      this.$router.push('/index/dashboard');
    }
  },
  components: {
    Aside,
    Nav
  },
  methods: {
    ...mapActions([
      'increment',
      'hideAside'
    ])
  },
  computed: {
    ...mapGetters([
      'count',
      'asideWidth',
      'navTabs'
    ])
  },
  watch: {
    '$route' (to) {
      let flag = true;
      for (let item of this.navTabs) {
        if (item.route === to.fullPath) {
          this.$store.commit('changeTabStatu', to.fullPath);
          this.$store.commit('setActiveTabs', to.fullPath);
          flag = false;
          break;
        }
      }
      if (flag) {
        let routeInfo = {
          route: to.fullPath,
          exist: false
        };
        if (to.meta.getName === true) {
          routeInfo.name = to.params.companyName;
        } else {
          routeInfo.name = to.name;
        }
        if (to.fullPath === '/index/dashboard') {
          routeInfo.closeable = false;
        } else {
          routeInfo.closeable = true;
        }
        this.$store.commit('addTabs', routeInfo);
        this.$store.commit('setActiveTabs', to.fullPath);
      }
    }
  }
};
</script>

<style scoped>
  .title {
    text-align: center;
  }
  .el-container {
    width: 100%;
    height: 100%;
  }
  .el-header {
    background: -webkit-linear-gradient(to right bottom, #e8962e, #e45131);
    background: -o-linear-gradient(to right bottom, #e8962e, #e45131);
    background: -moz-linear-gradient(to right bottom, #e8962e, #e45131);
    background: -ms-linear-gradient(to right bottom, #e8962e, #e45131);
    background: linear-gradient(to right bottom, #e8962e, #e45131);
    filter:progid:DXImageTransform.Microsoft.Gradient(gradientType=0,startColorStr=#e8962e,endColorStr=#e45131);
    padding: 0;
  }
  .el-aside {
    background: rgb(84, 92, 100);
    transition: width ease 0.3s;
  }
  .el-main {
    position: relative;
    padding: 5px;
  }
  .logo {
    display: inline-block;
    height: 60px;
    line-height: 60px;
    background: #285892;
    transition: width ease 0.3s;
  }
  .hideAside {
    cursor: pointer;
  }
  .main-container {
    padding: 5px;
    position: absolute;
    top: 46px;
    bottom: 0;
    left: 5px;
    right: 5px;
    overflow-y: auto;
    background: #efefef;
    z-index: 98;
  }
  .blank {
    position: absolute;
    width: 100%;
    height: 5px;
    background: #efefef;
    left: 0;
    top: 46px;
    z-index: 99;
  }
</style>
