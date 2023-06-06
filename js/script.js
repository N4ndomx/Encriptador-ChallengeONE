
var textarea = document.getElementById('texto');
var label = document.getElementById('resultado');
function encriptar() {
    let texto = textarea.value
    var fraseModificada = texto.replace(/e/g, "enter")
        .replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    // console.log(fraseModificada);
    label.innerText = fraseModificada;
}
function desencriptar() {
    let texto = textarea.value
    var fraseModificada = texto.replace(/enter/g, "e")
        .replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    // console.log(fraseModificada);
    label.innerText = fraseModificada;
}



// var textarea = document.getElementById("miTextarea");
textarea.addEventListener("input", function (event) {
    var texto = event.target.value;
    event.target.value = texto.toLowerCase();
});
textarea.addEventListener("click", function (event) {
    event.target.value = "";
});
textarea.addEventListener("input", function (event) {
    event.target.value = event.target.value.replace(/[^\w\s,.!?]/g, '');
});
textarea.addEventListener("blur", function (event) {
    if (event.target.value === "") {
        event.target.value = "Ingrese texto Aqui";
    }
});

var boton = document.getElementById("resubt");


boton.addEventListener("click", function () {
    var textoACopiar = label.textContent;

    navigator.clipboard.writeText(textoACopiar)
        .then(function () {
            // console.log("Texto copiado: " + textoACopiar);
        })
        .catch(function (error) {
            console.error("Error al copiar el texto:", error);
        });
});