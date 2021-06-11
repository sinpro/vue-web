<template>
  <div class="functionManage">
    <div class="BoxShadow" v-for="(item, value) in tree" :key="value">
      <div class="bgbrand lh50 plr24 h50 f18">
        <el-checkbox
          v-model="checkList"
          :label="item.id"
          @change="checkboxChange(item, value)"
        >
          <p>{{ item.name }}({{ item.child.length }})</p>
        </el-checkbox>
      </div>
      <div class="ptb24 plr30">
        <el-tree
          :data="item.child"
          ref="tree"
          :index="value"
          node-key="id"
          :props="props"
          accordion
          show-checkbox
          @check-change="handleCheckChange(item, value)"
          @node-expand="handleNodeExpand"
          @node-collapse="handleNodeCollapse"
        >
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <img src="" alt="" />
            <span>{{ data.name }}</span>
            <span class="ml8" v-if="data.child && data.child.length > 0">
              <i
                :class="
                  selectIndex == value && data.id == selectId
                    ? 'el-icon-arrow-up'
                    : 'el-icon-arrow-down'
                "
              ></i>
              {{
                selectIndex == value && data.id == selectId ? "关闭" : "展开"
              }}
            </span>
          </span>
        </el-tree>
      </div>
    </div>
    <div class="tac mt36 mb56">
      <el-button size="medium"> 取消 </el-button>
      <el-button size="medium" type="primary" @click="getAll"> 确认 </el-button>
    </div>
  </div>
</template>
<script>
// import loginDeviceVue from "../../securityCenter/loginDevice/loginDevice.vue";
export default {
  data() {
    return {
      Allselect: [],
      props: {
        label: "name",
        children: "child",
      },
      selectIndex: "",
      selectId: "",
      checkList: [],
      tree: [
        {
          name: "转账汇款",
          id: 1,
          child: [
            {
              name: "单笔转账",
              id: 2,
              child: [
                {
                  name: "普通转账",
                  id: 3,
                  desc: "有金额",
                },
                {
                  name: "向支付机构转账",
                  id: 4,
                },
              ],
            },
            {
              name: "批量转账",
              id: 5,
              child: [
                {
                  id: 6,
                  name: "普通转账",
                  desc: "有金额",
                },
                {
                  id: 7,
                  name: "向支付机构转账",
                },
              ],
            },
            {
              id: 8,
              name: "转账交易查询",
            },
            {
              id: 9,
              name: "联行号查询",
            },
            {
              id: 10,
              name: "常用收款人",
            },
          ],
        },
        {
          id: 11,
          name: "转账汇款",
          child: [
            {
              id: 12,
              name: "单笔转账",
              child: [
                {
                  id: 13,
                  name: "普通转账",
                  desc: "有金额",
                },
                {
                  id: 14,
                  name: "向支付机构转账",
                },
              ],
            },
            {
              id: 15,
              name: "批量转账",
            },
            {
              id: 16,
              name: "转账交易查询",
            },
            {
              id: 17,
              name: "联行号查询",
            },
            {
              id: 18,
              name: "常用收款人",
            },
          ],
        },
      ],
    };
  },
  watch: {},
  methods: {
    checkboxChange(item, value) {
      if (this.checkList.find((ele) => ele == item.id)) {
        let idList = [];
        console.log();
        this.tree[value].child.forEach((item) => {
          idList.push(item.id);
        });
        this.$refs.tree[value].setCheckedKeys(idList);
      } else {
        this.$refs.tree[value].setCheckedKeys([]);
      }
    },
    handleCheckChange(item, value) {
      let selectList = this.$refs.tree[value].getCheckedKeys();
      let idList = [];
      this.tree[value].child.forEach((ele) => {
        idList.push(ele.id);
      });
      if (idList.every((ele) => selectList.find((i) => i == ele))) {
        if (!this.checkList.find((ele) => ele == item.id)) {
          this.checkList.push(item.id);
        }
      } else {
        console.log(11);
        if (this.checkList.find((ele) => ele == item.id)) {
          this.checkList.splice(this.checkList.indexOf(item.id), 1);
        }
      }
    },
    handleNodeExpand(data, node, e) {
      this.selectIndex = e.$parent.$el.getAttribute("index");
      this.selectId = data.id;
    },
    handleNodeCollapse(data, node, e) {
      this.selectIndex = "";
      this.selectId = "";
    },
    getAll() {
      this.Allselect = [];
      this.$refs.tree.forEach((item) => {
        this.Allselect = this.Allselect.concat(item.getCheckedKeys());
      });
      this.Allselect = this.Allselect.concat(this.checkList);
      console.log(this.Allselect);
    },
  },
};
</script>
<style lang="scss">
.functionManage {
  padding-top: 5px;
  .BoxShadow {
    margin-bottom: 20px;
    border-radius: 5px;
  }
  .el-tree {
    display: flex;
    flex-wrap: wrap;
    & > .el-tree-node {
      width: 221px;
      color: #1f1f1f;
    }
    .el-tree-node__children {
      margin: 10px 0;
      color: #666666;
      .el-tree-node {
        padding: 3px 0px;
      }
    }
    .el-tree-node__expand-icon.el-icon-caret-right {
      display: none;
    }
    .el-tree-node__content:hover {
      background-color: #fff !important;
    }
    .el-tree-node:focus > .el-tree-node__content {
      background-color: #fff;
    }
  }
  .custom-tree-node {
    img {
      height: 16px;
      width: 16px;
    }
    flex: 1;
    display: flex;
    align-items: center;
    font-size: 16px;
    padding-right: 8px;
  }
}
</style>