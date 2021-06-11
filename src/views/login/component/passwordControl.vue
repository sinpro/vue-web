<template>
    <div class="password-control" >
       <iframe 
            src="assets/passwordControl.html" 
            height="50px"
            frameborder="0"
            ref="iframe"
        ></iframe> 
        <el-button style="margin-bottom:30px;" @click="sendMessage">提交</el-button>
    </div>
</template>
<script>
// ENV_CONFIG.assetsUrl+'assets/'
export default {
  data () {
    return {
      htmlUrl:'',
      iframeWin:''
    }
  },
  created(){
    
  },
  mounted(){
    // this.htmlUrl=ENV_CONFIG.assetsUrl+'assets/passwordControl.html';
    window.addEventListener('message', this.handleMessage)
    this.iframeWin = this.$refs.iframe.contentWindow;
    this.initConfig();
  },
  methods: {
    initConfig(){
        this.iframeWin.postMessage({
            pgeRZRandNum:'9999999999',
            pgeRZDataB:'00000000000000000',
        }, '*')
    },
    sendMessage () {
      // 外部vue向iframe内部传数据
      // this.$emit('sendMessage')
      this.iframeWin.postMessage({
        isSubmit:true
      }, '*')

    },
    handleMessage (event) {
        console.log(event.data.params,0)
        // const data = event.data
       
    }
  }
}

</script>
<style lang='scss' scoped>
</style>
