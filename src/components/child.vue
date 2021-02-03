<template>
  <div>
    <h3>我是子组件</h3>
    <h3>{{ value }}</h3>
    <button @click="childUpdate">子修改父</button>
  </div>
</template>

<script>
export default {
  name: 'childCom',
  props: {
    value: {
      type: [String, Number],
      validator(value) {
        console.log(111, value);
        return /^\d+$/.test(value);
      },
    },
    // msg: {
    //   type: Array
    // }
  },
  methods: {
    childUpdate() {
      // 在子组件中 不能修改父组件的数据 vue 是单向数据流
      this.$emit('input', this.value + 1);
    },
  },
};
</script>
