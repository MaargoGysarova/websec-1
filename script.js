function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let op = document.getElementById("op").value;
    let prev = document.getElementById("current").value;
    let result = "";

    if (isNaN(num1) || isNaN(num2)) {
        alert("Введите числа в оба поля");
        return;
    }

    switch (op) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if(Math.abs(num2 - 0) < Number.EPSILON){
                alert("Деление на ноль невозможно");
                return;
            }
            result = num1 / num2;
            break;
    }

    document.getElementById("previous").value = prev;
    document.getElementById("current").value = num1 + " " + op + " " + num2 + " = " + result;

}