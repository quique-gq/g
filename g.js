var G = (function () {
  var gameDir = './assets/games';
  var dom = {
    title: document.getElementById('gTitle'),
    container: document.getElementById('gContainer'),
    instructions: document.getElementById('gInstructions')
  };

  return {
    load: function (url) {
      var gameList = JSON.parse(localStorage.getItem('gameData')).gameList;
      var currentGame;
      gameList.every(function (cur) { if (cur.url === url) { currentGame = cur; return false; } return true; });
      if (currentGame) {
        document.title = 'g - ' + currentGame.name;
        dom.title.innerHTML = currentGame.name;
        dom.container.src = gameDir + currentGame.dir + currentGame.index;
        dom.container.width = currentGame.width;
        dom.container.height = currentGame.height;
        dom.instructions.innerHTML = currentGame.instructions;
      } else {
        window.location.href = '/404/';
      }
    }
  }
})();
