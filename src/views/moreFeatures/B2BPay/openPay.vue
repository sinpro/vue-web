<template>
  <div class="openPay">
    <title-bar v-if="B2BOpenManage.isFix=='0'" title="网上支付开通"></title-bar>
    <title-bar v-else title="网上支付管理"></title-bar>
    <div class="ulClass">
      <ul class="ul1 cp3 f16 lh16 tar">
        <li>签约账号</li>
        <li>账户所属机构</li>
        <li v-if="B2BOpenManage.isFix=='1'">开通操作员编号</li>
      </ul>
      <ul class="ul2 cp1 f16 lh16">
        <li>8888 0009 9900 2122 ｜别名</li>
        <li>机构名称机构名称机构名称</li>
        <li v-if="B2BOpenManage.isFix=='1'">001</li>
      </ul>
      <ul class="ul3 cp3 f16 lh16 tar">
        <li>账户名称</li>
        <li v-if="B2BOpenManage.isFix=='1'">开通时间</li>
        <li v-if="B2BOpenManage.isFix=='1'">开通操作员姓名</li>
      </ul>
      <ul class="ul4 cp1 f16 lh16">
        <li>成都运用</li>
        <li v-if="B2BOpenManage.isFix=='1'">2020-12-09  10:22:33</li>
        <li v-if="B2BOpenManage.isFix=='1'">张三</li>
      </ul>
    </div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="312px">
      <el-form-item label="单笔支付限额(元):" hide-required-asterisk prop="moneyArea1">
        <el-input v-model="ruleForm.money1" class="moneyArea" @input="changeMoney" @blur="blurCheck"
          :placeholder="topMoney1" maxlength="22">
        </el-input>
      </el-form-item>
      <el-form-item label="日累计支付限额(元):" hide-required-asterisk prop="moneyArea2">
        <el-input v-model="ruleForm.money2" class="moneyArea" @input="changeMoney2" @blur="blurCheck2"
          :placeholder="topMoney2" maxlength="22">
        </el-input>
      </el-form-item>
      <el-form-item v-if="B2BOpenManage.isFix=='0'" class="agreementClass">
        <el-checkbox-group v-model="checkbox" class="agreementClass1">
          <el-checkbox label="" name="type"></el-checkbox>
          <div class="f14 lh14 cp2 agreementClass2">
            请阅读<span @click="dialogVisibleb=true">《企业客户网上支付业务服务协议》</span>
          </div>
        </el-checkbox-group>
      </el-form-item>
    </el-form>
    <div class="tac buttonClass">
      <el-button @click.native="goBack">取消</el-button>
      <el-button type="primary" @click.native="submit">提交</el-button>
    </div>

    <el-dialog title="企业客户网上支付业务服务协议" :visible.sync="dialogVisibleb" size="medium" text :show-close="false">
      <div class="detailDiaClass">
        企业客户网上支付业务服务协议内容企业客户网上支付业务服务协议内容企业客户网上支付业务服务协议内容企业客户网上支付业务服务协议内容企业客户网上支付业务服务协议内容企业客户网上支付业务服务协议内容企业客户网上支付业务服务协议内容企业客户网上支付业务服务协议内容企业客户网上支付业务服务协议内容企业客户网上支付业务服务协议内容企业客户网上支付业务服务协议内容企业客户网上支付业务服务协议内容企业客户网上支付业务服务协议内容企业客户网上支付业务服务协议内容企业客户网上支付业务服务协议内容企业客户网上支付业务服务协议内容企业客户网上支付业务服务协议内容企业客户网上支付业务服务协议内容企业客户网上支付业务服务协议内容企业客户网上支付业务服务协议内容企业客户网上支付业务服务协议内容企业客户网上支付业务服务协议内容企业客户网上支付业务服务协议内容企业客户网上支付业务服务协议内容企业客户网上支付业务服务协议内容企业客户网上支付业务服务协议内容企业客户网上支付业务服务协议内容企业客户网上支付业务服务协议内容企业客户网上支付业务服内容企业客户网上支付业务服务协议内容企业客户网上支付业务服务协议内容企业客户网上支务服务协议内容企业客户网上支付业务服务协议内容企业客户网上支付业务服务协议内容。
      </div>
      <div class="tac mtb24">

        <el-button type="primary" @click.native="dialogVisibleb=false">确定</el-button>
      </div>
    </el-dialog>




  </div>
</template>

<script>
  import mathTools from '@src/assets/utils/mathTools.js'

  export default {
    data() {
      // *************去除三分符、el-input自定义校验**************
      var validatePass = (rule, value, callback) => {
        if (!this.ruleForm.money1) {
          callback(new Error('单笔支付限额不能为空'));
        } else if (Number(this.ruleForm.money1.replace(/,/g, "")) > Number(this.ruleForm.money2.replace(/,/g, ""))) {
          callback(new Error('单笔支付限额不可大于日累计支付限额'));
        } else if (Number(this.ruleForm.money1.replace(/,/g, "") > this.topMoney1)) {
          callback(new Error('单笔限额不可大于该账户的单笔限额'));
        } else {
          callback();
        };
      }
      var validatePass2 = (rule, value, callback) => {
        if (!this.ruleForm.money2) {
          callback(new Error('日累计支付限额不能为空'));
        } else if (Number(this.ruleForm.money1.replace(/,/g, "")) > Number(this.ruleForm.money2.replace(/,/g,
            ""))) {
          callback(new Error('单笔支付限额不可大于日累计支付限额'));
        } else if (Number(this.ruleForm.money2.replace(/,/g, "") > this.topMoney2)) {
          callback(new Error('日累计限额不可大于该账户的日累计限额'));
        } else {
          callback();
        }
      };

      return {
        topMoney1: 5000000, //单笔支付限额，接口获取
        topMoney2: 10000000, //日累计支付限额，接口获取
        checkbox: false, //同意协议

        dialogVisibleb: false,
        ruleForm: {
          account: '',
          billAccount: '',
          accName: '',
          limit: '查询',
          value1: '2015-10-02',
          money1: '',
          money2: '',
          isOpenOrFix: '0', //新增0，修改1
        },
        B2BOpenManage:'',
        rules: {
          moneyArea1: [{
            validator: validatePass,
            trigger: 'blur'
          }],
          moneyArea2: [{
            validator: validatePass2,
            trigger: 'blur'
          }],
        },
      }
    },
    methods: {
      blurCheck() {
        this.$refs.ruleForm.validateField('moneyArea2');
      },
      blurCheck2() {
        console.log(123123)
        this.$refs.ruleForm.validateField('moneyArea1');
      },
      changeMoney(val) {
        this.ruleForm.money1 = mathTools.moneyCheck(val)
      },
      changeMoney2(val) {
        this.ruleForm.money2 = mathTools.moneyCheck(val)
      },
      submit() {
        if (!this.checkbox && this.B2BOpenManage.isFix=='0') {
          this.$confirm('您必须同意协议才可以开通网上支付业务', '提示', {
            confirmButtonText: '确定',
            type: 'warning',
            center: true,
            showCancelButton: false,
          });

        } else {
          this.$refs['ruleForm'].validate((valid) => {
            if (valid) {
              window.sessionStorage.setItem('B2BRuleForm', JSON.stringify(this.ruleForm))
              this.$router.push('/more/B2BPay/openPayManage/openResult')
            } else {
              return false;
            }
          });
        }
      },
      goBack(){
          this.$router.go(-1)
      }
    },
    mounted(){
        this.B2BOpenManage=JSON.parse(window.sessionStorage.getItem('B2BOpenManage'))
    }
  }

</script>

<style lang="scss">
  .openPay {
    .ulClass {
      display: flex;
      margin-top: 35px;
      margin-bottom: 56px;

      >ul>li {
        list-style: none;
      }

      >ul>li+li {
        margin-top: 24px;
      }

      >.ul1,
      .ul3 {
        margin-right: 20px;
      }

      .ul2 {
        width: 300px;
        margin-right: 81px;
      }

      .ul1 {
        margin-left: 68px;
      }
    }

    .agreementClass1 {
      margin-top: -24px;
    }

    .agreementClass1 {
      position: relative;
    }

    .agreementClass2 {
      position: absolute;
      top: 14px;
      left: 22px;

      >span {
        color: #4367d6;
        cursor: pointer;
      }
    }

    .buttonClass {
      margin-top: 56px;
      margin-bottom: 153px;
    }

    .mtb24 {
      margin-top: 24px;
      margin-bottom: 24px;
    }

    .detailDiaClass {
      text-indent: 2em;
    }
  }

</style>
