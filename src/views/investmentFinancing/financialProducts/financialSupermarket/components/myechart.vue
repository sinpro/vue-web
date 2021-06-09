<template>
  <div class="">
    <div id="myechart" class="dddfff"></div>
  </div>
</template>

<script>
import echarts from "echarts"
export default {
  components: {},
  data() {
    return {

    }
  },
  computed: {},
  watch: {},
  methods: {
    echartsInit() {
      let me = this;
      let myChart = me.$echarts.init(document.getElementById('myechart'))
      let option = {

        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          boundaryGap: false,

        },
        yAxis: {
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed'
            }
          },
          type: 'value'
        },
        series: [{
          data: [0.1, 0.95, 1.14, 1.01, 1.065, 1.099, 1.14],
          type: 'line',
          showSymbol: false,
          lineStyle: { color: "#c6a34f" },
          itemStyle: {
            normal: {
              areaStyle: { type: 'default' },
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  { offset: 0, color: '#f4eede' },
                  { offset: 0.5, color: '#faf6ee' },
                  { offset: 1, color: '#fff' }
                ]
              ),
            }
          },


        }],

      };

      myChart.setOption(option)
      // myChart.on('click', function (params) {
      // console.log(params.data.name)
      // // me.currName = params.data.name;
      // })
    }
  },
  created() { },
  mounted() {
    this.echartsInit()
    console.log()
  },
}
</script>
<style lang='scss' scoped>
.dddfff {
  width: 100%;
  height: 200px;
}
</style>