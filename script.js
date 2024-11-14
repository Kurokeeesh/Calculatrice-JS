let currentInput = '';
let previousInput = '';
let operation = '';
let isNewOperation = false;

function appendNumber(number) {
    // Ajoute le nombre à l'entrée actuelle (affichage)
    if(isNewOperation)
    {
        currentInput = ''; //Efface l'affichage précédent
        isNewOperation = false; //Réinitialise la variable 
    }
    currentInput += number;
    updateDisplay(currentInput);
    document.getElementById('display').value = currentInput;
}

function setOperation(op) {
    if (currentInput === '') return; // Ne pas définir d'opération si l'entrée est vide
    if (previousInput !== '') {
        calculate(); // Si une opération précédente existe, calcule d'abord
    }
    operation = op;
    previousInput = currentInput;
    currentInput = ''; // Réinitialise l'entrée actuelle pour le prochain chiffre
    document.getElementById('display').value = previousInput +''+operation;
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if(current === 0)
            {
                alert('Division par 0 !');
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    console.log('Result:',result)//Verifi le resultat
    currentInput = result;
    operation = '';
    previousInput = '';
    /*updateDisplay(currentInput);*/
    document.getElementById('display').value = currentInput;
    isNewOperation = true //Indique qu'un calcul a été effectuer
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = '';
    /*updateDisplay(''); // Efface l'affichage*/
    document.getElementById('display').value = '';//efface l'affichage grace à l'élément display dans le html
}

function updateDisplay(value) {
    // Exemple simple d'affichage (tu peux créer un élément HTML <div id="display"></div> pour voir les valeurs)
    console.log(value); // Remplace par une mise à jour de l'affichage réel si nécessaire
}
