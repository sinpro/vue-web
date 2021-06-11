<template>
  <div class="operatorManage">
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="操作员管理" name="operatorManage">
        <el-table :data="tableData" stripe class="mt36 mb55">
          <el-table-column label="选择" width="80">
            <template slot-scope="scope">
              <el-radio v-model="radio" :label="scope.$index"></el-radio>
            </template>
          </el-table-column>
          <el-table-column prop="time" label="操作员编号" width="131"></el-table-column>
          <el-table-column prop="type" label="操作员姓名" width="122"></el-table-column>
          <el-table-column prop="money" label="USBkey序列号" width="148" show-overflow-tooltip></el-table-column>
          <el-table-column prop="account" label="操作员权限" width="130" show-overflow-tooltip></el-table-column>
          <el-table-column prop="accName" label="操作员状态" width="110"></el-table-column>
          <el-table-column label="操作" fixed="right" width="252">
            <template slot-scope="scope">
              <el-button type="text" @click.native="popDial(scope)">详情</el-button>
              <span class="spanBarClass">|</span>
              <el-button v-if="scope.row.status=='1'" type="text" @click.native="freeze(scope)">解冻</el-button>
              <el-button v-else type="text" @click.native="freeze(scope)">冻结</el-button>
              <span class="spanBarClass">|</span>
              <el-button type="text" @click.native="closePhoneBank(scope)">关闭手机银行</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="tac mb130">
          <el-button type="primary" size="medium" @click.native="fixAuthorization">修改操作员权限</el-button>
          <el-button type="primary" size="medium" @click.native="fixAccount">修改可操作账户</el-button>
          <el-button type="primary" size="medium" @click.native="fixFunction">修改可操作业务</el-button>
        </div>
        <el-dialog title="授权模式明细" :visible.sync="dialogVisibleb" size="medium" text :show-close="false">
          <title-bar title="操作员信息"></title-bar>
          <div class="detailDiv f16 lh16 mt35 mb35">
            <ul class="ul1 tar cp3 mr24">
              <li>操作员编号</li>
              <li>证件类型</li>
              <li>手机号码</li>
              <li>操作员权限</li>
              <li>单笔限额</li>
              <li>日累计笔数</li>
            </ul>
            <ul class="ul2 cp1">
              <li>001</li>
              <li>身份证</li>
              <li>133 **** 6521</li>
              <li>录入、一级授权</li>
              <li>100,000,000.00元</li>
              <li>10000笔</li>
            </ul>
            <ul class="ul3 tar cp3 mr24">
              <li>操作员姓名</li>
              <li>证件号码</li>
              <li>电子邮箱</li>
              <li>开通渠道</li>
              <li>日累积限额</li>
              <li>年累计限额</li>
            </ul>
            <ul class="ul4 cp1">
              <li>*三</li>
              <li>422 **** 7233</li>
              <li>15789762@163.com</li>
              <li>企业网银、企业手机银行</li>
              <li>100,000,000.00元</li>
              <li>100,000,000.00元</li>
            </ul>
          </div>
          <title-bar title="可操作账户"></title-bar>
          <el-table :data="tableDataDia" stripe class="mt36">
            <el-table-column prop="time" label="账号" width="393"></el-table-column>
            <el-table-column prop="type" label="账户类型" width="395"></el-table-column>
            <el-table-column prop="money" label="权限" width="128" show-overflow-tooltip></el-table-column>
          </el-table>
          <div class="tac mtb25">
            <el-button type="primary">查看完整信息</el-button>
          </div>
        </el-dialog>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        dialogVisibleb: false,
        activeName: "operatorManage",
        radio: "",
        tableDataDia: [{
          time: "623221 ****** 7531",
          type: "一般户",
          money: "查询、付款",
        }],
        tableData: [{
            date: '1',
            time: '00121312',
            type: '周三入',
            money: '231231231',
            account: '录入、授权、录入、授权',
            accName: '冻结',
            status: '1',
          },
          {
            date: '1',
            time: '00121312',
            type: '周三入',
            money: '231231231',
            account: '录入、授权',
            accName: '冻结',
            status: '0',
          }, {
            date: '1',
            time: '00121312',
            type: '周三入',
            money: '231231231',
            account: '录入、授权',
            accName: '冻结',
            status: '1',
          }, {
            date: '1',
            time: '00121312',
            type: '周三入',
            money: '231231231',
            account: '录入、授权',
            accName: '冻结',
            status: '0',
          },
        ]
      };
    },

    methods: {
        closePhoneBank(scope){
            this.$confirm('', '确定要关闭操作员XXX手机银行吗？', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
            center: true,
            showClose: false,
          }).then(() => {
            this.$MessageWarn({
              type: 'success',
              message: '关闭成功!'
            });
          });
        },
      freeze(scope) {
        if (scope.row.status == '0') {
          this.$confirm('冻结后操作员将无法使用企业网银和手机银行', '确定要冻结操作员XXX吗？', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
            center: true,
            showClose: false,
          }).then(() => {
            this.$MessageWarn({
              type: 'success',
              message: '冻结成功!'
            });
          });
        } else{
            this.$confirm('', '确定要解冻操作员XXX吗？', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
            center: true,
            showClose: false,
          }).then(() => {
            this.$MessageWarn({
              type: 'success',
              message: '解冻成功!'
            });
          });
        }

      },
      popDial(scope) {
        this.dialogVisibleb = true;
      },
      fixAuthorization() {
        window.sessionStorage.setItem('fixAuthorization', JSON.stringify(this.tableData[this.radio]));
        this.$router.push('/more/companyManage/companyOperatorManage/authorizationManage')
      },
      fixAccount() {
          this.$router.push('/more/companyManage/companyOperatorManage/accountManage')
      },
      fixFunction() {
          this.$router.push('/more/companyManage/companyOperatorManage/functionManage')

      },
    },
    mounted() {

    },
    watch: {},
  };

</script>
<style lang="scss">
  .operatorManage {

    .el-table .cell,
    .el-table th>.cell {
      padding-right: 0;
    }

    .spanBarClass {
      color: #f0f0f0;
      margin: 0 3px 0 5px;
    }

    .mb55 {
      margin-bottom: 55px;
    }

    .mb130 {
      margin-bottom: 130px;
    }

    .detailDiv {
      display: flex;

      >ul>li {
        list-style: none;
      }

      >ul>li+li {
        margin-top: 23px;
      }

      .ul1 {
        margin-left: 76px;
      }

      .ul3 {
        width: 350px;
      }
    }
  }

</style>
