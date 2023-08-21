export function calculate(element) {
  // Variables pour stocker les valeurs et le operator
  let leftValue = 0;
  let rightValue = 0;
  let operator = "";
  let total = 0;
  
  // Fonction pour afficher les valeurs A, le operator et les valeurs B
  const afficherValeurs = () => {
    const valeursElement = document.getElementById("valeurs");
    
    if (rightValue != 0) {
      valeursElement.textContent = `${leftValue} ${operator} ${rightValue}`;
    } else {
      valeursElement.textContent = `${leftValue} ${operator} `;
    }
  };

  // Fonction pour afficher le résultat
  const afficherTotal = (resultat) => {
    const resultatElement = document.getElementById("resultat");
    resultatElement.textContent = `${resultat}`;
  };

  // Fonction pour mettre à jour le total en fonction du operator
  const updateTotal = () => {
    switch (operator) {
      case "+":
        total = leftValue + rightValue;
        break;
      case "-":
        total = leftValue - rightValue;
        break;
      case "x":
        total = leftValue * rightValue;
        break;
      case "/":
        total = leftValue / rightValue;
        break;
    }
    afficherTotal(total);
  };

  // Fonction pour effacer les valeurs et réinitialiser l'affichage
  const removeValue = () => {
    leftValue = 0;
    rightValue = 0;
    total = 0;
    operator = "";
    afficherValeurs();
    afficherTotal("");
  };

  // Fonction appelée lorsqu'un bouton numérique est cliqué
  const buttonValueClick = (buttonValue) => {
    if (!operator) {
      leftValue = leftValue * 10 + buttonValue;
    } else {
      rightValue = rightValue * 10 + buttonValue;
      updateTotal();
    }
    afficherValeurs();
  };

  // Fonction appelée lorsqu'un bouton d'opération est cliqué
  const operatorBtnClick = (operatorBtn) => {
    operator = operatorBtn;

    afficherValeurs();
  };

  //  le bouton "Effacer"
  const removeBtn = () => {
    removeValue();
  };

  // Fonction pour créer un écouteur d'événements pour un bouton
  const createButtonClickListener = (buttonId, clickHandler) => {
    const button = document.getElementById(buttonId);
    button.addEventListener("click", clickHandler);
  };

  // Ajouter les écouteurs d'événements pour les boutons de chiffres (0 à 9)
  for (let i = 0; i <= 9; i++) {
    createButtonClickListener(`button${i}`, () => buttonValueClick(i));
  }

  // Ajouter les écouteurs d'événements pour les boutons d'opération (+, -, x, /)
  createButtonClickListener("buttonAdd", () => operatorBtnClick("+"));
  createButtonClickListener("buttonSubtract", () => operatorBtnClick("-"));
  createButtonClickListener("buttonMultiply", () => operatorBtnClick("x"));
  createButtonClickListener("buttonDivide", () => operatorBtnClick("/"));

  // Ajouter un écouteur d'événement pour le bouton "Effacer"
  createButtonClickListener("buttonEffacer", removeBtn);
}
