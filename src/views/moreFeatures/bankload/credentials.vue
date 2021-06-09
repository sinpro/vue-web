<template>
    <div class="">
        <div class='mt30'>
            <title-bar title="证书管理"></title-bar>
            <div class="cont11 flex">
                <ul class="ul1 cp3 f16 lh16 tar">
                    <li>客户号</li>
                    <li>证书状态</li>
                    <li>生效日期</li>
                </ul>
                <ul class="ul2 cp1 f16 lh16">
                    <li>100230045006</li>
                    <li>正常</li>
                    <li>2016-04-12</li>
                </ul>
                <ul class="ul3 cp3 f16 lh16 tar">
                    <li>证书类型</li>
                    <li>证书序列号</li>
                    <li>失效日期</li>
                </ul>
                <ul class="ul4 cp1 f16 lh16">
                    <li>UKey证书</li>
                    <li>20045612344362</li>
                    <li>2026-04-11（即将到期）</li>
                </ul>
            </div>
            <!-- <div class='flex mt56' style='width:774px;margin-left:100px'>
              <ul class='mb10 tar' style="width:387px" v-for='(value,key,index) in valueList'>
                  <p style="width:104px">{{key}}:</p>
                  <p style='display:flex;margin-top:-18px;margin-left:126px;'>{{value}}</p>
              </ul>
            </div> -->
            <el-row class="tc mtb56" v-show="state=='1'">
                <el-button type="primary" @click="before">证书下载</el-button>
            </el-row>
            <el-row class="tc mtb30" v-show="state=='2'">
                <el-button size='medium' type="primary" @click="before">证书更新</el-button>
            </el-row>
            <el-row class="tc mtb30" v-show="state=='2'">
                <el-button size='medium' type="primary" @click="submit">两码重发</el-button>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                state:1,//证书有效且已下载 0 证书未下载且证书正常 1 证书已下载且状态正常2 证书已下载，状态超过有效期 3
                valueList:{},
                list:{姓名:'name',年龄:'age',编号:'id',数字:'nember',类型:'type',手机:'phone'},
            }
        },
        mounted() {
            // this.getnumber()//获取账号列表
            let objList= {}
            let  obj={age:'2',name:'1',id:'3',nember:'4',type:'5',phone:'6'}
            // for (var key in obj){
            //     for (var value in this.list){
            //         if(key==this.list[value]){
            //             this.$set(objList,value,obj[key])
            //             console.log('1')
            //         }
            //     }
            // }
            for (var key in this.list){
                for (var value in obj){
                    if(this.list[key]==value){
                        this.$set(objList,key,obj[value])
                        console.log('1')
                    }
                }
            }
            this.valueList = objList
            console.log(objList)
        },
        methods: {
            //返回
            before(){
                this.$router.go(-1)
            },
            //撤销
            revoke(){
                alert(1)
            },
            //电子回单
            submit(){
                alert(1)
            },


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
        }
    }
</script>
<style lang="scss">
.cont11 {
      >ul>li {
        list-style: none;
      }
      .ul1 {
        margin-left: 97px;
        >li+li {
          margin-top: 23px;
        }
        margin-right: 22px;
        width: 65px;
      }
      .ul2 {
        >li+li {
          margin-top: 23px;
        }
        width: 143px;
      }
      .ul3 {
        margin-left: 245px;
        >li+li {
          margin-top: 23px;
        }
        margin-right: 22px;
        width: 80px;
      }
      .ul4 {
        margin-right: 85px;
        >li+li {
          margin-top: 23px;
          width:185px;
        }
      }
    }
</style>