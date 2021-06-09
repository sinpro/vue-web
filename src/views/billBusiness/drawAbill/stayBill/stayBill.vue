<template>
  <div class="stayBill">
    <title-bar title="待出票清单"></title-bar>
    <el-form
      ref="formData"
      label-width="120px"
      :inline="true"
      class="mt20"
      :rules="rules"
      :model="formData"
    >
      <el-form-item label="企业名称:" prop="keyWord">
        <el-input disabled v-model="formData.keyWord"></el-input>
      </el-form-item>
      <el-form-item label="账号:" prop="bankName">
        <el-select v-model="formData.bankName" placeholder="--请选择--">
          <el-option
            v-for="(bankName, index) in accountList"
            :key="index"
            :label="bankName.label"
            :value="bankName.val"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="票据类型:" prop="region">
        <el-select v-model="formData.region" placeholder="--请选择--">
          <el-option
            v-for="(region, index) in accountList"
            :key="index"
            :label="region.label"
            :value="region.val"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="出票日期:" prop="region">
        <el-date-picker
          v-model="formData.value1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="票据金额:" prop="num">
        <el-input
          v-model="formData.minNum"
          placeholder="请输入"
          class="w145"
          @input.native="NumInput"
        ></el-input>
        <span class="mlr10 f16">~</span>
        <el-input
          v-model="formData.maxNum"
          placeholder="请输入"
          class="w145"
          @input.native="NumInput"
        ></el-input>
      </el-form-item>
    </el-form>
    <div class="tc mt16 mb56">
      <el-button type="primary" @click="search" size="mini">查询</el-button>
    </div>
    <el-table :data="tableData" stripe>
      <el-table-column type="selection" width="104"> </el-table-column>
      <el-table-column prop="id" label="票据类型" width="140">
      </el-table-column>
      <el-table-column prop="name" label="出票日期" width="140">
      </el-table-column>
      <el-table-column prop="code" label="到期日期" width="140">
      </el-table-column>
      <el-table-column prop="code" label="票据金额(元)" width="140">
      </el-table-column>
      <el-table-column prop="code" label="收款人名称" width="140">
      </el-table-column>
      <el-table-column prop="code" label="承兑人名称" width="140">
      </el-table-column>
      <el-table-column prop="code" label="是否转让" width="140">
      </el-table-column>
      <el-table-column prop="name" label="操作" width="142" fixed="right">
        <template slot-scope="scope">
          <el-button type="text" @click="openInfo(scope.row)">详情</el-button>
          <el-button type="text" @click="openInfo(scope.row)">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="inline-block tar wr100"
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
    <div class="tc mtb56">
      <el-button type="primary" @click="">删除</el-button>
    </div>

    <el-dialog title="默认大" :visible.sync="infoFlay" size="medium" text>
      <title-bar title="票据信息"></title-bar>
      <div class="cen-form flex alc wrap">
        <div class="item">
          <span class="label cp2">企业名称</span>
          <span class="value"></span>
        </div>
        <div class="item">
          <span class="label cp2">收款人名称</span>
          <span class="value">145645645646546546</span>
        </div>
        <div class="item">
          <span class="label cp2">账号</span>
          <span class="value">1000000元</span>
        </div>
        <div class="item">
          <span class="label cp2">收款人账号</span>
          <span class="value">12笔</span>
        </div>
        <div class="item">
          <span class="label cp2">票据类型</span>
          <span class="value">12笔</span>
        </div>
        <div class="item">
          <span class="label cp2">收款人开户行名称</span>
          <span class="value">12笔</span>
        </div>
        <div class="item">
          <span class="label cp2">出票日期</span>
          <span class="value">12笔</span>
        </div>
        <div class="item">
          <span class="label cp2">收款人开户行行号</span>
          <span class="value">12笔</span>
        </div>
        <div class="item">
          <span class="label cp2">到期日期</span>
          <span class="value">12笔</span>
        </div>
        <div class="item">
          <span class="label cp2">承兑人类型</span>
          <span class="value">12笔</span>
        </div>
        <div class="item">
          <span class="label cp2">金额</span>
          <span class="value">12笔</span>
        </div>
        <div class="item">
          <span class="label cp2">标题名称</span>
          <span class="value">12笔</span>
        </div>
        <div class="item">
          <span class="label cp2">大写金额</span>
          <span class="value">12笔</span>
        </div>
        <div class="item">
          <span class="label cp2">能否转让</span>
          <span class="value">12笔</span>
        </div>
        <div class="item">
          <span class="label cp2">交易合同号</span>
          <span class="value">12笔</span>
        </div>
        <div class="item">
          <span class="label cp2">出票备注</span>
          <span class="value">12笔</span>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deleteInfo()" size="medium">删除</el-button>
        <el-button type="primary" @click="updateInfo()" size="medium"
          >修改</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
import mathTools from "utils/mathTools.js";
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      let minNum = this.formData.minNum;
      let maxNum = this.formData.maxNum;
      if (minNum === "" || maxNum === "") {
        callback(new Error("请输入票据金额"));
      } else if (minNum < 0 || maxNum < 0) {
        callback(new Error("最小金额、最大金额必须大于0"));
      } else if (minNum > maxNum) {
        callback(new Error("最小金额不能大于最大金额"));
      } else {
        callback();
      }
    };
    return {
      infoFlay: false,
      infoData: {},
      rules: {
        bankName: [
          { required: true, message: "请选择银行名称", trigger: "change" },
        ],
        region: [{ required: true, message: "请选择地区", trigger: "change" }],
        num: [
          {
            required: true,
            trigger: "change",
            validator: validatePass,
          },
        ],
      },
      accountList: [
        {
          label: "账号1",
          val: 0,
        },
        {
          label: "账号2",
          val: 1,
        },
      ],
      formData: {},
      currentPage: 0,
      pageSize: 10,
      total: 10,
    };
  },
  methods: {
    openInfo(data) {
      this.infoData = data;
      this.infoFlay = true;
    },
    updateInfo() {
      this.$router.push({
        path: "/bill/drawAbill/stayBill/updateStayBill",
      });
    },
    deleteInfo() {
      this.$confirm("删除确认", "确认删除此条出票信息吗？", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true,
      })
        .then(() => {
          this.tableData.splice(this.index, 1);
          this.infoFlay = false;
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    NumInput(e) {
      e.target.value = mathTools.formattingMoney(e.target.value);
    },
    handleSizeChange() {},
    handleCurrentChange() {},
    search() {
      this.$refs.formData.validate((valid) => {
        if (valid) {
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
<style lang="scss">
.stayBill {
  .w145 {
    width: 145px;
  }
  .cen-form {
    align-items: flex-start;
    .item {
      width: 50%;
      margin-bottom: 24px;
      .label {
        display: inline-block;
        width: 160px;
        text-align: right;
        margin-right: 24px;
      }
    }
  }
}
</style>