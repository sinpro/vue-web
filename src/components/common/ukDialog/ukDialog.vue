<template>
    <div>
        <el-dialog  :visible.sync="value" :title="title" :close-on-click-modal='false' :close-on-press-escape='false' :show-close='false'>
            <div class="mtb40 tc">
                <span>请输入UK密码：</span>
                <el-input v-model="ukey"></el-input>
            </div>
            <div class="tc">
                <el-button type="primary" @click="toSubmit">确定</el-button>
                <el-button type="info" @click="toCancle">取消</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            default:'企业网银安全认证'
        },
        value:{
            type: Boolean,
            default: false
        }
    },
    data(){
        return{
            ukey:'',
        }
    },
    methods:{
        //确认
        toSubmit(){
            this.$emit('input', false)
            this.$emit('toSubmit', this.ukey);
            this.ukey = '';
        },
        //取消
        toCancle(){
            this.$emit('input',false);
            this.$emit('toCancle');
        }
    },
}
</script>

<style lang="scss" scoped>

</style>