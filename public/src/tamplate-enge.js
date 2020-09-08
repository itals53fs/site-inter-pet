(function(){
'use strict'
document.querySelectorAll('[data-js="nav"]').forEach(link=>{
  const conteudo = document.getElementById('content');
  link.onclick = function(event){
    event.preventDefault();
    fetch(link.href)
      .then(resp=> resp.text()
      .then(html => conteudo.innerHTML = html))
      const title = document.querySelector('title');
      title.textContent = this.textContent;
  }
})
})();