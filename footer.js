var FOOTER = (function () {
  var headerHTML =
    '<hr>' +
    '<ul class="ilList" style="margin: 8px">' +
    '<li>by Literal Line</li>' +
    '<li>Source code:&nbsp;<a class="au" href="https://github.com/quique-gq/g" target="_blank">Github</a></li>' +
    '<li>more at <a class="au" href="https://quique.gq" target="_blank">Quique.gq</a></li>' +
    '</ul>';
  return {
    load: function () {
      document.getElementsByTagName('footer')[0].insertAdjacentHTML('afterbegin', headerHTML);
      console.log('footer loaded!');
    }
  }
})();
