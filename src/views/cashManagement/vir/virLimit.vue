<template>
    <div class="plr30">
        <div>
            <el-form ref="formData" label-width="35%" class='mt30'>
                <el-form-item label="企业名称：">
                    <span>XXXXXXXXXX股份有限公司</span>
                </el-form-item>
                <el-form-item label="可用额度（元）">
                    <span>1111111111111111</span>
                </el-form-item>
            </el-form>
        </div>
        <div class="one-stop-transfer">
            <table class='ml40' style='width:96%' cellspacing="0" border="1">
                <tr class="h40 ">
                    <td class="wr20 pl10">总额度</td>
                    <td class="wr30 pl10">{{}}</td>
                    <td class="wr20 pl10">已用额度</td>
                    <td class="wr30 pl10">{{}}</td>
                </tr>
            </table>
        </div>
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
                // {账号:'',户名:'',上级账号:'',上级户名:'',币种:'',上存余额:'',不归集余额:''}
            ],
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
        //详情
        // showDetail(scope){
        //     this.detailFlag = true;
        //     this.detailItem = scope.row;
        // }
    }
}
</script>
