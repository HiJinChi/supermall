<template>
  <div class="wrapper" ref="wrapper">
  <div class="content"> 
      <slot></slot>
      </div>
    </div>

</template>

<script>
  import BScroll from "better-scroll"
export default {
  name: 'scroll',
  props: {
    probeType: {
      probeType: Number,
      default: 1
    },

     pullUpLoad: {
       probeType: Boolean,
       default: false
     },   
  },
  data() {
   return {
     scroll: {}
   }
  },
  methods: {
    refresh() {
     
        this.scroll && this.scroll.refresh()
      },

  },
  mounted() {
    if (!this.$refs.wrapper) return
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: true,
          pullUpLoad: this.pullUpLoad
        })
    //监听滚动事件，将滚动事件传出
    this.scroll.on('scroll', (position) => {
      
          this.$emit('scroll', position)
        })

    //重新计算高度
     this.scroll.refresh()
     this.scroll.on('pullingUp',() => {
       //给这个事件传出去
       this.$emit('pullingUp')
     })
  }
}
</script>

<style  scoped>

</style>
