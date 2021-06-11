<template>
  <div class="authorizationManage">
    <title-bar title="修改操作员权限"></title-bar>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="315px">


      <el-form-item label="操作员编号:" class="compNameClass">
        <el-input v-model="ruleForm.name" disabled></el-input>
      </el-form-item>
      <el-form-item label="操作员姓名:" class="compNameClass">
        <el-input v-model="ruleForm.name" disabled></el-input>
      </el-form-item>


      <el-form-item class="marginL24" label="操作权限:">
        <el-checkbox-group v-model="ruleForm.resource">
          <el-checkbox label="录入" name="resource"></el-checkbox>
          <el-checkbox label="授权" name="resource"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item v-if="ruleForm.resource!=''" label="授权级别:" prop="type">
        <el-select v-model="ruleForm.type" placeholder="请选择">
          <el-option label="1级" value="1"></el-option>
          <el-option label="2级" value="2"></el-option>
          <el-option label="3级" value="3"></el-option>
          <el-option label="4级" value="4"></el-option>
          <el-option label="5级" value="5"></el-option>
        </el-select>
      </el-form-item>


      <el-form-item label="单笔限额(元):" prop="moneyArea1">
        <el-input v-model="ruleForm.moneyArea1" @input="changeMoney1" @blur="moneyArea" placeholder="请输入"
          maxlength="23">
        </el-input>
      </el-form-item>
      <el-form-item label="日累计限额(元):" prop="moneyArea2">
        <el-input v-model="ruleForm.moneyArea2" @input="changeMoney2" @blur="moneyArea" placeholder="请输入"
          maxlength="23">
        </el-input>
      </el-form-item>
      <el-form-item label="日累计笔数:" prop="num">
        <el-input v-model="ruleForm.num" @input="onlyNumber"  placeholder="请输入"
          maxlength="10">
        </el-input>
      </el-form-item>
      <el-form-item label="年累计限额(元):" prop="moneyArea3">
        <el-input v-model="ruleForm.moneyArea3" @input="changeMoney3" @blur="moneyArea" placeholder="请输入"
          maxlength="23">
        </el-input>
      </el-form-item>




    </el-form>
    <div class="tac mt55 mb100">
      <el-button size="medium" @click.native="goBack">返回</el-button>
      <el-button size="medium" type="primary" @click.native="submit">提交</el-button>
    </div>
  </div>
</template>
<script>
  import mathTools from 'utils/mathTools.js'

  export default {
    data() {
      return {
        control: true,//修复输入框无线弹出校验失败弹框的bug
        subControl: false,//提交时判断所有输入框是否校验完成
        ruleForm: {
          resource: [],
          type: '1',
          num: '',
          moneyArea1: '',
          moneyArea2: '',
          moneyArea3: '',
        },
        rules: {
          moneyArea1: [{
            required: true,
            message: '请输入单笔限额',
            trigger: 'blur'
          }],
          moneyArea2: [{
            required: true,
            message: '请输入日累计限额',
            trigger: 'blur'
          }],
          moneyArea3: [{
            required: true,
            message: '请输入年累计限额',
            trigger: 'blur'
          }],
          num: [{
            required: true,
            message: '请输入日累计笔数',
            trigger: 'blur'
          }],
          type: [{
            required: true,
            message: '请选择授权级别',
            trigger: 'change'
          }],
        },
      };
    },
    methods: {
        goBack(){
            this.$router.go(-1)
        },
        onlyNumber(){
            this.ruleForm.num=='0'?this.ruleForm.num='':this.ruleForm.num=this.ruleForm.num.replace(/[^0-9]/g,'');
        },
      submit() {
        let that = this;
        let insubContr = false;
        this.moneyArea();
        this.$refs['ruleForm'].validate((valid) => {
          if (valid) {
            insubContr = true;
          } else {
            console.log('error submit!!');
            return false;
          }
        });
        if (that.subControl == true && insubContr == true) {
            alert('submit')
        }
      },
      moneyArea() {
        let that = this;
        that.subControl = true;
        if (this.ruleForm.moneyArea2 != '' && that.control == true) {
          if (Number(this.ruleForm.moneyArea1.replace(/,/g, "")) > Number(this.ruleForm.moneyArea2.replace(/,/g, ""))) {
            that.subControl = false;
            that.control = false;
            this.$confirm('单笔限额不可大于日累计限额', '提示', {
              confirmButtonText: '确定',
              type: 'warning',
              showClose: false,
              center: true,
              showCancelButton: false,
            });
            window.setTimeout(() => {
              that.control = true;
            }, 1000);
          }
        };
        if (this.ruleForm.moneyArea3 != '' && that.control == true) {
          if (Number(this.ruleForm.moneyArea2.replace(/,/g, "")) > Number(this.ruleForm.moneyArea3.replace(/,/g, ""))) {
            that.subControl = false;
            that.control = false;
            this.$confirm('日累计限额不可大于年累计限额', '提示', {
              confirmButtonText: '确定',
              type: 'warning',
              showClose: false,
              center: true,
              showCancelButton: false,
            });
            window.setTimeout(() => {
              that.control = true;
            }, 1000);
          };
        }
      },

      moneyArea3() {

      },
      changeMoney1() {
        this.ruleForm.moneyArea1 = mathTools.moneyCheck(this.ruleForm.moneyArea1)
      },
      changeMoney2() {
        this.ruleForm.moneyArea2 = mathTools.moneyCheck(this.ruleForm.moneyArea2)
      },
      changeMoney3() {
        this.ruleForm.moneyArea3 = mathTools.moneyCheck(this.ruleForm.moneyArea3)
      },
    },
    mounted() {

    },
    watch: {},

  };

</script>
<style lang="scss">
  .authorizationManage {
    .mb100 {
      margin-bottom: 100px;
    }
  }

</style>
