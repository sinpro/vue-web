<template>
  <div class="guarantteeApplication_box">
    <title-bar title="申请信息填写"></title-bar>
    <div v-if="submitResult=='0'"  >
     
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="320px" class="ApplicationForm">
          <el-form-item label="保函申请人名称" prop="applicantName">
            <el-input v-model="ruleForm.applicantName" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="受益人名称" prop="beneficiaryName">
            <el-input v-model="ruleForm.beneficiaryName" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="申请金额" prop="applicationAmount">
            <el-input v-model="ruleForm.applicationAmount" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="申请期限" prop="applicationPeriod">
            <el-input v-model="ruleForm.applicationPeriod" placeholder="请输入"></el-input>
            <span>个月</span>
          </el-form-item>
          <el-form-item label="保函申请人联系人名称" prop="contactName">
            <el-input v-model="ruleForm.contactName" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="保函申请人联系电话" prop="contactPhone">
            <el-input v-model="ruleForm.contactPhone" placeholder="请输入"></el-input>
          </el-form-item> 
          <el-form-item label="保函业务申请地区" required class="area">
              
                <el-form-item  prop="applicationArea1">
                    <div class="select_address_box">
                      <el-select  v-model="ruleForm.applicationArea1" placeholder="请选择">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                    </div>
                </el-form-item> 
                
             
              <div class="my_address_select_1">
                  <p>四川省/</p>
              </div>
          </el-form-item>
          <el-form-item label="用途" prop="purpose">
            <el-input type="textarea" rows='5' maxlength="500" v-model="ruleForm.purpose" show-word-limit></el-input>
          </el-form-item>
          
        </el-form>
        <div class="tac mt50">
           <el-button type="primary" size="small" @click="submitForm('ruleForm')">提交</el-button>
        </div>
        <div class="wPro mtb20">
          <p>温馨提示</p>
          <p>非融资性保函指四川农信法人行社为非融资性付款业务提供的保函，这些付款义务来源于不具有融资合同一般特征的交易。包括不限于投标保函、履约保
          函、预付款保函、质量/维修保函、付款保函、关税保付保函、保释金保函、出入境备用金保函、财产保全保函、对外劳务合作备用金保函等。</p>
        </div>
     
    </div>

    <div v-else>
      <div class="tac" v-if="submitResult=='1'">
        <i class="el-icon-success cg" style="font-size:60px"></i>
        <p class="mt10 f22 gray1">提交成功</p>
        <p class="mt10 f16 gray3">恭喜提交成功，您可通过申请进度查询查看申请进度。</p>
        <el-button class="mt50" type="primary" @click="lookProgress">查看进度</el-button>
      </div>
      <div class="tac" v-if="submitResult=='2'">
        <i class="el-icon-error cerror" style="font-size:60px"></i>
        <p class="mt10 f22 gray1"></p>
        <p class="mt10 f16 gray3">抱歉，您的申请提交失败，失败原因：失败原因：系统原因。</p>
        <el-button class="mt50" type="primary" @click="lookProgress">重新申请</el-button>
      </div>
      

    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      activeName:'first',
      ruleForm:{
         applicantName:'',
         beneficiaryName:'',
         applicationAmount:'',
         applicationPeriod:'',
         contactName:'',
         contactPhone:'',
         applicationArea1:'',
         applicationArea2:'',
         applicationArea3:'',
         purpose:''
      },
      rules:{
        applicantName: [ { required: true, message: '请输入保函申请人名称', trigger: 'blur' }],
        beneficiaryName: [ { required: true, message: '请输入受益人名称', trigger: 'blur' }],
        applicationAmount: [ { required: true, message: '请输入申请金额', trigger: 'blur' }],
        // applicationPeriod: [ { required: true, message: '请输入申请期限', trigger: 'blur' }],
        contactName: [ { required: true, message: '请输入保函申请人联系人名称', trigger: 'blur' }],
        contactPhone: [ { required: true, message: '请输入保函申请人联系电话', trigger: 'blur' }],
        applicationArea1: [{required: true, message: '请选择市/州', trigger: 'change'}],
        applicationArea2: [{required: true, message: '请选择区/县', trigger: 'change'}],
        applicationArea3: [{required: true, message: '请选择乡/镇', trigger: 'change'}]
      },
      submitResult:2  // 0  信息填写  1  提交成功  2 提交失败
    }
  },
  methods:{
    
    lookProgress(){
     
      if(this.submitResult=='1'){
         //查看进度
        this.$router.push("/financeBussiness/letterOfGuarantteeBusiness/applicationProgress")
      }else{
        //重新提交
        this.submitResult=0
      }
    },


    //提交
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
           
          } else {
            return false;
          }
        });
      },
  }
}
</script>
<style lang="scss" scoped>
.guarantteeApplication_box{
  .el-input__inner{
      width:140px;
    }
    .select_address_box{
      font-size: 16px;
      .el-input--suffix .el-input__inner{
        padding-left: 75px
      }

    }
    .my_address_select_1{
        position: absolute;
        p{
          position: relative;
          top: -39px;
          left: 16px;
        }
      }

}


</style>
<style lang="scss">
  .select_address_box{
      font-size: 16px;
      .el-input--suffix .el-input__inner{
        padding-left: 75px
      }

    }
</style>