<template>
    <div class="payment-records">
        <div v-if="steps == '1'">
            <title-bar title="缴费记录查询"></title-bar>
            <el-form :inline="true" class="mt10" :model="formData" label-width="130px">
                <el-form-item label="付款账号：">
                    <el-select v-model="formData.acctNo">
                        <el-option value="1" label="卡一"></el-option>
                        <el-option value="2" label="卡二"></el-option>
                        <el-option value="3" label="卡三"></el-option>
                    </el-select>
                </el-form-item>
            
                <el-form-item label="交易类型：">
                    <el-select v-model="formData.tansType">
                        <el-option value="1" label="类型一"></el-option>
                        <el-option value="2" label="类型二"></el-option>
                        <el-option value="3" label="类型三"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="交易状态：">
                    <el-select v-model="formData.tansStatus">
                        <el-option value="1" label="状态一"></el-option>
                        <el-option value="2" label="状态二"></el-option>
                        <el-option value="3" label="状态三"></el-option>
                    </el-select>
                </el-form-item>
            
                <el-form-item label="交易日期：">
                    <el-date-picker
                        v-model="formData.transTime"
                        type="daterange"
                        @change='datePickerChange'
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                    </el-date-picker>
                    <el-radio-group v-model="radio" @change='getDate'>
                        <el-radio :label="3">近3月</el-radio>
                        <el-radio :label="6">近6月</el-radio>
                        <el-radio :label="12">近1年</el-radio>
                    </el-radio-group>
                </el-form-item>
            
            </el-form>
            <el-row class="tc mt10">
                <el-button type="primary" size="small">查询</el-button>
            </el-row>
            <title-bar title="查询结果"></title-bar>
            <el-table :data="tableData" class="mt20">
                <el-table-column label='序号' width="100"  type="index"></el-table-column>
                <el-table-column label='用户名称' prop="userName"></el-table-column>
                <el-table-column label='缴费金额' prop="transAmount"></el-table-column>
                <el-table-column label='交易时间' prop="transTime"></el-table-column>
                <el-table-column label='交易状态' prop="status"></el-table-column>
                <el-table-column label='操作'>
                    <template slot-scope="scope">
                        <a @click="detail(scope)">详情</a>
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
        <div v-if="steps == '2'">
            <div class='success_icon'>
              <p class='el-icon-success p_icon'></p>
              <p class='p1_icon'>提交成功</p>
              <p class='p2_icon'>缴费金额600,000.00元</p>
            </div>
            <div>
                <title-bar title="缴费详情"></title-bar>
                <div class="cont1 flex">
                  <ul class="ul1 cp3 f16 lh16 tar">
                    <li>缴费类型</li>
                    <li>用户名称</li>
                    <li>用户地址</li>
                    <li style='margin-top: 39px'>缴费号码</li>
                    <li>付款账户</li>
                  </ul>
                  <ul class="ul2 cp1 f16 lh16">
                    <li>电力缴费</li>
                    <li>北京易诚互动网络科技公司</li>
                    <li>四川省成都市锦江区牛市口通源街588号5-3-2001</li>
                    <li>4233222333244434</li>
                    <li>北京易诚互动网络科技技术公司北京|623144 **** 9032</li>
                  </ul>
                  <ul class="ul3 cp3 f16 lh16 tar">
                    <li>缴费单位</li>
                    <li>交易流水号</li>
                    <li>交易时间</li>
                    <li style='margin-top: 39px'>电业局编码</li>
                    <li>备注</li>
                  </ul>
                  <ul class="ul4 cp1 f16 lh16">
                    <li>四川电力公司</li>
                    <li>323222444442332</li>
                    <li>2020-10-03  13:21:12</li>
                    <li style='margin-top: 39px'>3222324555</li>
                    <li>--</li>
                  </ul>
                </div>
                <title-bar title="审批流程" class="mtb20"></title-bar>
                <div>
                    <auditProcess :list="list"></auditProcess>
                </div>
            </div>
            <div class="tc mtb20">
                <el-button @click="steps='1'">完成</el-button>
                <el-button type="primary" @click="receiptFlag=true">电子回单</el-button>
            </div>

            <el-dialog title="回单详情信息" :visible.sync="receiptFlag" :show-close='false' size="medium" text>
              <div>
                  <img class='bill_img' src="/static/img/index_logo.d08c5e2.png" alt="">
                  <p class="leftBar1 f16 mtb20">莲溪农商银行</p>
                  <p class='bill_p'>企业网上银行电子回单</p>
              </div>
              <div class="cont2 flex">
                <ul class="ul1 cp3 f14 lh16 tal">
                  <li>电子回单号:</li>
                  <li>付款人账号:</li>
                  <li>付款人户名:</li>
                  <li>付款人开户行:</li>
                </ul>
                <ul class="ul2 cp1 f14 lh16">
                  <li class='li_left'>BTCH20035425477584235</li>
                  <li class='li_left'>5000 2354 2975 5634</li>
                  <li class='li_left'>四川简阳投资发展有限公司</li>
                  <li style='width:253px'>简阳市农村商业银行股份有限公司xx支行</li>
                </ul>
                <ul class="ul3 cp3 f14 lh16 tal">
                  <li>打印时间:</li>
                  <li>收款人账号:</li>
                  <li>收款人户名:</li>
                  <li>收款人开户行:</li>
                </ul>
                <ul class="ul4 cp1 f14 lh16">
                  <li style='margin-left: -29px;'>南方置业有限公司</li>
                  <li class='li_left'>623192 **** 9999</li>
                  <li class='li_left'>四川成都建设银行锦江支行</li>
                  <li style='width:261px'>四川成都建设银行锦江支行四川成都建设银行锦江支行四川成都建设银行锦江支行</li>
                </ul>
              </div>
              <div class="borderb mt20"></div>
              <div class="cont2 flex mt20">
                <ul class="ul1 cp3 f14 lh16 tal">
                  <li>业务种类:</li>
                  <li>交易金额(大写):</li>
                  <li>交易金额(小写):</li>
                </ul>
                <ul class="ul2 cp1 f14 lh16">
                  <li style='margin-left: -38px;'>电力缴费</li>
                  <li style='width:224px'>叁百元整叁百元整叁百元整叁百元整</li>
                  <li>300.00元</li>
                </ul>
                <ul style='margin-left: 93px;' class="ul3 cp3 f14 lh16 tal">
                  <li>交易时间:</li>
                  <li>交易流水号:</li>
                </ul>
                <ul class="ul4 cp1 f14 lh16">
                  <li style='margin-left: -14px;'>2020-0812  10:34:12</li>
                  <li>623192 **** 9999</li>
                </ul>
              </div>
              <div class='bill_tip'>
                  <p class='bill_tip1'>重要提示：</p>
                  <p>1.电子回单编号相同表示同一笔业务回单，请勿重复记账使用；</p>
                  <p>2.已在银行柜台领取业务回单的单位，请注意核对，请勿重复记账。</p>
              </div>
              <div class='bill_end'>
                  <span>录入员：李丽</span>
                  <span style='margin-left:125px'>复核员：张思崇</span>
                  <span style='margin-left:125px'>授权员：李帅</span>
                  <img class='bill_img1' src="/static/img/index_logo.d08c5e2.png" alt="">
              </div>
              <div slot="footer" class="dialog-footer m12">
                <el-button size="medium" @click="receiptFlag = false" type="primary">下载</el-button>
                <el-button size="medium" @click="receiptFlag = false" type="primary">打印</el-button>
              </div>
            </el-dialog>
        </div>

    </div>
</template>

<script>
import dateTools from 'utils/dateTools.js'
import auditProcess from "src/components/auditProcess/index.vue";
export default {
    components: {
      auditProcess,
    },
    data () {
        return {
            steps: '1',
            currentPage:1,
            radio:'',
            detailItem:{},
            receiptFlag: false,
            formData:{
                acctNo:'',
                tansType:'',
                transTime:'',
                tansStatus:'',
            },
            tableData:[
                {
                    userName:'*小慧',
                    transAmount:'10000.00',
                    transTime:'2020-12-12 12-12-12',
                    status:'处理成功'
                },
                {
                    userName:'*小慧',
                    transAmount:'10000.00',
                    transTime:'2020-12-12 12-12-12',
                    status:'处理成功'
                },
                {
                    userName:'*小慧',
                    transAmount:'10000.00',
                    transTime:'2020-12-12 12-12-12',
                    status:'处理成功'
                }
            ],
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
        }
    },

    methods: {
        //详情
        detail(scope){
            this.detailItem = scope.row.detailItem;
            this.steps = '2';
        },
        handleSizeChange(val){
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        //交易日期范围手选
        datePickerChange(e){
            this.radio = '';
        },
        //交易日期时间段选择
        getDate(val){
            let currentDate = new Date();
            let beforeDate = dateTools.getPreMonthDay(currentDate, val);
            this.formData.transTime = [beforeDate, currentDate]
        }
    }
}
</script>

<style lang="scss">
    .payment-records{
        .table-wrapper{
            border: #c9c9c9;
            td{
                padding-left: 16px;
            }
        }
    }
    .cont1 {
      >ul>li {
        list-style: none;
      }
      .ul1 {
        margin-left: 98px;
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
        width: 258px;
      }
      .ul3 {
        margin-left: 107px;
        >li+li {
          margin-top: 23px;
        }
        margin-right: 22px;
        width: 80px;
      }
      .ul4 {
        margin-right: 119px;
        >li+li {
          margin-top: 23px;
          width:173px;
        }
      }
    }
    .cont2 {
      >ul>li {
        list-style: none;
        color: #595959;
      }
      .ul1 {
        margin-left: 62px;
        >li+li {
          margin-top: 23px;
        }
        margin-right: 5px;
      }
      .ul2 {
        >li+li {
          margin-top: 23px;
        }
      }
      .ul3 {
        margin-left: 72px;
        >li+li {
          margin-top: 23px;
        }
        margin-right: 5px;
      }
      .ul4 {
        // margin-right: 120px;
        >li+li {
          margin-top: 23px;
        }
      }
    }
    .success_icon{
      width: 210px;
      height: 211px;
      text-align: center;
      margin-left: 371px;
      margin-top: 60px;
      line-height: 32px;
    }
    .p_icon{
      color: #059c5d;
      font-size: 51px;
    }
    .p1_icon{
	    font-family: PingFang-SC-Bold;
	    font-size: 22px;
	    font-weight: normal;
	    font-stretch: normal;
	    letter-spacing: 0px;
	    color: #1b1b1b;
    }
    .p2_icon{
	    font-family: PingFang-SC-Light;
	    font-size: 16px;
	    font-weight: normal;
	    font-stretch: normal;
	    letter-spacing: 0px;
	    color: #999999;
    }
    .leftBar1 {
        display: flex;
        margin-bottom: 20px;
        // color: $color-brand-2;
        margin-top: -27px;
        margin-left: 197px;
        font-size: 16px;
        &::before {
        	display: inline-block;
            content: '';
            width: 3px;
            height: 16px;
            background-color: #787878;
            margin-right: 8px;
            position: relative;
            top: 2px;
        }
    }
    .bill_img{
        width: 115px;
        height: 33px;
        margin-left: 62px;
    }
    .bill_p{
        width: 200px;
	    height: 20px;
	    font-family: PingFang-SC-Bold;
	    font-size: 20px;
	    font-weight: normal;
	    font-stretch: normal;
	    line-height: 24px;
	    letter-spacing: 0px;
	    color: #1b1b1b;
        display: flex;
        margin-left: 364px;
        margin-top: -42px;
        margin-bottom: 52px;
    }
    .li_left{
        margin-left: -16px;
    }
    .bill_tip{
        margin-left: 62px;
        margin-top:22px;
        font-size: 14px;
        line-height: 1.5;
        color: #999999;
    }
    .bill_tip1{
        font-family: PingFang-SC-Bold;
        font-weight: bold;
        color: #1b1b1b;
    }
    .bill_end{
        margin-left: 62px;
        margin-top:22px;
        font-size: 14px;
        margin-bottom: 20px;
    }
    .bill_img1{
        width: 197px;
	    height: 123px;
        display: flex;
        margin-left: 580px;
        margin-top: -123px;
    }
</style>