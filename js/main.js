import { TURN } from "./constants.js";
import {
  getCellElementAtIdx,
  getCellElementList,
  getGameStatusElement,
  getCurrentTurnElement,
} from "./selectors.js";

/**
 * Global variables
 */
let currentTurn = TURN.CROSS;
let isGameEnded = false;
let cellValues = new Array(9).fill("");
function toggleTurn() {
  currentTurn = currentTurn === TURN.CIRCLE ? TURN.CROSS : TURN.CIRCLE;
  const currentTurnElement = getCurrentTurnElement();
  if (currentTurnElement) {
    currentTurnElement.classList.remove(TURN.CIRCLE, TURN.CROSS);
    currentTurnElement.classList.add(currentTurn);
  }
}

function handleCellClick(cell, index) {
  if (
    cell.classList.contains(TURN.CIRCLE) ||
    cell.classList.contains(TURN.CROSS)
  ) {
    return;
  }
  cell.classList.add(currentTurn);

  toggleTurn();
}

function initCellElemenList() {
  const cellElementList = getCellElementList();
  cellElementList.forEach((cell, index) => {
    cell.addEventListener("click", () => handleCellClick(cell, index));
  });
}

/**
 * TODOs
 *
 * 1. Bind click event for all cells
 * 2. On cell click, do the following:
 *    - Toggle current turn
 *    - Mark current turn to the selected cell
 *    - Check game state: win, ended or playing
 *    - If game is win, highlight win cells
 *    - Not allow to re-click the cell having value.
 *
 * 3. If game is win or ended --> show replay button.
 * 4. On replay button click --> reset game to play again.
 *
 */
(() => {
  initCellElemenList();
})();
