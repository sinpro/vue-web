<template>
  <div class="editor">
    <vue-ueditor-wrap :key="id" ref="ueditor" :destroy="false" @ready="ready" v-model="value" :config="ueConfig" :init="myInit"></vue-ueditor-wrap>
    <el-dialog :key="id+'-uploadImage-modal'" :append-to-body="true" :visible.sync="uploadModel" width="500" title="上传图片">
      <el-upload :key="id+'-uploadImage' " type="drag" action="#" :before-upload="handleBeforeUpload">
        <div style="padding: 20px 0">
          <i class="el-icon-upload" style="color: #3399ff;font-size:52px"></i>
          <p>点击或拖拽上传</p>
        </div>
      </el-upload>
      <div slot="footer">
        图片仅支持png, jpeg, jpg
      </div>
    </el-dialog>
    <el-dialog :key="id+'-uploadFile-modal'" :append-to-body="true" :visible.sync="uploadFileModel" width="500" title="上传附件">
      <el-upload :key="id+'-uploadImage'" type="drag" :max-size="10240" :on-exceeded-size="handleMaxSize" action="#" :before-upload="handleBeforeUploadFile">
        <div style="padding: 20px 0">
          <i class="el-icon-upload" style="color: #3399ff;font-size:52px"></i>
          <p>点击或拖拽上传</p>
        </div>
      </el-upload>
      <div slot="footer">
        附件不得超过10MB
      </div>
    </el-dialog>
  </div>
</template>

<script>
import baseConfig from '../../tools/baseConfig'
import vueUeditorWrap from "vue-ueditor-wrap";
export default {
  name: "editor",
  components: {
    vueUeditorWrap
  },
  data() {
    return {
      id: 'ghb-editor' + Math.random().toString().slice(-10),
      ueConfig: {
        UEDITOR_HOME_URL: '/open-inmanage/static/UEditor/',
        toolbars: [[
          'source', '|', 'undo', 'redo', '|',
          'bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'superscript', 'subscript', 'removeformat', 'formatmatch', 'autotypeset', 'blockquote', 'pasteplain', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc', '|',
          'rowspacingtop', 'rowspacingbottom', 'lineheight', '|',
          'customstyle', 'paragraph', 'fontfamily', 'fontsize', '|',
          'directionalityltr', 'directionalityrtl', 'indent', '|',
          'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|', 'touppercase', 'tolowercase', '|',
          'link', 'unlink', 'anchor', '|', 'imagenone', 'imageleft', 'imageright', 'imagecenter', '|',
          'insertframe', 'insertcode', '|',
          'horizontal', 'date', 'time', 'spechars', 'wordimage', '|',
          'inserttable', 'deletetable', 'insertparagraphbeforetable', 'insertrow', 'deleterow', 'insertcol', 'deletecol', 'mergecells', 'mergeright', 'mergedown', 'splittocells', 'splittorows', 'splittocols', 'charts', '|',
          'print', 'preview', 'searchreplace',
        ]],
        // 编辑器不自动被内容撑高
        autoHeightEnabled: false,
        // 初始容器高度
        initialFrameHeight: 540,
        // 初始容器宽度
        initialFrameWidth: '100%',
        // 关闭自动保存
        enableAutoSave: false,
        maximumWords: this.maxLength,
        zIndex:0,
        serverUrl: baseConfig.BASE_PROJECT.PRO_PROJECT + '/MC004037.do'
      },
      editor: null,
      uploadModel: false,
      uploadModelLoading: false,

      uploadFileModel: false,
      uploadFileModelLoading: false,
      xssFilterRules: true,
      inputXssFilter: true,
      outputXssFilter: true,
      whitList: {
          a:      ['target', 'href', 'title', 'class', 'style'],
          abbr:   ['title', 'class', 'style'],
          address: ['class', 'style'],
          area:   ['shape', 'coords', 'href', 'alt'],
          article: [],
          aside:  [],
          audio:  ['autoplay', 'controls', 'loop', 'preload', 'src', 'class', 'style'],
          b:      ['class', 'style'],
          bdi:    ['dir'],
          bdo:    ['dir'],
          big:    [],
          blockquote: ['cite', 'class', 'style'],
          br:     [],
          caption: ['class', 'style'],
          center: [],
          cite:   [],
          code:   ['class', 'style'],
          col:    ['align', 'valign', 'span', 'width', 'class', 'style'],
          colgroup: ['align', 'valign', 'span', 'width', 'class', 'style'],
          dd:     ['class', 'style'],
          del:    ['datetime'],
          details: ['open'],
          div:    ['class', 'style'],
          dl:     ['class', 'style'],
          dt:     ['class', 'style'],
          em:     ['class', 'style'],
          font:   ['color', 'size', 'face'],
          footer: [],
          h1:     ['class', 'style'],
          h2:     ['class', 'style'],
          h3:     ['class', 'style'],
          h4:     ['class', 'style'],
          h5:     ['class', 'style'],
          h6:     ['class', 'style'],
          header: [],
          hr:     [],
          i:      ['class', 'style'],
          img:    ['src', 'alt', 'title', 'width', 'height', 'id', '_src', 'loadingclass', 'class', 'data-latex'],
          ins:    ['datetime'],
          li:     ['class', 'style'],
          mark:   [],
          nav:    [],
          ol:     ['class', 'style'],
          p:      ['class', 'style'],
          pre:    ['class', 'style'],
          s:      [],
          section:[],
          small:  [],
          span:   ['class', 'style'],
          sub:    ['class', 'style'],
          sup:    ['class', 'style'],
          strong: ['class', 'style'],
          table:  ['width', 'border', 'align', 'valign', 'class', 'style'],
          tbody:  ['align', 'valign', 'class', 'style'],
          td:     ['width', 'rowspan', 'colspan', 'align', 'valign', 'class', 'style'],
          tfoot:  ['align', 'valign', 'class', 'style'],
          th:     ['width', 'rowspan', 'colspan', 'align', 'valign', 'class', 'style'],
          thead:  ['align', 'valign', 'class', 'style'],
          tr:     ['rowspan', 'align', 'valign', 'class', 'style'],
          tt:     [],
          u:      [],
          ul:     ['class', 'style'],
          video:  ['autoplay', 'controls', 'loop', 'preload', 'src', 'height', 'width', 'class', 'style']
        }
      
    };
  },
  props: {
    value: {
      default: "",
      type: String
    },
    maxLength: {
      default: 10000,
      type: Number
    }
  },
  methods: {
    see() {
      // //console.log(this.editor.getContent())
      return this.editor.getContent()
    },
    ready(editorInstance) {
      this.editor = editorInstance;
    },
    myInit() {
      let me = this;
      this.$refs.ueditor.registerButton({
        name: 'ghbfile',
        icon: './static/UEditor/icons/file.png',
        tip: '上传附件',
        handler: (editor, name) => {
          me.uploadFileModel = true;
        }
      });
      this.$refs.ueditor.registerButton({
        name: 'ghbimage',
        icon: './static/UEditor/icons/image.png',
        tip: '上传图片',
        handler: (editor, name) => {
          me.uploadModel = true;
        }
      });
    },
    upload() {
    },
    handleBeforeUpload(file) {
      if (file.type.split('/')[0] != 'image') {
        this.$message.error({
          message: "请上传图片！",
          duration: 5
        })
        return
      }
      let me = this;
      let uploadFrom = new FormData();
      uploadFrom.append("docsImg", file);
      this.uploadModelLoading = true;
      this.$http.upload(this, "/MC004037.do", uploadFrom).then(function (response) {
        me.uploadModelLoading = false;
        let res = response.data;
        if (res.body.errorCode == "0") {
          // let url = res.body.docsImg;
          let url = res.body.docsImgUrl.replace(/amp;/g,'')
          me.editor.execCommand('inserthtml', '<img src=\"'+ url + '\" />');
        } else {
          me.$message.error({
            message: "[" + res.body.errorCode + "]" + res.body.errorMsg,
            duration: 5
          })
        }
        me.uploadModel = false;
      }).catch(function (error) {
        me.uploadModelLoading = false;
        //console.log("MC004037 error", error)
        me.uploadModel = false;
      })
      return false;
    },
    handleBeforeUploadFile(file) {
      // console.log(file);
      let name = file.name
      console.log(name,231166554)
      try {
        let tempArr = name.split(".");
        name = tempArr[0];
      } catch (error) {

      }
      let me = this;
      let uploadFrom = new FormData();
      uploadFrom.append("docsImg", file);
      this.uploadFileModelLoading = true;
      this.$http.upload(this, "/MC004037.do", uploadFrom).then(function (response) {
        console.log(uploadFrom,'up')
        me.uploadFileModelLoading = false;
        let res = response.data;
        // console.log(JSON.stringify(res))
        if (res.body.errorCode == "0") {
          // let url = res.body.docsImg;
          let docsImgUrl = res.body.docsImgUrl
          me.editor.execCommand('inserthtml', '<a download=\"'+ name + '\" class="ghb-editor-download" target="_blank" href=\"' + 'downloadAtta.do?downloadFilePath=' + docsImgUrl +'\" />' + name  + '</a>');
        } else {
          me.$message.error({
            message: "[" + res.body.errorCode + "]" + res.body.errorMsg,
            duration: 5
          })
        }
        me.uploadFileModel = false;
      }).catch(function (error) {
        me.uploadFileModelLoading = false;
        //console.log("/MC004037 error", error)
        me.uploadFileModel = false;
      })
      return false;
    },
    handleMaxSize(file) {
       this.$message.error({
         message: "文件大小不允许超过 10M",
         duration: 5
       });
     }
  },
  // v-model语法糖实现
  watch: {
    value: {
      handler(value) {
        // //console.log(value);
        this.$emit('input', value)
      },
      immediate: true
    }
  }
};
</script>
<style lang="scss">
.editor .edui-default .edui-editor .edui-editor-toolbarbox{
   position: relative !important;
    top: 0 !important;
}
.editor .edui-default .edui-editor div[style^="height"]{
    display: none !important;
  }
</style>
