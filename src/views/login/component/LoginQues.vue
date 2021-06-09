<template>
  <div class="question">
    <div>
      <title-bar title="常见问题"></title-bar>
      <div class="seachInput">
          <el-input placeholder="请输入问题关键字进行搜索" v-model="searchInfo" clearable>
            <el-button slot="append" icon="el-icon-search" width="38px"></el-button>
          </el-input>
          
        </div>
    </div>
    <el-container>
      <div class="fl">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div width="60%" class="centered">  
        <el-collapse v-model="activeNames" @change="handleChange" accordion class="centered" v-if="index == 1">
          <el-collapse-item  :name="index" v-for="(ques,index) in quesList" :key='index'>
            <template slot="title">
              <i class="el-icon-plus"></i>
             {{ques.quesContent}}
            </template>
            <div>{{ques.quesAnswer}}</div>
          </el-collapse-item>
        </el-collapse>
        <span v-if="index == 2">支付结算</span>
        <span v-if="index == 3">投资理财</span>
        <span v-if="index == 4">融资业务</span>
      </div>
    </el-container>
    <!--<div class="tc pgStyle">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
      </el-pagination>
    </div>-->
  </div>
</template>
<script>
import Template from '../../Template.vue';
export default {
  components: { Template },
  data() {
    return {
      //currentPage4: 0,
      searchInfo: "",
      index: 1,
      visible: false,
      activeNames: ["1"],
      quesList: [
        {
          quesContent: "xx企业网银支持哪些系统?",
          quesAnswer: "Windows XP,Windows 7,Windows 8,Windows 9,Windows 10",
        },
        {
          quesContent: "xx企业网银支持哪些系统",
          quesAnswer: "Windows XP,Windows 7,Windows 8,Windows 9,Windows 10",
        },
        {
          quesContent: "xx企业网银支持哪些系统",
          quesAnswer: "Windows XP,Windows 7,Windows 8,Windows 9,Windows 10",
        },
        {
          quesContent: "xx企业网银支持哪些系统",
          quesAnswer:
            "Windows XP,Windows 7,Windows 8,Windows 9,Windo111111111111111ws 10",
        },
      ],
      sideMenuData: {
        type: Array,
        default: [],
      },
    };
  },
  methods: {
    handleSelect(key) {
      console.log(key);
      this.contentKey = key;
    },
    handleChange(val) {
      // console.log(val);
    },
    handleSizeChange() {},
    handleCurrentChange() {},
    activeMenu() {
      
    },
  },
  computed: {},
};
</script>
<style lang="scss">
.question {
  width: 1200px;
  margin:24px auto;
  background: #fff;
  .seachInput{
    position: absolute;
    right: 143px;
    top:131px;
    .el-input{
      width: 340px;
    }
    .el-button{
      width: 38px;
      height: 38px;
    }
  }
  .el-icon-plus{
    font-weight: 600;
    color: #059c5d;
    padding: 0 30px 0 23px;
  }
  .nav-bar{
    margin:0 23px;
    height: 74px;
    line-height: 74px;
    box-sizing: border-box;
  }
  .el-menu {
    border: none;
    width: 193px;
    margin:30px 0 117px 32px;
    .el-menu-item:hover {
      background-color: #e8d2a2 !important;
    }
    .el-menu-item.is-active {
      background: linear-gradient(to right, #c6ab75, #e8d2a2) !important;
      color: #ffffff;;
    }
  }
  .el-collapse{
    margin-top: 15px;
    border-top: none;
    .el-collapse-item__header{
      height: 89px;
      line-height: 89px;
      box-sizing: border-box;
    }
  }
  .centered {
    margin: 0 auto;
    width: 500px;
  }
  .el-collapse-item__content {
    line-height: 3;
    padding-bottom: 0px;
    padding-left: 5px;
  }
  .el-collapse-item__arrow {
    display: none;
  }
  .pgStyle{
    position: absolute;
    bottom: 70px;
    margin-left: 30%;

  }
}
</style>