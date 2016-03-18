var $html = $('html');
var $ball = $('.ball');
var $picker = $('form');
var $input = $('#pick-color');

$picker.on('change', function () {
  console.log('works');
  $ball.css('background-color', $input.val());
});
