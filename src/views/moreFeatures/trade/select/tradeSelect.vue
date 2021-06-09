<template>
    <div class="deposit-refund">
        <div v-show="steps==1">
            <el-form :model="formData" ref="formData" :rules="rules" class="mt20" label-width="146px">
                <el-row>
                    <el-col :span="11">
                        <el-form-item label="交易类型:" prop="acctNo">
                             <el-cascader v-model="formData.acctNo" :options="optionsJL" @change="handleChange"></el-cascader>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="交易状态:">
                            <el-select v-model="formData.acctNo1">
                                <el-option value='1' label="账户一"></el-option>
                                <el-option value='2' label="账户二"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="22">
                        <el-form-item label="提交时间:">
                            <el-date-picker
                                v-model="formData.transDate"
                                type="daterange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <el-row class="tc mt10">
            <el-button type="primary" size="mini" @click='getList'>查询</el-button>
        </el-row>
        <el-table border class="mtb20" :data="otherTransList">
            <el-table-column width='162' prop="流水号" label="流水号"></el-table-column>
            <el-table-column width='185' prop="交易类型" label="交易类型"></el-table-column>
            <el-table-column width='208' prop="提交时间" label="提交时间"></el-table-column>
            <el-table-column width='122' prop="money" label="金额(元)"></el-table-column>
            <el-table-column width='112' prop="state" label="交易状态">
              <template slot-scope="scope">
                   <div :style="{color:(scope.row.state=='交易失败'?'#eb3d3d':'')}">{{scope.row.state}}</div>
                </template>
            </el-table-column>
            <el-table-column label="操作" fixed="right">
                <template slot-scope="scope">
                    <a @click="goDetail(scope)">详情</a>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            class='fr'
            :page-size="10"
            layout="total, prev,pager, next, jumper"
            :total="40">
        </el-pagination>
    </div>
</template>

<script>
import mathTools from 'utils/mathTools.js'
import dateTools from 'utils/dateTools.js'
export default {
    data () {
        return {
            otherTransList:[
                {流水号:'WL20200909010',交易类型:'转账汇款-单笔转账',提交时间:'2020-02-25 12:25:36',money:'30,000.00',state:'交易失败'},
                {流水号:'WL20200909011',交易类型:'转账汇款-多笔转账',提交时间:'2020-02-25 11:25:36',money:'10,000.00',state:'交易成功'}
            ],
            state:1,//是否可撤销
            steps:1,
            isNo:false,
            currentPage: 1,
            detailFlag: false,
            detailItem:{},
            formData: {
                acctNo:'',
                transDate:'',
                acctNo1:''
            },
            rules:{
                acctNo:[
                    { required: true, message: '请选择交易日期', trigger: 'change' }
                ]
            },
            chekcDepositList:[],
            depositList:[
                {
                    list:{
                      收款户名:'asdsa13213131',
                      unitName:'XXXX有限公司',
                      预约转出日期:'2020-12-12 12:32:21',
                      payAmount:'1000.12',
                      收款账号:'2020-12-12 12:32:21',
                      payAmount1:'1000.12',
                      payTime2:'2020-12-12 12:32:21',
                      payAmount2:'1000.12',
                    },
                    state:1,
                },
                {
                    list:{
                      收款户名:'asdsa13213131',
                      unitName:'XXXX有限公司',
                      预约转出日期:'2020-12-12 12:32:21',
                      payAmount:'1000.12',
                    },
                    state:0,
                },
                {
                    list:{
                      收款户名:'asdsa13213131',
                      unitName:'XXXX有限公司',
                      预约转出日期:'2020-12-12 12:32:21',
                    },
                    state:1,
                },
                {
                    list:{
                      收款户名:'asdsa13213131',
                      unitName:'XXXX有限公司',
                      预约转出日期:'2020-12-12 12:32:21',
                      payAmount:'1000.12',
                      收款账号:'2020-12-12 12:32:21',
                    },
                    state:0,
                },
            ],
            optionsJL: [
              {
                value: "zhinan",
                label: "指南",
                children: [
                  {
                    value: "shejiyuanze",
                    label: "设计原则",
                  },
                  {
                    value: "daohang",
                    label: "导航",
                  },
                ],
              },
              {
                value: "zujian",
                label: "组件",
                children: [
                  {
                    value: "basic",
                    label: "Basic",
                  },
                  {
                    value: "form",
                    label: "Form",
                  },
                ],
              },
              {
                value: "ziyuan",
                label: "资源",
                children: [
                  {
                    value: "axure",
                    label: "Axure Components",
                  },
                  {
                    value: "sketch",
                    label: "Sketch Templates",
                  },
                  {
                    value: "jiaohu",
                    label: "组件交互文档",
                  },
                ],
              },
              {
                value: "ziyuan",
                label: "资源",
                children: [
                  {
                    value: "axure",
                    label: "Axure Components",
                  },
                ],
              },
              {
                value: "ziyuan",
                label: "资源",
                children: [
                  {
                    value: "axure",
                    label: "Axure Components",
                  },
                ],
              },
              {
                value: "ziyuan",
                label: "资源",
                children: [
                  {
                    value: "axure",
                    label: "Axure Components",
                  },
                ],
              },
              {
                value: "ziyuan",
                label: "资源",
                children: [
                  {
                    value: "axure",
                    label: "Axure Components",
                  },
                ],
              },
            ],
        }
    },
    methods: {
        //查询列表
        getList(){
            //查询为空 this.isNo = ture
        },
        //详情
        goDetail(scope){
          
          window.sessionStorage.setItem('value', JSON.stringify(scope.row));
          this.$router.push('/more/trade/select/tradeSelect/selectDetail')
          console.log(scope)
        },
        //级联选择器
        handleChange() {},
    },
    filters: {
        amountFormat(val){
            return mathTools.addDecollator(val);
        },
        timeFormat(val){
            return dateTools.date2Str(val);
        }
    }
}
</script>

<style lang="scss">
.el-cascader-menu__list{
  width:320px;
  height:225px;
}
</style>