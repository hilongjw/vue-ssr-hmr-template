<style>
html,
body {
  padding: 0;
  margin: 0;
  background: #f9f9f9;
  -webkit-font-smoothing: antialiased;
  font-family: 'Lantinghei SC', 'Open Sans', Arial, 'Hiragino Sans GB', 'Microsoft YaHei', 微软雅黑, STHeiti, 'WenQuanYi Micro Hei', SimSun, sans-serif;
}

.view {
  text-align: center;
  padding-top: 1rem;
}

.content {
  display: inline-block;
  width: 960px;
  min-height: 100vh;
  background-color: #fff;
  padding: 1rem;
}
</style>
<template>
  <div id="app">
    <um-header></um-header>
    <router-view class="view"></router-view>
  </div>
</template>
<script>
import umHeader from './components/Header.vue'
export default {
  components: {
    umHeader
  }
}
</script>
