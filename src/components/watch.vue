<template>
  <div>
    <h2>测试watch子组件</h2>
    <h2>abj.age = {{ obj.age }}</h2>
    <div>
      <button @click="count++">修改count值</button>
      <button @click="obj.age++">修改对象</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'watchCom',
  data() {
    return {
      count: 1,
      obj: {
        age: 22,
      },
    };
  },
  watch: {
    // 这样写 进入组件的时候 第一次是不会监听的
    // count: function(newValue,oldValue) {
    //   console.log(newValue,oldValue);
    // }
    count: {
      // 如果watch 写出这种  那么函数的名称一定要是handler
      handler(newValue, oldValue) {
        console.log('watch count的第一次执行：', newValue, oldValue);
      },
      immediate: true,
    },
    // 监听对象  深度监听 需要开启deep
    'obj.age': {
      // 如果watch 写出这种  那么函数的名称一定要是handler
      handler(newValue, oldValue) {
        console.log('watch obj：', newValue, oldValue);
      },
      immediate: true,
      // deep: true  要么就把监听的对象 写成对应属性的值 'obj.age'
    },
  },
};
</script>

<style></style>
