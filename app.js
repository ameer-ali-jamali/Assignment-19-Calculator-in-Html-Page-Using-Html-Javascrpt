function bsp() {
    let str = document.getElementById('label').value;
    str = str.substr(0, str.length - 1); document.getElementById('label').value = str;
}
function cl() {
    document.getElementById("label").value = document.getElementById("label").value = "";

}
function num(n) {
    document.getElementById("label").value = document.getElementById("label").value + n;

}
function eql() {
    document.getElementById("label").value = eval(document.getElementById("label").value)

}