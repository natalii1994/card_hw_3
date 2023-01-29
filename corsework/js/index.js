const GAME_CONTAINER = document.querySelector(".game");

window.application = {
  blocks: {},
  screens: {},
  timers: [],

  renderScreen: function (screenName) {
    window.application.timers.forEach((id) => {
      clearInterval(id);
    });

    GAME_CONTAINER.innerHTML = "";
    if (window.application.screens[screenName]) {
      window.application.screens[screenName]();
    } else {
      console.warn(`Экрана "${screenName}" не существует!`);
    }
  },

  renderBlock: function (blockName, container) {
    if (window.application.blocks[blockName]) {
      window.application.blocks[blockName](container);
    } else {
      console.warn(`Блока "${blockName}" не существует!`);
    }
  },
};
