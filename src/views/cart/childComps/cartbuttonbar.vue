<template>
  <div class="button-bar">

     <div class="check-content">
      <check-button class="check-button" :is-checked='isSelectAll' @click.native='checkClick'></check-button>
      <span>全选</span>
   </div>
   <div class="button-total">
     合计：{{totalPrice}}
   </div>

   <div class="calculate">
     去计算({{checkLength}})
   </div>
  </div>
</template>

<script>
import checkButton from '../../../components/content/checkButton/checkButton'
export default {
  name: 'cartbuttonbar',
  components: {
    checkButton
  },
  computed: {
   totalPrice() {
     return '￥' + this.$store.state.cartList.filter(item => {
       return item.checked
     }).reduce((preValue, item)=> {
       return preValue + item.price * item.count
     },0).toFixed(2)
   },
   checkLength() {
     return this.$store.state.cartList.filter(item =>item.checked).length
   },
   isSelectAll() {
      // return !(this.$store.state.cartList.filter(item =>!item.checked).length)
      if(this.$store.state.cartList.length ==0){
        return false
      }
      return !this.$store.state.cartList.find(item =>!item.checked)
   }
  },
  methods: {
    checkClick() {
       if(this.isSelectAll) {
         this.$store.state.cartList.forEach(item => item.checked = false);
       }else {
           this.$store.state.cartList.forEach(item => item.checked = true);
       }
    }
  }
}
</script>

<style  scoped>
.button-bar {
  position: relative;
  display: flex;
  height: 40px;
  top: 403px;
 background-color: #eee;
  line-height: 40px;
  font-size: 14px;
  

}

.check-content {
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 60px;
}
.check-button {
  line-height: 16px;
width: 16px;
height: 16px;
margin-right: 5px;
}
.button-total {
  margin-left: 20px;
  flex: 1;
}
.calculate {
  width: 80px;
  background-color: #FF4500;
  margin-left: 20px;
  text-align: center;
}
</style>
