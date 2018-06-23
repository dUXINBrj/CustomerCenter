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
    if (this.$route.path !== '/index/dashboard') {
      this.$store.commit('addTabs', {route: '/index/dashboard', name: '首页', closeable: false});
      this.$store.commit('addTabs', {route: this.$route.path, name: this.$route.name, closeable: true});
      this.$store.commit('setActiveTabs', this.$route.path);
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
  methods: mapActions([
    'increment',
    'hideAside'
  ]),
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
        if (item.route === to.path) {
          this.$store.commit('setActiveTabs', to.path);
          flag = false;
          break;
        }
      }
      if (flag) {
        let routeInfo = {
          route: to.path
        };
        if (to.name === 'FinancingUserDetail') {
          routeInfo.name = to.params.userName;
        } else {
          routeInfo.name = to.name;
        }
        if (to.path === '/index/dashboard') {
          routeInfo.closeable = false;
        } else {
          routeInfo.closeable = true;
        }
        this.$store.commit('addTabs', routeInfo);
        this.$store.commit('setActiveTabs', to.path);
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
    background: #163254;
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
    top: 48px;
    bottom: 0;
    left: 5px;
    right: 5px;
    overflow-y: auto;
    background: #efefef;
  }
</style>
