<template>
  <div class="searchContent">
    <el-form :inline="true" :model="searchData" :rules="rules" ref="searchData" :label-width="labelWidth">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="登录名" prop="loginAccount">
            <el-input size="mini" clearable maxlength="50" v-model="searchData.loginAccount" placeholder="请输入登录名"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="企业名称" prop="company">
            <el-select size="mini" clearable filterable  v-model="searchData.companyName" placeholder="请选择企业名称">
              <el-option v-for="item in companyOption"
                         :key="item.custId"
                         :label="item.companyName"
                         :value="item.companyName">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="企业信息状态" prop="company">
            <el-select size="mini" clearable filterable  v-model="searchData.custState" placeholder="请选择企业信息状态">
              <el-option v-for="(item, key) in companyCusStatu"
                         :key="item"
                         :label="key"
                         :value="item">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="信息认证状态" prop="company">
            <el-select size="mini" clearable filterable  v-model="searchData.infoAuth" placeholder="请选择信息认证状态">
              <el-option v-for="(item, key) in companyAuthstatus"
                         :key="item"
                         :label="key"
                         :value="item">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="注册时间" prop="pass">
            <el-date-picker
              size="mini"
              v-model="searchData.startTime"
              type="date"
              placeholder="选择开始日期"
              value-format="timestamp"
              :picker-options="dateOptions">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="至" prop="endTime">
            <el-date-picker
              size="mini"
              v-model="searchData.endTime"
              type="date"
              placeholder="选择结束日期"
              value-format="timestamp"
              :picker-options="dateOptions">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="所属地市" prop="company">
            <el-select size="mini" clearable filterable  v-model="searchData.areaInfo" placeholder="请选择所属地市">
              <el-option v-for="(item,key) in areaCityOption"
                         :key="key"
                         :label="item"
                         :value="item">
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
    let endDateCheck = (rule, value, callback) => {
      if (value === '') {
        callback();
      } else if (this.searchData.startTime !== '' && typeof this.searchData.startTime !== 'object') {
        if (value < this.searchData.startTime) {
          callback(new Error('结束时间不能小于开始时间!'));
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
      labelWidth: '100px',
      companyOption: [],
      companyCusStatu: [],
      companyAuthstatus: [],
      areaCityOption: [],
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
    this.getCompany();
    this.getCompanyCusStatu();
    this.getCompanyAuthstatus();
    this.getAreaCity();
  },
  methods: {
    getCompany () {
      this.$request(
        this.$api.getFinacingCompany,
        'POST',
        {clientType: 2}
      ).then(res => {
        this.companyOption = res.responseDate.companys;
      }).catch(errMsg => {
        this.$message.error(errMsg);
      });
    },
    getCompanyCusStatu () {
      this.$request(
        this.$api.getCompanyCusStatu,
        'POST',
        {clientType: 2}
      ).then(res => {
        this.companyCusStatu = res.responseDate.custStatus;
      }).catch(errMsg => {
        this.$message.error(errMsg);
      });
    },
    getCompanyAuthstatus () {
      this.$request(
        this.$api.getCompanyAuthstatus,
        'POST',
        {clientType: 2}
      ).then(res => {
        this.companyAuthstatus = res.responseDate.infoAuthStatus;
      }).catch(errMsg => {
        this.$message.error(errMsg);
      });
    },
    getAreaCity () {
      this.$request(
        this.$api.getAreaCity,
        'POST',
        {}
      ).then(res => {
        this.areaCityOption = res.responseDate.areaInfos;
      }).catch(errMsg => {
        this.$message.error(errMsg);
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
