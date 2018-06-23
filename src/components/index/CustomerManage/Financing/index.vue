<template>
  <div>
    <searchForm :searchData="searchData" :loading="loading" @search="searchAction"></searchForm>
    <el-tabs type="border-card">
      <el-tab-pane label="用户账户列表">
        <Usertable :tableData="tableData"></Usertable>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
      </el-tab-pane>
      <el-tab-pane label="注册企业列表">注册企业列表</el-tab-pane>
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
  data () {
    return {
      loading: false,
      searchData: {
        userName: '',
        companyName: '',
        startTime: '',
        endTime: ''
      },
      currentPage: 1,
      saveSearchData: {},
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
      this.saveSearchData = this.deepCopy(this.searchData);
      this.search();
    },
    search () {
      this.$http({
        url: this.$api.getFinacingUserTable,
        method: 'POST',
        data: this.saveSearchData
      }).then(res => {
        console.log(res);
        this.tableData = res.data.data.list;
      }).catch(err => {
        console.log(err);
      });
    },
    handleSizeChange () {},
    handleCurrentChange () {}
  }
};
</script>
