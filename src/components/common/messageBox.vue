<template>
  <div class="">
    <div
      tabindex="-1"
      role="dialog"
      aria-modal="true"
      aria-label="消息"
      class="el-message-box__wrapper"
      style="z-index: 2010"
      v-if="dialogVisible"
    >
      <div class="el-message-box el-message-box--center">
        <div class="el-message-box__header">
          <div class="el-message-box__title">
            <div :class="'el-message-box__status el-icon-' + type"></div>
            <span>{{ title }}</span>
          </div>
          <button
            type="button"
            aria-label="Close"
            class="el-message-box__headerbtn"
          >
          </button>
        </div>
        <div class="el-message-box__content">
          <div class="el-message-box__container">
            <!---->
            <div class="el-message-box__message">
              <slot></slot>
            </div>
          </div>
          <div class="el-message-box__input" style="display: none">
            <div class="el-input">
              <input
                type="text"
                autocomplete="off"
                placeholder=""
                class="el-input__inner"
              />
            </div>
            <div
              class="el-message-box__errormsg"
              style="visibility: hidden"
            ></div>
          </div>
        </div>
        <div class="el-message-box__btns">
          <button
            type="button"
            class="el-button el-button--default el-button--small"
            @click="cancel"
          >
            <span> 取消 </span></button
          ><button
            type="button"
            class="el-button el-button--default el-button--small el-button--primary"
            @click="commit"
          >
            <span> 确定 </span>
          </button>
        </div>
      </div>
    </div>
    <div
      v-if="dialogVisible"
      class="v-modal"
      tabindex="0"
      style="z-index: 2005"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: this.visible,
    };
  },
  props: {
    type: {
      type: String,
      default: "success",
    },
    visible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "提醒",
    },
  },
  watch: {
    visible() {
      this.dialogVisible = this.visible;
    },
  },
  methods: {
    cancel() {
      this.$emit("cancel");
      this.dialogVisible = false;
    },
    commit() {
      this.$emit("commit");
      this.dialogVisible = false;
    },
  },
};
</script>

<style lang="scss" >
</style>