<template>
  <div class="super-market">
    <div class="index" v-if="status === 'index'">
      <title-bar title="理财列表"></title-bar>
      <el-form ref="form" :model="form">
        <el-form-item label="关 键 字:">
          <el-input v-model="form.name" placeholder="输入关键词进行搜索">
            <i
              class="el-icon-search mr10"
              slot="suffix"
              @click="handleIconClick"
            >
            </i>
          </el-input>
          <el-button type="primary" size="mini">搜索</el-button>
        </el-form-item>
        <el-form-item label="投资期限:">
          <el-radio-group v-model="form.qixian">
            <el-radio label="1">全部</el-radio>
            <el-radio label="2">30天以下</el-radio>
            <el-radio label="3">31-90天</el-radio>
            <el-radio label="4">91-180天</el-radio>
            <el-radio label="5">181-365天</el-radio>
            <el-radio label="6">365天以上</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="收益类型">
          <el-radio-group v-model="form.type">
            <el-radio label="1">全部</el-radio>
            <el-radio label="2">保本收益类</el-radio>
            <el-radio label="3">保本浮动收益类</el-radio>
            <el-radio label="4">非保本浮动收益类</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="风险等级:">
          <el-radio-group v-model="form.level">
            <el-radio label="1">全部</el-radio>
            <el-radio label="2">极低风险</el-radio>
            <el-radio label="3">低风险</el-radio>
            <el-radio label="4">中等风险</el-radio>
            <el-radio label="4">高风险</el-radio>
            <el-radio label="4">较高风险</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div
        class="cardDiv mt10 pb10"
        v-for="(item, key) in lists"
        :key="key"
        @click="handleCard(item)"
      >
        <card :pData="item" />
      </div>
    </div>
    <div class="detail" v-if="status === 'detail'">
      <detail :pData="detailData" @changeStatus="changeStatus" />
    </div>
  </div>
</template>

<script>
import Card from './components/card'
import Detail from './detail'
export default {
  components: {
    Card,
    Detail
  },
  data() {
    return {
      activeName: 'first',
      form: {
        qixian: '1',
        type: '1',
        level: '1'
      },
      radio1: '1',
      radio: '3',
      status: 'index',
      detailData: {},
      lists: [
        {
          title: '建成财汇盈·升金第67期 非保本浮动收益类（14532）',
          tag: ['保本浮动收益类', 'tag2'],
          id: '001'
        },
        {
          title: '顺盈二号开放净值型理财',
          tag: ['tag1', 'tag2'],
          id: '002'
        },
        {
          title: '顺盈三号开放净值型理财',
          tag: ['tag1', 'tag2'],
          id: '003'
        },
      ]
    };
  },
  methods: {
    handleIconClick() {
      console.log(34)
    },
    handleClick() {

    },
    handleCard(v) {
      console.log(v, 'dd---')
      this.status = 'detail'
      this.detailData = v
    },
    changeStatus(v) {
      this.status = v
    }
  }
}
</script>

<style lang="scss">
.super-market {
  .cardDiv {
    margin-bottom: 10px;
  }
  .el-radio__input.is-checked + .el-radio__label {
    color: #059c5d !important;
  }
  /*推荐头像去掉radio的小圆点*/
  .el-radio__input {
    display: none;
  }
  .el-radio {
    height: 20px;
    padding-top: 5px;
    text-align: center;
    color: #999999;
    .el-radio__label {
      padding-right: 8px;
    }
  }
  .is-checked {
    border: solid 1px #059c5d;
    color: #059c5d;
  }
}
</style>