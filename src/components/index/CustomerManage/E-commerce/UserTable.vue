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
        prop="regDate"
        label="注册时间"
        :show-overflow-tooltip="true"
        width="200">
      </el-table-column>
      <el-table-column
        prop="operTime"
        label="资料修改时间"
        :show-overflow-tooltip="true"
        width="200">
      </el-table-column>
      <el-table-column
        prop="userState"
        label="用户状态"
        :show-overflow-tooltip="true"
        :formatter="userState"
        width="100">
      </el-table-column>
      <el-table-column
        prop="userType"
        label="用户类型"
        :show-overflow-tooltip="true"
        :formatter="userType"
        width="100">
      </el-table-column>
      <el-table-column
        prop="userAccountType"
        :show-overflow-tooltip="true"
        label="账号类型"
        :formatter="accountType"
        width="100">
      </el-table-column>
      <el-table-column
        prop="lockedFlag"
        :show-overflow-tooltip="true"
        label="账号状态"
        :formatter="accountStatu"
        width="100">
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
        name: 'ECommerceCompanyDetail',
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
        default: return ' '; break;
      }
    },
    userState (data) {
      let type = data.userState;
      type = type * 1;
      switch (type) {
        case 0: return '邮箱未验证'; break;
        case 1: return '正常'; break;
        case 3: return '已注销'; break;
        case 4: return '已冻结'; break;
        case 9: return '已删除'; break;
        default: return ' '; break;
      }
    },
    userType (data) {
      let type = data.userType;
      type = type * 1;
      switch (type) {
        case 0: return '管理员账户'; break;
        case 1: return '会员账户'; break;
        default: return ' '; break;
      }
    },
    accountType (data) {
      let type = data.userAccountType;
      type = type * 1;
      switch (type) {
        case 0: return '主账号'; break;
        case 1: return '子账号'; break;
        default: return ' '; break;
      }
    },
    accountStatu (data) {
      let type = data.lockedFlag;
      type = type * 1;
      switch (type) {
        case 0: return '锁定'; break;
        case 1: return '未锁定'; break;
        default: return ' '; break;
      }
    }
  }
};
</script>
