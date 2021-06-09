<template>
  <div class="detail">
    <div id="card" class="BoxShadow">
      <div class="left">
        <div class="title">
          <span> 建成财汇盈·升金第67期 非保本浮动收益类（14532） </span>
          <el-tag class="firstTag ml20">保本浮动收益类</el-tag>
          <el-tag type="danger">低风险</el-tag>
        </div>
        <div class="content">
          <div>
            <div class="per">
              <span>5.88</span><span class="unit">%</span><span>-</span
              ><span>5.88</span><span class="unit">%</span>
            </div>
            <p class="cbg">业绩比较基准</p>
          </div>
          <div>
            <span class="amount">100000</span>
            <p class="cbg">起售金额</p>
          </div>
          <div>
            <span class="amount">100天</span>
            <p class="cbg">产品期限</p>
          </div>
          <div>
            <span class="amount">2,100,000份</span>
            <p class="cbg">剩余份额(10%)</p>
          </div>
        </div>
        <el-divider></el-divider>
        <div class="tr mr25 mb20">
          <el-button @click="buyIt">预约</el-button>
          <el-button type="primary">购买</el-button>
        </div>
      </div>
    </div>
    <div class="tr gray2 mt20 mr25">
      <p>理财非存款，产品有风险，投资需谨慎</p>
    </div>
    <div class="bottom mt20">
      <div class="step">
        <el-steps :space="200" :active="1" finish-status="success">
          <el-step title="销售开始时间"></el-step>
          <el-step title="销售结束时间"></el-step>
          <el-step title="成立日"></el-step>
          <el-step title="产品到期日"></el-step>
        </el-steps>
      </div>
      <div class="cg bold mt40 flex bt ml20">
        <p>单位净值</p>
        <div class="">
          <el-radio-group v-model="form.qixian">
            <el-radio label="2">30天以下</el-radio>
            <el-radio label="3">31-90天</el-radio>
            <el-radio label="4">91-180天</el-radio>
          </el-radio-group>
        </div>
      </div>
      <div>
        <my-chart />
      </div>
      <div class="mt40 ml20">
        <p class="cg bold">交易规则</p>
        <el-row class="mt20 ml35">
          <span class="bold mr10">购买时间</span>
          <span>2020-01-02 9:00 至 2020-01-30 18:00</span>
        </el-row>
        <el-row class="mt20 ml35">
          <span class="bold mr10">赎回时间 </span>
          <span>每周二 9:00-12:00</span>
        </el-row>
        <el-row class="mt20 ml35">
          <span class="bold mr10">到账时间</span>
          <span>T+3日到账</span>
        </el-row>
      </div>
      <div class="ml20 mt40">
        <p class="cg bold">相关协议</p>
        <p class="xieyi mt20 ml35" @click="showAgg">
          《风险揭示书》、《客户权益须知》、《产品说明书》、《理财产品委托书》、《理财产品协议》
        </p>
      </div>
    </div>

    <!-- 弹框展示协议和业绩比较基准 -->
    <el-dialog
      title="协议名称"
      :visible.sync="dialogVisibles"
      :show-close="false"
      center
      size="small"
      text
    >
      <div>
        <p class="title">服务使用协议</p>
        <p class="content">
          微博运营方同意按照本协议的规定及其不时发布的操作规则向用户提供微博服务。为获得微博服务，微博服务使用人（以下称"用户"）需在认真阅读及独立思考的基础上认可、同意本协议的全部条款（特别是以加粗方式提示用户注意的条款）并按照页面上的提示完成全部的注册程序。用户在进行注册过程中点击"同意"
          按钮（或实际使用微博服务）即表示用户完全接受本服务协议及新浪网络服务使用协议、微博社区公约、微博商业行为规范办法、微博举报投诉操作细则及微博运营方公示的各项规则、规范。如用户对本服务协议或协议的任何部分存有任何异议，应终止注册程序（或停止使用微博服务）。
        </p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisibles = false" size="medium"
          >取 消</el-button
        >
        <el-button type="primary" @click="dialogVisibles = false" size="medium"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import mathTools from 'utils/mathTools.js'
import myChart from './components/myechart'
export default {
  components: {
    myChart
  },
  data() {
    return {
      form: {},
      num1: 21000000000,
      dialogVisibles: false
    }
  },
  methods: {
    //余额格式化
    formatMoney(val) {
      if (val) {
        return mathTools.addDecollator(val);
      }
    },
    showAgg() {
      this.dialogVisibles = true
    }
    ,
    goback() {
      this.$emit('changeStatus', 'index')
    },
    assess() {
      this.$confirm('你尚未进行评估', '风险评估', {
        confirmButtonText: '指定机构查询',
        cancelButtonText: '取消',
        type: '',
        center: true
      }).then(() => {
        this.$router.push('/investmentFinancing/financial-products/financialSupermarket/organCheck')
      }).catch(() => {

      });
    },
    buyIt() {
      this.assess()
      //   this.$router.push('/investmentFinancing/financial-products/financialSupermarket/buyStep')
    },
    orderIt() {
      this.assess()
    },
    showXY() {

    }
  }
}
</script>

<style lang="scss">
.detail {
  #card {
    display: flex;
    padding: 10px 0px;
  }
  .left {
    width: 100%;
    margin-top: 15px;
    .title {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 23px;
      padding-left: 24px;
      .el-tag {
        background-color: #fff;
        font-weight: normal;
        font-size: 14px;
        margin-right: 10px;
      }
      .firstTag {
        color: #c6a34f;
        border-color: #c6a34f;
      }
    }
  }
  .content {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: flex-end;
    padding-left: 24px;
    padding-right: 24px;
    .per {
      font-size: 34px;
      font-weight: bold;
      color: #eb3d3d;
    }
    .unit {
      font-weight: bold;
      font-size: 20px;
    }
    .cbg {
      font-size: 16px;
      color: #999999;
      text-align: left;
    }
    .amount {
      font-size: 24px;
    }
  }
  .content div {
    //   margin-right: 20px;
    text-align: center;
  }

  .bottom {
    margin-top: 20px;
  }
  .numb {
    display: flex;
    flex-direction: row;
    div {
      margin-right: 10px;
    }
  }
  .el-step {
    .el-step__line {
      margin-left: 42px;
    }
    .el-step__icon-inner {
      background-color: #fff;
      width: 18px;
      height: 18px;
      border-radius: 18px;
    }
    .el-step__icon-inner.is-status {
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
    }
    .el-step__head.is-wait .el-step__icon {
      color: #fff;
    }
    .el-step__line,
    .el-step__head.is-success .el-step__line {
      background: #e6e6e6;
    }
    .el-step__head.is-success,
    .el-step__title.is-success {
      opacity: 0.5;
    }
  }
  .bt {
    justify-content: space-between;
  }
  .xieyi {
    color: #4367d6;
  }
}
</style>