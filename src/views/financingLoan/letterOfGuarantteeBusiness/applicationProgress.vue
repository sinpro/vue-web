<template>
  <div class="applicationProgress">
    <title-bar title="申请进度查询"></title-bar>
   
    
   
      <el-form :inline="true" :model="formInline" label-width="140px" class="demo-form-inline">
        <el-row>
          <el-col :span="12">
             <el-form-item label="保函申请人名称:">
              <el-input v-model="formInline.guaranteeApplicantName" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="受益人名称：">
              <el-input v-model="formInline.guaranteeApplicantName" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
         <el-row >
          <el-col :span="12">
             <div class="apply_pople_money">
              <el-form-item label="申请金额：">
                <el-input v-model="formInline.applicationAmount1" placeholder="请输入" ></el-input>
                <span>~</span>
                <el-input v-model="formInline.applicationAmount2" placeholder="请输入" ></el-input>
              </el-form-item>
             </div>
          </el-col>
          <el-col :span="12">
             <el-form-item label="申请状态：">
              <el-select v-model="formInline.applicationStatus" placeholder="请选择">
                  <el-option :label="111" :value="111"></el-option>
                  <el-option :label="222" :value="222"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row >
          <el-col :span="12">
            <el-form-item label="申请日期：">
              <el-date-picker
                  v-model="formInline.applicationDateRange"
                  type="daterange"
                 
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12"></el-col>
        </el-row>
      </el-form>
      <div class="tac mb55 mt35">
        <el-button type="primary" size="small" @click="onSubmit">查询</el-button>
      </div>
    
      <div class="apply_progres_details_box" v-if="dontData=='1'">
        <div class="BoxShadow apply_progres_details f16 cp1 mt25"  v-for="(item,index) of applicantList" :key="index" :class="index%2==0?'':'ml20'">
          <div class="flexsb bgbrand p10">
            <div class="w320 p10">
              <span class="gray3">申请人</span>
              <p class="f18 mt10">{{item.ApplicantName}}</p>
            </div>
            <img style="width:70px;height:63px" src="../../../images/accountManage/iconBankLogo.png" alt="">
          </div>
          <div class="p20">
            <div class="flexsb mb20">
              <span class="gray3">受益人</span>
              <div>
                <span class="">北京易诚互动科技股份有限公司公司....</span>
              </div>
            </div>
            <div class="flexsb mb20">
              <span class="gray3">申请金额</span>
              <div>
                <span class="money">1,000,000.00元</span>
              </div>
            </div>
            <div class="flexsb mb20">
              <span class="gray3">受益人</span>
              <div>
                <span>北京易诚互动科技股份有限公司公司....</span>
              </div>
            </div>
            <div class="tac bordert pt20">
              <a  @click="contentVisible=true">详情</a>
            </div>
          </div>
        </div>
      </div> 
      <div v-if="dontData=='2'" class="tac">
         <img class="w130 h120" src="../../../images/accountManage/iconBankLogo.png" alt="">
         <p class="f18 gray2 mt20">查询无记录</p>
      </div>
          
        
      <!-- <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :total="400"
      :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" style="float:right"
      ></el-pagination> -->
      <el-dialog title="申请进度详情" :visible.sync="contentVisible" size="medium" text >
        <div class="flexsb" style=" align-items: center;">
          <span class="gray1">申请受理中，请耐心等待。</span>
          <img class="w70 h63" src="../../../images/accountManage/iconBankLogo.png" alt="">
        </div>
        <title-bar title="申请信息"></title-bar>
       
          
        <el-row class="mt20" >
          <el-col :span="12">
              <span class="inline-block tar w180 gray3">保函申请人名称</span>
              <span class="ml25">北京易诚互动网络有限公司</span>
          </el-col>
          <el-col :span="12">
              <span class="inline-block tar w180 gray3">申请期限</span>
              <span class="ml25">12个月</span>
          </el-col>
        </el-row>
        <el-row class="mt20" >
          <el-col :span="12">
              <span class="inline-block tar w180 gray3">受益人名称</span>
              <span class="ml25">北京易诚互动网络有限公司</span>
          </el-col>
          <el-col :span="12">
              <span class="inline-block tar w180 gray3">申请时间</span>
              <span class="ml25">2020-12-01 12:10:20</span>
          </el-col>
        </el-row>
        <el-row class="mt20" >
          <el-col :span="12">
              <span class="inline-block tar w180 gray3">申请金额</span>
              <span class="ml25">1,000,000.00元</span>
          </el-col>
          <el-col :span="12">
              <span class="inline-block tar w180 gray3">保函业务申请地区</span>
              <span class="ml25">四川省甘孜藏族自治州康定县炉城</span>
          </el-col>
        </el-row>
        <el-row class="mt20" >
          <el-col :span="12">
              <span class="inline-block tar w180 gray3">保函申请人联系人
名称</span>
              <span class="ml25">张三</span>
          </el-col>
          <el-col :span="12">
              <span class="inline-block tar w180 gray3">保函申请人联系电
话</span>
              <span class="ml25">135 8754 8754</span>
          </el-col>
        </el-row>
        <el-row class="mt20" >
          <el-col :span="12">
              <span class="inline-block tar w180 gray3">描述</span>
              <span class="ml25">————</span>
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
        guaranteeApplicantName:'',
        beneficiaryName:'',
        applicationAmount1:'',
        applicationAmount2:'',
        applicationStatus:'',
        applicationDateRange:''
      },
      applicantList:[
        {ApplicantName:'北京人',beneficiaryName:'北京人',applicationAmount:'1000000.00',applicationDate:'2020-09-09 12:00:00'},
        {ApplicantName:'北京人',beneficiaryName:'北京人',applicationAmount:'1000000.00',applicationDate:'2020-09-09 12:00:00'},
        {ApplicantName:'北京人',beneficiaryName:'北京人',applicationAmount:'1000000.00',applicationDate:'2020-09-09 12:00:00'},
        {ApplicantName:'北京人',beneficiaryName:'北京人',applicationAmount:'1000000.00',applicationDate:'2020-09-09 12:00:00'},
        {ApplicantName:'北京人',beneficiaryName:'北京人',applicationAmount:'1000000.00',applicationDate:'2020-09-09 12:00:00'}
      ],
      currentPage:1,
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
      contentVisible:false
    }
  },
  methods:{
    onSubmit(){
      
    },
    handleSizeChange(){

    },
    handleCurrentChange(){

    }
  }
}
</script>
<style lang="scss" scoped>

.apply_progres_details_box{
 
  display: flex;
  flex-wrap: wrap;
  .apply_progres_details{
    width: 460px;
   

    
  }
}
.applicationProgress{
  .apply_pople_money{
    .el-input, .el-textarea{
      width: 150px;
    }

  }

}


</style>
<style lang="scss" scoped>
  
</style>