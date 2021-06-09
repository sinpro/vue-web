<template>
  <div class="CODDeposit">

    <el-tabs v-model="activeName" @tab-click="handleClick" type="card">
      <el-tab-pane label="大额存单存入" name="CODDeposit"></el-tab-pane>
      <el-tab-pane label="大额存单支取" name="CODDraw"></el-tab-pane>
    </el-tabs>

    <el-form :model="formData" class="mt10">
      <el-form-item label="关键字:">
        <el-input v-model="formData.keyword" placeholder="请输入关键字进行搜索"></el-input>
        <el-button size="mini" type="primary" class="ml30">查询</el-button>
      </el-form-item>
    </el-form>
    <div class="ulClass">
      <span class="">存期:</span>
      <ul>
        <li v-for="(value,index) in ulList" :key="index" @click="getLi($event,index)"
          :class="isActive==index?'borderClass':''">{{value.label}}
          <img :class="isActive==index?'imgrClass':'imgrClassNo'"
            src="../../../../images/investmentFinancing/greentriangle.png">
          <i :class="isActive==index?'iconClass':'iconClassNo'" class="el-icon-check"></i>
        </li>
      </ul>
    </div>


    <title-bar class="mt56 mb36" title="大额存单产品列表"></title-bar>

    <div class="list">
      <div v-for="(item,index) in list" :key="index" class="item">
        <div class="top flex bgbrand">
          <p class="f18 lh18 ml24 mt18">{{item.aa}}</p>
          <p class="btn ml20 mt10">{{item.bb}}</p>
        </div>
        <div class="bottom flex">
          <ul class="ul1">
            <li class="redFont cerror fontbold">{{item.cc}} <span class="f16">%</span> </li>
            <li class="f16 lh16 cp2">年利率</li>
          </ul>
          <ul class="ul2">
            <li class="fontbold f22">{{item.dd}}</li>
            <li class="f16 lh16 cp2">起存金额(元)</li>
          </ul>
          <ul class="ul3">
            <li class="f22">{{item.ee}}</li>
            <li class="f16 lh16 cp2">存单期限</li>
          </ul>
          <ul class="ul4">
            <li>
              <el-button size="mini" @click.native="goBuy(itme)">立即购买</el-button>
            </li>
          </ul>
          <p class="f16 lh16 cp3 mb24">购买截止日期：{{item.ff}}</p>
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
  export default {
    data() {
      return {
        activeName: 'CODDeposit',
        isActive: 0,
        formData: {
          keyword: '',
        },
        ulList: [{
            value: '0',
            label: '全部',
          },
          {
            value: '1',
            label: '1个月',
          },
          {
            value: '3',
            label: '3个月',
          },
          {
            value: '6',
            label: '6个月',
          },
          {
            value: '9',
            label: '9个月',
          },
          {
            value: '12',
            label: '12个月',
          },
          {
            value: '18',
            label: '18个月',
          },
          {
            value: '24',
            label: '24个月',
          },
          {
            value: '36',
            label: '36个月',
          },
        ],
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
        }, ]
      }
    },
    methods: {
      getLi(e, index) {
        console.log(index, "0000")
        this.isActive = index
      },
      handleClick() {
          this.activeName=='CODDeposit'?'':this.$router.push('/investmentFinancing/DepositBusiness/certificatesOfDeposit/CODDraw')

      },
      goBuy(){
          this.$router.push('/investmentFinancing/DepositBusiness/certificatesOfDeposit/CODDeposit/CODDepositIn')
      },
    }
  }

</script>
<style lang="scss">
  .CODDeposit {
    .ulClass {
      display: flex;
      margin-top: 23px;
      box-sizing: border-box;

      >span {
        display: inline-block;
        width: 51px;
        text-align: right;
        text-align: center;
        padding-top: 12px;
        padding-bottom: 12px;
        border: 1px solid #ffffff;

      }

      >ul {
        display: flex;

        >li {
          width: 84px;
          cursor: pointer;
          margin-left: 12px;
          text-align: center;
          padding-top: 12px;
          padding-bottom: 12px;
          position: relative;
          border: 1px solid #ffffff;

          img {
            width: 23px;
            height: 23px;
          }

          .imgrClass {
            position: absolute;
            bottom: -1px;
            right: -1px;
          }

          .iconClass {
            color: #ffffff;
            font-size: 11px;
            position: absolute;
            bottom: -1px;
            right: 1px;
          }

          .imgrClassNo,
          .iconClassNo {
            display: none;
          }


        }

        .borderClass {
          border: 1px solid #059c5d;
          border-radius: 2px;

        }
      }

    }

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


  }

</style>
