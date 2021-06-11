var PGEdit_IE32_CLASSID="FFFC8CDE-8996-4231-B75C-A756E571965D";
var PGEdit_IE32_CAB="ScrcuSecureInputIE.cab#version=1,0,0,4";
var PGEdit_IE32_EXE="ScrcuSecureInputIE.exe";

var PGEdit_IE64_CLASSID="FFFC8CDE-8996-4231-B75C-A756E571965D";
var PGEdit_IE64_CAB="ScrcuSecureInputX64.cab#version=1,0,0,4";
var PGEdit_IE64_EXE="ScrcuSecureInputX64.exe";
var PGEdit_IE_VERSION="1.0.0.8";

var PGEdit_FF="ScrcuSecureInputFF.exe";
var PGEdit_FF_VERSION="1.0.0.9";

var PGEdit_Linux32="";
var PGEdit_Linux64="";
var PGEdit_Linux_VERSION="";

//Win10Edge / Chrome42+
var PGEdit_Edge="ScrcuSecureInputEdge.exe";
var PGEdit_Edge_Mac="ScrcuSecureInputEdgeMac.pkg";
var PGEdit_Edge_VERSION="1.0.0.3";

var PGEdit_MacOs="ScrcuSecureInput.pkg";
var PGEdit_MacOs_VERSION="1.0.0.6";

var PGEdit_MacOs_Safari="ScrcuSecureInput.pkg";
var PGEdit_MacOs_Safari_VERSION="1.0.0.6";
//Win10Edge / Chrome42+环境下用到的一些变量
var CIJSON = {"interfacetype":0,"data":{"switch":3}};//检查控件是否安装
var ICJSON = {"interfacetype":0,"data":{"switch":2}};//实例化控件窗口
var INCJSON = {"interfacetype":1,"data":{}};//初始化控件参数
var OPJSON = {"interfacetype":0,"data":{"switch":0}};//开启控件保护
var XTJSON = {"interfacetype":0,"data":{"switch":5}};//心跳监测
var CPJSON = {"interfacetype":0,"data":{"switch":1}};//关闭控件保护
var OUTJSON = {"interfacetype":2,"data":{}};//获取值类json串
var CLPJSON = {"interfacetype":0,"data":{"switch":4}};//清空密码
//心跳监听变量、集合、本地服务地址、日志开关、全局检测安装变量
var isInstalled = -1,objVersion = "",interv,urls,logFlag = true,onceInterv={},iterArray=[];
var license = "Y2xjS2FtblQ3ZVcySm04bmVreVdncFRCc0x2Qm9Rd1p3Qk9ma3lYcEVDd0NSOWJjMUR2T2trMWZmM1VFU0JaSmVEL01MV3JkV0R4czVsNjc3eWVsemdLNTVPSWdDT2hrN3EwOVkreHozWnkwSHhQbHBveWFFUHM3a3oyd3RUWjZja3h0cTdLQ0FTa3B4MXhlWmlxa1FMQTFQQlBWdWtHbXhaMmI1VVRHMHI0PXsiaWQiOjAsInR5cGUiOiJ0ZXN0IiwicGxhdGZvcm0iOjQsIm5vdGJlZm9yZSI6IjIwMjEwNTA2Iiwibm90YWZ0ZXIiOiIyMDIxMDgwNiJ9";
var licenseMac = "R3VGR0QrNktSdyt0VDJDallJRi9CaEh4RW9KejRuQWZreUdjWkZBM2c0OE1IdWw2SXJxQVEyZFZMenA4VDdxV0RCZGNjUXJFb1RzcFB0VzJ3UUVBcEtnZXUxTEZ2WjJvcDhkYkM2Z0ZqWE5iTERsUG5UcTVlSldhRHdJNGErbnlXQTE5djNBTXkwUWlJQUx4ZXJDMmE5bDArMFQrMTJlUnhLTjBEVWZVV3p3PXsiaWQiOjAsInR5cGUiOiJ0ZXN0IiwicGxhdGZvcm0iOjgsIm5vdGJlZm9yZSI6IjIwMjEwNTMxIiwibm90YWZ0ZXIiOiIyMDIxMDgzMSJ9";

//同步版ajax
Ajax = function() {  
    function request(opt) {  
        function fn() {  
        }  
        var url = opt.url || "";  
        var async = opt.async !== false, method = opt.method || 'GET', data = opt.data  
                || null, success = opt.success || fn, error = opt.failure  
                || fn;  
        method = method.toUpperCase();  
        if (method == 'GET' && data) {  
            var args = "";  
            if(typeof data == 'string'){  
                //alert("string")  
            args = data;  
            }else if(typeof data == 'object'){  
                //alert("object")  
                var arr = new Array();  
                for(var k in data){  
                    var v = data[k];  
                    arr.push(k + "=" + v);  
                }  
                args = arr.join("&");  
            }  
        url += (url.indexOf('?') == -1 ? '?' : '&') + args;  
            data = null;  
        }  
        var xhr = window.XMLHttpRequest ? new XMLHttpRequest()  
                : new ActiveXObject('Microsoft.XMLHTTP');  
        xhr.onreadystatechange = function() {  
            _onStateChange(xhr, success, error);  
        };  
        xhr.open(method, url, async);  
        if (method == 'POST') {  
            xhr.setRequestHeader('Content-type',  
                    'application/x-www-form-urlencoded;');  
        }  
        xhr.send(data);  
        return xhr;  
    }  
    function _onStateChange(xhr, success, failure) {  
        if (xhr.readyState == 4) {  
            var s = xhr.status;  
            if (s >= 200 && s < 300) {  
                success(xhr);  
            } else {  
                failure(xhr);  
            }  
        } else {  
        }  
    }  
    return {  
        request : request  
    };  
}();
var inFlag = {},datac,RZCIJSON;//控制是否能输入
var PGEdit_Update="1";//非IE控件是否强制升级 1强制升级,0不强制升级

if(navigator.userAgent.indexOf("MSIE")<0){
	   navigator.plugins.refresh();
};
(function(jQuery) {
	jQuery.pge = function (options) {
		this.settings = jQuery.extend(true, {}, jQuery.pge.defaults, options);
		this.init();
	};
	jQuery.extend(jQuery.pge, {
		defaults: {
			pgePath: "./ocx/",
			pgeId: "",
	        PubSM2:0,//0：国密测试公钥、1：国密生产公钥
	        pubRSA:"0",//0：RSA测试公钥、1：RAS生产公钥
			pgeEdittype: 0,
			pgeEreg1: "",
			pgeEreg2: "",
			pgeMaxlength: 12,
			pgeTabindex: 2,
			pgeCert:"",
			pgeRandomNum:"lyvcjtt5r19wtzrwboi3m670vykcuooq",
			pgeClass: "ocx_style",
			pgeInstallClass: "ocx_style",
			passLoginStyle:"passLoginStyle",
			pgeOnkeydown:"",
			pgeFontName:"",
			pgeFontSize:"",
			tabCallback:"",
			pgeBackColor:"",
			pgeRand:"34340246698452964138283934548604",
			pgeBList:"bKGOnDZOJPNz3VfnKA89E/e7LgYJM155Uzikfub7hmdjuMbHXGupmoHQO9hm8RpSmkegIDJte77Ksruc34QD3GlwDS0InOKV89KifXEUX7fl9uOsbBTqRW3c2mHUzbIw6sqlN95r0RkNDCCcWoPhi1awyXtp6gPucko4vT/eRNXMvcYjAu4Jg0TU58AmH4x9sSkAASrOeG/rxJKA+nBrvYdxaz2JuIRmE7cOt1fOjUXKpFtH4vpuXIj8aWjccTDk2fL3XU5v0T4a31gx+1o9IwhIpTkrTCvakif5jYCgxqPW4P55eNMxqVaE3uhZltb/0CAUqVqC3h7gao1i4juog4XETUrXc02Lc8OfvSIc/R6mTyzirODjMKO0NkhWQ1zxmflIO5EOyAES56Qfjhp9au6hRbOFcuzSMeGOOkePnqHdXQ89ZK44dzWmI8IjI83HZmdgO/apGK5Im+LUs31OullTkVEaid8YTshcifYFq3CXQOssx6hmCHiWaKgP+kcpMs8leNZFUEVTIOwYfTJkhQ==",
			pgeForeColor:"",
			AffineX: "",
			AffineY: "",
			pgeUrls:"https://windows10.microdone.cn",
			pgePort:5891,
			pgeWindowID:"password"+new Date().getTime()
		},
		prototype: {
			init: function() {				
			 this.pgeDownText="请点此安装控件";
			    this.osBrowser = this.checkOsBrowser();
			    if(isInstalled == -1) isInstalled = this.checkInstall();
			    this.pgeVersion = this.getVersion();
			},
			/**公共方法**/
			//检测操作系统和浏览器信息
			checkOsBrowser: function() {
				var userosbrowser;
				var regStr_chrome = /chrome\/[\d.]+/gi ;
				var regStr_firefox =  /firefox\/[\d.]+/gi ;
				if((navigator.platform =="Win32") || (navigator.platform =="Windows")){
					if(navigator.userAgent.indexOf("MSIE")>0 || navigator.userAgent.indexOf("msie")>0 || navigator.userAgent.indexOf("Trident")>0 || navigator.userAgent.indexOf("trident")>0){
						if(navigator.userAgent.indexOf("ARM")>0){
							userosbrowser=9; // win8 RAM Touch
							this.pgeditIEExe="";
						}else{
							userosbrowser=1;// windows32ie32
							this.pgeditIEClassid=PGEdit_IE32_CLASSID;
							this.pgeditIECab=PGEdit_IE32_CAB;
							this.pgeditIEExe=PGEdit_IE32_EXE;
						}
					}else if(navigator.userAgent.indexOf("Edge")>0){
						userosbrowser = 10;
						this.pgeditFFExe = PGEdit_Edge;
					}else if(navigator.userAgent.indexOf("Chrome")>0){
						var chromeVersion = navigator.userAgent.match(regStr_chrome).toString();
						chromeVersion = parseInt(chromeVersion.replace(/[^0-9.]/gi,""));
						if(chromeVersion >= 42){
							userosbrowser = 10;
							this.pgeditFFExe = PGEdit_Edge;
						}else{
							userosbrowser=2;
							this.pgeditFFExe = PGEdit_FF;
						}
					}else if(navigator.userAgent.indexOf("Firefox")>0){
						var firefoxVersion = navigator.userAgent.match(regStr_firefox).toString();
						firefoxVersion = parseInt(firefoxVersion.replace(/[^0-9.]/gi,""));
						if(firefoxVersion >= 51){
							userosbrowser = 10;
							this.pgeditFFExe = PGEdit_Edge;
						}else{
							userosbrowser=2;
							this.pgeditFFExe = PGEdit_FF;
						}
					}else{
						userosbrowser=2; // windowsff
						this.pgeditFFExe=PGEdit_FF;
					}
				}else if((navigator.platform=="Win64")){
					if((navigator.userAgent.indexOf("Windows NT 6.2")>0 || navigator.userAgent.indexOf("windows nt 6.2")>0) && navigator.userAgent.indexOf("Firefox") == -1){		
						userosbrowser=1;// windows32ie32
						this.pgeditIEClassid=PGEdit_IE32_CLASSID;
						this.pgeditIECab=PGEdit_IE32_CAB;
						this.pgeditIEExe=PGEdit_IE32_EXE;						
					}else if(navigator.userAgent.indexOf("MSIE")>0 || navigator.userAgent.indexOf("msie")>0 || navigator.userAgent.indexOf("Trident")>0 || navigator.userAgent.indexOf("trident")>0){
						userosbrowser=3;//windows64ie64
						this.pgeditIEClassid=PGEdit_IE64_CLASSID;
						this.pgeditIECab=PGEdit_IE64_CAB;
						this.pgeditIEExe=PGEdit_IE64_EXE;			
					}else if(navigator.userAgent.indexOf("Edge")>0 || navigator.userAgent.indexOf("Firefox")){
						userosbrowser = 10;
						this.pgeditFFExe = PGEdit_Edge;
					}else if(navigator.userAgent.indexOf("Chrome")>0){
						var chromeVersion = navigator.userAgent.match(regStr_chrome).toString();
						chromeVersion = parseInt(chromeVersion.replace(/[^0-9.]/gi,""));
						if(chromeVersion >= 42){
							userosbrowser = 10;
							this.pgeditFFExe = PGEdit_Edge;
						}else{
							userosbrowser = 2;
							this.pgeditFFExe = PGEdit_FF;
						}
					}else{
						userosbrowser=2;
						this.pgeditFFExe=PGEdit_FF;
					}
				}else if(navigator.userAgent.indexOf("Macintosh")>0){
					if(navigator.userAgent.indexOf("Safari")>0 && (navigator.userAgent.indexOf("Version/5.1")>0 || navigator.userAgent.indexOf("Version/5.2")>0 || navigator.userAgent.indexOf("Version/6")>0)){
						userosbrowser=8;//macos Safari 5.1 more
						this.pgeditFFExe=PGEdit_MacOs;
					}else if(navigator.userAgent.indexOf("Firefox")>0 || navigator.userAgent.indexOf("Chrome")>0){
						var chromeVersion = navigator.userAgent.match(regStr_chrome);
						var firefoxVersion = navigator.userAgent.match(regStr_firefox);
						if( chromeVersion != null){
							chromeVersion = chromeVersion.toString();
							chromeVersion = parseInt(chromeVersion.replace(/[^0-9.]/gi,""));
							if(chromeVersion >= 42){
								userosbrowser = 11;
								this.pgeditFFExe = PGEdit_Edge_Mac;
							}else{
								userosbrowser=6;
								this.pgeditFFExe = PGEdit_MacOs;		
							}
						}

						if( firefoxVersion != null){
							firefoxVersion = firefoxVersion.toString();
							firefoxVersion = parseInt(firefoxVersion.replace(/[^0-9.]/gi,""));
							if(firefoxVersion >= 50){
								userosbrowser = 11;
								this.pgeditFFExe = PGEdit_Edge_Mac;
							}else{
								userosbrowser=6;
								this.pgeditFFExe = PGEdit_MacOs;		
							}
						}
					}else if(navigator.userAgent.indexOf("Opera")>=0 && (navigator.userAgent.indexOf("Version/11.6")>0 || navigator.userAgent.indexOf("Version/11.7")>0)){
						userosbrowser=6;//macos
						this.pgeditFFExe=PGEdit_MacOs;						
					}else if(navigator.userAgent.indexOf("Safari")>=0){
						userosbrowser=6;//macos
						this.pgeditFFExe=PGEdit_MacOs;			
					}else{
						userosbrowser=0;//macos
						this.pgeditFFExe="";
					}
				}
				return userosbrowser;
			},
			getpgeHtml: function() {
				if (this.osBrowser==1 || this.osBrowser==3) {
					return '<span id="'+this.settings.pgeId+'_pge" class="'+this.settings.passLoginStyle+'"><OBJECT ID="' + this.settings.pgeId + '" CLASSID="CLSID:' + this.pgeditIEClassid + '" codebase="' 
					        +this.settings.pgePath+ this.pgeditIECab + '" onkeydown="if(13==event.keyCode || 27==event.keyCode)'+this.settings.pgeOnkeydown+';" onfocus="' + this.settings.pgeOnfocus + '" onblur="'+this.settings.pgeOnblur +'" tabindex="'+this.settings.pgeTabindex+'" class="' + this.settings.pgeClass + '">' 
					        + '<param name="edittype" value="'+ this.settings.pgeEdittype + '"><param name="maxlength" value="' + this.settings.pgeMaxlength +'"><param name="input58" value="'+this.settings.pgeOnfocus+'"><param name="input59" value="'+this.settings.pgeOnblur+'">'  
							+ '<param name="input2" value="'+ this.settings.pgeEreg1 + '"><param name="input3" value="'+ this.settings.pgeEreg2 + '"></OBJECT></span>'
							+ '<span id="'+this.settings.pgeId+'_down" class="'+this.settings.pgeInstallClass+'" style="text-align:center;display:none;"><a href="'+this.settings.pgePath+this.pgeditIEExe+'">'+this.pgeDownText+'</a></span>';
				} else if (this.osBrowser==2) {
					var pgeOcx='<embed ID="' + this.settings.pgeId + '"  onfocus="'+this.settings.pgeOnfocus+'"  onblur="'+this.settings.pgeOnblur+'" maxlength="'+this.settings.pgeMaxlength+'" input_2="'+this.settings.pgeEreg1+'" input_3="'+this.settings.pgeEreg2+'" edittype="'+this.settings.pgeEdittype+'" type="application/ScrcuSecureInput" tabindex="'+this.settings.pgeTabindex+'" class="' + this.settings.pgeClass + '" ';
					if(this.settings.pgeOnkeydown!=undefined && this.settings.pgeOnkeydown!="") pgeOcx+=' input_1013="'+this.settings.pgeOnkeydown+'"';
					if(this.settings.tabCallback!=undefined && this.settings.tabCallback!="") pgeOcx+=' input_1009="document.getElementById(\''+this.settings.tabCallback+'\').focus()"';
					if(navigator.userAgent.indexOf("Chrome") > -1 || navigator.userAgent.indexOf("Safari") > -1){
						if(this.settings.pgeOnfocus!=undefined && this.settings.pgeOnfocus!="") pgeOcx+=' input_1010="'+this.settings.pgeOnfocus+'"';
						if(this.settings.pgeOnblur!=undefined && this.settings.pgeOnblur!="") pgeOcx+=' input_1011="'+this.settings.pgeOnblur+'"';
					}	if(this.settings.pgeFontName!=undefined && this.settings.pgeFontName!="") pgeOcx+=' FontName="'+this.settings.pgeFontName+'"';
					if(this.settings.pgeFontSize!=undefined && this.settings.pgeFontSize!="") pgeOcx+=' FontSize='+Number(this.settings.pgeFontSize)+'';					
					pgeOcx+=' >';
					return pgeOcx;
				} else if (this.osBrowser==6) {
					return '<embed ID="' + this.settings.pgeId + '"  losefocuscallback="'+this.settings.pgeOnblur+'" havefocuscallback="'+this.settings.pgeOnfocus+'" input2="'+ this.settings.pgeEreg1 + '" input3="'+ this.settings.pgeEreg2 + '" input4="'+Number(this.settings.pgeMaxlength)+'" input0="'+Number(this.settings.pgeEdittype)+'" type="application/ScrcuSecureInput" version="'+PGEdit_MacOs_VERSION+'" tabindex="'+this.settings.pgeTabindex+'" class="' + this.settings.pgeClass + '">';
				} else if (this.osBrowser==8) {
					return '<embed ID="' + this.settings.pgeId + '"  losefocuscallback="'+this.settings.pgeOnblur+'" havefocuscallback="'+this.settings.pgeOnfocus+'" input2="'+ this.settings.pgeEreg1 + '" input3="'+ this.settings.pgeEreg2 + '" input4="'+Number(this.settings.pgeMaxlength)+'" input0="'+Number(this.settings.pgeEdittype)+'" type="application/ScrcuSecureInput" version="'+PGEdit_MacOs_Safari_VERSION+'" tabindex="'+this.settings.pgeTabindex+'" class="' + this.settings.pgeClass + '">';
				}  else if (this.osBrowser == 10 || this.osBrowser == 11){
					var obj =this;
					this.checkInstall(1,function(obj){
						if(!isInstalled || isInstalled == -1) isInstalled = true;
						var id = obj.settings.pgeId;
						var winId = obj.settings.pgeWindowID;
						if((obj.getConvertVersion(objVersion)<obj.getConvertVersion(PGEdit_Edge_VERSION))&&PGEdit_Update=="1"){
							var winPath = obj.settings.pgePath+obj.pgeditFFExe;
							
							$("#"+id+"_down").html('<div id="'+id+'_down" class="'+obj.settings.pgeInstallClass+'" style="text-align:center;line-height:25px;border:0px"><a href="'+winPath+'">'+"请点此升级控件"+'</a></div>');
					
						}else{
							var fos = "";
							if(obj.osBrowser == 10){
								 fos = "this.type='password';";
							}
							$("#"+id+"_down").parent().html('<input type="text" onfocus="'+fos+'pgeCtrl.openProt(\''+winId+'\',this.id);pgeCtrl.setCX(this);'+obj.settings.pgeOnfocus+'" onkeydown="pgeCtrl.setSX(event,\''+obj.settings.pgeOnkeydown+'\',this);" onclick = "pgeCtrl.setCX(this)" onblur = "pgeCtrl.closeProt(\''+winId+'\',this.id);'+obj.settings.pgeOnblur+'" id = "'+id+'" style="ime-mode:disabled" tabindex="2" class="' + obj.settings.pgeClass + '"/>');
							var o = obj.pwdGetEById(id);
							if(obj.osBrowser == 10 || obj.osBrowser == 11){
								o = obj.pwdGetEById(id)
								if(o != null){
									if(obj.osBrowser == 11){
										o.onkeypress = function(e){
											var chrTyped, chrCode=0, evt = e ? e : event,chrCode = evt.which;
											var x = String.fromCharCode(chrCode);
											var maxlength = parseInt(obj.settings.pgeMaxlength);
											if(chrCode>=32 && chrCode<=126){
												if(this.value.length > (maxlength-1)) return false;
												var reg1 = obj.settings.pgeEreg1.replace("*","");
												reg1 = new RegExp(reg1);
												if(reg1.test(x)) this.value+='*';
												return false;
											}else return true;
										}
										o.onkeydown = function(e){
											var chrTyped, chrCode=0, evt=e?e:event;
											chrCode = evt.which;
											var x = String.fromCharCode(chrCode);
											if(chrCode == 13){
												this.blur();
												eval("("+obj.settings.pgeOnkeydown+")");
											}else if(chrCode>=37 && chrCode<=40) return false;
											 else return true;
										}
									}
									if(obj.osBrowser == 10){
										o.onkeypress = function(){ return inFlag[winId].flag; }
									}
								}
								obj.instControl(winId,obj);
							}
						}
					});
					return '<div id="'+this.settings.pgeId+'_down" class="'+this.settings.pgeInstallClass+'" style="text-align:center;line-height:25px;"><a href="'+this.settings.pgePath+this.pgeditFFExe+'">'+this.pgeDownText+'</a></div>';
				}else {
					return '<div id="'+this.settings.pgeId+'_down" class="'+this.settings.pgeInstallClass+'" style="text-align:center;">暂不支持此浏览器</div>';
				}				
			},
			getDownHtml: function() {
				if (this.osBrowser==1 || this.osBrowser==3) {
					return '<span id="'+this.settings.pgeId+'_down" class="'+this.settings.pgeInstallClass+'" style="text-align:center;"><a href="'+this.settings.pgePath+this.pgeditIEExe+'">'+this.pgeDownText+'</a></span>';
				} else if (this.osBrowser==2 || this.osBrowser==6 || this.osBrowser==8|| this.osBrowser == 10 || this.osBrowser == 11) {
					return '<span id="'+this.settings.pgeId+'_down" class="'+this.settings.pgeInstallClass+'" style="text-align:center;"><a href="'+this.settings.pgePath+this.pgeditFFExe+'">'+this.pgeDownText+'</a></span>';
				} else {
					return '<div id="'+this.settings.pgeId+'_down" class="'+this.settings.pgeInstallClass+'" style="text-align:center;">暂不支持此浏览器</div>';
				}				
			},
			load: function() {		
				if (this.osBrowser==10 || this.osBrowser==11) {return this.getpgeHtml();}
				if (!this.checkInstall()) {
					return this.getDownHtml();
				}else{
				   if(this.osBrowser==1||this.osBrowser==3){
						if(this.getIEConvertVersion(this.pgeVersion)<this.getConvertVersion(PGEdit_IE_VERSION) && PGEdit_Update==1){
							this.setDownText();
							return this.getDownHtml();	
						}
				   }else if(this.osBrowser==2){  
						if(this.getConvertVersion(this.pgeVersion)<this.getConvertVersion(PGEdit_FF_VERSION) && PGEdit_Update==1){
							this.setDownText();
							return this.getDownHtml();	
						}
					} else if (this.osBrowser==6) {
						if(this.getConvertVersion(this.pgeVersion)<this.getConvertVersion(PGEdit_MacOs_VERSION) && PGEdit_Update==1){
							this.setDownText();
							return this.getDownHtml();	
						}
					}else if (this.osBrowser==8) {
						if(this.getConvertVersion(this.pgeVersion)<this.getConvertVersion(PGEdit_MacOs_Safari_VERSION) && PGEdit_Update==1){
							this.setDownText();
							return this.getDownHtml();	
						}
					}					
					return this.getpgeHtml();
				}
			},
			generate: function() {
				if (this.osBrowser==10 || this.osBrowser==11) {return document.write(this.getpgeHtml());}
				   if(this.osBrowser==1||this.osBrowser==3){
						if(this.isInstalled==false){
						   return document.write(this.getpgeHtml());	 
					   }else if(this.getIEConvertVersion(this.pgeVersion)<this.getConvertVersion(PGEdit_IE_VERSION) && PGEdit_Update==1){
							this.setDownText();
							return document.write(this.getDownHtml());	
						}
				   }else if(this.osBrowser==2){
					   if(this.isInstalled==false){
						   return document.write(this.getDownHtml());	 
					   }else if(this.getConvertVersion(this.pgeVersion)<this.getConvertVersion(PGEdit_FF_VERSION) && PGEdit_Update==1){
							this.setDownText();
							return document.write(this.getDownHtml());	
						}
					} else if (this.osBrowser==6) {
						if(this.isInstalled==false){
							return document.write(this.getDownHtml());	
						}else if(this.getConvertVersion(this.pgeVersion)<this.getConvertVersion(PGEdit_MacOs_VERSION) && PGEdit_Update==1){
							this.setDownText();
							return document.write(this.getDownHtml());	
						}
					}else if (this.osBrowser==8) {
						if(this.isInstalled==false){
							return document.write(this.getDownHtml());	
						}else if(this.getConvertVersion(this.pgeVersion)<this.getConvertVersion(PGEdit_MacOs_Safari_VERSION) && PGEdit_Update==1){
							this.setDownText();
							return document.write(this.getDownHtml());
						}
					}
					return document.write(this.getpgeHtml());				
			},
			pwdclear: function() {
				if (isInstalled) {
					try{
		                if(this.osBrowser == 10 || this.osBrowser == 11){
							var id = this.settings.pgeWindowID,inputID = this.settings.pgeId;
							$("#"+inputID).val("");
							CLPJSON.id = id,datac = this.getEnStr(this.settings.pgeRZRandNum,CLPJSON);
							RZCIJSON = {"rankey":this.settings.pgeRZRandNum,"datab":this.settings.pgeRZDataB,"datac":datac};
							this.pwdGetData(RZCIJSON);
		                }else{
							var control = this.pwdGetEById(this.settings.pgeId);
							control.ClearSeCtrl();
		                }
	                }catch(err){}
				}				
			},
			pwdSetSk: function(s) {
				if (isInstalled) {
					try {
						var control = document.getElementById(this.settings.pgeId);
						if (this.osBrowser==1 || this.osBrowser==3 || this.osBrowser==6 || this.osBrowser==8) {
							control.input1=s;
							control.input10=s;
						} else if (this.osBrowser==2 || this.osBrowser==4 || this.osBrowser==5) {
							control.input(1,s);
							this.settings.pgeRandomNum=s;
						}else if (this.osBrowser == 10 || this.osBrowser == 11){
							var id = this.settings.pgeWindowID;
							INCJSON = {"interfacetype" : 1,"data" : {}};
							INCJSON.id = id , INCJSON.data.aeskey = s;
							datac = this.getEnStr(this.settings.pgeRZRandNum,INCJSON);
							RZCIJSON = {"rankey":this.settings.pgeRZRandNum,"datab":this.settings.pgeRZDataB,"datac":datac};
							this.pwdGetData(RZCIJSON);
						}					
					} catch (err) {
						console.log(err);
					}
				}				
			},			
		
		

			pwdResultHash: function() {
				var code = '';
				if (!isInstalled) {
					code = '';
				}
				else{	
					try {
						var control = document.getElementById(this.settings.pgeId);
						if (this.osBrowser==1 || this.osBrowser==3) {
							code = control.output;
						} else if (this.osBrowser==2 || this.osBrowser==4 || this.osBrowser==5) {
							code = control.output(7);
						}else if (this.osBrowser==6 || this.osBrowser==8) {
							//code = control.get_output1();
						}else if (this.osBrowser == 10 || this.osBrowser == 11){
							OUTJSON.id = this.settings.pgeWindowID,OUTJSON.data.datatype = 7,OUTJSON.data.encrypttype = 0;
							datac = this.getEnStr(this.settings.pgeRZRandNum,OUTJSON);
							RZCIJSON = {"rankey":this.settings.pgeRZRandNum,"datab":this.settings.pgeRZDataB,"datac":datac};
							code = this.pwdGetData(RZCIJSON);
						}						
					} catch (err) {
						code = '';
					}
				}
				return code;
			},
			pwdResult: function() {
				var code = '';
				if (!isInstalled) {
					code = '';
				}else{	
					try {
						var control = document.getElementById(this.settings.pgeId);
						if (this.osBrowser==1 || this.osBrowser==3) {
							code = control.output1;
						} else if (this.osBrowser==2 || this.osBrowser==4 || this.osBrowser==5) {
							code = control.output(7);
						}else if (this.osBrowser==6 || this.osBrowser==8) {
							code = control.get_output1();
						}else if (this.osBrowser == 10 || this.osBrowser == 11){
							OUTJSON.id = this.settings.pgeWindowID,OUTJSON.data.datatype = 7,OUTJSON.data.encrypttype = 0;
							datac = this.getEnStr(this.settings.pgeRZRandNum,OUTJSON);
							RZCIJSON = {"rankey":this.settings.pgeRZRandNum,"datab":this.settings.pgeRZDataB,"datac":datac};
							code = this.pwdGetData(RZCIJSON);
						}						
					} catch (err) {
						code = '';
					}
				}
				return code;
			},
			pwdResult36: function() {
				var code = '';
				if (!isInstalled) {
					code = '';
				}
				else{	
					try {
						var control = document.getElementById(this.settings.pgeId);
						if (this.osBrowser==1 || this.osBrowser==3) {
							control.input9=this.settings.pgeCert;
							code = control.output36;
						} else if (this.osBrowser==2 || this.osBrowser==4 || this.osBrowser==5) {
							control.input(4,this.settings.pgeCert);
							code = control.output(903);
						}else if (this.osBrowser==6 || this.osBrowser==8) {
							control.input11=this.settings.pgeCert;
							code = control.get_output14();
						}else if (this.osBrowser == 10 || this.osBrowser == 11){
							OUTJSON.id = this.settings.pgeWindowID,OUTJSON.data.datatype = 903,OUTJSON.data.encrypttype = 0;
							datac = this.getEnStr(this.settings.pgeRZRandNum,OUTJSON);
							RZCIJSON = {"rankey":this.settings.pgeRZRandNum,"datab":this.settings.pgeRZDataB,"datac":datac};
							code = this.pwdGetData(RZCIJSON);
						}						
					} catch (err) {
						code = '';
					}
				}
				return code;
			},
			pwdResult28wt: function() {
				var code = '';
				if (!isInstalled) {
					code = '';
				}
				else{	
					try {
						var control = document.getElementById(this.settings.pgeId);
						if (this.osBrowser==1 || this.osBrowser==3) {
							control.input9=this.settings.pubRSA;
							code = control.output31;
						} else if (this.osBrowser==2 || this.osBrowser==4 || this.osBrowser==5) {
							control.input(902,this.settings.pubRSA);
							control.input(901,this.settings.pgeRandomNum);
							code = control.output(900);
						}else if (this.osBrowser==6 || this.osBrowser==8) {
							control.input17=this.settings.pubRSA;
							code = control.get_output21();
						}	else if (this.osBrowser == 10 || this.osBrowser == 11){
							INCJSON.id=this.settings.pgeWindowID;
							INCJSON.data.oem_901=this.settings.pgeRandomNum;
							INCJSON.data.oem_902=this.settings.pubRSA;
							datac = this.getEnStr(this.settings.pgeRZRandNum,INCJSON);
						  var RZCIJSON1 = {"rankey":this.settings.pgeRZRandNum,"datab":this.settings.pgeRZDataB,"datac":datac};
							this.pwdGetData(RZCIJSON1);
							OUTJSON.id = this.settings.pgeWindowID,OUTJSON.data.datatype = 900,OUTJSON.data.encrypttype = 0;
							datac = this.getEnStr(this.settings.pgeRZRandNum,OUTJSON);
							RZCIJSON = {"rankey":this.settings.pgeRZRandNum,"datab":this.settings.pgeRZDataB,"datac":datac};
							code = this.pwdGetData(RZCIJSON);
						}					
					} catch (err) {
						code = '';
					}
				}
				return code;
			},	
			pwdResult28: function(n) {
				var code = '';
				if (!isInstalled) {
					code = '';
				}
				else{	
					try {
						var control = document.getElementById(this.settings.pgeId);
						if (this.osBrowser==1 || this.osBrowser==3) {
							control.input9=this.settings.pgeCert;
							code = control.output28;
						} else if (this.osBrowser==2 || this.osBrowser==4 || this.osBrowser==5) {
							control.input(900,this.settings.pgeCert);
							control.input(901,this.settings.pgeRandomNum);
							code = control.output(900);
		
						}else if (this.osBrowser==6 || this.osBrowser==8) {
							control.input11=this.settings.pgeCert;
							code = control.get_output14();
						}else if (this.osBrowser == 10 || this.osBrowser == 11){
							OUTJSON.id = this.settings.pgeWindowID,OUTJSON.data.datatype = 900,OUTJSON.data.encrypttype = 0;
							datac = this.getEnStr(this.settings.pgeRZRandNum,OUTJSON);
							RZCIJSON = {"rankey":this.settings.pgeRZRandNum,"datab":this.settings.pgeRZDataB,"datac":datac};
							code = this.pwdGetData(RZCIJSON);
						}						
					} catch (err) {
						code = '';
					}
				}
				return code;
			},	
			pwdResult29: function() {
				var code = '';
				if (!isInstalled) {
					code = '';
				}
				else{	
					try {
						var control = document.getElementById(this.settings.pgeId);
						if (this.osBrowser==1 || this.osBrowser==3) {
							control.input9=this.settings.pgeCert;;
							control.input11="0000000000000000";
							code = control.output29;
						} else if (this.osBrowser==2 || this.osBrowser==4 || this.osBrowser==5) {
							//alert(this.settings.pgeCert);
							//alert(this.settings.pgeRandomNum);
							control.input(902,this.settings.pgeCert);
							control.input(903,this.settings.pgeRandomNum);
							//code = (903,"608757443110290355");
							control.input(904,"0000000000000000");
							code = control.output(901);
						}else if (this.osBrowser==6 || this.osBrowser==8) {
							control.input11=this.settings.pgeCert;
							control.input14=this.settings.pgeCert;
							code = control.get_output14();
						}	else if (this.osBrowser == 10 || this.osBrowser == 11){
							OUTJSON.id = this.settings.pgeWindowID,OUTJSON.data.datatype = 904,OUTJSON.data.encrypttype = 0;
							datac = this.getEnStr(this.settings.pgeRZRandNum,OUTJSON);
							RZCIJSON = {"rankey":this.settings.pgeRZRandNum,"datab":this.settings.pgeRZDataB,"datac":datac};
							code = this.pwdGetData(RZCIJSON);
						}					
					} catch (err) {
						code = '';
					}
				}
				return code;
			},	
			pwdResult30: function(RevActNo) {
				var code = '';
				if (!isInstalled) {
					code = '';
				}
				else{	
					try {
						var control = document.getElementById(this.settings.pgeId);
						if (this.osBrowser==1 || this.osBrowser==3) {
							control.input9=this.settings.pgeCert;;
							control.input11=RevActNo;
							code = control.output48;
						} else if (this.osBrowser==2 || this.osBrowser==4 || this.osBrowser==5) {
							control.input(900,this.settings.pgeCert);
							control.input(904,RevActNo);
							code = control.output(902);
						}else if (this.osBrowser==6 || this.osBrowser==8) {
							control.input11=this.settings.pgeCert;
							code = control.get_output14();
						}	else if (this.osBrowser == 10 || this.osBrowser == 11){
							OUTJSON.id = this.settings.pgeWindowID,OUTJSON.data.datatype = 902,OUTJSON.data.encrypttype = 0;
							datac = this.getEnStr(this.settings.pgeRZRandNum,OUTJSON);
							RZCIJSON = {"rankey":this.settings.pgeRZRandNum,"datab":this.settings.pgeRZDataB,"datac":datac};
							code = this.pwdGetData(RZCIJSON);
						}					
					} catch (err) {
						code = '';
					}
				}
				return code;
			},
			pwdSm2Result: function() {
				var code = '';

				if (!isInstalled) {

					code = '';
				}
				else{	
					try {
						var control = document.getElementById(this.settings.pgeId);
						var my =this.settings.AffineX+"|" +this.settings.AffineY;
						if (this.osBrowser==1 || this.osBrowser==3) {
							control.input13 = this.settings.PubSM2 + "";
							code = control.output104;//(sm2+sm4)密文 base64格式
							
						} else if (this.osBrowser==2 || this.osBrowser==4 || this.osBrowser==5) {
							if(this.settings.PubSM2==0){
								code = control.output(904,0);
							}else if(this.settings.PubSM2==1){
								
								code = control.output(904);
							};
							
							//control.input(200,my);
						
							//alert(code);
						}else if (this.osBrowser==6 || this.osBrowser==8) {
							control.input5 = this.settings.PubSM2 + "";
							code = control.get_output19();
						}else if (this.osBrowser == 10 || this.osBrowser == 11){
							
							if(this.osBrowser == 10){
								OUTJSON.id = this.settings.pgeWindowID,OUTJSON.data.datatype = 904,OUTJSON.data.encrypttype=this.settings.PubSM2;
							}else if(this.osBrowser == 11){
								OUTJSON.id = this.settings.pgeWindowID,OUTJSON.data.datatype = 904,OUTJSON.data.encrypttype=this.settings.PubSM2;
							}
							datac = this.getEnStr(this.settings.pgeRZRandNum,OUTJSON);
							RZCIJSON = {"rankey":this.settings.pgeRZRandNum,"datab":this.settings.pgeRZDataB,"datac":datac};
							code = this.pwdGetData(RZCIJSON);
						}						
					} catch (err) {
						code = '';
					}
				}
				return code;
			},	
			pwdSm2: function(pwd) {
				var code = '';

				if (!isInstalled) {

					code = '';
				}
				else{	
					try {
						var control = document.getElementById(this.settings.pgeId);
						var my =this.settings.AffineX+"|" +this.settings.AffineY;
						if (this.osBrowser==1 || this.osBrowser==3) {
							control.input13 = this.settings.PubSM2 + "";
						    control.input12=pwd;
							code = control.output102;//(sm2+sm4)密文 base64格式
							
						} else if (this.osBrowser==2 || this.osBrowser==4 || this.osBrowser==5) {
						    control.input(906,pwd);
							if(this.settings.PubSM2==0){
								code = control.output(905,0);
							}else if(this.settings.PubSM2==1){
								
								code = control.output(905);
							};
							//alert(code);
						}else if (this.osBrowser==6 || this.osBrowser==8) {
							control.input5 = this.settings.PubSM2 + "";
							control.input9=pwd;
							code = control.get_output18();
						}else if (this.osBrowser == 10 || this.osBrowser == 11){
							INCJSON.id=this.settings.pgeWindowID;
							INCJSON.data.oem_906=pwd;
						
							datac = this.getEnStr(this.settings.pgeRZRandNum,INCJSON);
							var RZCIJSON1 = {"rankey":this.settings.pgeRZRandNum,"datab":this.settings.pgeRZDataB,"datac":datac};
							this.pwdGetData(RZCIJSON1);
							
							var sm2key = "";
							if(this.osBrowser == 10){
								sm2key = this.settings.PubSM2;
							}else if(this.osBrowser == 11){
								sm2key = this.settings.PubSM2;
							}
							OUTJSON.id = this.settings.pgeWindowID,OUTJSON.data.datatype = 905,OUTJSON.data.encrypttype = sm2key;
							datac = this.getEnStr(this.settings.pgeRZRandNum,OUTJSON);
							RZCIJSON = {"rankey":this.settings.pgeRZRandNum,"datab":this.settings.pgeRZDataB,"datac":datac};
							code = this.pwdGetData(RZCIJSON);
						}						
					} catch (err) {
						code = '';
					}
				}
				return code;
			},	
			machineNetwork: function() {
				var code = '';
				if (!isInstalled) {
					code = '';
				}
				else{
					try {
						var control = document.getElementById(this.settings.pgeId);
						if (this.osBrowser==1 || this.osBrowser==3) {
							code = control.GetIPMacList();
						} else if (this.osBrowser==2 || this.osBrowser==4 || this.osBrowser==5) {
							code = control.output(9);
						}else if (this.osBrowser==6 || this.osBrowser==8) {
							code = control.get_output7(0);
						}else if (this.osBrowser == 10 || this.osBrowser == 11){
							var id = this.settings.pgeWindowID;
							OUTJSON.id = id,OUTJSON.data.datatype = 9,OUTJSON.data.encrypttype = 0;
							datac = this.getEnStr(this.settings.pgeRZRandNum,OUTJSON);
							RZCIJSON = {"rankey":this.settings.pgeRZRandNum,"datab":this.settings.pgeRZDataB,"datac":datac};
							code = this.pwdGetData(RZCIJSON);
						}
					} catch (err) {
						code = '';
					}
				}
				return code;
			},
			machineDisk: function() {
				var code = '';
				if (!isInstalled) {
					code = '';
				}
				else{
					try {
						var control = document.getElementById(this.settings.pgeId);
						if (this.osBrowser==1 || this.osBrowser==3) {
							code = control.GetNicPhAddr(1);
						} else if (this.osBrowser==2 || this.osBrowser==4 || this.osBrowser==5) {
							code = control.output(11);
						}else if (this.osBrowser==6 || this.osBrowser==8) {
							code = control.get_output7(2);
						}else if (this.osBrowser == 10 || this.osBrowser == 11){
							var id = this.settings.pgeWindowID;
							OUTJSON.id = id,OUTJSON.data.datatype = 11,OUTJSON.data.encrypttype = 0;
							datac = this.getEnStr(this.settings.pgeRZRandNum,OUTJSON);
							RZCIJSON = {"rankey":this.settings.pgeRZRandNum,"datab":this.settings.pgeRZDataB,"datac":datac};
							code = this.pwdGetData(RZCIJSON);
						}
					} catch (err) {
						code = '';
					}
				}
				return code;
			},
			machineCPU: function() {
				var code = '';
				if (!isInstalled) {
					code = '';
				}
				else{
					try {
						var control = document.getElementById(this.settings.pgeId);
						if (this.osBrowser==1 || this.osBrowser==3) {
							code = control.GetNicPhAddr(2);
						} else if (this.osBrowser==2 || this.osBrowser==4 || this.osBrowser==5) {
							code = control.output(10);
						}else if (this.osBrowser==6 || this.osBrowser==8) {
							code = control.get_output7(1);
						}else if (this.osBrowser == 10 || this.osBrowser == 11){
							var id = this.settings.pgeWindowID;
							OUTJSON.id = id,OUTJSON.data.datatype = 10,OUTJSON.data.encrypttype = 0;
							datac = this.getEnStr(this.settings.pgeRZRandNum,OUTJSON);
							RZCIJSON = {"rankey":this.settings.pgeRZRandNum,"datab":this.settings.pgeRZDataB,"datac":datac};
							code = this.pwdGetData(RZCIJSON);
						}
					} catch (err) {
						code = '';
					}
				}
				return code;
			},
			pwdSimple: function() {
				var code = '';
				if (!isInstalled) {

					code = '';
				}
				else{
					try {
						var control = document.getElementById(this.settings.pgeId);
						if (this.osBrowser==1 || this.osBrowser==3) {
							code = control.output44;
							code = control.output(13);
						}else if (this.osBrowser==6 || this.osBrowser==8) {
							code = control.get_output12();
						}else if (this.osBrowser == 10 || this.osBrowser == 11){
							var id = this.settings.pgeWindowID;
							OUTJSON.id = id,OUTJSON.data.datatype = 13,OUTJSON.data.encrypttype = 1;
							datac = this.getEnStr(this.settings.pgeRZRandNum,OUTJSON);
							RZCIJSON = {"rankey":this.settings.pgeRZRandNum,"datab":this.settings.pgeRZDataB,"datac":datac};
							code = this.pwdGetData(RZCIJSON);
						}
					} catch (err) {
						code = '';
					}
				}
				return code;
			},			
			pwdValid: function() {
				var code = '';
				if (!isInstalled) {
					code = 1;
				}else{
					try {
						var control = document.getElementById(this.settings.pgeId);
						if (this.osBrowser==1 || this.osBrowser==3) {
							if(control.output1) code = control.output5;
						} else if (this.osBrowser==2 || this.osBrowser==4 || this.osBrowser==5) {
							code = control.output(5);
						}else if (this.osBrowser==6 || this.osBrowser==8) {
							code = control.get_output5();
						}else if (this.osBrowser == 10 || this.osBrowser == 11){
							var id = this.settings.pgeWindowID;
							OUTJSON.id = id,OUTJSON.data.datatype = 5,OUTJSON.data.encrypttype = 0;
							datac = this.getEnStr(this.settings.pgeRZRandNum,OUTJSON);
							RZCIJSON = {"rankey":this.settings.pgeRZRandNum,"datab":this.settings.pgeRZDataB,"datac":datac};
							code = this.pwdGetData(RZCIJSON);
						}
					} catch (err) {
						code = 1;
					}
				}
				return code;
			},				
			pwdHash: function() {
				var code = '';
				if (!isInstalled) {
					code = 0;
				}
				else{
					try {
						var control = document.getElementById(this.settings.pgeId);
						if (this.osBrowser==1 || this.osBrowser==3) {
							code = control.output2;
						} else if (this.osBrowser==2 || this.osBrowser==4 || this.osBrowser==5) {
							code = control.output(2);
						}else if (this.osBrowser==6 || this.osBrowser==8) {
							code = control.get_output2();
						}else if (this.osBrowser == 10 || this.osBrowser == 11){
							var id = this.settings.pgeWindowID;
							OUTJSON.id = id,OUTJSON.data.datatype = 2,OUTJSON.data.encrypttype = 1;
							datac = this.getEnStr(this.settings.pgeRZRandNum,OUTJSON);
							RZCIJSON = {"rankey":this.settings.pgeRZRandNum,"datab":this.settings.pgeRZDataB,"datac":datac};
							code = this.pwdGetData(RZCIJSON);
						}
					} catch (err) {
						code = 0;
					}
				}
				return code;
			},			
			isDisable: function() {
				var code = '';
				if (!isInstalled) {
					code = 0;
				}
				else{
					try {
						var control = document.getElementById(this.settings.pgeId);
						if (this.osBrowser==1 || this.osBrowser==3) {
							code = control.output44;
						} else if (this.osBrowser==2 || this.osBrowser==4 || this.osBrowser==5) {
							code =	control.output(16);
						}else if (this.osBrowser==6 || this.osBrowser==8) {
							code = control.get_output24();
						}else if (this.osBrowser == 10 || this.osBrowser == 11){
							var id = this.settings.pgeWindowID;
							OUTJSON.id = id,OUTJSON.data.datatype =906,OUTJSON.data.encrypttype = 0;
							datac = this.getEnStr(this.settings.pgeRZRandNum,OUTJSON);
							RZCIJSON = {"rankey":this.settings.pgeRZRandNum,"datab":this.settings.pgeRZDataB,"datac":datac};
							code = parseInt(this.pwdGetData(RZCIJSON));
						}
					} catch (err) {
						//alert(err);
						code = 0;
					}
				}
				return code;
			},	
			isBList: function() {
				var code = '';
				if (!isInstalled) {
					code = 0;
				}
				else{
					try {
						var control = document.getElementById(this.settings.pgeId);
						if (this.osBrowser==1 || this.osBrowser==3) {
							control.input4=this.settings.pgeBList;
							control.input6=this.settings.pgeRand;
							code = control.output32;
						} else if (this.osBrowser==2 || this.osBrowser==4 || this.osBrowser==5) {
							control.input(12,this.settings.pgeRand);
							control.input(13,this.settings.pgeBList);
							code =control.output(18);
						}else if (this.osBrowser==6 || this.osBrowser==8) {
							control.input15=this.settings.pgeBList;
							control.input16=this.settings.pgeRand;
							code = control.get_output25();
						}else if (this.osBrowser == 10 || this.osBrowser == 11){
							var id = this.settings.pgeWindowID;
							
							
							INCJSON.id=id;
							INCJSON.data.oem_908=this.settings.pgeRand;
							INCJSON.data.oem_907=this.settings.pgeBList;
							datac = this.getEnStr(this.settings.pgeRZRandNum,INCJSON);
							 var RZCIJSON1 = {"rankey":this.settings.pgeRZRandNum,"datab":this.settings.pgeRZDataB,"datac":datac};
							this.pwdGetData(RZCIJSON1);
							
							OUTJSON.id = id,OUTJSON.data.datatype = 908,OUTJSON.data.encrypttype = 0;
							datac = this.getEnStr(this.settings.pgeRZRandNum,OUTJSON);
							RZCIJSON = {"rankey":this.settings.pgeRZRandNum,"datab":this.settings.pgeRZDataB,"datac":datac};
							code =  parseInt(this.pwdGetData(RZCIJSON));;
						}
					} catch (err) {
						code = 0;
					}
				}
				return code;
			},			
			isSimple: function() {
				var code = '';
				if (!isInstalled) {
					code = 0;
				}
				else{
					try {
						var control = document.getElementById(this.settings.pgeId);
						if (this.osBrowser==1 || this.osBrowser==3) {
							code = control.output45;
						} else if (this.osBrowser==2 || this.osBrowser==4 || this.osBrowser==5) {
							code =	control.output(17);
						}else if (this.osBrowser==6 || this.osBrowser==8) {
							code = control.get_output12();
						}else if (this.osBrowser == 10 || this.osBrowser == 11){
							var id = this.settings.pgeWindowID;
							OUTJSON.id = id,OUTJSON.data.datatype = 907,OUTJSON.data.encrypttype = 0;
							datac = this.getEnStr(this.settings.pgeRZRandNum,OUTJSON);
							RZCIJSON = {"rankey":this.settings.pgeRZRandNum,"datab":this.settings.pgeRZDataB,"datac":datac};
							code =  parseInt(this.pwdGetData(RZCIJSON));
						}
					} catch (err) {
						code = 0;
					}
				}
				return code;
			},		
			pwdLength: function() {
				var code = '';
				if (!isInstalled) {
					code = 0;
				}
				else{
					try {
						var control = document.getElementById(this.settings.pgeId);
						if (this.osBrowser==1 || this.osBrowser==3) {
							code = control.output3;
						} else if (this.osBrowser==2 || this.osBrowser==4 || this.osBrowser==5) {
							code = control.output(3);
						}else if (this.osBrowser==6 || this.osBrowser==8) {
							code = control.get_output3();
						}else if (this.osBrowser == 10 || this.osBrowser == 11){
							var id = this.settings.pgeWindowID;
							OUTJSON.id = id,OUTJSON.data.datatype = 3,OUTJSON.data.encrypttype = 0;
							datac = this.getEnStr(this.settings.pgeRZRandNum,OUTJSON);
							RZCIJSON = {"rankey":this.settings.pgeRZRandNum,"datab":this.settings.pgeRZDataB,"datac":datac};
							code = this.pwdGetData(RZCIJSON);
						}
					} catch (err) {

						code = 0;
					}
				}
				return code;
			},				
			pwdStrength: function() {
				var code = 0;

				if (!isInstalled) {

					code = 0;

				}

				else{

					try {

						var control = document.getElementById(this.settings.pgeId);
						if(this.osBrowser == 10 || this.osBrowser == 11){
							var id = this.settings.pgeWindowID;
							OUTJSON.id = id,OUTJSON.data.datatype = 3,OUTJSON.data.encrypttype = 0,datac = this.getEnStr(this.settings.pgeRZRandNum,OUTJSON);
							RZCIJSON = {"rankey":this.settings.pgeRZRandNum,"datab":this.settings.pgeRZDataB,"datac":datac};
							var l = this.pwdGetData(RZCIJSON);
							OUTJSON.data.datatype = 4,OUTJSON.data.encrypttype =0,datac = this.getEnStr(this.settings.pgeRZRandNum,OUTJSON);
							RZCIJSON = {"rankey":this.settings.pgeRZRandNum,"datab":this.settings.pgeRZDataB,"datac":datac};
							var n = this.pwdGetData(RZCIJSON);
							OUTJSON.data.datatype = 4,OUTJSON.data.encrypttype = 1,datac = this.getEnStr(this.settings.pgeRZRandNum,OUTJSON);
							RZCIJSON = {"rankey":this.settings.pgeRZRandNum,"datab":this.settings.pgeRZDataB,"datac":datac};
							var z = this.pwdGetData(RZCIJSON);
						} else	if (this.osBrowser==1 || this.osBrowser==3) {
							var l=control.output3;
							var n=control.output4;
							var z=control.output54;
						} else if (this.osBrowser==2 || this.osBrowser==4 || this.osBrowser==5) {
							var l=control.output(3);
							var n=control.output(4);
							var z=control.output(4,1);
						}else if (this.osBrowser==6 || this.osBrowser==8) {
							var l=control.get_output3();
							var n=control.get_output4();
							var z=control.get_output16();
						}
						
						if(l==0){
							code = 0;
						}else{
							if(l>=6&&n==1){
								code=1;
							}else if(l>=6&&n==2){
								code=2;
							}else if(l>=6&&n==3){
								code=3;
							}
							
						}

					} catch (err) {

						code = 0;

					}

				}		
				return code;
								
			},
			pwdStrength1: function() {
				var code = 0;

				if (!isInstalled) {

					code = 0;

				}

				else{

					try {

						var control = document.getElementById(this.settings.pgeId);

						if(this.osBrowser == 10 || this.osBrowser == 11){
							var id = this.settings.pgeWindowID;
							OUTJSON.id = id,OUTJSON.data.datatype = 4,OUTJSON.data.encrypttype = 1,datac = this.getEnStr(this.settings.pgeRZRandNum,OUTJSON);
							RZCIJSON = {"rankey":this.settings.pgeRZRandNum,"datab":this.settings.pgeRZDataB,"datac":datac};
							var z = this.pwdGetData(RZCIJSON);
						} else if (this.osBrowser==1 || this.osBrowser==3) {
							var z=control.output54;
							//alert(z);
						} else if (this.osBrowser==2 || this.osBrowser==4 || this.osBrowser==5) {
							
				            var z=control.output(4,1);
						
						}else if (this.osBrowser==6 || this.osBrowser==8) {
							
							var z=control.get_output16();
						}
						
						if(l==0){
							code = 0;
						}else{
							if(l>=6&&n==1){
								code=1;
							}else if(l>=6&&n==2){
								code=2;
							}else if(l>=6&&n==3){
								code=3;
							}
							
						}

					} catch (err) {

						code = 0;

					}

				}		
				return z;
								
			},
			checkInstall: function(s,callf) {
				try {
					if (this.osBrowser==1) {
						var comActiveX = new ActiveXObject("ScrcuSecureInput.PassGuard.1"); 
					
						return true;

					} else if (this.osBrowser==2 || this.osBrowser==4 || this.osBrowser==5 || this.osBrowser==6 || this.osBrowser==8) {
					    var arr=new Array();
					    if(this.osBrowser==6){
					    	var pge_info=navigator.plugins['ScrcuSecureInput'].description;
					    }else if(this.osBrowser==8){
					    	var pge_info=navigator.plugins['ScrcuSecureInput'].description;
					    }else{
					    	var pge_info=navigator.plugins['ScrcuSecureInput'].description;
					    }
						if(pge_info.indexOf(":")>0){
							arr=pge_info.split(":");
							var pge_version = arr[1];
							return true;
						}else{
							var pge_version = "";
							return false;
						}
						
					} else if (this.osBrowser==3) {
						//alert("1");
						var comActiveX = new ActiveXObject("ScrcuSecureInput.PassGuard.1");
						return true;
					} else if ((this.osBrowser == 10 || this.osBrowser == 11) && s == 1){
						var obj = this,id = this.settings.pgeWindowID;
						if(!this.settings.pgeRZRandNum) return -1;
						CIJSON.id = this.settings.pgeWindowID,datac = this.getEnStr(this.settings.pgeRZRandNum,CIJSON);
						RZCIJSON = {"rankey":this.settings.pgeRZRandNum,"datab":this.settings.pgeRZDataB,"datac":datac};
						urls = this.settings.pgeUrls+":"+this.settings.pgePort;
						if(logFlag) console.log(urls);
						jQuery.ajax( {url : urls,dataType : "jsonp",
							data : {"str" : JSON.stringify(RZCIJSON),"type" : "check"},
							contentType : "application/json;utf-8",jsonp : "jsoncallback",
							success : function(x) {
								objVersion = x.data;
								if(!!callf) callf(obj);
							},
							error : function(jqXHR, textStatus, errorThrown) {
								$("#logg").html($("#logg").html() + "<br/>" + textStatus )
								if(obj.settings.pgePort < 5895){
									obj.settings.pgePort++;
									obj.checkInstall(1, callf);
								}else{isInstalled = false;return;}
							}
						});
					}
				}catch(e){
					return false;
				}
			
			},
			//将控件版本号转换成整形值，用于比较
			getConvertVersion:function(version) {
				try {
					if(version==undefined || version==""){
						return 0;
					}else{
						var flag = false,m = "";
						if(this.osBrowser == 1 || this.osBrowser == 3){
							if(version.indexOf(",")> -1) flag = true;
						}
						if(flag) m = version.split(",");
						else m=version.split(".");
						var v=parseInt(m[0]*1000)+parseInt(m[1]*100)+parseInt(m[2]*10)+parseInt(m[3]);
						return v;
					}
				}catch(err){return 0;}			
			},
			getIEConvertVersion:function(version) {
				try {
					if(version==undefined || version==""){
						return 0;
					}else{
						var m=version.split(",");
						var v=parseInt(m[0]*1000)+parseInt(m[1]*100)+parseInt(m[2]*10)+parseInt(m[3]);
						return v;
					}
					return v;
				}catch(e){
					return 0;
				}			
			},
			getVersion: function() {
				try {
					if(this.osBrowser==1||this.osBrowser==3){
						var comActiveX = new ActiveXObject("ScrcuSecureInput.PassGuard.1");
						return comActiveX.output35;
					}else if(this.osBrowser == 2 || this.osBrowser == 6 || this.osBrowser == 8 ){
						var arr=new Array();
					    if(this.osBrowser==6){
					    	var pge_info=navigator.plugins['ScrcuSecureInput'].description;
					    }else if(this.osBrowser==8){
					    	var pge_info=navigator.plugins['ScrcuSecureInput'].description;					    	
					    }else{
					    	var pge_info=navigator.plugins['ScrcuSecureInput'].description;
					    }
						if(pge_info.indexOf(":")>0){
							arr=pge_info.split(":");
							var pge_version = arr[1];
						}else{
							var pge_version = "";
						}
					} else if (this.osBrowser == 10 || this.osBrowser == 11){
						if(isInstalled == -1 || !isInstalled) return;
						var id = this.settings.pgeWindowID;
						OUTJSON.id = id,OUTJSON.data.datatype = 12,OUTJSON.data.encrypttype = 0;
						datac = this.getEnStr(this.settings.pgeRZRandNum,OUTJSON);
						RZCIJSON = {"rankey":this.settings.pgeRZRandNum,"datab":this.settings.pgeRZDataB,"datac":datac};
						pge_version = this.pwdGetData(RZCIJSON);
					}
					//alert(pge_version);
					return pge_version;
					
				}catch(e){
					return "";
				}					
			},
			setColor: function() {
				var code = '';
				if (!isInstalled) {
					code = '';
				}
				else{
					try {
						var control = document.getElementById(this.settings.pgeId);
						if(this.settings.pgeBackColor!=undefined && this.settings.pgeBackColor!="") control.BackColor=this.settings.pgeBackColor;
						if(this.settings.pgeForeColor!=undefined && this.settings.pgeForeColor!="") control.ForeColor=this.settings.pgeForeColor;
					} catch (err) {
						code = '';
					}
				}
			},			
			setDownText:function(){
				if(this.pgeVersion!=undefined && this.pgeVersion!=""){
						this.pgeDownText="请点此升级控件";
				}
			},			
			pgInitialize:function(){
				if(isInstalled){
					if(this.osBrowser==1 || this.osBrowser==3){ 
			            jQuery('#'+this.settings.pgeId).show(); 
					}
					
					var control = document.getElementById(this.settings.pgeId);
					
					if(this.settings.pgeBackColor!=undefined && this.settings.pgeBackColor!="") control.BackColor=this.settings.pgeBackColor;
					if(this.settings.pgeForeColor!=undefined && this.settings.pgeForeColor!="") control.ForeColor=this.settings.pgeForeColor;
					
				}else{
					jQuery('#'+this.settings.pgeId+'_pge').hide();	
					if(this.osBrowser==1 || this.osBrowser==3){
						jQuery('#'+this.settings.pgeId+'_down').show();
					}	
				}
			},
			//获得当前时间毫秒，主要用于防止缓存
			pwdGetTime : function() {
				return new Date().getTime();
			},
			//通过id获取页面元素
			pwdGetEById : function(id) {
				return document.getElementById(id);
			},
			//加密通信数据
			getEnStr : function (sKey,jsonStr) {
				var neiKey = [ 0x11, 0x22, 0x33, 0x44, 0x55, 0x66, 0x77, 0x1A, 0x2A, 0x2B,
						0x2C, 0x2D, 0x2E, 0x2F, 0x3A, 0x3B, 0x11, 0x22, 0x33, 0x44, 0x55,
						0x66, 0x77, 0x1A, 0x2A, 0x2B, 0x2C, 0x2D, 0x2E, 0x2F, 0x3A, 0x3B ];
				var fkey = "";
				var lx = "";
				for ( var i = 0; i < sKey.length; i++) {
					lx = String.fromCharCode(sKey[i].charCodeAt(0) ^ neiKey[i]);
					fkey += lx;
				}
				var hexKey = CryptoJS.enc.Utf8.parse(fkey);
				var enStr = CryptoJS.AES.encrypt(JSON.stringify(jsonStr), hexKey, {
					mode : CryptoJS.mode.ECB,
					padding : CryptoJS.pad.Pkcs7
				});
				return enStr.toString();
			},
			//发同步ajax请求
			pwdGetData : function(datas){
				var d = 0;
				var str = JSON.stringify(datas).replace(/\+/g,"%2B");
				Ajax.request( {
					timeout : 1000,
					url : urls,
					type : 'GET',
					async:false,
					data : {
						jsoncallback:"cb",
						"str" : str
					},
					success : function(x) {
						x = x.responseText.substr("cb(".length);
						x = x.substring(0, x.length-1);
						x=JSON.parse(x);
						d=x.data;
					},
					error : function(x){d = -1;}
				});
				return d;
			},
			/**Win10Edge控件相关接口**/
			//当按enter键时，提交表单
			setSX : function(e,m,o){
				var keynum,va = this.pwdGetEById(o.id),len = va.value.length,maxlen=this.settings.pgeMaxlength+1;
				if(window.event){//IE
					keynum = e.keyCode
				}else if(e.which) {//FF
					keynum = e.which
				}
				if(keynum == 13){
					o.blur();
					eval("("+m+")");
				}
			},
			//控制不能从密码框中间编辑
			setCX : function(ctrl) {
				var caretPos = 0,len = ctrl.value.length;
				if (document.selection) {//IE
					var sel = document.selection.createRange();
					sel.moveStart('character', -ctrl.value.length);
					caretPos = sel.text.length;
				}else if (ctrl.selectionStart || ctrl.selectionStart == '0'){//FF
					caretPos = ctrl.selectionStart;
				}
				if (caretPos <= len) {
					if (ctrl.setSelectionRange) {//设置光标位置函数 FF
						setTimeout(function(){
							ctrl.setSelectionRange(len, len);
						},1);
					} else if (ctrl.createTextRange) {//IE
						var range = ctrl.createTextRange();
						range.collapse(true);
						range.moveEnd('character', len);
						range.moveStart('character', len);
						range.select();
					}
				}
			},
			//实例化密码控件窗口
			instControl : function(id,obj) {
				ICJSON.id = id,datac = this.getEnStr(this.settings.pgeRZRandNum,ICJSON);
				RZCIJSON = {"rankey":this.settings.pgeRZRandNum,"datab":this.settings.pgeRZDataB,"datac":datac};
				jQuery.ajax( {url : urls,dataType : "jsonp",
					data : {"str" : JSON.stringify(RZCIJSON),"type" : "inst"},
					contentType : "application/json;utf-8",jsonp : "jsoncallback",
					success : function(x) {
						if(logFlag)  console.log("id:"+id);
						if(logFlag)  console.log("x.data:"+x.data+",x.code:"+x.code);
						if (x.code == 0) {
							if(logFlag)  console.info("实例化成功");
							obj.initControl(id);
						}
					}
				});
				//初始化是否能输入
				inFlag[id] = {"flag":false};
			},
			//初始化密码控件窗口参数
			initControl : function(id) {
				var my =this.settings.AffineX+"|" +this.settings.AffineY;
				INCJSON.id = id,INCJSON.data.edittype = this.settings.pgeEdittype,INCJSON.data.maxlength = this.settings.pgeMaxlength;
				INCJSON.data.reg1 = this.settings.pgeEreg1,INCJSON.data.reg2 = this.settings.pgeEreg2,INCJSON.data.sm2xyhexkey=my,	INCJSON.data.cryptorkey=this.settings.pgeCert;
				if(this.osBrowser == 10) INCJSON.data.lic = {"liccode":license,"url":"aHR0cDovLzE5Mi4xNjguMS4xMTg6ODA4Ny9EZW1vWF9BTExfQUVTL2xvZ2luLmpzcA=="};
				if(this.osBrowser == 11) INCJSON.data.lic = {"liccode":licenseMac,"url":"aHR0cDovLzE5Mi4xNjguMS4xMTg6ODA4Ny9EZW1vWF9BTExfQUVTL2xvZ2luLmpzcA=="};
				datac = this.getEnStr(this.settings.pgeRZRandNum,INCJSON);
				RZCIJSON = {"rankey":this.settings.pgeRZRandNum,"datab":this.settings.pgeRZDataB,"datac":datac};
				jQuery.ajax( {url : urls,dataType : "jsonp",
					data : {"str" : JSON.stringify(RZCIJSON),"type" : "init"},
					contentType : "application/json;utf-8",jsonp : "jsoncallback",
					success : function(x) {
						if(logFlag) console.log("id:"+id);
						if(logFlag) console.log("x.data:"+x.data+",x.code:"+x.code);
						if (x.code == 0) {
							if(logFlag) console.info("设置参数成功");
							inFlag[id] = {"flag":false};
						} else {
							if(logFlag) console.info("data:" + x.data);
						}
					},
					error : function(a ,  b , c){
						var x = 1;
					}
				});
				//初始化对应id心跳值
				onceInterv[id]="";
			},
			//开启密码控件保护
			openProt : function(id,inputID) {
				//控制不让输入,待开启保护后才让输入
				inFlag[id].flag = false,OPJSON.id = id,datac = this.getEnStr(this.settings.pgeRZRandNum,OPJSON);
				RZCIJSON = {"rankey":this.settings.pgeRZRandNum,"datab":this.settings.pgeRZDataB,"datac":datac};
				jQuery.ajax( {url : urls,dataType : "jsonp",
					data : {"str" : JSON.stringify(RZCIJSON),"type" : "open"},
					contentType : "application/json;utf-8",jsonp : "jsoncallback",
					success : function(x) {
						if(logFlag) console.log("成功开启密码控件保护");
						if(logFlag) console.log("x.data:"+x.data+",x.code:"+x.code);
						inFlag[id].flag = true;//控制让输入
					}
				});
				if(typeof onceInterv[id] == "string"){//监听焦点切出
					for(var i = 0;i < iterArray.length;i++){
						window.clearInterval(iterArray[i]);
					}
					onceInterv[id] = window.setInterval("pgeCtrl.intervlOut(\""+id+"\",\""+inputID+"\")",800);	
					iterArray.push(onceInterv[id]);
				}
			},
			//心跳监测
			intervlOut : function(id,inputID) {
				XTJSON.id = id,datac = this.getEnStr(this.settings.pgeRZRandNum,XTJSON);
				RZCIJSON = {"rankey":this.settings.pgeRZRandNum,"datab":this.settings.pgeRZDataB,"datac":datac};
				jQuery.ajax( {url : urls,dataType : "jsonp",
					data : {"str" : JSON.stringify(RZCIJSON),"type" : "hert"},
					contentType : "application/json;utf-8",jsonp : "jsoncallback",
					success : function(x) {
						 if(logFlag) console.log("x.data(长度)："+x.data+",x.code:"+x.code);
						 code = parseInt(x.data);
						 var va = pgeCtrl.pwdGetEById(inputID), len = va.value.length,y = "",i = 0;
						 if(logFlag) console.log(id+"的长度："+len);
						 if(logFlag){ 
							 if(logFlag) console.log(id+"的长度："+len);
							 if(logFlag) console.log("x.data(长度)："+ code);
						 }
						 for( ; i < code; i++) y += "*";
						 va.value = y;
					}
				});
				
			},
			//关闭密码控件保护
			closeProt : function(id,inputID) {
				CPJSON.id = id,datac = this.getEnStr(this.settings.pgeRZRandNum,CPJSON);
				RZCIJSON = {"rankey":this.settings.pgeRZRandNum,"datab":this.settings.pgeRZDataB,"datac":datac};
				jQuery.ajax( {url : urls,dataType : "jsonp",
					data : {"str" : JSON.stringify(RZCIJSON),"type" : "close"},
					contentType : "application/json;utf-8",jsonp : "jsoncallback",
					success : function(x) {
						if(logFlag) console.log("关闭密码控件保护成功");
						if(logFlag) console.log("x.data:"+x.data+",x.code:"+x.code);
						inFlag[id].flag = false;
					}
				});
				if(typeof onceInterv[id] == "number"){
					 for(var i = 0;i < iterArray.length;i++){
						 window.clearInterval(iterArray[i]);
					 }
					 onceInterv[id] = "";
				}
			}
		}
	});	
})(jQuery);
var pgeCtrl = new $.pge();//公共对象，跟本地服务交互时会用到