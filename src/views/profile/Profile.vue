<template>
  <div class="profile">
    <navbar class="profile-navbar"><div slot="center">蘑菇街</div></navbar>
    <use-info></use-info>
    <account-profile></account-profile>
    <list-view :listitem='firstitem'></list-view>
    <list-view :listitem='lastitem'></list-view>
  </div>
</template>

<script>
import navbar from '../../components/navbar/NavBar'
import useInfo from '../profile/childcomps/uesInfo'
import accountProfile from '../profile/childcomps/accountProfile'
import listView from '../profile/childcomps/listView'
export default {
  name: 'Profile',
  components: {
    navbar,
    useInfo,
    accountProfile,
    listView
  },
  data() {
    return {
      firstitem: [
        {info: '我的消息' , image: require('../../assets/img/profile/useinfo.svg')},
        {info: '积分商城',image:require('../../assets/img/profile/picket.svg')},
        {info: '会员卡',image:require('../../assets/img/profile/vip.svg')},
        ],
      lastitem: [
        {info: '我的购物车',image:require('../../assets/img/profile/shopping.svg')},
        {info: '下载购物APP',image:require('../../assets/img/profile/APP.svg')},
        ]
    }
  }
}
</script>

<style  scoped>
.profile {
  background-color: #F2F2F2;
}
.profile-navbar {
  background-color: var(--color-tint);
  color: #fff;

}
</style>
