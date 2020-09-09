<template>
  <div class="category">
    <category-navNar></category-navNar>
    <category-menu :categories="categories" @selectItem="selectItem"></category-menu>
 
     
      <category-content :subcategories="showSubcategory"></category-content>



  </div>
</template>

<script>
import categoryNavNar from './childcomps/categoryNabBar'

import categoryMenu from './childcomps/categoryMenu'
import {getCategory, getSubcategory,} from '../../network/category'
import categoryContent from './childcomps/categoryContent'
export default {
  name: 'category',
  components: {
    categoryNavNar,
    categoryMenu,
    categoryContent,

  },
 data() {
   return {
      categories: [],
       categoryData: {
        },
        currentIndex: -1,

   }
 },
 computed: {
   showSubcategory() {
     if (this.currentIndex === -1) return {}
        return this.categoryData[this.currentIndex].subcategories
      },
 },
 created() {
 this._getCategory()
 },
 methods: {
   
      selectItem(index) {
     this._getSubcategories(index)
      },

   _getCategory() {
     getCategory().then(res => {
     this.categories = res.data.category.list
     for(let i = 0;i<this.categories.length; i++) {
       this.categoryData[i] ={
           subcategories: {},          
              categoryDetail: {
                'pop': [],
                'new': [],
                'sell': []               
              }
        }
         this._getSubcategories(0)
     }
   })
   },
   _getSubcategories(index) {
     this.currentIndex = index
     getSubcategory(this.categories[index].maitKey).then(res => {
        this.categoryData[index].subcategories = res.data
         this.categoryData = {...this.categoryData}
     })
   }
       
 },
 
}
</script>

<style  scoped>


</style>
