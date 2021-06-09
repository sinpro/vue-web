<template>
    <div class="plr30">
        <div v-show='step=="1"'>
            <el-form ref="formData" :model="formData" :rules="formRules" label-width="308px" class='mt30'>
                <title-bar title="申请进度查询"></title-bar>
                <el-form-item label="图形验证码：" prop="name1">
                    <el-input v-model="formData.name1" style="width:222px" placeholder="请输入内容"></el-input>
                    <button style='margin-left: 7px;'>图形验证码</button>
                </el-form-item>
                <el-form-item label="经办人手机号码：" prop="name1">
                    <el-input v-model="formData.name1" placeholder="请输入内容"></el-input>
                </el-form-item>
                <el-form-item label="短信验证码：" prop="name1">
                    <el-input v-model="formData.name1" style="width:222px" placeholder="请输入内容" ></el-input>
                    <el-button style='margin-left: 7px;width:86px;padding-left: 7px;font-size: 14px;'>获取验证码</el-button>
                </el-form-item>
            </el-form>
        </div>
        <el-row v-show="step=='1'" class="tc mt10">
            <el-button type="primary" @click="getDetail">查询</el-button>
        </el-row>
        <div v-show="step=='2'">
            <title-bar title="申请记录"></title-bar>
            <el-table border class="mtb20" :data="otherTransList">
            <el-table-column min-width='120px' prop="单位名称" label="单位名称"></el-table-column>
            <el-table-column min-width='120px' prop="预约编号" label="预约编号"></el-table-column>
            <el-table-column min-width='120px' prop="申请时间" label="申请时间"></el-table-column>
            <el-table-column min-width='120px' prop="审核状态" label="审核状态"></el-table-column>
            <el-table-column prop="postscript" label="操作" >
                <template slot-scope="scope">
                    <a @click="getDetail(scope)">详情</a>
                </template>
            </el-table-column>
            </el-table>
            <el-pagination
                class='fr'
                :page-size="10"
                layout="total, prev,pager, next, jumper"
                :total="40">
            </el-pagination>
            <el-row class="tc" style='margin-top: 90px'>
                <el-button type="primary" @click="goback">返回</el-button>
            </el-row>
        </div>
        <div v-show="step=='3'">
            <!-- 详情 -->
        </div>
    </div>
</template>

<script>
export default {
    name: "sweepBalance",
    data () {
        return {
            step:'1',
            formData:{
                name1:'11',
                number:'',
                code:''
            },
            formRules:{
                name1:[{required: true, message: '请选择账号', trigger: 'blur' }]
            },
            otherTransList:[],//申请记录
        }
    },
    mounted() {
    },
    methods: {
        //查询
        getDetail(){
            // let params = {
            //     name1:this.formData.name1,
            //     number:this.formData.number
            // }
            // this.$http.request(this,'POST','api/MC007013.do',params).then(res =>{
            //   console.log(res)
            // }).catch(function(error) {});
            this.step='2'
        },
        //返回
        goback(){
            this.step='1'
        }
    }
}
</script>
