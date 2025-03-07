function buttonClick() {
    let nb1 = document.getElementById("number1").value;
    let nb2 = document.getElementById("number2").value;
    let operation = document.getElementById("operation").value;
    let prev_result = document.getElementById("result").value;
    let result = "";

    nb1 = parseFloat(nb1);
    if (isNaN(nb1)) {
        alert("Please enter a number to first field");
        document.getElementById("number1").value = null;
        return;
    }

    nb2 = parseFloat(nb2);
    if (isNaN(nb2)) {
        alert("Please enter a number to second field");
        document.getElementById("number2").value = null;
        return;
    }

    switch (operation) {
        case "+":
            result = nb1 + nb2;
            break;
        case "-":
            result = nb1 - nb2;
            break;
        case "*":
            result = nb1 * nb2;
            break;
        case "/":
            if (Math.abs(nb2 - 0) < Number.EPSILON) {
                alert("Division by 0");
                return;
            }
            else {
                result = nb1 / nb2;
            }
            break;
    }

    result = nb1 + " " + operation + " " + nb2 + " = " + result;
    document.getElementById("prev_result").value = prev_result;
    document.getElementById("result").value = result;
}