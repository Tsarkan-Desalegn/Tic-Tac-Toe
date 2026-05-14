const firstInput  = document.getElementById("first-element");
const secondInput = document.getElementById("second-element");
const thirdInput  = document.getElementById("third-element");
const fourthInput = document.getElementById("fourth-element");
const fifthInput = document.getElementById("fifth-element");
const sixthInput = document.getElementById("sixth-element");
const seventhInput = document.getElementById("seventh-element");
const eighthInput  = document.getElementById("eighth-element");
const ninethInput  = document.getElementById("nineth-element");
const result  = document.getElementById("result");
const btn  = document.getElementById("btn");

 let matrix = [[firstInput.value, secondInput.value, thirdInput.value],
                 [fourthInput.value, fifthInput.value, sixthInput.value],
                 [ seventhInput.value,  eighthInput.value,ninethInput.value]];


btn.addEventListener("click", ()=>{
for(let i=0; i<3; ++i){
if(matrix[i][0] === matrix[i][1] && matrix[i][1] ===matrix[i][2]){
  result.textContent = matrix[i][0]+ "you won the titile man ";
  return;
}
}
for(let j=0; j<3; ++j){
if(matrix[0][j] ===matrix[1][j] && matrix[1][j] ===matrix[2][j]){
   result.textContent =matrix[0][j]+ "you won the titile man ";
   return;
}

}
if(matrix[0][0] ===matrix[1][1] && matrix[1][1] ===matrix[2][2]){
    result.textContent =matrix[0][0] + "you won the titile man "
    return;
}
if(matrix[0][2]  ===matrix[1][1] && matrix[1][1] ===matrix[2][0]){
    result.textContent =matrix[0][2] +"you won the titile man ";
    return;
}
result.textContent = "no yet win";
});



