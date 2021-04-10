var THEME = (function () {
  var colors = {
    light: {
      '--bg': '#FFF',
      '--gradient': 'rgba(0, 0, 0, 0.075)',
      '--bgimg': 'url(\'https://quique.gq/assets/bgscroll_2x.png\')',
      '--border': '#000',
      '--hr': '#EEE',
      '--text': '#000',
      '--link': 'rgba(0, 0, 0, 0.5)',
      '--svgoutline': 'rgba(0, 0, 0, 0)'
    },
    dark: {
      '--bg': '#000',
      '--gradient': 'rgba(255, 255, 255, 0.075)',
      '--bgimg': 'url(\'https://quique.gq/assets/bgscroll_dark_2x.png\')',
      '--border': '#EEE',
      '--hr': '#333',
      '--text': '#EEE',
      '--link': 'rgba(255, 255, 255, 0.5)',
      '--svgoutline': '#FFF'
    }
  };

  var setColors = function (obj) {
    for (var c in obj) document.documentElement.style.setProperty(c, obj[c]);
  };

  var localTheme = localStorage.getItem('theme');
  if (!localTheme) localStorage.setItem('theme', 'light');
  setColors(colors[localTheme]);

  return {
    set: function (theme) {
      setColors(colors[theme]);
      localStorage.setItem('theme', theme);
    }
  }
})();
