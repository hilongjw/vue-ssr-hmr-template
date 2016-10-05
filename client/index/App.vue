<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>

<template>
    <div id="app">
        <nav class="nav-box">
            <router-link to="/home">Home</router-link>
            <router-link to="/entry">Entry</router-link>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello Vue!'
    }
  }
}
</script>
