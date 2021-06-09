<template>
<div class='trade'>
    <div class='custmer-left fl'>
        <div class='custmer-top'>
            <div>
                 <div class='custmer-line'></div>
                 <span class='topLeft'>账户</span>
            </div>
           
            <div class='mr20'>
                <img style='height:4px' src='../../../images/firstPage/more.png' alt=''>
                <span class='topRight'>更多</span>
            </div>
        </div>
        <!--卡片明细部分-->
        <div class='trade-card'>
            <div class='cardHeader'></div>
            <div class='cardTop'>
                <div class='cardtTop-text'>
                    <span class='f20 vam'>456378****8765</span>
                    <span class='pl20 pr20'>|</span>
                    <span class='f14 vam' >发工资专用</span>
                </div>
                <div>
                    <ul class="cy">
                        <li class='ml30 f18 c6a34f pt22'>余额<i class="el-icon-view"></i></li>
                        <li class='ml25 f24 c6a34f pt20'>￥<span>456,789.00</span></li>
                        <li class='ml30 cardNo'>默认账户</li>
                    </ul>
                </div>
                <div class='queryDetail'>明细查询</div>
            </div>
            <ul class='cardBank pt15'>
                <li>
                    <p class='letter14'>户 名</p>
                    <p>四川大海解说农业贸易有限公司公司名称比较长的情况下请进行换行显示如若两行显示不全显示不全显示不全用..</p>
                </li>
                <li>
                    <p>开户机构</p>
                    <p>简阳农商行</p>
                </li>
                <li>
                    <p>开户时间</p>
                    <p>2021-01-12</p>
                </li>
            </ul>
        </div> 
    </div>
    <div class='custmer-right fl'>
        <div class="top-left" >
            <div class='custmer-top' @click="commonUse()">
                <div class="fl">
                    <div class='custmer-line'></div>
                    <span class='topLeft'>消息通知</span>
                </div>
                <div class='mr20 fr'>
                    <img style='height:4px' src='../../../images/firstPage/more.png'>
                    <span class='topRight'>更多</span>
                </div>
            </div>
            <ul class='messageTip'>
                <li v-for="item in tipsList" :key="item" class='flex ale mt15'>
                    <div>
                        <img src='../../../images/firstPage/iconDate.png'>
                        <span class='messageDate'>01</span>
                    </div>
                    <div class='flex pt2'>
                        <p class='pl18'>{{tipsList.msgTitle}}</p>
                        <p class='pl18 wd220 nowrap'>{{tipsList.msgContent}}</p>
                        <p class="position-a ml330">{{tipsList.msgPushDate}}</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class='top-right mt18'>
            <div class='custmer-top' @click="currentDialog = true">
                <div class="fl">
                    <div class='custmer-line'></div>
                    <span class='topLeft'>常用功能</span>
                </div>
                <div class='mr20 fr'>
                    <img class="wh18" src='../../../images/firstPage/icon4.png'>
                    <span class='topRight'>管理</span>
                </div>
            </div>
            <p class="f18 gray3 tac hl162">未添加常用功能，<span class="cg" @click="currentDialog = true">去添加</span></p>
            <ul class='massageTips' v-if="commonFlag==true">
                <li v-for="item in 5" :key="item">
                    <div class="img">
                        <img src="../../../images/firstPage/icon5.png">
                    </div>
                    <p class="infor">单笔转账</p>
                </li>
            </ul>
        </div>
    </div>
    <!-- 常用功能设置 -->
    <el-dialog title="常用功能设置" :visible.sync="currentDialog" :show-close='!false' center size='medium' text>
        <div class="common">
            <div class="commonText">
                <label>已选功能</label><span>已选常用功能超过5个，请删除后再添加~</span>
            </div>
            <ul class='flex'>
                <li v-for="item in 5" :key="item" class="mr60 commonImg tac">
                    <span class="commonDelete">-</span>
                    <img src="../../../images/firstPage/icon5.png">
                    <p class="c3">单笔转账</p>
                </li>
                <!-- <v-if="" label class="borderdashed tc l60">+</v-if=label> -->
            </ul>
            <div class="swiper-container">
                <div class="swiper-wrapper" v-for="(item,index) in commonData" :key="index">
                    <div class="swiper-slide">{{item.menuTitle}}</div>
                </div>
                <!-- 如果需要导航按钮 -->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
            <p class="leftBar f16 mtb20">标题</p>
            <ul class='flex'>
                <li v-for="item in 5" :key="item" class="mr60 commonImg tac">
                    <span class="commonDelete">+</span>
                    <img src="../../../images/firstPage/icon5.png">
                    <p class="c3">单笔转账</p>
                </li>
                <!-- <v-if="" label class="borderdashed tc l60">+</v-if=label> -->
            </ul>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="currentDialog = false" size="medium">知道了</el-button>
        </span>
    </el-dialog>
</div>
</template>

<script>
import Swiper from "src/tools/swiper/idangerous.swiper2.7.6.min.js";
import "src/tools/swiper/idangerous.swiper2.7.6.css";
export default {
  data () {
    return {
        tipsList:'',
        activeName: 'first',
        currentDialog:false,
        //data: generateData(),
        value: [],
        commonFlag:false,
        commonData: [
            {
            menuTitle: "账户管理",
            payeeArr: [
                {
                url:'',
                littleMenu: '账户1',
                },
                {
                url:'',
                littleMenu: '账户2',
                },
                {
                url:'',
                littleMenu: '账户3',
                },
            ],
            },
            {
            menuTitle: "转账汇款",
            payeeArr: [
                {
                url:'',
                littleMenu: '转账1',
                },
                {
                    url:'',
                    littleMenu: '转账2',
                },
            ],
            },
            {
            menuTitle: "代发代收",
            payeeArr: [
                {
                url:'',
                littleMenu: '转账1',
                },
                {
                    url:'',
                    littleMenu: '转账2',
                },
            ],
            },
            {
            menuTitle: "投资理财",
            payeeArr: [
                {
                url:'',
                littleMenu: '转账1',
                },
                {
                    url:'',
                    littleMenu: '转账2',
                },
            ],
            },
            {
            menuTitle: "票据业务",
            payeeArr: [
                {
                url:'',
                littleMenu: '转账1',
                },
                {
                    url:'',
                    littleMenu: '转账2',
                },
            ],
            },
            {
            menuTitle: "融资贷款",
            payeeArr: [
                {
                url:'',
                littleMenu: '转账1',
                },
                {
                    url:'',
                    littleMenu: '转账2',
                },
            ],
            },
            {
            menuTitle: "便企业务",
            payeeArr: [
                {
                url:'',
                littleMenu: '转账1',
                },
                {
                    url:'',
                    littleMenu: '转账2',
                },
            ],
            },
            {
                menuTitle: "国际业务",
                payeeArr: [
                    {
                    url:'',
                    littleMenu: '转账1',
                    },
                    {
                        url:'',
                        littleMenu: '转账2',
                    },
                ],
            },
            {
                menuTitle: "集团业务",
                payeeArr: [
                    {
                    url:'',
                    littleMenu: '转账1',
                    },
                    {
                        url:'',
                        littleMenu: '转账2',
                    },
                ],
            },
            {
                menuTitle: "特色服务",
                payeeArr: [
                    {
                    url:'',
                    littleMenu: '转账1',
                    },
                    {
                        url:'',
                        littleMenu: '转账2',
                    },
                ],
            },
            {
                menuTitle: "现金管理",
                payeeArr: [
                    {
                    url:'',
                    littleMenu: '转账1',
                    },
                    {
                        url:'',
                        littleMenu: '转账2',
                    },
                ],
            },
        ],
    };
  },
  mounted () {
    this.massageTip();
    let vm = this;
    this.$nextTick(() => {
      this.swiper = new Swiper(".swiper-container", {
        mousewheelControl: true,
        mousewheelControlForceToAxis: true,
        mode: "vertical",
        //slidesPerView: "auto",
         // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        // onSlideNext: function (swiper) {
        //   vm.index = swiper.activeIndex;
        // },
      });
      console.log("Swiper=====================>",this.Swiper)
    });
  },
  methods: {
    //消息提醒查询
    massageTip(){
        let _this = this
        this.$http.request(_this, "POST", '/IM09999.do',{
            msgId:''
        }).then(function (response) {
            let backData = response.data.body;
            console.log("backData==========>",backData)
            this.tipsList = backData.msgRemindList;
            if (backData.errorCode === '0') {
                

            } else {
                this.$message({
                message: backData.errorMsg,
                type: 'error',
                duration: 3 * 1000
                })
            }
            })
            .catch(function (error) {
            console.log(error)
        })
        if(data.titleID =='01'){
            this.$router.push('/accountManagement/transactionDetails')
        }else{
            this.$router.push('/accountManagement/balanceQuery')
        }
        
    },
    // commonUse(){
    //     console.log("111111111111")
    //     this.currentDialog = true;
    // }
  }
}
</script>

<style lang="scss" scoped>
 .trade{
   width: 1200px;
   margin:30px auto 0;
 }
 .trade:after{
     display:block;clear:both;content:'';visibility:hidden;height:0;
 }
 .trade .custmer-left{
    width:590px;
    box-sizing: border-box;
    background: #fff; 
	border-radius: 16px;
    min-height: 438px;
 }
 .trade-card{
     margin: 32px 45px 0 48px;
     .cardHeader{
        background-color: #f1f1e6;
        border-radius: 16px;
        opacity: 0.5; 
        height: 200px;
        width: 80%;
        margin-left: 10%;
        position: absolute;
        z-index: -1;

     }
     .cardTop{
        width: 497px;
        min-height: 205px;
        background-color: #f1f1e6;
        border-radius: 16px;
        padding-top:19px;
        .cardtTop-text{
            width: 453px;
	        height: 36px;
            margin-left: 22px;
            background-color: #ffffff;
            border-radius: 18px;
            color: #059c5d;
            line-height: 34px;
            padding-left: 17px;
            box-sizing: border-box;
        }
        .cardNo{
            width: 71px;
            height: 23px;
            background-color: #c6a34f;
            border-radius: 4px;
            color: #fff;
            text-align: center;
            line-height: 23px;
            font-size: 14px;
            margin-top: 22px;
        }
        .queryDetail{    
            width: 119px;
            height: 40px;
            background-color: #059c5d;
            border-radius: 20px 0px 16px 0px;
            font-size: 14px;
            line-height: 40px;
            color: #fff;
            text-align: center;
            margin-left: 377px;
            margin-top: -6px;
        }
     }
    .cardBank{
        li{
            font-size: 16px;
            display: flex;
            padding-bottom: 15px;
            p:first-child{
                width: 20%;
                color: #999;
            }
            p:last-child{
                width: 78%;
                color: #1b1b1b;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                word-break: break-all;
                line-clamp: 2;
                overflow: hidden;
            }
        }
    }
 }
 .custmer-top{
    display: flex;
    height: 48px;
    justify-content: space-between;
    border-bottom: 1px solid #e5e5e5;
    line-height: 48px;
    .custmer-line{
        width: 5px;
        height: 24px;
        background-color: #558948;
        border-radius: 0px 2px 0px 2px;
        display: inline-block;
        vertical-align: sub;
    }
    img{
        height: 10px; 
        width: 10px;
        vertical-align: middle;
    }
    .topLeft{
        font-size: 18px;
        color: #4a833c;
        padding-left:20px;
        vertical-align: middle;
    }
    .topRight{
        font-size: 16px;
        color: #c6a34f;
    }
 }
 .custmer-right{
    width: 590px !important;
    margin-left: 20px;
    .top-left,.top-right{
	    border-radius: 12px 16px 16px 16px;
        box-sizing: border-box;
        background: #fff;
        height: 210px;
    }
    .messageTip{
        padding: 11px 0 30px 30px;
        img{
            width: 24px;
        }
        .messageDate{
            font-size: 14px;
            position: absolute;
            display:inline-block;
            margin-top:8px;
            margin-left:-20px;
            color:#fff;
        }
    }
    .massageTips{
        display: flex;
        padding:26px 32px 29px 30px;
        li{
            width: 20%;
            text-align: center;
            float: left;
        }
        img{
            height: 64px;
            width: 64px;
        }
    }
 }
.letter14{
    letter-spacing: 14px;
}
.ml330{margin-left:330px}
.wd220{width:220px}
.pt2{padding-top:2px}
.mt18{margin-top:18px}
.pt22{padding-top:22px}
.wh18{width:16px !important;height: 18px !important}
.hl162{
    height: 162px;
    line-height: 162px;
}
.commonText{
    padding-bottom: 23px;
    label{
        width: 90px;
        background-color: #eafff6;
        border-radius: 12px;
        color: #059c5d;
        padding:7px 9px;
        font-size: 18px;
        
    }
    span{
        font-size: 14px;
        color: #eb3d3d;
        padding-left: 25px;
    }
}
.commonImg{
    height: 60px;
    width: auto;
    .commonDelete{
        float: right;
        height: 14px;
        width: 14px;
        background-color: #eb3d3d;
        border-radius: 7px;
        color: #fff;
        line-height: 13px;
    }
    img{
        height: 100%;
    }
}
.l60{
    width:46px;
    line-height: 60px;
}
.common /deep/ .swiper-container{
    margin-top:54px;
    height: 47px;
    line-height: 47px;
    background-color: #f1f1e6;
    padding-left: 32px;
    .swiper-slide{
        padding-right: 22px;
    }
}
</style>
