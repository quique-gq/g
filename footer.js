var FOOTER = (function () {
  var headerHTML =
    '<hr>' +
    '<p>by Literal Line&emsp;' +
    'Source code: <a href="https://github.com/quique-gq/g" target="_blank">Github</a>&emsp;' +
    'more at <a href="https://quique.gq" target="_blank">Quique.gq</a>&emsp;' +
    '</p>';
  return {
    load: function () {
      document.getElementsByTagName('footer')[0].insertAdjacentHTML('afterbegin', headerHTML);
      console.log('footer loaded!');
    }
  }
})();
