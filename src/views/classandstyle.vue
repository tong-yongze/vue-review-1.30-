<template>
  <div>
    <button @click="flag = !flag">切换tab栏</button>
    <ul class="tab__ul--main" v-if="flag">
      <li
      v-for="item in filterArr"
      :key="item"

      :class="{active:currActice === item }"
      @click="toggle(item)">{{ item }}</li>
    </ul>

      <ul class="tab__ul--main" v-else>
      <li
      v-for="item in 13"
      :key="item"
      :class="{active:currActice === item }"
      @click="toggle(item)">{{ item }}</li>
    </ul>

    <div class="one" v-if="flag"></div>
    <div class="two" v-show="flag"></div>
  </div>
</template>

<script>
export default {
  name: 'ClassAndStyle',
  data() {
    return {
      arr: [1,2,3,4,5,6,7],
      currActice: 1,
      flag: true
    };
  },
  methods: {
    toggle(param) {
      // console.log(param);
      this.currActice = param
    }
  },
  computed: {
    filterArr(item) {
      return  this.arr.filter(item => item > 3)
    }
  }
};
</script>

<style scoped lang="less">
ul {
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  li {
    color: lightcoral;
    font-size: 18px;
    flex: 1;
    border: 1px solid #ccc;
    text-align: center;
    padding: 5px 10px;
    border-right: none;
    cursor: pointer;
    &:last-child {
      border: 1px solid #ccc;
      border-radius: 0 4px 4px 0;
    }
    &:first-child {
      border-radius: 4px 0 0 4px;
    }
    &:hover {
      background-color: rgba(200, 200, 200, 0.3);
    }
    &.active {
      color: white;
        background-color: rgba(200, 200, 200, 1);
    }
  }
}
.one, .two {
  width: 300px;
  height: 200px;
}
.one {
  background-color: lightcoral;
}
.two {
  background-color: lightgreen;
}
</style>
