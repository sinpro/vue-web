<template>
    <div class="trans-refund">
        <div v-if="steps == '1'">
            <el-form :model="formData" class="mt80"  :rules="rules" ref="formData" label-width="312px" >
                <el-form-item label="划拨/退款单号：" prop="refundNo">
                    <el-input v-model="formData.refundNo" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="监管账户：" prop="regAcctNo">
                    <el-input v-model="formData.regAcctNo" placeholder="请输入"></el-input>
                </el-form-item>
                <div class="tc pt20">
                    <el-button type="primary" @click="query">下一步</el-button>
                </div>
            </el-form>
        </div>
        <div v-if="steps == '2'">
            <title-bar title="划拨/退款信息"></title-bar>
            <div class="cont flex">
                <ul class="ul1 cp3 f16 lh16 tar">
                    <li>收款人户名</li>
                    <li>收款人账户</li>
                    <li>收款人开户行</li>
                    <li>转账金额</li>
                </ul>
                <ul class="ul2 cp1 f16 lh16">
                    <li>山东渔业</li>
                    <li>6321 9008 6521 8721</li>
                    <li>中国银行</li>
                    <li>100,000.00元</li>
                </ul>
                <ul class="ul3 cp3 f16 lh16 tar">
                    <li>付款人户名</li>
                    <li>付款人账户</li>
                    <li>付款人开户行</li>
                    <li>开户行联行号</li>
                </ul>
                <ul class="ul4 cp1 f16 lh16">
                    <li>北京易诚互动</li>
                    <li>4690 8902 0210 1128</li>
                    <li>自贡市国际投资有限公司</li>
                    <li>20210128</li>
                </ul>
            </div>
            <div class="mt30">
                <title-bar title="其他信息"></title-bar>
                <el-form :model="remarkFormData" class="mt10"  label-width="312px">
                    <el-form-item label="用途：" prop="useFor">
                        <!-- <el-select v-model="remarkFormData.useFor">
                          <el-option label="账户一" value="1"></el-option>
                          <el-option label="账户二" value="2"></el-option>
                          <el-option label="账户三" value="3"></el-option>
                        </el-select> -->
                        <descSelect v-model="remarkFormData.useFor" @childFn='childFn'></descSelect>
                    </el-form-item>
                    <el-form-item label="备注：">
                        <el-input v-model="remarkFormData.remark" placeholder="请输入备注(非必输)"></el-input>
                    </el-form-item>
                    <div class="tc pt20">
                        <el-button size="medium" @click="steps='1'">上一步</el-button>
                        <el-button size="medium" type="primary" @click="submit">提交</el-button>
                    </div>
                </el-form>
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
              <el-button @click='steps = "2"' size="medium">查看交易详情</el-button>
              <el-button type="primary" size="medium">继续转账</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import descSelect from "../components/descSelect";
export default {
    components: {
      descSelect,
    },
    data () {
        return {
            steps:'1',
            formData:{
                refundNo:'',
                regAcctNo:'',
            },
            rules:{
                refundNo:[
                    { required: true, message: '请输入划拨/退款单号', trigger: 'blur' }
                ],
                regAcctNo:[
                    { required: true, message: '请选择监管账户', trigger: 'change' }
                ],
            },
            remarkFormData:{
                remark:'',
                useFor:''
            }
        }
    },
    methods: {
        query(){
            this.$refs['formData'].validate((valid) => {
                if(valid){
                    this.steps = '2';
                }
            })
        },
        childFn(payload){
          console.log(payload,'1111111111111')
          this.remarkFormData.useFor = payload;
        },
        submit(){
            this.steps = 3
        },
    }
}
</script>

<style lang="scss">
    .trans-refund{
        .table-wrapper{
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
        width: 166px;
      }
      .ul3 {
        margin-left: 182px;
        >li+li {
          margin-top: 23px;
        }
        margin-right: 22px;
        width: 96px;
      }
      .ul4 {
        margin-right: 117px;
        >li+li {
          margin-top: 23px;
          width:176px;
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
</style>