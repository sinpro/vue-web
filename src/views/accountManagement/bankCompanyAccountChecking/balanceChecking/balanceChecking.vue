<template>
  <div class="balanceChecking">
    <el-tabs v-model="activeName2">
      <el-tab-pane label="余额对账" name="first" class="fixedClassRe">
        <div class="searchFormClass">
          <el-form :model="searchForm" :rules="rules2" ref="searchForm" label-width="90px" class="flex"
            hide-required-asterisk>
            <el-form-item label="企业名称:">
              <el-input v-model="searchForm.name" disabled></el-input>
            </el-form-item>
            <el-form-item label="账号:">
              <el-select v-model="searchForm.account" placeholder="请选择账号">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="选择账期:">
              <el-date-picker v-model="searchForm.value1" type="monthrange" :picker-options="pickerOptions"
                value-format="yyyy-MM-dd" range-separator="—" :start-placeholder="dafalttimeData.formatDate"
                :end-placeholder="dafalttimeData.nowData" unlink-panels>
              </el-date-picker>
            </el-form-item>
            <el-form-item label="状态:">
              <el-select v-model="searchForm.status" placeholder="请选择">
                <el-option label="全部" value="shanghai"></el-option>
                <el-option label="已对账" value="beijing"></el-option>
                <el-option label="未对账" value="beig"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </div>
        <div class="tac searchBtnClass">
          <el-button type="primary" size="mini" @click.native="search('searchForm')">查询</el-button>
        </div>
        <el-table class="wr100" ref="table" border :data="reconList" stripe>
          <el-table-column prop="accountDate" label="账期" width="126px"></el-table-column>
          <el-table-column prop="businessAccount" label="账号" width="202px"></el-table-column>
          <el-table-column prop="businessName" label="余额(元)" width="131px"></el-table-column>
          <el-table-column prop="businessType" label="户名" width="251px" show-overflow-tooltip></el-table-column>
          <el-table-column prop="accountOpeningInstitution" label="账户类型" width="120px"></el-table-column>
          <el-table-column prop="accountBalance" label="开户机构" width="224px"></el-table-column>
          <el-table-column label="对账状态" width="115px">
            <template slot-scope="scope">
              <span>{{scope.row.status=='1'?'已对账':'未对账'}}</span>
            </template>
          </el-table-column>
          <el-table-column type="expand" width="1">
            <template slot-scope="scope">
              <p class="ctips f16 lh16">请输入调节信息</p>
              <div class="table-nomath">
                <el-form :model="scope.row" :ref="`reconList${scope.$index}`" :rules="rules" class="flex">
                  <el-form-item :id="scope.$index" label-width="140px" label="单位实际金额:"
                    :prop="Object.keys(scope.row)[9]">
                    <el-input class="w123" v-model="scope.row.realMoney"
                      @input="scope.row.realMoney=moneyCheck(scope.row.realMoney)"
                      @blur="scope.row.unsatifiedMoney=getUnsatiMony(scope,$event)" maxlength="22" placeholder="请输入">
                    </el-input>
                  </el-form-item>
                  <el-form-item :id="scope.$index" label-width="95px" label="未达金额:" :prop="Object.keys(scope.row)[10]">
                    <el-input class="w123" v-model="scope.row.unsatifiedMoney"
                      @input="scope.row.unsatifiedMoney=moneyCheck(scope.row.unsatifiedMoney)" disabled>
                    </el-input>
                  </el-form-item>
                  <el-form-item :id="scope.$index" label-width="100px" label="未达原因:" :prop="Object.keys(scope.row)[11]">
                    <el-input class="w123" v-model="scope.row.unsatisfiedReason" @blur="changeBackHeight($event)"
                      placeholder="请输入"></el-input>
                  </el-form-item>
                </el-form>
              </div>
            </template>
          </el-table-column>

          <el-table-column label="相符" width="90px">
            <!-- <template slot-scope="scope">
              <span v-if="scope.row.status=='1' && scope.row.isSatisfied=='0'">相符</span>
              <span v-else-if="scope.row.status=='1' && scope.row.isSatisfied=='1'">--</span>
              <el-radio v-else v-model="scope.row.isSatisfied" label="1" @change="toggleMath(scope)"></el-radio>
            </template> -->
          </el-table-column>
          <el-table-column label="不相符" width="100px">
            <!-- <template slot-scope="scope">
              <span v-if="scope.row.status=='1' && scope.row.isSatisfied=='1'">不相符</span>
              <span v-else-if="scope.row.status=='1' && scope.row.isSatisfied=='0'">--</span>
              <el-radio v-else v-model="scope.row.isSatisfied" label="0" @change="toggleMath(scope)"></el-radio>
            </template> -->
          </el-table-column>

          <el-table-column label="操作" width="119px">
            <!-- <template slot-scope="scope">
              <el-button type="text">对账单</el-button>
              <span class="spanBarClass">|</span>
              <el-button type="text" @click.native="checkDetail(scope)">明细</el-button>
            </template> -->
          </el-table-column>
        </el-table>

        <div class="fixedClass">
          <el-table ref="table2" border :data="reconList" stripe>
            <el-table-column label="相符" width="90px">
              <template slot-scope="scope">
                <span v-if="scope.row.status=='1' && scope.row.isSatisfied=='0'">相符</span>
                <span v-else-if="scope.row.status=='1' && scope.row.isSatisfied=='1'">--</span>
                <el-radio v-else v-model="scope.row.isSatisfied" label="1" @change="toggleMath(scope)"></el-radio>
              </template>
            </el-table-column>
            <el-table-column label="不相符" width="100px">
              <template slot-scope="scope">
                <span v-if="scope.row.status=='1' && scope.row.isSatisfied=='1'">不相符</span>
                <span v-else-if="scope.row.status=='1' && scope.row.isSatisfied=='0'">--</span>
                <el-radio v-else v-model="scope.row.isSatisfied" label="0" @change="toggleMath(scope)"></el-radio>
              </template>
            </el-table-column>

            <el-table-column label="操作" width="119px" :resizable="false">
              <template slot-scope="scope">
                <el-button type="text" @click.native="openCheckBill(scope.row)">对账单</el-button>
                <span class="spanBarClass">|</span>
                <el-button type="text" @click.native="checkDetail(scope,page)">明细</el-button>
              </template>
            </el-table-column>

            <el-table-column type="expand" width="1">
              <template slot-scope="scope">
                <div class="expanClass" :id="`1${scope.$index}`">

                </div>
              </template>
            </el-table-column>

          </el-table>
        </div>
        <!-- ************分页器*********** -->
        <div class="pageClass">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
            layout="prev, pager, next,jumper" :total="1000">
          </el-pagination>
        </div>

        <div class="tac mtb56">
          <el-button type="primary" @click.native="ukSubmit()">提交</el-button>
        </div>
      </el-tab-pane>

      <el-dialog title="对账单预览" :visible.sync="dialogVisibleb" :show-close='false' size="medium" text>
        <div>
          <img src="../../../../images/accountManage/bill.png">
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisibleb = false" size="medium">下载</el-button>
          <el-button type="primary" @click="dialogVisibleb = false" size="medium">打印</el-button>
        </span>
      </el-dialog>

    </el-tabs>
  </div>
</template>
<script>
  import mathTools from 'utils/mathTools.js'

  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        value = mathTools.moneyCheck(value)
        if (!value) {
          callback(new Error('请输入正确金额'));
        } else {
          callback();
        }
        this.changeErrHeight()

      };
      var validatePass2 = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入未达原因'));
        } else {
          callback();
        }
        this.changeErrHeight()
      };
      return {
        options: [{
          value: '选项1',
          label: '880099 **** 9988'
        }, {
          value: '选项2',
          label: '880099 **** 9988'
        }, {
          value: '选项3',
          label: '880099 **** 9988'
        }],
        value: '',
        dafalttimeData: '',
        dialogVisibleb: false,
        activeName2: 'first',
        page: '',
        searchForm: {
          name: '北京易诚互动网络技术股份有限公司',
          account: '880099 **** 9988',
          status: '全部',
          value1: [],
        },
        reconList: [{
          accountDate: "2021-01",
          businessAccount: "880099 **** 9988",
          businessName: "99,999,999.00",
          businessType: "北京易诚互动网络技术又有限公司",
          accountOpeningInstitution: "账户类型",
          accountBalance: "开户机构",
          isSatisfied: "1",
          status: "0",
          accountStatus: "111",
        }, {
          accountDate: "2021-01",
          businessAccount: "880099 **** 9988",
          businessName: "99,999,999.00",
          businessType: "北京易诚互动网络技术又有限公司",
          accountOpeningInstitution: "账户类型",
          accountBalance: "开户机构",
          isSatisfied: "1",
          status: "1",
          accountStatus: "111",
        }, {
          accountDate: "2021-01",
          businessAccount: "880099 **** 9988",
          businessName: "99,999,999.00",
          businessType: "北京易诚互动网络技术又有限公司",
          accountOpeningInstitution: "账户类型",
          accountBalance: "开户机构",
          isSatisfied: "1",
          status: "0",
          accountStatus: "111",
        }, {
          accountDate: "2021-01",
          businessAccount: "880099 **** 9988",
          businessName: "99,999,999.00",
          businessType: "北京易诚互动网络技术又有限公司",
          accountOpeningInstitution: "账户类型",
          accountBalance: "开户机构",
          isSatisfied: "1",
          status: "0",
          accountStatus: "111",
        }],
        rules: {
          realMoney: [{
            required: true,
            validator: validatePass,
            trigger: 'blur'
          }],
          // unsatifiedMoney: [{
          //   required: true,
          //   validator: validatePass,
          //   trigger: 'blur'
          // }],
          unsatisfiedReason: [{
            required: true,
            validator: validatePass2,
            trigger: 'blur'
          }],

        },
        rules2: {
          name: [{
              required: true,
              message: '请输入活动名称',
              trigger: 'blur'
            },
            {
              min: 3,
              max: 5,
              message: '长度在 3 到 5 个字符',
              trigger: 'blur'
            }
          ],
          region: [{
            required: true,
            message: '请选择活动区域',
            trigger: 'blur'
          }],
          value1: [{
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }],
        },
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 33696000000 || time.getTime() > Date.now();
          }
        },
      }
    },
    methods: {
      /* 获取过去时间，并传值给现在时间 */
      getPassYearFormatDate() {
        var nowDate = new Date()
        var date = new Date(nowDate)
        date.setDate(date.getDate() - 365)
        var seperator1 = '-'
        var year = date.getFullYear()
        var month = date.getMonth() + 1
        var strDate = date.getDate()
        if (month >= 1 && month <= 9) {
          month = '0' + month
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = '0' + strDate
        }
        var formatDate = year + seperator1 + month
        this.getNowFormatDate(formatDate)
      },
      /* 获取现在时间，并接受过去时间的值 */
      getNowFormatDate(formatDate) {
        var date = new Date()
        var seperator1 = '-'
        var year = date.getFullYear()
        var month = date.getMonth() + 1
        var strDate = date.getDate()
        if (month >= 1 && month <= 9) {
          month = '0' + month
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = '0' + strDate
        }
        var nowData = year + seperator1 + month
        this.dafalttimeData = {
          'formatDate': formatDate,
          'nowData': nowData
        } // 默认赋值一年时间
      },
      openCheckBill(row) {
        // console.log(row)
        this.dialogVisibleb = true

      },
      changeErrHeight() { //右侧固定列的高度与input报错信息同步
        this.$nextTick(() => {
          Array.from(document.getElementsByClassName("el-form-item__error")).forEach(function (item) {
            if (item.parentElement.parentElement.id) {
              document.getElementById('1' + item.parentElement.parentElement.id).style.height = 90 + 'px'
            }
          });
        })
      },
      checkDetail(scope) {
        window.sessionStorage.setItem('balanceCkecDetail', JSON.stringify(scope.row));
        this.$router.push('/accountManagement/balanceCheck/balanceCheckDetail')
      },
      changeBackHeight($event) { //右侧固定列的高度与input报错信息同步缩小
        window.setTimeout(() => {
          if ($event.path[3].offsetHeight < 60) {
            document.getElementById('1' + $event.path[3].id).style.height = 65 + 'px'
          }
        }, 350)
      },
      getUnsatiMony(scope, $event) {
        //未达金额接口
        this.changeBackHeight($event)
        return scope.row.realMoney + 100
      },
      moneyCheck(val) {
        let value = val.replace(/[^\d.]/g, "")
          .replace(/^0\d+|^\./g, "")
          .replace(/\.{2,}/g, ".")
          .replace(".", "$#$")
          .replace(/\./g, "")
          .replace("$#$", ".")
          .replace(/^(\d+)\.(\d\d).*$/, "$1.$2")
          .replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
        return value
      },
      toggleMath(scope) {
        console.log(scope, '-----------')
        let $table = this.$refs.table;
        if (scope.row.status == '0' && scope.row.isSatisfied == '0') {
          $table.toggleRowExpansion(scope.row, true);
        } else {
          $table.toggleRowExpansion(scope.row, false);
        }
        let $table2 = this.$refs.table2;
        if (scope.row.status == '0' && scope.row.isSatisfied == '0') {
          $table2.toggleRowExpansion(scope.row, true);
        } else {
          $table2.toggleRowExpansion(scope.row, false);
        }
      },
      ukSubmit() { //提交表格信息
        let isAllin = true;
        this.reconList.forEach((item, index) => {
          if (item.isSatisfied === '0' && item.status === '0') {
            this.$refs[`reconList${index}`].validateField(['realMoney', 'unsatifiedMoney', 'unsatisfiedReason'], (
              message) => {
              if (message) {
                isAllin = false
              }
            });
          }
        })
        if (isAllin === true) {
          console.log('提交', this.reconList)
        } else {
          console.log('提交失败', this.reconList)
        }

      },
      search() {
        console.log(111)
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },

    },
    mounted() {
      this.reconList.forEach((item, index) => {
          //未对账
          if (item.status == '0') {
            this.$set(item, 'realMoney', '')
            this.$set(item, 'unsatifiedMoney', '')
            this.$set(item, 'unsatisfiedReason', '')
          }
        }),
        this.getPassYearFormatDate()
    },
    updated() {},
    watch: {
      "searchForm.value1"() {
        console.log(this.searchForm.value1)
      }
    }

  }

</script>
<style lang="scss">
  .balanceChecking {
    .extendTabel {
      .el-table__header-wrapper {
        display: none;
      }
    }

    .el-table__expand-icon>.el-icon {
      display: none;
    }

    ::-webkit-scrollbar {
      //表格滚动条
      height: 10px;
      display: block;
    }


    .flex {
      flex-wrap: wrap;
    }

    .spanBarClass {
      color: #f0f0f0;
      margin: 0 3px 0 5px;
    }

    .el-table .cell {
      padding-left: 0;
      padding-right: 0;
    }

    .fixedClassRe {
      position: relative;
    }

    .fixedClass {
      position: absolute;
      right: 0;
      top: 229px;
      box-shadow: -12px 0 20px -10px #0000001f;

      .el-table--border {
        border: 0;
      }
    }

    .wr100 {
      position: relative;

      .ctips {
        padding: 16px 0px 12px 24px;
      }


      .el-table__expanded-cell[class*=cell] {
        padding: 0;
      }

      .w123 {
        width: 123px;

        input {
          height: 32px;
        }
      }

      .el-form-item__label {
        font-size: 14px;

      }

      .el-form-item__error {
        padding-left: 0;
        font-size: 14px;
      }

      .el-input__inner {
        padding: 0 9px;
        font-size: 14px;

      }
    }

    .expanClass {
      height: 65px;
    }

    .el-table--border td:first-child .cell,
    .el-table--border th:first-child .cell {
      padding-left: 24px;
    }

    .searchFormClass {
      margin-top: 36px;
      margin-left: 63px;
    }

    .searchBtnClass {
      margin-top: 12px;
      margin-bottom: 56px;
    }


  }

</style>
