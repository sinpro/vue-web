<template>
    <div class="deposit-refund">
        <div v-show="steps==1">
            <title-bar title="退款失败清单"></title-bar>
            <el-form :model="formData" ref="formData" :rules="rules" class="mt20">
            <el-row>
                <el-col :span="10">
                    <el-form-item label="账户：">
                        <el-select v-model="formData.acctNo">
                            <el-option value='1' label="账户一"></el-option>
                            <el-option value='2' label="账户二"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="14">
                    <el-form-item label="交易日期：" prop="transDate">
                        <el-date-picker
                            v-model="formData.transDate"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
                        </el-date-picker>
                        <el-button type="primary" size="mini">查询</el-button>
                    </el-form-item>
                </el-col>
            </el-row>
            </el-form>
            <div>
            <el-table :data="depositList" @selection-change="handleSelectionChange" stripe style="margin: 20px 0">
                <el-table-column type="selection" width="100"></el-table-column>
                <el-table-column label="投标单位账户" prop="acctName"></el-table-column>
                <el-table-column label="投标单位名称" prop="unitName"></el-table-column>
                <el-table-column label="付款时间" prop="payTime">
                    <template slot-scope="scope">
                        <span>{{scope.row.payTime | timeFormat}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="付款金额" prop="payAmount">
                    <template slot-scope="scope">
                        <span>{{scope.row.payAmount | amountFormat}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <a @click="showDetail(scope)">详情</a>
                    </template>
                </el-table-column>
            </el-table>
            <div class="tar mt10">
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
            <div class="tc mt30">
                <el-button type="primary" @click='steps=2'>再次退款</el-button>
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
            steps:1,
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
                    acctName:'asdsa13213131',
                    unitName:'XXXX有限公司',
                    payTime:'2020-12-12 12:32:21',
                    payAmount:'1000.12',
                },
                {
                    acctName:'asdsa13213131',
                    unitName:'XXXX有限公司',
                    payTime:'2020-12-12 12:32:21',
                    payAmount:'1000.12',
                },
                {
                    acctName:'asdsa13213131',
                    unitName:'XXXX有限公司',
                    payTime:'2020-12-12 12:32:21',
                    payAmount:'1000.12',
                }
            ]
        }
    },
    methods: {
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
</style>