<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" exact>Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/article">Article</router-link> |
      <router-link to="/classandstyle">样式</router-link> |
      <router-link to="/form">表单</router-link> |
      <router-link to="/com0206">测试组件</router-link> |
      <router-link to="/slot0206">测试插槽</router-link> |
      <router-link to="/dynCom0209">动态组件</router-link>

    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'AppCom',
  data() {
    return {
      myApp: '测试'
    }
  },
  watch: {
    $route:function(to,form) {
      // console.log('路由变化',to,form);
    }
  }
}
</script>

<style>
 a.router-link-active {
   color: rgb(238, 88, 163);
 }
 html,body {
   margin: 0;
   padding: 0;
 }
</style>
