var acceleration;
$('#btn').on('click', function () {
  var btnTop = $('#btn')[0].offsetTop - $('body')[0].scrollTop,
    btnLeft = $('#btn')[0].offsetLeft,
    mallbarTop = $('#mallbar')[0].offsetTop,
    mallbarLeft = $('#mallbar')[0].offsetLeft;

  var timeout = 1000;

  var frame = 100;
  //  计算物体垂直方向初速度，按钮离顶部越近则初速度越小
  var V0 = -btnTop / 40;
  //  计算物体加速度
  acceleration = ((mallbarTop - btnTop) - V0 * frame) * 2 / (frame * frame);

  runAnimation($('.test'), btnTop, V0, btnLeft, (mallbarLeft - btnLeft) / frame, mallbarLeft, timeout / frame);
});

function runAnimation(goods, top, topStep, left, leftStep, maxRight, timeout) {
  if (left < maxRight) {
    //alert(1);
    left += leftStep;
    top += topStep;
    topStep += acceleration;
    setTimeout(function () {
      goods.css({
        'top': top + 'px',
        'left': left + 'px'
      });
      runAnimation(goods, top, topStep, left, leftStep, maxRight, timeout);
    }, timeout);
  }
}