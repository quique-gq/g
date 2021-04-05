var THEME = (function () {
  var colors = {
    light: {
      '--bg': '#FFFFFF',
      '--gradient': 'rgba(0, 0, 0, 0.075)',
      '--bgimg': 'url(\'https://quique.gq/assets/bgscroll_2x.png\')',
      '--border': '#000000',
      '--hr': '#EEEEEE',
      '--text': '#000000',
      '--link': 'rgba(0, 0, 0, 0.5)'
    },
    dark: {
      '--bg': '#000000',
      '--gradient': 'rgba(255, 255, 255, 0.075)',
      '--bgimg': 'url(\'https://quique.gq/assets/bgscroll_dark_2x.png\')',
      '--border': '#BBBBBB',
      '--hr': '#333333',
      '--text': '#CCCCCC',
      '--link': 'rgba(255, 255, 255, 0.5)'
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
