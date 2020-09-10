(function(){
  document.querySelectorAll('[data-js="tree"]').forEach((element)=>{
      const ul = element.nextElementSibling;
      ul.style.display ='none';
    })

  document.querySelectorAll('[data-js="tree"]').forEach((element)=>{
    element.onclick = function(e){
      const ul = element.nextElementSibling;
      const d = ul.style.display;
      ul.style.display = d === 'none' ? 'block' : 'none';
      
    }
  })

const colors = {
  0: '#388e3c',
  1:'#1565c0',
  2: '#e53935',
  3: '#f67809',
  4: '#5e35b1',
  5: '#fbc02d',
  6: '#d81b60',
  7: '#64dd17',
  8: '#00acc1',
  9: '#304ffe',
  10: '#9f6581',
  11: '#25b6da',
  12: '#616161',
  get(tag){
    return this[tag] ? this[tag] : this[12];
  }
}
let $span = document.querySelectorAll('ul[data-js="tree"]');
  Array.prototype.forEach.call($span, function(e, i){
    Array.prototype.forEach.call(e.children, (item, index)=>{
      item.style.borderColor = colors[4]
      if(index===0){
        item.style.backgroundColor = colors[4]
      }
      if(index>0){
      item.firstElementChild.style.backgroundColor = colors[0]
      let segundaCamada = item.firstElementChild.nextElementSibling.children;
      Array.prototype.forEach.call(segundaCamada, (e)=>{
        e.style.borderColor = colors[0];
        let terceiracamada = e.children;

        Array.prototype.forEach.call(terceiracamada, (e, i)=>{
         if(i===0)
         e.style.backgroundColor = colors[3]
         
         Array.prototype.forEach.call(e.children, (e, i)=>{
          if(i===0){
            e.style.color = colors[4]
          }
          
         })
        })
      })
    }
    
    
    
  })
   
  })

})();


