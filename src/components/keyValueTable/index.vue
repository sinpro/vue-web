<template>
  <div class="components-key-value-table">
    <table>
      <tr v-for="index in indexList" :key="index">
        <template v-if="tableData[index].col == true">
          <th v-html="tableData[index].k"></th>
          <td colspan="3" :style="{color: tableData[index].color}" v-html="tableData[index].v"></td>
        </template>
        <template v-else>
          <th v-html="tableData[index].k"></th>
          <td :style="{color: tableData[index].color}" v-html="tableData[index].v"></td>
          <th v-html="tableData[index+1].k"></th>
          <td :style="{color: tableData[index+1].color}" v-html="tableData[index+1].v"></td>
        </template>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'keyValueTable',
  componentName: 'keyValueTable',
  props: {
    items: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      tableData: [
      ],
      indexList: []
    };
  },
  created: function () {
    this.formatData();
  },
  watch: {
    items: function () {
      //console.log(this.items);
      this.formatData();
    }
  },
  methods: {
    formatData: function () {
      this.indexList = [];
      let tempData = [];
      for (let i = 0; i < this.items.length; i++) {
        tempData.push(this.items[i]);
        if (this.items[i].col == true) {
          tempData.push({ k: '', v: '' });
        }
      }
      if (tempData.length % 2 != 0) {
        tempData.push({ k: '', v: '' });
      }
      this.tableData = tempData;
      for (let i = 0; i < tempData.length; i++) {
        if (i % 2 == 0) {
          this.indexList.push(i);
        }
      }
    }
  }

};
</script>

<style lang="scss">
.components-key-value-table table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  word-wrap: break-word;
  word-break: break-all;
}

.components-key-value-table table th,
.components-key-value-table table td {
  border: 1Px solid #dddee1;
  text-align: center;
  line-height: 40px;
  width: 25%;
}

.components-key-value-table table td[colspan="3"] {
  border: 1Px solid #dddee1;
  text-align: center;
  line-height: 40px;
  width: 75%;
}

.components-key-value-table table th {
  background: #f8f8f9
}
</style>
