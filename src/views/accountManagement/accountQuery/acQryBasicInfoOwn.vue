<template>
  <div class="acQryBasicInfo">
    <el-button class="unBand" type="text" @click.native="visibleAcc=true">解绑账户</el-button>
    <el-tabs v-model="activeName">
      <el-tab-pane label="本行账户详情  " name="first">
        <div class="flex mainCard" :class="mainCard2">
          <div class="infoCard" :class="masterCard">
            <div class="flex topHalf">
              <div>
                <img src="../../../images/accountManage/iconBankLogo.png">
              </div>
              <div>
                <p class="f18 cf">634500 **** 0098</p>
                <p class="f16 cf anotherName" v-if='inputSwitch'>
                  <span>设置别名</span><img v-if='inputSwitch' @click="changeinputSwitch"
                    src="../../../images/accountManage/iconChangeName.png">
                </p>
                <el-input class="anotherNameInput" v-else v-model="item.name" ref="ipt" placeholder="设置别名"
                  onKeyUp="if(window.event.keyCode==13) this.blur()" @blur="changeInput" maxlength="10"></el-input>
              </div>
            </div>
            <span class="f16 cf defaultAccBtnTxt" v-if="isCard!='2'&&isCard!='3'">默认账户</span>
            <el-switch v-if="isCard!='2'&&isCard!='3'" class="defaultAccBtn" v-model="isDefault" active-color="#059c5d"
              inactive-color="#121212">
            </el-switch>
            <img v-if="isCard=='2'" class="iconMainCard" src="../../../images/accountManage/iconMainCard.png">
            <img v-if="isCard=='3'" class="iconMainCard" src="../../../images/accountManage/iconBelongCard.png">

            <span class="f14 cf Right">权限：查询、支付</span>
            <div class="greenbar">
              <div class="littlebar"></div>
              <div class="bgg cf f14">
                正常
              </div>
            </div>
          </div>
          <div v-if="isCard=='0' || isCard=='1'" class="infoCard2" :class="infoCard22">
            <p class="f20 money lh20 infoCard2Money">765,875,987.00<img v-if="activeName"
                src="../../../images/accountManage/iconEye.png"><img v-else
                src="../../../images/accountManage/iconEyeClosed.png"></p>
            <p class="f16 cp3 lh16 yue" v-if="isCard=='0'">余额(元)</p>
            <p class="f16 cp3 lh16 yue" v-if="isCard=='1'">现钞余额(美元)</p>
            <p class="f16 cp3 lh16 canyue">可用余额：298,985,987.00元</p>
          </div>

          <!-- 外币 -->
          <div class="infoCard2 infoCard3" v-if="isCard=='1'">
            <p class="f20 money lh20 infoCard2Money">765,875,987.00</p>
            <p class="f16 cp3 lh16 yue">现汇余额(美元)</p>
            <p class="f16 cp3 lh16 canyue">可用余额：298,985,987.00元</p>
            <div class="shandowDiv">
              <div></div>
            </div>
          </div>

        </div>


        <div v-if="isCard=='0'||isCard=='1'" class="accInfo">
          <div class="flex f16">
            <p class="cp3 tar">户名</p>
            <p class="cp1 tal">北京易诚互动科技有限公司北京易诚
              互动科技有限公司北京易诚互动科技
              有限北京易诚互动科技有限公司</p>
            <p class="cp3 tar">开户机构</p>
            <p class="cp1 tal">简阳农商银行三岔湖支行</p>
          </div>
          <div class="flex f16 lh16">
            <p class="cp3 tar">账户类型</p>
            <p class="cp1 tal">基本户</p>
            <p class="cp3 tar">开户日期</p>
            <p class="cp1 tal">2020-10-10</p>
          </div>
        </div>
        <ul v-if="isCard=='2'||isCard=='3'" class="accInfo2 flex">
          <li class="f16 lh16 cp3 tar">开户机构</li>
          <li class="f16 cp1 lh16 tal">简阳农商银行营业部简阳农商银</li>
          <li class="f16 lh16 cp3 tar">持卡人</li>
          <li class="f16 cp1 lh16 tal">*小虎</li>
        </ul>
        <div v-if="isCard=='2'" class="tc marginTop56">
          <el-button type="primary" class="cb" @click.native="centerDialogVisibleBlon=true">查询附属卡</el-button>
        </div>
        <div v-if="isCard=='3'" class="tc marginTop56">
          <el-button type="primary" class="cb" @click.native="centerDialogVisibleMain=true">查询主卡</el-button>
        </div>
      </el-tab-pane>
    </el-tabs>



    <el-tabs v-model="activeName2">
      <el-tab-pane :label="label1" name="first" v-if="acInfo.sonAc==='1'">
        <div v-if="isCard=='0'||isCard=='1'">
          <p class="f18 cg leftBar lh18">活期子账户(4)</p>
          <div class="cardList flex">
            <div class="cardItem flex" v-for="(value,key) in 7" :key="key" :class="key%3==2?'':'marginRigh16'">
              <div>
                <p class="f16 lh16 cp3">账号</p>
                <p class="f16 lh16 cp3">余额(元）</p>
              </div>
              <div class="tar">
                <p class="f16 lh16 cp1">765487 **** 9865</p>
                <p class="f20 lh20 money">109,983,987.00</p>
              </div>
            </div>
          </div>
          <div class="More tac">
            <el-button icon="el-icon-arrow-down" type="text" class="f16 Morebtn">查看更多</el-button>
          </div>
          <!-- <div class="More tac">
          <el-button icon="el-icon-arrow-up" type="text" class="f16 Morebtn">收起</el-button>
         </div> -->

          <p class="f18 cg leftBar lh18">定期子账户(4)</p>
          <div class="cardList flex">
            <div class="cardItem cardItem2 flex" v-for="(value,key) in 7" :key="key"
              :class="key%3==2?'':'marginRigh16'">
              <div class="marginL12">
                <p class="f16 lh16 cp3">账号</p>
                <p class="f16 lh16 cp3">余额(元）</p>
              </div>
              <div class="tar marginR12">
                <p class="f16 lh16 cp1">765487 **** 9865</p>
                <p class="f20 lh20 money">109,983,987.00</p>
              </div>
              <div class="bottomHalf">
                <div class="f16 lh16 cp1">
                  <span>36个月</span>
                  <span>2.33%</span>
                  <span>2020-01-01</span>
                </div>
                <div class="f16 lh16 cb3">
                  <span>存期</span>
                  <span>利率</span>
                  <span>起息日</span>
                </div>
              </div>
            </div>
          </div>


          <!-- <div class="More tac">
          <el-button icon="el-icon-arrow-down" type="text" class="f16 Morebtn">查看更多</el-button>
          </div> -->
          <div class="More tac">
            <el-button icon="el-icon-arrow-up" type="text" class="f16 Morebtn">收起</el-button>
          </div>
        </div>



        <!-- 签约信息 -->
        <div v-else class="signInfoList">
          <div class="signInfo" v-for="(value,key) in 3" :key="key">
            <span class="f18 lh18 cp1">柜面</span>
            <div class="infoList flex">
              <ul class="f16 lh16 cp3 tar ul1">
                <li>单笔取现限额</li>
                <li>单笔转账限额</li>
                <li>当日累计取现限额</li>
                <li>当日累计转账限额</li>
                <li>当月累计取现限额</li>
              </ul>
              <ul class="f16 lh16 cp1 ul2">
                <li>10,000.00元</li>
                <li>10,000.00元</li>
                <li>100,000,000,000.00元</li>
                <li>100,000,000,000.00元</li>
                <li>100,000,000,000.00元</li>
              </ul>
              <ul class="f16 lh16 cp3 tar ul3">
                <li>当月累计转账限额</li>
                <li>当季累计取现限额</li>
                <li>当季累计转账限额</li>
                <li>当年累计取现限额</li>
                <li>当年累计转账限额</li>
              </ul>
              <ul class="f16 lh16 cp1 ul4">
                <li>100,000,000,000.00元</li>
                <li>100,000,000,000.00元</li>
                <li>100,000,000,000.00元</li>
                <li>100,000,000,000.00元</li>
                <li>100,000,000,000.00元</li>
              </ul>
            </div>
          </div>
        </div>




      </el-tab-pane>
      <el-tab-pane :label="label2" name="first1" v-if="acInfo.powerInfo==='1'">




        <!-- 授权信息 -->
        <div class="powerInfoList" v-if="isCard=='0'||isCard=='1'">
          <!-- 有支付权限 -->
          <div class="powerInfo" v-for="(value,key) in cardListPowerList" :key="value.num+key">
            <div class="flex topHalf">
              <div>
                <img src="../../../images/accountManage/iconBankLogo.png">
              </div>
              <div>
                <p class="f18 lh18 cp1">中国建设银行</p>
                <span class="f18 lh18 cp1 span1 ">623176 **** 0098</span>
                <span class="f16 lh16 span2">账户权限：</span>
                <span class="f16 lh16">查询、支付</span>
              </div>
            </div>
            <div class="bottomHalf flex">
              <ul class="ul1 tar f16 lh16 cp3">
                <li>收款户名</li>
                <li>单笔支付限额</li>
                <li>日累计支付限额</li>
                <li>日累计笔数上限</li>
              </ul>
              <ul class="ul2 f16 lh16 cp1">
                <li>{{value.accuntName}}</li>
                <li>10,000.00元</li>
                <li>100,000,000.00元</li>
                <li>1,000笔</li>
              </ul>
              <ul class="ul3 tar f16 lh16 cp3">
                <li>月累计支付限额</li>
                <li>月累计笔数上限</li>
                <li>协议生效日期</li>
                <li>协议失效日期</li>
              </ul>
              <ul class="ul4 f16 lh16 cp1">
                <li>100,000,000.00元</li>
                <li>100,100笔</li>
                <li>2020-09-09</li>
                <li>2020-09-18</li>
              </ul>
            </div>
            <el-button class="w80" @click.native="unBand(value.num)">解约</el-button>
          </div>
          <!-- 无支付权限 -->
          <div class="powerInfo powerInfo2" v-for="(value,key) in cardListPowerList2" :key="value.num+key+1">
            <div class="flex topHalf topHalf2">
              <div>
                <img src="../../../images/accountManage/iconBankLogo.png">
              </div>
              <div class="noPower">
                <span class="f18 lh18 cp1">中国建设银行</span>
                <span class="f16 lh16 span2">账户权限：</span>
                <span class="f16 lh16">查询、支付</span>
              </div>
            </div>
            <div class="bottomHalf bottomHalf2 flex">
              <span class="f16 lh16 cp3">查询人户名</span>
              <span class="f16 lh16 cp1">{{value.accuntName}}</span>
            </div>
            <el-button class="w80">解约</el-button>
          </div>
        </div>


        <!-- 关联账户 -->
        <div v-if="isCard=='2'||isCard=='3'">
          <p class="f18 cg leftBar lh18">主账户</p>
          <div class="belongCardMainCard">
            <div class="topHalf">
              <span class="f16 lh16 cp3 acc">账号</span>
              <span class="f16 lh16 cp1 accnum">623115 **** 9882</span>
            </div>
            <div class="bottomHalf">
              <span class="f16 lh16 cp2 compname">北京易诚互动网络技术有限公司</span>
            </div>
          </div>
          <p class="f18 cg leftBar lh18">子账户(4)</p>
          <div class="flex">
            <div class="belongCardMainCard belongCardBelongCard" v-for="(value,key) in 7" :key="key"
              :class="key%3==2?'':'marginR16'">
              <div class="topHalf">
                <span class="f16 lh16 cp3 acc">账号</span>
                <span class="f16 lh16 cp1 accnum">623115 **** 9882</span>
              </div>
              <div class="bottomHalf">
                <span class="f16 lh16 cp2 compname">北京易诚互动网络技术有限公司</span>
              </div>
            </div>
          </div>
        </div>



      </el-tab-pane>
    </el-tabs>
    <div class="tc marginTop56">
      <el-button type="primary" class="cb" @click.native="goBack">返回</el-button>
    </div>


    <el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
      <span>需要注意的是内容是默认不居中的</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 副卡弹框 -->

    <el-dialog :visible.sync="centerDialogVisibleBlon" width="640px" class="centerDialogVisibleBlon"
      :show-close="false">
      <p class="tac f18 lh18 cp1 mt20">附属卡</p>
      <div class="diaBelongCardList flex">
        <div class="diaBelongCard" v-for="(value,key) in 7" :key="key">
          <div class="topHalf flex">
            <ul class="f16 lh16 cp3">
              <li>卡号</li>
              <li>持卡人</li>
            </ul>
            <ul class="f16 lh16 cp1 tar ul2">
              <li>623115 **** 9882</li>
              <li>*晓明</li>
            </ul>
          </div>
          <div class="bottomHalf flex">
            <p class="f14 cp3 diaP">简阳农商行营业部简阳农商行营业部营业
              业部简阳农商行营业部</p>
          </div>
        </div>
      </div>
      <div class="tac centerDialogVisibleBlonBtn">
        <el-button type="primary" @click="centerDialogVisibleBlon = false">关闭</el-button>
      </div>
    </el-dialog>


    <!-- 主卡弹框 -->
    <el-dialog :visible.sync="centerDialogVisibleMain" width="400px" class="centerDialogVisibleMain"
      :show-close="false">
      <p class="tac f18 lh18 cp1 diaTittleP">主卡</p>
      <div class="diaBelongCardList flex">
        <div class="diaBelongCard">
          <div class="topHalf flex">
            <ul class="f16 lh16 cp3">
              <li>卡号</li>
              <li>持卡人</li>
            </ul>
            <ul class="f16 lh16 cp1 tar ul2">
              <li>623115 **** 9882</li>
              <li>*晓明</li>
            </ul>
          </div>
          <div class="bottomHalf flex">
            <p class="f14 cp3 diaP">简阳农商行营业部简阳农商行营业部营业
              业部简阳农商行营业部</p>
          </div>
        </div>
      </div>
      <div class="tac centerDialogVisibleBlonBtn">
        <el-button type="primary" @click="centerDialogVisibleMain = false">关闭</el-button>
      </div>
    </el-dialog>

    <!-- ******解绑账户***** -->
    <MessageBox :visible="visibleAcc" title="确认要解绑该账户吗？" type="warning" @cancel="visibleAcc=false"
      @commit="visibleAcc=false">
      <div class="tal"><span class="f16 lh24 cp2 mr15 ml30">账户</span><span class="f16 lh24 cp1">6210 9909 9843 8734
          9999</span></div>
      <div class="tal"><span class="f16 lh24 cp2 mr15 ml30">户名</span><span class="f16 lh24 cp1">北京易诚互动网络技术有限公司</span>
      </div>
      <div class="tal"><span class="f16 lh24 cp2 mr15 ml30">权限</span><span class="f16 lh24 cp1">查询</span></div>
    </MessageBox>
    <!-- ******解约***** -->
    <MessageBox :visible="visible" title="请选择需解约的权限" type="warning" @cancel="visible=false" @commit="unAgreementMeth()">
      <el-radio-group v-model="radio">
        <el-radio label="查询"></el-radio>
        <el-radio label="支付"></el-radio>
      </el-radio-group>
    </MessageBox>


  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first',
        activeName2: 'first1',
        isCard: '0', //账户卡0、外币1、关联卡主卡2、关联卡副卡3
        mainCard2: '',
        infoCard22: '',
        masterCard: '',
        label1: '',
        label2: '',
        acInfo: {},
        inputSwitch: true,
        visible: false,
        visibleAcc: false,
        radio: "1",
        item: {
          name: '',
        },
        isDefault: true,
        centerDialogVisible: false,
        centerDialogVisibleBlon: false, //副卡弹框
        centerDialogVisibleMain: false, //主卡弹框
        cardList: [{
            accuntNum: '424253152',
            accuntName: '北京易诚互动网络技术股份有限公司1',
            balance: '6353253.00',
            bank: '简阳农商银行简阳农商银行',
            bankType: 'own',
            powerInfo: '1', //权限，支付或者查询
            sonAc: '1',
            isForeign: '0',
            num: 1,
          },
          {
            accuntNum: '424253152',
            accuntName: '北京易诚互动网络技术股份有限公司2',
            balance: '6353253.00',
            bank: '简阳农商银行简阳农商银行',
            bankType: 'other',
            powerInfo: '1',
            sonAc: '0',
            isForeign: '0',
            num: 2,

          },
          {
            accuntNum: '424253152',
            accuntName: '北京易诚互动网络技术股份有限公司3',
            balance: '6353253.00',
            bank: '简阳农商银行简阳农商银行',
            bankType: 'other',
            powerInfo: '0',
            sonAc: '1',
            isForeign: '0',
            num: 3,

          },
          {
            accuntNum: '424253152',
            accuntName: '北京易诚互动网络技术股份有限公司4',
            balance: '6353253.00',
            bank: '简阳农商银行简阳农商银行',
            bankType: 'other',
            powerInfo: '0',
            sonAc: '0',
            isForeign: '1',
            num: 4,

          },
          {
            accuntNum: '424253152111111',
            accuntName: '北京易诚互动网络技术股份有限公司5',
            balance: '6353253.00',
            bank: '简阳农商银行简阳农商银行',
            bankType: 'own',
            powerInfo: '0',
            sonAc: '0',
            isForeign: '0',
            num: 5,

          },
        ]
      }
    },

    methods: {
      unBand(num){
        this.unAgreementVal=num;
        this.visible=true
      },
      unAgreementMeth(){
        console.log(this.unAgreementVal,this.radio)
        this.visible=false

      },
      // ******10个汉字20个英文******开始******
      //输入框字数限制
      ChangeWith() {
        let chineseWords = 10; //汉字个数
        let englishWords = 20; //字符个数
        let leng = this.validateTextLength(this.item.name);
        if (leng >= chineseWords) {
          this.$refs.ipt.maxLength = leng;
        } else {
          this.$refs.ipt.maxLength = englishWords;
        }
        if (leng == (chineseWords + 0.5)) {
          this.item.name = this.item.name.slice(0, this.item.name.length - 1)
        }
      },
      validateTextLength(value) {
        // 中文、中文标点、全角字符按1长度，英文、英文符号、数字按0.5长度计算
        let cnReg = /([\u4e00-\u9fa5]|[\u3000-\u303F]|[\uFF00-\uFF60])/g;
        let mat = value.match(cnReg);
        let length;
        if (mat) {
          length = mat.length + (value.length - mat.length) * 0.5;
          return length;
        } else {
          return value.length * 0.5;
        }
      },
      // ******10个汉字20个英文******结束******

      //*************输入框*******开始****
      getInfo() {
        // console.log( window.sessionStorage.getItem('acInfo'))
        this.acInfo = JSON.parse(window.sessionStorage.getItem('acInfo'));
        this.acInfo.sonAc === '1' && this.acInfo.powerInfo === '0' ? this.activeName2 = 'first1' : ''
      },
      changeInput() {
        this.inputSwitch = !this.inputSwitch;
        this.item.name == '' ? this.item.name = '' : ''
      },
      changeinputSwitch() {
        this.inputSwitch = !this.inputSwitch;
        this.$nextTick(() => {
          this.$refs.ipt.focus()
        }, 500)
      },
      //*************输入框*******结束****
      isForeignMeth() {
        if (this.isCard == '1') {
          this.mainCard2 = 'mainCard2';
          this.infoCard22 = 'infoCard22';
        } else {
          this.mainCard2 = '';
          this.infoCard22 = '';
        };
        if (this.isCard == '2' || this.isCard == '3') {
          this.masterCard = 'masterCard';
          this.label1 = '签约信息';
          this.label2 = '关联账户';

        } else {
          this.masterCard = '';
          this.label1 = '子账户';
          this.label2 = '授权信息';
        }

      },
      goBack() {
        this.$router.go(-1)
      },
      // unBand() {
      //   this.$confirm('<p class="f16 lh16 cp1 tal ml33" style="margin-left:33px;"><span class="f16 lh16 cp2 mr15">账户</span>6210 99  09 9843 8734 9999</p><p class="f16 lh16 cp1 tal" style="margin-left:33px;"><span class="f16 lh16 cp2 mr15">户名</span>北京易诚互动网络技术有限公司</p><p class="f16 lh16 cp1 tal" style="margin-left:33px;"><span class="f16 lh16 cp2 mr15">权限</span>查询</p>', '确认要解绑该账户吗？', {
      //     confirmButtonText: '确定',
      //     cancelButtonText: '取消',
      //     type: 'warning',
      //     center: true,
      //     dangerouslyUseHTMLString: true,
      //   }).then(() => {
      //     //接口，如果成功this.$message....
      //     this.$message({
      //       type: 'success',
      //       message: '解绑成功!'
      //     });
      //   })
      // }
    },
    computed: {
      cardListPowerList() {
        return this.cardList.filter((value) => {
          return value.powerInfo == '1'
        })
      },
      cardListPowerList2() {
        return this.cardList.filter((value) => {
          return value.powerInfo == '0'
        })
      },
    },
    mounted() {
      this.getInfo();
      this.isForeignMeth()
    }
  }

</script>
<style lang="scss">
  .acQryBasicInfo {
    position: relative;

    .mainCard {
      width: 628px;
      margin: 33px auto;

      .infoCard {
        width: 314px;
        height: 150px;
        background: url('../../../images/accountManage/iconCard0.png');
        position: relative;

        .topHalf {
          margin: 24px 0 0 16px;

          p {
            margin-left: 8px;
          }

          .anotherName {
            margin-left: 8px;

            img {
              vertical-align: middle;
              margin-left: 9px;
              cursor: pointer;

            }



          }

          .anotherNameInput {
            width: 190px;

            margin-left: 8px;

            .el-input__inner {
              height: 32px;
            }

          }

          .iconChangeName {
            width: 14px;
            height: 14px;
            display: inline-block;
            vertical-align: bottom;
            // margin: 2px 0 0 9px;
            // &::before{
            //   display: table;
            //   content: '';
            // }
          }

        }

        .defaultAccBtnTxt {
          position: absolute;
          left: 18px;
          bottom: 18px;
          line-height: 16px;
        }

        .defaultAccBtn {
          position: absolute;
          left: 92px;
          bottom: 15px;

        }

        .Right {
          position: absolute;
          line-height: 14px;
          right: 14px;
          bottom: 19px;
        }

        .iconMainCard {
          position: absolute;
          left: 19px;
          bottom: 13px;
        }
      }

      .infoCard2 {
        width: 314px;
        height: 130px;
        background-color: #ffffff;
        box-shadow: 0px 2px 9px 0px #00000014;
        border-radius: 0px 4px 4px 0px;
        margin-top: 10px;
        position: relative;

        .infoCard2Money {
          text-align: center;
          margin-top: 22px;

          img {
            margin-left: 11px;
          }
        }

        .yue {
          margin-top: 8px;
          text-align: center;
        }

        .canyue {
          margin-top: 24px;
          text-align: center;
        }
      }
    }

    .mainCard2 {
      width: 994px;

      .infoCard3 {
        position: relative;

        .shandowDiv {
          position: absolute;
          width: 20px;
          height: 130px;
          background: #ffffff;
          top: 0;
          left: -10px;

          >div {
            width: 1px;
            height: 96px;
            background-color: #f0f0f0;
            margin: 17px auto;
          }
        }
      }
    }

    .unBand {
      position: absolute;
      right: 26px;
      z-index: 9;
    }

    .greenbar {
      display: inline-block;
      position: absolute;
      right: -3px;
      top: 11px;
      border-radius: 4px 0px 0px 4px;
      z-index: 9;
    }

    .bgg {
      padding: 5px 9px 5px 8px;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      background-color: #c6a34f;
      line-height: 14px;
    }

    .littlebar {
      width: 0px;
      height: 0px;
      border-bottom: 3px solid #83641B;
      border-right: 3px solid transparent;
      margin-left: auto;
    }

    .accInfo {
      p {
        line-height: 24px;

      }

      width: 730px;
      margin: 0 auto 56px auto;

      >div:first-child>p:nth-child(even) {
        margin-bottom: 24px;
      }

      div>p:nth-child(2) {
        width: 256px;
        margin-right: 122px;
        line-height: 24px;
      }

      div>p:nth-child(odd) {
        width: 64px;
        margin-right: 23px;

      }

      >div:nth-child(1)>p:nth-child(4) {
        width: 176px;

      }
    }

    .leftBar {
      margin-bottom: 24px;
    }

    .cardList {
      flex-wrap: wrap;

      .cardItem {
        width: 304px;
        height: 103px;
        box-sizing: border-box;
        box-shadow: 0px 2px 9px 0px #00000014;
        border-radius: 8px;
        padding: 23px;
        margin-bottom: 16px;

        >div:nth-child(2) {
          margin-left: auto;
        }

        div:nth-child(1)>p+p {
          margin-top: 25px;
        }

        div:nth-child(2)>p+p {
          margin-top: 23px;
        }

      }

      .marginRigh16 {
        margin-right: 16px;
      }
    }

    .More {

      .Morebtn {
        span {
          margin-left: 14px !important;
        }
      }
    }

    .cardItem2 {
      height: 204px !important;
      flex-wrap: wrap;
      padding: 23px 11px 23px 11px !important;

      .marginL12 {
        margin-left: 12px;
      }

      .marginR12 {
        margin-right: 12px;
      }

      .bottomHalf {
        position: relative !important;
        z-index: 999 !important;
        width: 281px;
        height: 76px;
        margin-top: 23px;
        background: #f4eddc4d;
        border-radius: 2px;

        span {
          display: inline-block;
        }

        div>span:nth-child(1) {
          width: 77px;
        }

        div>span:nth-child(2) {
          width: 80px;
        }

        >div {
          margin-left: 13px;
        }

        >div:first-child {
          margin-top: 20px;
        }

        >div+div {
          margin-top: 10px;
        }
      }
    }

    .marginTop56 {
      margin-top: 56px;
      margin-bottom: 56px;
    }

    .powerInfoList {
      >div+div {
        margin-top: 25px;
      }

      .powerInfo {
        width: 944px;
        height: 333px;
        box-sizing: border-box;
        box-shadow: 0px 2px 9px 0px #00000014;
        border-radius: 2px;
        padding: 33px 16px 28px 16px;
        position: relative;

        .w80 {
          width: 80px;
          height: 36px;
          position: absolute;
          right: 24px;
          top: 24px;

        }

        .el-button {
          padding: 0;
        }

        .topHalf {
          margin-left: 45px;
          margin-bottom: 25px;

          span {
            display: inline-block;
          }

          img {
            width: 48px;
            height: 48px;
            margin-right: 20px;
          }

          p {
            margin-bottom: 13px;
          }

          .span1 {
            margin-right: 56px;
          }

          .span2 {
            color: #069c5d;
          }

          .noPower {
            line-height: 51px;

            >.span2 {
              margin-left: 54px;
            }
          }
        }

        .bottomHalf {
          box-sizing: border-box;
          width: 912px;
          height: 203px;
          border-radius: 4px;
          background: #f4eddc4d;
          padding-top: 23px;
          padding-left: 38px;

          ul {
            li {
              list-style: none;
            }

            li+li {
              margin-top: 23px;
            }

            li:first-child {
              height: 40px;
            }
          }

          .ul2 {
            width: 256px;
            margin-left: 24px;

            li:first-child {
              line-height: 24px;
              margin-top: -4px;
              margin-bottom: 27px;
            }
          }

          .ul3 {
            margin-left: 76px;
          }

          .ul4 {
            margin-left: 24px;
          }
        }

      }

      .powerInfo2 {
        height: 187px;
        padding-top: 14px;

        .topHalf2 {
          margin-bottom: 14px;
        }

        .bottomHalf2 {
          height: 85px;
          padding: 34px 0px 0px 68px;

          span+span {
            margin-left: 24px;
          }
        }
      }
    }

    .accInfo2 {
      margin-left: 99px;
      margin-bottom: 55px;

      li {
        list-style: none;
      }

      li:nth-child(2) {
        width: 255px;
      }

      li:nth-child(3) {
        margin-left: 109px;
      }

      li:nth-child(even) {
        margin-left: 39px;
      }
    }

    .masterCard {
      width: 314px;
      margin: 0 auto;
    }

    .signInfoList {
      .signInfo {
        width: 944px;
        box-sizing: border-box;
        box-shadow: 0px 2px 9px 0px #00000014;
        border-radius: 8px;
        position: relative;
        padding: 65px 16px 27px 16px;

        span {
          position: absolute;
          display: inline-block;
          top: 25px;
          left: 25px;
        }

        .infoList {
          width: 912px;
          box-sizing: border-box;

          padding-top: 31px;
          padding-left: 20px;
          background: #f4eddc4d;

          ul {
            margin-bottom: 31px;

            li {
              list-style: none;
            }
          }

          ul:nth-child(3) {
            width: 313px;
          }

          .ul1,
          .ul3>li {
            margin-right: 24px;
          }

          li+li {
            margin-top: 24px;
          }
        }
      }

      &>div:first-child {
        margin-top: 36px;
      }

      &>div+div {
        margin-top: 24px;
      }
    }

    .belongCardMainCard {
      box-sizing: border-box;
      width: 304px;
      height: 103px;
      box-shadow: 0px 2px 9px 0px #00000014;
      border-radius: 8px;
      margin-bottom: 41px;

      span {
        display: inline-block;
      }

      .topHalf {
        height: 50px;
        background: #f4eddc4d;

        .acc {
          margin-top: 17px;
          margin-left: 24px;
        }

        .accnum {
          margin-top: 19px;
          margin-right: 39px;
          float: right;
        }

      }

      .compname {
        margin: 15px 0px 0px 24px;
      }


    }

    .marginR16 {
      margin-right: 16px;
    }

    .centerDialogVisibleBlon {
      box-sizing: border-box;

      .el-dialog__header {
        padding: 0;
      }

      .el-dialog__body {
        overflow-y: hidden; //解决dialog右下角有瑕疵
        padding: 0;
      }

      .el-dialog {
        border-radius: 4px;
        box-sizing: border-box;

      }

      .centerDialogVisibleBlonBtn {
        margin-top: -4px;
        margin-bottom: 23px;
      }

      .diaBelongCardList {
        margin: 24px 27px 0px 24px;

        >div {
          margin-bottom: 30px;
        }

        >div:nth-child(odd) {
          margin-right: 28px;
        }

        .diaBelongCard {
          width: 280px;
          box-shadow: 0px 2px 9px 0px #00000014;
          border-radius: 8px;

          ul {
            list-style: none;

            li+li {
              margin-top: 15px;
            }
          }

          .ul2 {
            margin-left: auto;
          }

          .topHalf {
            background: #f4eddc4d;
            border-radius: 8px 8px 0px 0px;
            padding: 17px 17px 16px 15px;
          }

          .bottomHalf {
            box-sizing: border-box;
            width: 280px;
            height: 60px;
            padding-left: 15px;
            padding-right: 15px;
            overflow: hidden;
            align-items: center;

            p {
              line-height: auto;
            }
          }
        }
      }
    }

    .centerDialogVisibleMain {
      box-sizing: border-box;

      .el-dialog__header {
        padding: 0;
      }

      .el-dialog__body {
        overflow-y: hidden; //解决dialog右下角有瑕疵
        padding: 0;
      }

      .el-dialog {
        border-radius: 4px;
        box-sizing: border-box;

      }

      .centerDialogVisibleBlonBtn {
        margin-top: 26px;
        margin-bottom: 23px;
      }

      .diaTittleP {
        margin-top: 24px;
      }

      .diaBelongCardList {
        margin: 26px 62px 0px 58px;



        >div:nth-child(odd) {
          margin-right: 28px;
        }

        .diaBelongCard {
          width: 280px;
          box-shadow: 0px 2px 9px 0px #00000014;
          border-radius: 8px;

          ul {
            list-style: none;

            li+li {
              margin-top: 15px;
            }
          }

          .ul2 {
            margin-left: auto;
          }

          .topHalf {
            background: #f4eddc4d;
            border-radius: 8px 8px 0px 0px;
            padding: 17px 17px 16px 15px;
          }

          .bottomHalf {
            box-sizing: border-box;
            width: 280px;
            height: 60px;
            padding-left: 24px;
            padding-right: 24px;
            overflow: hidden;
            align-items: center;

            p {
              line-height: auto;
            }
          }
        }
      }
    }

  }

</style>
