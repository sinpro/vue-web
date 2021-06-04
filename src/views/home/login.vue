<template>
  <div class="login">
    <el-row>
      <el-col :span="8"><div class="grid-content bg-purple">&nbsp;</div></el-col>
      <el-col :span="8">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="账号" prop="account">
            <el-input type="text" v-model="ruleForm.account" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="8"><div class="grid-content bg-purple">&nbsp;</div></el-col>
    </el-row>
  </div>
</template>
<script>
import api  from 'src/apis/common';
export default {
  name:"Login",
  data(){
    var validateAccount = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        account:'',
        pass: '',
        checkPass: '',
      },
      rules: {
        account: [
          { validator: validateAccount, trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
      }
    }
  },
  components:{

  },
  mounted(){
    // console.log(api.loginApi,'api')
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loginSub(this.ruleForm);
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    loginSub(data){
      const params = {
        account:data.account,
        pass:data.pass, // 密码
        checkPass:data.checkPass,// 确认密码
      };
      api.loginApi(params).then(
          ({ data = {}, errorCode = '', errorMessage = '响应失败' }) => {
            if (errorCode === '000000') {
              console.log(data,666)
              this.$router.push('/home')
            } else {
              this.$message.error(errorMessage);
            }
          }
      );
    },
  }
}
</script>
<style lang="scss" scoped>
.login{
  padding-top:10%;
}
</style>
