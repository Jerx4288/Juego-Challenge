// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver 
// el problema.

let amigos = [];
let texto1 = document.querySelector("h2")
let amigoa = document.getElementById("amigo").value;
let listaAmigos = document.getElementById("listaAmigos");
let ganador = document.getElementById("resultado");
let amigoSorteado;

function agregarAmigo()
{
    let amigoa = document.getElementById("amigo").value;
    console.log(amigoa)
    if (amigoa != null && amigoa != '')
    {
        amigos.push(amigoa);
        ganador.innerHTML = '';
        document.querySelector("#amigo").value = '';
        recorrerArreglo();
    }else 
    {
        amigoa.value = '';
        alert("Por favor, inserte un nombre")
    }
    
}

function sortearAmigo()
{
    let numeroAleatorio =  Math.floor(Math.random()*amigos.length)+1;
    console.log(numeroAleatorio)
    if (amigos != null)
    {
        amigoSorteado = amigos[numeroAleatorio];
        console.log(amigoSorteado);
        listaAmigos.innerHTML = '';
        if (amigoSorteado != null)
        {
            ganador.innerHTML = 'El ganador es ' + amigoSorteado;
            limpiar();
        }else
        {
            alert("Por favor, inserte un nombre")
            limpiar();
        }
        
    }

}

function limpiar()
{
    document.querySelector("#amigo").value = '';
    amigos = [];
}

function recorrerArreglo()
{
    
    listaAmigos.innerHTML = "";
    document.querySelector("#amigo").value = '';
    for (i=0; i <= amigos.length; i++)
    {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);

    }
}


