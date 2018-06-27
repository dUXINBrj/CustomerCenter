<template>
  <div v-loading="loading">
    <img :src="imgPath" alt="图片加载失败" @error="imgError" @load="imgLoad">
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  data () {
    return {
      imgPath: '',
      loading: true
    };
  },
  mounted () {
    this.imgPath = this.$route.query.filePath;
  },
  activated () {
  //    let path = this.$route.fullPath;
  //    for (let item of this.navTabs) {
  //      if (item.route === path) {
  //        if (!item.exist) {
  //          let num = Math.floor(Math.random() * 100000);
  //          num = num.toString();
  //          this.imgPath = this.$route.query.filePath + '?' + num;
  //        }
  //        break;
  //      }
  //    }
    if (this.$route.params.filePath && this.$route.params.filePath !== this.imgPath) {
      this.imgPath = this.$route.params.filePath;
    }
  },
  methods: {
    imgError () {
      this.loading = false;
    },
    imgLoad () {
      this.loading = false;
    }
  },
  computed: {
    ...mapGetters([
      'navTabs',
      'activeTab'
    ])
  }
//  watch: {
//    $route (to) {
//      if (to.fullPath === this.activeTab) {
//        this.loading = true;
//        this.imgPath = to.query.filePath + '?' + Math.floor(Math.random() * 100000);
//      }
//    }
//  }
};
</script>
<style scoped>
img {
  width: 100%;
},
div {
  width: 100%;
  height: 100%;
}
</style>
