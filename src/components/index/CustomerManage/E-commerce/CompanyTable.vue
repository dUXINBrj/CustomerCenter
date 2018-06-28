<template>
  <div v-loading="loading">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="companyName"
        :show-overflow-tooltip="true"
        label="企业名称">
        <template slot-scope="scope">
          <span v-if="scope.row.custId === null">{{scope.row.companyName}}</span>
          <el-button v-if="scope.row.custId !== null" @click.stop="Detail(scope.row)" type="text" size="small">{{scope.row.companyName}}</el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="areaInfo"
        label="归属地市"
        :show-overflow-tooltip="true"
        width="200">
      </el-table-column>
      <el-table-column
        prop="regDate"
        :show-overflow-tooltip="true"
        label="注册时间"
        width="200">
      </el-table-column>
      <el-table-column
        prop="authDate"
        label="企业认证时间"
        :show-overflow-tooltip="true"
        width="200">
      </el-table-column>
      <el-table-column
        prop="custType"
        label="客户类型"
        :show-overflow-tooltip="true"
        :formatter="customerType"
        width="100">
      </el-table-column>
      <el-table-column
        prop="enterpriseTypeCode"
        label="企业性质"
        :show-overflow-tooltip="true"
        width="100">
      </el-table-column>
      <el-table-column
        prop="custSupply"
        label="主营行业"
        :show-overflow-tooltip="true"
        width="100">
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
        name: 'ECommerceCompanyDetail',
        params: {
          custId: data.custId,
          companyName: data.companyName
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
