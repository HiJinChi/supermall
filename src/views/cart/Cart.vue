<template>
    <div class="cart">
    <navBar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </navBar>
    
       <scroll class="content">
          <cartlist></cartlist>
       </scroll>
    <cartbuttonbar></cartbuttonbar>
  
  </div>
</template>

<script>
import navBar from '../../components/navbar/NavBar'
import cartlist from '../cart/childComps/cartlist'
import scroll from '../../components/common/scroll/scroll'
import cartbuttonbar from '../cart/childComps/cartbuttonbar'
import { mapGetters } from 'vuex'
export default {
  name: 'Cart',
  components: {
    navBar,
    cartlist,
    cartbuttonbar,
    scroll,
  },
  computed: {
   ...mapGetters([
     'cartLength'
   ])
  }
}
</script>

<style  scoped>
.cart {
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;

}
.content {
 overflow: hidden;
 position: absolute;
 top: 44px;
 bottom: 49px;
 left: 0;
 right: 0;
}
</style>
