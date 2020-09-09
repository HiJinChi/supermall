import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'


export default {
  addCart(context, payload) {
  return new Promise((resolve) => {
    let oldProduct = context.state.cartList.find(function(item) {
      return item.iid === payload.iid
    
  })
  if(oldProduct) {//数量加1
    // oldProduct.count += 1
    context.commit(ADD_COUNTER,oldProduct)
    resolve('数量+1')
  }else {//添加新商品
    payload.count = 1
    // context.state.cartList.push(payload)
   context.commit(ADD_TO_CART ,payload)
   resolve('添加商品')
  }
  })
}
}