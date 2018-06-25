<template>
  <div v-loading="loading">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="companyName"
        label="企业名称">
        <template slot-scope="scope">
          <el-button @click.stop="Detail(scope.row)" type="text" size="small">{{scope.row.companyName}}</el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="regDate"
        label="归属地市"
        width="200">
      </el-table-column>
      <el-table-column
        prop="regDate"
        label="注册时间"
        width="200">
      </el-table-column>
      <el-table-column
        prop="authDate"
        label="企业认证时间"
        width="200">
      </el-table-column>
      <el-table-column
        prop="custType"
        label="客户类型"
        :formatter="customerType"
        width="180">
      </el-table-column>
      <el-table-column
        prop="custType"
        label="企业性质"
        :formatter="customerType"
        width="180">
      </el-table-column>
      <el-table-column
        prop="custType"
        label="主营行业"
        :formatter="customerType"
        width="180">
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
        name: 'FinancingUserDetail',
        params: {
          userID: data.custId,
          userName: data.companyName
        }
      });
    },
    customerType (data) {
      let type = data.custType;
      /* eslint-disable no-unreachable */
      type = type * 1;
      switch (type) {
        case 0: return '运营商'; break;
        case 1: return '企业会员'; break;
        case 2: return '个人会员'; break;
        default: return '---'; break;
      }
    }
  }
};
</script>
