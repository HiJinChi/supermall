<template>
  <div class="use-info">
    <div>
      <a href="#">
         <slot name="user-icon">        
        <img src="../../../assets/img/profile/user1.svg" alt="" class="privateImage-svg left">
      </slot>
    <div class="infomation">
        <slot name="user-nickname" class="user">
        <span>登录/</span>
        <span>注册</span>       
      </slot>
    </div>
    <div class="phone">
          <span>
          <img src="../../../assets/img/profile/phone.svg" alt="">
          </span>
          <div class="phone-number">
            <slot name="user-phone" >暂无绑定手机号</slot>
          </div>
    </div>
    <div class="arrow-right">
      <img src="../../../assets/img/profile/arrow.svg" alt="">
    </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'useInfo'
}
</script>

<style  scoped>
.use-info {
    background-color: var(--color-tint);
    padding: 15px 15px 0 15px;
    margin-top: -5px;
}
.privateImage-svg {
    width: 60px;
    height: 60px;
    background-color: #fff;
    border-radius: 30px;
}
.left {
  float: left;
}
.infomation {
  position: relative;
  top: 10px;
  left: 10px;
  color: #fff;
}
.phone {
position: relative;
top: 10px;
left: 4px;
font-size: 13px;
color: #fff;
}
.phone .icon-mobile {
   width: 11px;
   height: 22px;
   margin-top: 18px;
   background-color: #fff;
}
.phone-number {
  position: absolute;
   top: 10px;
  left: 90px;
}
.arrow-right {
    width: 11px;
    height: 22px;
    margin-top: 18px;
    position: relative;
    top: -60px;
    left: 240px;
}
</style>
