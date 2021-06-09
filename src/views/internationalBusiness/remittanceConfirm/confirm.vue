<template>
  <div class="confirm">
    <el-steps class="mt22 mb40" :active="activeIndex" finish-status="success" process-status='process' align-center>
      <el-step title="填写信息"></el-step>
      <el-step title="确认信息"></el-step>
      <el-step title="交易结果"></el-step>
    </el-steps>
    <title-bar title="收款人信息"></title-bar>
    <div class="divUl flex f16 lh16  cp1 ml60 mt15">
      <ul class="u1 cp3 tar">
        <li>收款人名称</li>
        <li>币种</li>
        <li>证件类型</li>
      </ul>
      <ul class="u2 ml20">
        <li>北京易诚互动网络技术有限公司</li>
        <li>美元</li>
        <li>组织机构代码</li>
      </ul>
      <ul class="u3 mr20 cp3 tar">
        <li>金额</li>
        <li>证件号码</li>
      </ul>
      <ul class="u4">
        <li>10,000.00</li>
        <li>423233 37028009 1234</li>
      </ul>
    </div>

    <div v-if="activeIndex==0">
      <div class="title mb36">
        <title-bar title="录入信息"></title-bar>
        <el-button class="w86">暂存读取</el-button>
      </div>


      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" :inline="true" class="cp1">
        <table class="table1">
          <tr>
            <td>
              <p>付款人常驻国家/地区名称及代码</p>
              <p>Resident Country/Region Name & Code</p>
            </td>
            <td>
              <el-form-item prop="payeeCountry">
                <el-input v-model="ruleForm.payeeCountry" class="payeeCountry beforeX w530 " placeholder="示例：美国/123">
                </el-input>
              </el-form-item>
              <el-button type="text" class="select">选择</el-button>
            </td>
          </tr>
          <tr>
            <td>如果本笔收款包含预收款或退款，请选择</td>
            <td>
              <el-form-item prop="remi">
                <el-radio-group v-model="ruleForm.radio1">
                  <el-radio label="0">预收款</el-radio>
                  <el-radio label="1">退款</el-radio>
                </el-radio-group>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>本笔款项是否为保税货物项下收入</td>
            <td>
              <el-form-item prop="radio">
                <el-radio-group v-model="ruleForm.radio">
                  <el-radio label="0" class="beforeX">是</el-radio>
                  <el-radio label="1">否</el-radio>
                </el-radio-group>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>外汇局批件号/备案表号/业务编号</td>
            <td>
              <el-form-item prop="payeeCountry">
                <el-input v-model="ruleForm.payeeCountry" class="payeeCountry  w578 " placeholder="请输入">
                </el-input>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>收入类型</td>
            <td>
              <el-form-item prop="radio">
                <el-radio-group v-model="ruleForm.radio">
                  <el-radio label="0">福费廷</el-radio>
                  <el-radio label="1">出口保理</el-radio>
                  <el-radio label="2">出口押汇</el-radio>
                  <el-radio label="3">出口贴现</el-radio>
                  <el-radio label="4">其他贸易融资</el-radio>
                </el-radio-group>
              </el-form-item>
            </td>
          </tr>
        </table>
        <table class="table2">
          <tr>
            <td rowspan="4" class="w189">交易编码</td>
            <td rowspan="2" class="w284">
              <el-form-item prop="payeeCountry">
                <el-input v-model="ruleForm.payeeCountry" class="payeeCountry beforeX w192 " placeholder="请输入">
                </el-input>
              </el-form-item>
              <el-button type="text" class="search">查询</el-button>
              <p class="f14 ml45">币种1：<span>美元</span></p>
            </td>
            <td class="w190">相应金额1</td>
            <td>
              <el-form-item prop="payeeCountry">
                <el-input v-model="ruleForm.payeeCountry" class="payeeCountry beforeX w240 " placeholder="请输入">
                </el-input>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td class="w190">交易附言1</td>
            <td>
              <el-form-item prop="payeeCountry">
                <el-input v-model="ruleForm.payeeCountry" class="payeeCountry beforeX w240 " placeholder="请输入">
                </el-input>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td rowspan="2">
              <el-form-item prop="payeeCountry">
                <el-input v-model="ruleForm.payeeCountry" class="payeeCountry beforeX w192 " placeholder="请输入">
                </el-input>
              </el-form-item>
              <el-button type="text" class="search">查询</el-button>
              <p class="f14 ml45">币种2：<span>美元</span></p>
            </td>
            <td class="w190">相应金额2</td>
            <td>
              <el-form-item prop="payeeCountry">
                <el-input v-model="ruleForm.payeeCountry" class="payeeCountry w240 " placeholder="请输入">
                </el-input>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td class="w190">交易附言2</td>
            <td>
              <el-form-item prop="payeeCountry">
                <el-input v-model="ruleForm.payeeCountry" class="payeeCountry w240 " placeholder="请输入">
                </el-input>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td colspan="4" class="ptb24 pl16 cerror">相应金额1与相应金额2相加要等于收款金额</td>
          </tr>
          <tr>
            <td class="w189">联系人姓名</td>
            <td>
              <el-form-item prop="payeeCountry">
                <el-input v-model="ruleForm.payeeCountry" class="payeeCountry beforeX w240 " placeholder="请输入">
                </el-input>
              </el-form-item>
            </td>
            <td class="w190">电话</td>
            <td>
              <el-form-item prop="payeeCountry">
                <el-input v-model="ruleForm.payeeCountry" class="payeeCountry beforeX w240 " placeholder="请输入">
                </el-input>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td class="w189">收款备注</td>
            <td colspan="3">
              <el-form-item prop="payeeCountry">
                <el-input v-model="ruleForm.payeeCountry" class="payeeCountry  w713 " maxlength="120" show-word-limit
                  placeholder="请输入">
                </el-input>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td class="w189">上传文件</td>
            <td class="pt30 pb20">
              <el-upload class="upload-demo w180" action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3"
                :on-exceed="handleExceed" :file-list="fileList">
                <el-button icon="el-icon-upload2">上传文件</el-button>
                <div slot="tip" class="el-upload__tip">
                  <p class="uploadP cp3">附件：JPG、png、pdf格式图片，最佳不要超过10M</p>
                </div>
              </el-upload>
            </td>
            <td colspan="2"></td>
          </tr>
        </table>
        <div class="tac mtb56">
          <el-button size="medium">返回</el-button>
          <el-button size="medium">暂存</el-button>
          <el-button size="medium" type="primary">下一步</el-button>
        </div>
      </el-form>
    </div>
    <div v-if="activeIndex==1">
      <title-bar title="录入信息"></title-bar>
      <div class="divUl2 flex f16 lh24 cp1">
        <ul class="u1 cp3 tar mr24">
          <li>付款人常驻国家(地区)名称及代码</li>
          <li>本笔收款包含预收款或退款请选择</li>
          <li>外汇局批件号/备案表号/业务编号</li>
          <li>交易编码1</li>
          <li>交易附言1</li>
          <li>币种及金额1</li>
          <li>汇款备注</li>
          <li>文件上传</li>
        </ul>
        <ul class="u2">
          <li>阿富汗/122</li>
          <li class="mt47">预付款</li>
          <li class="mt47">8888 8888 88</li>
          <li class="mt47">1999</li>
          <li>提交确认</li>
          <li>美元/100,000.00</li>
          <li>--</li>
          <li><span class="inline-block mr50">支用文件信息文件1.JPG</span></li>
        </ul>
        <ul class="u3 cp3 tar mr24">
          <li>本笔款项是否为保税货物下收入</li>
          <li>收入类型</li>
          <li>联系人姓名</li>
          <li>电话</li>
          <li>交易编码2</li>
          <li>交易附言2</li>
          <li>币种及金额2</li>
        </ul>
        <ul class="u4">
          <li>是</li>
          <li class="mt47">出口保理 出口押汇</li>
          <li>李四</li>
          <li>15677887788</li>
          <li>李四-</li>
          <li>李四</li>
          <li>李四-</li>
        </ul>
      </div>
      <div class="tac mtb56">
          <el-button size="medium">上一步</el-button>
          <el-button size="medium" type="primary">提交</el-button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: 1,
        ruleForm: {},
        rules: {
          remittancer: [{
            // validator: validatePass,
            trigger: 'blur',
            required: true,
          }],
          payeeCountry: [{
            required: true,
            trigger: 'blur'
          }],
          radio: [{
            required: true,
            trigger: 'blur'
          }],

        },
      }
    },
  }

</script>
<style lang="scss">
  .confirm {
    .title {
      position: relative;
      margin-top: 60px;

      .w86 {
        width: 86px;
        height: 30px;
        font-size: 14px;
        padding: 0px;
        position: absolute;
        right: 0px;
        top: -5px;
      }

      .right102 {
        right: 102px;
        top: -5px;
      }
    }

    .mt22 {
      margin-top: 22px;
      margin-left: 95px;

    }

    .divUl {
      margin-bottom: 60px;

      ul>li+li {
        margin-top: 24px;
      }

      .u2 {
        width: 382px;
      }
    }

    .table1 {
      * {
        box-sizing: border-box;
      }

      width: 100%;

      td {
        border: 1px solid #f0f0f0;
      }


      >tr>td:first-child {
        line-height: 24px;
        padding-right: 16px;
        width: 324px;
        text-align: right;
      }

      .w530 {
        width: 530px;
      }

      .select {
        margin: 12px 0 0 8px;

      }

      .w578 {
        width: 578px;
      }
    }

    .table2 {
      * {
        box-sizing: border-box;
      }

      width: 100%;

      td {
        border: 1px solid #f0f0f0;
      }

      margin-top: -1px;



      .w530 {
        width: 530px;
      }

      .select {
        margin: 12px 0 0 8px;

      }

      .w578 {
        width: 578px;
      }

      .w192 {
        width: 192px;
      }

      .search {
        margin-top: 12px;
        margin-left: 10px;
      }

      .w240 {
        width: 240px;
      }

      .w189 {
        width: 189px;
        text-align: right;
        padding-right: 16px;
      }

      .w284 {
        width: 284px;
      }

      .w190 {
        width: 190px;
        text-align: right;
        padding-right: 16px;
      }

      .w713 {
        width: 713px;
      }

      .upload-demo {
        position: relative;
        margin-left: 28px;

        .uploadP {
          font-size: 14px;
          line-height: 22px;
          margin-top: 10px;
          margin-bottom: 10px;
        }

        .el-upload-list {
          position: absolute;
          top: -20px;
          left: 280px;
        }
      }

      .w180 {
        width: 180px;
      }
    }


    .el-form-item {
      margin: 12px 0px 12px 28px;
    }

    .beforeX {
      &::before {
        content: '*';
        color: #d12222;
        position: absolute;
        left: -10px;
        top: 2px;
      }
    }

    .divUl2 {
      margin-left: 35px;

      >ul>li+li {
        margin-top: 23px;
      }

      .u1 {
        width: 128px;
      }

      .u2 {
        width: 310px;
      }

      .u3 {

        width: 128px;
      }
      .mt47{
          margin-top: 47px;
      }
      .mt40{
          margin-top: 40px;
      }
      .mt38{
          margin-top: 36px;
      }
    }
  }

</style>
