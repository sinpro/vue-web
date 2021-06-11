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
        <el-button style="margin-bottom:30px;" @click="sendMessage">提交</el-button>
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
      randomFactor:"suijiyinzi"+new Date().getTime()+223, //-------
    }
  },
  created(){
    this.getRandomFactor();
  },
  mounted(){
    window.addEventListener('message', this.handleMessage)
    this.iframeWin = this.$refs.iframe.contentWindow;
  },
  methods: {
    // 获取随机因子
    getRandomFactor(){ //
      api.getRandomFactor({}).then(
          ({ data = {}, errorCode = '', errorMessage = '响应失败' }) => {
            if (errorCode === '000000') {
              console.log(data,666)
              this.passwordControlUrl='assets/passwordControl.html'+'?pgeRZRandNum='+ENV_CONFIG.pgeRZRandNum+'&pgeRZDataB='+ENV_CONFIG.pgeRZDataB+'&randomFactor='+data.RandomFactor+'&t='+new Date().getTime()+223;
            } else {
              this.$message.error(errorMessage);
            }
          }
      );
    },
    // 外部vue向iframe内部传数据
    sendMessage () {
      this.isSubmit=true;
      this.iframeWin.postMessage({
        isSubmit:this.isSubmit
      }, '*')

    },
    handleMessage (event) {
        console.log(event.data.params,0)
        this.$emit('handleMessage',event.data.params)
        // const data = event.data
    }
  }
}

</script>
<style lang='scss' scoped>
.iframe{
  height: 60px;
  width: 350px;
  padding: 0;
  margin: 0;
}
</style>
