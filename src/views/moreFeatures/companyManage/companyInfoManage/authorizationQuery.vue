<template>
  <div class="authorizationQuery">
    <el-table :data="tableData" stripe class="mt36">
      <el-table-column prop="time" label="模式名称" width="294"></el-table-column>
      <el-table-column prop="account" label="模式类型" width="294"></el-table-column>
      <el-table-column prop="accName" label="授权顺序" width="270"></el-table-column>
      <el-table-column label="操作" width="83" fixed="right">
        <template slot-scope="scope">
          <el-button type="text" @click.native="expanRow(scope)">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- ************分页器*********** -->
    <div class="pageClass">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
    <el-dialog title="授权模式明细" :visible.sync="dialogVisibleb" size="medium" text :show-close="false">
        <title-bar title="授权模式明细"></title-bar>
      <div class="ulClass flex f16 lh16">
          <ul class="ul1 tar cp3">
              <li>模式名称</li>
              <li>授权顺序</li>
          </ul>
          <ul class="ul2 cp1">
              <li>有金额授权</li>
              <li>有序授权</li>
          </ul>
          <ul class="ul3 tar cp3">
              <li>模式类型</li>
          </ul>
          <ul class="ul4 cp1">
              <li>有金额区间</li>
          </ul>
      </div>
        <title-bar title="额度区间设置"></title-bar>
<el-table :data="tableData" stripe class="mt36">
      <el-table-column prop="money" label="金额区间(元)" width="155"></el-table-column>
      <el-table-column prop="accName" label="一级（人）" width="160"></el-table-column>
      <el-table-column prop="accName" label="二级（人）" width="161"></el-table-column>
      <el-table-column prop="accName" label="三级（人）" width="164"></el-table-column>
      <el-table-column prop="accName" label="四级（人）" width="147"></el-table-column>
      <el-table-column prop="accName" label="五级（人）" width="126"></el-table-column>
    </el-table>
      <div class="tac mtb25">
        <el-button type="primary" @click="dialogVisibleb = false" >确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      return {
          dialogVisibleb:false,
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
        expanRow(scope){
            this.dialogVisibleb=true;
        },
      handleSizeChange() {},
      handleCurrentChange() {},
    },
  }

</script>
<style lang="scss">
  .authorizationQuery {
    .pageClass {
      margin-left: 54%;
      margin-bottom: 103px;
      margin-bottom: 36px;
    }
    .ulClass{
        margin-left: 94px;
        margin-top: 36px;
        >ul>li{
            list-style: none;
        }
        >ul>li+li{
            margin-top: 23px;
        }
        .ul1,.ul3{
            margin-right: 20px;
        }
        .ul2{
            width: 380px;
        }
    }
  }

</style>
