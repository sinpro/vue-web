;(function(){
    function getXpath (obj) {
        var obj = obj.target||obj.srcElement;
        var arr = [],
        iTemp = 0;
        function getTagIndex(tag) {
            var begin = 0;
            var firstChild = tag.parentNode.firstChild;
            while (firstChild) {
                if (firstChild == tag) return begin == 0 ? "": "[" + (begin +1) + "]";
                if (firstChild.nodeType == 1 && firstChild.tagName == tag.tagName) begin++;
                firstChild = firstChild.nextSibling
            }
            return ""
        }
        while (obj) {
            arr[iTemp++] = obj.nodeName + getTagIndex(obj);
            if (obj.tagName != "HTML") obj = obj.parentNode;
            else break
        }
        console.log(arr.reverse().join('/'))
        var img = new Image();// 创建一个image对象,发送数据,跨域相关
            img.src = encodeURI()  //只能用get方式
        return arr.reverse()
    }
    function addEvent(elm,evType,fn,useCapture){
        if(elm.addEventListener){
            elm.addEventListener(evType,fn,useCapture);
            return true;
        }else if(ele.attachEvent){
            var r = elm.attachEvent('on'+evType,fn);
            return r;
        }else{
            elm['on',evType] = fn;
        }
    }
    if(document&&document['documentElement']){
        addEvent(document,"mousedown",getXpath,false);
    }else{
        setTimeout(arguments.callee,16)
    }
})();