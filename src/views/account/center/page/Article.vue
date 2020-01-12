<template>
  <a-list>
    <a-list-item> </a-list-item>
  </a-list>
</template>

<script>
import { List } from 'ant-design-vue'
const AListItem = List.Item

export default {
  name: 'Article',
  components: {
    AList,
    AListItem
  }
}
</script>

<style scoped></style>
