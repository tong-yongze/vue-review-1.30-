<template>
  <div>
    <h5>子组件{{ articleId }}--{{value}}</h5>
    <!-- $attrs 会把父组件传递进来的 非 props上面的属性 放在对象里面 -->
    <!-- v-model="value"
    @input="() => {value}""getValueFromSon" -->
    <tongxin-child0206
    :value = "value"
    @input="getValueFromSon"
    :articleId="articleId"
    v-bind="$attrs"
    @Self-Event="getFromSun"
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
        this.$emit('input', e)
      },
      getValueFromSon(e) {
        // v-model 这个指令 默认有一个赋值的操作 如果有父子传值 中间的子组件不能写 v-model 因为写了会调用内部的赋值操作  所以只能使用v-model 拆开的写法 通过手动触发input事件 让外面的父组件去更新子组件不能更新
      // this.value  = e 这就是子组件更改了父组件传递进来的值 破坏了单向数据流
      this.$emit('input', e)
    },

  },
};
</script>

<style></style>
