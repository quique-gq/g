// bad site code i think

(function () {
  var CURRENT_VERSION = 'mar222021-0000est';

  var cookieCheck = function (callback) {
    var c;
    var sMessage = 'successfully loaded gameData from cookie!';
    try { c = JSON.parse(atob(document.cookie.split('gameData=')[1])); } catch (err) { c = ''; }
    if (c.version === CURRENT_VERSION) {
      console.log(sMessage);
      callback(c.gameList);
    } else {
      getGameData(function (json) {
        console.log('gameData cookie was either not found or outdated... grabbing latest file...');
        document.cookie = 'gameData=' + btoa(json);
        console.log(sMessage);
        callback(JSON.parse(atob(document.cookie.split('gameData=')[1])).gameList);
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
      case '':
        GALLERY.load(gameData, 'all');
        break;
      case 'game':
        G.load();
        break;
    }
    console.log('page loaded! welcome to g!')
  });
})();
