<template>
    <div>
        <div v-show="steps==1">
            <el-form ref="formData" :model="formData" :rules="formRules" label-width="312px" class='mt30'>
                <title-bar title="填写签约信息"></title-bar>
                <el-form-item label="签约账号：" prop="number">
                    <el-select v-model="formData.number" placeholder="请选择">
                        <el-option v-for="(account, index) in numList" 
                            :key='index'
                            :label="account.label " 
                            :value="account.val"> 
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="扣费账号：" prop="number">
                    <el-select v-model="formData.number" placeholder="请选择">
                        <el-option v-for="(account, index) in numList" 
                            :key='index'
                            :label="account.label " 
                            :value="account.val"> 
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="计费方式：" prop='way'>
                    <el-radio label="按月(10元/月)"></el-radio>
                    <el-radio label="按年(120元/年)"></el-radio>
                </el-form-item>
                </el-form>

                <el-form ref="formData1" :model="formData1" :rules="formRules1" class='mt30'>
                <el-button class='title_button' @click="add">+新增签约</el-button>
                <title-bar title="填写签约手机信息" style='margin-top: -24px;'></title-bar>
                <div>
                    <el-row :gutter="24">
                        <el-col :span="9">
                            <el-form-item label="手机号：" prop="phone">
                                <el-input v-model="formData1.phone" placeholder="请输入内容"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="13">
                            <el-form-item label="最小通知金额(元)：" prop="money">
                                <el-input v-model="formData1.money" placeholder="请输入内容"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </div>
                <div v-for="(item,index) in phoneList" :key="index">
                    <el-row :gutter="24">
                        <el-col :span="9">
                            <el-form-item label="手机号：" :prop="phoneList[index].phone" :rules="[{required: true, message: '请输入签约手机号', trigger: 'blur' }]">
                                <el-input v-model="item.phone" placeholder="请输入内容"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="13">
                            <el-form-item label="最小通知金额(元)：" prop="money">
                                <el-input v-model="item.money" placeholder="请输入内容"></el-input>
                                <el-button type='text' style='color: #eb3d3d;margin-left:20px' @click='del(index)'>删除</el-button>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </div>
            </el-form>
            <el-row class="tc mt30 mb30">
                <el-button size='medium' @click="goback">返回</el-button>
                <el-button size='medium' type="primary" @click="next">下一步</el-button>
            </el-row>
        </div>
        <div v-show="steps==2">
            <title-bar title="确认信息"></title-bar>
            <div class="cont1 flex">
              <ul class="ul1 cp3 f16 lh16 tar">
                <li>签约账号</li>
                <li style='margin-top: 39px'>计费方式</li>
              </ul>
              <ul class="ul2 cp1 f16 lh16">
                <li>四川省电商服务有限公司新华分公司 | 别名别名  2384 **** 1122</li>
                <li>4233222333244434</li>
              </ul>
              <ul class="ul3 cp3 f16 lh16 tar">
                <li>扣费账号</li>
              </ul>
              <ul class="ul4 cp1 f16 lh16">
                <li>四川省电商服务有限公司新华分公司 | 别名别名  2384 **** 1122</li>
              </ul>
            </div>
            <p class="leftBar f16 mtb40">签约手机号信息</p>
            <div class="cont flex">
                <ul class="ul1 cp3 f16 lh16 tar">
                    <li>签约手机号</li>
                </ul>
                <ul class="ul2 cp1 f16 lh16">
                    <li>12341234123</li>
                </ul>
                <ul class="ul3 cp3 f16 lh16 tar">
                    <li>最小通知金额</li>
                </ul>
                <ul class="ul4 cp1 f16 lh16">
                    <li>0.01元</li>
                </ul>
            </div>
            <el-row class="tc mt56 mb30">
                <el-button size='medium' @click="steps==1">上一步</el-button>
                <el-button size='medium' type="primary" @click="submit">提交</el-button>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            steps:1,
            isNo:false,
            phoneList:[
                {phone:'111',money:'111'},{phone:'222',money:'222'},{phone:'333',money:'333'}
            ],
            formData:{
                name1:'11',
                number:'',
                phone:'',
                money:'',
            },
            formData1:{
                name1:'11',
                number:'',
                phone:'',
                money:'',
            },
            aa:'100',
            otherTransList:[
                {账号:'',户名:'',上级账号:'',上级户名:'',币种:'',上存余额:'',不归集余额:''}
            ],
            formRules:{
                number:[{required: true, message: '请选择账号', trigger: 'blur' }]
            },
            formRules1:{
                phone:[{required: true, message: '请输入签约手机号', trigger: 'blur' }]
            },
            numList:[
                {label:'111',val:'aaa'}
            ],
            detailFlag: false,
            detailItem:{},
            detailInfo:false,
        }
    },
    mounted() {
        // this.getnumber()//获取账号列表
    },
    methods: {
        getnumber(){
            let params = {}
            this.$http.request(this,'POST','api/MC007013.do',params).then(res =>{
              console.log(res)
              this.numList = res.list
            }).catch(function(error) {});
        },
        //返回
        goback(){
            this.$router.go(-1)
            // let params = {
            //     name1:this.formData.name1,
            //     number:this.formData.number
            // }
            // this.$http.request(this,'POST','api/MC007013.do',params).then(res =>{
            //   console.log(res)
            // }).catch(function(error) {});
        },
        //重置
        reset(){
            this.formData.number = ''
        },
        //详情
        getDetail(scope){
            this.detailInfo = true
        },
        //签约
        goContract(){
            this.$router.push('/more/manager/message/contract')

        },
        //增加
        add(){
            let obj={phone:'',money:'',}
            this.phoneList.push(obj)
            //根据行数判断是否置灰确定按钮
            if(this.phoneList.length>8){
                this.isNo = true
            }
        },
        //删除
        del(index){
            //根据下标 index 删除指定行
            this.phoneList.splice(index,1)
            //根据行数判断是否置灰确定按钮
            if(this.phoneList.length<9){
                this.isNo = false
            }
        },
        //下一步
        next(){
            // console.log(this.phoneList)
            this.steps = 2
        },
        //提交
        submit(){

        },
    }
}
</script>
<style lang="scss" scoped>
.title3{
  color: #1B1B1B;
  border-left: 2px solid #1B1B1B;
  padding-left: 10px;
  line-height: 21px;
  font-size: 16px;
}
.p1_title{
    border: 1px dashed;
    width: 80px;
    padding: 12px 20px;
    text-align: center;
    font-weight: bold;
    cursor: pointer;//鼠标箭头图标变为指头
}
.el-input,.el-textarea{
  width: 230px;
}
.title_button{
    width: 80px;
	height: 30px;
	background-color: #ffffff;
	border-radius: 2px;
	border: solid 1px #059c5d;
    margin-left:840px;
    line-height: 0;
    padding-left: 0px;
    cursor: pointer;//鼠标箭头图标变为指头
}
.cont {
      >ul>li {
        list-style: none;
      }
      .ul1 {
        margin-left: 83px;
        >li+li {
          margin-top: 23px;
        }
        margin-right: 22px;
        width: 80px;
      }
      .ul2 {
        >li+li {
          margin-top: 23px;
        }
        width: 158px;
      }
      .ul3 {
        margin-left: 173px;
        >li+li {
          margin-top: 23px;
        }
        margin-right: 22px;
        width: 96px;
      }
      .ul4 {
        margin-right: 37px;
        >li+li {
          margin-top: 23px;
          width:256px;
        }
      }
    }
.cont1 {
      >ul>li {
        list-style: none;
      }
      .ul1 {
        margin-left: 99px;
        >li+li {
          margin-top: 23px;
        }
        margin-right: 22px;
        width: 64px;
      }
      .ul2 {
        >li+li {
          margin-top: 23px;
        }
        width: 254px;
      }
      .ul3 {
        margin-left: 126px;
        >li+li {
          margin-top: 23px;
        }
        margin-right: 22px;
        width: 65px;
      }
      .ul4 {
        margin-right: 38px;
        >li+li {
          margin-top: 23px;
        }
        width:254px;
      }
    }
</style>