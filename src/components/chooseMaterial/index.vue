<template>
  <div class="image-contaner">
    <div class="container-left">
      <div class="upload-imgList">
        <el-upload
          class="active-uploader"
          ref="myUpload"
          :action="uploadUrl"
          :headers="headers"
          :before-upload="beforeAvatarUpload"
          :show-file-list="false"
        >
        </el-upload>
      </div>

      <div class="left-container" @click="openUploadImageMaterialDialog">
        <span>上传素材</span>
      </div>

      <div class="group-imgage">
        <div
          v-for="group in groupList"
          :key="group.groupId"
          :class="[groupIndex == group.groupId ?'group-item checkedGroup':'group-item']"
          @click="handleGroupClick(group.groupId)"
        >
          <span>{{ group.groupName }}</span>
        </div>
      </div>
    </div>

    <div class="container-right">
      <div class="head-search">
        <div class="search-button">
          <el-input size="small"
            placeholder="输入图片名称"
            suffix="el-icon-search"
            v-model="searchCon"
            @on-keyup="searchImageNameContain"
          ></el-input>
        </div>
      </div>

      <div
        class="uploadImg-imgListLoading images-container-common"
        style="position: relative;"
        v-if="isLoading"
      >
        <img class="uploadImg-imgListLoading-circle" src="../../assets/images/src-components/loading.png">
      </div>

      <div
        class="blank-page images-container-common"
        v-else-if="checkedPictures.length == 0"
      >
        <span>暂无数据</span>
      </div>

      <div class="imgage-box images-container-common" v-else>
        <div
          class="image-item"
          v-for="(item, index) in checkedPictures"
          :key="index"
        >
          <div class="imgage" @click="getImageUrl(item.pictureId, item)">
            <img :src="concatImageUrl(item.filePath)" alt="">
          </div>
          <span>{{ item.fileName }}</span>
          <i
            v-if="initPictureId == item.pictureId"
            class="el-icon-circle-check checkedImage"
          ></i>
        </div>
      </div>

      <div class="pagination" v-if="checkedPictures.length > 0">
          <el-pagination
          @current-change="handlePageChange"
          :current-page="currentPage"
          :page-size="8"
          layout="total, prev, pager, next, jumper"
          :total="totalPages">
          </el-pagination>
      </div>
    </div>

    <el-dialog
      width="800px"
      id="uploadMaterial"
      :close-on-click-modal="false"
      :append-to-body="true" :visible.sync="uploadMaterial"
      @close="handleDialogCloseMaterial"
    >
      <div slot="title">
        <div class="popup-head">
          <div class="uploadImg-back" @click="back2UploadDialog">
            <div class="jiantou"></div>
            <div class="back-icon"></div>
            <span class="back-text">返回</span>
          </div>
          <span class="fenge">|</span>
          <span class="mtSetting">上传素材</span>
        </div>
      </div>

      <div class="uploadMaterialbBody">
        <div class="top">
          <span style="margin-right: 15px;">分组</span>
          <el-select size="small" style="width:100%"
            placeholder="请选择"
            :value="groupIndex"
            @change="handleMaterialClassChange"
          >
            <el-option
              v-for="group in groupList"
              :key="group.groupId"
              :value="group.groupId"
              :label="group.groupName"
            >
            </el-option>
          </el-select>
        </div>

        <div class="middle">
          <span style="margin-right:20px">素材</span>
          <div class="layout">
            <img
              v-for="(item, index) in imgList"
              :key="index"
              :src="concatImageUrl(item.showSelectImg)"
              class="uploadBox-chooseImgList"
            >
            <div class="loadingImage">
              <input id="file" @change="handleUploadImage($event)" type="file" class="file">
              <img src="../../templateFrame/src/assets/add.png">
            </div>
          </div>
        </div>
      </div>

      <div slot="footer" class="dialog-footer">
        <el-button size="small" class="btn" @click="confirm">确定</el-button>
      </div>

      <el-dialog
        width="800px"
        top="10vh"
        title="上传图片"
        class="cropper-box"
        :close-on-click-modal="false"
        :append-to-body="true" :visible.sync="isShowCropper"
        @close="handleDialogClose"
      >
        <cropper
          ref="cropper"
          class="cropper"
          :cropwidth="null"
          :cropheight="null"
          :imgType="imgType"
          :imgUrl="cropperImgUrl"
        ></cropper>
        <div slot="footer" class="dialog-footer">
          <el-button size="small"            
            @click="handleCutImage"
            :disabled="isDisabled"
            class="btn"
          >
            确定
          </el-button>
        </div>
      </el-dialog>
    </el-dialog>
  </div>
</template>

<script>
import cropper from '../../templateFrame/src/components/common/cropper'
import { getCookie } from './utils/cookie'
import picmixins from '@src/templateFrameConfig/constants/mixins'
import storageTools from "@src/tools/storageTools";
import {
  API,
  newImageInfo,
  getGroupImage,
  getInitImageList
} from '@src/templateFrameConfig/config/api'

const channel = '01'

export default {
  mixins: picmixins,
  data () {
    return {
      groupIndex: '',
      isLoading: false,
      searchCon: '',
      totalPages: '',
      currentPage: '',
      checkedPictures: [],
      initPictureId: '',
      initPicturePath: '',
      imgType: '',
      isDisabled: false,
      headers: {
        iCIFID: storageTools.get('iCIFID') || '',
        eCIFID: storageTools.get('eCIFID') || ''
      },
      uploadUrl: API.uploadImg,
      lineTemporary: [],
      totalPictures: [],
      uploadMaterial: false,
      isShowCropper: false,
      cropperImgUrl: '',
      cropperImgUrlList: [],
      SelectedImgName: '',
      showSelectImg: '',
      showImage: true,
      imgList: [],
      groupList: []
    }
  },
  components: {
    cropper
  },
  props: {

  },
  methods: {
    async handleCutImage () {
      const that = this
      let cropperImgUrlList = []
      let formData = new FormData()
      let fileOfBlob = ''

      that.isDisabled = true
      cropperImgUrlList = await that.$refs.cropper.getImageBlob()
      fileOfBlob = new File([cropperImgUrlList], that.SelectedImgName)

      formData.append('file', fileOfBlob)

      const xhr = new XMLHttpRequest()

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          const response = (JSON).parse(xhr.response)

          if ((xhr.status >= 200 && xhr.status <= 300) || xhr.status === 304) {
            that.showImage = false
            that.isDisabled = false
            that.isShowCropper = false
            that.imgList.push({
              showSelectImg: response.body.uploadFileList[0].filePath
            })
            that.handleUploadMaterialSuccess(response)
          } else {
            this.$notify.error({
              title: '上传图片到服务器失败',
              message: `错误代码：${response.data.body.errorCode}。${response.data.body.errorMsg}`
            })
          }
        }
      }

      xhr.open('post', API.uploadImg, true)
      xhr.setRequestHeader('iCIFID', storageTools.get('iCIFID') || '')
      xhr.setRequestHeader('eCIFID', storageTools.get('eCIFID') || '')
      xhr.send(formData)
    },
    handleDialogClose () {
      this.isShowCropper = false
    },
    handleDialogCloseMaterial () {
      this.uploadMaterial = false
    },
    openUploadImageMaterialDialog () {
      this.imgList = []
      this.uploadMaterial = true
    },
    getImageUrl (id, row) {
      this.initPictureId = id
      this.initPicturePath = row.filePath
    },
    getParentImage () {
      this.initPictureId = ''
      return this.initPicturePath
    },
    confirm () {
      this.uploadMaterial = false
      this.queryPageImageList(1)
      this.$emit('backImgTemplate', this.imgList)
    },
    beforeAvatarUpload (file) {
      const isLt3M = file.size / 1024 / 1024 < 1
      const isJPG = file.type === 'image/jpeg' ||
        file.type === 'image/png' ||
        file.type === 'image/x-icon' ||
        file.type === 'image/gif' ||
        file.type === 'image/bmp' ||
        file.type === 'image/JPEG' ||
        file.type === 'image/PNG' ||
        file.type === 'image/X-ICON' ||
        file.type === 'image/GIF' ||
        file.type === 'image/BMP';

      if (!isJPG) {
        this.$message.error('上传图片只能是 gif、 jpeg、 png、 bmp 4种格式!')
      }
      if (!isLt3M) {
        this.$message.error('上传图片大小不能超过 1MB!')
      }
    },
    handleUploadMaterialSuccess (response) {
      const that = this
      const pictureAddList = []
      const requestData = {
        channel,
        groupId: this.groupIndex,
        pictureAddList
      }

      pictureAddList.push(response.body.uploadFileList[0])

      newImageInfo(requestData).then(response => {
        if (response.data.body.errorCode === '0') {
          that.$notify.success({
            title: '成功',
            message: '新增图片信息成功'
          })
          that.queryPageImageList(1)
        } else {
          that.$notify.error({
            title: '新增图片信息失败',
            message: `错误代码：${response.data.body.errorCode}。${response.data.body.errorMsg}`
          })
        }
      })
    },
    handleUploadImage (event) {
      const files = event.target.files

      this.isShowCropper = true
      this.imgType = files[0].name.split('.')[1]
      this.SelectedImgName = files[0].name

      if (window.createObjectURL) {
        this.cropperImgUrl = window.createObjectURL(files[0])
      } else if (window.URL) {
        this.cropperImgUrl = window.URL.createObjectURL(files[0])
      } else {
        this.cropperImgUrl = window.webkitURL.createObjectURL(files[0])
      }
    },
    handleGroupClick (groupIndex) {
      this.searchCon = ''
      this.groupIndex = groupIndex
      this.checkedPictures = []
      this.queryPageImageList('1')
    },
    queryPageImageList (pageNum) {
      const requestData = {
        channel,
        groupId: this.groupIndex,
        turnPageShowNum: '8',
        turnPageBeginPos: pageNum
      }

      this.isLoading = true

      getInitImageList(requestData).then(response => {
        this.isLoading = false
        let allData = []

        if (response.data.body.errorCode === '0') {
          allData = response.data.body.pictureList
          this.currentPage = 1
          this.totalPages = parseInt(response.data.body.turnPageTotalNum, 10)
          allData.map(item => {
            item.check = false
          })
          this.checkedPictures = allData
        } else {
          this.$notify.error({
            title: '获取图片列表失败',
            message: `错误代码：${response.data.body.errorCode}。${response.data.body.errorMsg}`
          })
        }
      })
    },
    initalImageClass () {
      this.groupIndex = this.groupList[0].groupId
      this.queryPageImageList(1)
    },
    getInitImageList (id, size, page) {
      // todo: 这个函数可以由 queryPageImageList 替代
      this.isLoading = true
      const data = {
        channel,
        groupId: id,
        turnPageShowNum: size,
        turnPageBeginPos: page
      }

      getInitImageList(data).then(response => {
        let allData = []
        this.isLoading = false

        if (response.data.body.errorCode === '0') {
          allData = response.data.body.pictureList
          this.currentPage = 1
          this.totalPages = parseInt(response.data.body.turnPageTotalNum, 10)
          this.checkedPictures = allData
          for (let i = 0; i < allData.length; i++) {
            allData[i].check = false
          }
        }
        this.isLoading = false
      })
    },
    searchImageNameContain ($event, pageNum) {
      const requestData = {
        channel,
        turnPageShowNum: '8',
        turnPageBeginPos: pageNum || '1',
        fileName: this.searchCon
      }

      this.isLoading = true
      this.groupIndex = ''

      getInitImageList(requestData).then(response => {
        this.isLoading = false
        let allData = []

        if (response.data.body.errorCode === '0') {
          allData = response.data.body.pictureList
          this.currentPage = 1
          this.totalPages = parseInt(response.data.body.turnPageTotalNum, 10)
          allData.map(item => {
            item.check = false
          })
          this.checkedPictures = allData
        } else {
          this.$notify.error({
            title: '获取图片列表失败',
            message: `错误代码：${response.data.body.errorCode}。${response.data.body.errorMsg}`
          })
        }
      })
    },
    handlePageChange (pageNum) {
      if (this.searchCon) {
        this.searchImageNameContain('', pageNum)
      } else {
        this.queryPageImageList(pageNum)
      }
    },
    back2UploadDialog () {
      this.uploadMaterial = false
    },
    handleMaterialClassChange (groupIndex) {
      this.groupIndex = groupIndex
    },
    queryImageGroup () {
      const requestData = {
        channel,
        groupId: '',
        groupName: ''
      }

      getGroupImage(requestData).then(response => {
        if (response.data.body.errorCode === '0') {
          this.groupList = response.data.body.groupList
          this.initalImageClass()
        } else {
          this.$notify.error({
            title: '获取图片分组失败',
            message: response.data.body.errorMsg
          })
        }
      })
    }
  },
  created () {
    this.initPictureId = ''
    this.queryImageGroup()
  }
}
</script>

<style lang="scss" scoped>
.el-dialog {
    width: 800px;
}
div.el-dialog div.el-dialog__body {
    padding: 0;
}
.image-contaner{
    display: flex;
    justify-content: space-between;
    padding: 32px 32px 0 32px;
}
.container-left{
    width: 176px;
}
.left-container{
    width: 120px;
    height: 40px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #3671FF;
    border-radius: 2px;
    cursor: pointer;
}
.upload-imgList{
    width: 0;
    height: 0;
}
.left-container span{
    font-family: MicrosoftYaHeiUI;
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 1Px;
    text-align: center;
    line-height: 20px;
}
.group-imgage{
    width: 176px;
    display: flex;
    justify-content: flex-start;
    padding: 24px 0;
    flex-direction: column;
    overflow-y: auto;
}
.group-item{
    width: 176px;
    height: 35px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}
.group-item:hover{
    background: #F2F8FF;
}
.checkedGroup{
    background:  #F2F8FF;
}
.group-item span{
    font-family: MicrosoftYaHeiUI;
    font-size: 12px;
    color: #323C41;
    line-height: 16px;
}
.container-right{
    width: 528px;
}
.head-search{
    display: flex;
    justify-content: flex-end;
    align-content: center;
}
.search-button{
    width: 240px;
    .el-input__inner {
        width: 240px !important;
    }
}
.images-container-common {
  height: 348px;
}
.imgage-box{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: flex-start;
    margin-top: 20px;
}
.image-item{
    width: 120px;
    height: 160px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    margin: 0 6px 24px;
    position: relative;
    .checkedImage{
        width: 20px;
        height: 20px;
        font-size: 20px;
        position: absolute;
        top: 4px;
        right: 4px;
        color: #3671FF ;
    }
}
.image-item .imgage{
    width: 120px;
    height: 120px;
    border: 1Px solid #DDE0E4;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 10px;
    cursor: pointer;
}
.image-item .imgage>img{
    max-width: 120px;
    max-height: 118px;
}
.image-item >span{
    width: 120px;
    height: 40px;
    font-family: MicrosoftYaHeiUI;
    font-size: 12px;
    color: #323C41;
    line-height: 40px;
    overflow: hidden;
}
.pagination{
    display: flex;
    justify-content: flex-end;
    padding: 0;
    margin:0 0 55px 0;
}
.el-pagination .el-select .el-input .el-input__inner{
    width: 100px !important;
    height: 28px !important;
}
.el-pagination__jump .el-input__inner{
    width: 46px !important;
    height: 28px !important;
}
.blank-page{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.uploadImg-imgListLoading {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    .uploadImg-imgListLoading-circle {
        width: 20px;
        height: 20px;
        margin: 0 auto;
        animation: load 1s linear infinite;
    }
}


@keyframes load{
    from{-webkit-transform:rotate(0deg);}
    to{-webkit-transform:rotate(360deg);}
}


#uploadMaterial{
    .el-dialog{
        width: 800px;
        .popup-head {
            height: 24px;
            // padding: 0 20px;
            line-height: 24px;
            display: flex;
            align-items: center;
            padding-left: 15px;
            // box-shadow: inset 0 -1Px 0 0 #DDE0E4;

            .jiantou {
                width:0;
                height:0;
                border: 6px solid transparent;
                border-right-color: #3671FF;
                position:absolute;
                content:'';
            }

            .back-icon {
                width: 12px;
                height: 4px;
                background: #3671FF;
                margin-left: 8px;
            }
            .back-text, .mtSetting {
                font-family: MicrosoftYaHeiUI;
                font-weight: bold;
                font-size: 16px;
                letter-spacing: 0;
            }
            .mtSetting {
                color: #14001D;
            }
            .fenge {
                font-family: MicrosoftYaHeiUI;
                font-weight: bold;
                font-size: 13px;
                color: #000000;
                letter-spacing: 0;
                margin: 0 4px 0 4px;
            }
            .back-text {
                color: #3671FF;
                margin-left: 4px;
                cursor: pointer;
            }
        }

        .uploadMaterialbBody {
            padding-left: 145px;

            .el-dialog__body{
                .el-select{
                    .el-input--suffix{
                        width:300px;
                    }
                }
            }
        }
        .middle{
            display:flex;
            margin-top: 30px;

            .layout{
                display: flex;
                flex-direction: row;
                flex-wrap:wrap;
                justify-content: flex-start;
                align-items: center;
                width: 500px;
                .loadingImage{
                    display: inline-block;
                    width:100px;
                    height: 100px;
                    background: #f1f1f1;
                    text-align: center;
                    position: relative;
                    margin-bottom: 15px;
                    img{
                        position: absolute;
                        vertical-align: top;
                        top: 0;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        margin: auto;
                    }
                    #file {
                        height: 100px;
                        width: 100px;
                        opacity: 0;
                        position: relative;
                        z-index: 1;
                        cursor: pointer;
                    }
                }

                .uploadBox-chooseImgList {
                    width: 100px;
                    height: 100px;
                    vertical-align: top;
                    margin-right: 15px;
                    margin-bottom: 15px;
                }
            }
        }
    }
    .uploadImg-back {
        display: flex;
        align-items: center;
        cursor: pointer;
    }
}
</style>
