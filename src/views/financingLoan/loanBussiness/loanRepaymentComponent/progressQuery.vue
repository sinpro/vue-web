<template>
  <div class="loanContract">
    
    <el-form label-width="100px">
      <el-row>
        <el-col :span='12'>
          <el-form-item  label="还款状态:" >
            <el-select v-model="contractStatus" placeholder="全部">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span='12'>
          <el-button type="primary" class="w100"  size="" >查询</el-button>
        </el-col>
      </el-row>
    </el-form>
    <progressList></progressList>
    <el-pagination
    class="mt20"
    layout="prev, pager, next"
    :total="50">
  </el-pagination>
  </div>
</template>
<script>

import progressList from './component/progressList'
export default {
  components:{
    progressList
  },
  data(){
    return {
      contractStatus:'',
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    }
  },
  methods:{
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
}
</script>
<style lang="scss" >
.loanContract{
  .el-button{
    width: 100px;
  }
}
</style>