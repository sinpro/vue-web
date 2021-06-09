<template>
    <div class="customer">
        <!--公告位置-->
        <div class="notice_tal">
            <div class="noticeTip" >
                <div class='noticeImg fl'>
                    <img :src='tipIcon' alt="">
                    <span>银行公告</span>
                </div>
                <el-carousel height="40px" direction="vertical" :autoplay="true" :interval="3000"> 
                    <el-carousel-item v-for="(index,item) in bankNoticedList" :key="item">
                    <p class="medium gray2" @click="queryTipBtn()">{{ index.atiName}}</p>
                    </el-carousel-item>
                </el-carousel>
                <p class='queryTip' @click="dialogVisible = true">查看更多</p>
            </div>
        </div>
        <!--名片部分-->
        <div class='customerCard flex'>
            <div class="wr50">
                <div class='cardLeft fl'>
                    <img src="../../../images/firstPage/icon2.png">
                    <!-- <p class='f18  pt5'>{{loginValue.userName}}</p>
                    <p class='cardLeft-p mt5'>{{loginValue.userName}}</p> -->
                    <p class='f18  pt15'>阿扎西真子</p>
                    <p class='cardLeft-p'>审核专员</p>
                </div>
                <el-form class="cardCenter fl" v-model="loginValue" label-width="115px" label-position="left">
                    <el-form-item label="企业名称">{{loginValue.name}}</el-form-item>
                    <el-form-item label="上次登陆时间">{{loginValue.TIME}}</el-form-item>
                    <el-form-item label="预留信息">{{loginValue.reserveMsg}}</el-form-item>
                    <el-form-item label="证书到期">{{loginValue.ENDTIME}}</el-form-item>
                </el-form>
            </div>
            <div class='cardRight fl'>
                <ul class='flex'>
                    <li> 
                        <img src="../../../images/firstPage/icon_right1.png">
                        <p class="f18 tc pb20">待我审核</p>
                        <el-badge v-if="auditArray.myNum>0" is-dot class="item">{{auditArray.myNum}}</el-badge>
                        <el-badge v-else class="item">{{auditArray.myNum}}</el-badge>
                    </li>
                    <li>
                        <img src="../../../images/firstPage/icon_right2.png">
                        <p class="f18 tc pb20">待他人审核</p>
                        <el-badge v-if="auditArray.otherNum>0" is-dot class="item">{{auditArray.otherNum}}</el-badge>
                        <el-badge v-else class="item">{{auditArray.otherNum}}</el-badge>
                    </li>
                    <li>
                        <img src="../../../images/firstPage/icon_right3.png">
                        <p class="f18 tc pb20">审核拒绝</p>
                        <el-badge v-if="auditArray.rejectNum>0" class="item">{{auditArray.rejectNum}}</el-badge>
                        <el-badge v-else class="item">{{auditArray.rejectNum}}</el-badge>
                    </li>
                </ul>
            </div>
        </div>
        <!--底部灰色条-->
        <div class='grayDiv'>
        </div>
        <el-dialog title="公告详情" :visible.sync="dialogVisibles" :show-close='false' center size='medium' text>
            <div>
                <p class="f18 gray1 tal mb20" >银行将发布新一轮公告，银行将发布新一轮公告</p>
                <p class="content">
                    微博运营方同意按照本协议的规定及其不时发布的操作规则向用户提供微博服务。为获得微博服务，微博服务使用人（以下称"用户"）需在认真阅读及独立思考的基础上认可、同意本协议的全部条款（特别是以加粗方式提示用户注意的条款）并按照页面上的提示完成全部的注册程序。用户在进行注册过程中点击"同意"
                    按钮（或实际使用微博服务）即表示用户完全接受本服务协议及新浪网络服务使用协议、微博社区公约、微博商业行为规范办法、微博举报投诉操作细则及微博运营方公示的各项规则、规范。如用户对本服务协议或协议的任何部分存有任何异议，应终止注册程序（或停止使用微博服务）。
                    1.2
                    用户注册成功后，微博运营方将为用户基于使用微博服务的客观需要而在申请、注册微博服务时，按照注册要求提供的账号开通微博服务，用户有权在微博运营方为其开通并同意向其提供服务的基础上使用微博服务。同时，用户同意：
                    1.2.1 用户应妥善保管微博账号及密码。
                    1.2.2 未经微博运营方同意，用户不得擅自买卖、转让、出租任何微博账号或微博昵称。
                    1.2.3 用户使用微博服务过程中，须对自身使用微博服务的行为，对任何由用户通过微博服务发布、公开的信息，及对由此产生的任何后果承担全部责任。
                    1.2.4 用户可以通过设置功能，自行确认和控制自己在使用微博服务过程中提交、发布或显示的信息的公开方式和可见范围。
                    1.3
                    用户使用微博服务过程中，对自身使用微博服务的行为以及通过微博服务发布、公开的任何信息享有合法权利，承担相应法律责任。同时，用户同意：
                    1.3.1 微博运营方对微博内容（微博内容即指用户在微博上已发布的信息，例如文字、图片、视频、音频等）享有使用权。
                    1.3.2 未经微博运营方事先书面许可，用户不得自行或授权、协助任何第三方非法抓取微博内容，“非法抓取”是指采用程序或者非正常浏览等技术手段获取内容数据的行为。
                    1.4
                    用户在使用微博服务过程中应当严格遵守微博运营方所发布的Robots协议。
                    未经微博运营方事先书面同意，任何用户不得以任何方式自行或委托任何第三方以违反上述规定的方式访问微博平台或收集任何微博内容。
                    1.5
                    在法律法规允许的范围内，用户同意并授权微博运营方就侵犯用户合法权益的行为（包括但不限于私自复制、使用、编辑、抄袭等行为）采取任何形式的法律行动，包括但不限于投诉、诉讼等必要的维权措施。
                    1.6
                    微博运营方有权直接将本服务或本协议项下权利义务委托给其关联公司或其他第三方公司进行运营、管理及履行，微博运营方无需就此向用户另行获取授权。微博运营方将竭尽避免前述委托或变更给用户使用微博服务造成的不便，微博运营方届时将尽量及时通过网站、平台、私信、邮件等方式进行通知。本协议中，关联公司是指控制某一方的、或被某一方所控制的、或与某一方共同受控制于同一实体的任何企业。控制是指直接或间接拥有该企业百分之五十（50％）以上的股权、投票权或管理权。
                </p>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisibles = false" size="medium">知道了</el-button>
            </span>
        </el-dialog>
        <el-dialog title="公告详情" :visible.sync="dialogVisible" center size='medium' text>
            <div v-for="(item,index) in bankNoticedList" :key="index">
                <p class="line_diaog f18 gray1 tal mb20 pl10" >银行将发布新一轮公告，银行将发布新一轮公告<span @click="goBtn(index)" v-if="item.showFlag"><i :class="item.iconBtn==true?'el-icon-arrow-down':'el-icon-arrow-up'"></i>{{item.iconBtn ? '收起' : '展开'}}</span></p>
                <p :class="[item.iconBtn?'':'content_box','content']">
                    {{item.text}}
                </p>
                <p class='tar ptb15 f14'>{{item.time}}</p>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false" size="medium">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false" size="medium">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import auth from 'utils/auth'
import Tools from 'utils/dateTools'
import tipIcon from "../../../images/firstPage/icon1.png";
export default {
  data () {
    return {
      loginValue: '',
      bankNoticedList:'',
      tipIcon:tipIcon,
      auditArray:'',
      dialogVisibles:false,
      dialogVisible:false
    }
  },

  mounted () {
    this.bankNoticed()
    //this.loginValue = JSON.parse(sessionStorage.getItem('loginDatas'))
    this.loginValue = {
        name:"四川牧歌技术有限公司公司名称特别长的情况下用两行进行显示",
        TIME:"2020-02-12   12:21:21",
        reserveMsg:"yushd990000006554",
        ENDTIME:"- -"
    }
    this.auditFucn();
    //this.bankNoticed()
  },
  methods: {
    //银行公告
    bankNoticed(){
      let _this = this
    //     this.$http.request(_this, "POST", '/BAS0101.do',{}).then(function (response) {
    //         let bankNoticedData = response.data.body;
    //         console.log("bankNoticedData1111111==========>",bankNoticedData.newPCAnnouncementList)
    //     _this.bankNoticedList=bankNoticedData.newPCAnnouncementList;
             _this.bankNoticedList=[{
                 atiName:"测试1",
                 text:"公告内容显示区域，支持上下滑动。内容描述内容描述，内容描述内容描述内容描述内容描述内容描述内容描述，内容描述内容描述内容描述内容描述内容描述内容描述，内容描述内容描述内容描述内容描述内容描述内容描述，内容描述内容描述内容描述内容描述内容描述内容描述，内容描述内容描述内容描述内容描述内容描述内容描述，内容描述内容描述内容描述内容描述，内容描述内容描述内容描述内容描述内容描述内容描述，内容描述内容描述，内容描述内容描述。内容描述内容描述内容描述内容描述，内容描述内容描述内容描述内容描述内容描述内容最多内容最多显示三行的段落从左往右三分之二",
                 time:"2020-03-04 13:34:45"
             },
             {
                 atiName:"测试2",
                 text:"公告内容显示区域，支持上下滑动。内容描述内容描述，内容描述内容描述内容描述内容描述，内容描述内容描述内容描述内容描公告内容显示区域，支持上下滑动。内容描述内容示区域，支持上下滑动。容描述内容描述，内容描述内容描述内容描述内容描述，内容描述内容描述内容描述内容描",
                 time:"2020-03-04 13:34:45"
             },{
                 atiName:"测试2",
                 text:"公告内容显示区域，支持上下滑动。内容描述内容描述，内容描述内容描述内容描述内容描述，内容描述内容描述内容描述内容描公告内容显示区域，支持上下滑动。内容描述内容示区域，支持上下滑动。容描述内容描述，内容描述内容描述内容描述内容描述，内容描述内容描述内容描述内容描",
                 time:"2020-03-04 13:34:45"
             },{
                 atiName:"测试2",
                 text:"公告内容显示区域，支持上下滑动。内容描述内容描述，内容描述内容描述内容描述内容描述，内容描述内容描述内容描述内容描公告内容显示区域，支持上下滑动。内容描述内容示区域，支持上下滑动。容描述内容描述，内容描述内容描述内容描述内容描述，内容描述内容描述内容描述内容描",
                 time:"2020-03-04 13:34:45"
             },{
                 atiName:"测试2",
                 text:"公告内容显示区域，支持上下滑动。内容描述内容描述，内容描述内容描述内容描述内容描述，内容描述内容描述内容描述内容描公告内容显示区域，支持上下滑动。内容描述内容示区域，支持上下滑动。容描述内容描述，内容描述内容描述内容描述内容描述，内容描述内容描述内容描述内容描",
                 time:"2020-03-04 13:34:45"
             }]
            for( let i of _this.bankNoticedList) {
              if(i.text.length >171) {
                  this.$set(i,'iconBtn',false);
                  this.$set(i,'showFlag',true)
              }else{
                this.$set(i,'iconBtn',false);
                  this.$set(i,'showFlag',false)
              }
           }
            console.log("_this.bankNoticedList====>",_this.bankNoticedList)
    //         })
    //         .catch(function (error) {
    //         console.log(error)
    //     })
    },
    goBtn(index){
        let that = this;
        console.log(index);
        console.log(this.bankNoticedList[index]);
        // this.bankNoticedList[index].iconBtn = !this.bankNoticedList[index].iconBtn
        // console.log("shangbiandeitem===============",item)
        if(this.bankNoticedList[index].iconBtn){
            this.$set(this.bankNoticedList[index],'iconBtn',false) 
    　　}
    　　else {
            this.$set(this.bankNoticedList[index],'iconBtn',true) 
    　　}
    // console.log("item====================>",item)
    },
    //查看公告
    queryTipBtn(){
        console.log("1111111111")
        this.dialogVisibles = true
    },
    //待审核接口
    auditFucn(){
        let _this = this
        _this.auditArray = {
            myNum:10,
            otherNum:10,
            rejectNum:5
        }
        // this.$http.request(_this, "POST", '/CB0308.do',{
        //   'custNo': "12580",
        //   'groupId': "1",
        //   'pageNo': "1",
        //   'pageSize': "5",
        //     //"flowNo":'11111000001234567893'
        // }).then(function (response) {
        //     let auditData = response.data.body;
        //     console.log("auditData==========>",auditData)
        //     if (auditData.errorCode === '0') {
        //         _this.auditArray=auditData;
        //         console.log("_this.auditArray=======>",_this.auditArray)

        //     } else {
        //         this.$message({
        //         message: backData.errorMsg,
        //         type: 'error',
        //         duration: 3 * 1000
        //         })
        //     }
        //     })
        //     .catch(function (error) {
        //     console.log(error)
        // })
    }
  },
  
}
</script>

<style lang="scss" scoped>
.customer{
    background: url('~images/topBanner.png') no-repeat;
    background-size: 100% 87%;
    height: 316px;
    .notice_tal{
        width: 1238px;
        margin:0 auto;
        padding-left: 19px;
        .queryTip{
            font-size: 14px;
            color:#fff;
            height: 29px;
            background-color: #c6a34f;
            border-radius: 4px;
            width:81px;
            text-align: center;
            box-sizing: border-box;
            line-height: 30px;
            position: absolute;
            top:30px;
            margin-left:503px;
        }
    }
    .noticeTip{
        background: white;
        height: 40px;
        width: 596px;
        line-height: 40px;
        font-size: 14px;
        border-radius: 4px;
        box-sizing: border-box;
        float: left;
        margin:24px 24px 24px 19px;
        .noticeImg{
            img{
                width: 18px;
                height: 18px;
                padding:0 14px 0 22px;
                vertical-align: text-bottom;
            }
            span{
                color: #c6a34f;
            }
        }
       
        .medium{
            white-space:nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            padding-left: 38px;
            
        }
    }
    .customerCard{
        background: url('~images/firstPage/bg.png') no-repeat;
        width: 1220px;
        margin: 0 auto;
        height: 232px;
        background-size: 100% 100%;
        box-sizing: border-box;
        position: relative;
        .cardLeft{
            padding: 43px 45px 43px 62px;
            width: 15%;
            text-align: center;
            img{
                width:70px;
                height: 70px;
                border-radius: 50%;
                margin:0 auto;
            }
            .cardLeft-p{
                width: 82px;
                height: 26px;
                background-color: #4a833c;
                border-radius: 10px 0 10px 0;
                font-size: 14px;
                color: white;
                line-height: 26px;
                text-align: center;
                margin-top:12px;
            }
        }
        .cardCenter{
            padding-top:54px;
            width: 375px;
            box-sizing: border-box;
            >>> .el-form-item{
                font-size: 16px;
                color: #fff;
                margin-bottom: 10px;
                
            }
            
        }
        .cardCenter /deep/ .el-form-item__label{
            color: #fff;
            line-height: 25px;
            
        }
        .cardCenter /deep/ .el-form-item__content{
            line-height: 25px;
        }
        .cardRight{
            width: 50%;
            margin:51px 0;
            box-sizing:border-box;
            border-left:1px solid rgba(245, 245, 245, 0.3);
            li{
                float: left;
                color: white;
                width: 33%;
                text-align: center;
            }
            img{
                width: 80px;
                height: 76px;
                margin:0 auto;
            }
        }
    }
}
.customer /deep/ .el-carousel__container{
    width: 250px;
}
.customer  /deep/ .el-carousel__indicator--vertical{
    display: none;
}
.customer /deep/ .el-badge{
    font-size: 28px;
}
.line_diaog{
    border-left:3px solid #059c5d;
    height: 18px;
    line-height: 18px;
    span{
        position:absolute;
        right: 32px;
        font-size: 14px;
        color: #666;
    }
}
.content_box{
    display: -webkit-box;
    overflow: hidden;
    white-space: normal !important;
    text-overflow: ellipsis;
    word-wrap: break-word;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical
}

</style>
