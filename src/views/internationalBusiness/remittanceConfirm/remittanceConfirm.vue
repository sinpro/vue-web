<template>
  <div class="remittanceConfirm">
    <title-bar title="确认信息查询" class="mb50"></title-bar>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" :inline="true" label-width="130px">
      <el-form-item label="汇款人:" prop="remittancer">
        <el-input v-model="ruleForm.remittancer" maxlength="50" class="remittancer" placeholder="请输入">
        </el-input>
      </el-form-item>
      <el-form-item label="币种:" prop="type">
        <el-select v-model="ruleForm.type" class="type ">
          <el-option v-for="(item,index) in currencyList" :key="index" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="业务编号:" prop="busiNum">
        <el-input v-model="ruleForm.busiNum" maxlength="50" class="busiNum" placeholder="请输入">
        </el-input>
      </el-form-item>
      <el-form-item label="来报日期:" prop="NoticeDate">
        <el-date-picker v-model="ruleForm.NoticeDate" type="daterange" :clearable="false" range-separator="—">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="汇款金额:" hide-required-asterisk prop="moneyArea1">
        <el-input v-model="ruleForm.moneyArea1" class="moneyArea" @input="changeMoney" placeholder="请输入" maxlength="22">
        </el-input>
        <span class="bolang cp3">～</span>
        <el-input v-model="ruleForm.moneyArea2" class="moneyArea" @input="changeMoney" placeholder="请输入" maxlength="22">
        </el-input>
      </el-form-item>
    </el-form>
    <div class="tac mt25 mb56">
      <el-button size="mini" type="primary">查询</el-button>
    </div>

    <el-table :data="tableData" border stripe>
      <el-table-column prop="address" label="业务编号" width="125" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="zip" label="来报日期" width="140">
      </el-table-column>
      <el-table-column prop="city" label="币种" width="100" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="date" label="入账金额" width="165" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="province" label="入账账号" width="170">
      </el-table-column>
      <el-table-column prop="zip" label="汇款人" width="140">
      </el-table-column>
      <el-table-column label="操作" width="180" fixed="right">
        <template slot-scope="scope">
          <el-button @click.native="goConfirm(scope.row)" type="text" size="small">确认</el-button>
          <el-button @click.native="goNotice(scope.row)" type="text" size="small">查看报文</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="查看报文" :visible.sync="dialogVisibleb" size="medium" text :show-close="false"> 
      <div class="cp2 f16 lh24">
        SENDER: CITIKRSXXXX
        CITIBANK KOREA INC,SEOUL,KR
        RECEIVE: SZDBCNBSAXXX
        PING AN BANK CO., LTD. (FORMERLY SHENZHEN DEVELOPMENT BANK CO.,LTD.)(HEAD OFFICE),SHENZHEN,CN
        RELATE REF: AD0900202000108
        INPUT DATE&TIME: 2020/09/04 17:37null
        MT 700 ISSUE OF A DOCUMENTARY CREDIT
        27:Sequence of Total
        1/1
        40A:Form of Documentary Credit
        IRREVOCABLE
        20:Documentary Credit Number
        LC202009042033
        31C:Date of Issue
        200904
        40E:Applicable Rules
        UCP LATEST VERSION
        31D:Date and Place of Expiry
        201030ESTONIA
        51A:Applicant Bank
        SZDBCNBSNJB
      </div>
      <div class="tac mtb24">
      <el-button type="primary" @click="dialogVisibleb = false">确 定</el-button>
      </div>
    </el-dialog>

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

        dialogVisibleb: false,
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
          busiNum: [{
            message: 'true',
            required: true,
            trigger: 'blur',
          }],
          NoticeDate: [{
            message: 'true',
            required: true,
            trigger: 'blur',
          }],
          moneyArea1: [{
            validator: validatePass,
            trigger: 'blur'
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
      goNotice() {
        this.dialogVisibleb = true
      },
      goConfirm(row) {
        this.$router.push('/internationalBusiness/remittanceConfirm/remittanceConfirm/confirm')
      },
    }
  }

</script>
<style lang="scss">
  .remittanceConfirm {
    .moneyArea {
      width: 143px;
    }
  }

</style>
