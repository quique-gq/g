(function () {
  var headerHTML =
    '<hr>' +
    '<p>by Literal Line&emsp;' +
    'Source code: <a href="https://github.com/quique-gq/games" target="_blank">Github</a>&emsp;' +
    'more at <a href="https://quique.gq" target="_blank">Quique.gq</a>' +
    '</p>';
  document.getElementsByTagName('footer')[0].insertAdjacentHTML('afterbegin', headerHTML);
})();
