<template>
  <div class="electricity-pay">
    <div v-if="steps=='1'">
      <!-- 常用户号 -->
      <el-row v-show="state=='1'">
        <span>常用户号</span>
        <el-button class="setting-button" @click="steps='3'">编辑</el-button>
        <!--户号卡片 -->
        <div style='width:944px'>
          <el-row :gutter="24" style='padding-right:0'>
            <el-col :span="1">
              <div class="el-icon-caret-left Carousel_icon" @click="setActiveItem(-1)"></div>
            </el-col>
            <el-col :span="22" style='padding-left:0;padding-right:0'>
              <el-carousel style='width:890px' indicator-position="none" :loop='false' :autoplay='false' arrow='always' ref="carousel">
                  <el-carousel-item class="flex" name='index' v-for="(item, index) in carouselList" :key="index">
                    <div v-for="(carouse, idx) in item" class="card-number" :key="idx">
                      <p class="pb10">{{carouse.name}}</p>
                      <div class="f12">
                        <span>{{carouse.amount}}</span>
                        <el-button class="common fr">{{carouse.type}}</el-button>
                      </div>
                    </div>
                  </el-carousel-item>
              </el-carousel>
            </el-col>
            <el-col :span="1" style='padding-left:0'>
              <div class="el-icon-caret-right Carousel_icon" @click="setActiveItem(1)"></div>
            </el-col>
          </el-row>
        </div>
      </el-row>
      <div class="tc mt20">
        <el-tabs v-model="activeName" type="card"  @tab-click="handleClick">
          <el-tab-pane label="普通电表" name="common" >
          </el-tab-pane>
          <el-tab-pane label="智能电表" name="intellect">
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="mt30">
        <el-form :model="formData" label-position="right" :rules="rules" ref="formData" label-width="350px">
          <el-form-item label="缴费户号：" prop="paymentNumber">
            <el-input v-model="formData.paymentNumber"></el-input>
            <el-tooltip placement="top" effect="dark">
              <div slot="content">
                如何获取电力户号？<br/>方法1：在电力公司提供的电费发票上查询；<br/>方法2：拨打电力公司客服热线，凭户名、地址查询；<br/>以上方式均仅供参考，具体按照当地电力公司要求方式查询。
              </div>
              <el-button class='popover1'>?</el-button>
            </el-tooltip>
          </el-form-item>
        </el-form>        
      </div>      
      <div class="mt30 tc">
          <el-button type="primary" @click="steps='2'">确认</el-button>  
      </div> 
    </div>

    <div v-if="steps=='2'">
      <div>
        <title-bar title="缴费信息"></title-bar>
        <div class="cont flex">
          <ul class="ul1 cp3 f16 lh16 tar">
            <li>缴费户号</li>
            <li>户名</li>
            <li>缴费单位</li>
          </ul>
          <ul class="ul2 cp1 f16 lh16">
            <li>13212345641313121</li>
            <li>北京易诚互动网络有限公司</li>
            <li>四川电力公司</li>
          </ul>
          <ul class="ul3 cp3 f16 lh16 tar">
            <li>应缴金额</li>
            <li>用户地址</li>
          </ul>
          <ul class="ul4 cp1 f16 lh16">
            <li>100,000.00元</li>
            <li>北京易诚四川省成都市锦江区牛市口通源街588号5-3-2001互动网络有限公司</li>
          </ul>
        </div>
      </div>
      <div>
        <title-bar title="付款人信息"></title-bar>
        <el-form :model="payeeFormData" :rules="payeeRules" ref="payeeFormData" class="mt20" label-width="350px">
          <el-form-item label="付款账户：" prop="payeeAcctNo">
            <el-select v-model="payeeFormData.payeeAcctNo">
              <el-option label="账户一" value="1"></el-option>
              <el-option label="账户二" value="2"></el-option>
              <el-option label="账户三" value="3"></el-option>
            </el-select>
            <p class="lh16 mt12 ml16">可用余额:<span class='money'>10,000元</span></p>
          </el-form-item>
          <el-form-item v-if="cardType=='smart'" label="手机号码：" prop="mobile">
            <el-input v-model="payeeFormData.mobile" placeholder="请输入手机号码"></el-input>
          </el-form-item>
          <el-form-item label="缴纳金额：" prop="payAmount">
            <el-input v-model="payeeFormData.payAmount" placeholder="请输入缴纳金额"></el-input>
            <p class='p2'>最低缴费金额{{minMoney}}元，<span class='p_a' @click='min_Money'>自动填入</span></p>
          </el-form-item>
          <el-form-item label="备注：">
            <el-input v-model="payeeFormData.remark" placeholder="请输入"></el-input>
          </el-form-item>
        </el-form>    
        <div class="tc">
          <el-button size='medium' @click="steps='1'">上一步</el-button>
          <el-button size='medium' type="primary">缴费</el-button>
        </div>  
      </div>
    </div>

    <div v-if="steps == '3'">
        <title-bar title="常用户号设置"></title-bar>
        <div>
             <el-checkbox-group v-model="checkList">
                <div v-for="(carouse, idx) in carList" class="card-number fl" :key="idx">
                    <el-checkbox :label="carouse.type">
                        <p class="pb10">{{carouse.name}}</p>
                        <div class="f12">
                            <span>{{carouse.amount}}</span>
                            <el-button class="common fr">{{carouse.type}}</el-button>
                        </div>
                    </el-checkbox>
                </div>
             </el-checkbox-group>
        </div>
        <div class="tc clearboth pt30 mb56 ">
            <el-button size='medium' @click="steps='1'">返回</el-button>
            <el-button size='medium' type="danger">删除</el-button>
        </div>
    </div>
    <div class='wPro' v-show="steps=='1' || steps=='2'">
      <p>温馨提示：</p>
      <p>1.智能电卡支持四川省各地区的智能IC卡远程下发业务，充值金额在支付成功1小时内下发至充值账户；</p>
      <p>2.普通电表支持各地区抄表（后付费模式）的电费缴纳；</p>
      <p>3.缴费成功后提供缴费回单，若需要打印发票请前往所在的电力部门营业厅。</p>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        activeName:'common',
        state:'1',//是否有常用户号 0 无 1 有
        cardType:"general",
        steps:'1',
        carouselList:[],
        checkList:[],
        carList:[{name: '成都天赢*****有限公司',
           amount:'2000000000',
           type:'普通1',
          },
          {name: '成都天赢*****有限公司',
           amount:'2000000000',
           type:'普通2',
          },
          {name: '成都天赢*****有限公司',
           amount:'2000000000',
           type:'普通3',
          },
          {name: '成都天赢*****有限公司',
           amount:'2000000000',
           type:'普通4',
          },
          {name: '成都天赢*****有限公司',
           amount:'2000000000',
           type:'普通5',
          },
          {name: '成都天赢*****有限公司',
           amount:'2000000000',
           type:'普通6',
          },
          {name: '成都天赢*****有限公司',
           amount:'2000000000',
           type:'普通7',
          },
          {name: '成都天赢*****有限公司',
           amount:'2000000000',
           type:'普通8',
          },
          {name: '成都天赢*****有限公司',
           amount:'2000000000',
           type:'普通9',
          },
          {name: '成都天赢*****有限公司',
           amount:'2000000000',
           type:'普通10',
          }],
        activeIndex: 0,
        formData:{
          paymentNumber:""
        },
        rules:{
          paymentNumber: [
            { required: true, message: '请输入缴费户号', trigger: 'blur' },
          ],
        },
        payeeFormData:{
          payeeAcctNo:'',
          mobile:'',
          payAmount:'',
          remark:'',
        },
        payeeRules:{
          payeeAcctNo:[
            { required: true, message: '请选择付款账号', trigger: 'change' },
          ],
          mobile:[
            { required: true, message: '请输入手机号码', trigger: 'blur' },
          ],
          payAmount:[
            { required: true, message: '请输入缴纳金额', trigger: 'blur' },
          ]
        },
        minMoney:'190.41'
      }
    },
    created () {
      this.getCommUse();
    },
    mounted () {
      
    },
    methods: {
      //普通电表和智能电表切换
      handleClick(tab, event) {
        console.log('1222', tab, event);
      },

      getCommUse(){
        let innerArry = []
        this.carList.forEach((item, index) => {
          if(index % 4 != 0){
            innerArry.push(item);
          }else{
            if(innerArry.length > 0){
              this.carouselList.push(innerArry)
            }
            innerArry = [];
            innerArry.push(item);
          }
        })
        if(innerArry.length > 0){
          this.carouselList.push(innerArry)
        }
        console.log('111',this.carouselList)
      },

      setActiveItem(index){
        this.activeIndex = this.activeIndex + index;
        this.activeIndex = this.activeIndex < 0 ? 0 : 
          this.activeIndex >= this.carouselList.length ? this.carouselList.length - 1 : this.activeIndex;
        this.$refs['carousel'].setActiveItem(this.activeIndex);
      },
      backFirst(data){
        console.log("data===============>",data)
      },
      handleClick(){

      },
      //点击自动填入最小金额
      min_Money(){
        this.payeeFormData.payAmount = this.minMoney
        console.log('1111',this.payeeFormData.payAmount)
      },
    }
  }
</script>
<style lang="scss">
  .electricity-pay{
    .el-carousel__container{
      height: 100px !important;
    }
    .el-carousel__arrow{
      display: none;
    }
    .el-checkbox__input{
        margin-bottom: 30px;
    }
    .setting-button{
      width: 60px;
      height: 28px;
      margin-left: 85%;
      padding: 0 !important;
    }
    .card-number{
      display: inline-block;
      // border:1px solid #f0f0f0;
      box-shadow: 0px 2px 9px 0px 
	    	rgba(0, 0, 0, 0.08);
	    border-radius: 4px;
      width:200px;
      height:80px;
      background-color: #f6f6f6;
      // padding:15px;
      margin-top:20px;
      margin-right: 20px;
    }
    .arrow{
      text-align:center;
      margin-top:10px;
      font-size:30px;
    }
    .common{
      width:50px;
      font-size:12px;
      height: 10px;
      height:25px;
      padding: 0 !important;
      line-height: 25px;
      border-radius: 13px;
    }
  }
  .popover1{
    width: 20px;
    height: 21px;
    border-radius: 10px;
    padding: 0;
    margin-left: 10px;
  }
  .Carousel_icon{
      width:16px;
      height:80px;
      line-height: 5;
      color: #059C5D;
      cursor: pointer;
  }
  .el-col-1 {
      width: 3.16667%;
  }
  .cont {
      >ul>li {
        list-style: none;
      }
      .ul1 {
        margin-left: 99px;
        >li+li {
          margin-top: 23px;
        }
        margin-right: 22px;
        width: 64px;
      }
      .ul2 {
        >li+li {
          margin-top: 23px;
        }
        width: 192px;
      }
      .ul3 {
        margin-left: 188px;
        >li+li {
          margin-top: 23px;
        }
        margin-right: 22px;
        width: 64px;
      }
      .ul4 {
        margin-right: 34px;
        >li+li {
          margin-top: 23px;
          width:259px
        }
      }
    }
  .p1 {
    	width: 170px;
    	height: 15px;
    	font-family: PingFang-SC-Regular;
    	font-size: 14px;
    	font-weight: normal;
    	font-stretch: normal;
    	// line-height: 16px;
    	letter-spacing: 0px;
    	color: #1b1b1b;
    }
    .p1 .text-style-1 {
    	font-family: PingFang-SC-Regular;
    	font-size: 14px;
    	font-weight: normal;
    	letter-spacing: 0px;
    	color: #c6a34f;
    }
    .p2{
      width: 220px;
	    height: 15px;
	    font-family: PingFang-SC-Regular;
	    font-size: 14px;
	    font-weight: normal;
	    font-stretch: normal;
	    letter-spacing: 0px;
	    color: #1b1b1b;
    }
    .p_a{
      width: 54px;
	    height: 14px;
	    font-family: PingFang-SC-Regular;
	    font-size: 14px;
	    font-weight: normal;
	    font-stretch: normal;
	    letter-spacing: 0px;
	    color: #059c5d;
      cursor: pointer;
    }
</style>
