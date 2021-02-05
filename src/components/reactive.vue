<template>
  <div>
   <h3>响应式原理 {{count.value}}</h3>
   <h4>新增的属性age: {{count.age}}</h4>
   <div>
     <span v-for="item in items" :key="item">{{item}}--</span>
   </div>
   <button @click="updateObj">修改对象</button>
   <button @click="updateArr">修改数组</button>
  </div>
</template>

<script>
let o = {name: 'zs'}
let o1 = {}
let age;
Object.defineProperty(o1, 'age' , {
  enumerable: true,
  configurable: true,
  get(){
    return age
  },
  set(val){
    age = val
  }
})
export default {
  name: 'ReactiveCom',
  data() {
    return {
      count: {
        value: 11
      },
      items: ['aaa','bv','cc']
    }
  },
  created() {
    console.log('响应式对象', this.count)
  },
  methods: {
    updateObj() {
      // object.definedProperty  有缺陷
      // 对象上面属性的添加和删除 再vue 里面后来加入是加不进去的 不会把数据进行响应式处理
      // this.count.age = 123
      // 改进的版本 就是使用 $set 或者 Vue.set  将我们需要修改的对象通过这个函数进行修改
      this.$set(this.count,'age', '测试')
      console.log(this.count);
    },
    updateArr() {
      // 在数组里面 对项的修改 不能通过索引号直接修改 也要通过 $set 或 vue.set
      // this.items[0] = '通过索引号修改'
      // this.$set(this.items,0, '通过$set修改')
      // this.items.length = 2  直接改长度 也不能响应式
      this.items.splice(1,1)
      this.items.push('A','B','C')
      console.log(this.items);
    }
  },
};
</script>

<style></style>
