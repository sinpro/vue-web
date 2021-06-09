<template>
    <div class="pay-confirm">
        <div>
            <title-bar title="交易详情"></title-bar>
            <div class='flex' style='width:774px;margin-left:100px'>
              <ul class='mb10 tar' style="width:387px" v-for='(value,key,index) in valueList'>
                  <p style="width:104px">{{key}}:</p>
                  <p class='p_val' :style="{color:(value=='交易失败'?'#eb3d3d':'')}">{{value}}</p>
              </ul>
            </div>
            <title-bar title="审批流程" class='mt56'></title-bar>
            <auditProcess :list="list"></auditProcess>
            <el-row class="tc mtb56">
                <el-button size='medium'  @click="submit">重新提交</el-button>
                <el-button size='medium' type="primary" @click="goback">返回</el-button>
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
            valueList:[],
        }
    },

    mounted() {
        this.valueList = JSON.parse(window.sessionStorage.getItem('value'))
        console.log('11',this.valueList)
    },
    methods: {
           //重新提交
           submit(){},
           //返回
           goback(){
               this.$router.go(-1)
           }
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
    .p_val{
        display:flex;
        margin-top:-18px;
        margin-left:126px;
    }
</style>