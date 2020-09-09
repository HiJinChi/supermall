<template>
  <div>
    
  </div>
</template>

<script>
export default {
  name: 'h',
  mouted(){
    //超时定时器，在3秒后，执行startTimer函数
   setTimeout(() =>{
     this.handleDom();
     this.startTimer()
   },3000)
  },
  methods: {
    //具体写在3秒后会执行什么操作
   startTimer: function() {
     //3秒后会调用playTimer函数，这个函数里面是一个间歇定时器 每隔3秒就调用一次
     this.playTimer= window.setInterval(() => {
       //每隔3秒都会执行scrollcontent这个方法
       this.currentIndex++
       //调用滚动的距离函数，并且，传入参数是下面的这个
       //scrollcontent这个方法是移动滚动的距离 当前的索引号*图片的宽度，就是需要滚动的距离
       this.scrollContent(-this.currentIndex * this.totalWidth)
     },3000)
   },
   //停止间歇定时器
   stopTimer:function() {
     window.clearInterval(this.playTimer)
   },
   //设置滚动的距离方法
   scrollContent: function() {
     //当轮到执行这个方法时，先开始滚动
      this.scrolling = true;
      //开始滚动这个动画  transition是css3的属性，从几秒开始，执行这个动画 ms是毫秒的意思
      this.swiperStyle.transition = 'transform' + this.animDuration + 'ms';
      //判断滚动的位置，如果一共就3张图片。你索引号大于2了，就没图片了，你还走，就出错，这个方法是用来判断索引号不能大于当前长度
      //这里是调用这个方法
      this.checkPosition();
      //滚动完成
       this.scrolling = false
       //这个开始，完成机制，就相当于，我每隔3秒都执行一次滚动，顺序是：开始-滚动相应距离-结束
   },
   //开始设置checkPosition这个方法具体要做什么。上面是调用
   checkPosition: function(){
     window.setTimeout(() => {
       this.swiperStyle.transition = '0ms';
       //如果你当前的索引大于等于元素的个数+1，我让索引等于1，即第一张图片移动的距离是当前索引*宽
       if (this.currentIndex >= this.slideCount + 1) {
            this.currentIndex = 1;
            this.setTransform(-this.currentIndex * this.totalWidth);
            //如果索引小于了元素格式，我就让他等于元素的个数，即最后一个图片
          } else if (this.currentIndex <= 0) {
            this.currentIndex = this.slideCount;
            this.setTransform(-this.currentIndex * this.totalWidth);
          }
          // 2.结束移动后的回调
           this.$emit('transitionEnd', this.currentIndex-1);        
     },3000)
   },
   //前面是调用setTransfrom方法，下面是具体写settransfrom  滚动的位置
   setTransform: function(position) {
     //对应x,y,z轴，是左右移动，移动的是X轴，所以y，z为0，x轴上移动position参数的距离，而这个position在上面调用时
     //移动的距离为索引*宽度
     //transform 浏览器兼容问题，所以写了三种
        this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
        this.swiperStyle['-webkit-transform'] = `translate3d(${position}px), 0, 0`; /* Safari and Chrome */
        this.swiperStyle['-ms-transform'] = `translate3d(${position}px), 0, 0`;/* IE 9 */
   },
   //设置给哪个元素上绑定定时器
   handleDom: function() {
     // 1.获取要操作的元素
     //定时器给
        let swiperEl = document.querySelector('.swiper');
        let slidesEls = swiperEl.getElementsByClassName('slide');
   }

  
  },
}
</script>

<style  scoped>
</style>
