<template>
  <div>
    <table class="wr100" cellspacing="0">
      <tr class="h40" v-for="(i, k) in newTable" :key="k">
        <td class="wr25">{{ i.title }}</td>
        <td class="wr25">{{ i.value }}</td>
        <td class="wr25">{{ i.title2 }}</td>
        <td class="wr25">{{ i.value2 }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      // tableKey: [
      //     {title: 'jack', value: '111'},
      //     {title: 'fefe', value: '222'},
      //     {title: 'fefe', value: '333'},
      //     {title: 'fefe', value: '44'},
      //     {title: 'fefe', value: '55'},
      //     {title: 'fefe', value: '55'},
      // ],
      arr1: [],
      arr2: [],
      // newTable: []
    }
  },
  methods: {
    cc() {

    }
  },
  mounted() {
    this.cc()
  },
  computed: {
    // tableKey: function() {
    //     return this.tableData
    // },
    newTable: function () {
      const arr1 = this.tableData.filter((item, i) => i % 2 === 0)
      const arr2 = this.tableData.filter((item, i) => i % 2 !== 0)
      let tableKey = []
      let _arr2 = JSON.parse(JSON.stringify(arr2).replace(/title/g, 'title2'))
      _arr2 = JSON.parse(JSON.stringify(_arr2).replace(/value/g, 'value2'))
      arr1.map((item1, index1) => {
        _arr2.forEach((item2, index2) => {
          if (index1 == index2) {
            let _obj = Object.assign({}, item1, item2)
            tableKey.push(_obj)
          }
        })
      })
      return tableKey
    }
  }
}
</script>

<style lang="scss">
td:nth-child(1),
td:nth-child(3) {
  width: 190px;
  background-color: #fff;
  text-align: right;
  padding-left: 7px;
  padding-right: 8px;
  color: #999999;
}
td:nth-child(2),
td:nth-child(4) {
  //   width: 380px;
  padding-left: 20px;
  color: #1b1b1b;
}
</style>