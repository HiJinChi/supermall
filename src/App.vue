<template>
  <div id="app">
  <!-- <keep-alive exclude="detail"><router-view/></keep-alive> -->
		<keep-alive >
			<router-view v-if="$route.meta.keepAlive"></router-view>	
		</keep-alive>
		
		<router-view  v-if="!$route.meta.keepAlive"></router-view>	

  <mainTabBar></mainTabBar>
  
  </div>
</template>

<script>
import MainTabBar from './components/content/mainTabbar/mainTabBar'

export default {
  name: 'App',
  components: {
   MainTabBar
  }
}
</script>

<style>
@import './assets/css/base.css'
</style>
