<template>
  <div class="assessment">
    <div v-if="step === 0">
      <div class="tc">
        <p class="f20 bold c-primary pt15">
          四川农信机构投资者风险类型评估问卷
        </p>
      </div>
      <p class="leftBar bold">重要提示</p>
      <div class="plr10 lh24">
        <p>
          1、在购买我社（行）保险、理财、基金产品【含我社（行）代销产品】前，请贵单位先根据实际情况认真填写本问卷，以便界定贵单位的风险类型，进而帮助贵单位选择合适的产品。本问卷包括19个问题，每个问题根据您的实际情况只能勾选一个选项，多选或不选均不计分值。
        </p>
        <p class="gray2">
          2、在具体产品的产品说明书中“产品适合度评估”中，需要用到本问卷的评估结果。
        </p>
        <p>
          <span class="gray2"
            >3、如果贵单位的有关情况发生重大改变或距离上次填写时间超过1年，请重新填写本问卷。</span
          >本问卷适用于四川农信所有机构。
        </p>
        <p>
          4、不准确、完整地填写问卷可能对您的风险类型评估及理财产品认购带来不利影响，本社(行)对因此产生的后果不承担任何责任。
        </p>
        <p class="gray2">
          5、本问卷为一份正本，填写完毕后由银行保管。本问卷的最终解释权归四川农信所有。贵单位若对本问卷有任何疑问，请向理财销售人员咨询。
        </p>
      </div>
      <p class="leftBar bold pt30">风险提示</p>
      <div class="plr10 lh24">
        <p>
          产品有风险，投资需谨慎。同时，还要综合考虑考虑市场风险、信用风险、流动性风险、操作风险等各类投资风险。
          您在产品投资过程中应当注意核对自己的风险识别和风险承受能力，选择与自己风险识别能力和风险承受能力相匹配的金融产品。
        </p>
      </div>
      <div class="mt50 tc">
        <el-button type="primary" @click="step = 1">开始</el-button>
      </div>
    </div>

    <div class="not" v-if="step === 1">
      <div class="tc">
        <img src="../../../../../src/images/Account.png" />
        <p class="f18 bold pt20 pb10">尚未评估</p>
        <p class="cp3 lh24">
          根据监管要求，首次机构投资风险承受能力评估请至四川农信指定营业机构线下办理。
        </p>
        <div class="mt50">
          <el-button type="primary" @click="search">指定机构查询</el-button>
        </div>
      </div>
    </div>

    <div class="check" v-if="step === 2">
      <title-bar title="风险评估"></title-bar>

      <div>
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="机构查询：">
            <el-input v-model="form.organ"></el-input>
            <el-button type="primary" @click="goQues" size="mini" class="ml30"
              >查询</el-button
            >
          </el-form-item>
        </el-form>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="机构名称" width="320">
          </el-table-column>
          <el-table-column prop="name" label="地址" width="320">
          </el-table-column>
          <el-table-column prop="province" label="电话" width="300">
          </el-table-column>
        </el-table>
      </div>
      <!-- ************温馨提示*********** -->
      <div class="wPro mtb20">
        <p>温馨提示：</p>
        <p>
          1.取得他行账户查询授权后，可通过四川农信企业网银查询签约的他行账户余额和明细。
        </p>
      </div>
    </div>
    <div v-if="step === 3">
      <Qquestion></Qquestion>
    </div>
  </div>
</template>

<script>
import question from './questionnaire.vue';
export default {
  components: {
    Qquestion: question
  },
  data() {
    return {
      step: 0,
      form: {},
      tableData: []

    }
  },
  methods: {
    search() {
      this.step = 2
    },
    goQues() {
      this.step = 3
    },
  }
}
</script>

<style>
.assessment {
}
</style>