<template>
    <div class="password-control" >
       <iframe 
            :src="passwordControlUrl" 
            frameborder="0"
            leftmargin="0" 
            topmargin="0"
            ref="iframe"
            scrolling="no"
            class="iframe"
        ></iframe>
    </div>
</template>
<script>
// ENV_CONFIG.assetsUrl+'assets/'
import api from 'apis/common.js';
export default {
  data () {
    return {
      passwordControlUrl:'',
      iframeWin:'',
      isSubmit:false, //是否需要提交
      passwordObj:{}
    }
  },
  props:{
    isNeedLevel:{
      type: Boolean,
      default: false
    }
  },
  created(){
    this.getRandomFactor();
  },
  mounted(){
    // window.addEventListener('message', this.handleMessage,false)
    this.iframeWin = this.$refs.iframe.contentWindow;
  },
  methods: {
    // 获取随机因子
    getRandomFactor(){ //
      api.getRandomFactor({}).then(
          ({ data = {}, errorCode = '', errorMessage = '响应失败' }) => {
            if (errorCode === '000000') {
              console.log(data,666)
              this.passwordControlUrl=ENV_CONFIG.assetsUrl+'assets/passwordControl.html'+'?pgeRZRandNum='+ENV_CONFIG.pgeRZRandNum+'&pgeRZDataB='+ENV_CONFIG.pgeRZDataB+'&randomFactor='+data.RandomFactor+'&isNeedLevel='+this.isNeedLevel+'&t='+new Date().getTime()+223;
            } else {
              this.$message.error(errorMessage);
            }
          }
      );
    },
    // 获取密码控件 外部vue向iframe内部传数据
    getEncryptionPassword(){
      this.isSubmit=true;
      this.iframeWin.postMessage({
        isSubmit:this.isSubmit
      }, '*')
      window.addEventListener('message', (e)=>{
        // if (Object.prototype.toString.call(this.submitPassWordFn)==='[object Function]') {
        //    this.getPassWordFn(e.data.params);
        //  }
        if(this.isSubmit){
          this.$emit('submitPassWordFn',e.data.params)
          this.isSubmit=false;
        }
        
      },false)
    }
  }
}

</script>
<style lang='scss' scoped>
.iframe{
  height: 40px;
  width: 350px;
  padding: 0;
  margin: 0;
}
</style>
