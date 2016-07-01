(function ($) {
  var shoppingCartObj;
  $.fn.extend({
    addShoppingcart: function (options) {
      var defaults = {
        mallBarObj: $('.Mallbar'),
        shoppingCartObj: $('.shopping-cart'),
        timeout: 1000
      };
      options = $.extend(defaults, options);
      var o = options;
      this.on('click', function () {
        //  获取按钮坐标和购物车条的坐标
        var btnTop = this.offsetTop - $('body')[0].scrollTop;
        var btnLeft = this.offsetLeft;
        var mallbarTop = o.mallBarObj[0].offsetTop;
        var mallbarLeft = o.mallBarObj[0].offsetLeft;

        shoppingCartObj = o.shoppingCartObj;
        //  设置动画总延时
        var timeout = o.timeout;
        //  设置动画帧数
        var frame = 100;
        //  计算物体垂直方向初速度，按钮离顶部越近则初速度越小
        var V0 = -btnTop / 40;
        //  计算物体加速度
        var accele = ((mallbarTop - btnTop) - V0 * frame) * 2 / (frame * frame);
        $('body').append('<div class="add-wares"><img src="images/testImg.jpg"></div>');

        runAnimation($('.add-wares'), btnTop, V0, accele, btnLeft, (mallbarLeft - btnLeft) / frame, mallbarLeft, timeout / frame);
      })
    }
  });

  function runAnimation(wares, top, topStep, accele, left, leftStep, maxRight, timeout) {
    //  每次绘制都缩小
    wares.width(wares.width() - 0.3);
    wares.height(wares.width() - 0.3);
    if (left < maxRight) {
      left += leftStep;
      top += topStep;
      topStep += accele;
      setTimeout(function () {
        wares.css({
          'top': top + 'px',
          'left': left + 'px'
        });
        runAnimation(wares, top, topStep, accele, left, leftStep, maxRight, timeout);
      }, timeout);
    } else {
      $('.add-wares').remove();
      setTimeout(function(){
        shoppingCartAnimate();
      },100)
    }
  }

  function shoppingCartAnimate() {
    shoppingCartObj.append('<span class="addOneWare">+1</span>');
    $('.addOneWare').addClass('slideOutUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (){
      $('.addOneWare').remove()
    })
  }
})(jQuery);
