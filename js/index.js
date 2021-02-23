var texto2 = document.getElementById('texto2');
var texto1 = document.getElementById('texto1');

test();
function test() {
    texto2.style.display = "none";
}

function clickProjetos(){
    console.log("Clicou projetos");
    texto1.style.display = "none";
    texto2.style.display = "block";
    console.log("deu certo");
}

function clickSobre() {
    console.log("Clicou sobre");
    texto1.style.display = "block";
    texto2.style.display = "none";
}
