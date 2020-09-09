<template>
<scroll class="content" >
    <div class="content-info"> 
      <div class="item" v-for="(item, index) in subcategories.list" :key="index">
         <a :href="item.link">
          <img class="item-img" :src="item.image" alt="">
          <div class="item-text">{{item.title}}</div>
        </a>       
      </div>  
  </div>
</scroll>
</template>

<script>
import scroll from '../../../components/common/scroll/scroll'
  export default {
    name: "categoryContent",
    components: {
      scroll
    },
   
    props: {
      subcategories: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
.content {

 overflow: hidden;
 position: absolute;
 top: 44px;
 bottom: 49px;
 left: 100px;
 right: 0;
}


  .panel img {
    width: 100%;
  }

  .item {
    margin-top: 20px;
    display: inline-block;
    height: 100%;
    width: 100px;
    text-align: center;
    font-size: 12px;
  }

  .item-img {
    width: 40%;
  }

  .item-text {
    margin-top: 15px;
  }

</style>
