<template>
  <div class="payee">
    <title-bar :title="'常用收款人(' + table.length + ')'"></title-bar>
    <div v-if="table.length">
      <span class="titlebutton">
        <el-button icon="el-icon-plus">新增收款人</el-button>
        <el-button icon="el-icon-plus">新增分组</el-button>
      </span>
      <el-form
        ref="formData"
        label-width="120px"
        :inline="true"
        :model="formData"
      >
        <el-form-item label="收款户名:" prop="keyWord">
          <el-input v-model="formData.keyWord" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="收款账号:" prop="keyWord">
          <el-input v-model="formData.keyWord" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="分组:" prop="bankName">
          <el-select v-model="formData.bankName" placeholder="请选择">
            <!-- <el-option
              v-for="(bankName, index) in accountList"
              :key="index"
              :label="bankName.label"
              :value="bankName.val"
            >
            </el-option> -->
          </el-select>
        </el-form-item>
        <div class="tac mt15 mb55">
          <el-button type="primary" size="mini">查询</el-button>
        </div>
      </el-form>
      <el-card>
        <div class="h60 lh60 position-r">
          <span class="leftBar pointer" @click="open()">
            <i
              :class="
                kg
                  ? 'ml10 gray3 el-icon-caret-top'
                  : 'ml10 gray3 el-icon-caret-bottom'
              "
            ></i>
            <span class="gray1 f18 bold">市场部</span>
          </span>
          <span class="ta position-a" style="right: 20px">
            <el-popover
              placement="bottom"
              trigger="click"
              popper-class="payee-popper"
            >
              <div>
                <p >组详情</p>
                <p >顶置组</p>
              </div>
              <el-button
                slot="reference"
                class="p7 f14 w80"
                size="mini"
                @click="tooltip = true"
                >编辑</el-button
              >
            </el-popover>
          </span>
        </div>
        <div class="card-con">
          <div class="con-item">
            <img src="" alt="" />
            <div>
              <p class="f16 lh16 bold dian">
                四川省成都市农村信用社四川省成都市农村信用社四川省成都市农村信用社四川省成都市农村信用社
              </p>
              <p class="f16 lh16 mt8">昵称</p>
              <p class="f14 lh14 mt6">4564654564564646</p>
              <p class="f14 gray2 mt15">中国建设银行</p>
            </div>
          </div>
          <div class="con-item"></div>
          <div class="con-item"></div>
        </div>
      </el-card>
      <div class="tac mtb56">
        <el-button size="medium" @click="dialogVisible = true"
          >批量导入</el-button
        >
        <el-button type="primary" size="medium">批量导出</el-button>
        <p class="mt20 gray2 tac">
          如需批量导入收款人，请<el-button type="text">下载模版</el-button
          >按照模版导入
        </p>
      </div>
    </div>
    <div v-else>
      <span class="tac mtb56">
        <el-buttton type="primary">添加收款人</el-buttton>
      </span>
    </div>
    <el-dialog
      title="批量导入"
      :visible.sync="dialogVisible"
      :show-close="false"
      center
    >
      <el-form v-model="formData" label-width="auto">
        <el-form-item label="导入文件">
          <el-upload
            class="upload-demo wr100"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList"
          >
            <el-button class="wr100">上传文件</el-button>
            <!-- <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div> -->
          </el-upload>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="small">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false" size="small"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-dialog
      title="新增分组"
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
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      fileList: [],
      dialogVisible: false,
      tooltip: false,
      kg: false,
      table: [{}],
      formData: {},
    };
  },
  methods: {
    open() {
      this.kg = !this.kg;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
  },
  mounted() {},
};
</script>
<style lang="scss">
.payee-popper {
  width: 100px;
  min-width: 100px;
  background: #666;
  color: #fff;
  border: 0;
  border-radius: 0;
  .popper__arrow::after {
    border-bottom-color: #666 !important;
  }
}
.payee {
  .el-card__body {
    padding: 0 !important;
  }
}
</style>
<style lang="scss" scoped>
.payee {
  position: relative;
  .titlebutton {
    .el-button {
      width: 115px;
      padding: 7px;
      font-size: 14px;
    }
    position: absolute;
    top: 0;
    right: 0;
  }
  .el-card {
    .card-con {
      padding: 0 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      .con-item {
        img {
          width: 25px;
          height: 25px;
          margin: 0 15px;
        }
        .f16.bold.dian {
          width: 370px;
        }
        display: flex;
        padding: 10px 20px 10px 0;
        height: 110px;
        width: 442px;
        box-sizing: border-box;
        background: #f5f5f5;
        margin-bottom: 20px;
      }
    }
  }
}
</style>

