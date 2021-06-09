<template>
    <div class="batch-transfer">
        <div>
            <div>
              <el-row :gutter="12">
                <el-col :span="12">
                  <el-card>
                      <img class='card_img' src="/static/img/index_logo.d08c5e2.png" alt="">
                      <p class='card_p1'>账户性质</p>
                      <p class='card_p2'>存款人因临时需要并在规定期限内使用而开立的银行结算账户</p>
                  </el-card>
                </el-col>
                <el-col :span="12">
                  <el-card>
                      <img class='card_img' src="/static/img/index_logo.d08c5e2.png" alt="">
                      <p class='card_p1'>账户资金</p>
                      <p class='card_p2'>办理临时机构以及存款人临时经营活动发生的资金收付</p>
                  </el-card>
                </el-col>
                <el-col :span="12">
                  <el-card>
                      <img class='card_img' src="/static/img/index_logo.d08c5e2.png" alt="">
                      <p class='card_p1'>使用期限</p>
                      <p class='card_p2'>临时帐户的有效期最长不得超过二年</p>
                  </el-card>
                </el-col>
              </el-row>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
               
            }
        },
        methods: {
            //下载
            
        },
    }
</script>

<style lang="scss">
    .batch-transfer {
        .out-acct{
            height: auto !important;
        }
    }
    .el-card__body{
        padding:24px;
        width: 412px;
        height: 121px;
    }
    .card_img{
        width: 121px;
        height: 121px;
    }
    .card_p1{
        display: flex;
        margin-left: 167px;
        margin-top: -124px;
        font-weight: bold;
        color: #1b1b1b;
        font-family: PingFang-SC-Medium;
            margin-bottom: 24px;
    }
    .card_p2{
        display: flex;
        margin-left: 167px;
        line-height: 20px;
        margin-top: 6px;
        font-family: PingFang-SC-Regular;
        color: #666666;
    }
    
</style>