<template>
     <div class="home-footer">
        <div class='custmer-top' @click="commonUse()">
            <div>
                <div class='custmer-line'></div>
                <span class='f22 pl20 vam'>精选推荐</span>
            </div>
        </div>
        <div class="flex footer-flex">
            <div v-for='item in 3' :key='item' class="footer-img"><img src="../../../images/firstPage/bg_icon1.png"/></div>
        </div>
     </div>
</template>

<script>

export default {
  name: 'service',
  data () {
    return {
    }
  },
  components: {

  }
}
</script>
<style lang='scss' scoped>
    .home-footer{
        background: #fff;
	    border-radius: 16px 16px 16px 12px;
        margin:18px auto 32px;
        width: 1200px;
        height: 279px;
        .custmer-top{
            height: 47px;
            border-bottom: 1px solid #f0f0f0;
            line-height: 47px;
            color: #059c5d;
            .custmer-line{
                width: 5px;
                height: 24px;
                background-color:#059c5d ;
                border-radius: 0px 2px 0px 2px;
                display: inline-block;
                vertical-align: middle;
            }
        }
        .footer-flex{
            padding:23px 30px;
            display: flex;
            justify-content: space-between;
        }
        .footer-img{ 
            img{
                width: 365px;
            }
        }
    }
</style>
