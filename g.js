var G = (function () {
  var dom = {
    url: window.location.search.slice(1),
    title: document.getElementById('gTitle'),
    instructions: document.getElementById('gInstructions'),
    container: '<div id="%name%" style="%style%"></div>'
  };

  var loadGame = function () {
    var gameList = JSON.parse(this.responseText);
    var gameData = gameList.filter(function (cur) { return cur.name === dom.url; })[0]; // look ma! no arrow functions!
    dom.title.innerHTML = gameData.name;
    dom.instructions.innerHTML = gameData.instructions;
    dom.container = dom.container
      .replace('%name%', gameData.containerName)
      .replace('%style%', gameData.containerStyle)
    dom.title.insertAdjacentHTML('afterend', dom.container);
  };

  return {
    loadGame: loadGame
  }
})();
