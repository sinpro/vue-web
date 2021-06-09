<template>
  <div ref="qrcode"/>
</template>

<script>
// import QRCode from 'qrcodejs/qrcode'

  export default {

    name: 'qrcode',

    props: {
        width: {
            type: Number,
            default: 200
        },

        height: {
            type: Number,
            default: 200
        }
    },

    data: () => {
      return {

      }
    },

    mounted () {
        this.$qrcode = new QRCode(this.$refs.qrcode, {
            width: this.width,
            height: this.height,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        })
    },

    methods: {

        /**
         * 制作二维码
         */
        makeCode () {
            return this.$qrcode.makeCode.apply(this.$qrcode, arguments)
        }
    }

  }
</script>
<style scoped>

</style>
