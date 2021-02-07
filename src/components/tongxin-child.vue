<template>
  <div>
    <h5>子组件{{ articleId }}--{{value}}</h5>
    <!-- $attrs 会把父组件传递进来的 非 props上面的属性 放在对象里面 -->
    <tongxin-child0206 :articleId="articleId" v-bind="$attrs"
    @Self-Event="getFromSun"
    v-model="value"
    />
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
    value: {
      type: Number
    }
  },
  created() {
    console.log(this.$attrs);
  },
  methods: {
    getFromSun(e) {
    console.log('子组件监听孙组件的事件', e);

      this.$emit('Self-Event2', e)
    }
  },
};
</script>

<style></style>
