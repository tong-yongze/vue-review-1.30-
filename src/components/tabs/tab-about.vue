<template>
  <div>
    <h3>个人中心</h3>
    <tree-com :list="list" />
  </div>
</template>

<script>
import TreeCom from '@/components/tree';

export default {
  name: 'TabAbout',
  components: {
    TreeCom
  },
  data() {
    return {
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
    }
  },
}
</script>

<style>

</style>