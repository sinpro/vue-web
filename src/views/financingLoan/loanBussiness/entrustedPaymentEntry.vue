<template>
    <div>
        <title-bar title="受托支付录入"></title-bar>
        <div class="f16 mb50">
            <div class="tac">
                <p class="money f34 mb10">16,000.00元</p>
                <span class="cp3">可受托金额(元)</span>
            </div>
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

        <div class="f16 mb50 loan_drawing_table ">
            <div class="flexsb">
                <span class="f14 gray3"></span>
                <div class="f16 gray1 ">
                    <span>受托笔数：0笔</span>
                    <span class="ml20">总金额：0.00元</span>
                </div>
            </div>
             <el-table :data="list" stripe style="width: 100%"   @selection-change="handleSelectionChange"    class="mt25">
                  
                <el-table-column type="selection" width="80"> </el-table-column>

                <el-table-column prop="name" label="收款户名"></el-table-column>
                <el-table-column prop="account" label="收款账号"></el-table-column>
                <el-table-column prop="bank" label="收款银行"></el-table-column>
                <el-table-column prop="payMoney" label="付款金额(元)">
                    <template slot-scope="scope">
                       <el-input v-model="scope.row.payMoney" placeholder="请输入"></el-input>
                    </template>
                </el-table-column>
                <el-table-column prop="net" label="备注">
                    <template slot-scope="scope">
                       <el-input v-model="scope.row.net" placeholder="请输入"></el-input>
                    </template>

                </el-table-column>
                
            </el-table>  
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
        handleSelectionChange(val){
            console.log('选择的值',val)

        },
       
        submit(){
            this.$router.push('/financeBussiness/loanBussiness/entrustedPaymentResult')
        },
        


       
       
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