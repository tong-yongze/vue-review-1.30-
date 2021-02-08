<template>
  <div>
    <h3>插槽</h3>
    <!-- 默认插槽 -->
    <slot></slot>
    <slot name="foot"></slot>
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