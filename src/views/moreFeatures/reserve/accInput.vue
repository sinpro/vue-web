<template>
  <div class="">
    <steps :stepsList="stepsList" :activeIndex="activeIndex"></steps>
    <div v-if="steps == 'infoFill'">
        <el-form ref="formData" :model="formData" :rules="formRules" label-width="300px">
            <title-bar title="账户类型"></title-bar>
            <el-form-item label="账户类型:" prop="bankName">
                <el-select v-model="formData.bankName" placeholder="请选择">
                    <el-option v-for="(account, index) in numList" 
                        :key='index'
                        :label="account.label " 
                        :value="account.val"> 
                    </el-option>
                </el-select>
            </el-form-item>
            <title-bar title="单位信息"></title-bar>
            <el-form-item label="开户证件类型:" prop="openType">
                <el-select v-model="formData.openType" placeholder="请选择">
                    <el-option v-for="(item, index) in typelist" 
                        :key='index'
                        :label="item.label " 
                        :value="item.value"> 
                    </el-option>
                </el-select>
            </el-form-item>
            <p class='ml10 mtb20'>请上传开户证件原件图片 </p>
            <el-form-item label="" label-width="350px">
                <el-upload
                    class="avatar-uploader mb20"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    <i class='upText'>上传证件</i>
                </el-upload>
            </el-form-item>
            <p class='ml10 mtb30'>（请注意：所有上传图片大小不超过5M，图片文件格式为jpg，png。请确保图片文字清晰，无反光，无遮挡内容。）</p>
            <title-bar title="法定代表人（负责人）信息"></title-bar>
            <el-form-item label="证件类型：">
                <el-input v-model="formData.name" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="联系电话：" prop='phone'>
                <el-input v-model="formData.phone" placeholder="请输入"></el-input>
            </el-form-item>
            <p class='ml10 mtb56'>请上传证件原件图片（当选择身份证时需上传身份证人像面和身份证国徽面） </p>
            <el-form-item label="" label-width="226px">
              <el-row :gutter="24">
                <el-col :span="6">
                  <el-upload
                    class="avatar-uploader"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :show-file-list="false"
                      :on-success="handleAvatarSuccess"
                      :before-upload="beforeAvatarUpload">
                      <img v-if="imageUrl" :src="imageUrl" class="avatar">
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                      <i class='upText'>上传证件</i>
                  </el-upload>
                </el-col>
                <el-col :span="12">
                  <el-upload
                      class="avatar-uploader ml60"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :show-file-list="false"
                      :on-success="handleAvatarSuccess"
                      :before-upload="beforeAvatarUpload">
                      <img v-if="imageUrl" :src="imageUrl" class="avatar">
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                      <i class='upText'>上传证件</i>
                  </el-upload>
                </el-col>
              </el-row>
            </el-form-item>
            <p class='ml10 mtb30'>（请注意：所有上传图片大小不超过5M，图片文件格式为jpg，png。请确保图片文字清晰，无反光，无遮挡内容。）</p>
            <title-bar title="经办人信息"></title-bar>
            <el-form-item label="是否为法定代表人（负责人）：" prop='person'>
              <el-radio-group v-model="formData.person" class="pl30">
                  <el-radio label="是"></el-radio>
                  <el-radio label="否"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="证件类型：">
                <el-input v-model="formData.name" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="联系电话：" prop='phone'>
                <el-input v-model="formData.phone" placeholder="请输入"></el-input>
            </el-form-item>
            <p class='ml10 mtb30'>请上传证件原件图片（当选择身份证时需上传身份证人像面和身份证国徽面） </p>
            <el-form-item label="" label-width="226px">
              <el-row :gutter="24">
                <el-col :span="6">
                  <el-upload
                    class="avatar-uploader"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :show-file-list="false"
                      :on-success="handleAvatarSuccess"
                      :before-upload="beforeAvatarUpload">
                      <img v-if="imageUrl" :src="imageUrl" class="avatar">
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                      <i class='upText'>上传证件</i>
                  </el-upload>
                </el-col>
                <el-col :span="12">
                  <el-upload
                    class="avatar-uploader ml60"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :show-file-list="false"
                      :on-success="handleAvatarSuccess"
                      :before-upload="beforeAvatarUpload">
                      <img v-if="imageUrl" :src="imageUrl" class="avatar">
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                      <i class='upText'>上传证件</i>
                  </el-upload>
                </el-col>
              </el-row>
            </el-form-item>
            <p class='ml10 mtb56'>（请注意：所有上传图片大小不超过5M，图片文件格式为jpg，png。请确保图片文字清晰，无反光，无遮挡内容。）</p>
            <title-bar title="预约网点"></title-bar>
            <el-form-item label="预约开户网点：" prop='bankPlace'>
                <el-select v-model="formData.bankPlace" placeholder="请选择">
                  <el-option v-for="(item, index) in placeList" 
                      :key='index'
                      :label="item.label " 
                      :value="item.value"> 
                  </el-option>
                </el-select>
                <el-button class='ml20' type='text'>选择网点</el-button>
            </el-form-item>
        </el-form>
        <el-row class="tc mt10">
            <el-button type="primary" @click='next'>下一步</el-button>
        </el-row>
    </div>
    <div v-if="steps == 'infoConfirm'">
        <p>注意：预约开户申请所提交资料必须真实有效，提交成功后不可修改。为保证审核顺利，请确认填写信息无误再提交。</p>
        <el-form ref="formData" :model="formData">
            <title-bar title="账户类型"></title-bar>
            <el-form-item label="账户类型:">
              {{formData.bankName}}
            </el-form-item>
            <title-bar title="单位信息"></title-bar>
            <div>
              <el-form-item label="开户证件类型:">{{formData.openType}}</el-form-item>
              <el-form-item label="开户证件编码:">{{formData.openCode}}</el-form-item>
              <el-form-item label="单位名称:">{{formData.openCompany}}</el-form-item>
              <el-form-item label="单位地址:">{{formData.openPlace}}</el-form-item>
              <img class='img1' src="/static/img/index_logo.d08c5e2.png" alt="">
            </div>
            <title-bar title="法定代表人（负责人）信息"></title-bar>
            <div>
              <el-form-item label="姓名:">{{formData.legalName}}</el-form-item>
              <el-form-item label="证件类型:">{{formData.legalType}}</el-form-item>
              <el-form-item label="证件号码:">{{formData.legalCode}}</el-form-item>
              <el-form-item label="联系电话:">{{formData.legalPhone}}</el-form-item>
              <img class='img2' src="/static/img/index_logo.d08c5e2.png" alt="">
              <img class='img2' src="/static/img/index_logo.d08c5e2.png" alt="" style='margin-left: 71%'>
            </div>
            <title-bar title="经办人信息"></title-bar>
            <div>
              <el-form-item label="姓名:">{{formData.agentName}}</el-form-item>
              <el-form-item label="证件类型:">{{formData.agentType}}</el-form-item>
              <el-form-item label="证件号码:">{{formData.agentCode}}</el-form-item>
              <el-form-item label="联系电话:">{{formData.agentPhone}}</el-form-item>
              <img class='img2' src="/static/img/index_logo.d08c5e2.png" alt="">
              <img class='img2' src="/static/img/index_logo.d08c5e2.png" alt="" style='margin-left: 71%'>
            </div>
            <title-bar title="预约网点"></title-bar>
            <el-form-item label="预约开户网点：">{{formData.bankPlace}}</el-form-item>
        </el-form>
        <el-row class="tc mt10">
            <el-button type="primary" @click='goBack'>上一步</el-button>
            <el-button type="primary" @click='submit'>提交</el-button>
        </el-row>
    </div>
    <div v-if="steps == 'success'"></div>
    <u-dialog @toSubmit="ukSubmit" v-model="showFlag"></u-dialog>
  </div>
</template>

<script>
import UDialog from "src/components/common/ukDialog/ukDialog";
export default {
  components: {
    UDialog,
  },
  data() {
    return {
        imageUrl: '',
        numList:[],
        placeList:[
          {lable:'0',value:'全部'},
          {lable:'1',value:'资金上存'},
          {lable:'2',value:'资金下拨'},
        ],
        typelist:[
          {lable:'0',value:'全部'},
          {lable:'1',value:'资金上存'},
          {lable:'2',value:'资金下拨'},
          {lable:'3',value:'内部结息'},
          {lable:'4',value:'其他'}
        ],
      stepsList: [
        {
          title: "填写信息",
          description: "",
        },
        {
          title: "确认信息",
          description: "",
        },
        {
          title: "提交结果",
          description: "",
        },
      ],
      steps: "infoFill",
      showFlag: false,
      formData: {
          bankName:'',
          openType:'',//开户类型
          openCode:'',//开户编码
          openCompany:'',//开户单位
          openPlace:'',//开户单位地址
          name:'身份证',
          person:'',
          bankPlace:'',
          legalName:'',//法定人姓名
          legalType:'',//法定人证件类型
          legalCode:'',//法定人证件编码
          legalPhone:'',//法定人联系电话
          agentName:'',//经办人人姓名
          agentType:'',//经办人人证件类型
          agentCode:'',//经办人人证件编码
          agentPhone:'',//经办人人联系电话
      },
        formRules: {
            bankName:[{required: true, message: '请选择账号', trigger: 'blur' }],
            openType: [{required: true,message: '请选择交易状态',trigger: 'blur' }],
            phone:[{required: true,message: '请输入联系电话',trigger: 'blur' }],
            person:[{required: true,message: '请选择是否为法定代表人（负责人）',trigger: 'blur' }],
            bankPlace:[{required: true,message: '请选择预约开户网点',trigger: 'blur' }],
        },
    };
  },
  //进度条插件
  computed: {
    activeIndex() {
      return this.steps == "infoFill" ? 0 : this.steps == "infoConfirm" ? 1 : 2;
    },
  },
  methods: {
      //下一步
      next(){
          this.steps = "infoConfirm"
      },
      //上一步
      goBack(){
        this.steps = "infoFill"
      },
      //提交
      submit(){
        // this.steps = "infoConfirm"
        console.log('1')
      },
      //上传图片
     handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
    //信息确认提交
    transSubmit() {
      this.showFlag = true;
    },
    //UK输入提交
    ukSubmit(ukey) {
      console.log(this.formData.accName, "提交数据接口执行");
      this.steps = "success";
      console.log("提交数据接口执行成功");
      // });
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    border: 1px dashed;
    color: #8c939def;
    width: 178px;
    height: 108px;
    line-height: 108px;
    text-align: center;
    border-radius: 4px;
    margin: 10px;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .upBorder{
      border:1px dashed #8c939def;
      border-radius: 4px;
  }
  .upText{
      font-size:16px;
      display:block;
      height:40px;
      margin-top:-52px;
      font-style: normal;
  }
  .img1{
    width: 300px;
    height: 150px;
    margin-left: 60%;
    position: absolute;
    margin-top: -27%
  }
  .img2{
    position: absolute;
    width: 200px;
    height: 150px;
    margin-top: -25%;
    margin-left: 48%;
  }
</style>