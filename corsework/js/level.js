function renderLevelBlock(container) {
  const light = document.createElement("div");
  light.textContent = "1";
  light.classList.add("level__item", "level-item_light");

  const normal = document.createElement("div");
  normal.textContent = "2";
  normal.classList.add("level__item", "level-item_normal");

  const hard = document.createElement("div");
  hard.textContent = "3";
  hard.classList.add("level__item", "level-item_hard");

  const button = document.createElement("button");
  button.textContent = "Старт";
  button.classList.add("level__btn");

  button.addEventListener("submit", () => {
    if (light) {
    } else if (normal) {
    } else {
    }
  });

  container.appendChild(light);
  container.appendChild(normal);
  container.appendChild(hard);
  container.appendChild(button);
}
window.application.blocks["level"] = renderLevelBlock;

function renderLevelScreen() {
  const lev = document.createElement("div");
  lev.classList.add("level");
  const h1 = document.createElement("h1");
  h1.textContent = "Выбери сложность";
  h1.classList.add("level__title");
  const item = document.createElement("div");
  item.classList.add("level-item");
  window.application.renderBlock("level", div);
  GAME_CONTAINER.appendChild(lev);
  GAME_CONTAINER.appendChild(h1);
  GAME_CONTAINER.appendChild(item);
  GAME_CONTAINER.appendChild(div);
}
window.application.screens["level"] = renderLevelScreen;

window.application.renderScreen("level");
