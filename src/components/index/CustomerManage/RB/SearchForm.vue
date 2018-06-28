<template>
  <div class="searchContent">
    <el-form :inline="true" :label-width="labelWidth">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="登录名">
            <el-input size="mini" clearable maxlength="50" v-model="searchData.loginAccount"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="企业名称">
            <el-select size="mini" clearable filterable  v-model="searchData.companyName" placeholder="全部">
              <el-option v-for="item in companyOption"
                         :key="item.custId"
                         :label="item.companyName"
                         :value="item.companyName">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item>
            <el-button type="primary" size="mini" @click="search" :loading="loading">查询</el-button>
            <el-button type="warning" size="mini" @click="resetSearch" :loading="loading">重置</el-button>
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
      labelWidth: '100px',
      companyOption: [],
      dateOptions: {
        disabledDate (time) {
          if (time.getTime() > Date.now()) {
            return true;
          } else {
            return false;
          }
        }
      }
    };
  },
  activated () {
    this.getCompany();
  },
  methods: {
    getCompany () {
      this.$http({
        url: this.$api.getFinacingCompany + '?clientType=3',
        method: 'POST'
      }).then(res => {
        this.loading = false;
        let code = res.data.retCode;
        code = code * 1;
        if (code !== 0) {
          return false;
        }
        this.companyOption = res.data.responseDate.companys;
      }).catch(err => {
        this.loading = false;
        console.log(err);
      });
    },
    search () {
      this.$emit('search');
    },
    resetSearch () {
      this.$emit('resetSearch');
    }
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
