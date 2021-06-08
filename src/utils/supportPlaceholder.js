const supportIE = {
    install:function(Vue) {
      function renderEl(el, index) {
        var placeholder = el.getAttribute("placeholder") || "请输入";
        var span = document.createElement("span");
        span.className = `ie-placeholder ${index>0? 'input'+index : ''}`;
        span.innerText = placeholder;
        el.parentNode.style.position = "relative";
        el.insertAdjacentElement("afterend", span);
        el.onfocus = function (event) {
            if (event.target.value) {
                span.style.display = "none";
            } else {
              span.style.display = "inline";
            }
        };
        span.onclick = function(event){
          el.focus();
        };
        el.onblur = function (event) {
            if (!event.target.value) {
                span.style.display = "inline";
            } else {
              span.style.display = "none";
            }
        };
        el.onpropertychange = function (event) {
            if (event.propertyName !== 'value') {
                span.style.display = "inline";
            } else {
                span.style.display = "none";
            }
        }
      }
      
      Vue.directive("support", {
        inserted: function (el, binding, vnode) {
          if (("placeholder" in document.createElement("input"))) {
              return;
          }
          if (/^el/.test(el.className)) {
              els = el.querySelectorAll("input");
              for(let index = 0; index < els.length; index++){
                renderEl(els[index], index)
            }
          } else {
            renderEl(el, 0)
          }
        },
        update: function (el) {
            if (el.value) {
                var sibs = el.parentNode.children;
                for (var i = 0; i < sibs.length; i++) {
                    if (sibs[i].className === 'ie-placeholder') {
                        sibs[i].style.display = "none";
                    }
                }
            } else {
              var sibs = el.parentNode.children;
                for (var i = 0; i < sibs.length; i++) {
                    if (sibs[i].className === 'ie-placeholder') {
                        sibs[i].style.display = "inline";
                    }
                }
            }
        },
        unbind: function (el) {
            el.onfocus = el.onblur = el.oninput = null;
        }
      })
    }
  };
   
  export default supportIE