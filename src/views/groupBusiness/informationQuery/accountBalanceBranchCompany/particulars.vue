<template>
  <div class="ABBCparticulars">
    <title-bar title="分公司账户详情"></title-bar>

    <div class="card">
      <div class="card-left">
        <div class="card-left-top pt24 ml18 h100 borderbox">
          <img src="" alt="" />
          <div class="cf">
            <p class="f18 bold">634500 **** 0098</p>
            <p class="mt15">设置别名<i class="el-icon-edit-outline"></i></p>
          </div>
        </div>
        <div class="card-left-bot cf mlr18">
          默认账号
          <el-switch v-model="value1" style="margin: 0 8px"> </el-switch>
          <span class="f14 dian inline-block" style="width: 159px"
            >权限：查询、上限：查询、上限：查询、上限：查询、上划、下拨</span
          >
        </div>
      </div>
      <div class="card-right BoxShadow tac">
        <p class="moneybold f20 pt22" style="padding-top: 22px">
          765,875,987.00 <i class="el-icon-view"></i>
        </p>
        <p class="gray3 mt8">余额(元)</p>
        <p class="gray3 mt28" style="margin-top: 28px">
          可用余额：298,985,987.00元
        </p>
      </div>
    </div>
    <div class="cen-form flex alc wrap">
      <div class="item">
        <span class="label cp2">户名</span>
        <span class="value">最多八个最多八个</span>
      </div>
      <div class="item">
        <span class="label cp2">开户行</span>
        <span class="value">最多十个最多十个最多</span>
      </div>
      <div class="item">
        <span class="label cp2">账户类型</span>
        <span class="value">最多八个最多八个</span>
      </div>
      <div class="item">
        <span class="label cp2">开户机构</span>
        <span class="value">最多十个最多十个最多</span>
      </div>
      <div class="item">
        <span class="label cp2"></span>
        <span class="value"></span>
      </div>
      <div class="item">
        <span class="label cp2">开户日期</span>
        <span class="value">最多十个最多十个最多</span>
      </div>
    </div>
    <div class="tac mtb56">
      <el-button type="primary" @click="$router.go(-1)"> 返回 </el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: true,
    };
  },
};
</script>
<style lang="scss">
.ABBCparticulars {
  .card {
    width: 630px;
    height: 150px;
    display: flex;
    align-items: center;
    margin: 20px auto;
    .card-left {
      height: 150px;
      width: 50%;
      background-image: linear-gradient(
        117deg,
        #c6a34f 0%,
        #d1b262 36%,
        #dcc074 100%
      );
      border-radius: 4px;

      .card-left-top {
        display: flex;
        align-items: center;
        img {
          height: 48px;
          width: 48px;
          margin-right: 8px;
        }
      }
      .card-left-bot {
        display: flex;
        align-items: center;
        border-top: 1px solid #ffffff;
        line-height: 48px;
      }
    }
    .card-right {
      height: 130px;
      width: 50%;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.08);
    }
  }
  .cen-form {
    align-items: flex-start;
    margin-top: 34px;
    .item {
      width: 50%;
      margin-bottom: 24px;
      .label {
        display: inline-block;
        width: 160px;
        text-align: right;
        margin-right: 24px;
      }
    }
  }
}
</style>