<template>
  <div class="acccount-profile">
    <div class="account-left">
      <span>{{surplus}}元</span>
      <div id="my-surplus">我的余额</div>
    </div>
    <div class="account-center">
      <span>{{shops}}个</span>
      <div id="my-shops">我的优惠</div>
    </div>
    <div class="account-right">
      <span>{{intergral}}分</span>
      <div id="my-intergral">积分</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'accountProfile',
  data() {
    return {
      surplus: 0 + '.' + 0 + 0 ,
      shops: 0,
      intergral: 0
    }
  }
}
</script>

<style  scoped>
span {
  color: #FF5F3E;
  font-weight: 600;
}
.acccount-profile {
display: flex;
margin-bottom: 15px;
}
.account-left {
  flex: 1;
  padding: 10px;
  text-align: center;
  background-color: #fff;
  border-right: 1px solid #F2F2F2;
}
.account-center {
  flex: 1;
  background-color: #fff;
  padding: 10px;
  text-align: center;
  border-right: 1px solid #F2F2F2;
}
.account-right {
  flex: 1;
  background-color: #fff;
  padding: 10px;
  text-align: center;
}
#my-surplus {
  margin-top: 5px;
  font-size: 14px;
}
#my-shops {
  margin-top: 5px;
   font-size: 14px;
}
#my-intergral {
  margin-top: 5px;
   font-size: 14px;
}
</style>
