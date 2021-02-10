<template>
  <div class="tree-ul">
    <ul>
      <li v-for="item in list" :key="item.id">
        <div class="content">
          <!-- 当我们的2d旋转不生效的时候 不要老盯着css去调 记得去改html结构  关注元素的display -->
          <div class="one" :class="{active: item.expend}"  @click="expend(item)" v-if="item.children && item.children.length > 0">
             <i class="iconfont icon-arrow-right-filling"></i>
          </div>
          <div class="two" v-else style="display: inline-block; width: 16px">
          </div>
          <div class="three" @dblclick="dbClikck">{{item.name}}</div>
          <div class="four"  @dblclick="addItem(item)">
            <i class="iconfont icon-add"></i>
          </div>
          <!-- <i class="iconfont xxxx" ></i>  根据需求写 -->
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
    },
    dbClikck() {
      console.log('双击了');
    },
    addItem(item) {
      console.log(item);
      this.$set(this.list, )
      // 数组的添加 在vue里面有数组变异方法  push
      // 我们这里的复杂数据类型的push 只是改的值的引用 没有改别人父组件的地址
      // 所以这里地添加数组元素 不叫破坏单向数据流地规范
      // this.list = [] 这才叫改  赋值了新地址

     if(!item.children) this.$set(item, 'children', []);
     item.children.push({
        id: this.list.length + 1,
        name: '默认值',
        expend: true
      })
    }
  },
}
</script>

<style>
.tree-ul ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin-left: 15px;
}
.tree-ul ul li {
  padding: 3px 0;
}
.content {
  display: flex;
  align-items: center;
}
.content .one {
  transition: all 0.2s;
}
.content .one.active {
  transform: rotate(90deg);
}
.four {
  margin-left: 5px;
}
.four i {
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
}
</style>