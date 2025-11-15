//  * ИНВАРИАНТЫ:
//  Масса и высота должны быть положительными числами
//  Гравитационная постоянная G = 9.8
function getVariables() {
  let mass = Number(document.loandata.mass.value);// Запоминаем значение массы
  let height = Number(document.loandata.height.value); // Запоминаем значение высоты
  const G = 9.8;

  // --- ИНВАРИАНТЫ ---
  console.assert(
    typeof mass === 'number' && mass > 0,
    `Инвариант нарушен: mass (${mass}) должна быть положительным числом`
  );

  console.assert(
    typeof height === 'number' && height > 0,
    `Инвариант нарушен: height (${height}) должна быть положительным числом`
  );

  console.assert(
    G === 9.8,
    `Инвариант нарушен: G (${G}) должно быть равно 9.8`
  );
  // -------------------

  let space_out = document.getElementById("space");
  if((isNaN(mass))||(isNaN(height))){
    document.getElementById("space").textContent = 'Некорректный тип данных'
  }
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
