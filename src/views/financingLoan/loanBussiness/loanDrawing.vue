<template>
    <div>
        <title-bar title="基本信息"></title-bar>
        <div class="f16 mb50">
            <el-row class="mt20" >
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">合同号</span>
                    <span class="ml25">888888888</span>
                </el-col>
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">产品名称</span>
                    <span class="ml25">税金贷</span>
                </el-col>
            </el-row>
            <el-row class="mt20" >
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">合同金额</span>
                    <span class="ml25">100,000.00元</span>
                </el-col>
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">执行利率(年化)</span>
                    <span class="ml25">14%</span>
                </el-col>
            </el-row>
            <el-row class="mt20" >
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">担保方式</span>
                    <span class="ml25">抵押</span>
                </el-col>
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">剩余可借金额 </span>
                    <span class="ml25">5.00元</span>
                </el-col>
            </el-row>
            <el-row class="mt20" >
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">还款方式</span>
                    <span class="ml25">分期还款</span>
                </el-col>
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">合同起始日期</span>
                    <span class="ml25">2020-09-09</span>
                </el-col>
            </el-row>
            <el-row class="mt20" >
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">利率类型</span>
                    <span class="ml25">浮动利率</span>
                </el-col>
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">合同到期日</span>
                    <span class="ml25">2020-09-09</span>
                </el-col>
            </el-row>
            <el-row class="mt20" >
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">利率调整周期</span>
                    <span class="ml25">每年1月1日</span>
                </el-col>
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">放款机构</span>
                    <span class="ml25">绵阳农商行</span>
                </el-col>
            </el-row>
            <el-row class="mt20" >
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">基点</span>
                    <span class="ml25">18LBP</span>
                </el-col>
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">支付方式</span>
                    <span class="ml25">受托支付</span>
                </el-col>
            </el-row>
        </div>
        <title-bar title="自助放款信息"></title-bar>
        <div class="f16 mb50 ">
            <el-form :model="loanForm" :rules="loanRules" ref="loanForm" label-width="320px" class="demo-ruleForm">
                <el-form-item label="借款金额(元):" prop="loanCash">
                    <el-input v-model="loanForm.loanCash" placeholder="请输入"></el-input>
                </el-form-item>
                 <el-form-item label="自主支付金额(元):" prop="selfPay">
                    <el-input v-model="loanForm.selfPay" placeholder="请输入"></el-input>
                     <p class="cerror f14">超出自主支付金额部分，需使用受托支付</p>
                </el-form-item>
                <el-form-item label="借款到期日:" prop="tmie">
                    <el-date-picker
                        v-model="loanForm.time"
                        type="date"
                        placeholder="选择日期">
                        </el-date-picker>
                        <p class="cerror f14">实际借款金额、借款到期日以我行审批通过实际信息为准</p>
                    
                </el-form-item>

                <el-form-item label="上传文件:">
                    <el-input v-model="loanForm.loanCash" disabled placeholder="请上传本笔借款支用资料"></el-input><a class="ml10">浏览</a>
                    <p class="gray3 f14">支持jpg、png、pdf格式，单个文件不超过5M</p>
                    <div>
                        <i class="el-icon-paperclip"></i>
                        <span class="ml10 f16">支用资料文件一</span>
                        <a class="ml20">下载</a>
                        <a class="ml20">删除</a>
                    </div>
                    <div>
                        <i class="el-icon-paperclip"></i>
                        <span class="ml10 f16">支用资料文件二</span>
                        <a class="ml20">下载</a>
                        <a class="ml20">删除</a>
                    </div>
                </el-form-item>
                
            </el-form>
            
            
            
        </div>
        <title-bar title="受托支付对手信息"></title-bar>
        <div class="f16 mb50 loan_drawing_table ">
            <div class="flexsb">
                <span class="f14 gray3">最多可添加5个受托对手支付信息</span>
                <div class="f16 gray1 ">
                    <span>受托笔数：0笔</span>
                    <span class="ml20">总金额：0.00元</span>
                </div>
            </div>
             <el-table :data="list" stripe style="width: 100%" class="mt25">
                <el-table-column prop="name" label="收款户名">
                    <template slot-scope="scope">
                       <el-input v-model="scope.row.name" placeholder="请输入"></el-input>
                    </template>
                </el-table-column>
                <el-table-column prop="account" label="收款账号">
                    <template slot-scope="scope">
                       <el-input v-model="scope.row.account" placeholder="请输入"></el-input>
                    </template>
                </el-table-column>
                <el-table-column prop="bank" label="收款银行">
                    <template slot-scope="scope">
                        <el-select v-model="scope.row.bank" placeholder="请选择">
                            <el-option value="四川银行" label="四川银行"></el-option>
                        </el-select>
                    </template>

                </el-table-column>
                <el-table-column prop="net" label="网点">
                    <template slot-scope="scope">
                       <el-input v-model="scope.row.net" placeholder="请输入"></el-input>
                    </template>

                </el-table-column>
                <el-table-column prop="payMoney" label="受托支付金额(元)">
                    <template slot-scope="scope">
                       <el-input v-model="scope.row.payMoney" placeholder="请输入"></el-input>
                    </template>
                </el-table-column>
                <el-table-column  label="操作" width="90px">
                    <template slot-scope="scope" >
                      <span class="cerror f14" @click="deleteRow(scope.$index, list)">删除</span>
                    </template>
                </el-table-column>
            </el-table>

            
            <el-button v-if="list.length<5" class="loan_drawing_btn" @click="addInfo" >+ 新增受托支付对手信息</el-button>
            
        </div>


        <div class="tac mb20">
            <el-button size="small"  >返回</el-button>
            
            <el-button size="small" type="primary" @click="submit">提交</el-button>
        </div>





    </div>
</template>
<script>

export default {
    components: {
        
    },
    data(){
        return {
            loanForm:{
                loanCash:'',
                loanDate:'',
                loanRate:'',
                loanWay:''
            },
            loanRules:{
                loanCash:[{ required: true, message: '请输入借款金额', trigger: 'blur' }],
                tmie:[{ required: true, message: '请选择借款到期日', trigger: 'blur' }],
               
            },
            list: [
        {
          type: "finish",
          name: "王思聪",
          time: "2020-02-02 12:00:00",
          account:"1234557890",
          bank:"四川银行",
          net:"巴中市农村信用合作...",
          payMoney:'800,000.00'
        },
        {
          type: "tips",
          name: "王思聪",
          time: "2020-02-02 12:00:00",
           account:"1234557890",
          bank:"四川银行",
          net:"巴中市农村信用合作...",
          payMoney:'800,000.00'
        },
        {
          type: "success",
          name: "王思聪",
          time: "2020-02-02 12:00:00",
           account:"1234557890",
          bank:"四川银行",
          net:"巴中市农村信用合作...",
          payMoney:'800,000.00'
        },
        
      ],

        }
    },
    methods:{
        deleteRow(index, rows) {
            rows.splice(index, 1);
        },

        submit(){
            this.$router.push('/financeBussiness/loanBussiness/loanDrawingResult')
        },
        


        //新增对手信息

        addInfo(){
            
            let obj= {
                type: "",
                name: "",
                time: "",
                account:"",
                bank:"",
                net:"",
                payMoney:''
            }
            this.list.push(obj)
            
        },
        revoke(){
            this.$confirm('确定要撤消贷款申请吗？', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                center: true
             }).then(() => {
               
            }).catch(() => {
                       
            });
        }
    }
}
</script>
<style lang="scss">
.loan_drawing_table{
    .loan_drawing_btn{
        width: 100%;
        
    }
    .el-input, .el-textarea{
        width: 100%;
    }
    .el-button{
            border: 1px solid  #e5e5e5;
        }
}
    
</style>