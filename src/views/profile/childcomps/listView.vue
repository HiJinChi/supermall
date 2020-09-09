<template>
  <div class="list-view">
    <div v-for="(item,index) in listitem" :key="index" class="item">
      <img :src="item.image" alt="">  
      <!-- <img src="../../../assets/img/profile/APP.svg" alt=""> -->
      <div>{{item.info}}</div>
    </div>

  </div>
</template>
<script>

export default {
  name: 'listview',
  props: {
    listitem: {
      type:Array,
      default() {
        return []
      }
    }
  },

}
</script>

<style  scoped>
.list-view {
  background-color: #fff;
  margin-bottom: 15px;
  text-align: left;
}
.item {
  position: relative;
  margin-left: 50px;
  margin-bottom: 10px;
  padding-top: 10px;
  font-size: 14px;

}
.list-view img {
  height: 18px;
  width: 18px;
  position: absolute;
  left: -40px;
  top: 8px;
}
</style>
