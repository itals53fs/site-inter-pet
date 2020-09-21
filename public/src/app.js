(function () {
  'use strict'

  let $pets = document.querySelector('[data-js="membros"]');


  let conexao = {
    title: 'PET Conexão dos Saberes',
    imgpet: '',
    txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua.',
    members: [
      { name: 'Ana Paula Nunes', img: '', org: true },
      { name: 'Bianca Bejamim', img: '../img/bianca.jpeg' },
      { name: 'Crislaine mistica', img: '../img/crislaine.jpeg' },
      { name: 'Diana Alves', img: '../img/diana.jpeg' },
      { name: 'Letícia Lana', img: '../img/leticia.jpg', org: true },
      { name: 'Natania Luiza', img: '../img/natania.jpg', org: true },
      { name: 'Raul Otoni', img: '../img/raul.png' },
      { name: 'Tais Monica', img: '../img/tais.jpeg' },
      { name: 'Tales Félix', img: '../img/tales.png', org: true },
      { name: 'Tiago Mercês', img: '../img/tiago.jpg', org: true },
    ],
    tutor: { tutor: '', img: '' },
  }
  let biologia = new Pets('PET Biologia', 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
  '',
  [
    { name: 'ok' },
    { name: '' },
    { name: '' },
    { name: '' },
    { name: '' },
  ]
)
let estrategias = new Pets('PET Estratégias', 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
'',
[
  { name: 'ok' },
  { name: '' },
  { name: '' },
  { name: '' },
  { name: '' },
]
)
let quimica = new Pets('PET Química', 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
'',
[
  { name: 'ok' },
  { name: '' },
  { name: '' },
  { name: '' },
  { name: '' },
]
)
let odonto = new Pets('PET Odontologia', 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
'',
[
  { name: 'ok' },
  { name: '' },
  { name: '' },
  { name: '' },
  { name: '' },
]
)

  $pets.appendChild(frag(conexao));
  $pets.appendChild(fragDemais(biologia));
  $pets.appendChild(fragDemais(estrategias));
  $pets.appendChild(fragDemais(quimica));
  $pets.appendChild(fragDemais(odonto));

  function Pets(title, txt, img, members) {
    this.title = title;
    this.imgpet = img;
    this.txt = txt;
    this.members = members;
  }

  function fragDemais(data) {
    let div = document.createElement('div')
    let title = document.createElement('h3');
    let txt = document.createElement('p');
    let imgPet = document.createElement('img');
    let ul = document.createElement('ul');
    let h4 = document.createElement('h4');
    h4.style.color = '#7159c1';
    h4.style.display = 'inline-block'

    title.textContent = data.title || '.';
    txt.textContent = data.txt;

    imgPet.src = data.imgpet || '../img/icon.png';
    h4.textContent = 'Integrantes';

    ul.setAttribute('class', 'listStyle')
    title.setAttribute('class', 'title-block')
    div.setAttribute('class', 'bloco col-sm-8')

    imgPet.setAttribute('class', 'img-pets')
    data.members.forEach(function (item, index) {

      let nome = document.createElement('span');
      nome.textContent = item.name || 'Fulano de tal';

      let li = document.createElement('li');
      li.setAttribute('class', 'pet-membros');
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

  function frag(data) {
    let div = document.createElement('div')
    let title = document.createElement('h3');
    let txt = document.createElement('p');
    let imgPet = document.createElement('img');
    let ul = document.createElement('ul');
    let h4 = document.createElement('h4');
    let h42 = document.createElement('h4');

    h4.style.color = '#7159c1';
    h42.style.color = '#50fa7b';
    h4.style.display = 'inline-block'

    title.textContent = data.title || '.';
    txt.textContent = data.txt;

    imgPet.src = data.imgpet || '../img/icon.png';
    h4.textContent = 'Integrantes';
    h42.textContent = 'Organização';

    ul.setAttribute('class', 'listStyle')
    title.setAttribute('class', 'title-block')
    div.setAttribute('class', 'bloco col-sm-8')

    imgPet.setAttribute('class', 'img-pets')

    data.members.forEach(function (item, index) {

      let nome = document.createElement('span');
      let img = document.createElement('img');
      img.setAttribute('class', 'img-circo');
      nome.textContent = item.name || 'Fulano de tal';
      img.src = item.img || '../img/icon.png';

      let li = document.createElement('li');
      li.setAttribute('class', 'pet-membros');
      li.appendChild(img);
      li.appendChild(nome);
      ul.appendChild(li);
      if (item.org) {
        img.setAttribute('class', 'img-circo-org');
      }
    })
    div.appendChild(imgPet);
    div.appendChild(title);
    div.appendChild(txt);
    h4.appendChild(h42);
    div.appendChild(h4);
    div.appendChild(ul);
    return div;
  }
})();