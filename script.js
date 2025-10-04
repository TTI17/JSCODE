//  * ИНВАРИАНТЫ:
//  Масса и высота должны быть положительными числами
//  Гравитационная постоянная G = 9.8
function getVariables() {
  let mass = Number(document.loandata.mass.value);
  let height = Number(document.loandata.height.value);
  const G = 9.8;

  let space_out = document.getElementById("space");
  if (mass >= 0 && height >= 0) {
    let potentialEnergy = mass * G * height;
    console.log(potentialEnergy);
    space_out.innerHTML = potentialEnergy.toFixed(2);
  } else {
    if (mass < 0) {
      let space_out = document.getElementById("space");

      space_out.innerHTML = "Масса не может быть отрицательной";
    } else {
      space_out.innerHTML = "Высота не может быть отрицательной";
    }
  }
}
