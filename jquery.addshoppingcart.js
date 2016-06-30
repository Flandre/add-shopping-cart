$.fn.extend({
  addShoppingcart: function (options) {
    var defaults = {
      mallBarObj: $('.Mallbar'),
      timeout: 1000,
      frame: 100
    };
    options = $.extend(defaults, options);
    var o = options;
    this.on('click', function () {
      //  获取按钮坐标和购物车条的坐标
      var btnTop = this.offsetTop - $('body')[0].scrollTop,
        btnLeft = this.offsetLeft,
        mallbarTop = o.mallBarObj[0].offsetTop,
        mallbarLeft = o.mallBarObj[0].offsetLeft;
      //  设置动画总延时
      var timeout = o.timeout;
      //  设置动画帧数
      var frame = o.frame;
      //  计算物体垂直方向初速度，按钮离顶部越近则初速度越小
      var V0 = -btnTop / 40;
      //  计算物体加速度
      var accele = ((mallbarTop - btnTop) - V0 * frame) * 2 / (frame * frame);

      runAnimation($('.add-wares'), btnTop, V0, accele, btnLeft, (mallbarLeft - btnLeft) / frame, mallbarLeft, timeout / frame);
    })
  }
});

function runAnimation(wares, top, topStep, accele, left, leftStep, maxRight, timeout) {
  if (left < maxRight) {
    //alert(1);
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
  }
}