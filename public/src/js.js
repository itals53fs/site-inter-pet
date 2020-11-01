
(function () {
  'use strict'
  let $button = document.querySelector('[data-js="button"]');
  let $body = document.querySelector('section');

  let $nav = document.querySelector('[data-js="navtrasfrome"]');


  $button.addEventListener('click', display, false);
  $body.addEventListener('click', displayBody, false);

  $nav.setAttribute('class', 'displayNormal');
  function display() {
    if ($button.children[1].getAttribute('class') == 'inline') {
      $nav.setAttribute('class', 'displayZero');
      $button.children[0].setAttribute('class', 'rotate0');
      $button.children[1].setAttribute('class', 'none');
      $button.children[2].setAttribute('class', 'rotate1');
    }
    else {
      $nav.setAttribute('class', 'displayNormal');
      $button.children[0].setAttribute('class', 'inline');
      $button.children[1].setAttribute('class', 'inline');
      $button.children[2].setAttribute('class', 'inline');
    }

  }

  function displayBody() {

    if ($nav.getAttribute('class') == 'displayZero' && $button.children[1].getAttribute('class') == 'none') {
      $nav.setAttribute('class', 'displayNormal')
      $button.children[0].setAttribute('class', 'inline');
      $button.children[1].setAttribute('class', 'inline');
      $button.children[2].setAttribute('class', 'inline');
    }
  }

  let data = new Date()
  let $spanP = document.querySelectorAll('span[data-js="checkbox"]');
  Array.prototype.forEach.call($spanP, function(item, index){
    if(data.getDate() >= 13 && (data.getHours() >= 21 || data.getDate() >= 14) && index == 0){
      item.setAttribute('class', 'glyphicon glyphicon-ok check-list');
    }
    if(data.getDate() >= 14 && (data.getHours() >= 11  || data.getDate() >= 15) && index == 1){
      item.setAttribute('class', 'glyphicon glyphicon-ok check-list');
    }
    if(data.getDate() >= 14 && (data.getHours() >= 17  || data.getDate() >= 15) && index == 2){
      item.setAttribute('class', 'glyphicon glyphicon-ok check-list');
    }
  })
  
})();