<template>
  <div class="bg-white p20">
    <div>
      <div class="pb20">
        <router-link to="/dashboard/analysis">
          <span>营业部总览</span>
        </router-link>
        <a-icon class="plr3" type="right" />
        <span>银行转证券top50</span>
      </div>
    </div>
    <a-table
      :columns="columns"
      :rowKey="record => record.index"
      :dataSource="data"
      :pagination="pagination"
      :loading="loading"
      @change="handleTableChange"
    >
      <template slot="name" slot-scope="name"> {{ name.first }} {{ name.last }} </template>
    </a-table>
  </div>
</template>
<script>
const columns = [
  {
    title: '排名序号',
    dataIndex: 'index',
    width: '15%'
  },
  {
    title: '客户编号',
    dataIndex: 'msgCategory',
    width: '15%'
  },
  {
    title: '客户名称',
    dataIndex: 'sender',
    width: '15%'
  },
  {
    title: '员工编号',
    dataIndex: 'msgType',
    width: '15%'
  },
  {
    title: '员工姓名',
    dataIndex: 'priority',
    width: '15%'
  },
  {
    title: '员工角色',
    dataIndex: 'sendStatus_dictText',
    width: '15%'
  },
  {
    title: '转入金额',
    dataIndex: 'id'
  }
]
export default {
  data() {
    return {
      data: [],
      pagination: {},
      loading: false,
      columns
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      if (this.loading) return
      this.loading = true
      this.$http
        .get('/sys/annountCement/list')
        .then(({ code, result }) => {
          const { total, records } = result
          let pagination = { ...this.pagination }
          // Read total count from server
          // pagination.total = data.totalCount;
          pagination.total = total
          this.data = records.map((el, i) => {
            return { ...el, index: i }
          })
          pagination.showTotal = (total, range) => `总共 ${total} 条`
          this.pagination = pagination
        })
        .finally(() => {
          this.loading = false
        })
    },
    handleTableChange(pagination, filters, sorter) {
      let pager = { ...this.pagination }
      pager.current = pagination.current
      this.pagination = pager
      this.getData()
    }
  }
}
</script>
