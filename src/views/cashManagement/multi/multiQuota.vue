<template>
    <div class="plr30">
        <div>
            <el-form ref="formData" :model="formData" :rules="formRules" label-width="120px" class='mt30'>
                <el-row :gutter="20">
                    <el-col :span="9">
                        <el-form-item label="企业名称：" prop="name">
                            <el-input v-model="formData.name" :disabled="true" placeholder="请输入内容"></el-input>
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
                    <el-col :span="15">
                        <el-form-item label="账簿：" prop="number">
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
        <el-row class="borderb">
            <span class=' fl mt20 ml20'>限额信息</span>
            <el-button style='margin-left:55%;margin-top:10px' @click='add'>新增限额</el-button>
            <span class='fr mt20 mr20'>总比数：{{aa}}笔</span>
        </el-row>
        <el-table border class="mtb20" :data="otherTransList" @selection-change="checkbox">
            <el-table-column min-width="40px" type="selection"></el-table-column>
            <el-table-column min-width='80px' prop="账簿号" label="账簿号"></el-table-column>
            <el-table-column min-width='80px' prop="账簿名" label="账簿名"></el-table-column>
            <el-table-column min-width='80px' prop="单笔限额" label="单笔限额"></el-table-column>
            <el-table-column min-width='80px' prop="单笔限额" label="单笔限额"></el-table-column>
            <el-table-column min-width='80px' prop="日已用限额" label="日已用限额"></el-table-column>
            <el-table-column min-width='80px' prop="月限额" label="月限额"></el-table-column>
            <el-table-column min-width='80px' prop="月已用限额" label="月已用限额"></el-table-column>
            <el-table-column min-width='80px' prop="特定期限限额" label="特定期限限额"></el-table-column>
            <el-table-column min-width='80px' prop="特定期限已用限额" label="特定期限已用限额"></el-table-column>
            <el-table-column min-width='50px' prop="期限" label="期限"></el-table-column>
            <el-table-column prop="postscript" label="操作" >
                <template slot-scope="scope">
                    <a @click="modify(scope)">修改</a>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            class='fr'
            :page-size="10"
            layout="total, prev,pager, next, jumper"
            :total="40">
        </el-pagination>
        <el-row>
            <el-button class='mt40' style='margin-left:40%' @click='delList'>删除限额</el-button>
        </el-row>
    </div>
</template>

<script>
export default {
    data () {
        return {
            
            formData:{
                name:'11',
                number:''
            },
            aa:'100',
            otherTransList:[
                {账簿号:'1',账簿名:'1',单笔限额:'1',日限额:'1',月限额:'1',特定期限限额:'1',期限:'1',nihao:'1'},
                {账簿号:'2',账簿名:'2',单笔限额:'2',日限额:'2',月限额:'2',特定期限限额:'2',期限:'2'}
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
        // this.getList();
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
                name:this.formData.name,
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
        //多选
        checkbox(val){
            console.log(val)
        },
        //删除
        delList(){
            // this.getList();
        },
        //新增
        add(){
            this.$router.push({path:'/cashManagement/addQuota'})
        },
        //修改
        modify(scope) {
            console.log(scope.row)
            let transItem = scope.row
            sessionStorage.setItem('modifyValue', JSON.stringify(transItem));
            this.$router.push({path:'/cashManagement/modifyQuota',})
        },
    }
}
</script>
