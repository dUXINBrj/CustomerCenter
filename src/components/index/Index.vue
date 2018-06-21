<template>
  <el-container>
    <el-header>
      <div class="logo" :style="'width:'+asideWidth">logo</div>
      <i class="iconfont  icon-caidan" @click='hideAside'></i>
    </el-header>
    <el-container>
      <el-aside :width="asideWidth">
        <Aside></Aside>
      </el-aside>
      <el-main>
        <el-row style="padding:16px 16px;">
          <el-col :span="24">

          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from './Aside.vue';
import {mapGetters, mapActions} from 'vuex';

export default {
  components: {
    Aside
  },
  methods: mapActions([
    'increment',
    'hideAside'
  ]),
  computed: mapGetters([
    'count',
    'asideWidth'
  ])
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
  .logo {
    display: inline-block;
    height: 60px;
    line-height: 60px;
    background: #285892;
    transition: width ease 0.3s;
  }
</style>
