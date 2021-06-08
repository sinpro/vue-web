async function smallize(img) {
    let size = img.size / 1024,
    path = window.URL.createObjectURL(img)
    let res = await canvasDataURL(path, {size})
    return res
}

function canvasDataURL(path, obj) {
    return new Promise((res, rej) => {
        var img = new Image();
        img.src = path;
        img.onload = function() {
            var that = this;
            // 默认按比例压缩
            var w = that.width, h = that.height, scale = 1;

            /*
                * w = obj.width || w; h = obj.height || (w / scale);
                */
            if (w > parseInt(1000) || h > parseInt(1000)) {
                if(w>h){
                    scale = 1000 / w;
                }else{
                    scale = 1000 / h;
                }
            } 
            w = scale*w;
            h = scale*h;
            
            var quality = 0.7; // 默认图片质量为0.7
            // 生成canvas
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            // 创建属性节点
            var anw = document.createAttribute("width");
            anw.nodeValue = w;
            var anh = document.createAttribute("height");
            anh.nodeValue = h;
            canvas.setAttributeNode(anw);
            canvas.setAttributeNode(anh);
            ctx.drawImage(that, 0, 0, w, h);
            // 图像质量
            if (obj.quality && obj.quality <= 1 && obj.quality > 0) {
                quality = obj.quality;
            }
            // 如果照片大小小于400K
            if (obj.size && obj.size <= 400 && obj.size > 0) {
                quality = 0.9;
            }
            // quality值越小，所绘制出的图像越模糊
            var base64 = canvas.toDataURL('image/jpeg', quality);
            // 回调函数返回base64的值
            res(base64);
        };
    })
    
}

export default smallize
