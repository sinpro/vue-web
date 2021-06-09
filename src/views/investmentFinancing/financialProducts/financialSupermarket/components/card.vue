<template>
  <div id="card" class="BoxShadow">
    <div class="left">
      <div class="title">
        <span>
          {{ pData.title }}
        </span>
        <el-tag class="firstTag ml20">{{ pData.tag[0] }} </el-tag>
        <el-tag type="danger">{{ pData.tag[1] }} </el-tag>
      </div>
      <div class="content">
        <div>
          <div class="per"><span>5.88</span><span class="unit">%</span></div>
          <p class="cbg">业绩比较基准</p>
        </div>
        <div>
          <span class="amount">100000</span>
          <p class="cbg">起售金额</p>
        </div>
        <div>
          <span class="amount">100天</span>
          <p class="cbg">产品期限</p>
        </div>
        <div class="btn">
          <el-button type="primary" @click.self="buyIt(pData.id)" size="small"
            >立即购买</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pData: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {

    }
  },
  mounted() {
    console.log(this.pData, 'pDatsa---')
  },
  methods: {
    buyIt(v) {
      console.log(v, 'v---')
    }
  }
}
</script>

<style lang="scss" scoped>
#card {
  display: flex;
  height: 134px;
  padding: 10px 24px;
}
.left {
  width: 100%;
  margin-top: 15px;
  .title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 23px;
    .el-tag {
      background-color: #fff;
      font-weight: normal;
      font-size: 14px;
      margin-right: 10px;
    }
    .firstTag {
      color: #c6a34f;
      border-color: #c6a34f;
    }
  }
}
.content {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-end;
  .per {
    font-size: 34px;
    font-weight: bold;
    color: #eb3d3d;
  }
  .unit {
    font-weight: bold;
    font-size: 20px;
  }
  .cbg {
    font-size: 16px;
    color: #999999;
    text-align: left;
  }
  .amount {
    font-size: 24px;
  }
}
.content div {
  //   margin-right: 20px;
  text-align: center;
}
</style>