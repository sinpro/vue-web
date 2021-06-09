<template>
  <div class="guarantteeInquiry">
      <title-bar title="保函业务查询"></title-bar>
      <el-form :inline="true"  label-width="140px" :model="formInline" class="demo-form-inline">

        <el-row >
          <el-col :span="12">
            <el-form-item label="申请人名称：">
              <el-input v-model="formInline.applicantName" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="保函种类：">
              <el-select v-model="formInline.guaranteeType" placeholder="请选择">
                  <el-option :label="111" :value="111"></el-option>
                  <el-option :label="222" :value="222"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
         <el-row >
          <el-col :span="12">
            <el-form-item label="保函起始日期：">
              <el-date-picker
                  v-model="formInline.guaranteeStartDate"
                  type="daterange"
                  range-separator="~"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="保函到期日期：">
              <el-date-picker
                  v-model="formInline.guaranteeEndDate"
                  type="daterange"
                  range-separator="~"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
         <el-row >
          <el-col :span="12">
            <el-form-item label="受益人名称：">
              <el-input v-model="formInline.beneficiaryName" placeholder="请输入受益人名称"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="保函状态：">
              <el-select v-model="formInline.guaranteeStatus" placeholder="请选择">
                  <el-option :label="111" :value="111"></el-option>
                  <el-option :label="222" :value="222"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
         <el-row >
          <el-col :span="12">
            <div class="apply_pople_money">
              <el-form-item label="申请金额：">
              <el-input v-model="formInline.guaranteeAmount1" placeholder="请输入" ></el-input>
              <span>~</span>
              <el-input v-model="formInline.guaranteeAmount2" placeholder="请输入" ></el-input>
            </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>
      <div class="tac mt30 mb50">
          <el-button size="small"  @click="clearForm()">重置</el-button>
          <el-button size="small" type="primary" @click="onSubmit">查询</el-button>
      </div>
      <div v-if="dontData==1">
        <div  class="BoxShadow mb20 pointer" v-for="(item,index) of applicantList" :key="index" @click="lookDetails">
          <div class="flexsb bgbrand pl20 pt10 pb10">
            <div>
              <span class="f18 gray1">北京易诚互动</span>
              <el-tag   effect="plain" type="success">执行完毕</el-tag>
              <el-tag   effect="plain" type="warning">执行中</el-tag>
            </div>
            <el-tag  effect="dark" color="#059c5d">
              <span v-if="true">投标保函</span>
              <span v-if="false">履约保函</span>
              <span v-if="false">付款保函</span>
              <span v-if="false">保释金保函</span>
              
            </el-tag>
          </div>
         <el-row class="p25 f16 gray2" >
           <el-col :span="9">
              <p class="f22 gray1 mb15">{{item.guaranteeStartDate}}（元）</p>
              <span>保函金额</span>
           </el-col>
           <el-col :span="5">
              <p  class="f22 gray1 mb15">{{item.guaranteeEndDate}}</p>
              <span>保函起始日期</span>
           </el-col>
           <el-col :span="5">
              <p  class="f22 gray1 mb15">{{item.guaranteeEndDate}}</p>
              <span>保函到期日期</span>
           </el-col>
           <el-col :span="5">
              <p  class="f22 gray1 mb15 ">{{item.beneficiaryName}}</p>
              <span>受益人</span>
           </el-col>
         </el-row>
        </div>
      </div>
      <div v-if="dontData=='2'" class="tac">
         <img class="w130 h120" src="../../../images/accountManage/iconBankLogo.png" alt="">
         <p class="f18 gray2 mt20">查询无记录</p>
      </div>


      
     
      <!-- <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :total="400"
      :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" style="float:right"
      ></el-pagination> -->


      <el-dialog title="保函业务详情" :visible.sync="contentVisible" size="medium" text >
        <title-bar title="保函信息"></title-bar>
        <el-row class="mt20" >
          <el-col :span="12">
              <span class="inline-block tar w180 gray3">申请人名称</span>
              <span class="ml25">北京易诚互动网络有限公司</span>
          </el-col>
          <el-col :span="12">
              <span class="inline-block tar w180 gray3">保函状态</span>
              <span class="ml25">执行中</span>
          </el-col>
        </el-row>
        <el-row class="mt20" >
          <el-col :span="12">
              <span class="inline-block tar w180 gray3">受益人名称</span>
              <span class="ml25">北京易诚互动网络有限公司</span>
          </el-col>
          <el-col :span="12">
              <span class="inline-block tar w180 gray3">赔付状态</span>
              <span class="ml25">是</span>
          </el-col>
        </el-row>
        <el-row class="mt20" >
          <el-col :span="12">
              <span class="inline-block tar w180 gray3">保函金额</span>
              <span class="ml25">1,000,000.00元</span>
          </el-col>
          <el-col :span="12">
              <span class="inline-block tar w180 gray3">垫款状态</span>
              <span class="ml25">有</span>
          </el-col>
        </el-row>
        <el-row class="mt20" >
          <el-col :span="12">
              <span class="inline-block tar w180 gray3">保函余额</span>
              <span class="ml25">1,000,000.00元</span>
          </el-col>
          <el-col :span="12">
              <span class="inline-block tar w180 gray3">垫款余额</span>
              <span class="ml25">1,000,000.00元</span>
          </el-col>
        </el-row>
        <el-row class="mt20" >
          <el-col :span="12">
              <span class="inline-block tar w180 gray3">保证金金额</span>
              <span class="ml25">1,000,000.00元</span>
          </el-col>
           <el-col :span="12">
              <span class="inline-block tar w180 gray3">保函起始日期</span>
              <span class="ml25">2022-10-10</span>
          </el-col>
        </el-row>
        <el-row class="mt20" >
          <el-col :span="12">
              <span class="inline-block tar w180 gray3">担保机构名称</span>
              <span class="ml25">四川省农村信用社</span>
          </el-col>
           <el-col :span="12">
              <span class="inline-block tar w180 gray3">保函到期日期</span>
              <span class="ml25">2022-10-10</span>
          </el-col>
        </el-row>
        <el-row class="mt20" >
          <el-col :span="12">
              <span class="inline-block tar w180 gray3">保函种类</span>
              <span class="ml25">出入境备用金保函</span>
          </el-col>
        </el-row>
        <div class="tac mb20 mt20">
          <el-button  type="primary" @click="contentVisible=false">关闭</el-button>
        </div>

      
      </el-dialog>
    
  </div>
</template>
<script>
export default {
  data(){
    return{
      dontData:1,//1 有数据  2 无数据
      activeName:'first',
      formInline:{
        applicantName:'',
        guaranteeType:'',
        guaranteeStartDate:'',
        guaranteeEndDate:'',
        beneficiaryName:'',
        guaranteeStatus:'',
        guaranteeAmount1:'',
        guaranteeAmount2:'',
      },
      applicantList:[
        {guaranteeAmount:'北京人',guaranteeType:'北京人',guaranteeStartDate:'1000000.00',guaranteeEndDate:'2020-09-09',beneficiaryName:'易诚互动'},
        {guaranteeAmount:'北京人',guaranteeType:'北京人',guaranteeStartDate:'1000000.00',guaranteeEndDate:'2020-09-09',beneficiaryName:'易诚互动'},
        {guaranteeAmount:'北京人',guaranteeType:'北京人',guaranteeStartDate:'1000000.00',guaranteeEndDate:'2020-09-09',beneficiaryName:'易诚互动'},
        {guaranteeAmount:'北京人',guaranteeType:'北京人',guaranteeStartDate:'1000000.00',guaranteeEndDate:'2020-09-09',beneficiaryName:'易诚互动'},
        {guaranteeAmount:'北京人',guaranteeType:'北京人',guaranteeStartDate:'1000000.00',guaranteeEndDate:'2020-09-09',beneficiaryName:'易诚互动'},
        {guaranteeAmount:'北京人',guaranteeType:'北京人',guaranteeStartDate:'1000000.00',guaranteeEndDate:'2020-09-09',beneficiaryName:'易诚互动'},
      ],
      currentPage:1,
      contentVisible:false,
    }
  },
  methods:{
    //查看详情
    lookDetails(){
      this.contentVisible=true
    },


    clearForm(){
      this.formInline={
        applicantName:'',
        guaranteeType:'',
        guaranteeStartDate:'',
        guaranteeEndDate:'',
        beneficiaryName:'',
        guaranteeStatus:'',
        guaranteeAmount1:'',
        guaranteeAmount2:'',
      }
    },
    onSubmit(){
      
    },
    handleSizeChange(){

    },
    handleCurrentChange(){

    }
  }
}
</script>
<style lang="scss" >
.guarantteeInquiry{
  .apply_pople_money{
    .el-input, .el-textarea{
      width: 150px;
    }

  }

}
</style>