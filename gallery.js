var GALLERY = (function () {
  var galleryHeader = document.getElementById('galleryHeader');
  var galleryContainer = document.getElementById('galleryContainer');
  var elementHtml =
    '<a class="hover flexItem" href="%url%">' +
    '<img src="%thumbnail%">' +
    '<p>%name%</p>' +
    '</a>';

  var insertGalleryElement = function (template, obj) {
    var element = template
      .replace('%name%', obj.name)
      .replace('%url%', '/g?' + obj.url)
      .replace('%thumbnail%', './assets/thumbnails' + obj.dir.slice(0, -1) + '.png');
    galleryContainer.insertAdjacentHTML('beforeend', element);
  };

  var showAz = function (gameList) {
    var gameListAz = gameList.sort(function (a, b) {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
    });
    gameListAz.forEach(function (cur) { insertGalleryElement(elementHtml, cur); }); // look ma! no arrow functions!
    galleryHeader.innerHTML = 'A-Z';
  };

  var showFeatured = function (gameList) {
    gameList.forEach(function (cur) { if (cur.featured) insertGalleryElement(elementHtml, cur); });
    galleryHeader.innerHTML = 'Featured';
  };

  return {
    load: function (gameList, which) {
      switch (which) {
        case 'alphabetical':
          showAz(gameList);
          break;
        case 'featured':
          showFeatured(gameList);
          break;
      }
    }
  }
})();
