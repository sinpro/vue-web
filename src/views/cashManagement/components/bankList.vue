<template>
    <div class="payee-select">
        <el-dialog :visible.sync="value" :close-on-press-escape='false' :close-on-click-modal='false' :modal="false" width="80%"
            :show-close='false'>
            <el-row class="tc">
                <p class="pb10 borderb">热门银行</p>
                <!-- <p class="mt10">
                请输入搜索条件：<el-input v-model="condition" placeholder="请输入账号、账号户名等关键字"></el-input>
                <el-button type="primary">查询</el-button>
                </p> -->
            </el-row>
            <!-- <el-tabs :tab-position="tabPosition">
                <el-tab-pane label="企业下挂账户">
                    <el-table border :data="tableData" ref="payeeTable">
                        <el-table-column label-class-name="DisabledSelection" type="selection" width="60">
                            <template slot-scope="scope">
                                <el-radio v-model="tableRadio" :label="scope.row"></el-radio>
                            </template>
                        </el-table-column>
                        <el-table-column prop="accName" label="户名"></el-table-column>
                        <el-table-column prop="nickName" label="别名"></el-table-column>
                        <el-table-column prop="accNo" label="账号"></el-table-column>
                        <el-table-column prop="bankName" label="收款银行"></el-table-column>
                        <el-table-column prop="branchName" label="网点"></el-table-column>
                    </el-table>
                    <div class="block">
                        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                            :current-page="currentPage4" :page-sizes="[5, 10, 30]"
                            layout="sizes, prev, pager, next, jumper" :total="400">
                        </el-pagination>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="财务部">
                    <el-table border :data="tableData" ref="payeeTable">
                        <el-table-column label-class-name="DisabledSelection" type="selection" width="60"><template
                                slot-scope="scope">
                                <el-radio v-model="tableRadio" :label="scope.row"></el-radio>
                            </template>
                        </el-table-column>
                        <el-table-column prop="accName" label="户名"></el-table-column>
                        <el-table-column prop="nickName" label="别名"></el-table-column>
                        <el-table-column prop="accNo" label="账号"></el-table-column>
                        <el-table-column prop="bankName" label="收款银行"></el-table-column>
                        <el-table-column prop="branchName" label="网点"></el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="审计部">
                    <el-table border :data="tableData" ref="payeeTable">
                        <el-table-column label-class-name="DisabledSelection" type="selection" width="60"><template
                                slot-scope="scope">
                                <el-radio v-model="tableRadio" :label="scope.row"></el-radio>
                            </template>
                        </el-table-column>
                        <el-table-column prop="accName" label="户名"></el-table-column>
                        <el-table-column prop="nickName" label="别名"></el-table-column>
                        <el-table-column prop="accNo" label="账号"></el-table-column>
                        <el-table-column prop="bankName" label="收款银行"></el-table-column>
                        <el-table-column prop="branchName" label="网点"></el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="会计部">
                    <el-table border :data="tableData" ref="payeeTable">
                        <el-table-column label-class-name="DisabledSelection" type="selection" width="60"><template
                                slot-scope="scope">
                                <el-radio v-model="tableRadio" :label="scope.row"></el-radio>
                            </template>
                        </el-table-column>
                        <el-table-column prop="accName" label="户名"></el-table-column>
                        <el-table-column prop="nickName" label="别名"></el-table-column>
                        <el-table-column prop="accNo" label="账号"></el-table-column>
                        <el-table-column prop="bankName" label="收款银行"></el-table-column>
                        <el-table-column prop="branchName" label="网点"></el-table-column>
                    </el-table>
                </el-tab-pane>
            </el-tabs> -->

            <div class="tc mt20">
                <el-button type="primary" @click="toSubmit">确定</el-button>
                <el-button type="info" @click="toCancle">关闭</el-button>
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
                currentPage4: 4,
                tableRadio: {},
                tabPosition: 'left',
                condition: '',
                tableData: [],
            }
        },
        methods: {
            init() { //获取收款人数据
                if (this.value == true) {
                    console.log(123123)
                    let _this = this;
                    this.$http
                        .request(_this, "POST", "/CB0304.do", {
                            custNo: "12580",
                            groupId: "1",
                            pageNo: "1",
                            pageSize: "5",
                        })
                        .then((res) => {
                            if (res.data.body.errorCode === "0") {
                                this.tableData = res.data.body.payeeInfoList;
                            }
                        });
                }
            },


            handleSizeChange(val) {

                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            toSubmit() {
                this.$emit('payeeConfirm', this.tableRadio)
                this.$emit('input', false);
                // console.log(this.tableRadio)
                // this.$emit('input', false);
            },
            toCancle() {
                this.$emit('input', false);
                this.$emit('toCancle');
            },
            //国家选择
            // handleSelectionChange(selection) {
            //     this.payeeItem = selection[0];
            //     if (selection.length > 1) {
            //         this.$refs.payeeTable.clearSelection();
            //         this.$refs.payeeTable.toggleRowSelection(selection.pop());
            //     }
            // },
        },

        mounted() {
            this.init()
        },
    }
</script>
<style lang="scss">
    .payee-select {

        /*表格全选框去除空框*/
        .el-table .DisabledSelection .cell .el-checkbox__inner {
            display: none;
            position: relative;
        }

        /*表格全选框改为：选择*/
        .el-table .DisabledSelection .cell:before {
            content: "选择";
            text-align: center;
        }

        .el-tabs__item.is-active:after {
            width: 100%;
        }
    }
</style>