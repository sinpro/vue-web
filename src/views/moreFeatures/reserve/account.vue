<template>
  <div class="accountQuery">
    <el-tabs v-model="activeName" type="card"  @tab-click="handleClick">
      <el-tab-pane label="预约开户申请" name="payment" >
          <div v-show='accState==1'>
            <div class="ulClass">
              <span class="">账户类型：</span>
              <ul>
                <li v-for="(value,index) in typeList" :key="index" @click="getType(index)"
                  :class="isActive==index?'borderClass':''">{{value.label}}
                  <img :class="isActive==index?'imgrClass':'imgrClassNo'"
                    src="../../../images/investmentFinancing/greentriangle.png">
                  <i :class="isActive==index?'iconClass':'iconClassNo'" class="el-icon-check"></i>
                </li>
              </ul>
            </div>
            <acc-Tips :type='type' @childFn='childFn'></acc-Tips>
          </div>
          <div v-show='accState==2'>
            <acc-Input></acc-Input>
          </div>
      </el-tab-pane>
      <el-tab-pane label="申请进度查询" name="payrecord">
        <progress-Select></progress-Select>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import accTips from './accTips'
import accInput from './accInput'
import progressSelect from './progressSelect'
  export default {
    components: {
        accTips,
        accInput,
        progressSelect
    },
    data() {
      return {
        type:'1',
        isActive: 0,
        accState:'1',//预约开户提示页面，录入，结果
        activeName: 'payment',
        activeName2: 'first',
        form: {
          name: '北京易诚互动网络技术股份有限公司',
          region: '全部',
          date1: '',
        },
        cardList: [{
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
        ],
        typeList: [{
            value: '0',
            label: '基本户',
          },
          {
            value: '1',
            label: '一般户',
          },
          {
            value: '2',
            label: '专用户',
          },
          {
            value: '4',
            label: '临时户',
          },
        ],
      };
    },
    methods: {
      //子组件想父组件传递参数 父组件接收 
      //展示预约开户提示页面，录入，结果 
      childFn(payload){
        console.log(payload,'1111111111111')
        this.accState = payload;
      },
      //根据选择账户类型展示对应信息
      getType(index){
        console.log(index)
        this.isActive = index
        this.type = index=='0'?'1':index=='1'?'2':index=='2'?'3':'4'
        console.log('11',this.type)
      },

      handleClick(tab, event) {
        console.log('1222', tab, event);
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
  // .acctype{
  //     margin-left: 30px;
  //     display: inline-block;
  // }
  // .type{
  //     width: 85px;
  //     height: 36px;
  //     background-color: #ffffff;
  //     border-radius: 2px;
  //     border: solid 1px #059c5d;
  //     text-align: center;
  //     line-height: 36px;
  //     color: #059C5d;
  // }
  .ulClass {
      display: flex;
      margin-top: 30px;
      box-sizing: border-box;

      >span {
        display: inline-block;
        width: 90px;
        text-align: right;
        text-align: center;
        padding-top: 12px;
        padding-bottom: 12px;
        border: 1px solid #ffffff;

      }

      >ul {
        display: flex;

        >li {
          width: 84px;
          cursor: pointer;
          margin-left: 12px;
          text-align: center;
          padding-top: 12px;
          padding-bottom: 12px;
          position: relative;
          border: 1px solid #ffffff;

          img {
            width: 23px;
            height: 23px;
          }

          .imgrClass {
            position: absolute;
            bottom: -1px;
            right: -1px;
          }

          .iconClass {
            color: #ffffff;
            font-size: 11px;
            position: absolute;
            bottom: -1px;
            right: 1px;
          }

          .imgrClassNo,
          .iconClassNo {
            display: none;
          }
        }
        .borderClass {
          border: 1px solid #059c5d;
          border-radius: 2px;
        }
      }
    }
</style>
