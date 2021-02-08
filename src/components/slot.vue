<template>
  <div>
    <h3>插槽--就是让父组件插槽可以访问子组件的私有数据</h3>
    <!-- 默认插槽 -->
    <slot></slot>
    <slot name="foot"></slot>
    <!-- 子组件的插槽占位符 必须通过属性绑定 将值传递出去 -->
    <slot name="top" v-bind:count="count"></slot>
  </div>
</template>

<script>
export default {
  name: 'Slot0206',
  components: {

  },
  created() {
     console.log(this.$slots)
     console.log(this.$scopedSlots)
  },
  mounted() {
    console.log(this.slots, this.$scopedSlots)
  },
  data() {
    return {
      count: 100,
      str: 'hello'
    }
  },
}
</script>

<style>

</style>