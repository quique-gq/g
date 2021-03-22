var GALLERY = (function () {
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
      .replace('%url%', '/g?' + obj.name)
      .replace('%thumbnail%', obj.thumbnail);
    galleryContainer.insertAdjacentHTML('beforeend', element);
  };

  return {
    load: function (gameList, which) {
      switch (which) {
        case 'all':
          gameList.forEach(function (cur) { insertGalleryElement(elementHtml, cur); }); // look ma! no arrow functions!
          break;
      }
    }
  }
})();
