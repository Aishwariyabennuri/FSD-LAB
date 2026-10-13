function addition() {
    let a = parseFloat(document.getElementById("input1").value);
    let b = parseFloat(document.getElementById("input2").value);
    alert("Result: " + (a + b));
}
function subtraction() {
    let a = parseFloat(document.getElementById("input1").value);
    let b = parseFloat(document.getElementById("input2").value);
    alert("Result: " + (a - b));
}
function multiplication() {
    let a = parseFloat(document.getElementById("input1").value);
    let b = parseFloat(document.getElementById("input2").value);
    alert("Result: " + (a * b));
}
function division() {
    let a = parseFloat(document.getElementById("input1").value);
    let b = parseFloat(document.getElementById("input2").value);
    if (b === 0) {
        alert("Error: Division by zero");
    } else {
        alert("Result: " + (a / b));
    }
}