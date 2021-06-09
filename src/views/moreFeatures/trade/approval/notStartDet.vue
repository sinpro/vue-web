<template>
    <div class="pay-confirm">
        <div>
            <title-bar title="交易详情"></title-bar>
            <div class='flex' style='width:774px;margin-left:100px'>
              <ul class='mb10 tar' style="width:387px" v-for='(value,key,index) in valueList.list'>
                  <p style="width:104px">{{key}}:</p>
                  <p style='display:flex;margin-top:-18px;margin-left:126px;'>{{value}}</p>
              </ul>
            </div>
            <!-- 详情包含表格(票据) -->
            <div v-show="tableList.length>0">
                <el-table border class="mtb56" :data="tableList">
                    <el-table-column width='80' type="index" label="序号"></el-table-column>
                    <el-table-column width='120' prop="type" label="票据类型"></el-table-column>
                    <el-table-column width='140' prop="datestart" label="出票日"></el-table-column>
                    <el-table-column width='140' prop="dateend" label="到期日"></el-table-column>
                    <el-table-column width='160' prop="money" label="票面金额(元)"></el-table-column>
                    <el-table-column width='280' prop="accon" label="收票人账号"></el-table-column>
                    <el-table-column label="操作" fixed="right">
                        <template slot-scope="scope">
                            <a @click="goDetail(scope)">详情</a>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <!-- 现金管理的表格 -->
            <div v-show="cashList.length>0">
                <el-table border class="mtb56" :data="cashList">
                    <el-table-column width='160' prop="bill" label="票号"></el-table-column>
                    <el-table-column width='120' prop="type" label="票据类型"></el-table-column>
                    <el-table-column width='180' prop="money" label="票面金额(元)"></el-table-column>
                    <el-table-column width='160' prop="dateend" label="到期日"></el-table-column>
                    <el-table-column width='160' prop="outName" label="出票人"></el-table-column>
                    <el-table-column width='160' prop="person" label="承兑人"></el-table-column>
                </el-table>
                <el-pagination
                    class='fr'
                    :page-size="10"
                    layout="total, prev,pager, next, jumper"
                    :total="40">
                </el-pagination>
            </div>
            <!-- 非撤销 -->
            <div v-show="state==0">
                <p class="leftBar f16 mt56">审批流程</p>
                <auditProcess :list="list"></auditProcess>
            </div>
            <!-- 撤销 -->
            <div v-show="state==1">
                <p class="leftBar f16 mt56">审批流程</p>
                <div>
                    <p class="leftBar1 f16 mt56 ml56">原审批流程</p>
                    <p 
                    :class="open=='0'?'el-icon-arrow-down':'el-icon-arrow-up'" 
                    @click='Open' 
                    style='display: flex;margin-top: -37px;margin-left: 598px;cursor: pointer;'
                    >{{open_val}}</p>
                    <auditProcess v-show="open=='1'" :list="list"></auditProcess>

                    <p class="leftBar1 f16 mt56 ml56">申请撤销（当前）</p>
                    <p 
                    :class="open1=='0'?'el-icon-arrow-down':'el-icon-arrow-up'" 
                    @click='Open1' 
                    style='display: flex;margin-top: -37px;margin-left: 598px;cursor: pointer;'
                    >{{open_val1}}</p>
                    <auditProcess v-show="open1=='1'" :list="list1"></auditProcess>
                </div>
            </div>
            <div>
                <el-form :model="formData" ref="formData" :rules="rules" class="mt20" label-width="308px">
                    <el-form-item label="我的审批：" prop="resource">
                        <el-radio-group v-model="formData.resource" class="p10">
                            <el-radio label="同意"></el-radio>
                            <el-radio label="拒绝"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="拒绝原因：" prop="why" v-if='formData.resource=="拒绝"'>
                        <el-input v-model="formData.why" placeholder="请输入" type="textarea" :rows="3"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <el-row class="tc mtb56">
                <el-button size='medium'  @click="goback">返回</el-button>
                <el-button size='medium' type="primary" @click="submit">提交</el-button>
            </el-row>
        </div>
    </div>
</template>

<script>
import mathTools from 'utils/mathTools.js'
import auditProcess from "src/components/auditProcess/index.vue";
export default {
    components:{
        auditProcess
    },
    data () {
        return {
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
            list1: [
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
            ],
            valueList:[],
            state:0,//是否有撤销审批
            open:'0',
            open_val:'展开',
            open1:'1',
            open_val1:'收起',
            tableList:[
                {type:'银票',datestart:'2020-01-01',dateend:'2020-01-01',money:'11111100.00',accon:'8888 8888 8888 8888 888',}
            ],
            cashList:[
                {bill:'438190803185',type:'银票',dateend:'2020-01-01',money:'11111100.00',person:'中国银行', outName:'恒生电子'}
            ],//现金管理的表格
            formData:{
                resource:'同意',
                why:'',
                result:0,//我的审批。0 同意 1 拒绝
            },
            rules:{
                resource: [{required: true,message: '请选择',trigger: 'change'}],
                why: [{required: true,message: '请输入拒绝原因',trigger: 'blur'}],
            },
        }
    },

    mounted() {
        this.valueList = JSON.parse(window.sessionStorage.getItem('waitvalue'))
        console.log('11',this.valueList)
    },
    methods: {
           //重新提交
           submit(){
               this.$refs['formData'].validate((valid) =>{
                    if(valid){
                        if(this.formData.resource=='同意'){
                            this.formData.result = 0
                            this.formData.why = ''
                        }else if(this.formData.resource=='拒绝'){
                            this.formData.result = 1
                        }
                        console.log(this.formData.resource,this.formData.result,this.formData.why)
                    }
               });
           },
           //返回
           goback(){
               this.$router.go(-1)
           },
           //原审批展开/收起
           Open(){
               if(this.open=='0'){
                   this.open = '1';
                   this.open_val = '收起'
               }else if(this.open=='1'){
                   this.open = '0';
                   this.open_val = '展开'
               }
           },
           //当前审批展开/收起
           Open1(){
               if(this.open1=='0'){
                   this.open1 = '1';
                   this.open_val1 = '收起'
               }else if(this.open1=='1'){
                   this.open1 = '0';
                   this.open_val1 = '展开'
               }
           },
        //    table表格详情
           goDetail(scope){
               console.log(scope.row)
           },
    },
}
</script>
<style lang="scss">
    .pay-confirm{
        .table-wrapper{
            td{
                padding-left: 20px;
            }
        }
        .el-table__header .el-table-column--selection .cell .el-checkbox:after {
            content: "全选";
        }
        .del-icon{
            position: absolute;
            right: 20px;
            top: 50%;
        }
    }
    .leftBar1 {
    margin-bottom: 20px;
    color: #1b1b1b;
    font-family: PingFang-SC-Regular;
	font-size: 18px;
    &::before {
    	display: inline-block;
        content: '';
        width: 3px;
        height: 16px;
        background-color: #059c5d;
        margin-right: 8px;
        position: relative;
        top: 2px;
    }
}
</style>