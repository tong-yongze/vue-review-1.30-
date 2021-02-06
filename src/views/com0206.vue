<template>
  <div>
    <h3>父组件{{ articleId }}</h3>
    <h4 v-once>指令v-once的作用{{articleId}}</h4>
    <button @click="articleId++">修改父组件数据</button>
    <tongxin0206 :articleId="articleId" />
  </div>
</template>

<script>
import Tongxin0206 from '@/components/tongxin-child.vue';

export default {
  name: 'Com0206',
  components: {
    Tongxin0206,
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
    };
  },
};
</script>

<style></style>
