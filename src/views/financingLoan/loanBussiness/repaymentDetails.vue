<template>
    <div>
        <title-bar title="基本信息"></title-bar>
        <div class="f16 mb50">
            <el-row class="mt20" >
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">贷款本金</span>
                    <span class="ml25">8888</span>
                </el-col>
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">产品名称</span>
                    <span class="ml25">税金贷</span>
                </el-col>
            </el-row>
            <el-row class="mt20" >
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">剩余本金</span>
                    <span class="ml25">8888</span>
                </el-col>
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">合同号</span>
                    <span class="ml25">5555555555555</span>
                </el-col>
            </el-row>
            <el-row class="mt20" >
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">起息日</span>
                    <span class="ml25">2020-09-09</span>
                </el-col>
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">借据号</span>
                    <span class="ml25">222213823821321783</span>
                </el-col>
            </el-row>
            <el-row class="mt20" >
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">到期日</span>
                    <span class="ml25">2020-09-09</span>
                </el-col>
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">贷款状态</span>
                    <span class="ml25">正常</span>
                </el-col>
                
            </el-row>
            <el-row class="mt20" >
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">利率类型</span>
                    <span class="ml25">浮动利率</span>>
                </el-col>
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">逾期利率</span>
                    <span class="ml25">10.23%</span>
                </el-col>
            </el-row>
             <el-row class="mt20" >
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">基点</span>
                    <span class="ml25">18LBP</span>
                </el-col>
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">放款机构</span>
                    <span class="ml25">简阳农商行</span>
                </el-col>
               
            </el-row>
            <el-row class="mt20" >
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">执行利率(年化)</span>
                    <span class="ml25">8%</span>
                </el-col>
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">担保方式</span>
                    <span class="ml25">抵押</span>
                </el-col>
            </el-row>
            <el-row class="mt20" >
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">利率调整周期</span>
                    <span class="ml25">每年1月1日</span>
                </el-col>
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">还款方式</span>
                    <span class="ml25">等额本息</span>
                </el-col>
            </el-row> 
        </div>
        <title-bar title="还款信息"></title-bar>
        <div class=" mb50 flexc">
            <el-form :model="loanForm" :rules="loanRules" ref="loanForm" label-width="150px" >
                <el-form-item label="还款总额(元):" prop="loanCash">
                    <el-input v-model="loanForm.loanCash" placeholder="请输入"></el-input><a class="ml10">全部</a>
                 
                    <!-- 提前还款 -->
                    <div class="f14 gray2" v-if="state==1">
                        <p>剩余应还本金：<span class="money">10,000.00元</span>可全部或部分还款</p>
                    </div> 
                     <!-- 正常还贷-->
                    <div class="f14 gray2" v-if="state==2">
                        <p>当期应还本息合计：<span class="money">10,000.00元</span></p>
                        <p>本金：<span  class="money">10,000.00元</span> 利息：<span  class="money">10,000.00元</span></p>
                    </div> 
                     <!-- 逾期还款 -->
                    <div class="f14 gray2" v-if="state==3">
                        <p>逾期本息合计：<span class="money">10,000.00元</span></p>
                        <p>本金：<span  class="money">10,000.00元</span> 利息：<span  class="money">10,000.00元</span></p>
                    </div>
                </el-form-item>
                <el-form-item  label="本金(元):" prop="loanRate">
                    <el-input disabled v-model="loanForm.loanRate" placeholder=""></el-input>
                </el-form-item>
                 <el-form-item label="利息(元):" prop="loanRate">
                    <el-input disabled v-model="loanForm.loanRate" placeholder=""></el-input>
                </el-form-item>
                 <el-form-item label="总额(元):" prop="loanRate">
                    <el-input disabled v-model="loanForm.loanRate" placeholder=""></el-input>
                    <div class="f14 gray2" v-if="state==1">
                        <span class="cerror">利息、违约金、还款总额为预估值。实际以最终扣款金额为准</span>
                        
                    </div>
                </el-form-item>
                 <el-form-item label="还款账号:" prop="loanRate">
                    <el-input disabled v-model="loanForm.loanRate" placeholder=""></el-input>
                </el-form-item>
            </el-form>
            
        </div>
        
        <div class="tac mb20">
            <el-button size="small"  >返回</el-button>
            <el-button size="small" type="primary" @click="next">下一步</el-button>
        </div>
        <div class="wPro mtb20">
            <p>温馨提示</p>
            <p>1. 文字描述文字描述文字描述文字描述文字描述文字描述文字描述。；</p>
            <p>2. 文字描述文字描述文字描述文字描述文字描述。</p>
        </div>
    </div>
</template>
<script>
import auditProcess from "src/components/auditProcess/index.vue";
export default {
    components: {
        auditProcess,
    },
    data(){
        return {
            state:1,
            loanForm:{
                loanCash:'',
                loanDate:'',
                loanRate:'',
                loanWay:''
            },
            loanRules:{
                loanCash:[{ required: true, message: '请输入贷款金额', trigger: 'blur' }],
                loanDate:[{ required: true, message: '请选择贷款期限', trigger: 'blur' }],
                loanWay:[{ required: true, message: '请选择还款方式', trigger: 'blur' }]
            },
            list: [
        {
          type: "finish",
          name: "王思聪",
          time: "2020-02-02 12:00:00",
        },
        {
          type: "finish",
          name: "王思聪",
          time: "2020-02-02 12:00:00",
        },
        {
          type: "tips",
          name: "王思聪",
          time: "2020-02-02 12:00:00",
        },
        {
          type: "success",
          name: "王思聪",
          time: "2020-02-02 12:00:00",
        },
        {
          type: "info",
          name: "王思聪",
          time: "2020-02-02 12:00:00",
        },
        {
          type: "errer",
          name: "王思聪",
          time: "2020-02-02 12:00:00",
          desc: "错误信息",
        },
      ],

        }
    },
    methods:{
        //下一步
        next(){
            // 还款结果页面
            this.$router.push("/financeBussiness/loanBussiness/repaymentResult")
        },
    }
}
</script>