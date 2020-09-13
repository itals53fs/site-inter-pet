
(function () {
  'use strict'
  let $button = document.querySelector('[data-js="button"]');
  let $body = document.querySelector('section');

  let $nav = document.querySelector('[data-js="navtrasfrome"]');
  $button.setAttribute('class', 'glyphicon glyphicon-minus')

  $button.addEventListener('click', display, false);
  $body.addEventListener('click', displayBody, false);

  $nav.setAttribute('class', 'displayNormal');
  function display() {
    if ($button.getAttribute('class') == 'glyphicon glyphicon-minus') {
      $nav.setAttribute('class', 'displayZero');
      $button.setAttribute('class', 'glyphicon glyphicon-remove')
    }
    else {
      $button.setAttribute('class', 'glyphicon glyphicon-minus')
      $nav.setAttribute('class', 'displayNormal');
    }

  }

  function displayBody() {

    if ($nav.getAttribute('class') == 'displayZero' && $button.getAttribute('class') == 'glyphicon glyphicon-remove') {
      $nav.setAttribute('class', 'displayNormal')
      $button.setAttribute('class', 'glyphicon glyphicon-minus');
    }
  }

  let data = new Date()
  let $spanP = document.querySelectorAll('span[data-js="checkbox"]');
  Array.prototype.forEach.call($spanP, function(item, index){
    if(data.getDate() >= 12 && data.getHours() >= 10 && index == 0){
      item.setAttribute('class', 'glyphicon glyphicon-ok check-list');
    }
    if(data.getDate() >= 12 && data.getHours() >= 10 && index == 1){
      item.setAttribute('class', 'glyphicon glyphicon-ok check-list');
    }
    if(data.getDate() >= 12 && data.getHours() >= 10 && index == 2){
      item.setAttribute('class', 'glyphicon glyphicon-ok check-list');
    }
  })
  
})();