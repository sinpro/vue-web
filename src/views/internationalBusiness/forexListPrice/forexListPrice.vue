<template>
  <div class="forexListPrice">
    <title-bar title="确认信息查询" class="mb50"></title-bar>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" :inline="true" label-width="auto">
      <el-form-item label="币种:" prop="remittancer">
        <el-select v-model="ruleForm.type" class="type ">
          <el-option v-for="(item,index) in currencyList" :key="index" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-button type="primary" size="mini" class="ml20">查询</el-button>
    </el-form>
    <div class="leftBar f18 cp1">当前刷新时间：<span>2021-02-26 09:45:09</span>
      <el-button class="mini"><i class="el-icon-refresh-right blod"></i>刷新</el-button>
    </div>
    <el-table :data="tableData" stripe class="mt36">
      <el-table-column prop="time" label="币种" width="140">
        <template slot-scope="scope">
          <div class="flex">
            <img class="block mr10" src="../../../images/internationalBusiness/USAs.png">
            <span>{{scope.row.time}}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="type" label="现汇买入价" width="130"></el-table-column>
      <el-table-column prop="type" label="现汇卖出价" width="130"></el-table-column>
      <el-table-column prop="type" label="现钞买入价" width="130"></el-table-column>
      <el-table-column prop="type" label="现钞卖出价" width="130"></el-table-column>
      <el-table-column prop="type" label="中间价" width="120"></el-table-column>
      <el-table-column prop="type" label="发布时间" width="130"></el-table-column>
      <el-table-column label="操作" width="90" fixed="right">
        <template slot-scope="scope">
          <el-button @click.native="goDetail(scope.row)" type="text" size="small">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="wPro mtb20">
      <p>温馨提示</p>
      <p>1.本页面牌价仅供参考，客户办理结汇/购汇业务时以实际成交汇率为准。</p>
      <p>2.牌价以 100 外币为单位。</p>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {},
        rules: {
          remittancer: [{
            // validator: validatePass,
            trigger: 'blur',
            required: true,
          }],
          type: [{
            message: 'true',
            required: true,
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
        tableData: [{
            time: '美元',
            type: '690.2',
            money: '查询、付款',
            account1: '20,000,000.00',
            account2: '20,000,000.00',
            account3: '20,000,000.00',
            num: '100',
            status: '0',
          },
          {
            time: '美元',
            type: '李*辉',
            money: '查询、付款',
            account1: '20,000,000.00',
            account2: '20,000,000.00',
            account3: '20,000,000.00',
            num: '100',
            status: '0',
          },
          {
            time: '001',
            type: '李*辉',
            money: '查询、付款',
            account1: '20,000,000.00',
            account2: '20,000,000.00',
            account3: '20,000,000.00',
            num: '100',
            status: '0',
          },
        ],
      }
    },
    methods: {
      goDetail(row) {
        this.$router.push('/internationalBusiness/forexListPrice/forexListPrice/forexListPriceGragh')
      }
    }
  }

</script>
<style lang="scss">
  .forexListPrice {
    .f18 {
      font-size: 18px;
      color: #1b1b1b;
      margin-top: 60px;
    }

    .mini {
      float: right;
      width: 80px;
      height: 30px;
      padding: 6px 16px;

      .blod {
        font-weight: bold;
      }
    }
  }

</style>
