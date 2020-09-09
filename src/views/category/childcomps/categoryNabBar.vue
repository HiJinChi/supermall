<template>
  <div>
    <navbar class="category-navbar">
      <div slot="center">商品分类</div>
    </navbar>
  </div>
</template>

<script>
import navbar from '../../../components/navbar/NavBar'
export default {
  name: 'categoryNabBar',
  components: {
    navbar
  }
}
</script>

<style  scoped>
.category-navbar {
  background-color: #FF8198;
  color: white;
}
</style>
