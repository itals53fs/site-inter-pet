(function () {
  'use strict'

  let $pets = document.querySelector('[data-js="membros"]');


  function Data(title, imgPet, txt, membros, tutor) {
    this.title = title;
    this.imgPet = imgPet;
    this.txt = txt;
    this.membros = membros;
    this.tutor = tutor;
  }

  function frag(data) {
    let div = document.createElement('div')
    let title = document.createElement('h3');
    let txt = document.createElement('p');
    let imgPet = document.createElement('img');
    let ul = document.createElement('ul');
    let h4 = document.createElement('h4');
  
    title.textContent = data.title || '.';
    txt.textContent = data.txt;
    
    imgPet.src = data.imgpet || '../img/fundo.jpeg';
    h4.textContent = 'Integrantes'

    ul.setAttribute('class', 'listStyle')
    title.setAttribute('class', 'title-block')
    div.setAttribute('class', 'bloco col-sm-8')

    imgPet.setAttribute('class', 'img-pets')

    data.members.forEach(function (item, index) {

      let nome = document.createElement('span');
      let img = document.createElement('img');
      img.setAttribute('class', 'img-circo');
      nome.textContent = item.name || '.';
      img.src = item.img ||  '../img/fundo.jpeg';

      let li = document.createElement('li');
      li.setAttribute('class', 'pet-membros');
      li.appendChild(img);
      li.appendChild(nome);
      ul.appendChild(li);
    })
    div.appendChild(imgPet);
    div.appendChild(title);
    div.appendChild(txt);
    div.appendChild(h4);
    div.appendChild(ul);
    return div;
  }

  let conexao = {
    title: 'PET Conexão dos Saberes',
    imgpet: '',
    txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua.',
    members: [
      { name: 'Tales', img: '../img/tales.png' },
      { name: '', img: '' },
      { name: '', img: '' },
      { name: 'Tales', img: '../img/tales.png' },
      { name: 'Tales', img: '../img/tales.png' },
    ],
    tutor: { tutor: '', img: '' },
  }
  $pets.appendChild(frag(conexao));
})();