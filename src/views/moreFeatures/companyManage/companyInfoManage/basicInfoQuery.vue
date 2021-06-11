<template>
  <div class="basicInfoQuery">
    <div class="flex f16 lh16 ulClass">
      <ul class="ul1 tar cp3">
        <li>企业名称</li>
        <li>企业证件类型</li>
        <li>企业地址</li>
        <li>联系电话</li>
      </ul>
      <ul class="ul2 cp1">
        <li>北京易诚互动</li>
        <li>企业机构统一代码</li>
        <li>北京**********</li>
        <li>078******** </li>
      </ul>
      <ul class="ul3 tar cp3">
        <li>企业客户号</li>
        <li>企业证件号码</li>
        <li>开户时间</li>
      </ul>
      <ul class="ul4 cp1">
        <li>123212312312743</li>
        <li>G16***********</li>
        <li>2020-10-10 12:21:19</li>
      </ul>
    </div>
    <div class="tac">
      <el-button type="primary mtb56" @click.native="dialogVisible=true">查看完整信息</el-button>
    </div>
    <title-bar title="集团信息"></title-bar>
    <div class="flex f16 lh16 ulClass2">
      <ul class="ul1 tar cp3">
        <li>集团名称</li>
      </ul>
      <ul class="ul2 cp1">
        <li>华润万家集团</li>
      </ul>
      <ul class="ul3 tar cp3">
        <li>集团编码</li>
      </ul>
      <ul class="ul4 cp1">
        <li>S327842846283468</li>
      </ul>
    </div>
    <el-dialog title="短信验证" :visible.sync="dialogVisible" width="452px" class="dialog" :show-close="false">
      <p class="f16 cp1 phoneNum">
        <span>手机号码：</span>
        <span>183 **** 8989</span>
      </p>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="form">
        <el-form-item label="短信验证码:" prop="phoneCode" class="phoneCode">
          <el-input v-model="ruleForm.phoneCode" class="phoneCodeinp"
            onkeyup="this.value=this.value.replace(/[^\d]/g,'')" placeholder="请输入" maxlength="6"></el-input>

          <el-button v-show="timer==true" size="mini" class="btn" @click.native="getCode">获取验证码</el-button>
          <el-button v-show="timer==false" size="mini" class="btn" @click.native="getCode" :disabled="true">{{codeNum+'S'}}</el-button>
        </el-form-item>
      </el-form>
      <div class="tac mtb25">
        <el-button size="small" @click="dialogVisible = false">取 消</el-button>
        <el-button size="small" type="primary" @click="submit">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>
<script>
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (!this.ruleForm.phoneCode) {
          callback(new Error('请输入短信验证码'));
        }  else if (this.aaa==false) {//后台校验验证码是否正确
          callback(new Error('验证码错误，请重新输入'));
        } else {
          callback();
        };
      }
      return {
        dialogVisible: false,
        aaa: false,
        ruleForm: {
          phoneCode: '',
        },
        codeNum: 60,
        timer:true,
        rules: {
          phoneCode: [{
            required: true,
            validator: validatePass,
            trigger: 'blur'
          }],
        },
      }
    },
    methods: {
      getCode() {
        let that = this;
        if (this.timer == true) {
          this.timer = false;
          let interval=window.setInterval(() => {
              that.codeNum--;
            if(that.codeNum==0){
                this.timer = true;
                clearInterval(interval);
                that.codeNum=60;
            }
          }, 1000);
        }
      },
      submit(){
          this.$refs['ruleForm'].validate((valid) => {
            if (valid) {
                this.dialogVisible = false
            } else {
              return false;
            }
          });
      }
    },
  }

</script>
<style lang="scss">
  .basicInfoQuery {
    .ulClass {
      margin-left: 66px;
      margin-top: 34px;

      >ul>li {
        list-style: none;
      }

      >ul>li+li {
        margin-top: 24px;
      }

      .ul1,
      .ul3 {
        margin-right: 20px;
      }

      .ul2 {
        width: 347px;
      }
    }

    .ulClass2 {
      margin-left: 98px;
      margin-top: 34px;

      >ul>li {
        list-style: none;
      }

      >ul>li+li {
        margin-top: 24px;
      }

      .ul1,
      .ul3 {
        margin-right: 20px;
      }

      .ul2 {
        width: 383px;
      }

      margin-bottom: 114px;
    }

    .el-dialog__header {
      text-align: center;
    }

    .dialog {
      .phoneNum {
        margin-left: 24px;
      }

      .phoneCode {
        .phoneCodeinp {

          width: 182px;
        }

        position: relative;

        .btn {
          position: absolute;
          right: -2px;
          width: 86px;
          font-size: 14px;
          padding-left: 8px;
          height: 40px;
        }
      }

      .form {
        margin-top: 20px;

      }

      .el-dialog {
        border-radius: 4px;
      }
      .el-form-item__error{

          margin-left: 100px;
      }
    }
  }

</style>
