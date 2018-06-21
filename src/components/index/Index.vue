<template>
  <el-container>
    <el-header>
      <div class="logo">logo</div>
      <i class="iconfont  icon-caidan" @click='increment'></i>
      {{count}}
    </el-header>
    <el-container>
      <el-aside width="200px">
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
    'increment'
  ]),
  computed: mapGetters([
    'count'
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
  }
  .logo {
    width: 200px;
    display: inline-block;
    height: 60px;
    line-height: 60px;
    background: #285892;
  }
</style>
