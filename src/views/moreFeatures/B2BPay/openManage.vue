<template>
  <div class="openManage">
    <title-bar title="网上支付管理"></title-bar>
    <div class="flex ulClass f16 lh16">
      <ul class="ul1 cp3 tar">
        <li>签约账号</li>
        <li>账户所属机构</li>
        <li>开通操作员编号</li>
        <li>单笔支付限额</li>
      </ul>
      <ul class="ul2 cp1">
        <li>8888 0009 9900 2122 ｜别名</li>
        <li>机构名称机构名称机构名称</li>
        <li>001</li>
        <li>50,000.00元</li>
      </ul>
      <ul class="ul3 cp3 tar">
        <li>账户名称</li>
        <li>开通时间</li>
        <li>开通操作员姓名</li>
        <li>日累计支付限额</li>
      </ul>
      <ul class="ul4 cp1">
        <li>成都运用</li>
        <li>2020-12-09 10:22:33</li>
        <li>张三</li>
        <li>100,000.00元</li>
      </ul>
    </div>
    <div class="tac">
      <el-button size="medium" @click.native="visible=true">撤销</el-button>
      <el-button size="medium" type="primary" @click.native="goFix">修改</el-button>
    </div>
    <MessageBox :visible="visible" title="您确定要撤销此账号的网上支付权限吗？" type="warning" @cancel="visible=false" @commit="withDraw">
      <p class="f16">
        <span class="cp3">签约账号：</span>
        <span class="cp1">8023 2333 8856 5600 44</span>
      </p>
    </MessageBox>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        visible: false,
        B2BOpenManage:'',
      }
    },
    methods: {
        goFix(){
            this.$router.push('/more/B2BPay/openPayManage/openPay')
        },
      withDraw() {
        this.$MessageWarn({
          type: "success",
          title: "提醒",
          message: "撤销成功",
        });
        this.$router.push('/more/B2BPay/openPayManage')
      }
    },
    mounted(){
       this.B2BOpenManage=JSON.parse(window.sessionStorage.getItem('B2BOpenManage'))
    }
  }

</script>

<style lang="scss">
  .openManage {
    .ulClass {
      margin-top: 15px;
      margin-left: 52px;
      margin-bottom: 56px;

      >ul>li {
        list-style: none;
      }

      >ul>li~li {
        margin-top: 22px;
      }

      .ul1,
      .ul3 {
        margin-right: 20px;
      }

      .ul2 {
        width: 334px;
      }
    }
  }

</style>
