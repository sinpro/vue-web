<template>
 <div class="action">
  <div class="left">
      <div class="top">
          <span class="topLeft">代办事项</span>
          <span class="topRight">更多</span>
      </div>
      <ul class="content">
          <li>
              <span class="title">着笔转账</span>
              <span class="num">2</span>
          </li>
          <li>
              <span class="title">现金管理</span>
              <span class="num">2</span>
          </li>
          <li>
              <span class="title">国际业务</span>
              <span class="num">2</span>
          </li>
          <li>
              <span class="title">逐笔转账</span>
              <span class="num">2</span>
          </li>
          <li>
              <span class="title">现金管理</span>
              <span class="num">2</span>
          </li>
      </ul>
  </div>
  <div class="right">
      <img src="../../../images/home3.jpg">
  </div>
 </div>
</template>

<script>
export default {}
</script>

<style scoped>
.action{
    width:100%;height:auto;margin-bottom:20px;
}
.action:after{
    display:block;clear:both;content:"";visibility:hidden;height:0;
}
.action .left{
    float:left;
    width: 25%;
    padding:20px;
    box-sizing: border-box;
    background-color: #fff;

}
.left .top:after{
    display:block;clear:both;content:"";visibility:hidden;height:0;
}
.left .top .topLeft{
 float: left;
 font-size: 18px;
 font-weight: 600;
}
.left .top .topRight{
 float:right;
 font-size:16px;
 line-height: 30px;
 color:#007AFF;
 cursor: pointer;
}
.left .content{
    margin-top: 35px;
    cursor: pointer;
}
.left .content li:after{
    display:block;clear:both;content:"";visibility:hidden;height:0;
}
.left .content li .title{
    float: left;
    margin-bottom: 20px;
    font-size: 16px;
}
.left .content li .num{
    float: right;
    width: 20px;
    height: 20px;
    border-radius:50%;
    background-color:#ed171f;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color: #fff;
    overflow: hidden;
}
.action .right{float:right;
height:308px;
width:74%;

}
.action .right img{width: 100%;height: 100%;}
</style>
