<template>
  <div>
    <h2>演示sync===={{ count }}</h2>
    <button @click="updateCount">子组件更新</button>
  </div>
</template>

<script>
export default {
  name: 'SyncCom',
  props: {
    count: {
      type: [String, Number],
      default: '',
    },
  },
  methods: {
    updateCount() {
      // this.$emit('sedCountEvent', this.count + 1)
      this.$emit('update:count', this.count + 1)
    }
  },
};
</script>

<style></style>
