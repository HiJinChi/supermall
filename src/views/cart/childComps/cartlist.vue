<template>
  <div class="cart-list">
  <cartlistitem v-for="(item,index) in cartList" :product='item' :key="index"></cartlistitem>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import cartlistitem from '../childComps/cartlistitem'
export default {
  name: 'cartlist',
  components: {
    cartlistitem
  },
  computed: {
     ...mapGetters([
       'cartList'
     ])
  },
}
</script>

<style  scoped>

</style>
