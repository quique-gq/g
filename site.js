// bad site code i think

(function () {
  var CURRENT_VERSION = 'mar232021-1454est';

  var cookieCheck = function (callback) {
    var c = JSON.parse(localStorage.getItem('gameData')) || {};
    var sMessage = 'successfully loaded gameData from localStorage!';
    if (c.version === CURRENT_VERSION) {
      console.log(sMessage);
      callback(c.gameList);
    } else {
      getGameData(function (json) {
        console.log('local gameData was either not found or outdated... grabbing latest file...');
        localStorage.setItem('gameData', json);
        console.log(sMessage);
        callback(JSON.parse(json).gameList);
      });
    }
  };

  var getGameData = function (callback) {
    var reqGameData = new XMLHttpRequest();
    reqGameData.onload = function () { callback(this.responseText); };
    reqGameData.open('GET', './gameData.json');
    reqGameData.send();
  };

  HEADER.load();
  FOOTER.load();
  cookieCheck(function (gameData) {
    switch (window.location.pathname.slice(1)) {
      case '': case 'featured':
        document.title = 'g - Featured';
        GALLERY.load(gameData, 'featured');
        break;
      case 'a-z':
        document.title = 'g - A-Z';
        GALLERY.load(gameData, 'alphabetical');
        break;
      case 'g': case 'g.html':
        G.load(window.location.search.slice(1).toLowerCase());
        break;
    }
    console.log('page loaded! welcome to g!')
  });
})();
