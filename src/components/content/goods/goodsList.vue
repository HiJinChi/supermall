<template>
  <div class="goods">
    <goodsListItem v-for="item in goods" :goodsItem='item'  :key="item.index"></goodsListItem>
   
  </div>
</template>

<script>
import goodsListItem from '../goods/goodsListItem'
export default {
  name: 'goodsList',
  components: {
    goodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style  scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
