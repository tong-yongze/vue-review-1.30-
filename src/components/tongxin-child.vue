<template>
  <div>
    <h5>子组件{{ articleId }}</h5>
    <tongxin-child0206 :articleId="articleId" />
  </div>
</template>

<script>
import TongxinChild0206 from '@/components/tongxin-child-child.vue';

export default {
  name: 'Tongxin0206',
  components: {
    TongxinChild0206,
  },
  props: {
    articleId: {
      type: Number,
      default: 1,
    },
  },
  created() {
    console.log(this.articleId);
  },
};
</script>

<style></style>
