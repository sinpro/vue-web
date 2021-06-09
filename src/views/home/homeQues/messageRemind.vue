<template>
    <div class="messageRemind">
        <div class="messageBtn">
           <p class="bceb3d3d mr15">删除</p>
           <p class="bc059c5d">完成</p>
        </div>
        <el-tabs v-model="activeName" style="padding:20px 0">
            <el-tab-pane label="所有消息" name="first"></el-tab-pane>
            <el-tab-pane label="业务消息" name="second"></el-tab-pane>
            <el-tab-pane label="系统消息" name="third"></el-tab-pane>
        </el-tabs> 
        <div class="numBtn">
            <el-badge class="item">
                <el-button size="small">全部</el-button>
            </el-badge>
            <el-badge :value="12" class="item ml5">
                <el-button size="small">未读</el-button>
            </el-badge>
            <span class="f18 cg pl25">清除未读</span>
        </div> 
        <el-checkbox class="mt24" :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <div class="boxs mtb24" v-for='item in 9' :key='item'>
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                <el-checkbox class="wr100">
                    <div class="quesList flex bgc6a24">
                        <p><span class="new">new</span>登录企业网银失败？</p>
                        <p>2020-12-31 12:31:12</p>
                    </div>
                    <div class="quesList">
                        <p class="quesListText pt15">账户8888 6577 **** 8765，剩余应还金额12,090.00元，还款日2021年3月11日还款日2021年3月11日还款日021年3月11日还款日</p>
                        <div class="tr mtb15">
                            <el-button size="small" @click="dialogVisible=true">详情</el-button>
                            <el-button type="primary" size="small">去还款</el-button>
                        </div>
                    </div>
                </el-checkbox>
            </el-checkbox-group>
            </div>
            <el-pagination class="inline-block tar wr100" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
            :page-size="pageSize" :layout="total/pageSize>30?'prev, pager, next, jumper':'prev, pager, next'"
            :total="total">
        </el-pagination>
        <el-dialog title="消息详情" :visible.sync="dialogVisible" size="medium" text>
            <div>
                <p class="title">您的贷款即将逾期，请及时还款</p>
                <p class="content">
                    账户8888 6577 **** 8765，剩余应还金额12,090.00元，还款日2021年3月11日，为避免xxxx,消息描述内容消息描述内容消息描述内容。
                </p>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false" size="medium">知道了</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
const cityOptions = ['上海', '北京', '广州', '深圳'];
export default {
  data(){
      return{
          activeName:'first',
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
          dialogVisible:false,
          checkAll: false,
          checkedCities: [],
          ties: cityOptions,
          isIndeterminate: true
      }
  },
  methods: {
      //取消
      cancelBtn(){

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

      },
      //全选
      handleCheckAllChange(val) {
          console.log("val==================>",val)
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
  }
}
</script>
<style lang='scss' scoped>
.messageRemind /deep/ .el-tabs__header{
    border-bottom:1px solid #f0f0f0
}
.quesList{
    justify-content:space-between;
    padding:0 20px;
    color: #666666;
    .quesListText{
        width: 800px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
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
        margin-left: 40px;
        
}
.boxs /deep/ .el-checkbox__input{
        position: absolute;
        left: -40px;
}
.boxs /deep/ .el-checkbox__label{
    padding-left:0;
    width: 100%;
}
.replyText{
    width: 916px;
	height: 256px;
	background-color: #b6b6ff;
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
.messageBtn{
    display: flex;
    margin-top:20px;
    float: right;
    p{
        width: 60px;
        height: 28px;
        background-color: #ffffff;
        border-radius: 2px;
        font-size: 14px;
        text-align: center;
        line-height: 28px;
    }
}
.bceb3d3d{
    color: #eb3d3d;
    border: solid 1px #eb3d3d;
}
.bc059c5d{
    color: #059c5d;
    border: solid 1px #059c5d;
}
.numBtn /deep/ .el-badge:first-child .el-button{
   background-color: #059c5d;
   color: #fff;
}
.numBtn /deep/ .el-badge .el-button{
    width: 68px;
    border-radius: inherit;
}
.ml5{
    margin-left: -5px;
}
.new{
	color: #ffffff;
    width: 36px;
	height: 15px;
	background-color: #f85838;
	border-radius: 8px;
    margin-right: 16px;
}
</style>
