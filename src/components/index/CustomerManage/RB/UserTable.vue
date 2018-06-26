<template>
  <div v-loading="loading">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="loginAccount"
        :show-overflow-tooltip="true"
        label="登录名">
      </el-table-column>
      <el-table-column
        prop="companyName"
        :show-overflow-tooltip="true"
        label="企业名称">
        <template slot-scope="scope">
          <el-button @click.stop="Detail(scope.row)" type="text" size="small">{{scope.row.companyName}}</el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="userCode"
        label="会员编号"
        :show-overflow-tooltip="true">
      </el-table-column>
      <el-table-column
        prop="cellPhone"
        label="手机号"
        :show-overflow-tooltip="true">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
        :show-overflow-tooltip="true">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  props: ['tableData', 'loading'],
  methods: {
    Detail (data) {
      this.$router.push({
        name: 'RBCompanyDetail',
        params: {
          custId: data.custId,
          companyName: data.companyName
        }
      });
    }
  }
};
</script>
