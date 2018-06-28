<template>
  <div class="searchContent">
    <el-form :inline="true" :model="searchData" :rules="rules" ref="searchData">
      <el-row :gutter="20">
        <el-col :span="24">
          <el-form-item label="登录名" prop="loginAccount">
            <el-input size="mini" clearable maxlength="50" v-model="searchData.loginAccount"></el-input>
          </el-form-item>
          <el-form-item label="注册时间" prop="pass">
            <el-date-picker
              :editable="false"
              size="mini"
              v-model="searchData.startTime"
              type="date"
              value-format="timestamp"
              :picker-options="dateOptions">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="至" prop="endTime">
            <el-date-picker
              :editable="false"
              size="mini"
              v-model="searchData.endTime"
              type="date"
              value-format="timestamp"
              :picker-options="dateOptions">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="公司名称" prop="company">
            <el-select size="mini" clearable filterable  v-model="searchData.companyName" placeholder="全部">
              <el-option v-for="item in companyOption"
                         :key="item.custId"
                         :label="item.companyName"
                         :value="item.companyName">
              </el-option>
            </el-select>
          </el-form-item>
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
    let endDateCheck = (rule, value, callback) => {
      if (value === '') {
        callback();
      } else if (this.searchData.startTime !== '' && typeof this.searchData.startTime !== 'object') {
        if (value < this.searchData.startTime) {
          callback(new Error('开始时间不能大于结束时间!'));
        } else {
          callback();
        }
      } else {
        callback();
      }
    };
    let pass = (rule, value, callback) => {
      callback();
    };
    return {
      companyOption: [],
      dateOptions: {
        disabledDate (time) {
          if (time.getTime() > Date.now()) {
            return true;
          } else {
            return false;
          }
        }
      },
      rules: {
        endTime: [
          {validator: endDateCheck, trigger: 'blur'}
        ],
        loginAccount: [
          { max: 50, message: '不能超过50个字符', trigger: 'blur' }
        ],
        pass: [
          {validator: pass, trigger: 'blur'}
        ],
        company: [
          {validator: pass, trigger: 'change'}
        ]
      }
    };
  },
  activated () {
    this.getFinacingCompany();
  },
  methods: {
    getFinacingCompany () {
      this.$http({
        url: this.$api.getFinacingCompany + '?clientType=1',
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
      this.$refs['searchData'].validate((valid) => {
        if (valid) {
          this.$emit('search');
        } else {
          return false;
        }
      });
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
