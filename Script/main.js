import { winnerCheck } from './winnerCheck.js';

const boxes = document.querySelectorAll(".container-btn");
let turn = true; // true = X, false = O

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.textContent === "") {
      box.textContent = turn ? "X" : "O";
      turn = !turn;
      winnerCheck(boxes); // call logic from another file
    }
  });
});
