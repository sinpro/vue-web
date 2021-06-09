<template>
  <div class="depositDetail">


    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" :inline="true" label-width="312px" class="flex mt36"
      hide-required-asterisk>
      <el-form-item label="存款类型:" prop="region">
        <el-select v-model="ruleForm.region">
          <el-option v-for="(item,index) in selectList" :key="index" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="交易日期:" prop="value1">
        <el-date-picker v-model="ruleForm.value1" type="daterange" :picker-options="pickerOptions" unlink-panels
          range-separator="" start-placeholder="开始日期" end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item class="marginL24">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="近3月"></el-radio>
          <el-radio label="近6月"></el-radio>
          <el-radio label="近1年"></el-radio>
        </el-radio-group>
      </el-form-item>

    </el-form>
    <div class="tac mt15 mb56">
      <el-button type="primary" size="mini" @click.native="search">查询</el-button>
    </div>
    <!-- ********************************************全部******************************** -->
    <div v-if="step==0">
      <el-table :data="tableData" border stripe>
        <el-table-column prop="address" label="账号" width="210">
        </el-table-column>
        <el-table-column prop="zip" label="户名" width="220" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="city" label="本金(元)" width="183">
        </el-table-column>
        <el-table-column prop="date" label="开户日期" width="165">
        </el-table-column>
        <el-table-column prop="province" label="存款类型" width="160">
        </el-table-column>
        <el-table-column label="操作" width="230" fixed="right">
          <template slot-scope="scope">
            <el-button @click.native="goDetail(scope.row)" type="text" size="small">详情</el-button>
            <el-button @click.native="goWithdrawNotice(scope.row)" type="text" size="small" v-if="scope.row.status==1">
              撤销通知
            </el-button>
            <el-button @click.native="goBuildNotice(scope.row)" type="text" size="small">建立通知</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="pageClass">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
    </div>
    <!-- ********************************************定期存款******************************** -->
    <div v-if="step==1">
      <el-table :data="tableData" border stripe>
        <el-table-column prop="address" label="定期账号" width="210">
        </el-table-column>
        <el-table-column prop="zip" label="户名" width="220" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="city" label="定期存款本金(元)" width="183">
        </el-table-column>
        <el-table-column prop="date" label="起息日" width="165">
        </el-table-column>
        <el-table-column prop="date" label="到期日" width="165">
        </el-table-column>
        <el-table-column prop="province" label="年利率" width="160">
        </el-table-column>
        <el-table-column label="操作" width="90" fixed="right">
          <template slot-scope="scope">
            <el-button @click.native="goDetail(scope.row)" type="text" size="small">详情</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="pageClass">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
    </div>
    <!-- ********************************************通知存款******************************** -->
    <div v-if="step==2">
      <el-table :data="tableData" border stripe>
        <el-table-column prop="address" label="通知存款账号" width="210">
        </el-table-column>
        <el-table-column prop="zip" label="户名" width="220" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="city" label="通知存款本金(元)" width="183">
        </el-table-column>
        <el-table-column prop="date" label="起息日" width="165">
        </el-table-column>
        <el-table-column prop="province" label="年利率" width="160">
        </el-table-column>
        <el-table-column label="操作" width="230" fixed="right">
          <template slot-scope="scope">
            <el-button @click.native="goDetail(scope.row)" type="text" size="small">详情</el-button>
            <el-button @click.native="goWithdrawNotice(scope.row)" type="text" size="small" v-if="scope.row.status==1">
              撤销通知
            </el-button>
            <el-button @click.native="goBuildNotice(scope.row)" type="text" size="small">建立通知</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="pageClass">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
    </div>
    <!-- ********************************************大额存单******************************** -->
    <div v-if="step==3">
      <el-table :data="tableData" border stripe>
        <el-table-column prop="address" label="大额存单账号" width="210">
        </el-table-column>
        <el-table-column prop="zip" label="产品名称" width="220" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="city" label="大额存单本金(元)" width="183">
        </el-table-column>
        <el-table-column prop="date" label="起息日" width="165">
        </el-table-column>
        <el-table-column prop="date" label="到期日" width="165">
        </el-table-column>
        <el-table-column prop="province" label="年利率" width="160">
        </el-table-column>
        <el-table-column label="操作" width="90" fixed="right">
          <template slot-scope="scope">
            <el-button @click.native="goDetail(scope.row)" type="text" size="small">详情</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- ************分页器*********** -->
      <div class="pageClass">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
    </div>
    <!-- ********************************************协定存款******************************** -->
    <div v-if="step==4">
      <el-table :data="tableData" border stripe>
        <el-table-column prop="address" label="协定存款账号" width="210">
        </el-table-column>
        <el-table-column prop="zip" label="户名" width="220" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="city" label="协定存款余额(元)" width="183">
        </el-table-column>
        <el-table-column prop="date" label="起息日" width="165">
        </el-table-column>
        <el-table-column prop="province" label="年利率" width="160">
        </el-table-column>
        <el-table-column label="操作" width="90" fixed="right">
          <template slot-scope="scope">
            <el-button @click.native="goDetail(scope.row)" type="text" size="small">详情</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="pageClass">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
    </div>
    <!-- ********************************************协议存款******************************** -->
    <div v-if="step==5">
      <el-table :data="tableData" border stripe>
        <el-table-column prop="address" label="协议存款账号" width="210">
        </el-table-column>
        <el-table-column prop="zip" label="户名" width="220" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="city" label="协议存款本金(元)" width="183">
        </el-table-column>
        <el-table-column prop="date" label="起息日" width="165">
        </el-table-column>
        <el-table-column prop="province" label="年利率" width="160">
        </el-table-column>
        <el-table-column label="操作" width="90" fixed="right">
          <template slot-scope="scope">
            <el-button @click.native="goDetail(scope.row)" type="text" size="small">详情</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="pageClass">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
    </div>


    <!-- *****详情*****详情*******详情*******详情******详情*******详情*******详情****** -->
    <el-dialog title="定期存款详情" :visible.sync="dialogVisible1" size="medium" text :show-close="false">
      <div>
        <title-bar title="存款信息"></title-bar>
        <div class="ulClass flex f16 lh16">
          <ul class="cp3 tar">
            <li>户名</li>
            <li>定期账号</li>
            <li>定期存款本金</li>
            <li>存期</li>
            <li>预计到期利息</li>
            <li>年利率</li>
            <li>币种</li>
          </ul>
          <ul class="cp1">
            <li>北京易诚互动网络技术有限公司</li>
            <li>8888 9999 8888 9999</li>
            <li>100,000.00元</li>
            <li>三个月</li>
            <li>200.00元</li>
            <li>2.22%</li>
            <li>人民币</li>
          </ul>
          <ul class="cp3 tar">
            <li>冻结类型</li>
            <li>冻结金额</li>
            <li>起息日</li>
            <li>到期日</li>
            <li>到期转存方式</li>
            <li>存款证实书</li>
          </ul>
          <ul class="cp1">
            <li>部分冻结</li>
            <li>10,000.00元</li>
            <li>2020-10-10</li>
            <li>2022-10-10</li>
            <li>不自动转存</li>
            <li>已打印</li>
          </ul>
        </div>
        <title-bar v-if="detailTable!=''" title="交易明细"></title-bar>
        <div v-if="detailTable!=''">
          <el-table :data="detailTable" border stripe>
            <el-table-column prop="date" label="交易时间" width="440">
            </el-table-column>
            <el-table-column prop="money" label="交易金额(元)" width="360">
            </el-table-column>
            <el-table-column prop="type" label="交易类型" width="115">
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="tac mtb24">
        <el-button @click="dialogVisible1 = false" type="primary">关闭</el-button>
      </div>
    </el-dialog>

    <!-- *****详情*****详情*******详情*******详情******详情*******详情*******详情****** -->
    <el-dialog title="通知存款详情" :visible.sync="dialogVisible2" size="medium" text :show-close="false">
      <div>
        <title-bar title="存款信息"></title-bar>
        <div class="ulClass flex f16 lh16">
          <ul class="cp3 tar">
            <li>户名</li>
            <li>定期账号</li>
            <li>定期存款本金</li>
            <li>存期</li>
            <li>预计到期利息</li>
            <li>年利率</li>
            <li>币种</li>
          </ul>
          <ul class="cp1">
            <li>北京易诚互动网络技术有限公司</li>
            <li>8888 9999 8888 9999</li>
            <li>100,000.00元</li>
            <li>三个月</li>
            <li>200.00元</li>
            <li>2.22%</li>
            <li>人民币</li>
          </ul>
          <ul class="cp3 tar">
            <li>冻结类型</li>
            <li>冻结金额</li>
            <li>起息日</li>
            <li>到期日</li>
            <li>到期转存方式</li>
            <li>存款证实书</li>
          </ul>
          <ul class="cp1">
            <li>部分冻结</li>
            <li>10,000.00元</li>
            <li>2020-10-10</li>
            <li>2022-10-10</li>
            <li>不自动转存</li>
            <li>已打印</li>
          </ul>
        </div>
        <title-bar title="通知列表"></title-bar>
        <div>
          <el-table :data="detailTable" border stripe>
            <el-table-column prop="date" label="发起日期" width="440">
            </el-table-column>
            <el-table-column prop="money" label="通知支取日期" width="300">
            </el-table-column>
            <el-table-column prop="type" label="通知支取金额(元)" width="175">
            </el-table-column>
          </el-table>
        </div>
        <title-bar v-if="detailTable!=''" title="交易明细"></title-bar>
        <div v-if="detailTable!=''">
          <el-table :data="detailTable" border stripe>
            <el-table-column prop="date" label="交易时间" width="440">
            </el-table-column>
            <el-table-column prop="money" label="交易金额(元)" width="360">
            </el-table-column>
            <el-table-column prop="type" label="交易类型" width="115">
            </el-table-column>
          </el-table>
        </div>

      </div>
      <div class="tac mtb24">
        <el-button @click="dialogVisible2 = false" type="primary">关闭</el-button>
      </div>
    </el-dialog>
    <!-- *****详情*****详情*******详情*******详情******详情*******详情*******详情****** -->
    <el-dialog title="大额存单详情" :visible.sync="dialogVisible3" size="medium" text :show-close="false">
      <div>
        <title-bar title="存单信息"></title-bar>
        <div class="ulClass flex f16 lh16">
          <ul class="cp3 tar">
            <li>户名</li>
            <li>定期账号</li>
            <li>定期存款本金</li>
            <li>存期</li>
            <li>预计到期利息</li>
            <li>年利率</li>
            <li>币种</li>
          </ul>
          <ul class="cp1">
            <li>北京易诚互动网络技术有限公司</li>
            <li>8888 9999 8888 9999</li>
            <li>100,000.00元</li>
            <li>三个月</li>
            <li>200.00元</li>
            <li>2.22%</li>
            <li>人民币</li>
          </ul>
          <ul class="cp3 tar">
            <li>冻结类型</li>
            <li>冻结金额</li>
            <li>起息日</li>
            <li>到期日</li>
            <li>到期转存方式</li>
            <li>存款证实书</li>
          </ul>
          <ul class="cp1">
            <li>部分冻结</li>
            <li>10,000.00元</li>
            <li>2020-10-10</li>
            <li>2022-10-10</li>
            <li>不自动转存</li>
            <li>已打印</li>
          </ul>
        </div>
        <title-bar v-if="detailTable!=''" title="交易明细"></title-bar>
        <div v-if="detailTable!=''">
          <el-table :data="detailTable" border stripe>
            <el-table-column prop="date" label="交易时间" width="440">
            </el-table-column>
            <el-table-column prop="money" label="交易金额(元)" width="360">
            </el-table-column>
            <el-table-column prop="type" label="交易类型" width="115">
            </el-table-column>
          </el-table>
        </div>

      </div>
      <div class="tac mtb24">
        <el-button @click="dialogVisible3 = false" type="primary">关闭</el-button>
      </div>
    </el-dialog>
    <!-- *****详情*****详情*******详情*******详情******详情*******详情*******详情****** -->
    <el-dialog title="协定存款详情" :visible.sync="dialogVisible4" size="medium" text :show-close="false">
      <div>
        <title-bar title="存款信息"></title-bar>
        <div class="ulClass flex f16 lh16">
          <ul class="cp3 tar">
            <li>户名</li>
            <li>定期账号</li>
            <li>定期存款本金</li>
            <li>存期</li>
            <li>预计到期利息</li>
            <li>年利率</li>
            <li>币种</li>
          </ul>
          <ul class="cp1">
            <li>北京易诚互动网络技术有限公司</li>
            <li>8888 9999 8888 9999</li>
            <li>100,000.00元</li>
            <li>三个月</li>
            <li>200.00元</li>
            <li>2.22%</li>
            <li>人民币</li>
          </ul>
          <ul class="cp3 tar">
            <li>冻结类型</li>
            <li>冻结金额</li>
            <li>起息日</li>
            <li>到期日</li>
            <li>到期转存方式</li>
            <li>存款证实书</li>
          </ul>
          <ul class="cp1">
            <li>部分冻结</li>
            <li>10,000.00元</li>
            <li>2020-10-10</li>
            <li>2022-10-10</li>
            <li>不自动转存</li>
            <li>已打印</li>
          </ul>
        </div>
        <title-bar v-if="detailTable!=''" title="交易明细"></title-bar>
        <div v-if="detailTable!=''">
          <el-table :data="detailTable" border stripe>
            <el-table-column prop="date" label="交易时间" width="440">
            </el-table-column>
            <el-table-column prop="money" label="交易金额(元)" width="360">
            </el-table-column>
            <el-table-column prop="type" label="交易类型" width="115">
            </el-table-column>
          </el-table>
        </div>

      </div>
      <div class="tac mtb24">
        <el-button @click="dialogVisible4 = false" type="primary">关闭</el-button>
      </div>
    </el-dialog>
    <!-- *****详情*****详情*******详情*******详情******详情*******详情*******详情****** -->
    <el-dialog title="协议存款详情" :visible.sync="dialogVisible5" size="medium" text :show-close="false">
      <div>
        <title-bar title="存款信息"></title-bar>
        <div class="ulClass flex f16 lh16">
          <ul class="cp3 tar">
            <li>户名</li>
            <li>定期账号</li>
            <li>定期存款本金</li>
            <li>存期</li>
            <li>预计到期利息</li>
            <li>年利率</li>
            <li>币种</li>
          </ul>
          <ul class="cp1">
            <li>北京易诚互动网络技术有限公司</li>
            <li>8888 9999 8888 9999</li>
            <li>100,000.00元</li>
            <li>三个月</li>
            <li>200.00元</li>
            <li>2.22%</li>
            <li>人民币</li>
          </ul>
          <ul class="cp3 tar">
            <li>冻结类型</li>
            <li>冻结金额</li>
            <li>起息日</li>
            <li>到期日</li>
            <li>到期转存方式</li>
            <li>存款证实书</li>
          </ul>
          <ul class="cp1">
            <li>部分冻结</li>
            <li>10,000.00元</li>
            <li>2020-10-10</li>
            <li>2022-10-10</li>
            <li>不自动转存</li>
            <li>已打印</li>
          </ul>
        </div>
        <title-bar v-if="detailTable!=''" title="交易明细"></title-bar>
        <div v-if="detailTable!=''">
          <el-table :data="detailTable" border stripe>
            <el-table-column prop="date" label="交易时间" width="440">
            </el-table-column>
            <el-table-column prop="money" label="交易金额(元)" width="360">
            </el-table-column>
            <el-table-column prop="type" label="交易类型" width="115">
            </el-table-column>
          </el-table>
        </div>

      </div>
      <div class="tac mtb24">
        <el-button @click="dialogVisible5 = false" type="primary">关闭</el-button>
      </div>
    </el-dialog>






    <el-dialog title="支取" :visible.sync="centerDialogVisible" width="640px" center :show-close="false"
      class="diaDivClass1">
      <div>
        <el-table :data="tableData2" border stripe>
          <el-table-column prop="date" label="发起日期" width="150">
          </el-table-column>
          <el-table-column prop="date2" label="通知支取日期" width="150">
          </el-table-column>
          <el-table-column prop="city" label="通知支取金额(元)" width="180">
          </el-table-column>
          <el-table-column label="操作" width="90" fixed="right">
            <template slot-scope="scope">
              <el-button @click.native="goOutDraw('带入金额',scope.row)" type="text" size="small">支取</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="diaClass1 tac mb24">
        <el-button @click="centerDialogVisible = false" size="medium">关闭</el-button>
        <el-button type="primary" @click.native="goOutDraw('不带入金额')" size="medium">未通知支取</el-button>
      </div>
    </el-dialog>

    <el-dialog title="撤销通知" :visible.sync="centerDialogVisible2" width="640px" center :show-close="false"
      class="diaDivClass1">
      <div>
        <el-table :data="tableData2" border stripe>
          <el-table-column prop="date" label="发起日期" width="150">
          </el-table-column>
          <el-table-column prop="date2" label="通知支取日期" width="150">
          </el-table-column>
          <el-table-column prop="city" label="通知支取金额(元)" width="180">
          </el-table-column>
          <el-table-column label="操作" width="90" fixed="right">
            <template slot-scope="scope">
              <el-button @click.native="goWithdraw(scope.row)" type="text" size="small">撤销</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="diaClass1 tac mb24">
        <el-button @click="centerDialogVisible2 = false" size="medium">关闭</el-button>
      </div>
    </el-dialog>

    <el-dialog title="建立通知" :visible.sync="centerDialogVisible3" width="470px" center :show-close="false"
      class="diaDivClass1">
      <div>
        <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="auto" class="dia3Class">
          <el-form-item label="通知支取金额:" prop="NoticeMoney">
            <el-input v-model="ruleForm2.NoticeMoney" @input="changeMoney" placeholder="请输入" maxlength="22">
            </el-input>
          </el-form-item>
          <el-form-item label="通知支取日期:" prop="NoticeDate">
            <el-date-picker v-model="ruleForm2.NoticeDate" type="date" :clearable="false">
            </el-date-picker>
          </el-form-item>

        </el-form>
      </div>
      <div class="diaClass1 tac mb24">
        <el-button @click="centerDialogVisible3 = false" size="medium">取消</el-button>
        <el-button @click="goSubmit()" size="medium" type="primary">提交</el-button>
      </div>
    </el-dialog>




  </div>
</template>

<script>
  import mathTools from 'utils/mathTools.js'

  export default {

    data() {
      // *************去除三分符、el-input自定义校验**************
      var validatePass = (rule, value, callback) => {
        if (Number(this.ruleForm.moneyArea1.replace(/,/g, "")) > Number(this.ruleForm.moneyArea2.replace(/,/g, ""))) {
          callback(new Error('“起始金额”不能大于“终止金额”'));
        } else {
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (Number(this.ruleForm2.NoticeMoney.replace(/,/g, "")) < 50000) {
          callback(new Error('不能小于5万'));
        } else {
          callback();
        }
      };

      return {
        step: 0,
        centerDialogVisible: false,
        centerDialogVisible2: false,
        centerDialogVisible3: false,
        dialogVisible1: false,
        dialogVisible2: false,
        dialogVisible3: false,
        dialogVisible4: false,
        dialogVisible5: false,
        detailTable: [{
          date: '2020-10-29',
          money: '23213213213',
          type: '定期存款',
        }],
        selectList: [{
          label: '全部',
          value: '0',
        }, {
          label: '定期存款',
          value: '1',
        }, {
          label: '通知存款',
          value: '2',
        }, {
          label: '大额存单',
          value: '3',
        }, {
          label: '协定存款',
          value: '4',
        }, {
          label: '协议存款',
          value: '5',
        }, ],
        rules: {
          moneyArea1: [{
            validator: validatePass,
            trigger: 'blur',
            required: true,
          }],
        },
        rules2: {
          NoticeMoney: [{
            validator: validatePass2,
            trigger: 'blur',
            required: true,

          }],
          NoticeDate: [{
            required: true,
            message: "请选择日期",
            trigger: "blur"
          }],
        },
        ruleForm: {
          name: '北京易诚互动网络技术股份有限公司',
          region: '0',
          resource: '近1月',
          value1: '',
          moneyArea1: '',
          moneyArea2: '',
          type: '行外转账-收入',
          type2: '全部',
          account: '',
        },
        ruleForm2: {
          NoticeMoney: '',
          NoticeDate: '',
        },
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 94608000000 || time.getTime() > Date.now();
          }
        },
        tableData: [{
          date1: '1',
          date: '2020-10-29',
          name: '行外转账-支出',
          province: '2.11%',
          city: '99,999,999.00',
          address: '999090 **** 0901',
          zip: '北京易诚互动网络技术股份有限公司',
          status: 0,
        }, {
          date1: '2',
          date: '2020-10-29',
          name: '行外转账-支出',
          province: '2.11%',
          city: '99,999,999.00',
          address: '999090 **** 0901',
          zip: '北京易诚互动网络技术股份有限公司',
          status: 1,
        }, {
          date1: '3',
          date: '2020-10-29',
          name: '行外转账-支出',
          province: '2.11%',
          city: '99,999,999.00',
          address: '999090 **** 0901',
          zip: '北京易诚互动网络技术股份有限公司',
          status: 0,
        }, {
          date1: '4',
          date: '2020-10-29',
          name: '行外转账-支出',
          province: '2.11%',
          city: '99,999,999.00',
          address: '999090 **** 0901',
          zip: '北京易诚互动网络技术股份有限公司',
          status: 1,
        }, ],
        tableData2: [{
          date: '2020-10-29',
          date2: '2020-10-29',
          city: '99,999,999.00',
        }, {
          date: '2020-10-29',
          date2: '2020-10-29',
          city: '99,999,999.00',
        }, {
          date: '2020-10-29',
          date2: '2020-10-29',
          city: '99,999,999.00',
        }, {
          date: '2020-10-29',
          date2: '2020-10-29',
          city: '99,999,999.00',
        }, ],
        currentPage4: 4,
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
      };
    },
    methods: {
      search() {
        switch (this.ruleForm.region) {
          case '0':
            this.step = 0;
            break;
          case '1':
            this.step = 1;
            break;
          case '2':
            this.step = 2;
            break;
          case '3':
            this.step = 3;
            break;
          case '4':
            this.step = 4;
            break;
          case '5':
            this.step = 5;
            break;
        }
      },
      goSubmit() {
        this.$refs["ruleForm2"].validate((valid) => {
          if (valid) {
            this.centerDialogVisible3 = false;
          } else {
            return false;
          }
        })
      },
      goBuildNotice(row) {
        this.centerDialogVisible3 = true;
      },
      goWithdrawNotice(row) {
        this.centerDialogVisible2 = true;
      },
      goWithdraw(row) {
        this.centerDialogVisible2 = false;
      },
      goDetail(row) {
          row.date1=='1'?this.dialogVisible1 = true:row.date1=='2'?this.dialogVisible2 = true:row.date1=='3'?this.dialogVisible3 = true:row.date1=='4'?this.dialogVisible4 = true:this.dialogVisible5 = true
      },
      goOutDraw(isMoney, row) {
        this.$router.push('/investmentFinancing/DepositBusiness/noticeDeposit/noticeDepositOut/noticeDepositOutDraw')
      },
      handleSizeChange() {},
      handleCurrentChange() {},
      goDraw(row) {
        this.$confirm('提前支取将按活期计息', '确定要支取吗？', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true,
          showClose: false,
        }).then(() => {
          this.$router.push("/investmentFinancing/DepositBusiness/fixedDeposit/fdDeposit/fdDepositDraw")
        })
      },
      changeMoney() {
        this.ruleForm.moneyArea1 = mathTools.moneyCheck(this.ruleForm.moneyArea1)
        this.ruleForm.moneyArea2 = mathTools.moneyCheck(this.ruleForm.moneyArea2)
      },
      handleClick() {
        if (this.activeName == "noticeDepositIn") {
          this.$router.push({
            path: "/investmentFinancing/DepositBusiness/noticeDeposit/noticeDepositIn",
          });
        }
      },

      /* 获取过去时间，并传值给现在时间 */
      getPassYearFormatDate() {
        var nowDate = new Date()
        var date = new Date(nowDate)
        date.setDate(date.getDate() - 365)
        var seperator1 = '-'
        var year = date.getFullYear()
        var month = date.getMonth() + 1
        var strDate = date.getDate()
        if (month >= 1 && month <= 9) {
          month = '0' + month
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = '0' + strDate
        }
        var formatDate = year + seperator1 + month
        this.getNowFormatDate(formatDate)
      },
      /* 获取现在时间，并接受过去时间的值 */
      getNowFormatDate(formatDate) {
        var date = new Date()
        var seperator1 = '-'
        var year = date.getFullYear()
        var month = date.getMonth() + 1
        var strDate = date.getDate()
        if (month >= 1 && month <= 9) {
          month = '0' + month
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = '0' + strDate
        }
        var nowData = year + seperator1 + month
        this.dafalttimeData = {
          'formatDate': formatDate,
          'nowData': nowData
        } // 默认赋值一年时间
      },
    },
    mounted() {
      this.getPassYearFormatDate()
    },
  };

</script>
<style lang="scss">
  .depositDetail {
    .moneyArea {
      width: 143px;
    }

    .el-button.el-button--text.el-button--small {
      margin-left: 0;
    }

    .dia3Class {

      .el-date-editor,
      .el-input {
        width: 280px;
      }
    }

    .ulClass {
      margin-left: 62px;
      margin-top: 35px;
      margin-bottom: 48px;
    
      >ul>li+li {
        margin-top: 24px;
      }

      >ul+ul {
        margin-left: 22px;
      }

      >ul:nth-child(2) {
        width: 358px;
      }
    }
  }

</style>
