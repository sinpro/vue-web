<template>
    <div class="plr30">
        <div>
            <el-form ref="formData" :model="formData" :rules="formRules" label-width="120px" class='mt30'>
                <el-row :gutter="20">
                    <el-col :span="9">
                        <el-form-item label="企业名称：" prop="name1">
                            <el-input v-model="formData.name1" :disabled="true" placeholder="请输入内容"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="15">
                        <el-form-item label="账号：" prop="number">
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
        </div>
        <el-row class="tc mt10">
            <el-button type="primary" @click="getList">查询</el-button>
            <el-button type="info" @click="reset">重置</el-button>
        </el-row>
        <el-row class="borderb mt20">
            <span class='fl ml20'>余额信息</span>
            <span class='fr mr20'>总比数：{{aa}}笔</span>
        </el-row>
        <el-table border class="mtb20" :data="otherTransList">
            <el-table-column min-width='120px' prop="账号" label="账号"></el-table-column>
            <el-table-column min-width='120px' prop="户名" label="户名"></el-table-column>
            <el-table-column min-width='120px' prop="所属银行" label="所属银行"></el-table-column>
            <el-table-column min-width='120px' prop="上级账号" label="上级账号"></el-table-column>
            <el-table-column min-width='120px' prop="上级户名" label="上级户名"></el-table-column>
            <el-table-column min-width='120px' prop="币种" label="币种"></el-table-column>
            <el-table-column min-width='120px' prop="上存余额" label="上存余额"></el-table-column>
        </el-table>
        <el-pagination
            class='fr'
            :page-size="10"
            layout="total, prev,pager, next, jumper"
            :total="40">
        </el-pagination>
    </div>
</template>

<script>
export default {
    name: "sweepBalance",
    data () {
        return {
            
            formData:{
                name1:'11',
                number:''
            },
            aa:'100',
            otherTransList:[
                {他行账号:'1',户名:'1',所属银行:'1',币种:'1',账面余额:'1',可用余额:'1',上次查询时间:'1'}
            ],
            formRules:{
                number:[{required: true, message: '请选择账号', trigger: 'blur' }]
            },
            numList:[
                {label:'111',val:'aaa'}
            ],
            detailFlag: false,
            detailItem:{},
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
        //刷新
        getNew(){
            console.log('1')
        },
    }
}
</script>
