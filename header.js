var HEADER = (function () {
  var headerHTML =
    '<a href="/" class="svgOutline" style="text-decoration: none"><img id="logo" src="./assets/logo_g.svg"><span style="font-weight: bold; font-style: italic; color: #304888; text-shadow: -1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000; letter-spacing: 3px">Beta</span></a>' +
    '<nav>' +
    '<ul class="ilList">' +
    '<li><a class="hover au" href="/featured">Featured</a></li>' +
    '<li><a class="hover au" href="/">New</a></li>' +
    '<li><a class="hover au" href="/a-z">A-Z</a></li>' +
    '<li style="float: right"><a class="hover"><input class="themeCheckbox" type="checkbox" ' + (localStorage.getItem('theme') === 'dark' ? 'checked' : '') + ' onchange="THEME.set(this.checked ? \'dark\' : \'light\'); this.blur();"></a></li>' +
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
