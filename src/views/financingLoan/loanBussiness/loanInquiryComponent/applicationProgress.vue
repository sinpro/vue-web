<template>
  <div class="applicationProgress">
    <el-form class="mt20" >
      <el-row>
        <el-col :span='12'>
          <el-form-item  label="申请状态：" >
            <el-select v-model="contractStatus" placeholder="全部">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span='12'>
          <el-button type="primary" style="width:100px"  size="" >查询</el-button>
        </el-col>
      </el-row>
    </el-form>
    <contractApplyProgress></contractApplyProgress>



  </div>
</template>
<script>
import contractApplyProgress from './component/contractApplyProgress'
export default {
  components:{
    contractApplyProgress
  },
  data(){
    return {
     contractStatus:"",
    }
  },
  methods:{
    
  }
}
</script>
