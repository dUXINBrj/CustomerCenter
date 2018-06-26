<template>
  <div v-loading="loading">
    <div class="content">
      <h2 class="title">企业基本信息</h2>
      <el-row>
        <el-col :span="6">
          <el-form label-position="left" inline class="tableDetailItem">
            <el-form-item label="企业名称:">
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
            <el-form-item label="业务代表:">
              <span>{{baseInfo.businessReprentative  | empty }}</span>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="6">
          <el-form label-position="left" inline class="tableDetailItem">
            <el-form-item label="客户类型:">
              <span>{{baseInfo.custType |custType }}</span>
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
        <el-col :span="6">
          <el-form label-position="left" inline class="tableDetailItem">
            <el-form-item label="税号:">
              <span>{{baseInfo.taxRegistrationNumber | empty}}</span>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="6">
          <el-form label-position="left" inline class="tableDetailItem">
            <el-form-item label="工商登记号:">
              <span>{{baseInfo.businessRegistrationNumber | empty}}</span>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="6">
          <el-form label-position="left" inline class="tableDetailItem">
            <el-form-item label="所属地市:">
              <span>{{baseInfo.areainfo | empty}}</span>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <el-form label-position="left" inline class="tableDetailItem">
            <el-form-item label="客户状态:">
              <span>{{baseInfo.custState | custState}}</span>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="6">
          <el-form label-position="left" inline class="tableDetailItem">
            <el-form-item label="企业认证状态:">
              <span>{{baseInfo.infoAuth | infoAuth}}</span>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="6">
          <el-form label-position="left" inline class="tableDetailItem">
            <el-form-item label="企业性质:">
              <span>{{baseInfo.enterpriseTypeCode | empty}}</span>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="6">
          <el-form label-position="left" inline class="tableDetailItem">
            <el-form-item label="主营行业:">
              <span>{{baseInfo.custSupply | empty}}</span>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
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
                    <a href="javascript:void (0)">下载</a>
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
                    <a href="javascript:void (0)">下载</a>
                  </div>
                  <div v-if="!baseInfo.attachVos[2].filePath">
                    暂无
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="7">业务代表身份证正面</el-col>
                <el-col :span="10" :title="baseInfo.attachVos[4].attachName">{{baseInfo.attachVos[4].attachName | empty}}</el-col>
                <el-col :span="7">
                  <div v-if="baseInfo.attachVos[4].filePath">
                    <a href="javascript:void (0)" @click="viewImg(baseInfo.attachVos[4])">查看</a>
                    <a href="javascript:void (0)">下载</a>
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
                    <a href="javascript:void (0)">下载</a>
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
                    <a href="javascript:void (0)">下载</a>
                  </div>
                  <div v-if="!baseInfo.attachVos[3].filePath">
                    暂无
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="7">业务代表身份证背面</el-col>
                <el-col :span="10" :title="baseInfo.attachVos[5].attachName">{{baseInfo.attachVos[5].attachName | empty}}</el-col>
                <el-col :span="7">
                  <div v-if="baseInfo.attachVos[5].filePath">
                    <a href="javascript:void (0)" @click="viewImg(baseInfo.attachVos[5])">查看</a>
                    <a href="javascript:void (0)">下载</a>
                  </div>
                  <div v-if="!baseInfo.attachVos[5].filePath">
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
            label="登录名">
          </el-table-column>
          <el-table-column
            prop="cellPhone"
            label="手机号码"
            width="200">
          </el-table-column>
          <el-table-column
            prop="email"
            label="电子邮箱">
          </el-table-column>
          <el-table-column
            prop="firstRegPlatform"
            :formatter="regType"
            label="原始注册平台">
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
        companyAccountVo: []
      }
    };
  },
  mounted () {
    this.custId = this.$route.params.custId;
    this.getCompanyInfo();
  },
  activated () {
    this.custId = this.$route.params.custId;
    let path = this.$route.path;
    for (let item of this.navTabs) {
      if (item.route === path) {
        if (!item.exit) {
          this.getCompanyInfo();
        }
        break;
      }
    }
  },
  methods: {
    getCompanyInfo () {
      let params = {
        'custId': this.custId
      };
      this.$request(
        this.$api.getECommerceCompanyDetail,
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
    regType (data) {
      let type = data.firstRegPlatform;
      /* eslint-disable no-unreachable */
      type = type * 1;
      switch (type) {
        case 1: return '融资平台'; break;
        case 2: return '电商平台'; break;
        case 3: return '荣邦'; break;
        default: return '---'; break;
      }
    },
    viewImg (data) {
      console.log(data);
    }
  },
  computed: {
    ...mapGetters([
      'navTabs'
    ])
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
