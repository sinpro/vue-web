<template>
  <div class="foreignExchangeRemittanceApp">
    <el-steps class="mt22" :active="activeIndex" finish-status="success" process-status='process' align-center>
      <el-step title="填写信息"></el-step>
      <el-step title="确认信息"></el-step>
      <el-step title="交易结果"></el-step>
    </el-steps>

    <!-- **************************收款人信息************************** -->
    <div v-if="activeIndex==0">
      <div class="title">
        <title-bar title="收款人信息"></title-bar>
        <el-button class="w86">暂存读取</el-button>
        <el-button class="w86 right102">调用模板</el-button>
      </div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" :inline="true" class="cp1">

        <table class="table1">
          <tr>
            <td>汇款类型</td>
            <td colspan="2">
              <el-form-item prop="remittanceType">
                <el-radio-group v-model="ruleForm.radio">
                  <el-radio label="0">四川农信</el-radio>
                  <el-radio label="1">非四川农信（他行）</el-radio>
                </el-radio-group>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td class="lh24">
              <p>收款人账号</p>
              <p>Beneficiary's A/C No./Credit Card No.</p>
            </td>
            <td colspan="2">
              <el-form-item prop="payeeAccount">
                <el-input v-model="ruleForm.payeeAccount" @input="limit10()" maxlength="50"
                  class="payeeAccount beforeX w578" placeholder="请输入">
                </el-input>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td rowspan="2" class="lh24">
              <p>收款人名称及地址</p>
              <p>Beneficiary's Name & Address </p>
            </td>

            <td class="tar pr16 w231 lh24">
              <p>收款人名称</p>
              <p>Bene's Name</p>
            </td>
            <td>
              <el-form-item prop="payeeName">
                <el-input v-model="ruleForm.payeeName" maxlength="100" class="payeeName beforeX w349" placeholder="请输入">
                </el-input>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td class="w231 lh24">
              <p>收款人地址</p>
              <p>Bene's Address</p>
            </td>
            <td>
              <el-form-item prop="payeeAddress">
                <el-input v-model="ruleForm.payeeAddress" maxlength="100" class="payeeAddress beforeX w349"
                  placeholder="请输入">
                </el-input>
              </el-form-item>
            </td>
          </tr>



          <tr v-if="ruleForm.radio==1">
            <td rowspan="2" class="lh24">
              <p>收款人开户银行名称及地址</p>
              <p>Beneficiary's Bank Name & Address</p>
            </td>

            <td class="tar pr16 w231 lh24">
              <p>收款行名称</p>
            </td>
            <td>
              <el-form-item prop="payeeName">
                <el-input v-model="ruleForm.payeeName" maxlength="100" class="payeeName beforeX w349" placeholder="请输入">
                </el-input>
              </el-form-item>
            </td>
          </tr>
          <tr v-if="ruleForm.radio==1">
            <td class="w231 lh24">
              <p>收款行地址</p>
            </td>
            <td>
              <el-form-item prop="payeeAddress">
                <el-input v-model="ruleForm.payeeAddress" maxlength="100" class="payeeAddress beforeX w349"
                  placeholder="请输入">
                </el-input>
              </el-form-item>
            </td>
          </tr>




          <tr>
            <td class="lh24">
              <p>收款人常驻国家/地区名称及代码</p>
              <p>Resident Country/Region Name & Code</p>
            </td>
            <td colspan="2">
              <el-form-item prop="payeeCountry">
                <el-input v-model="ruleForm.payeeCountry" class="payeeCountry beforeX w530 mr10" placeholder="美国/123">
                </el-input>
              </el-form-item>
              <el-button type="text" class="mt10">选择</el-button>
            </td>
          </tr>




          <tr v-if="ruleForm.radio==1">
            <td>
              收款人开户银行在其代理行账号
            </td>
            <td colspan="2">
              <el-form-item prop="payeeRemark">
                <el-input v-model="ruleForm.payeeRemark" maxlength="120" class="payeeRemark w578" placeholder="请输入">
                </el-input>
              </el-form-item>
            </td>
          </tr>


          <tr v-if="ruleForm.radio==1">
            <td rowspan="2" class="lh24">
              <p>收款银行之代理行名称及地址</p>
              <p>Correspondent of Beneficiary's Bank</p>
              <p>Name & Address</p>
            </td>

            <td class="tar pr16 w231 lh24">
              <p>名称 Name</p>
            </td>
            <td>
              <el-form-item prop="payeeName">
                <el-input v-model="ruleForm.payeeName" maxlength="100" class="payeeName w349" placeholder="请输入">
                </el-input>
              </el-form-item>
            </td>
          </tr>
          <tr v-if="ruleForm.radio==1">
            <td class="w231 lh24">
              <p>地址 Address</p>
            </td>
            <td>
              <el-form-item prop="payeeAddress">
                <el-input v-model="ruleForm.payeeAddress" maxlength="100" class="payeeAddress w349" placeholder="请输入">
                </el-input>
              </el-form-item>
            </td>
          </tr>



          <tr>
            <td>
              备注
            </td>
            <td colspan="2">
              <el-form-item prop="payeeRemark">
                <el-input v-model="ruleForm.payeeRemark" maxlength="120" class="payeeRemark w578" placeholder="请输入">
                </el-input>
              </el-form-item>
            </td>
          </tr>
        </table>
        <!-- **************************汇款信息************************** -->
        <title-bar title="汇款信息" class="mt46"></title-bar>
        <table class="table2">
          <tr>
            <td rowspan="2" class="lh24 tar pr16 w190">
              <p>汇款币种及金额</p>
              <p>Currency & Interbank</p>
              <p>Settlement Amount</p>
            </td>
            <td class="w285">
              <el-form-item prop="currency">
                <el-select v-model="ruleForm.currency" class="currency beforeX">
                  <el-option v-for="(item,index) in currencyList" :key="index" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </td>
            <td class="pl15">
              <span>参考牌价：</span>
              <span>--</span>
              <span>
                <el-button type="text">查看牌价</el-button>
              </span>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <el-form-item prop="payeeRemark">
                <el-input v-model="ruleForm.payeeRemark" maxlength="120" class="payeeRemark beforeX w712"
                  placeholder="请输入">
                </el-input>
              </el-form-item>
            </td>
          </tr>
        </table>
        <table class="table3 tar">
          <tr>
            <td rowspan="3" class="w50 ptb28 plr16">
              <div class="writingmode"><span class="spanX">*</span>其中（请任意选择一项填写）</div>
            </td>
            <td class="lh24 w141 pr18">
              <p>现汇金额</p>
              <p>Amount in FX</p>
            </td>
            <td class="w284">
              <el-form-item>
                <el-input v-model="ruleForm.amountMoney" maxlength="120" class="amountMoney w240" placeholder="请输入">
                </el-input>
              </el-form-item>
            </td>
            <td class="pr16 lh24 w190">
              <p>账号</p>
              <p>A/C No./Credit </p>
              <p>Card No.</p>
            </td>
            <td>
              <el-form-item prop="amountMoneyAcc">
                <el-select v-model="ruleForm.amountMoneyAcc" class="wselect240 ">
                  <el-option v-for="(item,index) in currencyList" :key="index" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
                <p class="tac">账户余额不足，<el-button type="text">前往购汇</el-button>
                </p>
                <p class="tal ml20">余额：<span class="money">120,000.00元</span></p>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td class="lh24 w141 pr18">
              <p>购汇金额</p>
              <p>Amount of</p>
              <p>Purchase</p>
            </td>
            <td class="w284">
              <el-form-item>
                <el-input v-model="ruleForm.purchaseMoney" maxlength="120" class="purchaseMoney w240" placeholder="请输入">
                </el-input>
              </el-form-item>
            </td>
            <td class="pr16 lh24 w190">
              <p>账号</p>
              <p>A/C No./Credit </p>
              <p>Card No.</p>
            </td>
            <td>
              <el-form-item prop="purchaseMoneyAcc">
                <el-select v-model="ruleForm.purchaseMoneyAcc" class="wselect240 ">
                  <el-option v-for="(item,index) in currencyList" :key="index" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td class="lh24 w141  pr18">
              <p>其他金额</p>
              <p>Other</p>
            </td>
            <td class="w284">
              <el-form-item prop="payeeRemark">
                <el-input v-model="ruleForm.otherMoney" maxlength="120" class="otherMoney w240" placeholder="请输入">
                </el-input>
              </el-form-item>
            </td>
            <td class="pr16 lh24 w190">
              <p>账号</p>
              <p>A/C No./Credit </p>
              <p>Card No.</p>
            </td>
            <td>
              <el-form-item prop="otherMoneyAcc">
                <el-select v-model="ruleForm.otherMoneyAcc" class="wselect240 ">
                  <el-option v-for="(item,index) in currencyList" :key="index" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td colspan="2" class="lh24 pr18 ptb12">
              <p>国内外费用承担</p>
              <p>All Bank's Charges If</p>
              <p>Any Are To Be</p>
              <p>Borne By</p>
            </td>
            <td>
              <el-form-item prop="charges">
                <el-select v-model="ruleForm.charges" class="wselect240 beforeX">
                  <el-option v-for="(item,index) in currencyList" :key="index" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </td>
            <td></td>
            <td></td>
          </tr>
        </table>
        <!-- **************************其他信息************************** -->
        <title-bar title="其他信息" class="mt46"></title-bar>
        <table class="table4 tar">
          <tr>
            <td class="w189 pr16 lh24">
              <p><span class="spanX">*</span>付款类型</p>
            </td>
            <td colspan="3" class="tal pt10 pl28 pb10">
              <el-form-item prop="payType">
                <el-radio-group v-model="ruleForm.payType">
                  <el-radio label="预付款Advance Payment "></el-radio>
                  <el-radio label=" 货到付款Payment Against Delivery "></el-radio>
                  <el-radio label=" 退款Refund"></el-radio>
                  <el-radio label=" 其他Others" class="mt24"></el-radio>
                </el-radio-group>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td rowspan="4" class="pr16">
              <p>交易编码</p>
              <p>BOP Transac.Code</p>
            </td>
            <td rowspan="2" class="w284">
              <el-form-item prop="dealCode">
                <el-input v-model="ruleForm.dealCode1" maxlength="120" class="otherMoney beforeX w192"
                  placeholder="请输入">
                </el-input>
                <el-button type="text" class="ml10">查询</el-button>
              </el-form-item>
            </td>
            <td class="pr16 w190">相应金额1</td>
            <td>
              <el-form-item prop="belongMoney">
                <el-input v-model="ruleForm.belongMoney1" maxlength="120" class="belongMoney beforeX w240"
                  placeholder="请输入">
                </el-input>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td class="pr16 w190">交易附言1</td>
            <td>
              <el-form-item prop="dealText">
                <el-input v-model="ruleForm.dealText1" maxlength="120" class="dealText beforeX w240" placeholder="请输入">
                </el-input>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td rowspan="2" class="w284">
              <el-form-item>
                <el-input v-model="ruleForm.dealCode2" maxlength="120" class="otherMoney w192" placeholder="请输入">
                </el-input>
                <el-button type="text" class="ml10">查询</el-button>
              </el-form-item>
            </td>
            <td class="pr16 w190">相应金额2</td>
            <td>
              <el-form-item>
                <el-input v-model="ruleForm.belongMoney2" maxlength="120" class="belongMoney w240" placeholder="请输入">
                </el-input>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td class="pr16 w190">交易附言2</td>
            <td>
              <el-form-item>
                <el-input v-model="ruleForm.dealText2" maxlength="120" class="dealText w240" placeholder="请输入">
                </el-input>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td class=" pr16 ptb12 lh24">
              <p><span class="spanX">*</span>本笔款项是否为</p>
              <p>保税货物下付款</p>
            </td>
            <td colspan="3" class="tal pl28">
              <el-form-item>

                <el-radio-group v-model="ruleForm.isGoods">
                  <el-radio label="是"></el-radio>
                  <el-radio label="否"></el-radio>
                </el-radio-group>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td class="pr16">合同号</td>
            <td>
              <el-form-item>
                <el-input v-model="ruleForm.dealText2" maxlength="120" class="dealText w240" placeholder="请输入">
                </el-input>
              </el-form-item>
            </td>
            <td class="pr16">发票号</td>
            <td>
              <el-form-item>
                <el-input v-model="ruleForm.dealText2" maxlength="120" class="dealText w240" placeholder="请输入">
                </el-input>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td class="lh24 pr16">
              <p>汇款附言</p>
              <p>Remittance</p>
              <p>Information</p>
            </td>
            <td colspan="3">
              <el-form-item prop="remitInfor">
                <el-input v-model="ruleForm.payeeRemark" maxlength="120" class="remitInfor w712" show-word-limit
                  placeholder="请输入">
                </el-input>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td class="pr16">汇款备注</td>
            <td colspan="3">
              <el-form-item prop="remitText">
                <el-input v-model="ruleForm.payeeRemark" maxlength="120" class="remitText w712" placeholder="请输入">
                </el-input>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td class="pr16 lh24">
              <p>外汇局批件号/备</p>
              <p>案表号/业务编号</p>
            </td>
            <td>
              <el-form-item>
                <el-input v-model="ruleForm.dealText2" maxlength="120" class="dealText w240" placeholder="请输入">
                </el-input>
              </el-form-item>
            </td>
            <td class="pr16 lh24">付汇性质</td>
            <td>
              <el-form-item prop="payBelongs">
                <el-select v-model="ruleForm.charges" class="payBelongs beforeX">
                  <el-option v-for="(item,index) in currencyList" :key="index" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td class="pr16">上传文件</td>
            <td class="tal pl28 ptb12">
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
          <tr>
            <td class="pr16">是否保存为模板</td>
            <td class="tal pl28 ptb24">
              <el-radio-group v-model="ruleForm.model">
                <el-radio label="是"></el-radio>
                <el-radio label="否"></el-radio>
              </el-radio-group>
            </td>

            <td colspan="2" v-if="ruleForm.model!='是'"></td>
            <td class="pr16" v-if="ruleForm.model=='是'">模板名称</td>
            <td v-if="ruleForm.model=='是'">
              <el-form-item prop="dealText">
                <el-input v-model="ruleForm.dealText1" maxlength="120" class="dealText beforeX w240" placeholder="请输入">
                </el-input>
              </el-form-item>
            </td>
          </tr>
        </table>
      </el-form>
      <p class="bottomP mt25">请认真填写申请书的每一栏位，如有问题，请阅读<el-button type="text">《申请须知》</el-button> 。</p>
      <div class="tac mtb56">
        <el-button size="medium">暂存</el-button>
        <el-button type="primary" size="medium">下一步</el-button>
      </div>
    </div>

    <div v-if="activeIndex==1">
      <title-bar title="收款人信息" class="mt56 mb35"></title-bar>
      <div v-if="ruleForm.radio==0" class="flex f16 lh24 divUl1">
        <ul class="u1 tar cp3 mr24">
          <li>汇款类型</li>
          <li>收款人常驻国家(地区)名称及代码</li>
          <li>备注</li>
        </ul>
        <ul class="u2 cp1">
          <li>四川农信</li>
          <li>中国/156</li>
          <li class="mt37">--</li>
        </ul>
        <ul class="u3 tar cp3 mr24">
          <li>收款人账号</li>
          <li>收款人名称及地址</li>
        </ul>
        <ul class="u4 cp1">
          <li>6708 3333 4442 2213</li>
          <li>李四地址地址地址地址地址地址</li>
        </ul>
      </div>
      <div v-if="ruleForm.radio==1" class="flex f16 lh24 divUl4">
        <ul class="u1 tar cp3 mr24">
          <li>汇款类型</li>
          <li>收款人名称及地址</li>
          <li>收款人常驻国家(地区)名称及代码</li>
          <li>收款银行之代理行名称及地址</li>
        </ul>
        <ul class="u2 cp1">
          <li>四川农信</li>
          <li>中国/156</li>
          <li class="mt37">中国/156</li>
          <li class="mt37">--</li>
        </ul>
        <ul class="u3 tar cp3 mr24">
          <li>收款人账号</li>
          <li>收款人开户银行名称及地址</li>
          <li>收款人开户银行在其代理行账号</li>
          <li>备注</li>
        </ul>
        <ul class="u4 cp1">
          <li>6708 3333 4442 2213</li>
          <li>李四地址地址地址地址地址地址</li>
          <li class="mt37">李四地址地址地址地址地址地址</li>
          <li class="mt37">李四地址地址地址地址地址地址</li>
        </ul>
      </div>
      <title-bar title="汇款信息" class="mt56 mb35"></title-bar>
      <div class="flex f16 lh24 divUl2">
        <ul class="u1 tar cp3 mr24">
          <li>汇款人中文名称</li>
          <li>汇款人中文地址</li>
          <li>汇款币种</li>
          <li>现汇金额</li>
          <li>购汇金额</li>
          <li>其他金额</li>
          <li>国内外费用承担方式</li>
        </ul>
        <ul class="u2 cp1">
          <li>内容内容内容内容内容内容</li>
          <li>地址地址地址地址地址</li>
          <li>美元</li>
          <li>100,000.00元</li>
          <li>--</li>
          <li>--</li>
          <li>共同</li>
        </ul>
        <ul class="u3 tar cp3 mr24">
          <li>汇款人英文名称</li>
          <li>汇款人英文地址</li>
          <li>汇款金额</li>
          <li>现汇账号</li>
          <li>购汇账号</li>
          <li>其他账号</li>
          <li>扣费账号</li>
        </ul>
        <ul class="u4 cp1">
          <li>名称名名称名称名称名称名称</li>
          <li>JCCCJKXCJKXBCXJC</li>
          <li>JCCCJKXCJKXBCXJC</li>
          <li>JCCCJKXCJKXBCXJC</li>
          <li>JCCCJKXCJKXBCXJC</li>
          <li>JCCCJKXCJKXBCXJC</li>
          <li>JCCCJKXCJKXBCXJC</li>
        </ul>
      </div>
      <title-bar title="其他信息" class="mt56 mb35"></title-bar>

      <div class="flex f16 lh24 divUl3">
        <ul class="u1 tar cp3 mr24">
          <li>付款类型</li>
          <li>交易编码1</li>
          <li>交易附言1</li>
          <li>交易编码2</li>
          <li>交易附言2</li>
          <li>合同号</li>
          <li>汇款附言</li>
          <li>付汇性质</li>
          <li>文件上传</li>
        </ul>
        <ul class="u2 cp1">
          <li>货到付款</li>
          <li>相应金额1</li>
          <li>美元</li>
          <li>100,000.00元</li>
          <li>--</li>
          <li>--</li>
          <li>--</li>
          <li>--</li>
          <li>共同</li>
        </ul>
        <ul class="u3 tar cp3 mr24">
          <li>本笔款项是否为保税货物下付款</li>
          <li>相应金额1</li>
          <li>相应金额2</li>
          <li>发票号</li>
          <li>汇款备注</li>
          <li>外汇局批号件/备案表号/业务编号</li>
        </ul>
        <ul class="u4 cp1">
          <li>名称名名称名称名称名称</li>
          <li class="mt47">JCCCJKXCJKXBCXJC</li>
          <li>JCCCJKXCJKXBCXJC</li>
          <li>JCCCJKXCJKXBCXJC</li>
          <li>6708 3333 4442 2213</li>
          <li>JCCCJKXCJKXBCXJC</li>
        </ul>
      </div>

      <div class="mtb56 tac">
        <el-button size="medium">上一步</el-button>
        <el-button size="medium" type="primary">提交</el-button>
      </div>
    </div>
    <div v-if="activeIndex==2" class="mt46">
      <auditProcess :list="list"></auditProcess>
      <div class="mt56 tac mb140">
        <el-button size="medium">完成</el-button>
        <el-button size="medium" type="primary">查看交易详情</el-button>
      </div>
    </div>


  </div>
</template>
<script>
  import auditProcess from "src/components/auditProcess/index.vue";

  export default {
    components: {
      auditProcess,
    },

    data() {
      return {
        activeIndex: 0,
        ruleForm: {
          radio: '0',
          payeeAccount: '',
          payeeName: '',
          payeeAddress: '',
          payeeCountry: '',
          payeeRemark: '',
          currency: '',
          amountMoney: '',
          purchaseMoney: '',
          otherMoney: '',
          amountMoneyAcc: '',
          purchaseMoneyAcc: '',
          otherMoneyAcc: '',
          charges: '',
          payType: '',
          dealCode1: '',
          belongMoney1: '',
          dealText1: '',
          dealCode2: '',
          belongMoney2: '',
          dealText2: '',


          model: '',
        },
        rules: {
          moneyArea1: [{
            // validator: validatePass,
            trigger: 'blur',
            required: true,
          }],
          payeeAccount: [{
            message: 'true',
            required: true,
            trigger: 'blur',
          }],
        },
        list: [{
            type: "finish",
            name: "王思聪",
            time: "2020-02-02 12:00:00",
          },
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
          {
            type: "success",
            name: "王思聪",
            time: "2020-02-02 12:00:00",
          },
          {
            type: "info",
            name: "王思聪",
            time: "2020-02-02 12:00:00",
          },
          {
            type: "errer",
            name: "王思聪",
            time: "2020-02-02 12:00:00",
            desc: "错误信息",
          },
        ],
        currencyList: [{
          label: '美元',
          value: '1',
        }, {
          label: '日元',
          value: '2',
        }, {
          label: '英镑',
          value: '3',
        }],
      }
    },
    methods: {
      limit10() {
        this.ruleForm.payeeAccount = this.ruleForm.payeeAccount.replace(/[^\d]/g, "")
      },
    },
  }

</script>
<style lang="scss">
  .foreignExchangeRemittanceApp {


    .mt22 {
      margin-top: 22px;
      margin-left: 95px;
    }

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

    .table1 {
      * {
        box-sizing: border-box;
      }

      width: 100%;

      td {
        border: 1px solid #f0f0f0;
      }

      >tr>td:first-child {
        width: 324px;
        padding-right: 16px;
        text-align: right;
      }

      .w231 {
        width: 231px !important;
      }

      .el-form-item {
        margin: 12px 0 12px 28px;
      }

      .w578 {
        width: 578px;
      }

      .w349 {
        width: 349px;
      }

      .w530 {
        width: 530px;
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

      .currency {

        .el-input {
          width: 240px;
        }
      }

      .w190 {
        width: 190px;
      }

      .w285 {
        width: 285px;
      }

      .el-form-item {
        margin: 12px 0 12px 28px;
      }

      .w712 {
        width: 712px;
      }
    }

    .table3 {

      * {
        box-sizing: border-box;
      }

      width: 100%;

      td {
        border: 1px solid #f0f0f0;
      }

      margin-top: -1px;



      .writingmode {
        writing-mode: vertical-lr;
      }

      .w50 {
        width: 50px;
      }

      .w141 {
        width: 139px;
      }

      .w240 {
        width: 240px;
      }

      .wselect240 {

        .el-input {
          width: 240px;
        }
      }

      .w284 {
        width: 284px;
      }

      .w190 {
        width: 190px;
      }

      .el-form-item {
        margin: 0px 16px 0 0;
      }
    }

    .table4 {
      * {
        box-sizing: border-box;
      }

      width: 100%;

      td {
        border: 1px solid #f0f0f0;
      }

      .w189 {
        width: 189px;
      }

      .w192 {
        width: 192px;
      }

      .w284 {
        width: 284px;
      }

      .w190 {
        width: 190px;
      }

      .w240 {
        width: 240px;
      }

      .w712 {
        width: 712px;
      }

      .payBelongs {
        .el-input {
          width: 240px;
        }
      }

      .upload-demo {
        position: relative;

        .uploadP {
          font-size: 14px;
          line-height: 22px;
          margin-top: 10px;
          margin-bottom: 10px;
        }

        .el-upload-list {
          position: absolute;
          top: -10px;
          left: 280px;
        }
      }

      .w180 {
        width: 180px;
      }

      .el-form-item {
        margin: 12px 16px 12px 0;
      }
    }

    .spanX {
      color: #d12222;
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

    .mt46 {
      margin-top: 46px;
    }

    .bottomP {
      span {

        color: #4367d6;
      }
    }

    .divUl1 {

      margin-left: 43px;

      .u1 {
        width: 123px;
      }

      .u2 {
        width: 300px;

      }

      .u4 {
        width: 300px;
      }

      >ul>li+li {
        margin-top: 20px;
      }

      .mt37 {
        margin-top: 37px;
      }
    }

    .divUl2 {

      margin-left: 43px;

      .u1 {
        width: 123px;
      }

      .u2 {
        width: 317px;

      }

      .u4 {
        width: 290px;
      }

      >ul>li+li {
        margin-top: 20px;
      }

      .mt37 {
        margin-top: 37px;
      }
    }

    .divUl3 {

      margin-left: 43px;

      .u1 {
        width: 123px;
      }

      .u2 {
        width: 294px;

      }

      .u3 {
        width: 136px;
      }

      .u4 {
        width: 290px;
      }

      >ul>li+li {
        margin-top: 20px;
      }

      .mt37 {
        margin-top: 37px;
      }
      .mt47 {
        margin-top: 47px;
      }
    }
    .divUl4 {

      margin-left: 43px;

      .u1 {
        width: 123px;
      }

      .u2 {
        width: 294px;

      }

      .u3 {
        width: 136px;
      }

      .u4 {
        width: 290px;
      }

      >ul>li+li {
        margin-top: 20px;
      }

      .mt37 {
        margin-top: 37px;
      }
      .mt47 {
        margin-top: 47px;
      }
    }

    .mb140 {
      margin-bottom: 140px;
    }
  }

</style>
