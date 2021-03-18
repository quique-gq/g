(function () {
  var game = {
    url: window.location.search.slice(1),
    title: document.getElementById('gameTitle'),
    instructions: document.getElementById('gameInstructions'),
    container: '<div id="%name%" style="%style%"></div>'
  };

  var loadGame = function () {
    var gameList = JSON.parse(this.responseText);
    var gameData = gameList.filter(function (cur) { return cur.name === game.url; })[0]; // look ma! no arrow functions!
    game.title.innerHTML = gameData.name;
    game.instructions.innerHTML = gameData.instructions;
    game.container = game.container
      .replace('%name%', gameData.containerName)
      .replace('%style%', gameData.containerStyle)
    game.title.insertAdjacentHTML('afterend', game.container);
  };

  var reqGameList = new XMLHttpRequest();
  reqGameList.onload = loadGame;
  reqGameList.open('GET', './gameList.json');
  reqGameList.send();

})();
