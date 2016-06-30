#Add-shopping-cart-animation

##使用方法

```javascript
  //  为按钮绑定addShoppingcart，当点击时触发
  $('#btn').addShoppingcart({
    //	购物车的位置，一定要最外层容器，否则取不到页面位置
    mallBarObj: $('.Mallbar'),
    //	购物车图标位置，用于存放 +1 的动画，比如无内容且position为relative
    shoppingCartObj: $('.shopping-cart'),
	//	设置动画执行时间
    timeout: 1000
  })
```

配置后点击按钮就会有商品从按钮位置沿抛物线运行到购物车位置，到达目标位置后弹出 +1 的字样
