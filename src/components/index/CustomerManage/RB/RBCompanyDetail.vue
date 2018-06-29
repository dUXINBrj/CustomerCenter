<template>
  <div v-loading="loading">
    <div class="content">
      <h2 class="title">企业基本信息</h2>
      <el-row>
        <el-col :span="6">
          <el-form label-position="left" inline class="tableDetailItem">
            <el-form-item label="公司名称:">
              <span>{{baseInfo.companyName | empty}}</span>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="6">
          <el-form label-position="left" inline class="tableDetailItem">
            <el-form-item label="公司地址:">
              <span>{{baseInfo.companyAddress | empty}}</span>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="6">
          <el-form label-position="left" inline class="tableDetailItem">
            <el-form-item label="商户类型:">
              <span>{{baseInfo.companyType | empty }}</span>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="6">
          <el-form label-position="left" inline class="tableDetailItem">
            <el-form-item label="行业类型:">
              <span>{{baseInfo.industrytype | empty }}</span>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <el-form label-position="left" inline class="tableDetailItem">
            <el-form-item label="法人:">
              <span>{{baseInfo.legalPerson | empty}}</span>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="6">
          <el-form label-position="left" inline class="tableDetailItem">
            <el-form-item label="法人身份证号:">
              <span>{{baseInfo.legalpersonIdcard | empty}}</span>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="6">
          <el-form label-position="left" inline class="tableDetailItem">
            <el-form-item label="法人电话:">
              <span>{{baseInfo.legalpersonPhone | empty}}</span>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="6">
          <el-form label-position="left" inline class="tableDetailItem">
            <el-form-item label="负责人:">
              <span>{{baseInfo.companyleander | empty}}</span>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <el-form label-position="left" inline class="tableDetailItem">
            <el-form-item label="负责人电话:">
              <span>{{baseInfo.companyleanderphone | empty}}</span>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="6">
          <el-form label-position="left" inline class="tableDetailItem">
            <el-form-item label="所属省:">
              <span>{{baseInfo.provinceName | empty}}</span>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="6">
          <el-form label-position="left" inline class="tableDetailItem">
            <el-form-item label="所属市:">
              <span>{{baseInfo.cityName | empty}}</span>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="6">
          <el-form label-position="left" inline class="tableDetailItem">
            <el-form-item label="所属区:">
              <span>{{baseInfo.areaName | empty}}</span>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <el-form label-position="left" inline class="tableDetailItem">
            <el-form-item label="统一社会信用代码:">
              <span>{{baseInfo.unifiedSocialInformationCode | empty}}</span>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="18">
          <el-form label-position="left" inline class="tableDetailItem">
            <el-form-item label="邮箱:">
              <span>{{baseInfo.email | empty}}</span>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="18">
          <el-form label-position="left" inline class="tableDetailItem">
            <el-form-item label="备注:">
              <span>{{baseInfo.remark | empty}}</span>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
    <div class="content">
      <h2 class="title">相关文档</h2>
      <div class="container">
        <el-table
          :data="baseInfo.attachVos"
          height="250"
          border
          style="width: 100%">
          <el-table-column
            type="index"
            :index="indexMethod">
          </el-table-column>
          <el-table-column
            prop="certificatetypeName"
            :show-overflow-tooltip="true"
            label="证件类型名称">
          </el-table-column>
          <el-table-column
            prop="certificateContent"
            label="证件图片"
            :show-overflow-tooltip="true">
          </el-table-column>
          <el-table-column
            :show-overflow-tooltip="true"
            label=""
            width="200">
            <template slot-scope="scope">
              <el-button @click.stop="viewImg(scope.row)" type="text" size="small">查看</el-button>
              <el-button @click.stop="downloadFile(scope.row)" type="text" size="small">下载</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="content">
      <h2 class="title">银行账户信息</h2>
      <div class="container table">
        <el-table
          :data="baseInfo.bankAccountVos"
          height="250"
          border
          style="width: 100%">
          <el-table-column
            type="index"
            :index="indexMethod">
          </el-table-column>
          <el-table-column
            prop="accountType"
            :formatter="accountType"
            :show-overflow-tooltip="true"
            label="账户类型">
          </el-table-column>
          <el-table-column
            prop="accountName"
            :show-overflow-tooltip="true"
            label="账户名称">
          </el-table-column>
          <el-table-column
            prop="bankAccount"
            :show-overflow-tooltip="true"
            label="账号">
          </el-table-column>
          <el-table-column
            prop="bank"
            :show-overflow-tooltip="true"
            label="开户行名称">
          </el-table-column>
          <el-table-column
            prop="bankCode"
            :show-overflow-tooltip="true"
            label="联行号">
          </el-table-column>
          <el-table-column
            prop="idcardNo"
            :show-overflow-tooltip="true"
            label="身份证号码">
          </el-table-column>
          <el-table-column
            prop="mobilePhone"
            :show-overflow-tooltip="true"
            label="手机号">
          </el-table-column>
        </el-table>
      </div>
      <h2 class="title">企业下属账号信息</h2>
      <div class="container table">
        <el-table
          :data="baseInfo.companyAccountVo"
          height="250"
          border
          style="width: 100%">
          <el-table-column
            type="index"
            :index="indexMethod">
          </el-table-column>
          <el-table-column
            prop="loginName"
            :show-overflow-tooltip="true"
            label="登录名">
          </el-table-column>
          <el-table-column
            prop="userCode"
            label="会员编码"
            :show-overflow-tooltip="true"
            width="200">
          </el-table-column>
          <el-table-column
            prop="cellPhone"
            :show-overflow-tooltip="true"
            label="手机号码">
          </el-table-column>
          <el-table-column
            prop="mUserid"
            :show-overflow-tooltip="true"
            label="会员ID">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  data () {
    return {
      loading: true,
      custId: '',
      companyId: '',
      baseInfo: {
        attachVos: [],
        companyAccountVo: [],
        bankAccountVos: []
      }
    };
  },
  mounted () {
    this.custId = this.$route.params.custId;
    this.companyId = this.$route.params.companyId;
    this.getCompanyInfo();
  },
  methods: {
    getCompanyInfo () {
      let params = {
        'custId': this.custId
      };
      this.$http({
        url: this.$api.getRbCompanyDetail,
        method: 'POST',
        data: params
      }).then(res => {
        this.loading = false;
        let code = res.data.retCode;
        code = code * 1;
        if (code !== 0) {
          this.$message.error('获取企业信息失败:' + res.data.retMessage);
          return false;
        }
        this.baseInfo = res.data.responseDate.companyDetailVo;
        // 查询荣邦企业详细信息 需要custId和CompanyId 为保证唯一性 将两者加起来
        let custId = this.custId;
        custId = custId.toString();
        let companyId = this.companyId;
        companyId = companyId.toString();
        let data = {
          name: 'RbData',
          custId: custId + companyId,
          data: res.data.responseDate.companyDetailVo
        };
        this.$store.commit('addDetailData', data);
      }).catch(err => {
        this.loading = false;
        this.$message.error('网络连接失败，请稍后重试！');
        console.log(err);
      });
    },
    indexMethod (index) {
      return index + 1;
    },
    accountType (data) {
      let type = data.accountType;
      /* eslint-disable no-unreachable */
      type = type * 1;
      switch (type) {
        case 0: return '公帐'; break;
        case 1: return '私账'; break;
        default: return '---'; break;
      }
    },
    downloadFile (data) {
      this.$http({
        url: this.$api.downloadFinacingFile + '?fileUrl=' + data.certificatePath + '&fileName=' + data.certificateContent,
        method: 'GET'
      }).then(res => {}).catch(err => {
        this.loading = false;
        this.$message.error('网络连接失败，请稍后重试！');
        console.log(err);
      });
    },
    viewImg (data) {
      this.$router.push({
        name: '图片浏览',
        params: {
          filePath: data.filePath
        }
      });
    }
  },
  computed: {
    ...mapGetters([
      'navTabs',
      'activeTab',
      'RbData'
    ])
  },
  watch: {
    $route (to) {
      if (to.name === 'RBCompanyDetail') {
        let path = to.fullPath;
        let flag = true;
        for (let item of this.navTabs) {
          if (item.route === path) {
            if (!item.exist) {
              flag = false;
            }
            break;
          }
        }
        if (!flag) {
          this.custId = to.params.custId;
          this.companyId = to.params.companyId;
          this.getCompanyInfo();
        } else {
          if (this.RbData[to.params.custId]) {
            this.baseInfo = this.RbData[to.params.custId];
          } else {
            this.custId = to.params.custId;
            this.companyId = to.params.companyId;
            this.getCompanyInfo();
          }
        }
      }
    }
  }
};
</script>
<style scoped>
  .title {
    text-align: center;
    border-bottom: 2px solid #ddd;
    padding: 20px 0;
    margin-bottom: 20px;
  }
  .subTitle {
    text-align: center;
  }
  .content {
    border: 1px solid #ddd;
    padding: 0 30px;
    background: #fff;
    margin-bottom: 30px;
  }
  .container {
    padding: 0 20px;
    margin-bottom: 30px;
  }
  .doc {
    border: 1px solid #ddd;
    font-size: 14px;
  }
  .doc .el-col {
    text-align: center;
    height: 25px;
    line-height: 25px;
  }
  .doc .el-col-10 {
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .doc .el-col-7 {
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .doc .el-row {
    border-bottom: 1px solid #ddd;
  }
  .doc .el-row:last-child {
    border: none;
  }
  .doc .el-col:nth-child(2) {
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
  }
  .doc a {
    font-size: 14px;
    cursor: pointer;
  }
</style>
