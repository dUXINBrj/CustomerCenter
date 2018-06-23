<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="fullName"
        label="企业名称"
        width="180">
        <template slot-scope="scope">
          <el-button @click.stop="Detail(scope.row)" type="text" size="small">{{scope.row.fullName}}</el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="date"
        label="注册时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="企业认证时间">
      </el-table-column>
      <el-table-column
        prop="type"
        label="客户类型">
      </el-table-column>
      <el-table-column
        prop="type"
        label="是否三证合一">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  props: ['tableData'],
  methods: {
    Detail (data) {
      this.$router.push({
        name: 'FinancingUserDetail',
        params: {
          userID: data.id,
          userName: data.fullName
        }
      });
    }
  }
};
</script>
