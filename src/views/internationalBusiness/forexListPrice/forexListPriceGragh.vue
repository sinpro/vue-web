<template>
  <div class="forexListPriceGragh">
    <title-bar title="币种历史牌价曲线图" class="mb36"></title-bar>
    <el-radio-group v-model="radio1">
      <el-radio-button label="0">近7日</el-radio-button>
      <el-radio-button label="1">近1月</el-radio-button>
      <el-radio-button label="2">近1年</el-radio-button>
    </el-radio-group>
    <p class="pClass">
        <span>币种：</span>
        <span class="s2">美元USD</span>
        <span>发布日期：</span>
        <span class="s4">2021-03-24</span>
        <span>银行现汇买入价：</span>
        <span class="s6 money">548.98元 </span>
        <span>银行现汇卖出价：</span>
        <span class="money cg">461.65元</span>
    </p>
    <div id="myechart" class="echartsClass"></div>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        radio1: '0',
        dataList: [],
        dataList0: ['06-03', '06-04', '06-05', '06-06', '06-07', '06-08', '06-09'],
        dataList1: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18',
          '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
        ],
        dataList2: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', ],
      }
    },
    methods: {
      myecharts() {
        let that = this;
        let echarts = that.$echarts.init(document.getElementById('myechart'))
        let option = {
          color: ['#c6a34f', '#059c5d'],
          grid: {
            left: '2%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: that.radio1 == '0' ? that.dataList0 : that.radio1 == '1' ? that.dataList1 : that.dataList2,
            axisLabel: {
              textStyle: {
                color: '#666666',
                fontSize: 14,
                padding: [13, 0, 0, 0]
              }
            },
            axisLine: {
              lineStyle: {
                color: "#e6e6e6"
              }
            },
          },
          yAxis: {
            type: 'value',
            splitLine: {
              lineStyle: {
                type: "dashed",
                color: "#e6e6e6"
              }
            },
            axisLabel: {
              textStyle: {
                color: '#1b1b1b',
                fontSize: 14,
                padding: [0, 5, 0, 0]

              }
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
          },
          series: [{
              name: '买入',
              type: 'line',
              data: [{
                  'date': '2016-01-03  11:40:00',
                  'value': '120'
                },
                {
                  'date': '2016-01-04  11:40:00',
                  'value': '123'
                },
                {
                  'date': '2016-01-05  11:40:00',
                  'value': '566'
                },
                {
                  'date': '2016-01-06  11:40:00',
                  'value': '465'
                },
                {
                  'date': '2016-01-07  11:40:00',
                  'value': '63'
                },
                {
                  'date': '2016-01-08  11:40:00',
                  'value': '423'
                },
                {
                  'date': '2016-01-09  11:40:00',
                  'value': '36'
                },
              ]
            },
            {
              name: '买出',
              type: 'line',
              data: [232, 182, 191, 234, 134, 330, 310]
            },

          ],
          axisPointer: {
            show: "auto",
            lineStyle: {
              type: "solid",
              color: "#c6a34f"
            }
          },
          tooltip: {
            trigger: 'axis',
            formatter(params) {
              console.log(params)
              return `<div style="padding:8px 9px 12px 8px;font-size:16px;line-height: 24px;">
                         <p>${params[0].data.date}</p>
                         <p>${params[0].seriesName}：${params[0].value}</p>
                         <p>${params[1].seriesName}：${params[1].value}</p>
                      </div>`

            }
          },
        };
        echarts.setOption(option)
      }
    },
    mounted() {
      this.myecharts()
    },
    updated(){
      this.myecharts()

    }
  }

</script>
<style lang="scss">
  .forexListPriceGragh {
    .echartsClass {
      width: 100%;
      height: 286px;
    }
    .pClass{
        margin-top: 38px;
        span{
            display: inline-block;
        }
        .s2{
            margin-right: 36px;
        }
        .s4{
            margin-right:64px;
        }
        .s6{
            margin-right:27px;
        }
        .cg{
            color: #059c5d;
        }
    }
  }

</style>
