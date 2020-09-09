<template>
<scroll class="content">
   <div class="category-menu">
    <div v-for="(item,index) in categories" :key="index"
     class="left-info" :class="{active: index == currentIndex}"
     @click="categoryClick(index)">
      {{item.title}}
    </div>
  </div>
</scroll>
</template>

<script>
import scroll from '../../../components/common/scroll/scroll'
export default {
  name: 'categoryMenu',
  props: {
    categories: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    scroll
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    categoryClick(index) {
       this.currentIndex = index
       this.$emit('selectItem', index)
    }
  }
}
</script>

<style  scoped>
.content {
 overflow: hidden;
 position: absolute;
 top: 44px;
 bottom: 49px;
 left: 0;
 right: 0;
}
.category-menu {
   background-color: hsl(0, 0%, 96%);
    height: 100%;
    width: 100px;
    box-sizing: border-box;
} 
.left-info {
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
}
.active {
    font-weight: 700;
    color: var(--color-high-text);
    background-color: #fff;
    border-left: 3px solid var(--color-high-text);
}
</style>
