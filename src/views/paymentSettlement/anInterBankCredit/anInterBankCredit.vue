<template>
  <div class="anInterBankCredit">
    <title-bar title="跨行收款"></title-bar>
    <el-button class="titlebutton" icon="el-icon-plus">添加付款人</el-button>
    <el-table :data="table">
      <el-table-column prop="time" label="签约日期" width="150">
      </el-table-column>
      <el-table-column prop="id" label="协议号" width="150">
        <template slot-scope="scope">
          <el-button type="text" @click="openinfo(scope)">{{
            scope.row.id
          }}</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="付款户名"> </el-table-column>
      <el-table-column prop="code" label="付款账号" width="200">
      </el-table-column>
      <el-table-column label="操作" width="82">
        <template slot-scope="scope">
          <el-button type="text" @click="collection(scope)">收款</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="wPro">
      <p>温馨提示</p>
      <p>
        1.您可以通过本功能将已签约“授权支付协议”的他行账户资金划转至四川农信账户。
      </p>
    </div>
    <el-dialog
      :visible.sync="visible"
      text
      title="授权支付协议详情"
      size="medium"
    >
      <div class="cen-form flex alc wrap mt20">
        <div class="item">
          <span class="label cp2">协议编号</span>
          <span class="value"></span>
        </div>
        <div class="item">
          <span class="label cp2">协议生效日期</span>
          <span class="value">145645645646546546</span>
        </div>
        <div class="item">
          <span class="label cp2">收款户名</span>
          <span class="value">1000000元</span>
        </div>
        <div class="item">
          <span class="label cp2">协议生效日期</span>
          <span class="value">12笔</span>
        </div>
        <div class="item">
          <span class="label cp2">收款账号</span>
          <span class="value"></span>
        </div>
        <div class="item">
          <span class="label cp2">单笔限额</span>
          <span class="value"></span>
        </div>
        <div class="item">
          <span class="label cp2">收款银行</span>
          <span class="value"></span>
        </div>
        <div class="item">
          <span class="label cp2">日累计限额</span>
          <span class="value"></span>
        </div>
        <div class="item">
          <span class="label cp2">付款户名</span>
          <span class="value"></span>
        </div>
        <div class="item">
          <span class="label cp2">月累计限额</span>
          <span class="value"></span>
        </div>
        <div class="item">
          <span class="label cp2">付款账号</span>
          <span class="value"></span>
        </div>
        <div class="item">
          <span class="label cp2">日累计笔数上限</span>
          <span class="value"></span>
        </div>
        <div class="item">
          <span class="label cp2">付款银行</span>
          <span class="value"></span>
        </div>
        <div class="item">
          <span class="label cp2">月累计笔数上限</span>
          <span class="value"></span>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="visible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      visible: false,
      table: [
        {
          time: "2021 02 02",
          id: "020202020",
          code: "1231313212123",
          name: "54456445",
        },
      ],
    };
  },
  created() {},
  methods: {
    openinfo(scope) {
      this.visible = true;
    },
    collection(scope) {
      this.$router.push({
        path: "/paymentSettlement/anInterBankCredit/collection",
      });
    },
  },
};
</script>

<style lang="scss">
.anInterBankCredit {
  position: relative;
  .titlebutton {
    width: 115px;
    padding: 7px;
    font-size: 14px;
    position: absolute;
    top: 0;
    right: 0;
  }
  .el-table {
    margin-bottom: 100px;
  }
  .wPro {
    position: absolute;
    bottom: 0;
  }
  .cen-form {
    align-items: flex-start;
    .item {
      width: 50%;
      margin-bottom: 24px;
      .el-button {
        padding: 0;
      }
      .label {
        display: inline-block;
        width: 140px;
        text-align: right;
        margin-right: 24px;
      }
      .value {
        .tab {
          display: inline-block;
          min-width: 54px;
          padding: 0 8px;
          height: 22px;
          line-height: 22px;
          font-size: 14px;
          text-align: center;
          color: #fff;
          border-radius: 20px;
          background: #c6a34f;
        }
      }
    }
  }
}
</style>