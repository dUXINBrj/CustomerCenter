<template>
  <div class="nav-container">
    <el-tabs v-model="activeTab" type="card" @tab-remove="removeTab" @tab-click="tabClick">
      <el-tab-pane
        v-for="(item) in navTabs"
        :key="item.route"
        :label="item.name"
        :name="item.route"
        :closable='item.closeable'
      >
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  data () {
    return {
      editableTabsValue: '',
      editableTabs: [{
        title: 'Tab 1',
        name: '1',
        content: 'Tab 1 content'
      }, {
        title: 'Tab 2',
        name: '2',
        content: 'Tab 2 content'
      }]
    };
  },
  methods: {
    tabClick (el) {
      this.$router.push({path: el.name});
    },
    removeTab (targetName) {
      // 首页不可删除
      if (targetName === '/index/dashboard') {
        return;
      }
      if (this.activeTab === targetName) {
        let index = 0;
        for (let i of this.navTabs) {
          if (i.route === targetName) {
            break;
          } else {
            index++;
          }
        }
        // 设置当前激活的路由
        if (this.navTabs && this.navTabs.length >= 1) {
          this.$store.commit('setActiveTabs', this.navTabs[index - 1].route);
          this.$router.push({path: this.activeTab});
        } else {
          this.$router.push({path: '/index/dashboard'});
        }
      }
      this.$store.commit('deleteTabs', targetName);
    }
  },
  computed: {
    ...mapGetters([
      'navTabs'
    ]),
    activeTab: {
      get () {
        return this.$store.getters.activeTab;
      },
      set (val) {
        this.$store.commit('setActiveTabs', val);
      }
    }
  }
};
</script>
<style scoped>
  .nav-container {
    background: #f5f7fa;
  }
</style>
