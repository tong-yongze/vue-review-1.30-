<template>
  <div>
    <h5>=====孙组件====</h5>
    <h6>父组件传递进来的值{{ articleId }},{{value}}</h6>
    <button @click="sunUpdateParent">孙组件修改父组件的值</button>
    <!-- <h6>父组件通过provide与inject传递的值{{ sunCom }}</h6>
    <h6>通过attrs传递的两个属性{{name1}} , {{age}},{{addr}}</h6> -->
  </div>
</template>

<script>
export default {
  name: 'TongxinChild0206',
  inheritAttrs: false,
  inject: ['sunCom'],
  props: {
    articleId: {
      // 对articleId 做校验 文章id 必须是 6-16位 否则就报错
      type: Number,
      validator(val) {
        return /^\d{6,16}$/.test(val);
      },
    },
    name1: {
      type: Number
    },
    age: {
      type: String
    },
    addr: {
      type: String
    },
     value: {
      type: Number
    }
  },
  created() {
    console.log('孙组件', this.$attrs)
  },
  methods: {
    sunUpdateParent() {
      // this.articleId++   这样会报错 因为vue 是单项数据流 单向下行绑定 子组件要是直接修改了父组件的内容 就破坏了这种结构 vue不允许 如果一定要修改 可以通过data初始值props值 或者计算属性 来改
      this.$emit('Self-Event',this.articleId +1)
    }
  },
};
</script>

<style></style>
