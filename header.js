var HEADER = (function () {
  var headerHTML =
    '<a href="/"><img id="logo" src="./assets/logo_g.svg"></a>' +
    '<nav>' +
    '<ul>' +
    '<li><a href="/featured">Featured</a></li>' +
    '<li><a href="/">New</a></li>' +
    '<li><a href="/a-z">A-Z</a></li>' +
    '<li style="float: right">Dark mode:&nbsp;<input type="checkbox" ' + (localStorage.getItem('theme') === 'dark' ? 'checked' : '') + ' onchange="THEME.set(this.checked ? \'dark\' : \'light\');"></li>' +
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
