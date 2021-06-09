<template>
    <div class='forgotPassword'>
        <title-bar title="忘记密码"></title-bar>
        <div>
            <el-radio-group v-model="radio1" @change="getRadio">
                <el-radio-button label="用信息找回"></el-radio-button>
                <el-radio-button label="通过USBKey找回"></el-radio-button>
            </el-radio-group>
        </div>
        <div v-if="active==1">
            <el-form ref="formData" :model="formData" :rules='rulesFrom' label-width="150px" class=" forgotFrom">
                <el-form-item label="企业客户号:" prop='cstNo'>
                    <el-input type='text' placeholder="请输入企业客户号" v-model="formData.cstNo"></el-input>
                </el-form-item>
                <el-form-item label="用户编号:" prop='userNo'>
                    <el-input type='text' placeholder="请输入用户编号" v-model="formData.userNo"></el-input>
                </el-form-item>
                <!-- <el-form-item label="操作员姓名:" prop='userName'>
                    <el-input type='text' placeholder="请输入操作员姓名" v-model="formData.userName"></el-input>
                </el-form-item> -->
                <el-form-item label="证件类型:" prop='ctfType'>
                    <el-select  v-model="formData.ctfType" placeholder="请选择">
                        <el-option v-for="(item, index) in certTypeList" 
                            :key='index'
                            :label="item.IDType" 
                            :value="item.certNo"> 
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="证件号码:" prop='ctfNo'>
                    <el-input type='text' placeholder="请输入证件号" maxlength="18" v-model="formData.ctfNo"></el-input>
                </el-form-item>
                <el-form-item label="手机号码:" prop='mobile'>
                    <el-input type="tel" placeholder="请输入手机号" maxlength="11" v-model="formData.mobile"></el-input>
                </el-form-item>
                <el-form-item label="短信验证码:" class='getCodeNo' prop='verifyCode'>
                    <el-input type='text' maxlength="6" placeholder="请输入验证码" v-model="formData.verifyCode"></el-input>
                    <el-button type="primary" @click="getCode('formData')">获取验证码</el-button>
                </el-form-item>
            </el-form>
            <div class='tc pb56'>
                <el-button size="medium" @click="goback()">返回</el-button>
                <el-button size="medium" type="primary" @click="submitForm('formData')">下一步</el-button>
            </div>
        </div>
        <div v-if='active==4'>
            <el-form ref="UkData" :model="UkData" :rules='UkDataFrom' label-width="150px" class='forgotFrom'>
                <el-form-item label="企业客户号:" prop="cstNo">
                    <el-input placeholder="请输入企业客户号" maxlength="16" v-model="UkData.cstNo" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="用户编号:" prop="cstNum">
                    <el-input placeholder="请输入用户编号" maxlength="16" v-model="UkData.cstNum" :disabled="true"></el-input>
                </el-form-item>
            </el-form>
            <div class='tc pb295'>
                <el-button size="medium" @click="goback()">上一步</el-button>
                <el-button size="medium" type="primary" @click="submitForm('UkData')">确认</el-button>
            </div>
        </div>
            <div v-if='active==2'>
                <el-form ref="passwordData" :model="passwordData" :rules='passwordFrom' label-width="150px" class='forgotFrom'>
                    <el-form-item label="新密码:" prop="newPassword"  class="newPasswordmb5">
                        <el-input show-password placeholder="请输入新密码" maxlength="16" v-model="passwordData.newPassword"></el-input>
                        <p class="f14 gray3">8-20位，至少包括数字、字母、字符中任意两种，字母区分大小写</p>
                    </el-form-item>
                    <el-form-item label="确认密码:" prop="confirmPassword">
                        <el-input show-password placeholder="请再次输入新密码" maxlength="16" v-model="passwordData.confirmPassword"></el-input>
                    </el-form-item>
                </el-form>
                <div class='tc pb270'>
                    <el-button size="medium" @click="goback02()">上一步</el-button>
                    <el-button size="medium" type="primary" @click="submitForm02('passwordData')">确认</el-button>
                </div>
            </div>
            <div v-if='active==3'>
                <div class="tac pt96">
                    <img :src="successImg" class="h40 pb15" alt="">
                    <p>密码修改成功</p>
                    <!-- <p><span>{{times}}</span>s之后返回</p> -->
                    <el-button size="medium" class="pb330" type="primary" @click="submitForm03()">完成</el-button>

                </div>
            </div>
    </div>
</template>
<script>
import index from './main';
export default {
    data () {
        return {
            certTypeList:index.certType,
            formData:{
                cstNo:'',
                userNo:'',
                userName:'',
                ctfType:'',
                ctfNo:'',
                mobile:'',
                verifyCode:''
            },
            rulesFrom: {
                cstNo: [
                    { required: true, message: '请输入企业客户号', trigger: 'blur' },
                ],
                userNo: [
                    { required: true, message: '请输入用户编号', trigger: 'blur' },
                ],
                // userName: [
                //     { required: true, message: '请输入操作员姓名', trigger: 'blur' },
                // ],
                ctfType: [
                    { required: true, message: '请选择证件类型', trigger: 'change' },
                ],
                ctfNo: [
                    { required: true, message: '请输入证件号', trigger: 'blur' },
                ],
                mobile: [
                    { required: true, message: '请输入手机号', trigger: 'blur' },
                ],
                verificationCode: [
                    { required: true, message: '请输入验证码', trigger: 'blur' },
                ],
            },
            passwordData:{
                newPassword:'',
                confirmPassword:''
            },
            passwordFrom:{
                newPassword:[
                    { required: true, message: '请输入新密码', trigger: 'blur' }
                ],
                confirmPassword:[
                    { required: true, message: '请输入确认密码', trigger: 'blur' }
                ]
            },
            UkData:{
                cstNo:"12345678",
                cstNum:"098736636"
            },
            UkDataFrom:{
                cstNo:[
                    { required: true, message: '请输入企业客户号', trigger: 'blur' }
                ],
                cstNum:[
                    { required: true, message: '请输入用户编号', trigger: 'blur' }
                ]
            },
            active:1,
            times:3,
            uuid:'',
            radio1:'用信息找回',
        }
    },
    mounted () {
    },
    methods:{
        //getRadio
        getRadio(){
            console.log("radio1======================",this.radio1)
            if(this.radio1=="通过USBKey找回"){
                this.active = 4
            }else{
                this.active = 1
            }
        },
        //获取验证码
        getCode(data){
            this.$refs[data].validate((valid) => {
                let _this = this
                let params = {
                    cstNo:this.formData.cstNo,
                    userNo:this.formData.userNo,
                    userName:this.formData.userName,
                    ctfType:this.formData.ctfType,
                    ctfNo:this.formData.ctfNo,
                    mobile:this.formData.mobile,
                }
                this.$http.request(_this, "POST", '/IM03001.do',params).then(function (response) {
                    let backData = response.data.body;
                    console.log("backData==========>",backData)
                    if (backData.errorCode === '0') {
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
            });
        },
        //提交
        submitForm(formData){
            console.log('data====================>',formData)
            this.active = 2;
            // this.$refs[formData].validate((valid) => {
            //     if(valid){
            //         if(this.formData.verifyCode!==''){
            //             let _this = this
            //             let params = {
            //                 cstNo:this.formData.cstNo,
            //                 userNo:this.formData.userNo,
            //                 userName:this.formData.userName,
            //                 ctfType:this.formData.ctfType,
            //                 ctfNo:this.formData.ctfNo,
            //                 mobile:this.formData.mobile,
            //                 uuid:this.uuid,
            //                 verifyCode:this.formData.verifyCode
            //             }
            //             this.$http.request(_this, "POST", '/IM03002.do',params).then(function (response) {
            //                 let backData = response.data.body;
            //                 if (backData.errorCode === '0') {
            //                     _this.active = 2;
            //                 } else {
            //                     this.$message({
            //                         message: backData.errorMsg,
            //                         type: 'error',
            //                         duration: 3 * 1000
            //                     })
            //                 }
            //             }).catch(function (error) {
            //                 console.log(error)
            //             })
            //         }else{
            //             alert('验证码不能为空')
            //         }
            //     }
            // })
        },
        goback(){
            window.location.reload();
        },
        submitForm02(data){
            let _this = this;
            this.active = 3;
            // this.$refs[data].validate((valid) => {
            //     if(valid){
            //         let params = {
            //             cstNo:_this.formData.cstNo,
            //             userNo:_this.formData.userNo,
            //             newPassword:_this.passwordData.newPassword,
            //             uuid:_this.uuid,
            //             verifyCode:this.formData.verifyCode
            //         }
            //         this.$http.request(_this, "POST", '/IM03003.do',params).then(function (response) {
            //             let backData = response.data.body;
            //             if (backData.errorCode === '0') {
            //                 _this.active = 3;
            //                 _this.times=3;
            //                 let interval=setInterval(function(){
            //                 _this.times--;
            //                 if(_this.times<=0){
            //                 window.location.reload();
            //                 };
            //                 },1000);
            //             } else {
            //                 this.$message({
            //                     message: backData.errorMsg,
            //                     type: 'error',
            //                     duration: 3 * 1000
            //                 })
            //             }
            //         }).catch(function (error) {
            //             console.log(error)
            //         })
            //     }
            // })
        },
        goback02(){
            window.location.reload();
        },
        submitForm03(){
            window.location.reload();
        }
    }
}
</script>
<style lang="scss">
.forgotPassword{
    width: 1200px;
    margin:24px auto;
    background: #fff;
    .nav-bar{
        margin:0 23px;
        height: 74px;
        line-height: 74px;
        box-sizing: border-box;
    }
    .el-radio-group{
        width: 100%;
        text-align: center;
        margin-top:35px;
    }
    .el-radio-button__inner{
        width: 160px;
        height: 37px;
        box-sizing: border-box;
        padding: 10px 20px !important;
        text-align: center;
    }
    .getCodeNo{
        .el-input{
            width: 208px;
        }
        .el-button{
            width: 100px;
            padding:11px 0;
            margin-left: 8px;
        }
    }
    .el-button + .el-button{
        margin-left:14px;
    }
}
.forgotFrom{
    margin-left: 292px;
    padding:47px 0 36px 0;
}
.getCodeNo >>> .el-input{
    width:55%;
}
.getCodeNo >>> .el-input__inner{
    width:100%;
}
.getCodeNo >>> .el-button{
    padding:8px 16px;
}
.pb56{
    padding-bottom: 56px;
    margin-right: 12px;
}
.pt96{
    padding-top:96px;
}
.pb330{
    margin:55px 0 330px 0;
}
.pb295{
    padding-bottom: 295px;
}
.pb270{
    padding-bottom: 270px;
}
.newPasswordmb5{
    margin-bottom: 5px !important;
}
</style>