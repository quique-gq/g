// bad site code i think

(function () {
  var CURRENT_VERSION = 'mar232021-0200est';

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
        GALLERY.load(gameData, 'featured');
        break;
      case 'a-z':
        GALLERY.load(gameData, 'alphabetical');
        break;
      case 'game':
        G.load();
        break;
    }
    console.log('page loaded! welcome to g!')
  });
})();
