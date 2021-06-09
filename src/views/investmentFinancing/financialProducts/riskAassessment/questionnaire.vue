<template>
  <div class="not">
    <div v-if="step === 0">
      <div class="tc">
        <p class="f20 bold c-primary pt15">
          四川农信机构投资者风险类型评估问卷
        </p>
      </div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <template v-for="(item, i) in quesList">
          <el-form-item :label="item.ques" :key="i" :ref="'ruleForm' + i">
            <el-radio-group v-model="item.val" @change="handleChoose(i)">
              <el-radio
                :label="select.id"
                v-for="select in item.select"
                :key="select.id"
                >{{ select.label }}</el-radio
              >
            </el-radio-group>
          </el-form-item>
        </template>
      </el-form>
      <div class="tc">
        <el-button type="primary" @click="checkSub">提交</el-button>
      </div>
    </div>

    <div v-if="step === 1">
      <div class="tc">
        <img src="../../../../../src/images/Account.png" />
        <p>测评结果</p>
        <p class="f34 bold mt20">保守型</p>
        <div class="flexc mt20">
          <p class="gray2 wr55">
            已于2021年4月5日通过四川农信的系统完成机构投资风险承受能力的评估。
            适合的产品类型为
            <span class="ctips">低风险</span>
            及以下产品!
          </p>
        </div>
      </div>
      <div class="mt50 tc">
        <el-button @click="step = 0">重新评估</el-button>
        <el-button type="primary">去理财</el-button>
      </div>
      <div class="wPro mtb20">
        <p>温馨提示：</p>
        <p>
          风险承受能力评估结果有效期为一年，请在结果失效前更新机构评估信息。如需要对当前的风险承受能力进行重新评估，请填写《四川农信机构投资者风
          险类型评估问卷》。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {

  },
  components: {},
  data() {
    return {
      ruleForm: {},
      step: 0,
      rules: {},
      quesList: [
        {
          ques: '（基本情况）贵单位性质：',
          val: '',

          select: [
            {
              id: 1,
              label: 'A.外资企业',
            },
            {
              id: 2,
              label: 'B.民营、个体企业',

            },
            {
              id: 3,
              label: 'C.上市股份公司',

            },
            {
              id: 4,
              label: 'D.国有企业 ',

            },
          ]
        },
        {
          ques: '（基本情况）贵单位性质：',
          val: '',

          select: [
            {
              id: 1,
              label: 'A.外资企业',
            },
            {
              id: 2,
              label: 'B.民营、个体企业',

            },
            {
              id: 3,
              label: 'C.上市股份公司',

            },
            {
              id: 4,
              label: 'D.国有企业 ',

            },
          ]
        },
        {
          ques: '（基本情况）贵单位性质：',
          val: '',

          select: [
            {
              id: 1,
              label: 'A.外资企业',
            },
            {
              id: 2,
              label: 'B.民营、个体企业',

            },
            {
              id: 3,
              label: 'C.上市股份公司',

            },
            {
              id: 4,
              label: 'D.国有企业 ',

            },
          ]
        },
      ]
    }
  },
  computed: {},
  watch: {},
  methods: {
    handleChoose(t) {
      //   console.log('tttt', t)
      console.log('quesList', this.quesList[t].val)
    },
    checkSub() {
      this.quesList.forEach((item, index) => {
        if (item.val === '') {
          this.$nextTick(() => {
            this.$refs[`ruleForm${index}`][0].$el.style.color = '#eb3d3d'
          })
          this.step = 0

        }
        else if (item.val !== '') {
          this.$refs[`ruleForm${index}`][0].$el.style.color = '#1b1b1b'
          this.step = 1
        }
      });
    }
  },
  created() {

  },
  mounted() {
  }
}
</script>
<style lang='scss'>
.not {
  .el-radio {
    display: block;
    padding: 10px 0px 10px 40px;
    color: #666666;
  }
  .el-form-item__label,
  label {
    width: 100%;
    text-align: left;
  }
  .el-radio-group {
    width: 100%;
    margin-top: 10px;
  }
  .el-radio:nth-child(odd) {
    background-color: #fafafa;
  }
  .is-checked .el-radio__label {
    color: #059c5d;
  }
  .el-form-item__label {
    color: inherit;
  }
  img {
    width: 125px;
    height: 110px;
    padding-top: 60px;
    padding-bottom: 55px;
  }
}
</style>
