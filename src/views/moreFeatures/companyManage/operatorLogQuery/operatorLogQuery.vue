<template>
  <div class="operatorLogQuery">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" :inline="true" label-width="auto" class="formClass"
      hide-required-asterisk>
      <el-form-item label="流水号:">
        <el-input v-model="ruleForm.account" placeholder="请输入" maxlength="30"></el-input>
      </el-form-item>
      <el-form-item label="操作员编号:">
        <el-input v-model="ruleForm.account1" placeholder="请输入" maxlength="30"></el-input>
      </el-form-item>
      <el-form-item label="交易分类:" class="marginLeftAuto">
        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="交易类型:" class="marginLeftAuto">
        <el-select v-model="ruleForm.region1" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="交易渠道:" class="marginLeftAuto">
        <el-select v-model="ruleForm.region2" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="审批结果:" class="marginLeftAuto">
        <el-select v-model="ruleForm.region3" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="交易日期:" prop="value1">
        <el-date-picker v-model="ruleForm.value1" type="daterange" value-format="yyyy-MM-dd" :picker-options="pickerOptions" unlink-panels 
          range-separator="—" :start-placeholder="dafalttimeData.formatDate"
                :end-placeholder="dafalttimeData.nowData">
        </el-date-picker>
      </el-form-item>
      <el-form-item class="marginL24">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="近7天"></el-radio>
          <el-radio label="近1月"></el-radio>
          <el-radio label="近3月"></el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <div class="tac mt16 mb56">
      <el-button size="mini">重置</el-button>
      <el-button size="mini" type="primary">查询</el-button>
    </div>
    <el-table :data="tableData" stripe class="mt36">
      <el-table-column prop="time" label="流水号" width="130" show-overflow-tooltip></el-table-column>
      <el-table-column prop="type" label="交易类型" width="115"></el-table-column>
      <el-table-column prop="money" label="交易渠道" width="145"></el-table-column>
      <el-table-column prop="money1" label="交易设备" width="130" show-overflow-tooltip></el-table-column>
      <el-table-column prop="money2" label="操作员编号" width="130"></el-table-column>
      <el-table-column prop="money3" label="操作员姓名" width="130"></el-table-column>
      <el-table-column prop="money4" label="交易时间" width="220"></el-table-column>
      <el-table-column prop="money5" label="交易结果" width="115"></el-table-column>
      <el-table-column prop="num" label="审批详情" width="115" fixed="right">
        <template slot-scope="scope">
          <el-button type="text" @click.native="auditDetail(scope)">查看
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="审批流程详情" :visible.sync="dialogVisibleb" size="medium" text>
      <auditProcess :list="list"></auditProcess>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisibleb = false">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>
<script>
  import auditProcess from "@src/components/auditProcess/index.vue";

  export default {
    components: {
      auditProcess,
    },
    data() {
      return {
          dafalttimeData: '',
        dialogVisibleb: false,
        // **********日期限制一年范围*********
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 7884000000 || time.getTime() > Date.now();
          }
        },
        list: [{
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
        ruleForm: {
          region: '全部',
          region1: '全部',
          region2: '全部',
          region3: '全部',
          resource: '近7天',
          value1: [],
          type: '行外转账-收入',
          account: '',
          account1: '',
        },
        rules: {
          //   region: [{
          //     required: true,
          //     message: '请选择活动区域',
          //     trigger: 'blur'
          //   }],
          //   value1: [{
          //     type: 'date',
          //     required: true,
          //     message: '请选择日期',
          //     trigger: 'blur'
          //   }],
        },
        tableData: [{
            time: '00121312',
            type: '转账',
            money: '企业手机银行',
            money1: 'MancBook Pro',
            money2: '002',
            money3: '*三',
            money4: '2020-10-10 12:34:12',
            money5: '交易成功',
            num: '2020-10-10 12:34:12',
            status: '1',
          },
          {
            time: '00121312',
            type: '转账',
            money: '企业手机银行',
            money1: 'MancBook Pro',
            money2: '002',
            money3: '*三',
            money4: '2020-10-10 12:34:12',
            money5: '交易成功',
            num: '2020-10-10 12:34:12',
            status: '1',
          }, {
            time: '00121312',
            type: '转账',
            money: '企业手机银行',
            money1: 'MancBook Pro',
            money2: '002',
            money3: '*三',
            money4: '2020-10-10 12:34:12',
            money5: '交易成功',
            num: '2020-10-10 12:34:12',
            status: '1',
          }, {
            time: '00121312',
            type: '转账',
            money: '企业手机银行',
            money1: 'MancBook Pro',
            money2: '002',
            money3: '*三',
            money4: '2020-10-10 12:34:12',
            money5: '交易成功',
            num: '2020-10-10 12:34:12',
            status: '1',
          },
        ],
      }
    },
    methods: {
      auditDetail(scope) {
        this.dialogVisibleb = true
      },
       /* 获取过去时间，并传值给现在时间 */
      getPassYearFormatDate() {
        var nowDate = new Date()
        var date = new Date(nowDate)
        date.setDate(date.getDate() - 7)
        var seperator1 = '-'
        var year = date.getFullYear()
        var month = date.getMonth() + 1
        var strDate = date.getDate()
        if (month >= 1 && month <= 9) {
          month = '0' + month
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = '0' + strDate
        }
        var formatDate = year + seperator1 + month + seperator1 + strDate
        this.getNowFormatDate(formatDate)
      },
      /* 获取现在时间，并接受过去时间的值 */
      getNowFormatDate(formatDate) {
        var date = new Date()
        var seperator1 = '-'
        var year = date.getFullYear()
        var month = date.getMonth() + 1
        var strDate = date.getDate()
        if (month >= 1 && month <= 9) {
          month = '0' + month
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = '0' + strDate
        }
        var nowData = year + seperator1 + month + seperator1 + strDate
        this.ruleForm.value1.push(formatDate)
        this.ruleForm.value1.push(nowData)
         // 默认赋值一年时间
      },
    },
    mounted(){
        this.getPassYearFormatDate()
    }
  }

</script>
<style lang="scss">
  .operatorLogQuery {
    .formClass {
      margin-left: 40px;
    }
  }

</style>
