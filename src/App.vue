<template lang="html">
  <div id="app">
    <router-view name="header"></router-view>
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss" src="./main.scss">
</style>
