<template>
  <div>
    <!-- <button v-on:click="testFn">点击事件</button> -->
    <!-- 如果给事件加了括号  传递了参数 那么原始的事件类型参数就没有了 -->
    <!-- 如果我们想传递一个普通参数 又想传递一个事件类型 $event  -->
    <button v-on:click="testFn(11,$event)">点击事件</button>
    <img :src="src" />
    <img src="@/assets/logo.png" />
    <div id="main"></div>
  </div>
</template>

<script>
export default {
  // Es6模块规范 import export 编译时就可以确定包之间的依赖关系 所以我们es6规范就可以使用 tree shaking用
  // CommonJS 规范 require module.exports 运行时才能确立 导出的一个拷贝
  name: 'ArticleInfo',
  data() {
    return {
      // src: 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
      src: require('@/assets/logo.png')
    }
  },
  methods: {
    testFn(e,p) {
      console.log(e,this,p);
    }
  },
}
</script>

<style>

</style>