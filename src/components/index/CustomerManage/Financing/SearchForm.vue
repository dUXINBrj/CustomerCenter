<template>
  <div class="searchContent">
    <el-form :inline="true">
      <el-row :gutter="20">
        <el-col :span="24">
          <el-form-item label="登录名:">
            <el-input size="mini" clearable v-model="searchData.userName" placeholder="请输入登录名"></el-input>
          </el-form-item>
          <el-form-item label="注册时间:">
            <el-date-picker
              size="mini"
              v-model="searchData.startTime"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="至">
            <el-date-picker
              size="mini"
              v-model="searchData.endTime"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="mini" @click="search" :loading="loading">查询</el-button>
            <el-button type="warning" size="mini" @click="resetSearch" :loading="loading">重置</el-button>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item label="公司名称:">
            <el-select size="mini" clearable filterable  v-model="searchData.companyName" placeholder="请选择公司名称">
              <el-option v-for="item in companyOption"
                         :key="item.id"
                         :label="item.name"
                         :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
export default {
  props: ['searchData', 'mode', 'loading'],
  data () {
    return {
      companyOption: []
    };
  },
  activated () {
    this.getFinacingCompany();
  },
  methods: {
    getFinacingCompany () {
      this.$http({
        url: this.$api.getFinacingCompany,
        method: 'POST'
      }).then(res => {
        this.companyOption = res.data.data.list;
      }).catch(err => {
        console.log(err);
      });
    },
    search () {
      this.$emit('search');
    },
    resetSearch () {}
  }
};
</script>
<style scoped>
  .searchContent {
    border-radius: 2px;
    margin-bottom: 10px;
    background: #fff;
    border: 1px solid #dcdfe6;
    -webkit-box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
  }
  .el-form--inline .el-form-item {
    margin-bottom: 0;
  }
  .el-form {
    padding: 10px;
  }
</style>
