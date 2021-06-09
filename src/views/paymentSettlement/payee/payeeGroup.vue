<template>
  <div class="payeeGroup">
    <title-bar title="分组详情"></title-bar>

    <div class="bgbrand h90 wr100 tac mb50">
      <p class="gray2 pt20">组名</p>
      <div class="name f20 bold mt10">财务部们<i class="el-icon-edit"></i></div>
    </div>

    <p class="leftBar">
      <span>收款人信息({{ table.length }})</span>
      <span class="fr" v-if="update">
        <el-button class="w80">取消</el-button>
        <el-button type="danger" class="delete w80" @click="deleteGroup"
          >删除</el-button
        >
      </span>
      <span class="fr" v-else>
        <el-button icon="el-icon-plus" class="w115">新增收款人</el-button>
        <el-button class="w80" @click="update = true">编辑</el-button>
      </span>
    </p>

    <div v-if="table.length > 0">
      <el-table
        :data="table"
        stripe
        :show-header="false"
        selection-change="selectionChange"
      >
        <el-table-column type="selection" width="45" v-if="update">
        </el-table-column>
        <el-table-column
          prop="name"
          label="账户名称"
          width="300"
          show-overflow-tooltip
        >
          <template slot-scope="scope">
            <p class="leftdrop dian w250">{{ scope.row.name }}</p>
            <p class="gray2 f14">{{ scope.row.nc }}</p>
          </template>
        </el-table-column>
        <el-table-column prop="code" label="账号"> </el-table-column>
        <el-table-column
          prop="btname"
          label="所属银行"
          width="240"
          show-overflow-tooltip
        >
          <template slot-scope="scope">
            <div class="flex alc">
              <img class="h20 w20 mr10" :src="scope.row.img" alt="" />
              <p class="dian w160">
                {{ scope.row.btname }}
              </p>
            </div>
          </template>
        </el-table-column>

        <el-table-column prop="name" label="操作" width="150">
          <template slot-scope="scope">
            <el-button type="text">编辑</el-button>
            <el-button type="text">转账</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="flex alc jst">
        <span v-if="update" class="ml25">
          <el-checkbox v-model="checkAll">
            <span class="gray2 f14 lh16"> 全选</span>
          </el-checkbox>
          <span class="ml56">已选择{{ dialogVisible.length }}个收款人</span>
        </span>
        <span v-else></span>
        <el-pagination
          v-if="total > pageSize"
          class="inline-block"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pageSize"
          :layout="
            total / pageSize > 30
              ? 'prev, pager, next, jumper'
              : 'prev, pager, next'
          "
          :total="total"
        >
        </el-pagination>
      </div>

      <p class="tac mtb56">
        <el-button size="medium">导出收款人</el-button>
        <el-button type="primary" size="medium">从其他组移入</el-button>
      </p>
    </div>

    <div v-else>
      <p class="tac mtb56">
        <el-button type="primary">添加收款人</el-button>
      </p>
    </div>

    <el-dialog
      title="修改组名"
      :visible.sync="dialogVisible"
      :show-close="false"
      center
    >
      <el-form v-model="formData" label-width="auto">
        <el-form-item label="组名">
          <el-input></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="small">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false" size="small"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <payee-list
      v-if="payeeFlag"
      type="checkbox"
      :payeeFlag="payeeFlag"
      @handleClose="payeeFlag = false"
      @payeeConfirm="payeeConfirm"
    ></payee-list>
  </div>
</template>

<script>
import PayeeList from "../components/payeeList"; //收款人列表
export default {
  components: {
    PayeeList,
  },
  data() {
    return {
      dialogVisible: false,
      payeeFlag: false,
      checkAll: false,
      update: false,
      currentPage: 1,
      total: 20,
      pageSize: 10,
      selectTable: [],
      table: [
        {
          name: "四川省成都市农村信用社",
          nc: "昵称",
          code: "1546456456",
          btname: "中国建设银行",
          img: "",
        },
        {
          name: "四川省成都市农村信用社",
          code: "1546456456",
          btname: "中国建设银行",
          img: "",
        },
      ],
    };
  },
  methods: {
    selectionChange(list) {
      this.selectTable = list;
    },
    deleteGroup() {
      this.$confirm(
        "删除收款人",
        "删除后选中的" + selectTable.length + "个收款人将移动至“未分组”。",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
          center: true,
        }
      )
        .then(() => {
          this.$MessageWarn({
            type: "success",
            title: "提醒",
            message: "删除成功",
          });
        })
        .catch(() => {});
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },

    payeeConfirm(payeeList) {
      // this.payeeFlag = false;
      // this.table = this.table.concat(payeeList);
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
.payeeGroup {
  .ml28 {
    margin-left: 28px;
  }
  .el-table {
    td {
      color: #1b1b1b;
      padding: 6px 0px;
      height: 60px;
    }
    .leftdrop {
      position: relative;
      &::after {
        content: "";
        display: block;
        height: 4px;
        width: 4px;
        background: #c6a34f;
        position: absolute;
        border-radius: 50%;
        left: -10px;
        top: 10px;
      }
    }
  }
  .name {
    position: relative;
  }
  .el-icon-edit {
    position: absolute;
    margin-left: 40px;
  }
  .leftBar .el-button {
    padding: 7px;
    font-size: 14px;
    &.delete {
      background: #fff !important;
      color: #ed3d3d;
      &:hover {
        background: #fdecec !important;
        color: #e85858;
      }
      &:focus {
        background: #fdecec !important;
        color: #e85858;
      }
    }
  }
}
</style>

