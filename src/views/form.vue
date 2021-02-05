<template>
  <div>
    <!-- <div>
      <span>性别: {{ gender }}</span>
      <input type="radio" id="nan" value="男" v-model="gender" />
      <label for="nan">男</label>
      <input type="radio" value="女" v-model="gender"/>
      <label for="nv">女</label>
    </div> -->

    <div>
      <!-- <h2>============</h2> -->
       <!-- <input type="checkbox" id="test" v-model="checked" /> -->
      <!-- <input type="checkbox" id="test" v-model="checked" true-value="nan" false-value="nv" />
      <label for="test">{{ checked }}</label> -->
    </div>
    <!-- <div>
      <input type="checkbox" id="a1" value="lq" v-model="checkedArr" />
      <label for="a1">篮球</label>
      <input type="checkbox" id="a2" value="tq" v-model="checkedArr" />
      <label for="a2">踢球</label>
      <input type="checkbox" id="a3" value="tt" v-model="checkedArr" />
      <label for="a3">台球</label>
      <div>checkedArr: {{checkedArr}}</div>
    </div> -->
    <!-- <div>
      <h3>=======指令的使用</h3>
      <input type="text" v-model="myInput" v-myfocus:foo.a.b="myInput" />
      <input type="text" v-demo v-myform />
    </div> -->
    <!-- <div>======计算属性和method的区别</div>
    <button @click="str += 'a'">修改数据</button>
    <h3>{{str.split('').reverse().join('')}}</h3> -->
    <!-- <h3>{{meStr()}}</h3>
    <h3>{{meStr()}}</h3>
    <h3>{{meStrCom}}</h3>
    <h3>{{meStrCom}}</h3> -->
    <!-- <h2>======计算属性和watch的区别</h2> -->
    <!-- 当一个数据的变化依赖于多个数据的时候 据computed -->
    <!-- 如果数据的响应设计到异步的操作 推荐使用watch  -->
    <!-- <watch-com /> -->
    <!-- <filter-com /> -->
    <!-- <button @click="count++">父组件更新 {{count}}</button> -->
    <!-- <sync-com :count = 'count' @sedCountEvent="getFromChild"/> -->
    <!-- 有一个修饰符 专门做属性绑定 和 事件绑定的   sync  -->
    <!-- sync 特点是 属性的绑定 count 那么对应事件就要写 update: count -->
    <!-- :count 是子组件的值  后面count 是当前父组件定义的值 -->
    <!-- <sync-com :count.sync="count" /> -->
    <reactive-com />
  </div>
</template>

<script>
import watchCom from '@/components/watch.vue'
import FilterCom from '@/components/filter.vue'
import SyncCom from '@/components/sync.vue'
import ReactiveCom from '@/components/reactive.vue'

export default {
  components: {
    watchCom,
    FilterCom,
    SyncCom,
    ReactiveCom
  },
  data() {
    return {
      count: 10,
      gender: '男',
      checked: '',
      checkedArr: [],
      myInput: '',
      str: 'hello world'
    };
  },
   methods: {
     meStr() {
       console.log('方法执行了几次');
       return this.str.split('').reverse().join('')
     },
     getFromChild(p) {
       this.count = p
     }
  },
  computed: {
    meStrCom() {
       console.log('计算属性执行了几次');
       return this.str.split('').reverse().join('')
     }
  },
  directives: {
    myform: {
      inserted(el,binding) {
        console.log('吃啥');
      }
    }
  },

};
</script>

<style></style>
