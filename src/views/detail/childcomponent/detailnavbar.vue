<template>
  <div >
    <nav-bar>
      <div slot="left" class="title-back" @click="backClick">
        <img src="../../../assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item, index) in titles" :key="index" class="title-item" :class="{active: index === currentIndex}" @click="detailClick(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../../components/navbar/NavBar'
export default {
  name: 'detailnavbar',
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品','参数','评论','推荐'],
      currentIndex: 0
    }
  },
  methods: {
    detailClick(index) {
      this.currentIndex = index
      this.$emit('detailClick' , index)
    },
    backClick() {
      this.$router.back()
      
    }
  }
}
</script>

<style  scoped>
.title {
  display: flex;
  font-size: 13px;
}
.title-item {
  flex: 1;
}
.active {
  color: #FF5777;
}
.title-back img {
  margin-top: 13px;
  width: 20px;
  height: 20px;
}
</style>
