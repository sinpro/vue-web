<template>
  <div>
    <div class="lenderToolBox">
      <el-form :model="loanForm" :rules="loanRules" ref="loanForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="贷款金额" prop="loanCash">
          <el-input v-model="loanForm.loanCash" placeholder="请输入"></el-input>
          <br>
          <span v-if="loanForm.loanCash">大写金额</span>
        </el-form-item>
        <el-form-item label="贷款期限" prop="loanDate">
          <el-select v-model="loanForm.loanDate" placeholder="请选择">
            <el-option label="1年" value="1"></el-option>
            <el-option label="3年" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="贷款利率" prop="loanRate">
          <el-input v-model="loanForm.loanRate" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="还款方式" prop="loanWay">
          <el-select v-model="loanForm.loanWay" placeholder="请选择">
            <el-option label="等额本息" value="1"></el-option>
            <el-option label="等额本金" value="2"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div class="tac">
        
        <el-button  type="primary" @click="computer=true">计算</el-button>
      </div>
      <!-- <el-dialog title="贷款市场报价利率" :visible.sync="loanSelect" width="30%">
        <div>
          <p style="margin-bottom:10px">更新日期:2020-01-01</p>
          <el-table :data="tableData" border style="width: 100%" :show-header="false">
            <el-table-column prop="date"   width="180"> </el-table-column>
            <el-table-column prop="rate"   width="180"> </el-table-column>
          </el-table>
          <div style="margin:20px 0 30px 0">
            <p>温馨提示:</p>
            <p>该贷款利率为贷款报价利率（LPR）,贷款实际执行利率可能在此基础上加减点，贷款实际执行利率以借款合同为准。</p>
          </div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button type="info" @click="loanSelect = false">关闭</el-button>
        </span>
      </el-dialog> -->
      
    
    </div>
    <div class="lenderResult" v-show="computer">
      
      <el-tabs  v-model="activeName">
        <el-tab-pane label="结算结果" name="result"></el-tab-pane>
      </el-tabs>
      <div class="repay">
        <span>还款总额:999888777.98元</span>
        <span>还款利息总额:999888777.98元</span>
      </div>
      <el-table :data="resultData" border style="width: 100%">
        <el-table-column prop="time" label="期次"  > </el-table-column>
        <el-table-column prop="principal" label="本金(元)"  > </el-table-column>
        <el-table-column prop="rate" label="利息(元)"  > </el-table-column>
        <el-table-column prop="total" label="合计(元)" > </el-table-column>
      </el-table>
    </div>
    <div class="f14 gray3 mb20 lh20" style="margin-top:100px">
      <p class="f16 gray1 ">温馨提示：</p>
      <p>1. 贷款市场报价利率：1年 3.88%，5年 3.88%。更新日期：2020-01-01。</p>
      <p>2. 贷款利率为贷款报价利率（LPR），贷款实际执行利率可能在此基础上加减点，贷款实际执行利率以借款合同为准。</p>
    </div>


  </div>
</template>
<script>
export default {
  data() {
    return {
      loanForm:{
        loanCash:'',
        loanDate:'',
        loanRate:'',
        loanWay:''
      },
      loanRules:{
        loanCash:[{ required: true, message: '请输入贷款金额', trigger: 'blur' }],
        loanDate:[{ required: true, message: '请选择贷款期限', trigger: 'blur' }],
        loanRate:[{ required: true, message: '请输入贷款利率', trigger: 'blur' }],
        loanWay:[{ required: true, message: '请选择还款方式', trigger: 'blur' }]
      },
      loanSelect:false,
      tableData: [
        { date: '1年', rate: '3.88%' }, 
        { date: '3年', rate: '3.88%' }],
      computer:false,
      activeName:"result",
      resultData:[
        { time: 1, principal: '100000.00', rate:"999.00",total:"100999.00"},
        { time: 2, principal: '100000.00', rate:"999.00",total:"100999.00"},
        { time: 3, principal: '100000.00', rate:"999.00",total:"100999.00"},
        { time: 4, principal: '100000.00', rate:"999.00",total:"100999.00"},
        { time: 5, principal: '100000.00', rate:"999.00",total:"100999.00"},
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.lenderToolBox{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
}
.lenderResult{
    margin:20px 0;
    .repay{
      text-align: right;
      margin:20px 0;
      span{
        margin:0 10px;
      }
    }
  }
</style>