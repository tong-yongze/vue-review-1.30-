<template>
  <div>
    <h3>=====测试 v-model =====</h3>
    <h4>父向子传递的值: {{ value }}</h4>
    <button @click="updateSetting">子组件更改父组件的内容</button>
  </div>
</template>

<script>
export default {
  // v-model 默认属性是value 默认事件名是input
  model: {
    prop: 'value',
    event: 'update'
  },
  name: 'VModel',
  props: ['value'],
  methods: {
    updateSetting() {
      // 事件名只能是input
      // this.$emit('input', this.value + 1);
      this.$emit('update', this.value + 1);
    },
  },
};
</script>

<style></style>
