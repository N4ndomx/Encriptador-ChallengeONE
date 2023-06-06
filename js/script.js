
var textarea = document.getElementById('texto');

function encriptar() {
    let arr = textarea.value.split(" ");
    let copy = arr.concat();
    // console.log(copy)

    arr.forEach((element, index) => {
        let arry = Array.from(element);
        for (let i = 0; i < arry.length; i++) {
            if (arry[i] == 'a') {
                arry[i] = 'ai';
            }

        }
        copy[index] = arry.join("");
    });

    var resul = document.getElementById('resultado');
    resul.innerText = copy.join(" ");
    console.log(copy.join(" "));

}
function desencriptar() {

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
