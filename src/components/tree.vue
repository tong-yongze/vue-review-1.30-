<template>
  <div class="tree-ul">
    <ul>
      <li v-for="item in list" :key="item.id">
        <div>
          <i class="iconfont icon-arrow-right-filling" @click="expend(item)"></i>
          <span>{{item.name}}</span>
        </div>
        <tree-com v-if="item.children && item.children.length > 0 && item.expend" :list="item.children"></tree-com>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TreeCom',
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  created() {
    // 添加对象的属性 一定要 this.$set  Vue.set 才能添加
    console.log(111,this.list);
  },
  methods: {
    expend(item) {
      item.expend = !item.expend
    }
  },
}
</script>

<style>
.tree-ul ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.tree-ul ul li {
  padding-left: 15px;
}
</style>