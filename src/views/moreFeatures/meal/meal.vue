<template>
  <div class="accountQuery">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick"
      v-if="activeName=='payment1'||activeName=='payRecord'||activeName=='paymeal'">
      <el-tab-pane :cardList='cardList' @childFn='childFn' label="购买套餐" name="payment1"> </el-tab-pane>
      <el-tab-pane label="购买记录查询" name="payRecord"> </el-tab-pane>
      <el-tab-pane label="套餐明细查询" name="paymeal"> </el-tab-pane>
    </el-tabs>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'paymeal',
        activeName2: 'first',
        form: {
          name: '北京易诚互动网络技术股份有限公司',
          region: '全部',
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
        cardList: [
          {
            accuntNum: '424253152',
            accuntName: '北京易诚互动网络技术股份有限公司',
            balance: '6353253.00',
            bank: '简阳农商银行简阳农商银行',
            bankType: 'own',
            powerInfo: '1',
            sonAc: '1',
            isForeign: '0',
          },
          {
            accuntNum: '424253152',
            accuntName: '北京易诚互动网络技术股份有限公司',
            balance: '6353253.00',
            bank: '简阳农商银行简阳农商银行',
            bankType: 'other',
            powerInfo: '1',
            sonAc: '0',
            isForeign: '0',
          }
        ]
      };
    },
    mounted() {
      this.activeName = this.$route.name;
      console.log('111',this.activeName)
    },
    watch: {
      $route() {
        this.activeName = this.$route.name;
      },
    },
    methods: {
      //子组件想父组件传递参数 父组件接收
      childFn(payload){
        console.log(payload,'1111111111111')
        this.activeName = payload;
      },
      handleClick() {
        if (this.activeName == "payment1") {
          this.$router.push({
            path: "/more/meal/payment1",
          });
        } else if (this.activeName == "payRecord") {
          this.$router.push({
            path: "/more/meal/payRecord",
          });
        } else if (this.activeName == "paymeal") {
          this.$router.push({
            path: "/more/meal/paymeal",
          });
        }
      },




      onSubmit() {
        console.log('submit!');
      },
      //跳转到账户基本信息页面
      goManage(value) {
        window.sessionStorage.setItem('acInfo', JSON.stringify(value));
        this.$router.push('acQryBasicInfo')
      },
      //跳转到本行/他行明细页面
      goDetail(value,type) {
        window.sessionStorage.setItem('acInfoBank', JSON.stringify(value));
        this.$router.push(`acQryDetail${type}`)
      }
    }
  };

</script>
<style lang='scss'>
  .accountQuery {
    .box-card {
      width: 450px;
      margin-right: 30px;
      margin-top: 30px;

      .el-button {
        width: 20px;
      }
    }

    .flex {
      flex-wrap: wrap;
      width: 1000px;
    }

  }

</style>
