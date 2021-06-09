<template>
  <div class="accountQuery">
    <!-- *****************本行账户查询tab***************** -->
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="本行账户查询" name="first">
        <!-- *****************本行账户查询-信息录入***************** -->
        <el-form ref="form" :model="form" label-width="80px" :inline="true">
          <!-- <el-form-item label="企业名称：" label-width="100px">
            <el-input v-model="form.name" :disabled="true"></el-input>
          </el-form-item> -->
          <el-form-item label="账号：">
            <el-select v-model="form.region" placeholder="全部" v-support>
              <el-option v-for="(val,key) in options" :key="key" :label="val.label" :value="val.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button class="ml20" type="primary" @click="onSubmit" size="mini">查询</el-button>
          </el-form-item>
        </el-form>
        <!-- 本行-账户信息-卡片 -->
        <el-tabs v-model="activeName">
          <el-tab-pane label="人民币账户" name="first">
            <div class="flex rmbCard">
              <div class="boxCard" v-for="(value,index) in cardList" :key="index">
                <div class="topHalf">
                  <p class="f18 cp1 bold">765469 **** 7645</p>
                  <p class="f16 cp1">北京易诚互动科技有限北京易诚互动科技</p>
                  <div class="default" v-if="activeName3">
                    <img src="../../../images/accountManage/iconDefaultAcc.png">
                  </div>
                  <div class="default" v-if="activeName4">
                    <img src="../../../images/accountManage/iconPaymentCard.png">
                  </div>
                </div>
                <div class="div2">
                  <span class="f16 cp3" v-if="activeName4">余额(元）</span>
                  <span class="f16 cp3" v-else>持卡人</span>
                  <span class="f20 money" v-if="activeName4">657,987,987.00</span>
                  <span class="f16 cp1 nameSpan" v-else>*三</span>
                  <div class="eye" v-if="activeName">
                    <img src="../../../images/accountManage/iconEye.png">
                  </div>
                  <div class="eye" v-else>
                    <img src="../../../images/accountManage/iconEyeClosed.png">
                  </div>
                </div>
                <div class="div3">
                  <p class="f16 cp3">简阳农商银行简阳农商银行简阳农商银行</p>
                </div>
                <div>
                  <el-button type="text" @click.native="goManage(value)">详情</el-button>
                  <span class="span"></span>
                  <el-button type="text" @click.native="goDetail(value)">明细</el-button>
                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
        <el-tabs v-model="activeName">

          <el-tab-pane label="外币账户" name="first">
            <div class="flex rmbCard">
              <div class="boxCard Forex" v-for="(value,index) in cardList" :key="index">
                <div class="topHalf">
                  <p class="f18 cp1 bold">765469 **** 7645</p>
                  <p class="f16 cp1">北京易诚互动科技有限北京易诚互动科技</p>
                </div>
                <div class="div2">
                  <span class="f16 cp3">现钞余额(元）</span>
                  <span class="f20 money">657,987,987.00</span>
                  <div>
                    <span class="f16 cp3">现汇余额(元）</span>
                    <span class="f20 money">657,987,987.00</span>
                  </div>
                  <div class="eye" v-if="activeName3">
                    <img src="../../../images/accountManage/iconEye.png">
                  </div>
                  <div class="eye" v-else>
                    <img src="../../../images/accountManage/iconEyeClosed.png">
                  </div>
                </div>
                <div class="div3">
                  <p class="f16 cp3">简阳农商银行简阳农商银行简阳农商银行</p>
                </div>
                <div>
                  <el-button type="text" @click.native="goManage(value)">详情</el-button>
                  <span class="span"></span>
                  <el-button type="text" @click.native="goDetail(value)">明细</el-button>
                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <!-- *****************他行账户查询tab***************** -->
      <el-tab-pane label="他行账户查询" name="second">
        <div class="flex otherAccSearch">
          <div class="boxCardOtherBank" v-for="(value,index) in cardList" :key="index">
            <div class="topHalf flex">
              <div class="imgs"><img src="../../../images/accountManage/iconBankLogo.png"></div>
              <div class="infos">
                <p class="f18 lh18 cp1 p1">765469 **** 7645</p>
                <p class="f16 lh16 cp1 p2">北京易诚互动科技有限公司诚互动科技有限公司</p>
                <p class="f16 lh16 cp3 p3">招商银行XX分行</p>
              </div>
            </div>
            <div class="botHalf">
              <p class="money f20 lh20 pM">657,987,987.00<span class="eye"><img
                    src="../../../images/accountManage/iconEye.png"></span></p>
              <p class="f16 lh16 cp3">余额(元)</p>
              <div class="btns flex">
                <div class="tar d1">
                  <el-button type="text" @click.native="goManage(value)">详情</el-button>
                </div>
                <div class="d2"></div>
                <div class="tal">
                  <el-button type="text" @click.native="goDetail(value)">明细</el-button>
                </div>
              </div>
            </div>
            <div class="bar f14">
              支付、查询
            </div>

          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first',
        activeName2: 'first',
        activeName3: '1',
        activeName4: '',
        form: {
          name: '北京易诚互动网络技术股份有限公司',
          region: '',
          date1: '',
        },
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        cardList: [{
            accuntNum: '424253152',
            accuntName: '北京易诚互动网络技术股份有限公司',
            balance: '6353253.00',
            bank: '简阳农商银行简阳农商银行',
            bankType: 'Own',
            powerInfo: '1',
            sonAc: '1',
            isForeign: '0',
          },
          {
            accuntNum: '424253152',
            accuntName: '北京易诚互动网络技术股份有限公司',
            balance: '6353253.00',
            bank: '简阳农商银行简阳农商银行',
            bankType: 'Other',
            powerInfo: '1',
            sonAc: '0',
            isForeign: '0',
          },
          {
            accuntNum: '424253152',
            accuntName: '北京易诚互动网络技术股份有限公司',
            balance: '6353253.00',
            bank: '简阳农商银行简阳农商银行',
            bankType: 'Other',
            powerInfo: '0',
            sonAc: '1',
            isForeign: '0',
          },
          {
            accuntNum: '424253152',
            accuntName: '北京易诚互动网络技术股份有限公司',
            balance: '6353253.00',
            bank: '简阳农商银行简阳农商银行',
            bankType: 'Other',
            powerInfo: '0',
            sonAc: '0',
            isForeign: '1',
          },
          {
            accuntNum: '424253152111111',
            accuntName: '北京易诚互动网络技术股份有限公司',
            balance: '6353253.00',
            bank: '简阳农商银行简阳农商银行',
            bankType: 'Own',
            powerInfo: '0',
            sonAc: '0',
            isForeign: '0',
          },
        ]
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log('1222', tab, event);
      },
      onSubmit() {
        console.log('submit!');
      },
      //跳转到账户基本信息页面
      goManage(value) {
        window.sessionStorage.setItem('acInfo', JSON.stringify(value));
        this.$router.push(`/accountManagement/accountQuery/acQryBasicInfo${value.bankType}`)
      },
      //跳转到本行/他行明细页面
      goDetail(value) {
        console.log(value.bankType)
        window.sessionStorage.setItem('acInfoBank', JSON.stringify(value));
        this.$router.push(`/accountManagement/accountQuery/acQryDetail${value.bankType}`)
      }
    }
  };

</script>
<style lang='scss'>
  .accountQuery {
    box-sizing: border-box;

    .rmbCard {
      // padding: 8px;
    }

    .boxCard:nth-child(odd) {
      margin-right: 24px;

    }

    .boxCard {
      width: 460px;
      height: 221px;
      background-color: #ffffff;
      box-shadow: 0px 2px 9px 0px #00000014;
      border-radius: 8px;
      margin-bottom: 24px;
      box-sizing: border-box;
      padding: 24px 0px 0px 24px;

      .topHalf {
        width: 394px;
        height: 44px;
        position: relative;
        margin-bottom: 18px;

        &::before {
          display: block;
          content: '';
          width: 2px;
          height: 44px;
          position: absolute;
          background-color: #059c5d;
          left: -24px;
        }

        .default {
          position: absolute;
          top: -9px;
          right: -18px;
        }
      }

      .div3 {
        margin-top: 18px;
      }

      >div:nth-child(4) {
        text-align: center;
        line-height: 50px;
        width: 412px;
        border-top: 1Px solid #f0f0f0;
        margin-top: 11px;

        .span {
          display: inline-block;
          width: 1Px;
          height: 16px;
          background-color: #f0f0f0;
          margin: 0px 50px -2px 50px;

        }
      }

      .div2 {
        position: relative;

        .eye {
          position: absolute;
          top: 6px;
          right: 24px;
          cursor: pointer;
        }

        .nameSpan {
          margin-left: 15px;
        }
      }

    }

    .Forex {
      height: 252px;
    }

    .flex {
      flex-wrap: wrap;
    }

    .otherAccSearch {
      padding-top: 19px;

      >div:nth-child(odd) {
        margin-right: 24px;
      }

      .boxCardOtherBank {
        width: 460px;
        height: 254px;
        box-shadow: 0px 2px 9px 0px #00000014;
        border-radius: 8px;
        margin-bottom: 24px;
        box-sizing: border-box;
        position: relative;

        .topHalf {
          height: 112px;
          background: #f4eddc4d;
          border-radius: 8px 8px 0px 0px;

          .imgs {
            margin: 24px 9px 0 16px;
          }

          .infos {
            .p1 {
              margin-top: 22px;
            }

            .p2 {
              margin-top: 11px;
            }

            .p3 {
              margin-top: 15px;
            }
          }
        }

        .botHalf {
          text-align: center;
          margin-top: 25px;

          .pM {
            margin-bottom: 11px;
          }

          .eye {
            margin-left: 13px;
          }

          .btns {
            width: 412px;
            border-top: 1px solid #f0f0f0;
            position: absolute;
            bottom: 0;
            left: 24px;

            .d1 {
              margin-left: 124px;
            }

            .d2 {
              width: 1px;
              height: 16px;
              background-color: #f0f0f0;
              margin: 15px 50px 16px 50px;
            }
          }
        }

        .bar {
          width: 94px;
          height: 24px;
          color: #ffffff;
          padding: 5px 0px 0px 12px;
          position: absolute;
          right: -5px;
          top: 16px;
          background-color: #059c5d;
          border-radius: 4px 0px 0px 4px;
          line-height: 19px;
          &::before{
            display: inline-block;
            content: '';
            width: 0;
            height: 0;
            position: absolute;
            top: -3px;
            right: 0;
            border-bottom: 3px solid #059c5d;
            border-right: 3px solid transparent;
          }
        }
      }
    }

  }

</style>
