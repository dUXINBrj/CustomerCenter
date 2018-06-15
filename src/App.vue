<template>
  <div id="Container">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style scoped lang="scss">
  $background:#ccc;
#Container {
  width: 100%;
  height: 100%;
  background: $background;
}
</style>
