<template>
  <div>
    <h3>插槽的演示</h3>
    <slot-com>
      <h4>组件标签内容</h4>
      <h5 slot="foot">我是具名插槽的内容</h5>
      <template slot="foot">
          <h5 >我也是具名插槽的内容，换一种写法</h5>
      </template>
      <!-- 涉及到 template 三种写法 slot="xxx" #header="xxx"  v-slot:default/top="xxxx"-->
      <!-- 父组件的内容 可以访问子组件内部的变量 -->
      <!-- v-slot:default 便是外面这个插槽内容 会自动添加到默认插槽里面去 -->
      <template v-slot:top="slotProps">
        <h6>作用域插槽：{{slotProps.count}}</h6>
      </template>
      <!-- <template #header="abc">
          <h5>插槽的第三种写法--{{abc}}</h5>
      </template> -->
      <!-- 下面是旧的作用域插槽的写法 必须写slot="xxx" 如果是默认插槽 可以写default 也可以不写  后面的slot-scope 就是接收子组件传递给父组件的值  参数可以随便写 一般是slotProps -->
      <template slot="header" slot-scope="abc">
        <h5>插槽的第三种写法--{{abc}}</h5>
      </template>
    </slot-com>
  </div>
</template>

<script>
import SlotCom from '@/components/slot.vue'
export default {
name: 'Slot0206',
 components: {
   SlotCom
  }
}
</script>

<style>

</style>