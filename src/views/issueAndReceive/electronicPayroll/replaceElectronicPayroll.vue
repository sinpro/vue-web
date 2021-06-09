<template>
  <div class="onTheDial">
    <steps
      :stepsList="stepsList"
      :activeIndex="activeIndex"
      class="mb25"
    ></steps>
    <div class="infoFill" v-if="steps == 'infoFill'">
      <el-form
        ref="formData"
        label-width="312px"
        :rules="rules"
        :model="formData"
      >
        <el-form-item label="付款账户:" prop="transOutAcct">
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
          <div class="gray2 ml18 f14">
            余额<span class="money">123132123123元</span>
          </div>
        </el-form-item>
        <el-form-item label="代发资金用途:" prop="money">
          <el-cascader
            v-model="formData.value"
            :options="optionsJL"
            @change="handleChange"
          ></el-cascader>
          <div class="gray2 ml18 f14">代发资金用途将展示给收款人</div>
        </el-form-item>
        <el-form-item label="其他用途:" prop="useFor">
          <el-input
            v-model="formData.money"
            @input.native="moneyInput"
          ></el-input>
        </el-form-item>
        <el-form-item label="代发文件:" prop="useFor">
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
            <el-button icon="el-icon-upload2">上传文件</el-button>
            <el-button type="text">下载模版</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item label="总金额:" prop="useFor">
          <el-input
            v-model="formData.money"
            @input.native="moneyInput"
          ></el-input>
        </el-form-item>
        <el-form-item label="总笔数:" prop="useFor">
          <el-input
            v-model="formData.mo"
            @input="formData.mo = formData.mo.replace(/[^\d]/g, '')"
          ></el-input>
          <div class="gray2 ml18 f14">代发笔数超过500笔，将日终跑批处理。</div>
        </el-form-item>
        <el-form-item label="隐藏明细:" prop="useFor">
          <el-radio-group v-model="formData.radio">
            <el-radio :label="3">是</el-radio>
            <el-radio :label="6">否</el-radio>
          </el-radio-group>
          <div class="ml18 f14" v-if="formData.radio == 3">
            隐藏后其他用户无法查看代发明细
          </div>
        </el-form-item>
        <el-form-item label="预约发放:" prop="useFor">
          <el-radio-group v-model="formData.radio">
            <el-radio :label="3">是</el-radio>
            <el-radio :label="6">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="发放日期:" prop="useFor">
          <el-date-picker
            v-model="formData.value1"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
      </el-form>
      <div class="tac mtb56">
        <el-button @click="" type="primary">下一步</el-button>
      </div>
      <div class="wPro">
        <p>温馨提示</p>
        <p>1.总金额、总笔数需与文件保持一致，否则不能提交；</p>
        <p>2.上传文件的大小不能超过5M；</p>
        <p>3.收款账号仅支持四川农信的个人或单位账号；</p>
        <p>4.如勾选“隐藏明细”选项，除提交人外，其他用户均无法看到代发明细。</p>
        <p>5.如选择“预约发放”，系统将在设置的预约日期自动发放；</p>
        <p>
          6.如选择“预约发放”，需在设置的预约日期前一天完成审批，否则交易失败；
        </p>
        <p>
          7.代发文件不超过500笔，将实时处理；代发文件超过500笔，日终跑批处理，具体入账情况您可以通过“代发交易查询”功能查询。
        </p>
      </div>
    </div>
    <div class="infoConfirm" v-if="steps == 'infoConfirm'">
      <title-bar title="信息确认"></title-bar>
      <div class="cen-form flex alc wrap">
        <div class="item">
          <span class="label cp2">付款户名</span>
          <span class="value">最多八个最多八个</span>
        </div>
        <div class="item">
          <span class="label cp2">代发资金用途</span>
          <span class="value">最多十个最多十个最多</span>
        </div>
        <div class="item">
          <span class="label cp2">付款账号</span>
          <span class="value">最多十个最多十个最多</span>
        </div>
        <div class="item">
          <span class="label cp2">代发文件</span>
          <span class="value"
            >最多十个最多十个最多
            <el-button type="text">下载文件</el-button>
          </span>
        </div>
        <div class="item">
          <span class="label cp2">总笔数</span>
          <span class="value">最多十个最多十个最多</span>
        </div>
        <div class="item">
          <span class="label cp2">隐藏明细</span>
          <span class="value">最多十个最多十个最多</span>
        </div>
        <div class="item">
          <span class="label cp2">总金额</span>
          <span class="value">最多十个最多十个最多</span>
        </div>
        <div class="item">
          <span class="label cp2">预约发放</span>
          <span class="value">最多十个最多十个最多</span>
        </div>
        <div class="item">
          <span class="label cp2">大写金额</span>
          <span class="value">最多十个最多十个最多</span>
        </div>
        <div class="item">
          <span class="label cp2">发放日期</span>
          <span class="value">最多十个最多十个最多</span>
        </div>
      </div>
      <el-row class="tc mtb56">
        <el-button @click="confirmBack" size="medium">上一步</el-button>
        <el-button type="primary" @click="transSubmit" size="medium"
          >提交</el-button
        >
      </el-row>
    </div>
    <div class="success" v-if="steps == 'success'">
      <span>上划金额： </span>
      <span class="moneybold f20">10000000元</span>
      <span class="gray2">(大写：壹贰叁肆)</span>
      <auditProcess :list="list"></auditProcess>
    </div>

    <stepErrer
      class="mt40"
      v-if="steps == 'errer'"
      desc="提交结果页用于反馈一系列操作任务都处理结果，本文字区域可以展示简单的补充说明。"
    >
    </stepErrer>
    <account-list
      v-model="accountFlag"
      @accoutConfirm="accoutConfirm"
    ></account-list>
  </div>
</template>
<script>
import stepErrer from "src/components/stepErrer";
import mathTools from "utils/mathTools.js";
import auditProcess from "src/components/auditProcess/index.vue";
import AccountList from "../components/accountList"; //账户查询

export default {
  components: {
    stepErrer,
    auditProcess,
    AccountList,
  },
  data() {
    return {
      accountFlag: false,
      activeName: "fdDraw",
      formData: {},
      fileList: [],
      mounyBig: "",
      optionsJL: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致",
                },
                {
                  value: "fankui",
                  label: "反馈",
                },
                {
                  value: "xiaolv",
                  label: "效率",
                },
                {
                  value: "kekong",
                  label: "可控",
                },
              ],
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航",
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航",
                },
              ],
            },
          ],
        },
        {
          value: "zujian",
          label: "组件",
          children: [
            {
              value: "basic",
              label: "Basic",
              children: [
                {
                  value: "layout",
                  label: "Layout 布局",
                },
                {
                  value: "color",
                  label: "Color 色彩",
                },
                {
                  value: "typography",
                  label: "Typography 字体",
                },
                {
                  value: "icon",
                  label: "Icon 图标",
                },
                {
                  value: "button",
                  label: "Button 按钮",
                },
              ],
            },
            {
              value: "form",
              label: "Form",
              children: [
                {
                  value: "radio",
                  label: "Radio 单选框",
                },
                {
                  value: "checkbox",
                  label: "Checkbox 多选框",
                },
                {
                  value: "input",
                  label: "Input 输入框",
                },
                {
                  value: "input-number",
                  label: "InputNumber 计数器",
                },
                {
                  value: "select",
                  label: "Select 选择器",
                },
                {
                  value: "cascader",
                  label: "Cascader 级联选择器",
                },
                {
                  value: "switch",
                  label: "Switch 开关",
                },
                {
                  value: "slider",
                  label: "Slider 滑块",
                },
                {
                  value: "time-picker",
                  label: "TimePicker 时间选择器",
                },
                {
                  value: "date-picker",
                  label: "DatePicker 日期选择器",
                },
                {
                  value: "datetime-picker",
                  label: "DateTimePicker 日期时间选择器",
                },
                {
                  value: "upload",
                  label: "Upload 上传",
                },
                {
                  value: "rate",
                  label: "Rate 评分",
                },
                {
                  value: "form",
                  label: "Form 表单",
                },
              ],
            },
            {
              value: "data",
              label: "Data",
              children: [
                {
                  value: "table",
                  label: "Table 表格",
                },
                {
                  value: "tag",
                  label: "Tag 标签",
                },
                {
                  value: "progress",
                  label: "Progress 进度条",
                },
                {
                  value: "tree",
                  label: "Tree 树形控件",
                },
                {
                  value: "pagination",
                  label: "Pagination 分页",
                },
                {
                  value: "badge",
                  label: "Badge 标记",
                },
              ],
            },
            {
              value: "notice",
              label: "Notice",
              children: [
                {
                  value: "alert",
                  label: "Alert 警告",
                },
                {
                  value: "loading",
                  label: "Loading 加载",
                },
                {
                  value: "message",
                  label: "Message 消息提示",
                },
                {
                  value: "message-box",
                  label: "MessageBox 弹框",
                },
                {
                  value: "notification",
                  label: "Notification 通知",
                },
              ],
            },
            {
              value: "navigation",
              label: "Navigation",
              children: [
                {
                  value: "menu",
                  label: "NavMenu 导航菜单",
                },
                {
                  value: "tabs",
                  label: "Tabs 标签页",
                },
                {
                  value: "breadcrumb",
                  label: "Breadcrumb 面包屑",
                },
                {
                  value: "dropdown",
                  label: "Dropdown 下拉菜单",
                },
                {
                  value: "steps",
                  label: "Steps 步骤条",
                },
              ],
            },
            {
              value: "others",
              label: "Others",
              children: [
                {
                  value: "dialog",
                  label: "Dialog 对话框",
                },
                {
                  value: "tooltip",
                  label: "Tooltip 文字提示",
                },
                {
                  value: "popover",
                  label: "Popover 弹出框",
                },
                {
                  value: "card",
                  label: "Card 卡片",
                },
                {
                  value: "carousel",
                  label: "Carousel 走马灯",
                },
                {
                  value: "collapse",
                  label: "Collapse 折叠面板",
                },
              ],
            },
          ],
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components",
            },
            {
              value: "sketch",
              label: "Sketch Templates",
            },
            {
              value: "jiaohu",
              label: "组件交互文档",
            },
          ],
        },
      ],
      list: [
        {
          type: "finish",
          name: "王思聪",
          time: "2020-02-02 12:00:00",
        },
        {
          type: "tips",
          name: "王思聪",
          time: "2020-02-02 12:00:00",
        },
      ],
      stepsList: [
        {
          title: "填写信息",
          description: "",
        },
        {
          title: "确认信息",
          description: "",
        },
        {
          title: "提交结果",
          description: "",
          status: "",
        },
      ],
      steps: "infoConfirm",
      rules: {
        bankName: [
          { required: true, message: "请选择银行名称", trigger: "change" },
        ],
        region: [{ required: true, message: "请选择地区", trigger: "change" }],
      },
    };
  },
  computed: {
    activeIndex() {
      return this.steps == "infoFill" ? 0 : this.steps == "infoConfirm" ? 1 : 2;
    },
  },
  methods: {
    accoutConfirm(acctObj) {
      this.formData.transOutName = acctObj.acctName;
      this.formData.transOutAlise = acctObj.acctAlise;
      this.formData.transOutAcct = acctObj.acctNo;
      this.formData.transOutBalance = acctObj.balance;
    },
    moneyInput(e) {
      let value = mathTools.formattingMoney(e.target.value);
      e.target.value = mathTools.addDecollator(value);
      this.mounyBig = mathTools.formatChinese(e.target.value);
    },
    handleChange() {},
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
    formatChinese(val) {
      if (val) {
        return mathTools.formatChinese(val);
      }
    },
  },
};
</script>
<style lang="scss">
.onTheDial {
  .out-acct {
    min-height: 90px;
    height: auto !important;
  }
  .infoConfirm {
    .cen-form {
      align-items: flex-start;
      margin-top: 34px;
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
}
</style>