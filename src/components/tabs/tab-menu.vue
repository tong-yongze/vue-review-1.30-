<template>
  <div>
    <h3>菜单-- {{str}}</h3>
    <input type="text" v-model="str">
  </div>
</template>

<script>
export default {
  name: 'TabMenu',
  data() {
    return {
      str: 'a'
    }
  },
  activated() {
    console.log('被缓存组件的钩子函数')
  },
  deactivated() {
    console.log('缓存组件被销毁的时候的钩子函数')
  },
  created() {
    console.log('菜单组件创建了')
  },
  destroyed() {
    console.log('菜单销毁了')
  },
}
</script>

<style>

</style>