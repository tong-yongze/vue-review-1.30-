import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.config.productionTip = false

Vue.directive('myfocus',{
  // 指令的构造函数 默认接受 4个形参
  inserted(el,binding,vnode,oldVnode) {
    console.log(binding);
    // el.focus()
    el.style.fontSize = '30px'
  }
})

// 直接配置项里面写函数 不写对象 内部的构造函数的形式 默认就是 bind和update钩子函数
Vue.directive('demo', function(el,binding) {
  // el.focus()
  el.style.fontSize = '18px'
  el.style.backgroundColor = '#ccc'
})

// 别人输入 adsd 返回一个大写的A
Vue.filter('upper',function(val){
  console.log(val);
  return val.substr(0,1).toUpperCase()
})

new Vue({
  data: {count: 123},
  router,
  render: h => h(App)
}).$mount('#app')
