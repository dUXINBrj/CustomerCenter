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
          <span v-if="scope.row.custId === null">{{scope.row.companyName}}</span>
          <el-button v-if="scope.row.custId !== null" @click.stop="Detail(scope.row)" type="text" size="small">{{scope.row.companyName}}</el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="regTime"
        label="注册时间"
        :show-overflow-tooltip="true"
        width="200">
      </el-table-column>
      <el-table-column
        prop="authTime"
        label="企业认证时间"
        :show-overflow-tooltip="true"
        width="200">
      </el-table-column>
      <el-table-column
        prop="firstRegPlatform"
        :show-overflow-tooltip="true"
        label="原始注册平台"
        :formatter="regType"
        width="120">
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
        name: 'FinancingCompanyDetail',
        params: {
          custId: data.custId,
          companyName: data.companyName
        }
      });
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
    }
  }
};
</script>
