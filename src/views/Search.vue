<template>
  <div>
    <el-table
    :data="tableData"
    style="width: 80%"
    :header-cell-style="{ background: '#f2d7d3', color: '#606266' }"
    :row-style="{ background: '#f2d7d3' }" >
    <el-table-column
      prop="date"
      label="歌单封面"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="歌单名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="歌曲数量">
    </el-table-column>
    <el-table-column
      prop="address"
      label="创建者">
    </el-table-column>
    <el-table-column
      label="操作"
      width="100">
      <template v-slot="scope">
        <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button> -->
        <el-button type="text"  @click="handleClick(scope.row)">去听歌</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
export default {
  name: "Search",
  methods:{
    
  },
  data(){
    return{
      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
    }
  }
}

</script>

<style scoped>
/deep/  .el-table, .el-table__expanded-cell {

    background-color: transparent;
    left:150px;
  }

</style>
