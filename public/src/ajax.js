(function () {
  'use strict'
  function getIframe() {
    let ajax = new XMLHttpRequest();
    ajax.open('GET', "https://docs.google.com/forms/d/e/1FAIpQLSeTEejAKqO6_Db3UPrRFa5ANScUak2QE_-uwNp8W_uXdDKwQw/viewform?embedded=true");
    ajax.withCredentials = true;
    ajax.send();
    ajax.addEventListener('readystatechange', ok, false);
  }
  function ok(){
    console.log(this.status)
  }
  getIframe();
})();