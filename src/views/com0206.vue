<template>
  <div>
    <h3>父组件{{ articleId }} ---- {{count}}----{{settings}}</h3>
    <!-- <h4 v-once>指令v-once的作用{{articleId}}</h4> -->
    <button @click="articleId++">修改父组件数据</button>
     <!-- @Self-Event2="getFromSon" -->
     <!-- @Self-Event2="getFromSon(1,2, $event)" -->
     <!-- v-model="count" 等价于 :count="xx" @input="xx" -->
    <tongxin0206
    :articleId="articleId"
    v-model="count"
    :name1="123"
    :age="'hello'"
    :addr="'上海'"
    :class="{acative: true}"
    :style="{color: 'red'}"
    @Self-Event2="(e) => {
      this.articleId = e
    }"
    />
    <!-- 下面这样写就相当于 :value="settings" @input="settings=$event.target.value" -->
    <v-model1 v-model="settings" />
  </div>
</template>

<script>
import Tongxin0206 from '@/components/tongxin-child.vue';
import VModel1 from '@/components/v-model'
export default {
  name: 'Com0206',
  components: {
    Tongxin0206,
    VModel1
  },
  // 依赖注入
  provide() {
    return {
      sunCom: this.articleId,
    };
  },
  data() {
    return {
      articleId: 123456,
      count: 123,
      settings: 100
    };
  },
  methods: {
    getFromSon(e) {
      console.log('父组件监听到了子组件的事件', e)
      this.articleId = e
    },
  },
};
</script>

<style></style>
