function getVariables() {
  let mass = Number(document.loandata.mass.value);
  let height = Number(document.loandata.height.value);
  const G = 9.8;

  let potentialEnergy = mass * G * height;
  let space_out = document.getElementById("space");
  console.log(potentialEnergy);
  space_out.innerHTML = potentialEnergy.toFixed(2);
}
