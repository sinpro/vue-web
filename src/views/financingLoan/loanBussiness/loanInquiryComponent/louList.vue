<template>
    <div class="f16 mb20 lou_in_quiry_list_box">
        <div class="BoxShadow p25 mt20" v-for="(item,index) in 2" :key="index" >
            <div class="flexsb">
               <div class="flex">
                    <span class="mr20 gray2">借据号：8899990000999990</span>
                    <el-tag v-if="show" class="ml20" effect="plain">已结清</el-tag>
                    <el-tag v-else type="danger" class="ml20" effect="plain">未结清</el-tag>
               </div>
               <div>
                   <span class="cg">还款</span>
                   <span @click="handleClick('借据详情')" class="cg ml20 ">详情</span>
                   <span @click="handleClick('还款记录')" class="cg ml20 ">还款记录</span>
                   <span @click="handleClick('还款计划')" class="cg ml20 ">还款计划</span>
               </div>
            </div>
            <div class="flexsb gray2 mt25 f16">
                <div>
                    <p class="f22 cy mb10">100,000.00</p>
                    <span class="">借款金额(元)</span>
                </div>
                <div>
                    <p class="f22 c-primary mb10">100,000.00</p>
                    <span class="">借款余额(元)</span>
                </div>
                <div>
                    <p class="f22 c-primary mb10">10%</p>
                    <span class="">执行利率</span>
                </div>
                <div class="">
                    <p class="mb10">开始日期：2021-03-10</p>
                    <span class="">结束日期：2022-03-10</span>
                </div>
            </div>
        </div>


        <el-dialog
            :title="title"
            :visible.sync="dialogVisible"
           
            :before-close="handleClose"
            size="medium" 
            text
            
            >

            <!-- 还款记录 -->
            <div v-if="title=='还款记录'" >
                <el-table :data="tableData" stripe >
                    <el-table-column  label="序号">
                        <template slot-scope="scope">
                            <span>{{scope.row.index}}</span>
                            <span class="cdel">逾期</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="date" label="还款日期"></el-table-column>
                    <el-table-column prop="name" label="还款金额(元)"></el-table-column>
                    <el-table-column prop="name" label="已还本金(元)"></el-table-column>
                    <el-table-column prop="name" label="已还利息(元)"></el-table-column>
                    <el-table-column prop="name" label="违约金(元)"></el-table-column>
                    <el-table-column prop="name" label="贷款余额(元)"></el-table-column>
                </el-table>
            </div>
            <!--  -->

            <div v-if="title=='还款计划'">
                <el-form label-width="170px">
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="借款号">88888888888888 </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="应还本金">100,100,00元</el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="年利率">4.23%</el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="应还利息">4，000.00</el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="期数">120期</el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="总合计">10,004,000.00 </el-form-item>
                        </el-col>
                    </el-row>
                    
                </el-form>
                <div class="mt30 mb20">
                    <span>选择日期：</span>
                    <el-date-picker
                        class="mr20"
                        v-model="value1"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                    </el-date-picker>
                    <el-radio v-model="radio" label="1">近一年</el-radio>
                    <el-radio v-model="radio" label="2">近三年</el-radio>
                    <el-radio v-model="radio" label="3">近五年</el-radio>
                    <el-button style="width:100px" type="primary">查询</el-button>
                </div>
                <el-table :data="tableData" stripe >
                    <el-table-column  label="期次">
                        <template slot-scope="scope">
                            <span>{{scope.row.index}}</span>
                            <span class="cdel">逾期</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="date" label="还款日期"></el-table-column>
                    <el-table-column prop="name" label="每期金额(元)"></el-table-column>
                    <el-table-column prop="name" label="应还本金(元)"></el-table-column>
                    <el-table-column prop="name" label="应还利息(元)"></el-table-column>
                    <el-table-column prop="name" label="贷款余额(元)"></el-table-column>
                </el-table>   
            </div>


            <!-- 详情 -->
            <div v-if="title=='借据详情'">

                <el-form label-width="170px">
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="借据号">88888888888888 </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="借据状态">正常 </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="借据金额">100,000.00 </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="逾期本金">-- </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="借据余额">100,000.00 </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="逾期利息">-- </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="利率类型">浮动利率 </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="开始日期">2020-10-01</el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="基点">+10BP</el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="结束日期"></el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="利率调整周期">每年1月1日</el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="还款方式">按月等额本息还款</el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="放款机构名称">简阳农商行</el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="放款机构电话">010-93983833</el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="客户经理">李四</el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="受托对手信息" name="first">
                        <el-table :data="tableData" stripe >
                            <el-table-column prop="date" label="收款户名"></el-table-column>
                            <el-table-column prop="name" label="收款账号"></el-table-column>
                            <el-table-column prop="address" align="right" label="收款银行"></el-table-column>
                        </el-table>
                    </el-tab-pane>
                    
                </el-tabs>
                
            </div>
            <div slot="footer" class="tac">
                <el-button v-if="title=='借据详情'" type="primary" @click="dialogVisible = false">关闭</el-button>
                <div v-else>
                    <el-pagination
                        layout="prev, pager, next"
                        :total="50">
                    </el-pagination>
                    <el-button @click="dialogVisible = false">关闭</el-button> 
                    <el-button  type="primary" @click="dialogVisible = false">下载</el-button>
                </div>
            </div>
        </el-dialog>


    </div>
</template>
<script>
export default {
    data(){
        return {
            radio:'1',
            value1:"",
            show:true,
            dialogVisible:false,
            title:"",
            activeName:'first',
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '四川银行',
                index:1
                }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '四川银行',
                index:2
                }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '四川银行',
                index:3
                }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '四川银行',
                index:4
            }]
        }
    },
    methods:{
        handleClick(title){
            this.title=title
            this.dialogVisible = true
            console.log("dian")
        },
        handleClose(done) {
           
                done();
           
        },
        //去借据查询页面
        goToIouInquiry(){
            this.$router.push('/financingLoan/loanBussiness/IouInquiry')
        },
    }
    
}
</script>

<style lang="scss">
.lou_in_quiry_list_box{
    .el-form-item{
        margin-bottom: 0;
    }
}
</style>