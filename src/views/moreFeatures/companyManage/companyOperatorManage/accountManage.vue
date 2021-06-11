<template>
  <div class="accountManage">
    <title-bar title="修改操作员权限"></title-bar>

    <div class="flex ulDiv mt36 ml24 mb24 f16 lh16">
      <ul class="ul1 tar cp3">
        <li>操作员编号</li>
      </ul>
      <ul class="ul2 cp1">
        <li>001</li>
      </ul>
      <ul class="ul3 tar cp3">
        <li>操作员姓名</li>
      </ul>
      <ul class="ul4 cp1">
        <li>*三</li>
      </ul>
    </div>
    <el-table :data="tableData" stripe @selection-change="handleSelectionChange" empty-text="暂无回单信息">
      <el-table-column type="selection" width="82"></el-table-column>
      <el-table-column prop="time" label="账号" width="195" show-overflow-tooltip>
          <template slot-scope="scope">
              <div :class="scope.row.color">
                  {{scope.row.time}}
              </div>
          </template>
      </el-table-column>
      <el-table-column prop="type" label="户名" width="90" show-overflow-tooltip>
          <template slot-scope="scope">
              <div :class="scope.row.color">
                  {{scope.row.type}}
              </div>
          </template>
      </el-table-column>
      <el-table-column prop="money" label="账户功能" width="200" show-overflow-tooltip>
          <template slot-scope="scope">
              <div :class="scope.row.color">
                  {{scope.row.money}}
              </div>
          </template>
      </el-table-column>
      <el-table-column prop="account" label="币种" width="100">
          <template slot-scope="scope">
              <div :class="scope.row.color">
                  {{scope.row.account}}
              </div>
          </template>
      </el-table-column>
      <el-table-column prop="accName" label="类型" width="117">
          <template slot-scope="scope">
              <div :class="scope.row.color">
                  {{scope.row.accName}}
              </div>
          </template>
      </el-table-column>
      <el-table-column label="账户权限" fixed="right" width="185">
        <template slot-scope="scope">
          <el-checkbox-group v-model="scope.row.date" :disabled="scope.row.disabled">
            <el-checkbox label="查询" name="type"></el-checkbox>
            <el-checkbox label="付款" name="type"></el-checkbox>
          </el-checkbox-group>
        </template>
      </el-table-column>
    </el-table>
    <div class="tac mt55 mb100">
      <el-button size="medium" @click.native="goBack">返回</el-button>
      <el-button size="medium" type="primary" @click.native="submit">提交</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
            id: '0',
            date: ['查询'],
            time: '623100******8212',
            type: 'DG',
            money: '查询、付款、代发代收',
            account: '人民币',
            accName: '活期账户',
            status: '1',
            disabled: true,
            color: 'colorGrey',
          },
          {
            id: '1',
            date: ['查询', '付款'],
            time: '00121312',
            type: '周三入',
            money: '231231231',
            account: '人民币',
            accName: '冻结',
            status: '0',
            disabled: true,
            color: 'colorGrey',
          }, {
            id: '2',
            date: ['付款'],
            time: '00121312',
            type: '周三入',
            money: '231231231',
            account: '人民币',
            accName: '冻结',
            status: '1',
            disabled: true,
            color: 'colorGrey',
          }, {
            id: '3',
            date: '1',
            time: '00121312',
            type: '周三入',
            money: '231231231',
            account: '人民币',
            accName: '冻结',
            status: '0',
            disabled: true,
            color: 'colorGrey',
          },
        ]
      };
    },

    methods: {
      handleSelectionChange(value) {
        this.tableData.forEach((item) => {
          item.disabled = true;
          item.color='colorGrey';
        })
        console.log(value)
        value.forEach(item => {
          this.tableData[item.id].disabled = false;
          this.tableData[item.id].color = 'colorNormal';
        });


      },
      goBack() {
        this.$router.go(-1)
      },
      submit() {

      },
    },
    mounted() {

    },
    watch: {},
  };

</script>
<style lang="scss">
  .accountManage {
    .ulDiv {
      >ul>li {
        list-style: none;
      }

      .ul1,
      .ul3 {
        margin-right: 20px;
      }

      .ul2 {
        width: 100px;
      }
    }
    .colorNormal{
        color: #666666 !important;
    }
    .colorGrey{
        color: #b3b3b3 !important;
    }
  }

</style>
