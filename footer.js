var FOOTER = (function () {
  var footerHTML =
    '<hr>' +
    '<ul class="ilList" style="margin: 8px">' +
    '<li>by Literal Line</li>' +
    '<li>Source code:&nbsp;<a class="hover au" href="https://github.com/quique-gq/g" target="_blank">Github</a></li>' +
    '<li>more at <a class="hover au" href="https://quique.gq" target="_blank">Quique.gq</a></li>' +
    '</ul>';
  return {
    load: function () {
      document.getElementsByTagName('footer')[0].insertAdjacentHTML('afterbegin', footerHTML);
      console.log('footer loaded!');
    }
  }
})();
