<template>
  <div>
    <h3>过滤器</h3>
    <!-- <h4>{{str | upper }}</h4> -->
    <h4 v-for="item in arr" :key = 'item'>{{item | upper | modify('$1')}}</h4>
  </div>
</template>

<script>
// 过滤器分为 全局 和局部的
export default {
  name: 'FilterCom',
  data() {
    return {
    arr: ['dasd','tfrt','streter','123','我是']
    }
  },
  filters: {
    modify(value, param) {
      return value + ': '+  param + ''
    }
  }
}
</script>

<style>

</style>