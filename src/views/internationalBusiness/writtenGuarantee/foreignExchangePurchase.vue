<template>
  <div class="foreignExchangeRemittanceApp">
    <el-steps class="mt22" :active="activeIndex" finish-status="success" process-status='process' align-center>
      <el-step title="填写信息"></el-step>
      <el-step title="确认信息"></el-step>
      <el-step title="交易结果"></el-step>
    </el-steps>

    <!-- **************************购汇信息************************** -->
    <div v-if="activeIndex==0">
      <div class="title">
        <title-bar title="购汇信息"></title-bar>
      </div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="312px" :inline="true">
        <el-form-item prop="payeeAccount" label="企业名称:">
            <el-input v-model="ruleForm.payeeAccount" @input="limit10()" maxlength="50"
                class="payeeAccount w578" placeholder="请输入" :disabled="true">
            </el-input>
        </el-form-item>
        <el-form-item label="转出人民币账号:" prop="accType">
          <el-select
            v-model="ruleForm.accType"
            v-support
            placeholder="请选择"
          >
            <el-option value="0" label="个人支付账户"></el-option>
            <el-option value="1" label="单位支付账户"></el-option>
            <el-option value="2" label="备付金账号"></el-option>
          </el-select>
          <!-- <div class="f14 mt12">
            <p>
              可用余额：
              <span class="money"
                >{{ -->
                <!-- formatMoney -->
                <!-- 1111 }}元</span
              >
            </p>
          </div> -->
        </el-form-item>
        <el-form-item label="转入外币账号:" prop="accType1">
          <el-select
            v-model="ruleForm.accType1"
            v-support
            placeholder="请选择"
          >
            <el-option value="0" label="个人支付账户"></el-option>
            <el-option value="1" label="单位支付账户"></el-option>
            <el-option value="2" label="备付金账号"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="payeeAccount1" label="购汇币种:">
            <div  class="settItem">
                <el-input v-model="ruleForm.payeeAccount1" @input="limit10()" maxlength="50"
                    class="payeeAccount w578" placeholder="请输入" :disabled="true">
                </el-input>
                <div class="settItem_er">
                 <p>
                    参考牌价:
                    <span class="settItem_num"> -- </span>
                    <el-button type="text">查看牌价</el-button>
                 </p>
                </div>
            </div>
        </el-form-item>
        <el-form-item prop="payeeAccount2" label="转出人民币金额:" :rules="ruleForm.payeeAccount3 ? [{required:false}] : [{required: true, message: '请输入转出人民币金额', trigger: 'blur'}]">
            <el-input v-model="ruleForm.payeeAccount2" @input="limit10()" maxlength="50"
                class="payeeAccount w578" placeholder="请输入" >
            </el-input>
        </el-form-item>
         <el-form-item prop="payeeAccount3" label="转入外币金额:" :rules="ruleForm.payeeAccount2 ? [{required:false}] : [{required: true, message: '请输入转入外币金额', trigger: 'blur'}]">
            <el-input v-model="ruleForm.payeeAccount3" @input="limit10()" maxlength="50"
                class="payeeAccount w578" placeholder="请输入" >
            </el-input>
        </el-form-item>
        <!-- **************************其他信息************************** -->
        <title-bar title="其他信息" class="mt46"></title-bar>
        <el-form-item prop="payeeAccount4" label="交易编码:">
            <el-input v-model="ruleForm.payeeAccount4" @input="limit10()" maxlength="50"
                class="payeeAccount w578" placeholder="请输入" >
            </el-input>
        </el-form-item>
        <el-form-item prop="payeeAccount5" label="外汇局批件号/备案表号/业务编号:">
            <el-input v-model="ruleForm.payeeAccount5" @input="limit10()" maxlength="50"
                class="payeeAccount w578" placeholder="请输入" >
            </el-input>
        </el-form-item>
        <el-form-item label="购汇种类:" prop="accType2">
            <el-select
                v-model="ruleForm.accType2"
                v-support
                placeholder="请选择"
            >
            <el-option value="0" label="个人支付账户"></el-option>
            <el-option value="1" label="单位支付账户"></el-option>
            <el-option value="2" label="备付金账号"></el-option>
            </el-select>
        </el-form-item>    
      </el-form>
      <p class="bottomP mt25">请阅读<el-button type="text"  @click="centerDialogVisible = true">《申请须知》</el-button></p>
      <div class="tac mtb56">
        <el-button size="medium">暂存</el-button>
        <el-button type="primary" size="medium"  @click="nextStpe('ruleForm')">下一步</el-button>
      </div>
    </div>

    <el-dialog
        title="申请须知"
        :visible.sync="centerDialogVisible"
        width="30%"
        center>
        <p>1.声明：申请人申请办理结汇业务，应符合我国法律法规和国家外汇管理规定要求，所填内容须真实、有效，手续齐备；银行将按国家规定做业务审查和反洗钱报告。事先签订协议的，同时协议的约束。</p>
        <p>2.汇率：结汇汇率均按该业务银行审批时间或事先约定的结汇价办理。</p>
        <p>3.汇入汇款关联信息：申请人可在“备注”栏位备注相关汇入款信息。但我行只根据申请人的账户余额进行核对，并不对申请人汇入款业务编号与结汇业务的关联性进行校验。</p>
        <p>4.汇款人使用我行网上银行服务应遵守与我行签署的相关服务协议的各项条款。</p>
        <p>以上条款在您提交交易申请时开始生效。</p>
        <span slot="footer" class="dialog-footer">
            <!-- <el-button @click="centerDialogVisible = false">取 消</el-button> -->
            <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>

    <div v-if="activeIndex==1">
      <title-bar title="购汇信息" class="mt56 mb35"></title-bar>
        <div  class="flex f16 lh24 divUl3">
          <ul class="u1 tar cp3 mr24">
            <li>企业名称</li>
            <li>转入外币账号</li>
            <li>转出人民币金额</li>
          </ul>
          <ul class="u2 cp1">
            <li>企业名称</li>
            <li>转入外币账号/156</li>
            <li>转出人民币金额</li>
          </ul>
          <ul class="u3 tar cp3 mr24">
            <li>转出人民币账号</li>
            <li>购汇币种</li>
            <li>转入外币金额</li>
          </ul>
          <ul class="u4 cp1">
            <li>转出人民币账号</li>
            <li>购汇币种</li>
            <li>转入外币金额</li>
          </ul>
        </div>
      <title-bar title="其他信息" class="mt56 mb35"></title-bar>
      <div class="flex f16 lh24 divUl3">
        <ul class="u1 tar cp3 mr24">
          <li>交易编码</li>
          <li>外汇局批件号/备案表号/业务编号</li>
        </ul>
        <ul class="u2 cp1">
          <li>交易编码</li>
          <li>外汇局批件号/备案表号/业务编号</li>
        </ul>
        <ul class="u3 tar cp3 mr24">
          <li>购汇种类</li>
        </ul>
        <ul class="u4 cp1">
          <li>购汇种类</li>
        </ul>
      </div>
      <div class="mtb56 tac">
        <el-button size="medium" @click="activeIndex = 0">上一步</el-button>
        <el-button size="medium" type="primary" @click="activeIndex = 2">提交</el-button>
      </div>
    </div>
    <div v-if="activeIndex==2" class="mt46">
      <auditProcess :list="list"></auditProcess>
      <div class="mt56 tac mb140">
        <el-button size="medium">完成</el-button>
        <el-button size="medium" type="primary" @click="checkDetail()">查看交易详情</el-button>
      </div>
    </div>


  </div>
</template>
<script>
  import auditProcess from "src/components/auditProcess/index.vue";

  export default {
    components: {
      auditProcess,
    },

    data() {
      return {
        activeIndex: 0,
        ruleForm: {
          radio: '0',
          payeeAccount: '',
          payeeAccount1: '',
          payeeAccount2: '',
          payeeAccount3: '',
          payeeAccount4: '',
          payeeAccount5: '',
          accType: '',
          accType1: '',
          accType2: '',
          currency: '',
          model: '',
        },
        centerDialogVisible: false,
        rules: {
          accType: [{
            required: true,
            message: "请选择转出人民币账号",
            trigger: "change",
          }],
          accType1: [{
            required: true,
            message: "请选择转入外币账号",
            trigger: "change",
          }],
          payeeAccount: [{
            trigger: 'blur',
          }],
          payeeAccount1: [{
            trigger: 'blur',
          }],
          payeeAccount2: [{
            message: '请输入转出人民币金额',
            trigger: 'blur',
            required: true,
          }],
          payeeAccount3: [{
            message: '请输入转入外币金额',
            trigger: 'blur',
            required: true,
          }],
          payeeAccount4: [{
            message: '请输入交易编码',
            trigger: 'blur',
            required: true,
          }],
          accType2: [{
            required: true,
            message: "请选择购汇种类",
            trigger: "change",
          }],
        },
        
        list: [{
            type: "finish",
            name: "王思聪",
            time: "2020-02-02 12:00:00",
          },
          {
            type: "finish",
            name: "王思聪",
            time: "2020-02-02 12:00:00",
          },
          {
            type: "tips",
            name: "王思聪",
            time: "2020-02-02 12:00:00",
          },
          {
            type: "success",
            name: "王思聪",
            time: "2020-02-02 12:00:00",
          },
          {
            type: "info",
            name: "王思聪",
            time: "2020-02-02 12:00:00",
          },
          {
            type: "errer",
            name: "王思聪",
            time: "2020-02-02 12:00:00",
            desc: "错误信息",
          },
        ],
        currencyList: [{
          label: '美元',
          value: '1',
        }, {
          label: '日元',
          value: '2',
        }, {
          label: '英镑',
          value: '3',
        }],
      }
    },
    methods: {
      limit10() {
        this.ruleForm.payeeAccount = this.ruleForm.payeeAccount.replace(/[^\d]/g, "")
      },
      // 进入交易查询页面 
      checkDetail(){
        this.$router.push('/internationalBusiness/query')
      },
      // 下一步-进入确认信息页-表单校验
      nextStpe(formName){
         this.$refs[formName].validate((valid) => {
          if (valid) {
            this.activeIndex = 1; //进入确认信息页
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    },
  }

</script>
<style lang="scss">
  .foreignExchangeRemittanceApp {
    .settItem{
      display: flex;
      .settItem_er{
          margin-left: 20px;
          .settItem_num{
              margin: 0 10px;
          }
      }
    }

    .mt22 {
      margin-top: 22px;
      margin-left: 95px;
    }

    .title {
      position: relative;
      margin-top: 60px;

      .w86 {
        width: 86px;
        height: 30px;
        font-size: 14px;
        padding: 0px;
        position: absolute;
        right: 0px;
        top: -5px;
      }

      .right102 {
        right: 102px;
        top: -5px;
      }
    }
    .block{
          position: absolute;
          display: inline-block;
      }
    .spanX {
      color: #d12222;
    }
    .beforeX {
      &::before {
        content: '*';
        color: #d12222;
        position: absolute;
        left: -10px;
        top: 2px;
      }
    }
    .mt46 {
      margin-top: 46px;
    }
    .bottomP {
        margin: 0 auto;
        width: 20%;
      span {

        color: #4367d6;
      }
    }
    .divUl1 {

      margin-left: 43px;

      .u1 {
        width: 123px;
      }

      .u2 {
        width: 300px;

      }

      .u4 {
        width: 300px;
      }

      >ul>li+li {
        margin-top: 20px;
      }

      .mt37 {
        margin-top: 37px;
      }
    }

    .divUl2 {

      margin-left: 43px;

      .u1 {
        width: 123px;
      }

      .u2 {
        width: 317px;

      }

      .u4 {
        width: 290px;
      }

      >ul>li+li {
        margin-top: 20px;
      }

      .mt37 {
        margin-top: 37px;
      }
    }

    .divUl3 {

      margin-left: 43px;

      .u1 {
        width: 123px;
      }

      .u2 {
        width: 294px;

      }

      .u3 {
        width: 136px;
      }

      .u4 {
        width: 290px;
      }

      >ul>li+li {
        margin-top: 20px;
      }

      .mt37 {
        margin-top: 37px;
      }
      .mt47 {
        margin-top: 47px;
      }
    }
    .divUl4 {

      margin-left: 43px;

      .u1 {
        width: 123px;
      }

      .u2 {
        width: 294px;

      }

      .u3 {
        width: 136px;
      }

      .u4 {
        width: 290px;
      }

      >ul>li+li {
        margin-top: 20px;
      }

      .mt37 {
        margin-top: 37px;
      }
      .mt47 {
        margin-top: 47px;
      }
    }

    .mb140 {
      margin-bottom: 140px;
    }
  }

</style>
