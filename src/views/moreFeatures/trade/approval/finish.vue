<template>
    <div class="deposit-refund">
        <div v-show="steps==1">
            <el-form :model="formData" ref="formData" :rules="rules" class="mt20">
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="交易类型:">
                            <el-select v-model="formData.acctNo">
                                <el-option value='1' label="账户一"></el-option>
                                <el-option value='2' label="账户二"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="14">
                        <el-form-item label="提交时间:">
                            <el-date-picker
                                v-model="formData.transDate"
                                type="daterange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10">
                        <el-form-item label="审批状态:">
                            <el-select v-model="formData.acctNo">
                                <el-option value='1' label="账户一"></el-option>
                                <el-option value='2' label="账户二"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <div class="tc pt20">
                    <el-button type="primary" size="mini" @click="getList">查询</el-button>
                </div>
            </el-form>
            <div class='mt20'>
                <el-card class='mt20' v-for='(item,index) in depositList' :key='index'>
                    <p class='mb10 p_titel1'>转账汇款-单笔转账</p>
                    <div class='title1'>
                        <el-button size='small' class='title2' v-show="item.state==0">{{item.result}}</el-button>
                        <el-button size='small' class='title2' style='color: #eb3d3d;border: 1px solid #eb3d3d;' 
                        v-show="item.state==1 || item.state==2">{{item.result}}</el-button>
                        <el-button size='small' class='title2' style='color: #666666;border: 1px solid #666666;' 
                        v-show="item.state==3">{{item.result}}</el-button>
                        <span class='title3'>{{item.time}}</span>
                    </div>
                    <div class='tar mb60 mt10'>
                        <p class='p_money moneybold'>150,000.00元</p>
                        <p style='margin-top:12px'>交易金额</p>
                    </div>
                    <div class='flex' style='margin-bottom:40px;width:800px;margin-top:-95px;'>
                      <ul class='mb10' style="width:400px" v-for='(value,key,index) in item.list'>
                          <p style="width:104px">{{key}}:</p>
                          <p style='display:flex;margin-top:-18px;margin-left:126px;'>{{value}}</p>
                      </ul>
                    </div>
                    <div style='display:flex;margin-bottom:-40px;color:#999999;font-size:14px;'>
                        <span>提交时间：{{item.time1}}</span>
                        <!-- <span style='margin-left:23px'>下一级审批人：张三</span>
                        <span style='margin-left:36px'>审批截止日期：2021-06-30</span> -->
                    </div>
                    <div class='tar'>
                      <el-button size='small' v-show="item.state==0" @click='goDetail(index,item)'>查看交易结果</el-button>
                      <el-button size='small' v-show="item.state!=0" @click='goDetail(index,item)'>审批详情</el-button>
                    </div>
                  
                </el-card>
                <div class="tar mt20">
                    <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-sizes="[100, 200, 300, 400]"
                        :page-size="100"
                        layout="prev,pager,next, sizes,jumper"
                        :total="400">
                    </el-pagination>
                </div>
            </div>
        </div>
        <div v-if="steps == 2" class="batchStopSuccess">
            <span>总金额： </span>
            <span class="moneybold f20">40,000.00元</span>
            <span class="ml8 gray2"
              >(大写：叁拾万元整 )</span
            >
            <div class="mt20 wr100 h200 bgbrand ptb30 plr70 borderbox flex alc">
              <div>
                <div class="step-success mt10">
                  <i class="el-icon-check"></i>
                </div>
                <div class="step-inner"></div>
                <div class="step-errer bgtips">
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div class="ml20">
                <div>
                  <p class="f18 lh34">交易已提交</p>
                  <p class="gray2">2021-01-01 13:32:22</p>
                </div>
                <div class="mt30">
                  <p class="f22 ctips lh40">待审批</p>
                  <p>下一级审批人：王校长</p>
                </div>
              </div>
            </div>
            <div class="mtb56 tc">
              <el-button type="primary" @click='steps=1'>完成</el-button>
            </div>
        </div>
        <el-dialog title="退款详情：" :visible.sync="detailFlag" :show-close='false' size="medium" text>
          <title-bar title="订单信息"></title-bar>
          <div class="cont1 flex">
            <ul class="ul1 cp3 f16 lh16 tar">
              <li>收款人代码/名称</li>
              <li>收款人账户</li>
              <li>收款方开户行</li>
              <li>缴款金额</li>
              <li>手续费</li>
              <li>下单时间</li>
              <li>用途</li>
            </ul>
            <ul class="ul2 cp1 f16 lh16">
              <li>654122544 | 德阳独立建网</li>
              <li>5000 2354 2975 5634</li>
              <li>四川成都建设银行锦江支行</li>
              <li>缴款</li>
              <li>abc2020010125456</li>
              <li>德阳独立建网</li>
              <li>资阳雁江农村合作银行</li>
            </ul>
            <ul class="ul3 cp3 f16 lh16 tar">
              <li>付款方名称</li>
              <li>付款人账户</li>
              <li>付款方开户行</li>
              <li>投标单位名称</li>
              <li>订单号码</li>
              <li>是否退息</li>
              <li>摘要</li>
            </ul>
            <ul class="ul4 cp1 f16 lh16">
              <li>南方置业有限公司</li>
              <li>623192 **** 9999</li>
              <li>四川成都建设银行锦江支行</li>
              <li>100,000.00元</li>
              <li>2017-10-10</li>
              <li>878533 **** 7865</li>
              <li>--</li>
            </ul>
          </div>
          <div slot="footer" class="dialog-footer m12">
            <el-button @click="detailFlag = false" type="primary">确定</el-button>
          </div>
        </el-dialog>
    </div>
</template>

<script>
import mathTools from 'utils/mathTools.js'
import dateTools from 'utils/dateTools.js'
export default {
    data () {
        return {
            state:1,//是否可撤销
            steps:1,
            isNo:false,
            currentPage: 1,
            detailFlag: false,
            detailItem:{},
            formData: {
                acctNo:'',
                transDate:'',
            },
            rules:{
                transDate:[
                    { required: true, message: '请选择交易日期', trigger: 'change' }
                ]
            },
            chekcDepositList:[],
            depositList:[
                {
                    list:{
                      收款户名:'asdsa13213131',
                      unitName:'XXXX有限公司',
                      预约转出日期:'2020-12-12 12:32:21',
                      payAmount:'1000.12',
                      收款账号:'2020-12-12 12:32:21',
                      payAmount1:'1000.12',
                      payTime2:'2020-12-12 12:32:21',
                      payAmount2:'1000.12',
                    },
                    state:0,
                    result:'审批通过',
                    time:'2021-02-25 15:12:25',
                    time1:'2020-06-31  12:09:12',
                },
                {
                    list:{
                      收款户名:'asdsa13213131',
                      unitName:'XXXX有限公司',
                      预约转出日期:'2020-12-12 12:32:21',
                      payAmount:'1000.12',
                    },
                    state:1,
                    result:'审批拒绝',
                    time:'2021-02-25 15:12:25',
                    time1:'2020-06-31  12:09:12',
                },
                {
                    list:{
                      收款户名:'asdsa13213131',
                      unitName:'XXXX有限公司',
                      预约转出日期:'2020-12-12 12:32:21',
                    },
                    state:2,
                    time:'2021-02-25 15:12:25',
                    time1:'2020-06-31  12:09:12',
                    result:'审批过期'
                },
                {
                    list:{
                      收款户名:'asdsa13213131',
                      unitName:'XXXX有限公司',
                      预约转出日期:'2020-12-12 12:32:21',
                      payAmount:'1000.12',
                      收款账号:'2020-12-12 12:32:21',
                    },
                    state:3,
                    time:'2021-02-25 15:12:25',
                    time1:'2020-06-31  12:09:12',
                    result:'已撤销'
                },
            ]
        }
    },
    methods: {
        //查询列表
        getList(){
            //查询为空 this.isNo = ture
        },
        //跳转审批详情
        goDetail(index,item){
            console.log(index)
            console.log(item)
            window.sessionStorage.setItem('value', JSON.stringify(item));
            this.$router.push('/more/trade/approval/rest/finish/finishDetail')
        },



        showDetail(scope){
            this.detailItem = scope.row;
            this.detailFlag = true;
        },
        handleSelectionChange(val){
            this.chekcDepositList = val;
        },
        handleSizeChange(val){
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },  
    },
    filters: {
        amountFormat(val){
            return mathTools.addDecollator(val);
        },
        timeFormat(val){
            return dateTools.date2Str(val);
        }
    }
}
</script>

<style lang="scss">
.cont1 {
  >ul>li {
    list-style: none;
  }
  .ul1 {
    margin-left: 28px;
    >li+li {
      margin-top: 23px;
    }
    margin-right: 22px;
    width: 119px;
  }
  .ul2 {
    >li+li {
      margin-top: 23px;
    }
    width: 195px;
  }
  .ul3 {
    margin-left: 90px;
    >li+li {
      margin-top: 23px;
    }
    margin-right: 22px;
    width: 96px;
  }
  .ul4 {
    margin-right: 97px;
    >li+li {
      margin-top: 23px;
      width:192px;
    }
  }
}
.batchStopSuccess {
  .step-success {
    margin-left: 7px;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background: #99d4b9;
    line-height: 30px;
    text-align: center;
    color: #fff;
    i {
      font-weight: bold;
    }
  }
  .step-errer {
    position: relative;
    height: 45px;
    width: 45px;
    border-radius: 50%;
    line-height: 45px;
    text-align: center;
    & :first-child {
      position: absolute;
      left: 20px;
      top: 6px;
      height: 18px;
      width: 3px;
      background: #fff;
    }
    & :last-child {
      position: absolute;
      right: 6px;
      top: 22px;
      width: 18px;
      height: 3px;
      background: #fff;
    }
  }
  .step-inner {
    height: 50px;
    width: 3px;
    background: #99d4b9;
    margin-left: 20px;
  }
}
.el-col-10 {
    width: 45%;
}
.el-col-14 {
    width: 55%;
}
.p_money{
	// font-family: Manrope3-Bold;
	font-size: 24px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #c6a34f;
}
.p_titel1{
	font-family: PingFang-SC-Bold;
	font-size: 20px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 38px;
	letter-spacing: 0px;
	color: #1b1b1b;
}
.title1{
    display: flex;
    margin-top: -44px;
    margin-left: 215px;
}
.title2{
    height: 28px;
    width: 81px;
    padding: 0;
}
.title3{
    margin-left:9px;
    color:#999999;
    font-size:14px;
    margin-top: 6px;
}
</style>