<template>
  <div class="aside-container">
    <vue-scroll :ops="scrollOps">
      <el-row>
        <el-col :span="24">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :collapse="false">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                <el-menu-item index="1-3">选项2</el-menu-item>
                <el-menu-item index="1-4">选项2</el-menu-item>
                <el-menu-item index="1-5">选项2</el-menu-item>
                <el-menu-item index="1-6">选项2</el-menu-item>
                <el-menu-item index="1-7">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </vue-scroll>
  </div>
</template>
<script>
export default {
  data () {
    return {
      scrollOps: {
        vuescroll: {
          mode: 'native'
        },
        bar: {
          vBar: {
            background: '#b9b9b9',
            keepShow: true,
            opacity: 0.5,
            hover: '#efefef'
          },
          hBar: {
            background: '#b9b9b9',
            keepShow: true,
            opacity: 0.5,
            hover: '#efefef'
          }
        }
      }
    };
  }
};
</script>
<style scoped>
  .aside-container {
    width: 100%;
    height: 100%;
  }
  .el-menu {
    border: none;
  }
</style>
