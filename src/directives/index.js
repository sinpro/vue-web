import Vue from 'vue';
import trackHandler from 'common/trackCommon/trackHandler';

// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted(el) {
    // 聚焦元素
    el.focus();
  }
});

// 注册一个全局自定义埋点指令 `v-track`
Vue.directive('track', {
    //钩子函数，只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置
    /*
     *   el:指令所绑定的元素，可以用来直接操作 DOM
     *   binding：一个对象，包含以下 property:
     *   name：指令名，不包括 v- 前缀。
     *   value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
     *   expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
     *   arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。
     *   modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。
     * vnode：Vue 编译生成的虚拟节点
     */
    bind: (el, binding, vnode) => {
      if (binding.value) {
        //这里参数是根据自己业务可以自己定义
        let params = {
          currentUrl:binding.value.currentUrl,
          actionType:binding.value.actionType,
          frontTriggerType:binding.value.triggerType,
          businessCode:binding.value.businessCode,
          behavior:binding.value.behavior,
          service:'xxx',
        }
        //如果是浏览类型，直接保存
        if (binding.value.triggerType == 'browse'){
            //调用后台接口保存数据
            //api.eventTrack.saveEventTrack(params);
            console.log(params,this.$trackHandler,1111)
        } else if (binding.value.triggerType == 'click'){
          //如果是click类型，监听click事件
          el.addEventListener('click', (event) => {
            //调用后台接口保存数据
            console.log(params,trackHandler,2222)
            // api.eventTrack.saveEventTrack(params);
          }, false)
        }
   
      }
    }
})

//注册拖拽移动
Vue.directive('drag', {
  inserted(el, binding, vNode) {
    el.setAttribute('style', 'position: fixed; z-index: 9999');
  },
  bind(el, bindding, vNode) {
    el.setAttribute('draggable', true);
    let left; let top; let width; let
      height;
    el._dragstart = function a1(event) {
      event.stopPropagation();
      left = event.clientX - el.offsetLeft;
      top = event.clientY - el.offsetTop;
      width = el.offsetWidth;
      height = el.offsetHeight;
    };
    el._checkPosition = function a2() { // 防止被拖出边界
      width = el.offsetWidth;
      height = el.offsetHeight;
      left = Math.min(el.offsetLeft, document.body.clientWidth - width);
      left = Math.max(0, left);
      top = Math.min(el.offsetTop, document.body.clientHeight - height);
      top = Math.max(0, top);
      el.style.left = `${left}px`;
      el.style.top = `${top}px`;
      el.style.width = `${width}px`;
      el.style.height = `${height}px`;
    };
    el._dragEnd = function a3(event) {
      event.stopPropagation();
      left = event.clientX - left;
      top = event.clientY - top;
      el.style.left = `${left}px`;
      el.style.top = `${top}px`;
      el.style.width = `${width}px`;
      el.style.height = `${height}px`;
      el._checkPosition();
    };
    el._documentAllowDraop = function a4(event) {
      event.preventDefault();
    };
    document.body.addEventListener('dragover', el._documentAllowDraop);
    el.addEventListener('dragstart', el._dragstart);
    el.addEventListener('dragend', el._dragEnd);
    window.addEventListener('resize', el._checkPosition);
  },
  unbind(el, bindding, vNode) {
    document.body.removeEventListener('dragover', el._documentAllowDraop);
    el.removeEventListener('dragstart', el._dragstart);
    el.removeEventListener('dragend', el._dragEnd);
    window.removeEventListener('resize', el._checkPosition);
    delete el._documentAllowDraop;
    delete el._dragstart;
    delete el._dragEnd;
    delete el._checkPosition;
  }
});