<template>
  <div class="toolResult">
    <el-dialog title="利息计算" :visible.sync="toolResult" width="60%">
      <el-form :model="Form" :rules="Rules" ref="Form" label-width="100px" class="demo-ruleForm" style="margin:0 auto">
        <el-form-item label="还款方式" prop="loanWay" >
          <el-select v-model="Form.loanWay" placeholder="请选择">
            <el-option label="等额本息" value="1"></el-option>
            <el-option label="等额本金" value="2"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <el-tabs v-model="activeName">
        <el-tab-pane label="结算结果" name="result"></el-tab-pane>
      </el-tabs>
      <div class="repay">
        <span>还款总额:999888777.98元</span>
        <span>还款利息总额:999888777.98元</span>
      </div>
      <el-table :data="resultData" border style="width: 100%">
        <el-table-column prop="time" label="期次"  width="180"> </el-table-column>
        <el-table-column prop="principal" label="本金(元)"  width="180"> </el-table-column>
        <el-table-column prop="rate" label="利息(元)"  width="180"> </el-table-column>
        <el-table-column prop="total" label="合计(元)"  width="180"> </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button type="info" @click="toolResult = false">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props:{
    ResultShow:Boolean
  },
  data() {
    return {
      Form:{ loanWay:'' },
      Rules:{ loanWay:[{ required: true, message: '请选择还款方式', trigger: 'blur' }] },
      activeName:"result",
      resultData:[
        { time: 1, principal: '100000.00', rate:"999.00",total:"100999.00"},
        { time: 2, principal: '100000.00', rate:"999.00",total:"100999.00"},
        { time: 3, principal: '100000.00', rate:"999.00",total:"100999.00"},
        { time: 4, principal: '100000.00', rate:"999.00",total:"100999.00"},
        { time: 5, principal: '100000.00', rate:"999.00",total:"100999.00"},
      ]
    };
  },
  computed:{
    toolResult:{
      get(){
        return this.ResultShow
      },
      set(e){
        this.$emit('cancel',e)
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.toolResult{
  .repay{
    margin-bottom: 30px;
    text-align: right;
    span:first-child{
      margin-right:20px
    }
  }
}
</style>