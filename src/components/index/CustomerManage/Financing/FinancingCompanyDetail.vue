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
              <span>{{baseInfo.businessReprentative | empty}}</span>
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
            <el-form-item label="贷款卡编号:">
              <span>{{baseInfo.loanCardNumber | empty}}</span>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="6">
          <el-form label-position="left" inline class="tableDetailItem">
            <el-form-item label="是否三证合一:">
              <span>{{baseInfo.threeCertTogether | threeCertTogether}}</span>
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
                    <a href="javascript:void (0)" @click="downloadFile(baseInfo.attachVos[0])">下载</a>
                  </div>
                  <div v-if="!baseInfo.attachVos[0].filePath">
                    暂无
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="7">公司营业章程</el-col>
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
                <el-col :span="7">近三个月的财务报表</el-col>
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
              <el-row>
                <el-col :span="7">业务代表身份证</el-col>
                <el-col :span="10" :title="baseInfo.attachVos[6].attachName">{{baseInfo.attachVos[6].attachName | empty}}</el-col>
                <el-col :span="7">
                  <div v-if="baseInfo.attachVos[6].filePath">
                    <a href="javascript:void (0)" @click="viewImg(baseInfo.attachVos[6])">查看</a>
                    <a href="javascript:void (0)" @click="downloadFile(baseInfo.attachVos[6])">下载</a>
                  </div>
                  <div v-if="!baseInfo.attachVos[6].filePath">
                    暂无
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="7">其他</el-col>
                <el-col :span="10" :title="baseInfo.attachVos[8].attachName">{{baseInfo.attachVos[8].attachName | empty}}</el-col>
                <el-col :span="7">
                  <div v-if="baseInfo.attachVos[8].filePath">
                    <a href="javascript:void (0)" @click="viewImg(baseInfo.attachVos[8])">查看</a>
                    <a href="javascript:void (0)" @click="downloadFile(baseInfo.attachVos[8])">下载</a>
                  </div>
                  <div v-if="!baseInfo.attachVos[8].filePath">
                    暂无
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="doc">
              <el-row>
                <el-col :span="7">开户许可证</el-col>
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
                <el-col :span="7">财务报表</el-col>
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
              <el-row>
                <el-col :span="7">法人代表身份证</el-col>
                <el-col :span="10" :title="baseInfo.attachVos[5].attachName">{{baseInfo.attachVos[5].attachName | empty}}</el-col>
                <el-col :span="7">
                  <div v-if="baseInfo.attachVos[5].filePath">
                    <a href="javascript:void (0)" @click="viewImg(baseInfo.attachVos[5])">查看</a>
                    <a href="javascript:void (0)" @click="downloadFile(baseInfo.attachVos[5])">下载</a>
                  </div>
                  <div v-if="!baseInfo.attachVos[5].filePath">
                    暂无
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="7">企业征信报告</el-col>
                <el-col :span="10" :title="baseInfo.attachVos[7].attachName">{{baseInfo.attachVos[7].attachName | empty}}</el-col>
                <el-col :span="7">
                  <div v-if="baseInfo.attachVos[7].filePath">
                    <a href="javascript:void (0)" @click="viewImg(baseInfo.attachVos[7])">查看</a>
                    <a href="javascript:void (0)" @click="downloadFile(baseInfo.attachVos[7])">下载</a>
                  </div>
                  <div v-if="!baseInfo.attachVos[7].filePath">
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
            prop="loginAccount"
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
  methods: {
    getCompanyInfo () {
      let params = {
        'custId': this.custId
      };
      this.$http({
        url: this.$api.getFinacingCompanyDetail,
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
        this.baseInfo = res.data.responseDate.companyInfoDetail;
        let data = {
          name: 'finacingData',
          custId: this.custId,
          data: res.data.responseDate.companyInfoDetail
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
    downloadFile (data) {
      this.$http({
        url: this.$api.downloadFinacingFile + '?fileUrl=' + data.filePath + '&fileName=' + data.attachName,
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
      'finacingData'
    ])
  },
  watch: {
    $route (to) {
      /* 使用vuex保存详情页页面数据 实现切换tab页后不重新向后台获取数据 */
      // 判断当前路由是否前往详情页
      // 判断当前tab是否之前已经打开
      // 打开的情况下判断vuex是否存有相关数据 如果有直接加载 没有则向后台请求
      // 没打开的情况直接向后台请求
      if (to.name === 'FinancingCompanyDetail') {
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
          this.getCompanyInfo();
        } else {
          if (this.finacingData[to.params.custId]) {
            this.baseInfo = this.finacingData[to.params.custId];
          } else {
            this.custId = to.params.custId;
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
