<template>
  <div class="bank-header">
    <div class="bank-header-search"></div>
    <div class="bank-header-nav">
      <ul class="clearfix">
        <li 
          :class="[{'act':nav.id===getUserMenusAct},'fll','cursorPot']" 
          v-for="nav in getUserMenus" 
          :key="nav.id" 
          @click="switchClickNav(nav)"
          @mouseover="switchOverNav(nav)"
          @mouseleave="switchLeaveNav(nav)"
        >
          <span>{{nav.name}}</span>
          <!-- v-show="nav.name === hoverMenu&&nav.children.length>0&&isScroll&&nav.name!=='首页'" -->
          <div 
            class="bank-header-nav-open" 
            v-show="nav.name === hoverMenu&&nav.children.length>0&&isScroll&&nav.name!=='首页'"
            v-on:mouseover.stop=""
            v-on:mouseleave.stop=""
            v-on:click.stop=""
          >
            <div class="bank-header-nav-open-content">
              <ol class="clearfix">
                <li 
                  v-for="openTit in nav.children"
                  :key="openTit.id"
                >
                  <label><i class="el-icon-picture-outline"></i>{{openTit.name}}</label>
                  <p 
                    v-for="openChild in openTit.children"
                    :key="openChild.id"
                  >
                  {{openChild.name}}
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapGetters,mapMutations } from 'vuex';
export default {
  name:'bankHeader',
  data(){
    return {
      currentNav:'1',
      navList:[],
      hoverMenu:'', // 鼠标滑上去的菜单名称
      leaveMenusTimer: null,
      isScroll:true, //监听是否滚动
    }
  },
  computed: {
    ...mapGetters([
      "getUserMenus",
      "getUserMenusAct"
    ]),
  },
  components:{

  },
  mounted(){
    console.log(this.getUserMenus,this.getUserMenusAct,'0987')
    window.addEventListener('scroll',()=>{
      this.isScroll=false;
    })
  },
  methods:{
    ...mapMutations([
      "setSliderMenus",
      "setUserMenusAct"
    ]),
    switchClickNav(data){
      console.log(data,'0000')
      this.setSliderMenus(Object.freeze(data || []));
      // this.currentNav=data.id;
      this.setUserMenusAct(data.id);
      if(data.children&&data.children.length>0){
        this.$router.push(data.children[0].path)
      }else{
        this.$router.push(data.path)
      }
    },
    switchOverNav(data,event){
      console.log(data)
      this.isScroll=true;
      this.hoverMenu=data.name;
      this.stopPropagation(this);
    },
    switchLeaveNav(data){
      this.hoverMenu='';
    },
    stopPropagation(e) {  
        e = e || window.event;  
        if(e.stopPropagation) { //W3C阻止冒泡方法  
            e.stopPropagation();  
        } else {  
            e.cancelBubble = true; //IE阻止冒泡方法  
        }  
    }
  }
}
</script>
<style lang="scss" scoped>
.bank-header{
  //height: 120px;
  &-search{
    height: 74px;
  }
  &-nav{
    height: 46px;
    ul{
      width: 1200px;
      margin: 0 auto;
      li{
        font-size: 16px;
        color: #333333;
        padding:12px 19px;
        // 展开的菜单样式
        .bank-header-nav-open{
          width: 100%;
          margin: 0 auto;
          position: fixed;
          left: 0;
          top: 120px;
          z-index: 9;
          cursor: default;
          box-shadow: #22B678;
          &-content{
            width: 1200px;
            margin: 0 auto;
            padding: 16px;
            background: #fff;
            ol{
              li{
                float: left;
                word-break:break-all;
                label{
                  display: inline-block;
                  color: #000000;
                  margin-bottom: 20px;
                  font-weight: 600;
                  i{
                    color: #C6A34F;
                    margin-right:5px;
                  }
                }
                p{
                  height: 35px;
                  line-height: 35px;
                  cursor: pointer;
                  padding-left: 20px;
                }
                p:hover{
                  color: #22B678;
                }
              }
            }
          }
       }
        
      }
      &>li:nth-child(2n){
        margin-left: 1px;
      }
      &>li:not(.act):hover::after {
        content: "";
        border-radius: 18px 0;
        display: block;
        width: calc(100% + 40px);
        height: 4px;
        position: relative;
        bottom: -8px;
        left: -19px;
        background: -webkit-gradient(linear, left top, right top, from(#c6ab75), to(#e8d2a2));
        background: linear-gradient(to right, #c6ab75, #e8d2a2);
      }
      &>li:hover{
        .bank-header-nav-open{
          display: block;
        }
      }
      &>li.act{
        background-image: linear-gradient(-41deg, #C6AB75 0%, #E8D2A2 100%);
        border-radius: 17.5px 0.5px 17.5px 0.5px;
      }
    }
  }
}
</style>
