// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver 
// el problema.

let amigos = [];
let texto1 = document.querySelector("h2")



function agregarAmigo()
{
    let amigoa = document.getElementById("amigo").value;
    console.log(amigoa)
    if (amigoa != null && amigoa != '')
    {
        console.log("paso")
        amigos.push(amigoa);
        document.querySelector("#amigo").value = '';
        console.log(amigos);
        recorrerArreglo();
    }else 
    {
        amigoa.value = '';
        alert("Por favor, inserte un nombre")
    }
    
}

function sortearAmigo()
{
    

}

function recorrerArreglo()
{
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    document.querySelector("#amigo").value = '';
    for (i=0; i <= amigos.length; i++)
    {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);

    }
}
