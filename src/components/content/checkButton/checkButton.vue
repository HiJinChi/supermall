<template>
  <div class="check-button" :class="{check: isChecked}">
    <img src="../../../assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'checkButton',
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style  scoped>
.check-button {
  border-radius: 50%;
  border:2px solid #C5C5C5;
}
.check {
  background-color: tomato;
  border-color: #FF6347;
}
</style>
