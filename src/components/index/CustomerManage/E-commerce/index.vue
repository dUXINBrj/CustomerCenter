<template>
  <div>
    <searchForm
      :searchData="searchData"
      :loading="loading"
      @search="searchAction"
      @resetSearch="resetSearch">
    </searchForm>
    <el-tabs type="border-card" :value="activeTab" @tab-click="changeTab">
      <el-tab-pane label="用户账户列表" name="one">
        <Usertable :tableData="user.tableData" :loading="loading"></Usertable>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="user.currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="user.rows"
          layout="total, sizes, prev, pager, next, jumper"
          :total="user.total">
        </el-pagination>
      </el-tab-pane>
      <el-tab-pane label="注册企业列表" name="two">
        <Companytable :tableData="company.tableData" :loading="loading"></Companytable>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="company.currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="company.rows"
          layout="total, sizes, prev, pager, next, jumper"
          :total="company.total">
        </el-pagination>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import searchForm from './SearchForm.vue';
import Usertable from './Usertable.vue';
import Companytable from './Companytable.vue';
import {mapGetters} from 'vuex';
export default {
  components: {
    searchForm,
    Usertable,
    Companytable
  },
  mounted () {
    this.search(true);
  },
  activated () {
    let path = this.$route.fullPath;
    for (let item of this.navTabs) {
      if (item.route === path) {
        if (!item.exit) {
          this.activeTab = 'one';
          this.resetSearch();
        }
        break;
      }
    }
  },
  data () {
    return {
      loading: false,
      activeTab: 'one',
      searchData: {
        loginAccount: '',
        companyName: '',
        custState: '',
        infoAuth: '',
        startTime: '',
        endTime: '',
        areaInfo: ''
      },
      saveSearchData: {},
      user: {
        rows: 10,
        total: 0,
        currentPage: 1,
        TableData: []
      },
      company: {
        rows: 10,
        total: 0,
        currentPage: 1,
        TableData: []
      }
    };
  },
  methods: {
    deepCopy (source) {
      let result = {};
      for (let key in source) {
        result[key] = typeof source[key] === 'object' ? this.deepCopy(source[key]) : source[key];
      }
      return result;
    },
    searchAction () {
      this.user.currentPage = 1;
      this.company.currentPage = 1;
      this.saveSearchData = this.deepCopy(this.searchData);
      this.search(true);
    },
    resetSearch () {
      this.searchData.loginAccount = '';
      this.searchData.companyName = '';
      this.searchData.startTime = '';
      this.searchData.endTime = '';
      this.searchData.custState = '';
      this.searchData.infoAuth = '';
      this.searchData.areaInfo = '';
      this.searchAction();
    },
    search (both) {
      this.loading = true;
      if (typeof this.saveSearchData.startTime === 'object') {
        this.saveSearchData.startTime = '';
      }
      if (this.saveSearchData.startTime) {
        this.saveSearchData.startTime = this.$common.timeFormat(this.saveSearchData.startTime);
      }
      if (typeof this.saveSearchData.endTime === 'object') {
        this.saveSearchData.endTime = '';
      }
      if (this.saveSearchData.endTime) {
        this.saveSearchData.endTime = this.$common.timeFormat(this.saveSearchData.endTime);
      }
      if (both) {
        this.getUserList();
        this.getCompanyList();
      } else {
        if (this.activeTab === 'one') {
          this.getUserList();
        } else {
          this.getCompanyList();
        }
      }
    },
    getUserList () {
      this.saveSearchData.page = this.user.currentPage;
      this.saveSearchData.rows = this.user.rows;
      let params = {};
      for (let i in this.saveSearchData) {
        params[i] = this.saveSearchData[i];
      }
      this.$request(
        this.$api.getECommerceUserTable,
        'POST',
        params
      ).then(res => {
        this.loading = false;
        this.user.total = res.responseDate.totalCount;
        this.user.tableData = res.responseDate.accountVoList;
      }).catch(errMsg => {
        this.loading = false;
        this.$message.error(errMsg);
      });
    },
    getCompanyList () {
      this.saveSearchData.page = this.company.currentPage;
      this.saveSearchData.rows = this.company.rows;
      let params = {};
      for (let i in this.saveSearchData) {
        params[i] = this.saveSearchData[i];
      }
      this.$request(
        this.$api.getECommerceCompanyTable,
        'POST',
        params
      ).then(res => {
        this.loading = false;
        this.company.total = res.responseDate.totalCount;
        this.company.tableData = res.responseDate.companyVoList;
      }).catch(errMsg => {
        this.loading = false;
        this.$message.error(errMsg);
      });
    },
    changeTab (el) {
      this.activeTab = el.name;
    },
    handleSizeChange (val) {
      if (this.activeTab === 'one') {
        this.user.currentPage = 1;
        this.user.rows = val;
      } else {
        this.company.currentPage = 1;
        this.company.rows = val;
      }
      this.search();
    },
    handleCurrentChange (val) {
      if (this.activeTab === 'one') {
        this.user.currentPage = val;
      } else {
        this.company.currentPage = val;
      }
      this.search();
    }
  },
  computed: {
    ...mapGetters([
      'navTabs'
    ])
  }
};
</script>
