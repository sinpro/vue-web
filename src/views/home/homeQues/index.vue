<template>
    <div class="homeQues">
        <el-tabs v-model="activeName" type="card" style="padding:20px 0">
            <el-tab-pane label="我要反馈" name="first">
                <el-form ref="formData" :model="formData" :rules='rulesFrom' label-width="450px" class="forgotFrom">
                    <el-form-item label="反馈类型:">
                        <el-radio-group v-model="formData.quesType">
                            <el-radio label="问题"></el-radio>
                            <el-radio label="建议"></el-radio>
                            <el-radio label="投诉"></el-radio>
                            <el-radio label="其他"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="手机号码:" prop="quesPhone">
                        <el-input type="text" v-model="formData.quesPhone" maxlength="11" placeholder="请输入手机号码"></el-input>
                    </el-form-item>
                    <el-form-item label="内容标题:" prop="quesTitle">
                        <el-input type="text" v-model="formData.quesTitle" placeholder="请输入内容标题"></el-input>
                    </el-form-item>
                    <el-form-item label="描述:" prop="quesTips">
                        <el-input type="textarea" placeholder="请输入描述" v-model="formData.quesTips" maxlength="200" show-word-limit
                            resize="none">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="上传图片:">
                        <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card"
                            :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                            <i class="el-icon-plus">
                                <div>上传图片</div>
                            </i>
                            <div slot="tip" class="el-upload__tip">支持扩展名：.jpeg .jpg .png，大小不超过10M</div>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisibleimg">
                            <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                    </el-form-item>
                    <div class='tc mtb55'>
                        <el-button size="medium" @click="cancelBtn()">取消</el-button>
                        <el-button size="medium" type="primary" @click="submitForm('formData')">提交</el-button>      
                     </div>
                </el-form> 
                  
            </el-tab-pane>
            <el-tab-pane label="反馈历史" name="second">
                <el-form :inline="true" class='ml150'>
                    <el-form-item label="内容标题:" prop="quesPhone">
                        <el-input type="text" v-model="formData.quesPhone" maxlength="11" placeholder="请输入手机号码"></el-input>
                    </el-form-item>
                    <el-form-item label="反馈类型:" prop="quesTitle">
                        <el-select v-model="select">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"
                                :disabled="item.disabled">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="反馈状态:">
                        <el-radio-group v-model="formData.quesType">
                            <el-radio label="全部"></el-radio>
                            <el-radio label="已回复"></el-radio>
                            <el-radio label="待回复"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-form>
                <div class="boxs mb24" v-for='item in 9' :key='item'>
                    <div class="quesList bgc6a24">
                        <p>登录企业网银失败？</p>
                        <p>已回复</p>
                    </div>
                    <div class="quesList h48">
                        <p>登录密码正确，但是一直显示登录失败。</p>
                        <el-button type="text" @click="dialogVisible=true">查看详情</el-button>
                    </div>
                </div>
                 <el-pagination class="inline-block tar wr100" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
                    :page-size="pageSize" :layout="total/pageSize>30?'prev, pager, next, jumper':'prev, pager, next'"
                    :total="total">
                </el-pagination>
                <el-dialog title="反馈详情" :visible.sync="dialogVisible" size="medium" text>
                    <div>
                        <p class="title">登录企业网银失败？</p>
                        <p class="content">
                            登录密码正确，但是一直显示登录失败，重新进入之后报错，换一个其他账号可以登录，换一个其他账号可以登录到底是什么原因造成的，请相关人员帮忙。
                            尽快解决
                        </p>
                        <img class="wh88" src="../../../images/firstPage/icon2.png">
                        <div class="tar">
                            <label>问题分类：登录</label>
                            <label>提交时间：2020-12-31 12:31:12</label>
                        </div>
                        <div class="replyText">
                            <!-- 有回复内容的时候 -->
                            <div class='p1525' style='display:none'>
                                <p class='f18 gray1'>回复内容：</p>
                                <p class='pt15'>下载USBKey修复工具重新试一下。</p>
                                <img class="wh88 pt15" src="../../../images/firstPage/icon2.png">
                                <p class="fl mt135">回复时间：2020-12-31 12:31:12</p>
                            </div>
                            <!-- 没有回复内容的时候 -->
                            <div class='noReplay'>
                                <img src="../../../images/firstPage/icon2.png">
                                <p class='pt10'>您的反馈待回复，请耐心等待</p>
                            </div>
                        </div>
                    </div>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisibleb = false" size="medium">取 消</el-button>
                        <el-button type="primary" @click="dialogVisibleb = false" size="medium">确 定</el-button>
                    </span>
                </el-dialog>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
export default {
  data(){
      return{
          activeName: "first",
          formData:{
              quesType:'',
              quesPhone:'',
              quesTitle:'',
              quesTips:''

          },
          options:[{
              label:'问题',
              value:'问题'
          },{
              label:'建议',
              value:'建议'
          },{
              label:'投诉',
              value:'投诉'
          },{
              label:'其他',
              value:'其他'
          }],
          rulesFrom:{
              quesTitle:[
                    { required: true, message: '请输入内容标题', trigger: 'blur' }
                ],
                quesTips:[
                    { required: true, message: '请输入问题描述', trigger: 'blur' }
                ]
          },
          currentPage:1,
          pageSize:10,
          total:100,
          dialogVisible:false
      }
  },
  methods: {
      //取消
      cancelBtn(){
        this.$emit('handleCancel')
      },
      //提交
      submitForm(data){
          this.$refs[data].validate((valid) => {
             if(valid){
                console.log("下一页")
             }
          })
      },
      handleSizeChange(){

      },
      handleCurrentChange(){

      }
  }
}
</script>
<style lang='scss' scoped>
.ml150{
    margin-left: 150px;
}
.quesList{
    display:flex;
    justify-content:space-between;
    padding:0 20px;
    color: #666666;
}
.bgc6a24{
    background-color:#c6a24f12;
    height:50px;
    line-height:50px;
}
.h48{
    height: 48px;
    line-height: 48px;
}
.boxs{
    box-shadow: 0px 2px 9px 0px 
		rgba(0, 0, 0, 0.08);
}
.replyText{
    width: 916px;
	height: 256px;
	background-color: #f5f5f6;
    margin-top: 22px;
}
.wh88{
    width:88px;
    height: 88px;
}
.p1525{
    padding:15px 25px;
}
.mt120{
    margin-top:135px;
}
.noReplay{
    text-align: center;
    padding-top:36px;
    img{
        width: 160px;
	    height: 148px;
    }
}
</style>
