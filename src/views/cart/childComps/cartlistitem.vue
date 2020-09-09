<template>
 <div id="shop-item" >
    <div class="item-selector">
     <check-button :is-checked='product.checked' @click.native='checkClick'></check-button>
    </div>
    <div class="item-img">
      <img :src="product.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{product.title}}</div>
      <div class="item-desc">商品描述: {{product.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">￥{{product.price}}</div>
        <img src="../../../assets/img/cart/add.svg" alt="" class="increase" @click="addClick" >
        <div class="item-count right">x{{product.count}}</div>
        <img src="../../../assets/img/cart/minus.svg" alt="" class="decrease" @click="minusClick">

        
       
      </div>
    </div>
  </div>
</template>

<script>
import checkButton from '../../../components/content/checkButton/checkButton'
export default {
  name: 'cartlistitem',

  components: {
    checkButton
  },
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    checkClick() {
      this.product.checked = !this.product.checked
    },
    addClick() {
      this.product.count ++
    },
    minusClick() {
    if( this.product.count <=2) {
        this.product.count = 2
    }
            this.product.count --
    }

  }
}
</script>

<style  scoped>
  #shop-item {
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }

  .item-selector {
    width: 14%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item-title {
    font-size: 15px;
  }
  .item-price {
    font-size: 14px;
  }
  .item-title, .item-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item-img {
    padding: 5px;
    /*border: 1px solid #ccc;*/
  }

  .item-img img {
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }

  .item-info {
    font-size: 16px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }

  .item-info .item-desc {
    font-size: 13px;
    color: #666;
    margin-top: 15px;
  }

  .info-bottom {
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }

  .info-bottom .item-price {
    color: orangered;
  }
  .item-count {
    position: relative;
    left: -30px;
  }
.item-info img {
  height: 18px;
}
.increase {
  position: relative;
  left: 100px;
}
.decrease {
  position: relative;
  left: 25px;
}

</style>
