<template>
    <div>
        <script id="editor" type="text/plain"></script>
    </div>
</template>
<script>
export default {
    name: 'UE',
    data () {
        return {
            editor: null
        }
    },
    props: {
        defaultMsg: String,
        config: Object
    },
    mounted() {
        const _this = this
        this.editor = UE.getEditor('editor', this.config)
        this.editor.ready(() => {
            _this.editor.setContent(_this.defaultMsg)
            _this.editor.addListener('beforeInsertImage', () => {
                //console.log('img')
            })
            _this.editor.addListener('contentChange', () => {
                //console.log('ctn')
            })
        })
    },
    methods: {
        
        getContent() {
            return this.editor.getContent()
        }
    },
    destroyed() {
        this.editor.destroy()
    },
}
</script>
