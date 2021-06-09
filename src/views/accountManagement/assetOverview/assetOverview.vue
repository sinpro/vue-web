<template>
  <div class="asset-view">
    <el-row>
      <el-col :span="12">
        <div id="myChart" class="mian-echarts"></div>
      </el-col>
      <el-col :span="12">
        <div class="asset-detail">
          <ul class="asset-ul">
            <li class="c-ck">
              <div class="c3 ul1">
                <p class="f16 bold">
                  <span class="f18">存款</span>
                  <span class="ml20 f18">12，000，00元</span>
                </p>
                <p class="f14">
                  <span class="f16">活期</span>
                  <span class="ml10 f16">500，000元</span>
                </p>
                <p class="f14">
                  <span class="f16">定期</span>
                  <span class="ml10 f16">11，5000.00元</span>
                </p>
              </div>
            </li>
            <li class="c-lc mt20">
              <div class="c3">
                <p class="f18 bold">理财<span class="ml20">12，000，00元</span></p>
              </div>
            </li>
            <!-- <li class="c-jj mt20">
              <div class="c3">
                <p class="f16 bold">基金<span class="ml20">12，000，00元</span></p>
              </div>
            </li> -->
            <li class="c-wb mt20">
              <div class="c3">
                <p class="f18 bold">外币
                  <span class="ml20">12，000，00元</span>
                  <span>（折算人民币）</span>
                </p>
                <!-- <p class="f14">
                  活期存款<span class="ml10">500，000元</span>
                  <span class="ml20">定期存款</span><span class="ml10">11，5000.00元</span>
                </p>
                <p class="f14 gray2">由当日中间价汇算</p> -->
              </div>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
    <div class="notice">
      <p class="f16 cp1">温馨提示:</p>
      <ul class="f14 cp3">
        <li>1.资产信息仅供参考，且不含保险，请以实际信息为准。</li>
        <li>2.存款为本企业在四川农信所有账户下的人民币活期和定期合计总额。</li>
        <li>3.理财为本企业已持有的四川农信所有行社的理财产品合计总额。</li>
        <li>4.外币资产将会被折算成人民币资产统计，因汇率实时变动，请以实际信息为准。</li>
      </ul>
    </div>



    <el-tabs v-model="currName" type="card" @tab-click="handleClick">
      <el-tab-pane label="存款" name="存款">
        <div class="deposit">
          <p class="leftBar cg">活期({{forexData.length}})</p>
          <div class="card-list">
            <div class="cardItem" v-for="(value,key) in forexData" :key="key">
              <div class="topHalf">
                <img src="../../../images//apiManage/1blue.png" class="card-icon">
                <div>
                  <p class="f18 cp1 bold">{{value.acctNo}}</p>
                  <p class="f16 cp2">{{value.acctName}}</p>
                </div>
              </div>
              <div>
                <p class="f20 cy tac">{{value.balance}}</p>
                <p class="f16 cp3 tac">余额(元)</p>
              </div>
            </div>
          </div>
        </div>
        <div class="deposit">
          <p class="leftBar cg">定期({{forexData.length}})</p>
          <div class="card-list">
            <div class="cardItem" v-for="(value,key) in forexData" :key="key">
              <div class="topHalf">
                <img src="../../../images//apiManage/1blue.png" class="card-icon">
                <div>
                  <p class="f18 cp1 bold">{{value.acctNo}}</p>
                  <p class="f16 cp2">{{value.acctName}}</p>
                </div>
              </div>
              <div>
                <p class="f20 cy tac">{{value.balance}}</p>
                <p class="f16 cp3 tac">余额(元)</p>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>

      <el-tab-pane label="理财" name="理财">
        <div class="moneymanage">
          <div class="card-list">
            <div class="cardItem" v-for="(value,key) in forexData" :key="key">
              <p class="f18 cp1 blod">农银财富·零钱包</p>
              <div class="greenbar">
                <div class="littlebar"></div>
                <div class="bgg cf">
                  非保本收益类
                </div>
              </div>
              <div class="bottomHalf tac">
                <div>
                  <p class="f22 cy">4,000,000.00</p>
                  <p class="f16 cp3">持仓金额(元)</p>
                </div>
                <div>
                  <p class="f20 cy">2.85%</p>
                  <p class="f16 cp3">业绩比较基准</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </el-tab-pane>
      <el-tab-pane label="存款" name="外币">
        <div class="deposit">
          <div class="card-list">
            <div class="cardItem" v-for="(value,key) in forexData3" :key="key">
              <div class="topHalf">
                <img src="../../../images//apiManage/1blue.png" class="card-icon">
                <div>
                  <p class="f18 cp1 bold">{{value.acctNo}}</p>
                  <p class="f16 cp2">{{value.acctName}}</p>
                </div>
              </div>
              <div>
                <p class="f20 cy tac">{{value.balance}}</p>
                <p class="f16 cp3 tac">折算人民币(元)</p>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>

    </el-tabs>

  </div>
</template>

<script>
  import mathTools from 'utils/mathTools.js'
  export default {
    mounted() {
      this.echartsInit();
    },
    data() {
      return {
        currName: '存款',
        forexData: [{
            acctNo: '6228487937895847601',
            acctName: '北京易诚北京易诚北京易诚北京易诚北京易诚',
            acctType: '活期账户',
            currency: '人民币',
            balance: '857463829501958.33',
            avaiBalance: '12123891723.00'
          },
          {
            acctNo: '6225733650192860',
            acctName: '北京易诚北京易诚北京易诚北京易诚北京易诚',
            acctType: '活期账户',
            currency: '人民币',
            balance: '12312389172391731.33',
            avaiBalance: '12123891723.00'
          }, {
            acctNo: '6225680298754938',
            acctName: '北京易诚北京易诚北京易诚北京易诚北京易诚',
            acctType: '活期账户',
            currency: '人民币',
            balance: '12312389172391731.33',
            avaiBalance: '12123891723.00'
          }
        ],
        forexData3: [{
            acctNo: '6228487937895847601',
            acctName: '北京易诚北京易诚北京易诚北京易诚北京易诚',
            acctType: '活期账户',
            currency: '人民币',
            balance: '857463829501958.33',
            avaiBalance: '12123891723.00'
          },
          {
            acctNo: '6225733650192860',
            acctName: '北京易诚北京易诚北京易诚北京易诚北京易诚',
            acctType: '活期账户',
            currency: '人民币',
            balance: '12312389172391731.33',
            avaiBalance: '12123891723.00'
          }, {
            acctNo: '6225680298754938',
            acctName: '北京易诚北京易诚北京易诚北京易诚北京易诚',
            acctType: '活期账户',
            currency: '人民币',
            balance: '12312389172391731.33',
            avaiBalance: '12123891723.00'
          }
        ]
      }
    },
    methods: {
      echartsInit() {
        // 基于准备好的dom，初始化echarts实例
        let that = this;
        let myChart = that.$echarts.init(document.getElementById('myChart'))

        // 绘制图表
        let option = {
          title: {
            text: '97.000.000.000.00',
            subtext: '资产总额(元)',
            x: 'center',
            y: '40%',
            textStyle: {
              "fontSize": 16,
              "fontWeight": "normal",
              "color": "#c6a34f"
            },
            subtextStyle: {
              "fontSize": 16,
              "fontWeight": "bolder",
              "color": "#1b1b1b"
            },
            fontFamily: "PingFang-SC-Medi",
          },
          color: ['#4367D6', '#EBB03E', '#EB3D3D'], //配置颜色
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} {c}"
          },

          series: [{
            name: '',
            type: 'pie',
            radius: ['45%', '70%'],
            center: ['50%', '50%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2,
            },
            label: {
              // normal: {
              //     formatter: '{b} : {c} ({d}%)',
              // },
              normal: {
                formatter: function (obj) {
                  return obj.name + obj.percent.toFixed(0) + '%'
                }
              },
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              //     {
              //     value: '66',
              //     name: '基金'
              //   },
              {
                value: '32',
                name: '外币',
                label: {
                  color: "#1b1b1b",
                  fontSize: '16'
                }
              },
              {
                value: '8',
                name: '理财',
                label: {
                  color: "#1b1b1b",
                  fontSize: '16'
                }
              },
              {
                value: '10',
                name: '存款',
                label: {
                  color: "#1b1b1b",
                  fontSize: '16'
                }
              },
            ]
          }]
        };
        myChart.setOption(option)
        myChart.on('click', function (params) {
          console.log(params.data.name)
          that.currName = params.data.name;
        })
      },
      handleClick() {
        console.log(1)
      },

      //金额格式化
      formatter(row) {
        return mathTools.addDecollator(row.balance);
      }
    }
  }

</script>
<style lang="scss">
  .asset-view {

    .mian-echarts {
      width: 100%;
      height: 350px;
    }

    .asset-detail {
      display: table;
      height: 350px;
      padding-left: 60px;
      line-height: 30px;

      .asset-ul {
        display: table-cell;
        vertical-align: middle;


        .c-ck {
          color: #262626;
        }

        .c-lc {
          color: #262626;
        }

        // .c-jj {
        //   color: #262626;
        // }

        .c-wb {
          color: #262626;
        }
      }
    }

    .deposit {
      .leftBar {
        font-size: 18px;
        margin-bottom: 24px;
      }

      .card-list {
        display: flex;
        flex-wrap: wrap;

        .cardItem {
          width: 460px;
          height: 173px;
          border-radius: 8px;
          box-shadow: 0px 2px 9px 0px #00000014;
          background-color: #ffffff;
          margin-bottom: 40px;

          &:nth-child(odd) {
            margin-right: 24px;

          }

          &::before {
            display: table;
            content: '';
          }

          .card-icon {
            width: 40px;
            height: 40px;
          }

          .topHalf {
            box-sizing: border-box;
            width: 460px;
            height: 79px;
            display: flex;
            padding: 19px 10px;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            background: #f4eddc4d;

            p {
              padding-left: 10px;
              letter-spacing: 0px;
              font-stretch: normal;
            }

            .bold {
              padding-bottom: 5px;
            }
          }

          .cy {
            margin-top: 24px;
          }

          .cp3 {
            margin-top: 11px;
          }


        }
      }

    }

    .moneymanage {
      .leftBar {
        font-size: 18px;
        margin-bottom: 24px;
      }

      .card-list {
        display: flex;
        flex-wrap: wrap;

        .cardItem {
          width: 460px;
          height: 175px;
          border-radius: 8px;
          box-shadow: 0px 2px 9px 0px #00000014;
          background-color: #ffffff;
          margin-bottom: 40px;
          padding: 16px;
          box-sizing: border-box;
          position: relative;

          &:nth-child(odd) {
            margin-right: 24px;

          }

          .f18 {
            margin: 8px;
          }

          &::before {
            display: table;
            content: '';
          }

          .bottomHalf {
            box-sizing: border-box;
            width: 93.04%;
            height: 95px;
            display: flex;
            background: #f4eddc4d;
            position: absolute;
            bottom: 16px;

            div:nth-child(1) {
              width: 257px;

              p:nth-child(1) {
                margin-top: 23px;
              }

              p:nth-child(2) {
                margin-top: 11px;
              }
            }

            div:nth-child(2) {
              width: 171px;

              p:nth-child(1) {
                margin-top: 27px;
              }

              p:nth-child(2) {
                margin-top: 14px;
              }
            }

          }

          .greenbar {
            display: inline-block;
            position: absolute;
            right: -2px;
            top: 18px;
            border-top-left-radius: 4px;
          }

          .bgg {
            padding: 5px 13px 5px 11px;
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
            background-color: #059c5d;
          }

          .littlebar {
            width: 0px;
            height: 0px;
            border-bottom: 3px solid #059c5d;
            border-right: 3px solid transparent;
            margin-left: auto;
          }

        }
      }

    }

    .ul1>p:nth-child(2)>span,
    .ul1>p:nth-child(3)>span {
      margin-left: 5px;
    }

    .ul1>p:nth-child(2)>span:nth-child(2),
    .ul1>p:nth-child(3)>span:nth-child(2) {
      margin-left: 21px;

    }

    .notice {
      box-sizing: border-box;
      width: 944px;
      height: 182px;
      margin: 0 auto;
      background-color: #f9f9f9;
      border-radius: 4px;
      margin-bottom: 56px;
      padding: 35px 32px;

      p {
        font-weight: bold;
        margin-bottom: 15px;
      }

      ul {
        list-style: none;

        li {
          line-height: 22px;
        }
      }
    }

    .el-tabs__item.is-top {
      padding: 0 42px !important;
    }

  }

</style>
