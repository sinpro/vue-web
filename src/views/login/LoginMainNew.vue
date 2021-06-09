<template>
  <div>
    <div>
      <!-- 登录表单模块 -->
      <login-header ref="LoginHeader"></login-header>
      <LoginQues v-if='questionFlag' class="downLoadUkey"></LoginQues>
      <forgot-PWD v-if="flagpwdData" ref="forgotPWD"></forgot-PWD>
      <login-banner v-if='!downLoadFlag && !questionFlag && !safetyTipsFlag&&!flagpwdData' ref="LoginBanner" @downUKeyFlag='downFlag' @questionFlag='quesFlag' @safetyTipsFlag='tipsFlag' @forgotPWDFlag='flagData'></login-banner>
      <el-footer class="main-footer h70 wr100 tac cf" style="height: 70px">
            客服热线：96633（省内） 028-96633（省外）
            地址：四川省成都市高新锦城大道108号 邮编：610041 版权所有 ©
            四川省农村信用社联合社版权所有 蜀ICP备05031508号
        </el-footer>
      
      <!-- 登录提示、需知 
      <login-tips v-if="!flagpwdData" ref="SwiperTips" @downUKeyFlag='downFlag' @questionFlag='quesFlag' @safetyTipsFlag='tipsFlag'></login-tips>-->
    </div>
    <!-- uk下载 -->
    <div v-if='downLoadFlag' class="downLoadUkey">
      <el-table :data="depositData" border>
        <el-table-column prop="UkeyStyle" label="U-key类型"></el-table-column>
        <el-table-column prop="environment" label="试用环境"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <a class="txt-blue tc" @click='goDraw(scope)'>下载</a>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 登录常见问题 -->
    
    <!-- 安全提示 -->
    <LoginSaftyTips v-if='safetyTipsFlag' class="downLoadUkey"></LoginSaftyTips>
  </div>
</template>

<script>
import LoginHeader from "./component/LoginHeader";
import LoginBanner from "./component/LoginBanner";
import forgotPWD from "./forgotPassword";
import LoginQues from "./component/LoginQues";
import LoginSaftyTips from "./component/LoginSaftyTips";
export default {
  name: "LoginMain_new",
  components: {
    LoginHeader,
    LoginBanner,
    forgotPWD,
    LoginQues,
    LoginSaftyTips
  },
  data() {
    return {
      flagpwdData: false,
      downLoadFlag: false,
      questionFlag: false,
      safetyTipsFlag: false,
      searchInfo: "",
      depositData: [
        {
          UkeyStyle: "二代U-Key",
          environment:
            "操作系统：Windows XP,Windows 7,Windows 8,Windows 9,Windows 10",
        },
        {
          UkeyStyle: "一代U-Key",
          environment: "操作系统：Windows XP,Windows 7,Windows 8,Windows 8.1",
        },
      ],
    };
  },
  created() {
    console.log("questionFlag================,",this.questionFlag)
  },
  mounted() {},
  methods: {
    flagData(data) {
      this.flagpwdData = data;
      console.log("this.flagpwdData==============", data);
    },
    downFlag(item) {
      this.downLoadFlag = item;
      // console.log("this.downLoadFlag==============", item);
    },
    quesFlag(item) {
      this.questionFlag = item;
    },
    tipsFlag(item) {
      this.safetyTipsFlag = item;
    },
  },
};
</script>
<style lang="scss" scoped>
.main-footer {
    background: #373737;
    line-height: 70px;;
  }
</style>
