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
        <p class="subTitle" v-if="baseInfo.attachVos.length === 0">暂无信息</p>
        <el-row :gutter="20" v-if="baseInfo.attachVos.length !== 0">
          <el-col :span="12">
            <div class="doc">
              <el-row>
                <el-col :span="7">企业营业执照</el-col>
                <el-col :span="10" :title="baseInfo.attachVos[0].attachName">{{baseInfo.attachVos[0].attachName | empty}}</el-col>
                <el-col :span="7">
                  <div v-if="baseInfo.attachVos[0].filePath">
                    <a href="javascript:void (0)" @click="viewImg(baseInfo.attachVos[0])">查看</a>
                    <a href="javascript:void (0)" @click="downloadFile(baseInfo.attachVos[0])">下载</a>
                  </div>
                  <div v-if="!baseInfo.attachVos[0].filePath">
                    暂无
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="7">税务登记证</el-col>
                <el-col :span="10" :title="baseInfo.attachVos[2].attachName">{{baseInfo.attachVos[2].attachName | empty}}</el-col>
                <el-col :span="7">
                  <div v-if="baseInfo.attachVos[2].filePath">
                    <a href="javascript:void (0)" @click="viewImg(baseInfo.attachVos[2])">查看</a>
                    <a href="javascript:void (0)" @click="downloadFile(baseInfo.attachVos[2])">下载</a>
                  </div>
                  <div v-if="!baseInfo.attachVos[2].filePath">
                    暂无
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="7">业务代表身份证</el-col>
                <el-col :span="10" :title="baseInfo.attachVos[4].attachName">{{baseInfo.attachVos[4].attachName | empty}}</el-col>
                <el-col :span="7">
                  <div v-if="baseInfo.attachVos[4].filePath">
                    <a href="javascript:void (0)" @click="viewImg(baseInfo.attachVos[4])">查看</a>
                    <a href="javascript:void (0)" @click="downloadFile(baseInfo.attachVos[4])">下载</a>
                  </div>
                  <div v-if="!baseInfo.attachVos[4].filePath">
                    暂无
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="doc">
              <el-row>
                <el-col :span="7">企业Logo</el-col>
                <el-col :span="10" :title="baseInfo.attachVos[1].attachName">{{baseInfo.attachVos[1].attachName | empty}}</el-col>
                <el-col :span="7">
                  <div v-if="baseInfo.attachVos[1].filePath">
                    <a href="javascript:void (0)" @click="viewImg(baseInfo.attachVos[1])">查看</a>
                    <a href="javascript:void (0)" @click="downloadFile(baseInfo.attachVos[1])">下载</a>
                  </div>
                  <div v-if="!baseInfo.attachVos[1].filePath">
                    暂无
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="7">组织机构</el-col>
                <el-col :span="10" :title="baseInfo.attachVos[3].attachName">{{baseInfo.attachVos[3].attachName | empty}}</el-col>
                <el-col :span="7">
                  <div v-if="baseInfo.attachVos[3].filePath">
                    <a href="javascript:void (0)" @click="viewImg(baseInfo.attachVos[3])">查看</a>
                    <a href="javascript:void (0)" @click="downloadFile(baseInfo.attachVos[3])">下载</a>
                  </div>
                  <div v-if="!baseInfo.attachVos[3].filePath">
                    暂无
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
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
      baseInfo: {
        attachVos: [],
        companyAccountVo: [],
        bankAccountVos: []
      }
    };
  },
  mounted () {
    this.custId = this.$route.params.custId;
  },
  methods: {
    getCompanyInfo () {
      let params = {
        'custId': this.custId
      };
      this.$request(
        this.$api.getRbCompanyDetail,
        'POST',
        params
      ).then(res => {
        this.loading = false;
        this.baseInfo = res.responseDate.companyDetailVo;
      }).catch(errMsg => {
        this.loading = false;
        this.$message.error(errMsg);
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
      let params = {
        fileUrl: data.filePath,
        fileName: data.fileName
      };
      this.$request(
        this.$api.downloadFinacingFile,
        'GET',
        params
      ).then(res => {}).catch(errMsg => {
        this.loading = false;
        this.$message.error(errMsg);
      });
    },
    viewImg (data) {
      console.log(data);
    }
  },
  computed: {
    ...mapGetters([
      'navTabs',
      'activeTab'
    ])
  },
  watch: {
    $route (to) {
      if (to.fullPath === this.activeTab) {
        this.custId = to.params.custId;
      }
    },
    custId () {
      this.getCompanyInfo();
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
