(function () {
  var galleryContainer = document.getElementById('galleryContainer');
  var elementHtml =
    '<a href="%url%">' +
    '<div class="flexItem">' +
    '<img src="%thumbnail%">' +
    '<p>%name%</p>' +
    '</div>' +
    '</a>';

  var insertGalleryElement = function (template, obj) {
    var element = template
      .replace('%name%', obj.name)
      .replace('%url%', '/game.html?' + obj.name)
      .replace('%thumbnail%', obj.thumbnail);
    galleryContainer.insertAdjacentHTML('beforeend', element);
  };

  var loadGallery = function () {
    var gameList = JSON.parse(this.responseText);
    gameList.forEach(function (cur) { insertGalleryElement(elementHtml, cur); }); // look ma! no arrow functions!
  };

  var reqGameList = new XMLHttpRequest();
  reqGameList.onload = loadGallery;
  reqGameList.open('GET', './gameList.json');
  reqGameList.send();
})();
