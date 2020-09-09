<template>

    <swiper class="sw">
      <swiper-item v-for="item in topImages" :key="item.label" >
        <img :src="item" alt="">
      </swiper-item>
    </swiper>

</template>

<script>
import {Swiper,SwiperItem} from '../../../components/common/swiper/index'
export default {
  name: 'detailswiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style  scoped>
.sw {
  height: 300px;
  overflow: hidden;
}
</style>
