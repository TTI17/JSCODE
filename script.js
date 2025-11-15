//  * ИНВАРИАНТЫ:
//  Масса и высота должны быть положительными числами

function getVariables() {
  let mass = document.loandata.mass.value;// Запоминаем значение массы
  let height = document.loandata.height.value; // Запоминаем значение высоты
  const G = 9.8;
  
  convertMass = Number(mass);
  convertHeight = Number(height);
  
  // ---ИНВАРИАНТЫ---
  
  console.assert(
    !isNaN(convertMass) || convertMass < 0,
   `Инвариант нарушен: mass (${mass}) должна быть положительным числом`
  );
  
  console.assert(
    convertHeight < 0 || !isNaN(convertHeight),
    `Инвариант нарушен: height (${height}) должна быть положительным числом`
  )
  
  //------------------

  let space_out = document.getElementById("space");

  // проверка на корректность введенных данных. если введены некорректные данные, выводим сообщение об ошибке
  if (isNaN(convertMass) || isNaN(convertHeight)) {
    if (isNaN(convertMass)) {
      space_out.innerHTML = "Масса не является числом"; // ошибка ввода массы с типом данных
    } else {
      space_out.innerHTML = "Высота не является числом"; // ошибка ввода высоты с типом данных
    }
  }
  if (isNaN(mass) && isNaN(height)){ 
    space_out.innerHTML = "Некорректный тип данных"; // ошибка ввода обоих значений с типом данных
  }

  if (mass < 0) {
    space_out.innerHTML = "Масса не может быть отрицательной"; // ошибка ввода массы с отрицательным значением
  }
  if (height < 0) {
    space_out.innerHTML = "Высота не может быть отрицательной"; // ошибка ввода высоты с отрицательным значением
  }
  // при успешном вводе чисел и положительных значений массы и высоты выводим результат на экран
  if (mass >= 0 && height >= 0) {
    let potentialEnergy = mass * G * height; //значение потенциальной энергии
    console.log(potentialEnergy); // дополнительный вывод в консоль
    space_out.innerHTML = potentialEnergy.toFixed(2); // вывод на экран
  } 
}