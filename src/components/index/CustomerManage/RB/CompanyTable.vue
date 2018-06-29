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
        prop="industrytypeName"
        label="行业类型"
        :show-overflow-tooltip="true">
      </el-table-column>
      <el-table-column
        prop="address"
        :show-overflow-tooltip="true"
        label="公司地址">
      </el-table-column>
      <el-table-column
        prop="companyLeander"
        label="负责人"
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
          companyName: data.companyName,
          companyId: data.companyId
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
        default: return ' '; break;
      }
    }
  }
};
</script>
