<template>
  <!--分割线-->
      <div class="banner-tips">
        <ul class="banner-list">
          <li @click="dialogTableVisible=true">
            <img src="../../../images/firstPage/icon_right1.png" />
            <span>网银助手</span>
          </li>
          <li @click="downCenter">
            <img src="../../../images/firstPage/icon_right1.png" />
            <span>下载中心</span>
          </li>
          <li @click="question">
            <img src="../../../images/firstPage/icon_right1.png" />
            <span>帮助中心</span>
          </li>
        </ul>
        <ul class="bottom-list flex jst pl30">
          <li>
            <span>首次使用网银请下载安装网银助手</span>
          </li>
          <li>
            <span>尽量不要在网吧等公共场所登录</span>
          </li>
          <li>
            <span>如有疑问，请拨打客户热线96633（四川省外加拨028）</span>
          </li>
        </ul>
      </div>
</template>

<script>
export default {
  data () {
    return {
      downLoadFlag:true,
      questionFlag:true,
      safetyTipsFlag:true,
    }
  },
  methods: {
    downLoad(){
      this.$emit('downUKeyFlag',this.downLoadFlag)
    },
    question(){
      this.$emit('questionFlag',this.questionFlag)
    },
    safetyTips(){
      this.$emit('safetyTipsFlag',this.safetyTipsFlag)
    }
  }
}

</script>
<style lang='scss' scoped>
</style>
