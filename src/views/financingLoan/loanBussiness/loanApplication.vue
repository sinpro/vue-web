<template>
  <div>
    <div class="tar"><a type="info" @click="loanToolBox">贷款计算器</a></div>

    <div class="">
      <div class="mt20" v-for="(item,index) of productlist" :key="index">
        <p class="pl20 border4l f20">园保贷</p>
        <div class="BoxShadow flexsb p25 mt10"  >
          <div class="f14 lh24" >
            <div class="flex">
              <div class="mr20 cp1">贷款介绍</div>
              <div class="cp2" style="width:630px">园保贷是指各行社向“园保贷”试点园区内的企业发放，在企业提供一定担保的基础上，由省级财政补偿金和产业园区补偿金共同作为增信手段的信贷业务。</div>
            </div>
            <div class="flex  mt20">
              <div class="mr20 cp1" >申请条件</div>
              <div class="cp2" style="width:630px">
                <p>园保贷是指各行社向“园保贷”试点园区内的企业发放，在企业提供一定担保的基础上，由省级财政补偿金和产业园区补偿金共同作为增信手段的信贷业务。</p>
              </div>
            </div>
            <div v-if="show" class="flex  mt20">
              <div class="mr20 cp1" >适用群体</div>
              <div class="cp2" style="width:630px">
                <p>园保贷是指各行社向“园保贷”试点园区内的企业发放。</p>
              </div>
            </div>
            <div class="tac mt24 gray2 f16" @click="isshow">
              <div v-if="!show">
                <i class="el-icon-arrow-down"></i>
                <span >展开</span>
              </div>
              <div v-else>
                <i class="el-icon-arrow-up"></i>
                <span >收起</span>
              </div>
            </div>
          </div>
          <div class="wl120 tac">
            <p class="money f24">30万</p>
            <p class="mt15">最高可借</p>
            <el-button  class="mt30" size="small"  @click="myApply">申请</el-button>
          </div> 
        </div>
       
      </div>
    </div>
   
    <div class="tac mt50 mb50"><a @click="addProduct" style="color:#cccccc">展开更多贷款产品~</a></div>
    <tool-box :show="toolBoxShow" @cancel="toolBoxShow=false"></tool-box>
  </div>
</template>
<script>
import toolBox from './loanapplicationComponent/toolBox'
export default {
  components:{
    toolBox
  },
  data() {
    return {
      show:false,
      
      productlist:[
        {
          prodtNo:'123456789',
          prodtNm:"我的贷款",
          prodtSynpsInfo:"",
          prodtDtIdComnt:""
        }
        
      ],
      contentNum:-1,
      toolBoxShow:false
    };
  },
  mounted(){

  },
  methods:{
    //获得产品列表
    getProductList(){
      let params = {}
        this.$http.request(this,'POST','api/MC007013.do',params).then(res =>{
          console.log("获取产品列表")
          this.productlist = res.prodtList
        }).catch(function(error) {});

    },
    isshow(){
      this.show=!this.show
    },
    myApply(){
      this.$router.push("/financeBussiness/loanBussiness/myApplication")
    },
    showContent(num){
      this.contentNum=num
    },
    addProduct(){
      this.productlist=this.productlist.concat(this.productlist)
    },
    loanToolBox(){
      this.toolBoxShow=true
    }
  }
};
</script>
<style lang="scss">

</style>