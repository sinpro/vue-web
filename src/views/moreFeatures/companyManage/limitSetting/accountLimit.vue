<template>
  <div class="accountLimit">
    <el-table :data="tableData" stripe class="mt36">
      <el-table-column prop="time" label="账号" width="190" show-overflow-tooltip></el-table-column>
      <el-table-column prop="type" label="户名" width="105" show-overflow-tooltip></el-table-column>
      <el-table-column prop="type2" label="类型" width="115" show-overflow-tooltip></el-table-column>
      <el-table-column prop="money" label="操作权限" width="130"></el-table-column>
      <el-table-column prop="account1" label="单笔限额(元)" width="230">
        <template slot-scope="scope">
          <div v-if="scope.row.status=='1'">
            <el-input v-model="scope.row.account1" class="inputWidth" @input="changeMoney('account1',scope.$index)" maxlength="24"></el-input>
          </div>
          <div v-else>
            {{scope.row.account1}}
          </div>
        </template>
      </el-table-column>


      <el-table-column prop="account2" label="日累计限额(元)" width="230">
          <template slot-scope="scope">
          <div v-if="scope.row.status=='1'">
            <el-input v-model="scope.row.account2" class="inputWidth" @input="changeMoney('account2',scope.$index)" maxlength="24"></el-input>
          </div>
          <div v-else>
            {{scope.row.account2}}
          </div>
        </template>
      </el-table-column>


      <el-table-column prop="num" label="日累计笔数(笔)" width="226">
          <template slot-scope="scope">
          <div v-if="scope.row.status=='1'">
            <el-input v-model="scope.row.num" class="inputWidth" @input="limit10('num',scope.$index)" maxlength="10"></el-input>
          </div>
          <div v-else>
            {{scope.row.num}}
          </div>
        </template>
      </el-table-column>


      <el-table-column prop="account3" label="年累计限额(元)" width="230">
          <template slot-scope="scope">
          <div v-if="scope.row.status=='1'">
            <el-input v-model="scope.row.account3" class="inputWidth" @input="changeMoney('account3',scope.$index)" maxlength="24"></el-input>
          </div>
          <div v-else>
            {{scope.row.account3}}
          </div>
        </template>
      </el-table-column>


      <el-table-column label="操作" width="83" fixed="right">
        <template slot-scope="scope">
          <el-button v-if="scope.row.status=='0'" type="text" @click.native="expanRow(scope)">修改</el-button>
          <el-button v-else type="text" @click.native="comfirm(scope)">确定</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import mathTools from '@src/assets/utils/mathTools.js'
  export default {
    data() {
      return {
        tableData: [{
            time: '623100 **** 8201',
            type: '李*辉的的',
            type2: '活期账户',
            money: '查询、付款',
            account1: '20,000,000.00',
            account2: '20,000,000.00',
            account3: '20,000,000.00',
            num: '100',
            status: '0',
          },
          {
            time: '623100 **** 8201',
            type: '李*辉',
            type2: '活期账户',
            money: '查询、付款',
            account1: '20,000,000.00',
            account2: '20,000,000.00',
            account3: '20,000,000.00',
            num: '100',
            status: '0',
          },
          {
            time: '001',
            type: '李*辉',
            type2: '活期账户',
            money: '查询、付款',
            account1: '20,000,000.00',
            account2: '20,000,000.00',
            account3: '20,000,000.00',
            num: '100',
            status: '0',
          },
          {
            time: '001',
            type: '李*辉',
            type2: '活期账户',
            money: '查询、付款',
            account1: '20,000,000.00',
            account2: '20,000,000.00',
            account3: '20,000,000.00',
            num: '100',
            status: '0',
          },
          {
            time: '001',
            type: '李*辉',
            type2: '活期账户',
            money: '查询、付款',
            account1: '20,000,000.00',
            account2: '20,000,000.00',
            account3: '20,000,000.00',
            num: '100',
            status: '0',
            val:""
          },
        ],
      }

    },
    methods: {
      limit10(val,index){
        this.tableData[index][val]=this.tableData[index][val].replace(/^0/g, "").replace(/[^\d]/g, "")
      },
        changeMoney(val,index) {
         this.tableData[index][val] = mathTools.moneyCheck(this.tableData[index][val])
      },
      expanRow(scope) {
        this.tableData[scope.$index].status = '1';
      },
      comfirm(scope) {
        //发送确认请求
        console.log(Number(scope.row.account2.replace(/,/g, "")),Number(scope.row.account3.replace(/,/g, "")))
        let that = this;
          if (Number(scope.row.account1.replace(/,/g, "")) > Number(scope.row.account2.replace(/,/g, ""))) {
            this.$confirm('单笔限额不可大于日累计限额', '提示', {
              confirmButtonText: '确定',
              type: 'warning',
              showClose: false,
              center: true,
              showCancelButton: false,
            });
            return false
          };
          if (Number(scope.row.account2.replace(/,/g, "")) > Number(scope.row.account3.replace(/,/g, ""))) {
            this.$confirm('日累计限额不可大于年累计限额', '提示', {
              confirmButtonText: '确定',
              type: 'warning',
              showClose: false,
              center: true,
              showCancelButton: false,
            });
            return false
          };
        this.tableData[scope.$index].status = '0';

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
  .accountLimit {
    .pageClass {
      margin-left: 54%;
      margin-bottom: 103px;
    }

    .inputWidth {
      width: 180px;
    }
  }

</style>
