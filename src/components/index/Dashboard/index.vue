<template>
  <div id="dash-container">
    <el-row :gutter="30">
      <el-col :xs="24" :sm="24" :md="12" :lg="10" :xl="10">
        <Pie></Pie>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="14" :xl="14">
        <Bar></Bar>
      </el-col>
      <el-col :span="24">
        <ChartLine></ChartLine>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Pie from './Pie.vue';
import Bar from './Bar.vue';
import ChartLine from './Line.vue';
export default {
  components: {
    Pie,
    Bar,
    ChartLine
  }
};
</script>
<style scoped>
#dash-container {
  height: 100%;
  width: 100%;
  background: #fff;
}
.el-row {
  margin: 0 !important;
  height: 100%;
}
.el-col {
  height: 48%;
  min-height: 200px;
  margin-top: 10px;
}
</style>
