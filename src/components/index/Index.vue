<template>
  <div>
    <h2 class="title">index</h2>
    <router-link to="/dashboard">dashboard</router-link>
    <router-link to="/lock">lock</router-link>
    {{msg}}
    <button @click="change">change</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '11'
    };
  },
  methods: {
    change () {
      this.msg = '222';
    }
  }
};
</script>

<style scoped>
.title {
  text-align: center;
}
</style>
