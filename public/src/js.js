
(function(){
  'use strict'
  let $button = document.querySelector('[data-js="button"]');

  
  $button.addEventListener('click',display, false);

  /* $button.textContent = '-' */
  $button.setAttribute('class', 'glyphicon glyphicon-minus')
  function display(){
    if($button.getAttribute('class') == 'glyphicon glyphicon-minus' ){
        return $button.setAttribute('class', 'glyphicon glyphicon-remove');
    }
    $button.setAttribute('class', 'glyphicon glyphicon-minus')
    
  }

})();