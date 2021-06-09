<template>
    <div class="fiscal-levy">
        <div v-if="steps == '1'">
            <el-form :model="formData" class="mt80"  :rules="rules" ref="formData" label-width="295px" >
                <el-form-item label="纳税人编号：" prop="taxpayerNo">
                    <el-input v-model="formData.taxpayerNo" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="征收机关代码：" prop="originCode">
                    <el-input v-model="formData.originCode" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="外部申报电子序号：" prop="serialNo">
                    <el-input v-model="formData.serialNo" placeholder="请输入"></el-input>
                </el-form-item>
                <div class="tc pt20">
                    <el-button type="primary" @click="query">查询</el-button>
                </div>
            </el-form>
        </div>
        <div v-if="steps == '2'">
            <title-bar title="缴款信息"></title-bar>
            <div class="cont flex">
                <ul class="ul1 cp3 f16 lh16 tar">
                    <li>征收机关代码</li>
                    <li>纳税人编号</li>
                    <li>个人所得税</li>
                    <li>个人所得税</li>
                </ul>
                <ul class="ul2 cp1 f16 lh16">
                    <li>1234</li>
                    <li>67890</li>
                    <li>10,000.00元</li>
                    <li>10,000.00元</li>
                </ul>
                <ul class="ul3 cp3 f16 lh16 tar">
                    <li>外部电子申报序号</li>
                    <li>纳税人姓名</li>
                    <li>个人所得税</li>
                    <li>个人所得税</li>
                </ul>
                <ul class="ul4 cp1 f16 lh16">
                    <li>51413</li>
                    <li>北京易诚有限公司</li>
                    <li>10,000.00元</li>
                    <li>10,000.00元</li>
                </ul>
            </div>
            <div class="mt30">
            <title-bar title="付款人信息"></title-bar>
            <el-form :model="payeeFormData" :rules="payeeRules" ref="payeeFormData" class="mt20" label-width="350px">
              <el-form-item label="付款账户：" prop="payeeAcctNo">
              <el-select v-model="payeeFormData.payeeAcctNo">
                <el-option label="账户一" value="1"></el-option>
                <el-option label="账户二" value="2"></el-option>
                <el-option label="账户三" value="3"></el-option>
              </el-select>
              <p class="lh16 mt12 ml16">可用余额:<span class='money'>10,000元</span></p>
            </el-form-item>
            <el-form-item label="缴纳金额(元):" prop="payAmount">
              <el-input v-model="payeeFormData.payAmount" placeholder="请输入缴纳金额"></el-input>
            </el-form-item>
            </el-form>    
            <div class="tc">
              <el-button size='medium' @click="steps='1'">上一步</el-button>
              <el-button size='medium' type="primary" @click='submit'>提交</el-button>
            </div>  
          </div>
        </div>
        <div v-if="steps == '3'" class="batchStopSuccess">
            <span>总金额： </span>
            <span class="moneybold f20">40,000.00元</span>
            <span class="ml8 gray2"
              >(大写：叁拾万元整 )</span
            >
            <div class="mt20 wr100 h200 bgbrand ptb30 plr70 borderbox flex alc">
              <div>
                <div class="step-success mt10">
                  <i class="el-icon-check"></i>
                </div>
                <div class="step-inner"></div>
                <div class="step-errer bgtips">
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div class="ml20">
                <div>
                  <p class="f18 lh34">交易已提交</p>
                  <p class="gray2">2021-01-01 13:32:22</p>
                </div>
                <div class="mt30">
                  <p class="f22 ctips lh40">待审批</p>
                  <p>下一级审批人：王校长</p>
                </div>
              </div>
            </div>
            <div class="mtb56 tc">
              <el-button @click='goback' size="medium">查看交易详情</el-button>
              <el-button type="primary" size="medium">继续转账</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import mathTools from 'utils/mathTools.js'
export default {
    data () {
        return {
            steps: '1',
            formData:{
                taxpayerNo:'',
                originCode:'',
                serialNo:'',
            },
            rules:{
                taxpayerNo:[
                    { required: true, message: '请输入纳税人编号', trigger: 'blur' }
                ],
                originCode:[
                    { required: true, message: '请输入征收机关代码', trigger: 'blur' }
                ],
                serialNo:[
                    { required: true, message: '请输入外部申报电子序号', trigger: 'blur' }
                ]
            },
            payeeFormData:{
                acctNo:'',
                transAmount:'123123131',
                remark:'',
            },
            payeeRules:{
                acctNo:[
                    { required: true, message: '请选择纳税人编号', trigger: 'change' }
                ],
                transAmount:[
                    { required: true, message: '请选择纳税人编号', trigger: 'blur' }
                ],
            }
        }
    },

    methods: {
        //返回（交易详情）
        goback(){
            this.steps = '2';
        },
        query(){
            this.$refs['formData'].validate((valid) => {
                if(valid){
                    this.steps = '2';
                }
            })
        },
        submit(){
            this.$refs['payeeFormData'].validate((valid) => {
                if(valid){
                    this.steps = '3';
                }
            })
        }
    },

    filters: {
        amountFormat(val){
            return mathTools.addDecollator(val) + '元'
        }
    }
}
</script>
<style lang="scss">
    .fiscal-levy{
        .pay-info{
            td{
                padding-left: 20px;
            }
        }
    }
    .cont {
      >ul>li {
        list-style: none;
      }
      .ul1 {
        margin-left: 67px;
        >li+li {
          margin-top: 23px;
        }
        margin-right: 22px;
        width: 96px;
      }
      .ul2 {
        >li+li {
          margin-top: 23px;
        }
        width: 90px;
      }
      .ul3 {
        margin-left: 227px;
        >li+li {
          margin-top: 23px;
        }
        margin-right: 22px;
        width: 128px;
      }
      .ul4 {
        margin-right: 164px;
        >li+li {
          margin-top: 23px;
          width:128px;
        }
      }
    }
    .batchStopSuccess {
        .step-success {
          margin-left: 7px;
          height: 30px;
          width: 30px;
          border-radius: 50%;
          background: #99d4b9;
          line-height: 30px;
          text-align: center;
          color: #fff;
          i {
            font-weight: bold;
          }
        }
    .step-errer {
      position: relative;
      height: 45px;
      width: 45px;
      border-radius: 50%;
      line-height: 45px;
      text-align: center;
      & :first-child {
        position: absolute;
        left: 20px;
        top: 6px;
        height: 18px;
        width: 3px;
        background: #fff;
      }
      & :last-child {
        position: absolute;
        right: 6px;
        top: 22px;
        width: 18px;
        height: 3px;
        background: #fff;
      }
    }
    .step-inner {
      height: 50px;
      width: 3px;
      background: #99d4b9;
      margin-left: 20px;
    }
  }
  .p1 {
    	width: 170px;
    	height: 15px;
    	font-family: PingFang-SC-Regular;
    	font-size: 14px;
    	font-weight: normal;
    	font-stretch: normal;
    	// line-height: 16px;
    	letter-spacing: 0px;
    	color: #1b1b1b;
    }
    .p1 .text-style-1 {
    	font-family: PingFang-SC-Regular;
    	font-size: 14px;
    	font-weight: normal;
    	letter-spacing: 0px;
    	color: #c6a34f;
    }
    .p2{
      width: 220px;
	    height: 15px;
	    font-family: PingFang-SC-Regular;
	    font-size: 14px;
	    font-weight: normal;
	    font-stretch: normal;
	    letter-spacing: 0px;
	    color: #1b1b1b;
    }
    .p_a{
      width: 54px;
	    height: 14px;
	    font-family: PingFang-SC-Regular;
	    font-size: 14px;
	    font-weight: normal;
	    font-stretch: normal;
	    letter-spacing: 0px;
	    color: #059c5d;
      cursor: pointer;
    }
</style>