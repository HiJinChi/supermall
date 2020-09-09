<template>

    <div class="tab-bar-item" @click = 'itemClick'>
     <div v-if="!isActive"><slot name="item-icon"></slot>
     </div>
    <div v-else><slot  name="item-avtive"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot> </div>
    </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  computed: {
    isActive() {
      //动态决定到底是true还是false
      //indexOF ==-1 表示没有找到
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} :{}
    }
  },
  methods:{
    itemClick(){
      //想让有返回，就push 不想就replace
      this.$router.push(this.path)
    }
  }
}
</script>

<style  scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  /* 一般情况下，高度都是49 */
  height: 49px;
  font-size: 15px;
}
.tab-bar-item img {
 
  height: 24px;
  width: 24px;
  margin-top: 3px;
  vertical-align: middle;
}

</style>
