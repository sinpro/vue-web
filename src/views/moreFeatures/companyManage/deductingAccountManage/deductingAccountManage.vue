<template>
  <div class="deductingAccountManage">
    <div class="card">
      <div class="tar d1">
        权限：{{rights}}
      </div>
      <p class="cf f18 lh18 ml24 mb10">8024 5763 4368 783 </p>
      <p class="p2 cf f16 lh16 ml24 mb20">京易诚互动网络技有限公司</p>
      <div class="ml24 cf f16 lh16">
        币种
        <span class="s1">人民币</span>
        <span class="tar floatR">
          <span class="s2">类型</span>
          <span class="s3 ml20">活期账户</span>
        </span>
      </div>
    </div>
    <p class="tac cp3 f14 lh14 mb56">说明：扣款账户是为了缴纳证书费用而设置的，在需要缴纳证书费用时，银行会从默认扣款账户进行扣款。</p>
    <div v-if="isShow" class="tac">
      <el-button type="primary" @click.native="isShowMeth()">修改默认扣款账户</el-button>
    </div>
    <div v-else>
      <title-bar title="修改默认扣款账户"></title-bar>
      <el-table :data="tableData" stripe class="mt36">
        <el-table-column prop="time" label="序号" width="80"></el-table-column>
        <el-table-column prop="type" label="账号" width="190" show-overflow-tooltip></el-table-column>
        <el-table-column prop="money" label="户名" width="190" show-overflow-tooltip></el-table-column>
        <el-table-column prop="money1" label="币种" width="100"></el-table-column>
        <el-table-column prop="money2" label="类型" width="120"></el-table-column>
        <el-table-column prop="money3" label="操作权限" width="140"></el-table-column>
        <el-table-column prop="num" label="操作" width="150" fixed="right">
          <template slot-scope="scope">
            <el-button :disabled="scope.row.status=='1'" type="text" @click.native="defaultAcc(scope)">设为默认账户
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        rights: "查询、付款",
        isShow: true,
        tableData: [{
            time: '001',
            type: '623100 **** 8201',
            money: '北京易诚互动网络北京易诚互动网络技',
            money1: '人民币',
            money2: '活期账户',
            money3: '查询、付款',
            num: '100',
            status: '1',
          },
          {
            time: '001',
            type: '623100 **** 8201',
            money: '北京易诚互动网络北京易诚互动网络技',
            money1: '人民币',
            money2: '活期账户',
            money3: '查询、付款',
            num: '100',
            status: '0',
          }, {
            time: '001',
            type: '623100 **** 8201',
            money: '北京易诚互动网络北京易诚互动网络技',
            money1: '人民币',
            money2: '活期账户',
            money3: '查询、付款',
            num: '100',
            status: '1',
          }, {
            time: '001',
            type: '623100 **** 8201',
            money: '北京易诚互动网络北京易诚互动网络技',
            money1: '人民币',
            money2: '活期账户',
            money3: '查询、付款',
            num: '100',
            status: '0',
          },
        ],
      }
    },
    methods: {
      isShowMeth() {
        this.isShow = !this.isShow
      },
      defaultAcc(scope) {
        //uk
        this.$MessageWarn({
          type: 'success',
          message: '设置成功！'
        })
      }
    }
  }

</script>
<style lang="scss">
  .deductingAccountManage {
    .card {
      width: 444px;
      height: 171px;
      border-radius: 4px;
      box-sizing: border-box;
      margin: 27px auto 36px;
      // background-image: url('../../../../images/accountManage/deductingAccountManage.png');
      .d1 {
        color: #83641b;
        font-size: 16px;
        line-height: 16px;
        padding-right: 24px;
        padding-top: 11px;
        margin-bottom: 23px;
      }

      .p2 {
        width: 396px;
        border-bottom: 1px solid #ffffff33;
        padding-bottom: 23px;
      }

      .s1 {
        margin-left: 20px;
      }

      .s1,
      .s2,
      .s3 {
        display: inline-block;
      }

      .floatR {
        float: right;
        margin-right: 23px;
      }
    }

  }

</style>
