<template>
  <div>
    <h5>=====孙组件====</h5>
    <h6>父组件传递进来的值{{ articleId }}</h6>
    <h6>父组件通过provide与inject传递的值{{ sunCom }}</h6>
  </div>
</template>

<script>
export default {
  name: 'TongxinChild0206',
  inject: ['sunCom'],
  props: {
    articleId: {
      // 对articleId 做校验 文章id 必须是 6-16位 否则就报错
      type: Number,
      validator(val) {
        return /^\d{6,16}$/.test(val);
      },
    },
  },
};
</script>

<style></style>
