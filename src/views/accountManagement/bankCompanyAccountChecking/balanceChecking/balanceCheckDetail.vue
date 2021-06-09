<template>
  <div class="balanceCheckDetail">
    <el-tabs v-model="activeName">
      <el-tab-pane label="交易明细" name="first">
        <div class="topDiv f16 lh16 cp1"><span class="sp1"><span class="span1"><span>账号: </span><span>
                123253236</span></span><span class="span2"><span>账期: </span><span>3654345</span></span><span
              class="span3"><span> 总笔数: </span><span>100笔 </span></span></span><span class="sp2"><span
              class="span4"><span> 收入合计:</span><span> 8,776,890.00元</span></span><span
              class="span5"><span>支出合计:</span><span>76,543.87元</span></span></span></div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="name" label="交易时间" width="214"></el-table-column>
          <el-table-column prop="name" label="交易类型" width="112"></el-table-column>
          <el-table-column prop="name" label="交易金额(元)" width="141"></el-table-column>
          <el-table-column prop="name" label="账户余额(元)" width="156"></el-table-column>
          <el-table-column prop="name" label="对方账号" width="183"></el-table-column>
          <el-table-column prop="name" label="对方户名" width="216"></el-table-column>
          <el-table-column prop="address" label="操作" width="83" fixed="right">
            <template slot-scope="scope">
              <el-button type="text" @click.native="popDial(scope)">详情</el-button>
            </template>
          </el-table-column>
        </el-table>

        <!-- ************分页器*********** -->
        <div class="pageClass">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
            layout="prev, pager, next" :total="1000">
          </el-pagination>
        </div>
        <div class="tac">
          <el-button type="primary" @click.native="goback(page)" class="mtb56">返回</el-button>
        </div>

        <el-dialog title="交易明细详情" :visible.sync="dialogVisibleb" :show-close='false' size="medium" text>
          <div class="cont flex">
            <ul class="ul1 cp3 f16 lh16 tar">
              <li>付款人户名</li>
              <li>付款人账户</li>
              <li>付款人开户行</li>
              <li>币种</li>
              <li>交易类型</li>
              <li>用途</li>
              <li>交易渠道</li>
            </ul>
            <ul class="ul2 cp1 f16 lh16">
              <li>北京易诚互动网络技术有限公司</li>
              <li>311099 **** 9999</li>
              <li>简阳农商行营业部</li>
              <li>人民币</li>
              <li>行内转账-收入</li>
              <li>转账</li>
              <li>网银</li>
            </ul>
            <ul class="ul3 cp3 f16 lh16 tar">
              <li>收款人户名</li>
              <li>收款人账户</li>
              <li>收款人开户行</li>
              <li>交易金额</li>
              <li>手续费</li>
              <li>备注</li>
              <li>交易时间</li>
            </ul>
            <ul class="ul4 cp1 f16 lh16">
              <li>南方置业有限公司</li>
              <li>623192 **** 9999</li>
              <li>招商银行</li>
              <li>100,000.00元</li>
              <li>10.00</li>
              <li>--</li>
              <li>2020-09-01 19:00:12</li>
            </ul>
          </div>
          <div slot="footer" class="dialog-footer m12">
            <el-button @click="dialogVisibleb = false" type="primary">确定</el-button>
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
        activeName: 'first',
        dialogVisibleb: false,
        page: '',
        tableData: [{
          date: '1',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '3',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '4',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      popDial() {
        this.dialogVisibleb = true
      },
      goback(page) {
        window.sessionStorage.setItem('chekbillpage', JSON.stringify(page));
        this.$router.go(-1)
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
    },
    mounted() {
      JSON.parse(window.sessionStorage.getItem('balanceCkecDetail'))
    }
  }

</script>
<style lang="scss">
  .balanceCheckDetail {
    ::-webkit-scrollbar {
      //表格滚动条
      height: 10px;
      display: block;
    }

    .topDiv {
      margin-top: 36px;
      margin-bottom: 23px;

      >span,
      >span>span {
        display: inline-block;
      }

      .span1 {
        width: 229px;
      }

      .span2 {
        width: 149px;
      }

      .span4 {
        width: 230px;
      }

      .span5 {
        width: 206px;
      }

      .sp2 {
        text-align: right;
        width: 445px;
      }

      .ml103 {
        margin-left: 103px;
      }
    }

    .cont {
      >ul>li {
        list-style: none;
      }

      .ul1 {
        margin-left: 53px;

        >li+li {
          margin-top: 23px;
        }
        margin-right: 22px;
      }

      .ul2 {
        >li+li {
          margin-top: 23px;
        }
        width: 365px;
      }

      .ul3 {
        >li+li {
          margin-top: 23px;
        }
        margin-right: 22px;

      }

      .ul4 {
        >li+li {
          margin-top: 23px;
        }
      }
    }
    .m12{
      margin: 12px 0;
    }
  }

</style>
