function handleClick(){

    var tabla = document.getElementById("tabla")
    var fila = tabla.insertRow()

    var nombre = document.getElementById("nombre").value
    var edad = document.getElementById("edad").value
    var dni = document.getElementById("dni").value
    var cont = document.getElementById("cont").value
    var fc = document.getElementById("fc").value
    var sex = document.getElementById("sex").value

    var dt = [nombre, edad, dni, cont, fc, sex]
    
    let i = 0;
    for (;i < dt.length; i++) {
        let columna = fila.insertCell(i)
        columna.innerHTML = dt[i]
    }
    document.getElementsByTagName("form")[0].reset();
}