var boton = document.getElementById("miFormulario");

boton.addEventListener("submit", e => {
    e.preventDefault();
    guardarEmpresa();
});

guardarEmpresa = () => {
    let nombre = document.getElementById("nombre").value;
    let nit = document.getElementById("nit").value;
    let fecha = document.getElementById("fecha").value;
    let direccion = document.getElementById("direccion").value;

    const obj = {
        nombre,
        nit,
        fecha,
        direccion
    }
    
    var lista = JSON.parse(localStorage.getItem('listEmpresas')) || [];
    lista.push(obj);
    localStorage.setItem('listEmpresas', JSON.stringify(lista));

    boton.reset();
    empresas();
}

eliminarItem = (index) => {
    var lista = JSON.parse(localStorage.getItem('listEmpresas'));
    lista.splice(index, 1);
    localStorage.setItem('listEmpresas', JSON.stringify(lista));
    empresas()
}

setModificarEmpresa = (index) =>{
    var lista = JSON.parse(localStorage.getItem('listEmpresas'));
    document.getElementById("nombre").value = lista[index].nombre;
     document.getElementById("nit").value= lista[index].nit;
    document.getElementById("fecha").value= lista[index].fecha;
    document.getElementById("direccion").value= lista[index].direccion;
}

modificarEmpresa = (index)=>{

}

empresas = () => {
    var lista = JSON.parse(localStorage.getItem('listEmpresas')) || [];
    var listaHTML = '';
    for (var i = 0; i < lista.length; i++) {
        listaHTML += `<tr >
        <td>${i+1}</td>
        <td>${lista[i].nombre}</td>
        <td>${lista[i].nit}</td>
        <td>${lista[i].fecha}</td>
        <td>${lista[i].direccion}</td>
        <td>
            <button class="btn-delete" onclick="eliminarItem(${i})">Eliminar</button>
        </td>
        </tr>`;
    }
    document.getElementById('body-table').innerHTML = listaHTML;
}

empresas();