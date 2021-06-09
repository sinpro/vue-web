<template>
  <div class="auditProcess">
    <div
      :class="
        background
          ? 'step mtb20 wr100 bgbrand borderbox flex'
          : 'step mtb20 wr100  borderbox flex'
      "
      :style="
        background
          ? 'padding: 32px 56px;'
          : 'padding: 12px 26px;'
      "
    >
      <div class="mt10">
        <div v-for="(item, value) in list">
          <div class="finish" v-if="item.type == 'finish'">
            <div class="step-inner" v-if="value !== 0"></div>
            <div class="step-success">
              <i class="el-icon-check"></i>
            </div>
          </div>

          <div class="tips" v-if="item.type == 'tips'">
            <div class="step-inner" v-if="value !== 0"></div>
            <div class="step-tips bgtips">
              <div></div>
              <div></div>
            </div>
          </div>

          <div class="success" v-if="item.type == 'success'">
            <div class="step-inner" v-if="value !== 0"></div>
            <div class="step-success bgg">
              <i class="el-icon-check"></i>
            </div>
          </div>

          <div class="info" v-if="item.type == 'info'">
            <div class="step-inner info-inner" v-if="value !== 0"></div>
            <div class="step-info">
              <div></div>
              <div></div>
            </div>
          </div>

          <div class="errer" v-if="item.type == 'errer'">
            <div class="step-inner" v-if="value !== 0"></div>
            <div class="step-error bgerror">
              <i class="el-icon-check"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="ml20 content">
        <div v-for="(item, value) in list">
          <div class="content-item-success" v-if="item.type == 'finish'">
            <p class="">提交成功</p>
            <p class="gray2 nameTime">
              <span>{{ item.name }}｜提交人</span><span>{{ item.time }}</span>
            </p>
          </div>

          <div class="content-item-tips" v-if="item.type == 'tips'">
            <p class="ctips">待授权</p>
            <p class="gray2 nameTime">
              <span>{{ item.name }}｜提交人</span>
            </p>
          </div>
          <div class="content-item-end" v-if="item.type == 'success'">
            <p class="cg">完成</p>
          </div>
          <div class="content-item-info" v-if="item.type == 'info'">
            <p class="gray2">完成</p>
          </div>
          <div class="content-item-error" v-if="item.type == 'errer'">
            <p class="ctips">审批拒绝</p>
            <p class="gray2 nameTime">
              <span>{{ item.name }}｜提交人</span><span>{{ item.time }}</span>
            </p>
            <p class="cerror">拒绝原因：{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      Type: Array,
      default: [],
    },
    background: {
      Type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss">
.auditProcess {
  .step {
    
    .content > div:first-child {
      margin-top: -16px;
    }
    .content .content-item-success {
      height: 80px;
      & p:first-child {
        font-size: 18px;
        padding-top: 16px;
      }
      & p:last-child {
        margin-top: 10px;
      }
    }
    .content .content-item-tips {
      height: 95px;
      & p:first-child {
        font-size: 22px;
        padding-top: 20px;
      }
      & p:last-child {
        margin-top: 15px;
      }
    }
    .content .content-item-info {
      height: 80px;
      line-height: 80px;
    }
    .content .content-item-end {
      font-size: 22px;
      height: 95px;
      line-height: 95px;
    }
    .content .content-item-error {
      height: 95px;
      & p:first-child {
        font-size: 22px;
        padding-top: 12px;
      }
      & p:nth-last-child(2) {
        margin-top: 15px;
      }
      & p:last-child {
        font-size: 14px;
        margin-top: 8px;
      }
    }
    .nameTime {
      & span:first-child {
        display: inline-block;
        width: 240px;
      }
    }
    .step-success {
      margin-left: 7px;
      height: 30px;
      width: 30px;
      border-radius: 50%;
      background: #99d4b9;
      line-height: 30px;
      text-align: center;
      color: #fff;
      i {
        font-weight: bold;
      }
    }
    .step-success.bgg {
      margin-left: 0px;
      position: relative;
      height: 45px;
      width: 45px;
      border-radius: 50%;
      line-height: 45px;
      text-align: center;
      font-size: 25px;
    }
    .step-tips {
      position: relative;
      height: 45px;
      width: 45px;
      border-radius: 50%;
      line-height: 45px;
      text-align: center;
      & :first-child {
        position: absolute;
        left: 20px;
        top: 6px;
        height: 18px;
        width: 3px;
        background: #fff;
      }
      & :last-child {
        position: absolute;
        right: 6px;
        top: 22px;
        width: 18px;
        height: 3px;
        background: #fff;
      }
    }
    .step-error {
      margin-left: 0px;
      position: relative;
      height: 45px;
      width: 45px;
      border-radius: 50%;
      line-height: 45px;
      text-align: center;
      font-size: 25px;
      color: #fff;
      i {
        font-weight: bold;
      }
    }
    .step-inner {
      height: 50px;
      width: 3px;
      background: #99d4b9;
      margin-left: 20px;
    }
    .info-inner {
      background: #dedcd9;
    }
    .step-info {
      position: relative;
      margin-left: 7px;
      height: 30px;
      width: 30px;
      border-radius: 50%;
      line-height: 30px;
      text-align: center;
      background: #dedcd9;
      & :first-child {
        position: absolute;
        left: 13.5px;
        top: 6px;
        height: 9px;
        width: 2px;
        background: #fff;
      }
      & :last-child {
        position: absolute;
        right: 7px;
        top: 13.5px;
        width: 9px;
        height: 2px;
        background: #fff;
      }
    }
  }
}
</style>