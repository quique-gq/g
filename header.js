(function () {
  var headerHTML =
    '<a href="/"><img width="200px" height="88px" src="./assets/logo_g.svg"></a>' +
    '<nav>' +
    '<ul>' +
    '<li><a href="/">Home</a></li>' +
    '<li><a href="/">New Games</a></li>' +
    '<li><a href="/">A-Z</a></li>' +
    '</ul>' +
    '<hr>' +
    '</nav>';
  document.getElementsByTagName('header')[0].insertAdjacentHTML('afterbegin', headerHTML);
})();
