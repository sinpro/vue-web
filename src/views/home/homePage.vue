<template>
<div class="home">
  <el-row>
    <el-col>
       <user-center></user-center>
       <last-trade></last-trade>
       <!--<todo-matters></todo-matters>-->
       <content-foot></content-foot>
    </el-col>
  </el-row>
  <!-- 左侧固定按钮 -->
  <div class="sus-frame">
    <ul>
      <li @click="scrollTop"><div class="pentagon"></div><img src="../../images/home/top.png"></li>
      <li @click="goQues"><img src="../../images/home/edit.png"></li>
      <li><img src="../../images/home/feedback.png"></li>
    </ul>
  </div>
</div>
</template>
<script>

import ContentFoot from './component/ContentFoot' // 底部栏目
import LastTrade from './component/LastTrade' // 最近交易
import UserCenter from './component/UserCenter' // 用户中心
export default {
  components: {
    ContentFoot,
    LastTrade,
    UserCenter
  },
  data(){
    return{

    }

  },
  methods: {
    //回到顶部
    scrollTop(){
      console.log('--------------')
      // document.body.scrollTop = document.documentElement.scrollTop = 0;
      cancelAnimationFrame(timer);
      let timer = requestAnimationFrame(function fn(){
        let oTop = document.body.scrollTop || document.documentElement.scrollTop;
        if(oTop > 0){
          document.body.scrollTop = document.documentElement.scrollTop = oTop - 50;
          timer = requestAnimationFrame(fn);
        }else{
          cancelAnimationFrame(timer);
        } 
        
      })
    },
    goQues(){
      // this.$router.push('/homeQues/index')
      this.$emit('handleQues');
    }
  }
}
</script>
<style lang='scss' scoped>
.home{
  width: 100%;
  background: #F8F8Fb !important;
  height: calc(100vh - 220px);
  overflow:auto;
}
.sus-frame{
    position: fixed;
    right: 32px;
    top: 50%;
    li{
      width: 48px;
      height: 41px;
      box-sizing: border-box;
      background-color: #ffffff;
      box-shadow: 0px 2px 9px 0px 
        rgba(0, 0, 0, 0.08);
        margin-top:7px;
      img{
        height: 50%;
        width:50%;
        padding:11px 12px;
      }
    }
    li:first-child{
      height: 30px !important;
      img{
        padding:0 12px 11px 12px !important;
      }
      .pentagon{
        height: 0;  
        width: 0;
        border-left: 24px solid transparent; 
        border-right: 24px solid transparent; 
        border-bottom: 11px solid #fff;
        box-shadow: 0px 2px 9px 0px 
        rgba(0, 0, 0, 0.08);
        position: absolute;
        top: -4px;
      }
    }
  }
</style>
