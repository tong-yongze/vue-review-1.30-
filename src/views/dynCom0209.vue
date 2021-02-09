<template>
  <div class="dyn-wrap">
    <h3>动态组件</h3>
    <div class="dyn-tab">
      <div class="dyn-top">
        <ul>
          <li v-for="item in list" :key="item.id" :class="{ active: item.id === currIndex }" @click="toggleTab(item)">{{ item.name }}</li>
        </ul>
      </div>
      <div class="dyn-main">
       <keep-alive>
          <component v-bind:is="currIndexTabComponent"></component>
       </keep-alive>
      </div>
    </div>
    <h3>树形组件</h3>
     <tree-com :list="list" />
  </div>
</template>

<script>
import TabMenu from '@/components/tabs/tab-menu';
import TabMessage from '@/components/tabs/tab-message';
import TabAbout from '@/components/tabs/tab-about';
import TreeCom from '@/components/tree';

export default {
  name: 'DynCom0209',
  // components: {
  //   TabMenu,
  //   TabMessage,
  //   TabAbout
  // },
  components: {
    TreeCom
  },
  created() {
    this.recursion(this.list)
  },
  data() {
    return {
      list: [
        { id: 1, name: '菜单', label: 'Menu' },
        { id: 2, name: '消息', label: 'Message' },
        { id: 3, name: '个人', label: 'About' },
      ],
      currIndex: 1,
      currIndexTabComponent: TabMenu,
       list: [
        {
          id: 1,
          name: '大家电',
          children: [
          {
              id: 11,
          name: '电视',
          children: [
            {
              id: 111,
              name: '小米'
            },
             {
              id: 112,
              name: '海尔'
            }
          ]
          },
              {
              id: 12,
          name: '洗衣机',
          }
          ]
        },
          {
          id: 2,
          name: '数码产品',
          children: [
          {
              id: 21,
          name: '手机',
          },
              {
              id: 22,
          name: '电脑',
          }
          ]
        },
          {
          id: 3,
          name: '家具',
          children: [
          {
              id: 31,
          name: '沙发',
          },
              {
              id: 32,
              name: '衣柜',
          }
          ]
        }
      ]
    };
  },
  methods: {
    toggleTab(item) {
      this.currIndex = item.id;
      // 如果是下面这种形式拼接 得到的是字符串形式的组件标签 那么是一定要注册的
      // this.currIndexTabComponent = 'Tab' + item.label
      // 如果是下面这种形式 是不需要注册的 因为我们 import 导入进来的就是一个组件实例
      switch (item.id) {
        case 1:
          this.currIndexTabComponent = TabMenu;
          break;
        case 2:
          this.currIndexTabComponent = TabMessage;
          break;
        case 3:
          this.currIndexTabComponent = TabAbout;
          break;
        default:
          this.currIndexTabComponent = TabAbout;
      }
    },
    recursion(arr) {
      // 函数递归是自己的函数调用自己 退出条件通过children属性来判断
      arr.forEach(item => {
        // item.expend = false
        this.$set(item,'expend',false)
        if(item.children && item.children.length > 0) {
         return this.recursion(item.children)
        }
      })
    }
  },
};
</script>

<style>
.dyn-wrap {
  margin: 15px;
}
.dyn-tab {
  width: 400px;
  height: 150px;
  border: 1px solid #ccc;
  border-radius: 4px;
  /* 常见的margin padding 的值 是10px  15px */
  /* padding: 15px; */
}
.dyn-top {
  /* padding: 15px; */
  border-bottom: 1px solid #ccc;
}
.dyn-top ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.dyn-top ul li {
  cursor: pointer;
  padding: 8px 15px;
  border-right: 1px solid #ccc;
}
.dyn-top ul li.active {
  color: white;
  background-color: rgba(228, 214, 214, 1);
}
.dyn-top ul li.active:hover {
  color: white;
  background-color: rgba(228, 214, 214, 1);
}
.dyn-top ul li:hover {
  background-color: rgba(228, 214, 214, 0.5);
}
.dyn-main {
  padding: 15px;
}
</style>
