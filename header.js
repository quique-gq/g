var HEADER = (function () {
  var headerHTML =
    '<a href="/"><img width="300px" height="130px" src="./assets/logo_g.svg"></a>' +
    '<nav>' +
    '<ul>' +
    '<li><a href="/">Featured</a></li>' +
    '<li><a href="/">New</a></li>' +
    '<li><a href="/">A-Z</a></li>' +
    '</ul>' +
    '<hr>' +
    '</nav>';
  return {
    load: function () {
      document.getElementsByTagName('header')[0].insertAdjacentHTML('afterbegin', headerHTML);
      console.log('header loaded!');
    }
  }
})();
