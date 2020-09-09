<template>
  <div class="goods">
    <div class="wrd">热门推荐</div>
    <recommenditem v-for="item in recommends" :recommends='item'  :key="item.index"> </recommenditem>
  </div>
</template>

<script>
import recommenditem from '../childcomponent/recommenditem'
export default {
  name: 'detailrecommend',
  components: {
    recommenditem
  },
  props: {
    recommends: {
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
.wrd {
  width: 100%;

}
</style>
