<template>
    <div>
        <div>
            <el-form ref="formData" :model="formData" :rules="formRules">
                <el-button class='title_button' @click="goContract">+新增签约</el-button>
                <title-bar style="margin-top: -30px;" title="短信通"></title-bar>
                <el-row :gutter="24">
                    <el-col :span="12">
                        <el-form-item label="签约手机号：" prop="name1">
                            <el-input v-model="formData.name1" placeholder="请输入内容"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="签约账号：" prop="number">
                            <el-select v-model="formData.number" placeholder="请选择">
                                <el-option v-for="(account, index) in numList" 
                                    :key='index'
                                    :label="account.label " 
                                    :value="account.val"> 
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="扣费账号：" prop="number">
                            <el-select v-model="formData.number" placeholder="请选择">
                                <el-option v-for="(account, index) in numList" 
                                    :key='index'
                                    :label="account.label " 
                                    :value="account.val"> 
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <el-row class="tc mt10">
                <el-button size='mini' type="primary" @click="getList">查询</el-button>
            </el-row>
            <el-table border class="mtb20" :data="otherTransList">
                <el-table-column width='80px'  type="index" label="序号"></el-table-column>
                <el-table-column width='182px' prop="account" label="签约账号"></el-table-column>
                <el-table-column width='197px' prop="phone" label="签约手机号" show-overflow-tooltip></el-table-column>
                <el-table-column width='182px' prop="account1" label="扣费账号"></el-table-column>
                <el-table-column width='172px' prop="money" label="最小通知金额(元)"></el-table-column>
                <el-table-column width='175px' prop="postscript" label="操作" fixed="right">
                    <template slot-scope="scope">
                        <el-button type='text' style='cursor: pointer;' @click="getDetail(scope)">详情</el-button>
                        <el-button type='text' style='display: inline-block;margin-left: 5px;' @click="remove(scope)">解约</el-button>
                        <el-button type='text' style='display: inline-block;margin-left: 5px;' @click="edit(scope)">修改</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                class='fr'
                :page-size="10"
                layout="total, prev,pager, next, jumper"
                :total="40">
            </el-pagination>
        </div>
        <!-- 详情 -->
        <el-dialog :visible.sync="detailInfo" :show-close='false' size="medium" text>
            <div slot="title" class="tl f18 bold">签约详情</div>
            <table class='wr100 mb20' cellspacing="0" border="1">
                <tr class="h40 ">
                    <td class="wr10 pl10"></td>
                    <td class="wr30 pl10">账号</td>
                    <td class="wr30 pl10">户名</td>
                    <td class="wr30 pl10">计费方式</td>
                </tr>
                <tr class="h40 ">
                    <td class="pl10">签约账号</td>
                    <td class="pl10"></td>
                    <td class="pl10" rowspan="2"></td>
                    <td class="pl10" rowspan="2"></td>
                </tr>
                <tr class="h40 ">
                    <td class="pl10">扣费账号</td>
                    <td class="pl10"></td>
                </tr>
            </table>
            <p class="leftBar f16 mtb20">签约手机信息</p>
            <el-table border class="mtb20" :data="otherTransList">
                <el-table-column min-width='120px' prop="签约手机号" label="签约手机号"></el-table-column>
                <el-table-column min-width='120px' prop="最小通知金额(元)" label="最小通知金额(元)"></el-table-column>
                <el-table-column min-width='120px' prop="签约时间" label="签约时间"></el-table-column>
            </el-table>
        </el-dialog>
        <!-- 解约 -->
        <el-dialog :visible.sync="removeInfo" :close-on-click-modal='false' :close-on-press-escape='false'>
            <!-- 解约多个手机号 -->
            <div v-show="removeState=='1'">
                <div slot="title" class="tc f18 bold">请选择要解约的手机号</div>
                <el-table class="mtb20" height="400" :data="telphone" @selection-change="handleSelectionChange"
                stripe style="margin: 20px 0">
                    <el-table-column type="selection" width="220"></el-table-column>
                    <el-table-column width='400px' prop="phone" label="签约手机号"></el-table-column>
                </el-table>
                <el-row class="tc mt20 mb20">
                    <el-button size='medium' @click="removeInfo=false">取消</el-button>
                    <el-button size='medium' type="primary" @click="removeAgree">确定</el-button>
                </el-row>
            </div>
            <!-- 解约一个手机号 -->
            <div v-show="removeState=='0'">
                <p>是否解约签约手机号：{{telphone[0]}}</p>
                <el-row class="tc mt20 mb20">
                    <el-button type="info" @click="removeInfo=false">取消</el-button>
                    <el-button type="primary" @click="removeAgree">确定</el-button>
                </el-row>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data () {
        return {
            
            formData:{
                name1:'11',
                number:''
            },
            aa:'100',
            otherTransList:[
                {account:'875975 **** 0909',account1:'111111111111',phone:'11111111111,22222222222,333333333333',money:'111'},
                {account:'',account1:'',phone:'444444444,5555555555,6666666666666',money:'222'},
                {account:'',account1:'',phone:'777,888,9998',money:'333'},
                {account:'',account1:'',phone:'1010',money:'444'},
            ],
            formRules:{
                number:[{required: true, message: '请选择账号', trigger: 'blur' }]
            },
            numList:[
                {label:'111',val:'aaa'}
            ],
            detailFlag: false,
            detailItem:{},
            detailInfo:false,
            removeInfo:false,
            removeState:'',
            telphone:[]//多个手机号，数组
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
        //查询
        getList(){
            let params = {
                name1:this.formData.name1,
                number:this.formData.number
            }
            this.$http.request(this,'POST','api/MC007013.do',params).then(res =>{
              console.log(res)
            }).catch(function(error) {});
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
            this.$router.push('/more/companyManage/manager/message/contract')
        },
        //解约弹框
        remove(scope){
            let arr = scope.row.phone.split(',')
            // console.log(arr.length)
            // return
            if(arr.length>1){
                this.removeState = 1 //解约多个手机号
                for(var i=0;i<arr.length;i++){
                    let obj = {phone:''}
                    obj.phone = arr[i]
                    this.telphone.push(obj)
                }
            }else{
                this.removeState = 0  //解约1个手机号
                this.telphone = arr
            }
            console.log(this.telphone)
            this.removeInfo = true
        },
        //解约多选框
        handleSelectionChange(val) {
          this.multipleSelection = val;
        },
        //解约确认
        removeAgree(){
            console.log('1')
        },
        //修改
        edit(scope){
            //传值
            sessionStorage.setItem('editValue', scope.row);
            //跳转修改页面
            this.$router.push('/more/companyManage/manager/message/edit')
        }
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
.title_button{
    width: 107px;
	height: 30px;
	background-color: #ffffff;
	border-radius: 2px;
	border: solid 1px #059c5d;
    margin-left:840px;
    padding-left: 12px;
    line-height: 0;
    cursor: pointer;//鼠标箭头图标变为指头
}
.hover_row{
    max-width: 200px;
}
</style>