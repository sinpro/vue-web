<template>
  <div class="remittanceUsefor">
    <title-bar title="款项用途"></title-bar>
    <div class="listDiv flex f16 lh16 cp1">
      <div class="item" v-for="(item,index) in list" :key="index" @mouseover="icon1=index" @mouseout="icon1='-1'">
        {{item}}
        <i v-if="icon1==index" class="el-icon-remove" @click="deleteIcon(item,index)"></i>
      </div>
    </div>
    <p class="leftBar">新增用途</p>
    <div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="312px">
        <el-form-item label="款项用途:" prop="money1">
          <el-input v-model="ruleForm.money1"
            placeholder="请输入" maxlength="8" show-word-limit @input="check">
          </el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="tac mt56">
        <el-button type="primary" @click.native="submit">
            确认
        </el-button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          money1: '',
        },
        rules: {
          money1: [{
            message: '款项用途不能为空',
            required: true,
            trigger: 'blur'
          }],
        },
        icon1: '-1',
        list: [
          '欠款',
          '工程款',
          '房屋租金',
          '最多八个用途字符',
          '测试',
          '工程款',
        ],
      }
    },
    methods: {
        submit(){
            this.$refs["ruleForm"].validate((valid) => {
          if (valid) {
            this.$MessageWarn({
            type: 'success',
            message: '新增成功!'
          });
          } else {
            return false;
          }
        });
        },
        check(){
            this.ruleForm.money1=this.ruleForm.money1.trim()
        },
      deleteIcon(item, index) {
        this.$confirm('确定要删除此款项用途？', '删除确认', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.list.splice(index, 1)
          this.$MessageWarn({
            type: 'success',
            message: '删除成功!'
          });
        })

      }
    }
  }

</script>
<style lang="scss">
  .remittanceUsefor {
    box-sizing: border-box;

    .listDiv {
      margin-left: 28px;
      margin-top: 36px;
      box-sizing: border-box;


      .item {
        box-sizing: border-box;

        width: 152px;
        height: 36px;
        text-align: center;
        padding-top: 10px;
        margin-bottom: 36px;
        border-radius: 4px;
        border: solid 1px #d9d9d9;
        background: #fafafa;
        margin-right: 32px;
        position: relative;

        .el-icon-remove {
          position: absolute;
          color: red;
          font-size: 24px;
          top: -12px;
          right: -12px;
          cursor: pointer;

        }
      }

      :nth-child(5n) {
        margin-right: 0;
      }

      .item:hover {
        border: solid 1px #eb3d3d;
      }


    }

    .leftBar {
      font-size: 18px;
      margin-top: 24px;
    }
    .mt56{
        margin-bottom: 131px;
    }

  }

</style>
