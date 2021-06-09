<template>
  <div class="openResult">
    <div class="tac">
      <i class="el-icon-success cg iClass"></i>
    </div>

    <p class="f22 tac">开通成功</p>
    <div class="flex ulClass f16 lh16 cp3" :class="ulClass2+B2BOpenManage.isFix">
      <ul v-if="B2BOpenManage.isFix=='0'">
        <li>签约账号：</li>
      </ul>
      <ul class="w240" v-if="B2BOpenManage.isFix=='0'">
        <li>8888 0009 9900 2122 ｜别名</li>
      </ul>
      <ul>
        <li>单笔支付限额：</li>
      </ul>
      <ul class="w150">
        <li>50,000.00元</li>
      </ul>
      <ul>
        <li>日累计支付限额：</li>
      </ul>
      <ul>
        <li>100,000.00元</li>
      </ul>
    </div>
    <div class="tac mt56">
      <el-button type="primary" @click.native="goPayManage">完成</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        B2BOpenManage: '',
        ulClass2:'ulClass2',
      }
    },
    methods: {
      goPayManage() {
        this.$router.push('/more/B2BPay/openPayManage')
      }
    },
    mounted() {
      this.B2BOpenManage = JSON.parse(window.sessionStorage.getItem('B2BOpenManage'));
    }
  }

</script>

<style lang="scss">
  .openResult {
    .ulClass {
      margin-left: 65px;
      margin-top: 22px;

      >ul>li {
        list-style: none;

        margin-bottom: 10px;
      }

      .w240 {
        width: 250px;
      }

      .w150 {
        width: 150px;
      }
    }

    .iClass {
      font-size: 52px;
      margin-top: 35px;
      margin-bottom: 15px;
    }
    .ulClass21{
        margin-left: 220px;
    }
  }

</style>
