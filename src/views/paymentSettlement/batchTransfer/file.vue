<template>
  <div class="file">
    <el-form
      ref="formData"
      :model="formData"
      :rules="formRules"
      label-width="312px"
    >
      <title-bar title="付款人信息"></title-bar>
      <el-form-item label="付款账号:" prop="transOutAcct">
        <div>
          <div class="el-input__inner out-acct w320">
            <p class="lh20 mt10" v-if="formData.transOutName">
              {{ formData.transOutName }}|{{ formData.transOutAlise }}
            </p>
            <p>
              {{ formData.transOutAcct | acctFormat(formData.transOutAcct) }}
            </p>
          </div>
          <el-button type="text" class="ml10 vat" @click="accountFlag = true"
            >账户查询</el-button
          >
        </div>
        <p class="lh16 mt12 ml16" v-if="formData.transOutBalance">
          余额
          <span class="money">{{
            formData.transOutBalance | formatMoney(formData.transOutBalance)
          }}</span>
          元
        </p>
      </el-form-item>

      <title-bar title="转账信息"></title-bar>
      <el-form-item label="批量文件:">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList"
        >
          <el-button>点击上传</el-button>
          <el-button type="text" @click="visible = true">下载模版</el-button>
          <div slot="tip" class="el-upload__tip">
            请将收款人信息模版填写正确后再上传
          </div>
        </el-upload>
      </el-form-item>
      <el-form-item label="总金额:" prop="transOutAcct">
        <el-input
          v-model="formData.transOutAcct"
          placeholder="请输入"
        ></el-input>
      </el-form-item>
      <el-form-item label="总笔数:" prop="transOutAcct">
        <el-input
          v-model="formData.transOutAcct"
          placeholder="请输入"
        ></el-input>
      </el-form-item>
      <el-form-item label="转出方式:" prop="transOutAcct">
        <el-radio-group v-model="formData.resource">
          <el-radio label="立即转出"></el-radio>
          <el-radio label="预约转出"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="转出日期:" prop="time">
        <el-date-picker
          v-model="formData.time"
          type="date"
          placeholder="选择日期"
        >
        </el-date-picker>
      </el-form-item>
    </el-form>

    <el-row class="tc mt30 mb50">
      <el-button type="primary" @click="transConfirm">下一步</el-button>
    </el-row>
    <div class="wPro mt20">
      <p>温馨提示</p>
      <p>
        1.使用文件导入方式转账，请先下载批量转账模版。请勿更改批量转账模版格式；
      </p>
      <p>2.每个批量文件最多可录入500个收款账户，超出请分批上传；</p>
      <p>3.批量转账手续费参考单笔转账手续费标准累加收取；</p>

      <p>4.批量转账非实时到账，您可以通过【转账交易查询】查询处理结果；</p>
      <p>
        5.电信网络违法犯罪侵害广大金融消费者都合法权益，为保障您的资金安全，请不要向陌生人转账汇款。
      </p>
    </div>
    <MessageBox
      :visible="visible"
      title="信息错误"
      type="warning"
      @cancel="visible = false"
      @commit="visible = false"
    >
      <span>上传文件信息错误，请下载报错文件查看详情</span>
      <div class="cerror p8 tal mt10 bgbrand">
        <p>q1货款借单位信息.xlsx</p>
        <p>q1货款借单位信息.xlsx</p>
      </div>
    </MessageBox>
  </div>
</template>

<script>
import mathTools from "utils/mathTools.js";
import AccountList from "../components/AccountList"; //账户查询

export default {
  components: { AccountList },
  props: {
    formData: {
      Type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      visible: false,
      formRules: {},
      fileList: [],
      accountFlag: false, //账户查询
    };
  },
  created() {},
  methods: {
    accoutConfirm(acctObj) {
      this.formData.transOutName = acctObj.acctName;
      this.formData.transOutAlise = acctObj.acctAlise;
      this.formData.transOutAcct = acctObj.acctNo;
      this.formData.transOutBalance = acctObj.balance;
    },
    transConfirm() {
      this.$refs["formData"].validate((valid) => {
        if (valid) {
          this.$set(this.formData, "table", this.table);
          this.$emit("transConfirm");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
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
  },
  filters: {
    //账号格式化
    acctFormat(val) {
      if (val) {
        return mathTools.formatBankNo(val);
      }
    },
    //余额格式化
    formatMoney(val) {
      if (val) {
        return mathTools.addDecollator(val);
      }
    },
    getMoneyUnit(val) {
      if (val) {
        return mathTools.getMoneyUnit(val);
      }
    },
  },
};
</script>

<style lang="scss">
.file {
  .out-acct {
    min-height: 90px;
    height: auto !important;
  }
}
</style>