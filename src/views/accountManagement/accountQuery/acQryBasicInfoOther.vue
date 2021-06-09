<template>
  <div class="acQryBasicInfoOther">
    <el-tabs v-model="activeName">
      <el-tab-pane label="他行账户详情" name="first">


        <div class="flex mainCard">
          <div class="infoCard">
            <div class="flex topHalf">
              <div>
                <img src="../../../images/accountManage/iconBankLogo.png">
              </div>
              <div>
                <p class="f18 cf">634500 **** 0098</p>
                <p class="f16 cf anotherName" v-if='inputSwitch'>
                  <span>设置别名</span><img v-if='inputSwitch' @click="changeinputSwitch"
                    src="../../../images/accountManage/iconChangeName.png">
                </p>
                <el-input class="anotherNameInput" v-else v-model="item.name" ref="ipt" placeholder="设置别名"
                  onKeyUp="if(window.event.keyCode==13) this.blur()" @blur="changeInput" maxlength="10"></el-input>
              </div>
            </div>

            <div class="greenbar">
              <div class="littlebar"></div>
              <div class="bgg cf f14">
                正常
              </div>
            </div>
          </div>
          <div class="infoCard2">
            <p class="f20 money lh20 infoCard2Money">765,875,987.00<img v-if="activeName"
                src="../../../images/accountManage/iconEye.png"><img v-else
                src="../../../images/accountManage/iconEyeClosed.png"></p>
            <p class="f16 cp3 lh16 yue">余额(元)</p>
          </div>
        </div>

        <div class="belongInfo">
          <p class="p1">
            <span class="s1 cp3 lh16">户名</span>
            <span class="s2 cp1 lh16">北京易诚互动网络技术有限公司</span>
            <span class="s3 cp3 lh16">开户机构</span>
            <span class="s4 cp1 lh16">中国建设银行简阳分行营业部</span>
          </p>
          <p class="p2">
            <span class="s1 cp3 lh16">账户类型</span>
            <span class="s2 cp1 lh16">基本户</span>
          </p>
        </div>



      </el-tab-pane>
    </el-tabs>
    <el-tabs v-model="activeName">
      <el-tab-pane label="授权信息" name="first">

        <div class="cardList">
          <div class="card">
            <div class="toHalf flex">
              <div><img src="../../../images/accountManage/iconBankLogo.png"></div>
              <div class="d2">
                <p class="f18 lh18 cp1">四川农信</p>
                <p class="f18 lh18 cp1">623176 **** 0098</p>
              </div>
              <div class="d3">
                <p>
                  <span class="f16 lh16 cg">账户权限：</span>
                  <span class="f16 lh16 cp1">查询、支付</span>
                </p>
              </div>
            </div>
            <div class=" botHalf fl6 lh16 flex">
              <ul class="cp3 tar u1">
                <li>收款户名</li>
                <li>日累计支付限额</li>
                <li>月累计支付限额</li>
                <li>协议生效日期</li>
                <li>支付权限</li>
              </ul>
              <ul class="cp1 u2">
                <li>北京高新科技有限公司北京高新科技有限公司有限公司有限公司</li>
                <li>100,000,000.00元</li>
                <li>100,000,000.00元</li>
                <li>2020-09-09</li>
                <li class="libtn"><span>已签约</span><el-button class="w60">解约</el-button>
                </li>
              </ul>
              <ul class="cp3 tar u3">
                <li>单笔支付限额</li>
                <li>日累计笔数上限</li>
                <li>月累计笔数上限</li>
                <li>协议失效日期</li>
                <li>查询权限</li>
              </ul>
              <ul class="cp1 u4">
                <li>10,000.00元</li>
                <li>1,000笔</li>
                <li>100,100笔</li>
                <li>2020-09-18</li>
                <li class="libtn"><span>已签约</span><el-button class="w60">解约</el-button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="tac mb50">
          <el-button type="primary">返回</el-button>
        </div>

      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: "first",
        inputSwitch: true,
        item: {
          name: '',
        },
      }
    },
    methods: {
      changeInput() {
        this.inputSwitch = !this.inputSwitch;
        this.item.name == '' ? this.item.name = '' : ''
      },
      changeinputSwitch() {
        this.inputSwitch = !this.inputSwitch;
        this.$nextTick(() => {
          this.$refs.ipt.focus()
        }, 500)
      },
    }
  }

</script>
<style lang="scss">
  .acQryBasicInfoOther {
    .mainCard {
      width: 628px;
      margin: 48px auto;

      .infoCard {
        width: 314px;
        height: 150px;
        background: url('../../../images/accountManage/iconCardNoborder.png');
        position: relative;

        .topHalf {
          margin: 51px 0 0 15px;

          p {
            margin-left: 8px;
          }

          .anotherName {
            margin-left: 8px;

            img {
              vertical-align: middle;
              margin-left: 9px;
              cursor: pointer;

            }



          }

          .anotherNameInput {
            width: 190px;

            margin-left: 8px;

            .el-input__inner {
              height: 32px;
            }

          }

          .iconChangeName {
            width: 14px;
            height: 14px;
            display: inline-block;
            vertical-align: bottom;
            // margin: 2px 0 0 9px;
            // &::before{
            //   display: table;
            //   content: '';
            // }
          }

        }

        .defaultAccBtnTxt {
          position: absolute;
          left: 18px;
          bottom: 18px;
          line-height: 16px;
        }

        .defaultAccBtn {
          position: absolute;
          left: 92px;
          bottom: 15px;

        }

        .Right {
          position: absolute;
          line-height: 14px;
          right: 14px;
          bottom: 19px;
        }

        .iconMainCard {
          position: absolute;
          left: 19px;
          bottom: 13px;
        }
      }

      .infoCard2 {
        width: 314px;
        height: 130px;
        background-color: #ffffff;
        box-shadow: 0px 2px 9px 0px #00000014;
        border-radius: 0px 4px 4px 0px;
        margin-top: 10px;
        position: relative;

        .infoCard2Money {
          text-align: center;
          margin-top: 43px;

          img {
            margin-left: 11px;
          }
        }

        .yue {
          margin-top: 11px;
          text-align: center;
        }

        .canyue {
          margin-top: 24px;
          text-align: center;
        }
      }
    }

    .bgg {
      padding: 5px 9px 5px 8px;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      background-color: #c6a34f;
      line-height: 14px;
    }

    .littlebar {
      width: 0px;
      height: 0px;
      border-bottom: 3px solid #83641B;
      border-right: 3px solid transparent;
      margin-left: auto;
    }

    .greenbar {
      display: inline-block;
      position: absolute;
      right: -3px;
      top: 11px;
      border-radius: 4px 0px 0px 4px;
      z-index: 9;
    }

    .belongInfo {
      margin-top: 36px;
      font-size: 16px;

      .p1 {
        .s1 {
          margin-left: 132px;
        }

        .s2,
        .s4 {
          margin-left: 24px;
        }

        .s3 {
          margin-left: 156px;
        }
      }

      .p2 {
        margin-top: 23px;
        margin-bottom: 38px;

        .s1 {
          margin-left: 99px;
        }

        .s2 {
          margin-left: 24px;
        }
      }
    }

    .cardList {
      margin-top: 31px;
      margin-bottom: 53px;

      .card {
        &::before {
          display: table;
          content: '';
        }

        width: 944px;
        height: 383px;
        box-shadow: 0px 2px 9px 0px #0000001a;
        border-radius: 2px;

        .toHalf {
          margin: 26px 0 0 44px;

          .d2 {
            margin-left: 21px;

            >p:first-child {
              margin-bottom: 11px;
            }
          }

          .d3 {
            margin: 27px 0 0 54px;
          }
        }

        .botHalf {
          width: 912px;
          height: 247px;
          background: #f4eddc4d;
          margin: 28px 0 0 16px;
          border-radius: 4px;
          padding: 24px 0 0 38px;
          box-sizing: border-box;

          >ul {
            list-style: none;

            >li:first-child {
              height: 40px;
            }

            li+li {
              margin-top: 22px;
            }

          }

          >ul:nth-child(odd) {
            margin-right: 24px;
          }

          .u2 {
            margin-right: 81px;

            >li:first-child {
              width: 256px;
              line-height: 24px;
              margin-bottom: 27px;
              margin-top: -5px;
            }
          }
          
          .libtn{
              position: relative;
              .w60{
              width: 60px;
              height: 24px;
              padding: 0px 14px;
              position: absolute;
              left: 65px;
              top: -2px;
          }
          }
        }
      }
    }
  }

</style>
