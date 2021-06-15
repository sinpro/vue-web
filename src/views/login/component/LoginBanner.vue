<template>
  <div class="LoginBanner">
    <div class="LoginBox" >
      <div class="title">企业网银</div>
      <img @click="codeLogin" class="img-logo" src="../../../images/icon/wxcode.png" alt="" />
      <el-tabs v-if='codeFlag' @tab-click="profession">
        <el-tab-pane label="手机号登录">
          <div class="formBox">
            <el-form class="wr90 marginauto" :rules="loginRules" ref='loginForm' :model="loginForm">
              <el-form-item  prop='cstNo'>
                <img class="img-logo" src="../../../images/icon/wxcode.png" alt="" />
                <el-input tyle="text" v-model="loginForm.cstNo" placeholder="请输入手机号码"></el-input>
              </el-form-item>
              <el-form-item prop='password'>
                <passwordControl ref="passwordControl" @submitPassWordFn="submitPassWordFn"></passwordControl>
              </el-form-item>
              
            </el-form>
            <div class="tc" v-loading="loading">
              <!-- <el-button type="primary" @click="loginBtn('loginForm')">登录</el-button> -->
              <el-button type="primary" @click="loginSub">登录</el-button>
            </div>
            <p class="txt-red" @click="forgotPWD">忘记密码</p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="用户编码登录">
          <div class="formBox">
            <el-form class="wr90 marginauto" :rules="loginRules">
              <el-form-item>
                <el-input v-model="loginForm.sctNo" placeholder="请输入企业客户号"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input v-model="loginForm.userNameId" placeholder="请输入用户编码"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input type="password" placeholder="登录密码" maxlength="12" v-model="loginForm.password"></el-input>
              </el-form-item>
            </el-form>
            <div class="tc" v-loading="loading">
              <el-button type="primary" @click="loginBtn">登录</el-button>
            </div>
            <p class="txt-red" @click="forgotPWD">忘记密码</p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="证书登录">
          <div class="formBox">
            <el-form class="wr90 marginauto" :rules="loginRules">
              <el-form-item>
                <el-input v-model="loginForm.sctNo" placeholder="请输入企业客户号"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input v-model="loginForm.userNameId" placeholder="请输入用户编码"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input type="password" placeholder="登录密码" maxlength="12" v-model="loginForm.password"></el-input>
              </el-form-item>
            </el-form>
            <div class="tc" v-loading="loading">
              <el-button type="primary" @click="loginBtn">登录</el-button>
            </div>
            <p class="txt-red" @click="forgotPWD">忘记密码</p>
          </div>
        </el-tab-pane>
      </el-tabs> 
      <div class="codeImg" v-if="!codeFlag">
        <img class="code-img" src="../../../images/icon/wxcode.png" alt="" />
        <p>请使用企业手机银行APP扫码</p>
      </div>
    </div>
    <!--分割线-->
      <div class="banner-tips">
        <ul class="banner-list">
          <li @click="saftyTableVisible = true">
            <img src="../../../images/firstPage/icon_right1.png" />
            <span>网银助手</span>
          </li>
          <li @click="dialogTableVisible=true">
            <img src="../../../images/firstPage/icon_right1.png" />
            <span>下载中心</span>
          </li>
          <li @click="question">
            <img src="../../../images/firstPage/icon_right1.png" />
            <span>常见问题</span>
          </li>
        </ul>
        <ul class="bottom-list flex jst pl30">
          <li>
            <span>首次使用网银请下载安装网银助手</span>
          </li>
          <li>
            <span>尽量不要在网吧等公共场所登录</span>
          </li>
          <li>
            <span>如有疑问，请拨打客户热线96633（四川省外加拨028）</span>
          </li>
        </ul>
      </div>
      <!-- ************网银助手弹框*********** -->
        <el-dialog title="下载中心" :visible.sync="dialogTableVisible" :close-on-click-modal='false' :close-on-press-escape='false' width="640px">
          <el-table :data="gridData" height="306px">
            <el-table-column type="index" label="序号" width="100px"></el-table-column>
            <el-table-column property="downFile" label="下载文件" width="400px"></el-table-column>
            <el-table-column prop="url" label="" align="right">
                <template slot-scope="scope">
                    <a @click="downLoad(scope)">下载</a>
                </template>
            </el-table-column>
          </el-table>
          <el-button type="primary" class="dialogBtn" @click="dialogTableVisible=false">关闭</el-button>
        </el-dialog>
      <el-dialog title="" class="saftyLog" :visible.sync="saftyTableVisible" :close-on-click-modal='false' :close-on-press-escape='false' width="980px" :show-close='false'>
        <div>
          <h3 class="tc mb32">企业网银安全提示</h3>
          <div><span>发布日期:2020年9月22日</span><span class="pl195">生效日期: 2020年9月22日</span></div>
          <div class="tip">
            <p>
              "四川农信（以下称做“我社")深知个人信息对您的重要性，会尽力保护您的个人信息安全。我社致力于维护您对我社的信任，恪守以下原则保护您的个人信息:权责一致原则、目的明确原则、选择同意原则、最少够用原则、主体参与原则、确保安全原则、公开透明原则等。同时，我社将按业界成熟的安全标准，采取相应的安全保护措施来保护您的个人信息。
            </p>
            <p>
              请您仔细阅读并确认本《隐私政策》。本《隐私政策》是我社开放银行服务平台统一使用的一般性隐私条款，适用于我社开放银行服务平台所有服务。对于具体的服务，我社收集和使用您的信息的目的、方式和范围将通过相应的服务协议、授权书等方式向您明示，并取得您的授权或同意。上述文件与本《隐私政策》共同构成我社与您之间达成的完整隐私政策，两者如有不一致之处，以相应的服务协议或授权书的约定为准。
            </p>
            <p>
              四川农信（以下称做“我社")深知个人信息对您的重要性，会尽力保护您的个人信息安全。我社致力于维护您对我社的信任，恪守以下原则保护您的个人信息:权责一致原则、目的明确原则、选择同意原则、最少够用原则、主体参与原则、确保安全原则、公开透明原则等。同时，我社将按业界成熟的安全标准，采取相应的安全保护措施来保护您的个人信息。
            </p>
            <p>
              请您仔细阅读并确认本《隐私政策》。本《隐私政策》是我社开放银行服务平台统一使用的一般性隐私条款，适用于我社开放银行服务平台所有服务。对于具体的服务，我社收集和使用您的信息的目的、方式和范围将通过相应的服务协议、授权书等方式向您明示，并取得您的授权或同意。上述文件与本《隐私政策》共同构成我社与您之间达成的完整隐私政策，两者如有不一致之处，以相应的服务协议或授权书的约定为准。"
            </p>
          </div>
          <div class='tc mtb20'>
              <el-button @click="refuse()">退出</el-button>
              <el-button type="primary" @click="queryBtn()">确认</el-button>
          </div>
        </div>
      </el-dialog>
      <el-dialog title="" class="saftyLog" :visible.sync="refuseLogFlag" :close-on-click-modal='false' :close-on-press-escape='false' width="400px">
        <div class="tac">
            <img :src="successImg" class="h40 pb15" alt="">
            <p class="f18 c26 pb10">提示</p>
            <p class="gray2">若您不同意隐私政策，四川农信企业网上银行将无法继续为您提供服务。</p>
            <!-- <p><span>{{times}}</span>s之后返回</p> -->
            <div class='tc mtb25'>
              <el-button @click="refuseBtn()" class="w120">仍要退出</el-button>
              <el-button type="primary" @click="queryBtn()" class="w120">返回查看</el-button>
          </div>
        </div>
      </el-dialog>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import api from 'apis/common.js';
import storageTools from "src/tools/storageTools";
import Template from '../../Template.vue';
import successImg from '../../../images/icon/success.png';
import passwordControl from './passwordControl.vue'; 

export default {
  components: {
    Template,
    passwordControl
  },
  data () {
    return {
      successImg:successImg,
      loading: false,
      t1: '',
      imgSrc: '',
      pwdInput:{},
      loginForm: {
        cstNo: '', // 用户姓名
        userNameId:'',
        s_certDN: '', // 证书编号
        password: '', // 加密后密码
        verifyCode: '', // 验证码
        sign_Data: '', // 签名数据
        ukey_Data: '', // ukey编号
        s_stylePath: '', // 样式风格
        s_language: '', // 当前语种
        seq_no: '', // 后台对应的验证码？
        s_keyFlag: '', // key标识
        usbKeyCode: '', // 1
        operFlag: '', // 操作类型
        userId: '' // 用户id
      },
      loginRules: {
        cstNo: [{required: true, trigger: 'blur', message: '请输入客户编号'}],
        userNameId: [{required: true, trigger: 'blur', message: '请输入客户ID'}],
        password: [{required: true, trigger: 'blur', message: '请输入登录密码'}],
        verifyCode:[{required: true, trigger: 'blur', message: '请输入验证码'}]
      },
      showVerifyCode: false,
      forgotFlag:true,
      uuid:'',
      codeFlag:'false',
      dialogTableVisible:false,
      gridData:[{downFile:"密码控件",url:''},
                {downFile:"签名控件",url:''},
                {downFile:"USBKey用户管理工具（飞天）",url:''},
                {downFile:"USBKey用户管理工具（文鼎创）",url:''},
                {downFile:"USBKey用户管理工具（握奇）",url:''}],
      questionFlag:true,
      saftyTableVisible:false,
      refuseLogFlag:false
    }
    
  },
  created () {
    },
  mounted () {
    
    
    this.getVerifyCode()
  },
  methods: {
    ...mapMutations([
      "setUserMenus",
      "setToken"
    ]),
    assistantBtn(){},
    forgotPWD () {
      this.$emit('forgotPWDFlag',this.forgotFlag)
    },
    //点击专业版
    profession(tab, event){
      if(tab.index==0){
        this.$confirm('请先下载安装XX银行最新版U-key管理工具，完成安装后再登录企业网银专业版？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(() => {
          
        })
      } 
    },
    //网银助手弹框
    assistantBtn(){

    },
    //网银助手中的下载
    downLoad(){

    },
    downCenter(){

    },
    question(){
      this.$emit('questionFlag',this.questionFlag)
    },
    submitPassWordFn(data){ 
      console.log(data,9999)
      const params = {
        account:'88888',
        pass:data.pwdResult, // 密码
        checkPass:data.pwdResult,// 确认密码
      };
      api.loginApi(params).then(
          ({ data = {}, errorCode = '', errorMessage = '响应失败' }) => {
            if (errorCode === '000000') {
              console.log(data,666)
              this.setToken(data.token);
              this.queryMenus();
            } else {
              this.$message.error(errorMessage);
            }
          }
      );
    },
    loginSub(data){ // 登录提交
      this.$refs.passwordControl.getEncryptionPassword();
    },
    queryMenus(){
      api.getMenus({}).then(
          ({ data = {}, errorCode = '', errorMessage = '响应失败' }) => {
            if (errorCode === '000000') {
              const { menuList } = data;
              // 数据太大，需要freeze一下，否则耗性能
              this.setUserMenus(Object.freeze(menuList || []));
              this.$router.push('/home')
            } else {
              this.$message.error(errorMessage);
            }
          }
      );
    },
    loginBtn (dateForm) {
      console.log(dataForm)
      // this.loginSub()
      //let _this = this
      // storageTools.set("login_status", "login");
      // this.$router.replace('/home')


      //let params = {'cstNo': this.loginForm.cstNo, 'userNo':this.loginForm.userNameId,'logonPwd': this.loginForm.password, 'verifyCode': this.loginForm.verifyCode, 'uuid':this.uuid}
      // this.$refs[dateForm].validate((valid) => {
      //   if(valid){
      //     let _this = this
      //     this.loading = true
      //     this.$http.request(_this, "POST", '/IM03005.do',params).then(function (response) {
      //       let loginData = response.data.body
      //       if (loginData.errorCode === '0') {
      //         sessionStorage.setItem('isLogin', 1)
      //         _this.$store.commit('SET_LOGIN', 1)
      //         auth.setiCIFID(loginData.iCIFID)
      //         //auth.setItem('menuList', JSON.stringify(response.body.menuList))
      //         //auth.setItem('loginData', loginData)
      //         sessionStorage.setItem('loginDatas', JSON.stringify(loginData))
      //         // sessionStorage.setItem('userno', response.body.userno)
      //         // sessionStorage.setItem('userAuthlevel', response.body.userAuthlevel)
      //         // if (response.body.firstLoginFlag === '1') {
      //         //   _this.$message({
      //         //     message: '登录成功',
      //         //     type: 'success',
      //         //     duration: 3 * 1000
      //         //   })
      //           _this.$router.replace('/HomePage')
      //         // } else {
      //         //   _this.$router.replace('/onlineBankingManagement/userManagement/loginPasswordModification')
      //         // }
      //       } else if (response.header.errorCode === 'ERR010217' || response.header.errorCode === 'CHN000005') {
      //         _this.$message({
      //           message: response.header.errorMsg,
      //           type: 'error',
      //           duration: 3 * 1000
      //         })
      //       } else {
      //         _this.$message({
      //           message: response.header.errorMsg,
      //           type: 'error',
      //           duration: 3 * 1000
      //         })
      //       }
      //       _this.loading = false
      //     })
      //     .catch(function (error) {
      //       _this.loading = false
      //       console.log(error)
      //     })
      //   }
      // })
    },
    //二维码
    codeLogin(){
      console.log("hahahahhahahhahaha")
      this.codeFlag = !this.codeFlag;
    },
    //获取验证码
    getVerifyCode () {
      let _this = this
      this.$http.request(_this, "POST", '/IM03004.do').then(function (response) {
        let backData = response.data.body;
         console.log("backData==========>",backData)
          if (backData.errorCode === '0') {
            _this.imgSrc = backData.verifyCodeBase64
            _this.uuid= backData.uuid

          } else {
            this.$message({
              message: backData.errorMsg,
              type: 'error',
              duration: 3 * 1000
            })
          }
        })
        .catch(function (error) {
          console.log(error)
      })
    },
    //不同意协议
    refuse(){
      this.saftyTableVisible = false;
      this.refuseLogFlag = true
    },
    refuseBtn(){
      this.refuseLogFlag = false
    },
    queryBtn(){
      this.saftyTableVisible = true;
      this.refuseLogFlag = false
    }
  }
}
</script>

<style lang="scss">
@import 'src/style/general/vars.scss';
.formBox >>> .el-form-item__label {
  font-size: 14px !important;
}
.formBox >>> .el-input{
  width: 220px !important;
}
.formBox >>> .el-input__inner{
  width: 220px !important;
}
 .el-carousel__indicators--vertical{display: none !important;}
.codeImg{
  p{
    text-align: center;
    font-size: 18px;
    color: #595959;
  }
  img{
    width: 226px;
    height: 226px;
    margin:48px 86px 29px 86px;
  }
}
.txt-red{
  font-size: 14px;
  color: #999;
  padding:20px 30px;
}
.dialogBtn{
  margin:24px 120px;
}
.LoginBox{
  position: absolute;
  top: 40px;
  right: 10%;
  height: 510px;
  width: 398px;
  background-color: white;
  border-radius: 60px 0px 60px 0px;
  box-sizing: border-box;
  box-shadow: 0px 8px 15px 1px 
		rgba(154, 173, 206, 0.23);
  .title{
    padding:42px 0 16px 32px;
    font-size:22px;
    color: #595959;
  }
  .img-logo{
    position: absolute;
    height: 25px;
    width: 30px;
    top: 0;
    right: 0;
  }
}

.loginBtn{
  line-height:30px;
  background-color:$color-primary;
  color:white;
  border-radius:3px
}
.myDialog >>> .el-dialog__title {
  font-size: 20px;
  color: $color-primary;
}
.LoginBanner{
  position: relative;
  background-color: white;
  background: #fff url('../../../images/banner1.png') no-repeat;
  background-size:100% 100%;
  height: 735px;
  .el-tabs{
    padding-left: 14px;
  }
  .el-tabs__item{
    font-size: 14px;
    color: #595959;
  }
  .el-tabs__item:focus.is-active.is-focus:not(:active){
    box-shadow: none;
  }
  .el-tabs__item.is-active{
    color: #595959;
    font-size: 16px;
    border: none;
  }
  .el-tabs__item.is-top.is-active:before{
    height: 4px;
    background: #595959;
    content: " ";
    position:absolute;
    left: 40%;
    bottom:0;
    border-radius: 2px;
    width: 25px;
  }
  .el-input__inner{
    width: 334px;
  }
  .el-button{
    width: 334px;
    height: 45px;
    background-color: #22b678;
    border-radius: 4px;
    border: none;
  }
  .banner-tips{
    background: #fff;
    position: absolute;
    bottom:0;
    width: 100%;
    height: 125px;
    box-sizing: border-box;
    left: 0;
    .banner-list{
      justify-content: space-around;
      display: flex;
      padding:23px 110px;
      li{
        color: #595959;
        font-size: 18px;
        list-style: none;

      }
      img{
        width: 42px;
        height: 40px;
        vertical-align:middle;
      }
    }
    .bottom-list{
      padding:0px 209px;
      li{
        list-style: circle;
        color: #00c372;
        font-weight: 400px;
        span{
          font-weight: normal;
          font-size: 14px;
          color: #595959;
        }
      }
    }
  }
  .el-table td{
    border-bottom: 1px solid #f0f0f0;
  }
}
.saftyLog{
  color: #666;
  h3{
    font-size: 22px;
    color: #1b1b1b;
  }
  .el-dialog__wrapper .el-dialog__body{
    padding:0 21px;
  }
  .tip{
    p{
      padding-top:30px;
    }
  }
  .el-button--default{
	width: 160px;
	height: 38px;
	background-color: #fff;
	border-radius: 2px;
	border: solid 1px #059c5d;
  color: #059c5d;
  }
  .el-button--primary{
    width: 160px;
    height: 38px;
    background-color: #059c5d;
    border-radius: 2px;
    border: solid 1px #059c5d;
    color: #fff;
  }
}
.mb32{
  margin-bottom: 32px;
}
.pl195{
  padding-left: 195px;
}
.c26{
 color: #262626
}
.w120{
  width:120px !important;
  height: 36px !important;
}
</style>
