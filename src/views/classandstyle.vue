<template>
  <div>
    <ul class="tab__ul--main">
      <li>index1</li>
      <li>index2</li>
      <li>index3</li>
      <li>index4</li>
      <li>index5</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ClassAndStyle',
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
    &:last-child {
       border: 1px solid #ccc;
        border-radius: 0 4px 4px 0;
    }
      &:first-child {
       border-radius: 4px 0 0 4px;
    }
  }
}
</style>
