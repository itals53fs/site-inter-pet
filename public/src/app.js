(function () {
  'use strict'

  let $pets = document.querySelector('[data-js="membros"]');

/*
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
  */
  let conexao = new Pets('PET Conexão dos Saberes', 'Lorem ipsum dolor sit amet,consectetur'+
    'adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
  '../img/photo.jpg',
  [
    { name: 'Ana Paula Nunes', img: '../img/ana.jpeg'},
    { name: 'Bianca Bejamim', img: '../img/bianca.jpeg'},
    { name: 'Ana Cardoso', img: '../img/cardoso.jpeg'},
    { name: 'Crislaine mistica', img: '../img/crislaine.jpeg'},
    { name: 'Diana Alves', img: '../img/diana.jpeg'},
    { name: 'Letícia Lana', img: '../img/leticia.jpg'},
    { name: 'Natania Luiza', img: '../img/natania.jpg'},
    { name: 'Raul Otoni', img: '../img/raul.png'},
    { name: 'Tais Monica', img: '../img/tais.jpeg'},
    { name: 'Tales Félix', img: '../img/tales.png'},
    { name: 'Tiago Mercês', img: '../img/tiago.jpg'},
  ]
)
let biologia = new Pets('PET Biologia', 'Lorem ipsum dolor sit amet,consectetur'+
'adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
'../img/biologia.jpg',
[
{ name: 'Sâmia Francielle' },
{ name: 'João Paulo' },
{ name: 'Izabela Jardim' },
{ name: 'Thaísa Mendes' },
{ name: 'Rebeca Cruz' },
{ name: 'Alice Garcia'},
{ name: 'Amarílis Abreu'},
{ name: 'Nathalia Souza'},
{ name: 'Talisson da Silva'},
{ name: 'Karina Aparecida'},
]
)
let nTec = new Pets('PET- Novas Tecnologias', 'Lorem ipsum dolor sit amet,consectetur'+
'adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
'../img/tecnologias.jpg',
[
  { name: 'CELSO AMARAL' },
  { name: 'GILSON RODRIGUES' },
  { name: 'RYAN MENDES' },
  { name: 'JULIANA MARIA' },
  { name: 'MARCO ANTONIO' },
  { name: 'HELIO SOARES' },
  { name: 'GUSTAVO HENRIQUE' },
  { name: 'MARCO ANTONIO' },
  { name: 'VIVIANE DA SILVA' },
  { name: 'VINICIUS TEIXEIRA' },
  { name: 'THAIS ALVES' },
]
)


let estrategias = new Pets('PET Estratégias', 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
'../img/etrategias.jpg',
[
  { name: 'ok' },
  { name: '' },
  { name: '' },
  { name: '' },
  { name: '' },
]
)
let quimica = new Pets('PET Química', 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
'../img/quimica.jpg',
[
  { name: 'ok' },
  { name: '' },
  { name: '' },
  { name: '' },
  { name: '' },
]
)
let odonto = new Pets('PET Odontologia', 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
'../img/odontologia.jpg',
[
{ name: 'Paula Cristina' },
{ name: 'Marianna Miranda' },
{ name: 'Matheus de Melo' },
{ name: 'Evelline Murta' },
{ name: 'Maria Luíza' },
{ name: 'Lailla Lemes' },
{ name: 'Célio Leone' },
{ name: 'Ana Cláudia' },
{ name: 'Gabriel Botelho ' },
{ name: 'Gabriela Fonseca' },
{ name: 'Isabelle D’Angelis' },
{ name: 'Ana Luiza' },
{ name: 'Etiane Silva' },
]
)

  $pets.appendChild(frag(conexao));
  $pets.appendChild(fragDemais(odonto));
  $pets.appendChild(fragDemais(biologia));
  $pets.appendChild(fragDemais(estrategias));
  $pets.appendChild(fragDemais(nTec));
  $pets.appendChild(fragDemais(quimica));

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

    imgPet.src = data.imgpet || '../img/logo.jpeg';
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
    h42.style.display = 'inline-block'

    title.textContent = data.title || '.';
    txt.textContent = data.txt;

    imgPet.src = data.imgpet || '../img/logo.jpeg';
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
      img.src = item.img || '../img/logo.jpeg';

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
    div.appendChild(h42);
    div.appendChild(ul);
    return div;
  }
})();