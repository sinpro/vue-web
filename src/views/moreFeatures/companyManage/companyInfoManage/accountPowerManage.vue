<template>
  <div class="accountPowerManage">
    <el-table :data="tableData" stripe class="mt36">
      <el-table-column prop="time" label="账号" width="201" show-overflow-tooltip></el-table-column>
      <el-table-column prop="type" label="户名" width="212" show-overflow-tooltip></el-table-column>
      <el-table-column prop="type" label="权限" :width="typeWidth" show-overflow-tooltip>
        <template slot-scope="scope">
          <div v-if="scope.row.status=='0'">{{scope.row.type}}</div>
          <div v-else>
            <el-checkbox-group v-model="scope.row.checkboxData">
              <el-checkbox v-for="(item,index) in Options" :key="index" :label="item" name="type"></el-checkbox>
            </el-checkbox-group>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="money" label="币种" width="108"></el-table-column>
      <el-table-column prop="account" label="类型" width="134" show-overflow-tooltip></el-table-column>
      <el-table-column label="操作" width="83" fixed="right">
        <template slot-scope="scope">
          <el-button v-if="scope.row.status=='0'" type="text" @click.native="expanRow(scope)">修改</el-button>
          <el-button v-else type="text" @click.native="comfirm(scope)">确定</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- ************分页器*********** -->
    <div class="pageClass">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        typeWidth: '210',
        Options: ["查询", "付款", "代发代收", "集团业务", "电子商业汇集票"],
        tableData: [{
            date: '1',
            time: 'CP202043343223',
            type: '查询、付款、代发代收、集团业务、电子商业汇集票',
            checkboxData: [],
            money: '人民币',
            account: '活期账户',
            account2: '+500,000,000.00',
            accName: '处理中',
            status: '0',
          },
          {
            date: '1',
            time: 'CP202043343223',
            type: '查询、付款',
            checkboxData: [],
            money: '人民币',
            account: '+500,000,000.00',
            accName: '成功',
            status: '0',
          },
          {
            date: '1',
            time: 'CP202043343223',
            type: '查询、付款、代发代收、集团业务、电子商业汇集票',
            checkboxData: [],
            money: '人民币',
            account: '+500,000,000.00',
            accName: '已退款',
            status: '0',
          },
          {
            date: '1',
            time: 'CP202043343223',
            type: '20204343236',
            money: '人民币',
            account: '+500,000,000.00',
            accName: '关闭',
            status: '0',
          },
          {
            date: '1',
            time: 'CP202043343223',
            type: '20204343236',
            money: '人民币',
            account: '+500,000,000.00',
            accName: '失败',
            status: '0',
          },
        ],
      }

    },
    methods: {
      expanRow(scope) {
        this.typeWidth = '560';
        this.tableData[scope.$index].status = '1';
        this.tableData[scope.$index].checkboxData = this.tableData[scope.$index].type.split('、');
      },
      comfirm(scope) {
        //发送确认请求
        this.tableData[scope.$index].status = '0';
        this.tableData[scope.$index].type = this.tableData[scope.$index].checkboxData.join("、")
        this.tableData.forEach((item) => {
          if (!item.status == '1') {
            this.typeWidth = '210';
          }
        });
        this.$MessageWarn({
          type: "success",
          title: "提醒",
          message: "修改成功",
        });
      },
      handleSizeChange() {},
      handleCurrentChange() {},
    },
  }

</script>
<style lang="scss">
  .accountPowerManage {
    .pageClass {
      margin-left: 54%;
      margin-bottom: 103px;
    }
  }

</style>
