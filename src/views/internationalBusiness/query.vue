<template>
  <div class="remittanceConfirm">
    <title-bar title="查询条件" class="mb50"></title-bar>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" :inline="true" label-width="130px">
      <el-form-item label="企业名称:" prop="remittancer">
        <el-input v-model="ruleForm.remittancer" maxlength="50" class="remittancer" :disabled="true" placeholder="请输入">
        </el-input>
      </el-form-item>
      <el-form-item label="交易状态:" prop="type">
        <el-select v-model="ruleForm.type" class="type ">
          <el-option v-for="(item,index) in currencyList" :key="index" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="交易类型:" prop="busiNum">
        <el-select v-model="ruleForm.busiNum" class="type ">
          <el-option v-for="(item,index) in currencyList2" :key="index" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="结售汇类型:" prop="busiNum1" v-if="setTypeFlag">
        <el-select v-model="ruleForm.busiNum1" class="type ">
          <el-option v-for="(item,index) in currencyList1" :key="index" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="外汇汇款类型:" prop="busiNum2" v-if="foreignTypeFlag">
        <el-select v-model="ruleForm.busiNum2" class="type ">
          <el-option v-for="(item,index) in currencyList3" :key="index" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="国际信用证类型:" prop="busiNum3" v-if="interTypeFlag">
        <el-select v-model="ruleForm.busiNum3" class="type ">
          <el-option v-for="(item,index) in currencyList4" :key="index" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="交易日期:" prop="NoticeDate" v-if="!dateTypeFlag">
        <el-date-picker v-model="ruleForm.NoticeDate" type="daterange" :clearable="false" range-separator="—">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="来报日期:" prop="NoticeDate1" v-if="dateTypeFlag">
        <el-date-picker v-model="ruleForm.NoticeDate1" type="daterange" :clearable="false" range-separator="—">
        </el-date-picker>
      </el-form-item>
    </el-form>
    <div class="tac mt25 mb56">
      <el-button size="mini" type="primary">查询</el-button>
    </div>
    <!-- 结汇表格开始 -->
    <el-table :data="tableData" border stripe  v-if="settleFlag">
        <el-table-column label="序号" type="index" width="80" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="address" label="交易类型" width="125" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="zip" label="结汇方式" width="140">
        </el-table-column>
        <el-table-column prop="city" label="转出账号" width="240" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="date" label="结汇金额" width="165" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="province" label="结汇币种" width="170">
        </el-table-column>
        <el-table-column prop="zip" label="转入账号" width="240">
        </el-table-column>
        <el-table-column prop="zip1" label="交易状态" width="140">
        </el-table-column>
        <el-table-column label="操作" width="140" fixed="right">
          <template slot-scope="scope">
            <el-button @click.native="goConfirm(scope.row)" type="text" size="small">详情</el-button>
          </template>
        </el-table-column>
    </el-table>
    <!-- 结汇表格结束 -->
    <!-- 购汇表格开始 -->
    <el-table  :data="tableData" border stripe v-if="purchaseFlag">
        <el-table-column label="序号" type="index" width="80" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="address" label="交易类型" width="125" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="zip" label="转出人民币账号" width="240">
        </el-table-column>
        <el-table-column prop="zip" label="转出人民币金额" width="140">
        </el-table-column>
        <el-table-column prop="zip" label="购汇币种" width="140">
        </el-table-column>
        <el-table-column prop="zip" label="转入外币账号" width="240">
        </el-table-column>
        <el-table-column prop="zip1" label="交易状态" width="140">
        </el-table-column>
        <el-table-column label="操作" width="140" fixed="right">
          <template slot-scope="scope">
            <el-button @click.native="goConfirm(scope.row)" type="text" size="small">详情</el-button>
          </template>
        </el-table-column>
    </el-table>
    <!-- 购汇表格结束 -->

    <!-- 汇入汇款确认表格开始 -->
    <el-table  :data="tableData" border stripe v-if=" exportConfirmFlag">
        <el-table-column label="序号" type="index" width="80" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="address" label="交易类型" width="140" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="zip" label="业务编号" width="240">
        </el-table-column>
        <el-table-column prop="zip" label="来报日期" width="180">
        </el-table-column>
        <el-table-column prop="zip" label="币种" width="140">
        </el-table-column>
        <el-table-column prop="zip" label="入账金额" width="160">
        </el-table-column>
        <el-table-column prop="zip1" label="入账账号" width="240">
        </el-table-column>
        <el-table-column prop="zip1" label="交易状态" width="140">
        </el-table-column>
        <el-table-column label="操作" width="140" fixed="right">
          <template slot-scope="scope">
            <el-button @click.native="goConfirm(scope.row)" type="text" size="small">详情</el-button>
          </template>
        </el-table-column>
    </el-table>
    <!-- 汇入汇款确认表格结束 -->

    <!-- 外汇汇款-外汇汇款申请表格开始 -->
    <el-table :data="tableData" border stripe  v-if="foreignFlag">
        <el-table-column label="序号" type="index" width="80" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="address" label="交易类型" width="125" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="zip" label="收款人名称" width="240">
        </el-table-column>
        <el-table-column prop="city" label="收款人账号" width="240" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="date" label="汇款金额" width="165" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="province" label="汇款币种" width="170">
        </el-table-column>
        <el-table-column prop="zip" label="汇款进度" width="240">
        </el-table-column>
        <el-table-column prop="zip1" label="交易状态" width="240">
        </el-table-column>
        <el-table-column label="操作" width="140" fixed="right">
          <template slot-scope="scope">
            <el-button @click.native="goConfirm(scope.row)" type="text" size="small">详情</el-button>
          </template>
        </el-table-column>
    </el-table>
    <!-- 外汇汇款-外汇汇款申请表格结束 -->
    <!-- 外汇汇款-同名账户转账表格开始 -->
    <el-table :data="tableData" border stripe  v-if="transferFlag">
        <el-table-column label="序号" type="index" width="80" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="address" label="交易类型" width="125" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="zip" label="转出账号" width="240">
        </el-table-column>
        <el-table-column prop="city" label="转账金额" width="160" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="date" label="币种" width="165" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="province" label="转入账号" width="240">
        </el-table-column>
        <el-table-column prop="zip1" label="交易状态" width="140">
        </el-table-column>
        <el-table-column label="操作" width="140" fixed="right">
          <template slot-scope="scope">
            <el-button @click.native="goConfirm(scope.row)" type="text" size="small">详情</el-button>
          </template>
        </el-table-column>
    </el-table>
    <!-- 外汇汇款-同名账户转账表格结束 -->

    <!-- 国际信用证类型-信用证开证申请表格开始 -->
    <el-table :data="tableData" border stripe  v-if="applicationFlag">
        <el-table-column label="序号" type="index" width="80" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="address" label="交易类型" width="125" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="zip" label="信用证编号" width="240">
        </el-table-column>
        <el-table-column prop="city" label="金额" width="160" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="date" label="受益人名称" width="240" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="province" label="期限" width="140">
        </el-table-column>
        <el-table-column prop="province" label="保证金账号" width="240">
        </el-table-column>
        <el-table-column prop="province" label="信用证修改次数" width="240" v-if="amendmentFlag">
        </el-table-column>
        <el-table-column prop="zip1" label="交易状态" width="140">
        </el-table-column>
        <el-table-column label="操作" width="140" fixed="right">
          <template slot-scope="scope">
            <el-button @click.native="goConfirm(scope.row)" type="text" size="small">详情</el-button>
          </template>
        </el-table-column>
    </el-table>
    <!-- 国际信用证类型-信用证开证申请结束 -->
    <!-- 国际信用证类型-承兑/付款/拒付表格开始 -->
    <el-table :data="tableData" border stripe  v-if="interAllFlag">
        <el-table-column label="序号" type="index" width="80" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="address" label="信用证编号" width="225" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="zip" label="单据金额" width="160">
        </el-table-column>
        <el-table-column prop="city" label="单据编号" width="160" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="date" label="期限" width="165" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="province" label="保证金账号" width="240">
        </el-table-column>
        <el-table-column prop="zip1" label="交易状态" width="140">
        </el-table-column>
        <el-table-column label="操作" width="140" fixed="right">
          <template slot-scope="scope">
            <el-button @click.native="goConfirm(scope.row)" type="text" size="small">详情</el-button>
          </template>
        </el-table-column>
    </el-table>
    <!-- 国际信用证类型-承兑/付款/拒付表格结束 -->

    <!-- 保证金存入表格开始 -->
    <el-table :data="tableData" border stripe  v-if="marginFlag">
        <el-table-column label="序号" type="index" width="80" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="address" label="交易类型" width="225" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="zip" label="保证金主账号" width="260">
        </el-table-column>
        <el-table-column prop="city" label="保证金子账号" width="260" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="zip1" label="交易状态" width="140">
        </el-table-column>
        <el-table-column label="操作" width="140" fixed="right">
          <template slot-scope="scope">
            <el-button @click.native="goConfirm(scope.row)" type="text" size="small">详情</el-button>
          </template>
        </el-table-column>
    </el-table>
    <!-- 保证金存入表格结束 -->

  </div>
</template>
<script>
  import mathTools from 'utils/mathTools.js'

  export default {

    data() {
      var validatePass = (rule, value, callback) => {
        if (Number(this.ruleForm.moneyArea1.replace(/,/g, "")) > Number(this.ruleForm.moneyArea2.replace(/,/g, ""))) {
          callback(new Error('“起始金额”不能大于“终止金额”'));
        } else {
          this.$refs.ruleForm.validateField('checkPass');
          callback();
        }
      };
      return {
        ruleForm: {
          remittancer: '',
          type: '',
          NoticeDate: '',
          busiNum: '', //交易类型
          busiNum1: '', //结售汇-结售汇类型
          busiNum2: '', //外汇汇款-外汇汇款类型
          busiNum3: '', //国际信用证-国际信用证类型类型
          NoticeDate1: '', //汇入汇款确认-来报日期
        },
        setTypeFlag: false, //结售汇-结售汇类型下拉框
        foreignTypeFlag: false, //外汇汇款-外汇汇款类型下拉框
        dateTypeFlag: false, //汇入汇款确认-来报日期下拉框
        interTypeFlag: false, //国际信用证类型下拉框
        purchaseFlag: false, //结售汇-购汇表格
        settleFlag: false, //结售汇-结汇表格
        exportConfirmFlag: false, //汇入汇款确认表格
        foreignFlag: false, //外汇汇款-外汇汇款申请表格
        transferFlag: false, //外汇汇款-同名账户转账表格
        applicationFlag: false, //国际信用证类型-信用证开证申请表格
        amendmentFlag: false, //国际信用证类型-信用证修改申请表格
        interAllFlag: false, //国际信用证类型-承兑/付款/拒付表格
        marginFlag: false, //保证金存入表格
        rules: {
          remittancer: [{
            // validator: validatePass,
            trigger: 'blur',
          }],
          type: [{
            message: 'true',
            trigger: 'blur',
          }],
          busiNum: [{
            message: 'true',
            required: true,
            trigger: 'blur',
          }],
          busiNum1: [{
            message: 'true',
            required: true,
            trigger: 'blur',
          }],
          busiNum2: [{
            message: 'true',
            required: true,
            trigger: 'blur',
          }],
          busiNum3: [{
            message: 'true',
            required: true,
            trigger: 'blur',
          }],
          NoticeDate: [{
            message: 'true',
            trigger: 'blur',
          }],
        },
        currencyList: [{
          label: '美元',
          value: '1',
        }, {
          label: '日元',
          value: '2',
        }, {
          label: '英镑',
          value: '3',
        }],
        currencyList1: [{
          label: '结汇',
          value: '1',
        }, {
          label: '购汇',
          value: '2',
        }],
        currencyList3: [{
          label: '外汇汇款申请',
          value: '1',
        }, {
          label: '同名账户转账',
          value: '2',
        }],
        currencyList4: [{
          label: '信用证开证申请',
          value: '1',
        }, {
          label: '信用证修改申请',
          value: '2',
        }, {
          label: '承兑/付款/拒付',
          value: '3',
        }],
        currencyList2: [{
          label: '外汇汇款',
          value: '1',
        }, {
          label: '汇入汇款确认',
          value: '2',
        }, {
          label: '结售汇',
          value: '3',
        }, {
          label: '国际信用证',
          value: '4',
        }, {
          label: '保证金存入',
          value: '5',
        }],
        tableData: [{
          date1: '1',
          date: '99,999,999.00',
          name: '行外转账-支出',
          province: '入账账号',
          city: '美元',
          address: '555566661',
          zip: '2020-01-01000000000000000000',
          status: 0,
        }, {
          date1: '1',
          date: '99,999,999.00',
          name: '行外转账-支出',
          province: '入账账号',
          city: '美元',
          address: '555566661',
          zip: '2020-01-01',
          status: 0,
        }, {
          date1: '1',
          date: '99,999,999.00',
          name: '行外转账-支出',
          province: '入账账号',
          city: '美元',
          address: '555566661',
          zip: '2020-01-01',
          status: 0,
        }, ],
      }
    },
    methods: {
      changeMoney() {
        this.ruleForm.moneyArea1 = mathTools.moneyCheck(this.ruleForm.moneyArea1)
        this.ruleForm.moneyArea2 = mathTools.moneyCheck(this.ruleForm.moneyArea2)
      },
      goConfirm(row) {
        // this.$router.push('/internationalBusiness/remittanceConfirm/remittanceConfirm/confirm')
      },
    },
    watch:{
      'ruleForm.busiNum': {
        handler: function(val, oldval) {
          if (this.ruleForm.busiNum === '3') { //结售汇类型下拉框
              this.setTypeFlag = true;
              this.dateTypeFlag = false;
              this.foreignTypeFlag = false;
              this.exportConfirmFlag = false;
              this.interTypeFlag = false;
              this.marginFlag = false;
          } else if (this.ruleForm.busiNum === '2'){ //汇入汇款确认-来报日期下拉框
              this.dateTypeFlag = true;
              this.setTypeFlag = false;
              this.foreignTypeFlag = false;
              this.exportConfirmFlag = true;
              this.interTypeFlag = false;
              this.marginFlag = false;
          } else if (this.ruleForm.busiNum === '1'){ //外汇汇款申请类型下拉框
              this.foreignTypeFlag = true;
              this.dateTypeFlag = false;
              this.setTypeFlag = false;
              this.exportConfirmFlag = false;
              this.interTypeFlag = false;
              this.marginFlag = false;
          } else if (this.ruleForm.busiNum === '4'){ //国际信用证类型下拉框
              this.interTypeFlag = true;
              this.foreignTypeFlag = false;
              this.dateTypeFlag = false;
              this.setTypeFlag = false;
              this.exportConfirmFlag = false;
              this.marginFlag = false;
          } 
          else if (this.ruleForm.busiNum === '5'){ //保证金存入
              this.marginFlag = true;
              this.interTypeFlag = false;
              this.foreignTypeFlag = false;
              this.dateTypeFlag = false;
              this.setTypeFlag = false;
              this.exportConfirmFlag = false;
          } else {
              this.marginFlag = false;
              this.interTypeFlag = false;
              this.foreignTypeFlag = false;
              this.dateTypeFlag = false;
              this.setTypeFlag = false;
              this.exportConfirmFlag = false;
          }
        },
        deep: true
      },
      'ruleForm.busiNum1': {
        handler: function(val, oldval) {
          if (this.ruleForm.busiNum1 === '1') { //结售汇类型-结汇字段
              this.purchaseFlag = false;
              this.settleFlag = true;
          } else if (this.ruleForm.busiNum1 === '2'){ //结售汇类型-购汇字段
              this.settleFlag = false;
              this.purchaseFlag = true;
          } else {
              this.settleFlag = false;
              this.purchaseFlag = false;
          }
        },
        deep: true
      },
      'ruleForm.busiNum2': {
        handler: function(val, oldval) {
          if (this.ruleForm.busiNum2 === '1') { //外汇汇款类型-外汇汇款申请字段
              this.transferFlag = false;
              this.foreignFlag = true;
          } else if (this.ruleForm.busiNum2 === '2'){ //外汇汇款类型-同名账户转账字段
              this.foreignFlag = false;
              this.transferFlag = true;
          } else {
              this.foreignFlag = false;
              this.transferFlag = false;
          }
        },
        deep: true
      },
      'ruleForm.busiNum3': {
        handler: function(val, oldval) {
          if (this.ruleForm.busiNum3 === '1') { //国际信用证类型-信用证开证申请字段
              this.amendmentFlag = false;
              this.transferFlag = false;
              this.applicationFlag = true;
          } else if (this.ruleForm.busiNum3 === '2'){ //国际信用证类型-信用证修改申请字段
              this.foreignFlag = false;
              this.applicationFlag = true;
              this.amendmentFlag = true;
          } else if (this.ruleForm.busiNum3 === '3'){ //国际信用证类型-承兑/付款/拒付字段
              this.applicationFlag = false;
              this.amendmentFlag = false;
              this.interAllFlag = true;
          } else {
              this.applicationFlag = false;
              this.amendmentFlag = false;
              this.interAllFlag = false;
          }
        },
        deep: true
      }
    },
  }

</script>
<style lang="scss">
  .remittanceConfirm {
    .moneyArea {
      width: 143px;
    }
  }

</style>
