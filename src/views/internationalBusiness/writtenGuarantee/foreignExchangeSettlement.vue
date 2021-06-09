<template>
  <div class="foreignExchangeRemittanceApp">
    <el-steps class="mt22" :active="activeIndex" finish-status="success" process-status='process' align-center>
      <el-step title="填写信息"></el-step>
      <el-step title="确认信息"></el-step>
      <el-step title="交易结果"></el-step>
    </el-steps>

    <!-- **************************结汇信息************************** -->
    <div v-if="activeIndex == 0">
      <div class="title">
        <title-bar title="结汇信息"></title-bar>
      </div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="312px" :inline="true">
        <el-form-item prop="radio" label="结汇方式:">
            <el-radio-group v-model="ruleForm.radio">
                <el-radio label="0">自主结汇</el-radio>
                <el-radio label="1">
                    挂单结汇 
                </el-radio>
                <el-tooltip placement="top">
                    <div slot="content">挂单结汇:<br/>按意愿结汇价格进行委托,当市场价格触碰到委托价格后,系统便可自动进行成交</div>
                    <img class='block' src="../../../images/internationalBusiness/icon_tip.png">
                </el-tooltip>
            </el-radio-group>
        </el-form-item>
        <!-- 自主结汇 -->
        <div v-if="ruleForm.radio == '0'">
            <el-form-item prop="payeeAccount" label="企业名称:">
                <el-input v-model="ruleForm.payeeAccount" @input="limit10()" maxlength="50"
                    class="payeeAccount w578" placeholder="请输入" :disabled="true">
                </el-input>
            </el-form-item>
            <el-form-item label="转出账号:" prop="accType">
                <el-select
                    v-model="ruleForm.accType"
                    v-support
                    placeholder="请选择转出账号"
                >
                    <el-option value="0" label="个人支付账户"></el-option>
                    <el-option value="1" label="单位支付账户"></el-option>
                    <el-option value="2" label="备付金账号"></el-option>
                </el-select>
            <div class="f14 mt12" v-if="ruleForm.accType">
                <p>
                    可用余额：
                    <span class="money"
                    >{{
                    <!-- formatMoney -->
                    1111 }}元</span
                    >
                </p>
            </div>
            </el-form-item>
            <el-form-item prop="payeeAccount1" label="结汇币种:">
                <div  class="settItem">
                    <el-input v-model="ruleForm.payeeAccount1" @input="limit10()" maxlength="50"
                        class="payeeAccount w578" placeholder="请输入"  :disabled="true">
                    </el-input>
                    <div class="settItem_er">
                    <p>
                        参考牌价:
                        <span class="settItem_num"> -- </span>
                        <el-button type="text" @click="checkPrice()">查看牌价</el-button>
                    </p>
                    </div>
                </div>
            </el-form-item>
            <el-form-item prop="payeeAccount2" label="结汇金额:" :rules="ruleForm.payeeAccount3 ? [{required:false}] : [{required: true, message: '请输入结汇金额', trigger: 'blur'}]">
                <el-input v-model="ruleForm.payeeAccount2" @input="limit10()" maxlength="50"
                    class="payeeAccount w578" placeholder="请输入" >
                </el-input>
            </el-form-item>
            <el-form-item label="转入账号:" prop="accType1">
                <el-select
                    v-model="ruleForm.accType1"
                    v-support
                    placeholder="请选择转入账号"
                >
                <el-option value="0" label="个人支付账户"></el-option>
                <el-option value="1" label="单位支付账户"></el-option>
                <el-option value="2" label="备付金账号"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item prop="payeeAccount3" label="转入人民币金额:" :rules="ruleForm.payeeAccount2 ? [{required:false}] : [{required: true, message: '请输入转入人民币金额', trigger: 'blur'}]">
                <el-input v-model="ruleForm.payeeAccount3" @input="limit10()" maxlength="50"
                    class="payeeAccount w578" placeholder="请输入" >
                </el-input>
            </el-form-item>
        </div>
        <!-- 挂单结汇 -->
        <div v-if="ruleForm.radio == '1'">
            <el-form-item prop="payeeAccount" label="企业名称:">
                <el-input v-model="ruleForm.payeeAccount" @input="limit10()" maxlength="50"
                    class="payeeAccount w578" placeholder="请输入" :disabled="true">
                </el-input>
            </el-form-item>
            <el-form-item label="转出账号:" prop="accType">
                <el-select
                    v-model="ruleForm.accType"
                    v-support
                    placeholder="请选择转出账号"
                >
                    <el-option value="0" label="个人支付账户"></el-option>
                    <el-option value="1" label="单位支付账户"></el-option>
                    <el-option value="2" label="备付金账号"></el-option>
                </el-select>
            <div class="f14 mt12">
                <p>
                    可用余额：
                    <span class="money"
                    >{{ 1111 }}元</span
                    >
                </p>
            </div>
            </el-form-item>
            <el-form-item prop="payeeAccount1" label="结汇币种:">
                <div  class="settItem">
                    <el-input v-model="ruleForm.payeeAccount1" @input="limit10()" maxlength="50"
                        class="payeeAccount w578" placeholder="请输入"  :disabled="true">
                    </el-input>
                    <div class="settItem_er">
                    <p>
                        参考牌价:
                        <span class="settItem_num"> 0.6 </span>
                        <el-button type="text" @click="checkPrice()">查看牌价</el-button>
                    </p>
                    </div>
                </div>
            </el-form-item>
            <el-form-item prop="payeeAccount6" label="挂单汇率:">
                <el-input v-model="ruleForm.payeeAccount6" @input="limit10()" maxlength="50"
                    class="payeeAccount w578" placeholder="请输入" >
                </el-input>
            </el-form-item>
            <el-form-item label="挂单结束时间:" prop="time">
                <el-date-picker
                v-model="ruleForm.time"
                type="date"
                placeholder="请选择"
                >
                </el-date-picker>
            </el-form-item>
            <el-form-item prop="payeeAccount2" label="结汇金额:"  :rules="ruleForm.payeeAccount3 ? [{required:false}] : [{required: true, message: '请输入结汇金额', trigger: 'blur'}]">
                <el-input v-model="ruleForm.payeeAccount2" @input="limit10()" maxlength="50"
                    class="payeeAccount w578" placeholder="请输入" >
                </el-input>
            </el-form-item>
            <el-form-item label="转入账号:" prop="accType1">
                <el-select
                    v-model="ruleForm.accType1"
                    v-support
                    placeholder="请选择转入账号"
                >
                <el-option value="0" label="个人支付账户"></el-option>
                <el-option value="1" label="单位支付账户"></el-option>
                <el-option value="2" label="备付金账号"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item prop="payeeAccount3" label="转入人民币金额:"  :rules="ruleForm.payeeAccount2 ? [{required:false}] : [{required: true, message: '请输入转入人民币金额', trigger: 'blur'}]">
                <el-input v-model="ruleForm.payeeAccount3" @input="limit10()" maxlength="50"
                    class="payeeAccount w578" placeholder="请输入" >
                </el-input>
            </el-form-item>
        </div>

        
        <!-- **************************其他信息************************** -->
        <title-bar title="其他信息" class="mt46"></title-bar>
        <div>
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
            <el-form-item label="结汇种类:" prop="accType2">
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
            <el-form-item label="结汇用途:" prop="accType3">
                <el-select
                    v-model="ruleForm.accType3"
                    v-support
                    placeholder="请选择"
                >
                <el-option value="0" label="个人支付账户"></el-option>
                <el-option value="1" label="单位支付账户"></el-option>
                <el-option value="2" label="备付金账号"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item prop="payeeAccount7" label="结汇详细用途:">
                <el-input 
                    v-model="ruleForm.payeeAccount7" 
                    @input="limit10()" 
                    maxlength="120"
                    show-word-limit
                    class="payeeAccount w578" 
                    placeholder="请输入"
                >
                </el-input>
            </el-form-item>
        </div>     
      </el-form>
      <p class="bottomP mt25">请阅读<el-button type="text" @click="centerDialogVisible = true">《申请须知》</el-button></p>
      <div class="tac mtb56">
        <el-button size="medium" v-if="ruleForm.radio == '0'">暂存</el-button>
        <el-button type="primary" size="medium" @click="nextStpe('ruleForm')">下一步</el-button>
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

    <!-- 确认信息 -->
    <div v-if="activeIndex == 1">
      <title-bar title="结汇信息" class="mt56 mb35"></title-bar>
      <!-- 确认信息-自主结汇 -->
      <div v-if="ruleForm.radio == '0'" class="flex f16 lh24 divUl1">
        <ul class="u1 tar cp3 mr24">
          <li>结汇方式</li>
          <li>转出账号</li>
          <li>结汇金额</li>
          <li>转入人民币金额</li>
        </ul>
        <ul class="u2 cp1">
          <li>自主结汇</li>
          <li>转出账号/156</li>
          <li>结汇金额/156</li>
          <li>转入人民币金额</li>
        </ul>
        <ul class="u3 tar cp3 mr24">
          <li>企业名称</li>
          <li>结汇币种</li>
          <li>转入账号</li>
        </ul>
        <ul class="u4 cp1">
          <li>企业名称</li>
          <li>结汇币种</li>
          <li>转入账号</li>
        </ul>
      </div>
      <!-- 确认信息-挂单结汇 -->
      <div v-if="ruleForm.radio == '1'" class="flex f16 lh24 divUl4">
        <ul class="u1 tar cp3 mr24">
          <li>结汇方式</li>
          <li>转出账号</li>
          <li>挂单汇率</li>
          <li>结汇金额</li>
          <li>转入人民币金额</li>
        </ul>
        <ul class="u2 cp1">
          <li>结汇方式</li>
          <li>转出账号</li>
          <li>挂单汇率</li>
          <li>结汇金额</li>
          <li>转入人民币金额</li>
        </ul>
        <ul class="u3 tar cp3 mr24">
         <li>企业名称</li>
          <li>结汇币种</li>
          <li>挂单结束时间</li>
          <li>转入账号</li>
        </ul>
        <ul class="u4 cp1">
          <li>企业名称</li>
          <li>结汇币种</li>
          <li>挂单结束时间</li>
          <li>转入账号</li>
        </ul>
      </div>
      <title-bar title="其他信息" class="mt56 mb35"></title-bar>
      <div class="flex f16 lh24 divUl3">
        <ul class="u1 tar cp3 mr24">
          <li>交易编码</li>
          <li>结汇用途</li>
          <li>外汇局批件号/备案表号/业务编号</li>
        </ul>
        <ul class="u2 cp1">
          <li>交易编码</li>
          <li>结汇用途</li>
          <li>外汇局批件号/备案表号/业务编号</li>
        </ul>
        <ul class="u3 tar cp3 mr24">
          <li>结汇种类</li>
          <li>结汇详细用途</li>
        </ul>
        <ul class="u4 cp1">
          <li>结汇种类</li>
          <li>结汇详细用途</li>
        </ul>
      </div>
      <div class="mtb56 tac">
        <el-button size="medium" @click="activeIndex = 0">上一步</el-button>
        <el-button size="medium" type="primary" @click="activeIndex = 2">提交</el-button>
      </div>
    </div>

    <div v-if="activeIndex == 2" class="mt46">
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
      var validatePassContent = (rule, value, callback) => {
        if (Number(this.ruleForm.payeeAccount6) > 0.6) {
            callback();
        } else {
          if (this.ruleForm.payeeAccount6 == '') {
              callback(new Error('请输入挂单汇率'));
          } else {
              callback(new Error('挂单汇率必须大于参考汇率，请重新输入'));
          }
        }
      };
      return {
        activeIndex: 0,
        ruleForm: {
        //自主结汇
          radio: '0',
          payeeAccount: '',
          payeeAccount1: '',
          payeeAccount2: '',
          payeeAccount3: '',
          payeeAccount4: '',
          payeeAccount5: '',
          payeeAccount7: '',
          accType: '',
          accType1: '',
          accType2: '',
          accType3: '',
        //挂单结汇
          payeeAccount: '',
          payeeAccount1: '',
          payeeAccount2: '',
          payeeAccount3: '',
          payeeAccount4: '',
          payeeAccount5: '',
          payeeAccount6: '',
          payeeAccount7: '',
          accType: '',
          accType1: '',
          accType2: '',
          accType3: '',
          time: '',

          currency: '',
          model: '',
        },
        centerDialogVisible: false,
        rules: {
          radio: [{
            // validator: validatePass,
            trigger: 'blur',
            required: true,
          }],
          accType: [{
            required: true,
            message: "请选择转出账号",
            trigger: "change",
          }],
          accType1: [{
            required: true,
            message: "请选择转入账号",
            trigger: "change",
          }],
          accType2: [{
            required: true,
            message: "请选择结汇种类",
            trigger: "change",
          }],
          accType3: [{
            required: true,
            message: "请选择结汇用途",
            trigger: "change",
          }],
          payeeAccount: [{
            trigger: 'blur',
          }],
          payeeAccount1: [{
            trigger: 'blur',
          }],
          payeeAccount2: [{
            message: '请输入结汇金额',
            trigger: 'blur',
            required: true,
          }],
          payeeAccount3: [{
            message: '请输入转入人民币金额',
            trigger: 'blur',
            required: true,
          }],
          payeeAccount4: [{
            message: '请输入交易编码',
            trigger: 'blur',
            required: true,
          }],
          payeeAccount5: [{
            trigger: 'blur',
          }],
          payeeAccount6: [{
            trigger: 'blur',
            required: true,
            validator: validatePassContent
          }],
          time: [{
            message: '请选择挂单结束时间',
            trigger: 'blur',
            required: true,
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
      // 进入牌价查询页面 
      checkPrice(){
        this.$router.push('/internationalBusiness/forexListPrice/forexListPrice')
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
