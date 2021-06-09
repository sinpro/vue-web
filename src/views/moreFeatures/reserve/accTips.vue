<template>
    <div class="batch-transfer">
        <div v-show="type=='1'">
            <el-tabs v-model="activeName" class='mt30'>
                <el-tab-pane label="账户介绍" name="first">
                  <div>
                    <el-row :gutter="12">
                      <el-col :span="8">
                        <el-card>
                            <img class='card_img' src="/static/img/index_logo.d08c5e2.png" alt="">
                            <p class='card_p1'>账户性质</p>
                            <p class='card_p2'>存款人因临时需要并在规定期限内使用而开立的银行结算账户</p>
                        </el-card>
                      </el-col>
                      <el-col :span="8">
                        <el-card>
                            <img class='card_img' src="/static/img/index_logo.d08c5e2.png" alt="">
                            <p class='card_p1'>账户资金</p>
                            <p class='card_p2'>办理临时机构以及存款人临时经营活动发生的资金收付</p>
                        </el-card>
                      </el-col>
                      <el-col :span="8">
                        <el-card>
                            <img class='card_img' src="/static/img/index_logo.d08c5e2.png" alt="">
                            <p class='card_p1'>使用期限</p>
                            <p class='card_p2'>临时帐户的有效期最长不得超过二年</p>
                        </el-card>
                      </el-col>
                    </el-row>
                  </div>
                </el-tab-pane>
            </el-tabs>
            <el-tabs v-model="activeName" class='mt56'>
                <el-tab-pane label="开户资料" name="first">
                    <div class="news mt20">
                        <p>1.临时机构应出具其驻在地主管部门同意设立临时机构的批文原件及复印件；</p>
                        <p>2.异地从事临时经营活动的单位应出具其营业执照、临时经营地工商行政管理部门的批文原件及复印件、基本户开户许可证（基本存款账户信息）原件及复印件；</p>
                        <p>3.异地建筑施工及安装单位应出具施工、安装地建设主管部门核发的许可证或建筑施工及安装合同原件及复印件、营业执照、基本户开户许可证（基本存款账户信息）原件及复印件；</p>
                        <p>4.注册验资，应出具工商行政管理部门核发的企业名称预先核准通知书或有关部门的批文原件及复印件；</p>
                        <p>5.增资验资，应提供股东会或董事会决议等证明文件原件及复印件，基本户开户许可证（基本存款账户信息）原件及复印件；</p>
                        <p>6.单位税收居民身份信息；</p>
                        <p>7.单位受益所有人相关信息；</p>
                        <p>8.单位法定代表人（负责人）有效身份证件原件及复印件，他人代为办理，还需提供授权委托书、代理人有效身份证件原件及复印件。</p>
                        <p style='margin-top:30px'>注：单位受益所有人是指直接或间接拥有超过25%公司股权或者表决权的自然人；通过人事、财务等其他方式对公司进行控制的自然人；公司的高级管理人员。</p>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
        <div v-show="type=='2'">
            222
        </div>
        <div v-show="type=='3'">
            333
        </div>
        <div v-show="type=='4'">
            444
        </div>
        <el-row class="tc mt56">
            <el-button type="primary" @click='next'>预约开户</el-button>
        </el-row>
        <div class="wPro mtb20" style='width: 725px;height: 102px;'>
            <p style="font-weight: bold;">温馨提示</p>
            <p>1. 点击"预约开户"，进入预约开户申请流程。</p>
            <p>2. 根据页面要求填写信息并上传所需证件。</p>
            <p>3. 申请提交后，我行工作人员将尽快进行资料审核。</p>
            <p>4. 申请提交后 ，经办人可通过四川农信官网（http://www.scrcu.com）、四川农信企业网银、四川农信企业手机银行、四川农信微信公众号、四川农信商户服务微信公众号查看申请进度及审核结果。</p>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            type:String,  //根据父组件选择的账户类型，展示子组件对应的数据
        },
        data() {
            return {
                steps:1,
                activeName: 'first',
               
            }
        },
        methods: {
            //子组件想父组件传递参数 $emit
            //预约开户
            next(){
                this.$emit('childFn', '2');
            },
            
        },
    }
</script>

<style lang="scss">
    .batch-transfer {
        .out-acct{
            height: auto !important;
        }
    }
    .icon{
        padding: 25px 14px;
        border: 1px solid;
        margin-left: 65%;
        border-radius: 60px;
        background: #c8c3c3;
    }
    .el-card__body{
        padding:0px;
        width: 285px;
        height: 96px;
    }
    .card_img{
        width: 69px;
        height: 68px;
        margin-top: 15px;
        margin-left: 5px;
    }
    .card_p1{
        display: flex;
        margin-left: 90px;
        margin-top: -80px;
        font-weight: bold;
        color: #1b1b1b;
        font-family: PingFang-SC-Medium;
    }
    .card_p2{
        display: flex;
        margin-left: 90px;
        line-height: 20px;
        margin-top: 6px;
        font-family: PingFang-SC-Regular;
        color: #666666;
    }
    .news{
        width: 943px;
	    height: 448px;
	    font-family: PingFang-SC-Regular;
	    font-size: 16px;
	    font-weight: normal;
	    font-stretch: normal;
	    line-height: 36px;
	    letter-spacing: 0px;
	    color: #595959;
    }
</style>