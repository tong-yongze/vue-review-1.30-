<template>
  <div class="about">
    <h1>about组件</h1>
    <h2>{{count}}</h2>
    <div>
      <!-- <input type="text" v-model="count"> -->
      <!-- <input type="text" :value="count" @input="update"> -->
      <input type="text" :value="count" @input="count = $event.target.value">
    </div>
    <h2>----组件上使用v-model-----</h2>
    <!-- v-model 就是 value 和input 事件的语法糖 -->
    <child-com  v-model="count"/>
  </div>
</template>

<script>
import ChildCom from '../components/child'

export default {
  name: 'AboutCom',
  components: {
    ChildCom
  },
  data() {
    return {
      count: 1
    }
  },
  methods: {
    update(e){
      this.count = e.target.value
    }
  },
}
</script>