<template>
  <div class="openedFunctionQuery">
    <div class="d1 BoxShadow">
      <div class="d11 bgbrand p1624">
        <p>转账汇款(6)</p>
      </div>
      <div class="d12 p2434 flex">
        <el-collapse accordion>
          <el-collapse-item>
            <template slot="title">
              <i class="el-icon-setting"></i>单笔转账(3)
            </template>
            <div>与现实生念；</div>
            <div>在界面中一等。</div>
          </el-collapse-item>
        </el-collapse>
        <el-collapse accordion>
          <el-collapse-item>
            <template slot="title">
              <i class="el-icon-setting"></i>单笔转账(3)
            </template>
            <div>与现实生念；</div>
            <div>在界面中一等。</div>
            <div>在界面中一等。</div>
          </el-collapse-item>
        </el-collapse>
        <el-collapse accordion>
          <el-collapse-item>
            <template slot="title">
              <i class="el-icon-setting"></i>单笔转账(3)
            </template>
            <div>与现实生念；</div>
            <div>在界面中一等。</div>
            <div>在界面中一等。</div>
          </el-collapse-item>
        </el-collapse>
        <el-collapse accordion>
          <el-collapse-item>
            <template slot="title">
              <i class="el-icon-setting"></i>单笔转账(3)
            </template>
            <div>与现实生念；</div>
            <div>在界面中一等。</div>
            <div>在界面中一等。</div>
          </el-collapse-item>
        </el-collapse>
        <el-collapse accordion>
          <el-collapse-item>
            <template slot="title">
              <i class="el-icon-setting"></i>单笔转账(3)
            </template>
            <div>与现实生念；</div>
            <div>在界面中一等。</div>
            <div>在界面中一等。</div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
    <div class="d1 BoxShadow">
      <div class="d11 bgbrand p1624">
        <p>代发代收业务(3)</p>
      </div>
      <div class="d12 p2434 flex">
        <el-collapse accordion>
          <el-collapse-item>
            <template slot="title">
              <i class="el-icon-setting"></i>单笔转账(3)
            </template>
            <div>与现实生念；</div>
            <div>在界面中一等。</div>
          </el-collapse-item>
        </el-collapse>
        <el-collapse accordion>
          <el-collapse-item>
            <template slot="title">
              <i class="el-icon-setting"></i>单笔转账(3)
            </template>
            <div>与现实生念；</div>
            <div>在界面中一等。</div>
            <div>在界面中一等。</div>
          </el-collapse-item>
        </el-collapse>
        
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {}

    },
    methods: {},
  }

</script>
<style lang="scss">
  .openedFunctionQuery {
    box-sizing: border-box;
    >.d1+.d1{
        margin-top: 38px;
    }
    >.d1:last-child{
        margin-bottom: 49px;
    }

    .el-icon-setting {
      font-size: 18px;
    }

    .p1624 {
      padding: 16px 24px;
    }

    .p2434 {
      padding: 24px 34px;
    }

    .el-collapse {
      border: 0 !important;
    }

    .p2434 {
      .el-collapse+.el-collapse {
        margin-left: 53px !important;

      }
      .el-collapse:nth-child(4n+1){
        margin-left:0 !important;
      }
    }

    .el-collapse-item__header {
      border: 0 !important;
      font-size: 16px;
      line-height: 16px;

      >i:first-child {
        margin-right: 9px;
      }
    }

    .el-collapse-item__wrap {
      border: 0 !important;

    }

    .el-collapse-item__arrow.el-icon-arrow-right {
      &::before {
        content: "\e6df" !important;
        font-size: 10px;
        font-weight: 600;
        padding: 15px;
      }
    }

    .el-collapse-item__arrow.is-active {
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg);
    }

    .el-collapse-item__header {
      &::after {
        content: "展开";
        margin-left: -15px;
      }
    }

    .el-collapse-item__header.is-active {
      &::after {
        content: "收起";
      }
    }



    .d1 {
      .d11 {}
    }
  }

</style>
