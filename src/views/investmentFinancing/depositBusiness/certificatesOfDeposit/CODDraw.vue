<template>
  <div class="CODDraw">

    <el-tabs v-model="activeName" @tab-click="handleClick" type="card">
      <el-tab-pane label="大额存单存入" name="CODDeposit"></el-tab-pane>
      <el-tab-pane label="大额存单支取" name="CODDraw"></el-tab-pane>
    </el-tabs>

    <el-form :model="formData" class="mt10" label-width="312px"  ref="ruleForm" :rules="rules">
      <el-form-item label="金额区间:" hide-required-asterisk prop="moneyArea1">
        <el-input v-model="formData.moneyArea1" class="moneyArea" @input="changeMoney" placeholder="请输入" maxlength="22">
        </el-input>
        <span class="bolang cp3">～</span>
        <el-input v-model="formData.moneyArea2" class="moneyArea" @input="changeMoney" placeholder="请输入" maxlength="22">
        </el-input>
      </el-form-item>
      <el-form-item label="交易日期:" prop="value1">
        <el-date-picker v-model="formData.value1" type="daterange" :picker-options="pickerOptions" unlink-panels
          range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
        </el-date-picker>
        <el-radio-group v-model="formData.resource">
          <el-radio label="近7天"></el-radio>
          <el-radio label="近1月"></el-radio>
          <el-radio label="近3月"></el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <div class="tac mt36 mb56">
        <el-button size="mini" type="primary" @click.native="search">查询</el-button>
    </div>


    <title-bar class="mt56 mb36" title="大额存单账号列表"></title-bar>

    <div class="list">
      <div v-for="(item,index) in list" :key="index" class="item">
        <div class="top flex bgbrand">
          <p class="f18 lh18 ml24 mt18">{{item.aa}}</p>
          <p class="btn ml20 mt10">{{item.bb}}</p>
        </div>
        <div class="bottom flex">
          <ul class="ul1">
            <li class="redFont cerror fontbold">{{item.cc}} <span class="f16">%</span> </li>
            <li class="f16 lh16 cp2">年化收益率</li>
          </ul>
          <ul class="ul2">
            <li class="fontbold f22">{{item.dd}}</li>
            <li class="f16 lh16 cp2">大额存单本金(元)</li>
          </ul>
          <ul class="ul3">
            <li class="f22">{{item.ee}}</li>
            <li class="f16 lh16 cp2">存单期限</li>
          </ul>
          <ul class="ul4">
            <li>
              <el-button size="mini" @click.native="goDraw(item)">支取</el-button>
            </li>
          </ul>
          <div class="flex">
          <p class="f16 lh16 cp3 mb24">起息日：{{item.ff}}</p>
          <p class="f16 lh16 cp3 mb24 ml36">到期日：{{item.ff}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="wPro mtb20">
      <p>温馨提示：</p>
      <p>1. 文字描述文字描述文字描述文字描述文字描述文字描述文字描述。
      </p>
      <p>2. 文字描述文字描述文字描述文字描述文字描述。</p>
    </div>

  </div>
</template>
<script>
  import mathTools from 'utils/mathTools.js'

  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (Number(this.formData.moneyArea1.replace(/,/g, "")) > Number(this.formData.moneyArea2.replace(/,/g, ""))) {
          callback(new Error('“起始金额”不能大于“终止金额”'));
        } else {
          this.$refs.ruleForm.validateField('checkPass');
          callback();
        }
      };
      return {

        activeName: 'CODDraw',
        isActive: 0,
        formData: {
          keyword: '',
          moneyArea1: '',
          moneyArea2: '',
          value1: '',
          resource: '',
        },
        rules: {
          moneyArea1: [{
            validator: validatePass,
            trigger: 'blur'
          }],
        },
        list: [{
          aa: '大额存单2月第一期产品',
          bb: '定期付息',
          cc: '5.88',
          dd: '100,000.00',
          ee: '3个月',
          ff: '2021-05-01',
        }, {
          aa: '大额存单2月第一期产品',
          bb: '定期付息',
          cc: '5.88',
          dd: '100,000.00',
          ee: '3个月',
          ff: '2021-05-01',
        }, {
          aa: '大额存单2月第一期产品',
          bb: '定期付息',
          cc: '5.88',
          dd: '100,000.00',
          ee: '3个月',
          ff: '2021-05-01',
        }, ],
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 94608000000 || time.getTime() > Date.now();
          }
        },
      }
    },
    methods: {
      handleClick() {
        this.activeName == 'CODDraw' ? '' : this.$router.push(
          '/investmentFinancing/DepositBusiness/certificatesOfDeposit/CODDeposit')

      },
      goBuy() {
        this.$router.push('/investmentFinancing/DepositBusiness/certificatesOfDeposit/CODDeposit/CODDepositIn')
      },
      changeMoney() {
        this.formData.moneyArea1 = mathTools.moneyCheck(this.formData.moneyArea1)
        this.formData.moneyArea2 = mathTools.moneyCheck(this.formData.moneyArea2)
      },
      search(){
          this.$refs["ruleForm"].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      goDraw(){
          this.$router.push('/investmentFinancing/DepositBusiness/certificatesOfDeposit/CODDraw/CODDrawOut')
      },
    }
  }

</script>
<style lang="scss">
  .CODDraw {

    .list {
      box-sizing: border-box;

      .item {
        border-radius: 2px;
        margin-bottom: 20px;
        box-shadow: 0px 2px 9px 0px #00000014;

        .top {
          width: 944px;
          height: 50px;
          border-top-left-radius: 2px;
          border-top-right-radius: 2px;

          .btn {
            box-sizing: border-box;

            width: 80px;
            height: 28px;
            border-radius: 2px;
            border: solid 1px #ff8315;
            color: #ff8315;
            font-size: 14px;
            line-height: 14px;
            padding-left: 12px;
            padding-top: 7px;
          }
        }

        .bottom {
          padding-top: 31px;
          padding-left: 24px;

          .redFont {
            font-size: 28px;
          }

          .ul1 {
            width: 228px;
            margin-bottom: 32px;
          }

          .ul2 {
            width: 276px;
          }

          .ul3 {
            width: 292px;
          }

          .el-button--mini {
            width: 100px;
            padding: 11px 18px;
          }

          ul>li+li {
            margin-top: 15px;
          }
        }
      }
    }

    .moneyArea {
      width: 143px;
    }


  }

</style>
