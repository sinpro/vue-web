<template>
  <div class="openManage">
    <el-form :model="formData" :inline="true" class="formClass">
      <el-form-item label="账号:">
        <el-select v-model="formData.account">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="开通状态:" label-width="105px">
        <el-select v-model="formData.status">
          <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="mini" class="ml10">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" stripe class="mt36" empty-text="暂无对账信息">
      <el-table-column prop="time" label="账号" width="240" show-overflow-tooltip></el-table-column>
      <el-table-column prop="type" label="开通状态" width="120" show-overflow-tooltip></el-table-column>
      <el-table-column prop="type" label="开通渠道" width="120" show-overflow-tooltip></el-table-column>
      <el-table-column prop="money" label="开通日期" width="150"></el-table-column>
      <el-table-column prop="account" label="单笔限额(元)" width="140" show-overflow-tooltip></el-table-column>
      <el-table-column prop="account2" label="日累计限额(元)" width="160" show-overflow-tooltip></el-table-column>
      <el-table-column label="操作" width="83" fixed="right">
        <template slot-scope="scope">
          <el-button v-if="scope.row.status=='0'" type="text" @click.native="popDial(scope,'openPay')">开通</el-button>
          <el-button v-if="scope.row.status=='1'" type="text" @click.native="popDial(scope,'openManage')">管理</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isPayRight: true, //是否有支付权限，接口获取
        isForeign: false, //是否是外币，接口获取
        formData: {
          account: '8888000999002122 | 别名1',
          status: '全部',
        },
        options: [{
          value: '选项1',
          label: '8888000999002122 | 别名1'
        }, {
          value: '选项2',
          label: '8888000999002122 | 别名1'
        }, {
          value: '选项3',
          label: '8888000999002122 | 别名1'
        }, ],
        options2: [{
          value: '1',
          label: '全部'
        }, {
          value: '2',
          label: '未开通'
        }, {
          value: '3',
          label: '已开通'
        }, ],
        tableData: [{
            date: '1',
            time: 'CP202043343223',
            type: '银企直联',
            money: '2020-12-02',
            account: '+500,000,000.00',
            account2: '+500,000,000.00',
            accName: '处理中',
            status: '0',
          },
          {
            date: '1',
            time: 'CP202043343223',
            type: '20204343236',
            money: '2020-12-02',
            account: '+500,000,000.00',
            accName: '成功',
            status: '1',
          },
          {
            date: '1',
            time: 'CP202043343223',
            type: '20204343236',
            money: '2020-12-02',
            account: '+500,000,000.00',
            accName: '已退款',
            status: '0',
          },
          {
            date: '1',
            time: 'CP202043343223',
            type: '20204343236',
            money: '2020-12-02',
            account: '+500,000,000.00',
            accName: '关闭',
            status: '0',
          },
          {
            date: '1',
            time: 'CP202043343223',
            type: '20204343236',
            money: '2020-12-02',
            account: '+500,000,000.00',
            accName: '失败',
            status: '0',
          },
        ],
      }
    },
    methods: {
      popDial(val, isOpenManage) {
        if (!this.isPayRight) {
          this.$confirm('该账号无付款权限，不能开通B2B支付', '提示', {
            confirmButtonText: '确定',
            type: 'warning',
            center: true,
            showCancelButton: false,
          });
        } else if (this.isForeign) {
          this.$confirm('外币账号不支持开通B2B支付', '提示', {
            confirmButtonText: '确定',
            type: 'warning',
            center: true,
            showCancelButton: false,
          });
        }else{
          isOpenManage=='openPay'?val.row.isFix='0':val.row.isFix='1';
          window.sessionStorage.setItem('B2BOpenManage',JSON.stringify(val.row))
          this.$router.push(`/more/B2BPay/openPayManage/${isOpenManage}`)
        }
      },

    },
    mounted(){
      this.tableData.forEach((item,index)=>{
        this.$set(item,'isFix','')
      })
    }
  }

</script>
<style lang="scss">
  .openManage {
    .formClass {
      margin-top: 12px;
    }
  }

</style>
