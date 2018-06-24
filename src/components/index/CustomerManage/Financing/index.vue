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
        <Usertable :tableData="tableData" :loading="loading"></Usertable>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="limit"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </el-tab-pane>
      <el-tab-pane label="注册企业列表" name="two">
        <Usertable :tableData="tableData" :loading="loading"></Usertable>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="limit"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import searchForm from './SearchForm.vue';
import Usertable from './Usertable.vue';
export default {
  components: {
    searchForm,
    Usertable
  },
  activated () {
    this.search();
  },
  data () {
    return {
      loading: false,
      activeTab: 'one',
      searchData: {
        userName: '',
        companyId: '',
        startTime: '',
        endTime: '',
        start: 0
      },
      saveSearchData: {},
      limit: 10,
      total: 0,
      currentPage: 1,
      tableData: []
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
      this.currentPage = 1;
      this.saveSearchData = this.deepCopy(this.searchData);
      this.search();
    },
    resetSearch () {
      this.searchData.userName = '';
      this.searchData.companyId = '';
      this.searchData.startTime = '';
      this.searchData.endTime = '';
      this.searchAction();
    },
    search () {
      this.loading = true;
      this.saveSearchData.start = this.limit * (this.currentPage - 1);
      this.saveSearchData.limit = this.limit;
      if (typeof this.saveSearchData.startTime === 'object') {
        this.saveSearchData.startTime = '';
      }
      if (typeof this.saveSearchData.endTime === 'object') {
        this.saveSearchData.endTime = '';
      }
      if (this.activeTab === 'one') {
        this.saveSearchData.type = 1;
      } else {
        this.saveSearchData.type = 2;
      }
      console.log(this.saveSearchData);
      this.$http({
        url: this.$api.getFinacingUserTable,
        method: 'POST',
        data: this.saveSearchData
      }).then(res => {
        this.loading = false;
        console.log(res);
        this.total = res.data.data.count;
        this.tableData = res.data.data.list;
      }).catch(err => {
        this.loading = false;
        console.log(err);
      });
    },
    changeTab (el) {
      this.activeTab = el.name;
      this.search();
    },
    handleSizeChange (val) {
      this.currentPage = 1;
      this.limit = val;
      this.search();
    },
    handleCurrentChange (val) {
      this.currentPage = val;
      this.search();
    }
  }
};
// TODO 切换页面tab时 是否重新加载页面
// TODO 切换表格tab时 是否重新加载表格数据
// TODO 切换表格tab时 是否重新清空搜索条件
</script>
