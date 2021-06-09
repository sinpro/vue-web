<template>
    <div class="settle-standard">
        <el-dialog :visible.sync="value" title="转账汇款手续费标准" center :close-on-press-escape='false' width="80%"
            :close-on-click-modal='false' :show-close='false'>
            <div class="">
                <div class="flex standardDetails">
                    <div class="details1">
                        <h4 class="bg-darkgray ptb10">本行同城转账</h4>
                        <p style="color:red;">免费</p>
                    </div>
                    <div class="details2">
                        <h4 class="bg-darkgray ptb10">本行异地转账</h4>
                        <p>每笔1万元（含）以下2元；
                        </p>
                        <p>1-10万元（含10万元）5元；
                        </p>
                        <p>10-50万元（含50万元）8元；
                        </p>
                        <p>50-100万元（含100万元）10元；
                        </p>
                        <p>100万元以上按金额的0.02‰收取，最高100元
                        </p>
                        <p style="color:red;">（暂免）</p>
                    </div>
                    <div class="details3">
                        <h4 class="bg-darkgray ptb10">跨行转账</h4>
                        <p>每笔1万元（含）以下2元；</p>
                        <p>1-10万元（含10万元）5元；</p>
                        <p>10-50万元（含50万元）8元；</p>
                        <p>50-100万元（含100万元）10元；</p>
                        <p>100万元以上按金额的0.02‰收取，最高不超过100元；</p>
                        <p>5万元以下的加急业务5.5元/笔</p>
                    </div>
                </div>
                <div class="tc mt20">
                    <el-button type="info" @click="toCancle">关闭</el-button>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import demoData from '../demoData'
    export default {
        props: {
            value: {
                type: Boolean,
                default: false,
            },
        },
        data() {
            return {
                settleList1: demoData.settleList1,
                settleList2: demoData.settleList2,
            }
        },
        methods: {
            toCancle() {
                this.$emit('input', false);
                this.$emit('toCancle');
            },
        }
    }
</script>
<style lang="scss">
    .settle-standard {
        .standardDetails {
            div {
                width: 33%;
            }

            .bg-darkgray {
                text-align: center;
            }

            .details1 {
                p {
                    text-align: center;
                }

                p:last-child {
                    margin-top: 100px;
                }
            }

        }

        .details2,.details3 {
            h4{
                margin-bottom: 30px;
            }
            p {
                padding: 10px 10px;
            }
        }
        .details1,.details3{
            border-left: 3px solid #eee;
            border-right: 3px solid #eee;

        }
    }
</style>