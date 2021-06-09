<template>
    <div>
        <el-form :inline="true" :model="formInline" label-width="120px" class="demo-form-inline">
            <el-row>
                <el-col :span="12">
                    <el-form-item required label="交易状态:">
                        <el-select v-model="formInline.applicationStatus" placeholder="请选择">
                            <el-option :label="111" :value="111"></el-option>
                            <el-option :label="222" :value="222"></el-option>
                        </el-select>
                </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item required label="交易日期:">
                        <el-date-picker
                            v-model="formInline.applicationDateRange"
                            type="daterange"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
                            </el-date-picker>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <div class="tac">
             <el-button  type="primary" size="small">查询</el-button>
        </div>
        <div class="mt50">
            <el-table  :data="tableData" style="width: 100%">
                <el-table-column fixed prop="date" label="序号" width="100"> </el-table-column>
                <el-table-column prop="name" label="交易时间" width="250"> </el-table-column>
                <el-table-column  prop="province" label="付款户名" width="250"> </el-table-column> 
                <el-table-column  prop="city"  label="付款账号"  width="250"></el-table-column>
                <el-table-column  prop="city"  label="总笔数"  width="250"></el-table-column>
                <el-table-column prop="zip"  fixed="right" label="交易状态" width="150"> 
                    <template slot-scope="scope">
                        <div v-if="false">
                            <span>交易成功</span>
                        </div>
                        <div v-if="true">
                            <span class="cerror">交易失败</span>
                            <i class="el-icon-question cg"></i>
                        </div>
                         <div v-if="false">
                            <span class="ctips">待审批</span>
                        </div>
                         <div v-if="false">
                            <span class="ctips">部分成功</span>
                        </div>
                         <div v-if="false">
                            <span class="ctips">处理中</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column fixed="right"  label="操作" width="100">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
               
                layout="prev, pager, next"
                :total="50">
            </el-pagination>
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return {
            formInline:{},
            tableData: [
                {
                    date: '1',
                    name: '2020-06-29 18:00:00',
                    province: '北京易诚互动网络技术...',
                    city: '8888 8888 8888 8888 888',
                    address: '633324 **** 8438',
                    zip: '交易成功'
                },
            ]
        }
    },
    methods:{
        //查看详情
        handleClick(){
            this.$router.push('/financingLoan/loanBussiness/delegationRecordQueryDetails')
        },
        
    }
}
</script>