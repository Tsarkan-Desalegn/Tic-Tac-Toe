export function winnerCheck(boxes) {
  const array = Array.from(boxes).map(box => box.textContent);

  const winnerPattern = [
    [0,1,2],[3,4,5],[6,7,8], // rows winning pattern
    [0,3,6],[1,4,7],[2,5,8], // columns winning pattern
    [0,4,8],[2,4,6]          // diagonals winning pattern
  ];

  for (let [a,b,c] of winnerPattern) {
    if (array[a] && array[a] === array[b] && array[a] === array[c]) {
      
      document.querySelector(".result").textContent = `🎉 Player ${array[a]} wins the game! 🎉`;
      document.querySelector(".middle-container").classList.add("show");
      document.querySelector(".result-section").classList.add("display");
      return true;
    }
  }
  return false;   
}
