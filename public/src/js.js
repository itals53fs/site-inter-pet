
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
    console.log($nav.style.left)
    console.log($button.getAttribute('class'))

  }
})();