<template>
  <div class="addAccount">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick('first')">
      <el-tab-pane label="本行账户" name="first">
        <div class="tac mt50">
          <el-steps class="inline-block" :active="step" finish-status="success" align-center>
            <el-step title="填写信息"></el-step>
            <el-step title="确认信息"></el-step>
            <el-step title="交易结果"></el-step>
          </el-steps>
        </div>
        <div v-if="this.step===0">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="312px" class="mt50 mb60">
            <el-form-item label="账号:" prop="account">
              <el-input v-model="ruleForm.account" maxlength="37" @input="accValidat"></el-input>
            </el-form-item>
          </el-form>
          <div class="tac mb224">
            <el-button type="primary" @click="submitForm('ruleForm')">下一步</el-button>
          </div>
        </div>
        <div v-if="this.step===1">
          <el-tabs v-model="activeName" @tab-click="handleClick('second')">
            <el-tab-pane label="账户信息" name="first">

              <div class="infoCard">
                <span class="bar bgg f14 lh14 cf">
                  <span>账户类型：</span>
                  <span>一般户</span>
                  <!-- <span>单位结算卡</span> -->
                </span>
                <div class="flex botHalf mt20">
                  <ul class="tar f16 lh16 cp3">
                    <li>账号</li>
                    <li>户名</li>
                    <!-- <li>持卡人</li> -->
                    <li>开户机构</li>
                  </ul>
                  <ul class="f16 lh16 cp1">
                    <li>6225 8765 8374 8374 125</li>
                    <li>北京师范大学学前教育部</li>
                    <!-- <li>*三</li> -->
                    <li>四川农信阿坝藏族羌族自治州马尔康市街心花园支行</li>
                  </ul>
                </div>
              </div>




              <div class="tac">
                <el-button size="medium" @click.native="step = 0">上一步</el-button>
                <el-button size="medium" type="primary" @click="submitForm('ruleForm')">提交</el-button>
              </div>

              <!-- ************温馨提示*********** -->
              <div class="wPro mtb20">
                <p>温馨提示：</p>
                <p>仅能添加本企业账户，添加成功后，仅可查询该账户余额、明细，不可用于支付。若需开通支付权限，请至该账户开户机构柜面办理。</p>
              </div>

            </el-tab-pane>
          </el-tabs>
        </div>
      </el-tab-pane>
      <!-- ************添加------他行账户*********** -->
      <el-tab-pane label="他行账户" name="second">
        <div class="tac mt50">
          <el-steps class="inline-block" :active="step" finish-status="success" align-center>
            <el-step title="填写信息"></el-step>
            <el-step title="确认信息"></el-step>
            <el-step title="交易结果"></el-step>
          </el-steps>
        </div>
        <div v-if="this.step===0">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="312px" class="mt50 mb60">
            <el-form-item label="账号:" prop="account">
              <el-input v-model="ruleForm.account" maxlength="36" @input="accValidat"></el-input>
            </el-form-item>
            <el-form-item label="户名:" prop="accName">
              <el-input v-model="ruleForm.accName" maxlength="50"></el-input>
            </el-form-item>
            <el-form-item label="权限" prop="limit">
              <el-radio-group v-model="ruleForm.limit">
                <el-radio label="查询"></el-radio>
                <el-radio label="支付"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-form>
          <div class="tac mb68">
            <el-button type="primary" @click="submitForm('ruleForm')">下一步</el-button>
          </div>
          <!-- ************温馨提示*********** -->
          <div class="wPro mtb20">
            <p>温馨提示：</p>
            <p>1.取得他行账户查询授权后，可通过四川农信企业网银查询签约的他行账户余额和明细。</p>
            <p>2.取得他行账户支付授权后，可通过四川农信企业网银将您的他行账户资金转出，而无需使用您本人在他行的交易密码或Ukey认证，支付限额以在他行签
              约的为准。</p>
            <p>3.查询权限和支付权限需分别签约，其中一个权限签约成功后，可以继续签约另外一个权限，或者通过账户管理>账户查询>他行账户页面，选择对应的账户进入详情页面新增签约或解约。</p>
          </div>
        </div>
        <div v-if="this.step===1">
          <el-tabs v-model="activeName" @tab-click="handleClick('second')">
            <el-tab-pane label="账户信息" name="second">
              <div class="infoCard">
                <span class="bar bgg f14 lh14 cf">
                  <span>权限：</span>
                  <span>支付</span>
                </span>
                <div class="flex botHalf mt20">
                  <ul class="tar f16 lh16 cp3">
                    <li>账号</li>
                    <li>户名</li>
                    <li>开户机构</li>
                  </ul>
                  <ul class="f16 lh16 cp1">
                    <li>6225 8765 8374 8374 125</li>
                    <li>北京师范大学学前教育部</li>
                    <li>四川农信阿坝藏族羌族自治州马尔康市街心花园支行</li>
                  </ul>
                </div>
              </div>
              <div class="tac mb130">
                <el-button size="medium" @click.native="step = 0">上一步</el-button>
                <el-button size="medium" type="primary" @click="submitForm2('ruleForm')">提交</el-button>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        // console.log(this.ruleForm.account.replace(/ /g, ""))
        // console.log(1111111, value)
        //调用接口，同步
        //(接口)
        let jiekou = true
        if (!value) {
          callback(new Error('请输入正确的账号'));
        } else {
          callback();
        }
      };
      return {
        activeName: 'first',
        step: 0,
        ruleForm: {
          account: '',
          accName: '',
          limit: '查询',
        },
        rules: {
          account: [{
            required: true,
            validator: validatePass,
            trigger: 'blur'
          }],
          accName: [{
            required: true,
            message: "请输入户名",
            trigger: 'blur'
          }],
          limit: [{
            required: true,
            message: "请选择权限",
            trigger: 'blur'
          }],
        },
        tableInfo: {
          account: '12312312344',
          accName: '北京易诚互动',
          accType: '一般户',
          accOrgan: '简阳农商银行',
          cardHost: '张三',
          limit: '查询',
        },
        cardType: '结算卡',
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validateField('account', (message) => {
          //   console.log(1000, message)
          if (!message) {
            this.step = 1;
            this.active = 1;
          }
        });
      },
      submitForm2(formName) {
        let fieldvalidate = false;
        let allvalidate = false;
        this.$refs[formName].validateField('account', (message) => {
          //   console.log(1000, message)
          if (!message) {
            fieldvalidate = true;
          }
        });
        this.$refs[formName].validate((valid) => {
          if (valid) {
            allvalidate = true;
          } else {
            return false;
          }
        });
        if (fieldvalidate === true && allvalidate === true) {
          this.step = 1;
          this.active = 1;
        }
      },
      accValidat() {
        this.ruleForm.account = this.moneyCheck(this.ruleForm.account);
      },
      moneyCheck(val) { //账号4位空格格式转换
        let value = val.replace(/[^\d.]/g, "")
          .replace(/^0\d+|^\./g, "")
          .replace(/\./g, "")
          .replace(/^(\d+)\.(\d\d).*$/, "$1.$2")
          .replace(/(\d{4})/g, '$1 ').trim()
        return value
      },
      handleClick(val) {
        this.step = 0;
        this.active = 0;
        this.activeName = val;
      },
    },

  }

</script>
<style lang="scss">
  .addAccount {

    .mb224 {
      margin-bottom: 224px;
    }

    .mb68 {
      margin-bottom: 68px;
    }

    .mb130 {
      margin-bottom: 130px;
    }

    .infoCard {
      width: 600px;
      box-shadow: 0px 2px 9px 0px #0000001a;
      border-radius: 4px;
      margin: 0 auto;
      margin-top: 35px;
      margin-bottom: 56px;
      box-sizing: border-box;

      .bar {
        display: inline-block;
        border-radius: 4px 0px 4px 0px;
        padding: 7px 16px;

      }

      .botHalf {
        margin-bottom: 33px;
        padding-left: 24px;
        padding-bottom: 33px;

        >ul {
          list-style: none;

          >li+li {
            margin-top: 23px;
          }
        }

        >ul+ul {
          margin-left: 24px;
        }
      }
    }
  }

</style>
