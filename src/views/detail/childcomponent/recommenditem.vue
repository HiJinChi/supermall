<template>
  <div class="goods-item">
    <img :src="recommends.image" alt="" @load="imageLoad">
    <div class="goods-info">
      <p>{{recommends.title}}</p>   
      <span class="price">￥{{recommends.discountPrice}}</span>
      <span class="collect">{{recommends.cfav}}</span>
    </div>
    <img src="" alt="">
  </div>
 
</template>
<script>
export default {
  name: 'recommenditem',
  props: {
    recommends: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  
  methods: {
    imageLoad() {
     this.$bus.$emit('itemImageLoad')
    },
    itemClick() {
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  }
}
</script>

<style  scoped>
 .goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }
  .goods-item img {
    width: 100%;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 14px;
    height: 14px;
    background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
