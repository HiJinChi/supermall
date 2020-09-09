<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
   <tabControl :titles="['流行','新款','精选']" 
    @tabClick= "tabClick" ref="tabControl1" class="tab-control" v-show="isTabFixed"></tabControl>
    <scroll  class="content" ref="scroll" :probeType="3" @scroll="contentScroll" :pullUpLoad='true' @pullingUp = 'loadMore'> 
    <homeSwiper :banners= "banners" @swiperImageLoad= 'swiperImageLoad' ref="hSwiper"></homeSwiper>
    <recommendView :recommends = "recommends"></recommendView>
    <featureView></featureView>
    <tabControl :titles="['流行','新款','精选']" 
    @tabClick= "tabClick" ref="tabControl2"></tabControl>
    <goodsList :goods="goods[currentType].list"></goodsList>
    </scroll>
    <backtop @click.native= "backClick" v-show="isContentBackTop"></backtop>
     
  </div>
</template>

<script>
import NavBar from '../../components/navbar/NavBar'
import homeSwiper from '../home/childcomps/homeSwiper'
import {getHomeMultidata,getHomeGoods} from '../../network/home'
import recommendView from './childcomps/recommendView'
import featureView from './childcomps/featureView'
import tabControl from '../../components/content/tabControl/tabControl'
import goodsList from '../../components/content/goods/goodsList'
import scroll from '../../components/common/scroll/scroll'
import backtop from '../../components/content/backTop/backtop'
export default {
  name: 'Home',
  components: {
    NavBar,
    homeSwiper,
    recommendView,
    featureView,
    tabControl,
    goodsList,
    scroll,
    backtop,
  },
  data() {
    //存储请求过来的数据
    return {
     banners:[],
     recommends: [],
     goods:{
       'pop': {page: 0, list: []},
       'new': {page: 0, list: []},
       'sell': {page: 0, list: []},
     },
     currentType: 'pop',
     isContentBackTop: false ,
     tabOffsetTop: 0,
     isTabFixed: false,   
     saveY: 0
    }
  },
  created() {
    //请求多个数据
    //调用数据，.then拿到数据
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell') 
  },
   activated(){  
     this.$refs.scroll.scroll.scrollTo(0,this.saveY,0)   
     this.$refs.scroll.refresh()
    },
    deactivated() { 
   this.saveY = this.$refs.scroll.scroll.y
    },
  mounted() {
    //图片加载完成的事件监听
   const refresh = this.debounce(this.$refs.scroll.refresh,200)
    this.$bus.$on('itemImageLoad',() => {
     refresh()
    })  
  },

  methods: {
    debounce(func, delay) {
      let timer = null
      return function(...args) {
       if(timer) clearTimeout(timer)
       timer = setTimeout(() => {
         func.apply(this, args)
       },delay)
      }
    },
    //事件监听相关方法
    tabClick(index) {

      switch(index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
      }
  //     if(this.$refs.topTabControl !== undefined) {
  // this.$refs.tabControl1.currentIndex = index
  //     this.$refs.tabControl2.currentIndex = index
  //     }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    backClick() {
   this.$refs.scroll.scroll.scrollTo(0,0,400)
    },
    contentScroll(position) {
     this.isContentBackTop = -position.y > 1000    
     this.isTabFixed = -position.y > this.tabOffsetTop
    },   
     loadMore() {
       this.getHomeGoods(this.currentType)
     },
     swiperImageLoad() {
      
      this.tabOffsetTop =  this.$refs.tabControl2.$el.offsetTop
     },

    // 网络请求相关方法
    getHomeMultidata() {
       getHomeMultidata().then(res => {
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
    },
    getHomeGoods(type) {
      const page= this.goods[type].page + 1
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1

       this.$refs.scroll.scroll.finishPullUp()
     
    })
   
    }
  }
}
</script>

<style  scoped>
#home {
  padding-top: 44px; 
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
   position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99; 
}

.content {
 overflow: hidden;
 position: absolute;
 top: 44px;
 bottom: 49px;
 left: 0;
 right: 0;
}
.tab-control {
  position: relative;
  z-index: 99;
}
</style>
