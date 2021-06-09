<template>
  <div class="louInquiry">
      <el-tabs v-model="activeName" @tab-click="handleClick">

        
        <el-tab-pane label="借据查询" name="first">
          <div class="BoxShadow p20">
            <div class="flexsb">
               <div class="flex">
                    <p class="f20 bold ">疫情企业贷款</p>
                    <el-tag v-if="show" class="ml20" effect="plain">有效</el-tag>
                    <el-tag v-else type="danger" class="ml20" effect="plain">无效</el-tag>
                    
                    <span class="ml20 gray2">合同号：8899990000999990</span>
               </div>
               <div>
                  <span class="cg">贷款支用</span>
               </div>
            </div>
            <div class="flexsb gray2 mt25 f16 ">
                <div></div>
                <div>
                    <p class="f22 cy mb10">100,000.00</p>
                    <span class="">合同金额(元)</span>
                </div>
                <div>
                    <p class="f22 c-primary mb10">100,000.00</p>
                    <span class="">剩余可借金额(元)</span>
                </div>
                <div></div>
            </div>
          </div>
          <el-form class="mt20" >
            <el-row>
              <el-col :span='12'>
                <el-form-item  label="借据状态" >
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
        </el-tab-pane>
        <!-- 借据列表 -->
        <lou-list></lou-list>
        <el-pagination
          class="mt20 mb50"
          layout="prev, pager, next"
          :total="50">
        </el-pagination>
      </el-tabs>
  </div>
</template>
<script>
import louList from './loanInquiryComponent/louList'
export default {
  name:"IouInquiry",
  components:{
    louList
  },
 
  data(){
    return{ 
      show:false,
      activeName: 'first',
      contractStatus:""
    }
  },
  methods:{
    handleClick(){},
  }
}

</script>
<style lang="scss" scoped>
.louInquiry{
   .el-button{
    width: 100px;
  }
}
</style>