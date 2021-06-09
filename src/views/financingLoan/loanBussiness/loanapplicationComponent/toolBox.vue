<template>
  <div class="toolBox">
    <el-dialog title="贷款计算器" center :visible.sync="dialogVisible" width="980px">
      <el-form :model="loanForm" :rules="loanRules" ref="loanForm" label-width="100px" class="demo-ruleForm">
        <el-row>
          <el-col :span="12">
            <el-form-item label="贷款金额" prop="loanCash">
              <el-input v-model="loanForm.loanCash"></el-input>
            </el-form-item>

          </el-col>
          <el-col :span="12">
            <el-form-item label="贷款期限" prop="loanDate">
              <el-select v-model="loanForm.loanDate" placeholder="请选择">
                <el-option label="1年" value="1"></el-option>
                <el-option label="3年" value="3"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="贷款利率" prop="loanRate">
              <el-input v-model="loanForm.loanRate"></el-input>
              <br>
              <el-tooltip class="item" effect="dark" content="贷款市场报价利率：1年 3.88%，5年 3.88%。" placement="top-start">
                <!-- <a  @click="loanSelect=true">利率查询</a> -->
                 <a>利率查询</a>
              </el-tooltip>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="还款方式" prop="loanWay">
              <el-select v-model="loanForm.loanWay" placeholder="请选择">
                <el-option label="等额本息" value="1"></el-option>
                <el-option label="等额本金" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div class="tac mb20">
        <el-button  @click="dialogVisible=false" >取消</el-button>
        <el-button type="primary" @click="computer=true">计算</el-button>
      </div>
      <div v-if="computer">
        <div class="flexsb  borderb">
          <div class="cg f18 border4b pb10">计算结果</div>
          <div class="tar f16  " style="color:#b3b3b3">
            <span>温馨提示:</span>
            <span>1.计算结果仅供参考，实际还款利息以贷款合同为准</span>
          </div>
        </div>
        <div class="tar f16 mt20 gray1 " >
          <span>还款总额：876,548.98元</span>
          <span>利息总额：876,548.98元</span>
        </div>
        <el-table :data="tableData"  style="width: 100%">
          <el-table-column label="期次" prop="date"> </el-table-column>
          <el-table-column label="本金(元)" prop="date"> </el-table-column>
          <el-table-column label="利息(元)" prop="date"> </el-table-column>
          <el-table-column label="合计(元)" prop="rate"> </el-table-column>
        </el-table>
        <el-pagination
        class="mb20"
          layout="prev, pager, next"
          :total="50">
        </el-pagination>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import toolResult from "./toolResult"
export default {
  components:{
    toolResult
  },
  props:{
    show:Boolean
  },
  data() {
    return {
       first: "first",
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
     
    };
  },
  computed:{
    dialogVisible:{
      get(){
        this.computer=false
        return this.show
      },
      set(e){
        this.$emit('cancel',e)
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.toolBox{
  .footer_tool{
    width:100%;
    text-align:left;
    margin-top:30px;
    p{
      margin-top:10px;
    }
  }
}
</style>