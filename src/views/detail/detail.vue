<template>
  <div id="detail">
    <detailnavbar class="detail-nav" @detailClick="detailClick" ref="nav"></detailnavbar>
    
   <scroll  class="content" ref="scroll" :probeType="3" @scroll="contentScroll" > 
     <detailswiper :top-images = 'topImages'></detailswiper>
     <detailbaseinfo :goods="goods"></detailbaseinfo>
     <detailshopinfo :shop='shop'></detailshopinfo>
     <detailGoodsInfo :detail-info='detailInfo' @imageLoad= 'imageLoad'></detailGoodsInfo>
     <detailParamsInfo  ref="param" :param-info="paramInfo"></detailParamsInfo>
     <detailCommentInfo :comment-info='commentInfo' ref="comment"></detailCommentInfo>
    <detailrecommend :recommends='recommends' ref="recommend"></detailrecommend>
    </scroll>
    
    <detailbottombar @addToCart='addToCart'></detailbottombar>
    <backtop @click.native= "backClick" v-show="isContentBackTop"></backtop>
    <!-- <toast :message="message" :show='show'></toast> -->
  </div>
</template>

<script>
import detailnavbar from '../detail/childcomponent/detailnavbar'
import {getDetail, Goods, Shop, GoodsParam, getRecommend} from '../../network/detail'
import detailswiper from './childcomponent/detailswiper'
import detailbaseinfo from '../detail/childcomponent/detailbaseinfo'
import detailshopinfo from '../detail/childcomponent/detailshopinfo'
import detailGoodsInfo from '../detail/childcomponent/detailGoodsInfo'
import detailParamsInfo from '../detail/childcomponent/detailParamsInfo'
import detailCommentInfo from '../detail/childcomponent/detailCommentInfo'
import detailrecommend from '../detail/childcomponent/detailrecommend'
import detailbottombar from '../detail/childcomponent/detailbottombar'
import backtop from '../../components/content/backTop/backtop'
import scroll from '../../components/common/scroll/scroll'
// import toast from '../../components/common/toast/toast'
export default {
  name: 'detail',
  components: {
    detailnavbar,
    detailswiper,
    detailbaseinfo,
    detailshopinfo,
    detailGoodsInfo,
    detailParamsInfo,
    detailCommentInfo,
    detailrecommend,
    detailbottombar,
    backtop,
    scroll,
    // toast
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      currentIndex:0,
      isContentBackTop: false ,
      // message: '',
      // show: false
      
  
    }
  },
    activated() {
   this.$refs.scroll.scroll.scrollTo(0,this.saveY,0)
   this.$refs.scroll.scroll.refresh()
 
  },
   deactivated() {
   this.saveY = this.$refs.scroll.scroll.y
   },
  created() {

    //保存传入的iid
    this.iid = this.$route.params.iid
  
    //根据iid请求详细数据
    getDetail(this.iid).then(res => {
   
        const data = res.result
      this.topImages = data.itemInfo.topImages
 
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
       
      this.shop = new Shop(data.shopInfo)

     
      this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
      //评论信息
       if (data.rate.list) {
            this.commentInfo = data.rate.list[0];
         
          }
    })
    //请求推荐数据
    getRecommend().then(res =>{  
   this.recommends = res.data.list 

    })  
    
  },

  updated() {
     this.themeTopYs = []
     this.themeTopYs.push(0)
     this.themeTopYs.push(this.$refs.param.$el.offsetTop)
     this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
     this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
     this.themeTopYs.push(Number.MAX_VALUE)
  },
 
  methods: {
    imageLoad() {
      this.$refs.scroll.scroll.refresh()
    },
    detailClick(index) {    
      this.$refs.scroll.scroll.scrollTo(0,-this.themeTopYs[index],300)
    },
     contentScroll(position) {
     this.isContentBackTop = -position.y > 1000    
     this.isTabFixed = -position.y > this.tabOffsetTop
       const positionY = -position.y
       let length = this.themeTopYs.length
      for(let i=0; i<length-1; i++) {
       
       if(this.currentIndex != i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]))
       {
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }   
    },
    backClick() {
   this.$refs.scroll.scroll.scrollTo(0,0,400)
    },
   
    addToCart() {
      const product= {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.nowPrice
      //iid一定要传，因为他是商品的唯一标识
      product.iid = this.iid
        // this.$store.commit('addCart',product)
       this.$store.dispatch('addCart',product).then(res => {
        //  this.show = true
        //  this.message = res
        // setTimeout(() => {
        //   this.show = false
        //   this.message = ''
      //   // }, 1500);
      this.$toast.show(res,2000)
       })

      
    } 
    
  },
   
}
</script>

<style  scoped>
#detail {
  position: relative;
  z-index: 999;
  background-color: #fff;
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 999;
  background-color: #fff;
}

  .content {
    position: absolute;
    top: 44px;
    bottom: 60px;
  }

</style>
