<template>
  <div class="home">
  <!-- v-once 对于那些页面上只会绑定一次的数据 告诉vue 不需要监听 不需要双向数据绑定 不对它进行数据劫持（性能优化）  -->
    <!-- <h1 v-once>{{msg}}</h1> -->
    <h1 ref="msgH1">{{msg}}</h1>
    <button @click="updateMsg">修改数据</button>
    <!-- 破坏了组件之间数据得一些影响  不利于数据的查找 -->
    <!-- <h2>{{$root.count}}</h2> -->
    <input type="text" ref="myInput">
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  data(){
    return {
      msg: 1
    }
  },
  mounted() {
  // console.log(this.$refs.msgH1);
  this.$refs.myInput.focus()
  },

  created() {
  // console.log(this.$parent)
  // console.log(this.$root);
  // 这里的生理周期 访问不到dom  只能访问到data和methods方法
  // console.log(this.$refs.msgH1);
  },
  methods: {
    updateMsg(){
      // 一旦修改数据 就会触发数据的 通知 调用wather 里面的run 方法更新组件
      // 底层有一个 发布者订阅模式
      // dom 更新是异步的 每次更新一个数据 会有一个缓存队列的东西 如果一个方法里卖弄 更新数据了100次 那么dom 更新也只会有一次 如果这个时候要方法dom元素 应该开启一个延时操作 就是让队列的任务走完 再操作dom  vue提供了 $nextTick 或 setTimeout
      this.msg++
      // this.$nextTick(()=> {
      //   console.log(this.msg,this.$refs.msgH1.innerText);
      // })
      // requsetAnimaer
      setTimeout(() => {
        console.log(this.msg,this.$refs.msgH1.innerText);
      });
    }
  },
};
</script>
