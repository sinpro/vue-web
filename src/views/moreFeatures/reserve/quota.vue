<template>
    <div>
        <!-- 未预约 -->
        <div v-show="state=='1'">
            <el-form ref="formData" :model="formData" :rules="formRules" label-width="312px" class='mt20'>
                <el-form-item label="预约网点：" prop="bankPlace">
                    <el-input v-model="formData.bankPlace" placeholder="请输入预约网点"></el-input>
                    <el-button type="text" class="ml10" @click="outletsFlag = true">选择网点</el-button>
                </el-form-item>
                <el-form-item label="预约电话：" prop="phone">
                    <el-input v-model="formData.phone" placeholder="请输入预约电话"></el-input>
                </el-form-item>
                <el-form-item label="网点地址：" prop="place">
                    <el-input v-model="formData.place" placeholder="请输入网点地址"></el-input>
                </el-form-item>
                <el-form-item label="营业时间：" prop="time">
                    <el-select v-model="formData.time" placeholder="请选择">
                        <el-option v-for="(account, index) in numList" 
                            :key='index'
                            :label="account.label " 
                            :value="account.val"> 
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="预约时间：" prop='time1'>
                    <el-date-picker v-model="formData.time1" placeholder="选择日期" type="month" :clearable='false'>
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="预约手机号：" prop='telphone'>
                    <el-input v-model="formData.telphone" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="取现金额：" prop='telphone'>
                    <el-input v-model="formData.telphone" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="用途：" prop='telphone'>
                    <el-input v-model="formData.telphone" placeholder="请输入"></el-input>
                </el-form-item>
            </el-form>
            <el-row class="tc mtb30">
                <el-button type="primary" @click="submit">提交</el-button>
            </el-row>
        </div>
        <!-- 预约成功 -->
        <div v-show="state=='3'">
            <div class='success_icon'>
              <p class='el-icon-success p_icon'></p>
              <p class='p1_icon'>预约成功</p>
              <p class='p2_icon'>您的预约申请已提交成功，请于2020-01-04 09:00-11:00凭预约码123456到简阳农商银行老君分理处支行办理</p>
            </div>
            <el-row class="tc mtb30">
                <el-button type="primary" @click="steps=1">确定</el-button>
            </el-row>
        </div>
        <!-- 已预约 -->
        <div v-show='state=="2"'>
            <p class='title_p'>当前已有预约信息，请先办理后再新增预约</p>
            <title-bar title="信息查询"></title-bar>
            <div class="cont flex">
                <ul class="ul1 cp3 f16 lh16 tar">
                    <li>预约码</li>
                    <li>预约金额</li>
                    <li>取现用途</li>
                    <li>预约办理时间</li>
                    <li>预约手机号</li>
                </ul>
                <ul class="ul2 cp1 f16 lh16">
                    <li>1234</li>
                    <li>67890</li>
                    <li>10,000.00元</li>
                    <li>021-04-21   11:00-12:00</li>
                    <li>10,000.00元</li>
                </ul>
                <ul class="ul3 cp3 f16 lh16 tar">
                    <li>预约网点</li>
                    <li>网点电话</li>
                    <li>网点地址</li>
                    <li>营业时间</li>
                    <li>预约申请时间</li>
                </ul>
                <ul class="ul4 cp1 f16 lh16">
                    <li>51413</li>
                    <li>北京易诚有限公司</li>
                    <li>四川省简阳市老君乡规划街54号</li>
                    <li>夏季：8:30-18:00  冬季8:30-17:30</li>
                    <li>2020-10-10  12:20:12</li>
                </ul>
            </div>
            <el-row slot="footer" class="dialog-footer tc">
                <el-button type="primary" class="mt56" @click="revoke">撤销</el-button>
            </el-row>
        </div>
        <!-- 撤销结果 -->
        <div v-show="state=='4'">
            <div class='success_icon'>
              <p class='el-icon-success p_icon'></p>
              <p class='p1_icon'>撤销成功</p>
            </div>
            <el-row class="tc mtb30">
                <el-button type="primary" @click="steps=1">重新预约</el-button>
            </el-row>
        </div>
        <!-- 网点查询   -->
    <outlets-list v-model="outletsFlag" @accoutConfirm='accoutConfirm'></outlets-list>
    </div>
</template>

<script>
import OutletsList from "../components/outletsList"; //网点查询
    export default {
        components: {
          OutletsList,
        },
        data() {
            return {
                state:'1',//预约成功 2 未预约 1
                outletsFlag: false,
                numList:[],
                formData: {
                    bankPlace:'',
                    phone:'',
                    place:'',
                    time:'',
                    time1:'',
                    telphone:'',
                },
                formRules: {
                },
            }
        },
        mounted() {
            console.log('22')
        },
        methods: {
            //选择网点
            accoutConfirm(acctObj) {
                console.log(acctObj)
            //   this.formData.transOutName = acctObj.acctName;
            //   this.formData.transOutAlise = acctObj.acctAlise;
              this.formData.bankPlace = acctObj.acctNo;
            //   this.formData.transOutBalance = acctObj.balance;
            },
            //提交
            submit(){
                this.state=3
            },
            //撤销
            revoke(){
                
            },
        },
    }
</script>

<style lang="scss">
.title_p{
    margin-left: 617px;
    margin-top: 10px;
    margin-bottom: -20px;
    width: 304px;
	height: 17px;
	font-family: PingFang-SC-Regular;
	font-size: 16px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #1b1b1b;
}
.success_icon{
    width: 557px;
    // height: 211px;
    text-align: center;
    margin-left: 198px;
    margin-top: 60px;
    line-height: 32px;
}
.p_icon{
    color: #059c5d;
    font-size: 51px;
}
.p1_icon{
    font-family: PingFang-SC-Bold;
    font-size: 22px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #1b1b1b;
}
.p2_icon{
    font-family: PingFang-SC-Light;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #999999;
}
.cont {
  >ul>li {
    list-style: none;
  }
  .ul1 {
    margin-left: 66px;
    >li+li {
      margin-top: 23px;
    }
    margin-right: 22px;
    width: 96px;
  }
  .ul2 {
    >li+li {
      margin-top: 23px;
    }
    width: 208px;
  }
  .ul3 {
    margin-left: 140px;
    >li+li {
      margin-top: 23px;
    }
    margin-right: 22px;
    width: 96px;
  }
  .ul4 {
    margin-right:32px;
    >li+li {
      margin-top: 23px;
      width:261px;
    }
  }
}
</style>