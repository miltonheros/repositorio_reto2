function traerInformacion(){
    $.ajax({
        url:"https://g4174897e2173b4-reto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta.items)
        }

    });
}

function pintarRespuesta(items){

    let myTable ="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].brand+"</td>";
        myTable+="<td>"+items[i].model+"</td>";
        myTable+="<td>"+items[i].category_id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td> <button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").append(myTable);
}

function guardarInformacion(){
    let myData={
        id:$("#id").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g4174897e2173b4-reto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("¡Dato guardado!")
        }
    });
}

function editarInformacion(){
    let myData={
        id:$("#id").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g4174897e2173b4-reto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("¡Dato actualizado!")
        }
    });
}
function borrarElemento(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g4174897e2173b4-reto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacion();
            alert("¡Dato borrado!")
        }
    });
}
 ///// CLIENTE

 function traerInformacionCliente(){
    $.ajax({
        url:"https://g4174897e2173b4-reto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta2){
            console.log(respuesta2);
            pintarRespuestaCliente(respuesta2.items)
        }

    });
}

function pintarRespuestaCliente(items){

    let myTable ="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].email+"</td>";
        myTable+="<td>"+items[i].age+"</td>";
        myTable+="<td> <button onclick='borrarElementoCliente("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoCliente").append(myTable);
}

function guardarInformacionCliente(){
    let myData={
        id:$("#idCliente").val(),
        name:$("#nameCliente").val(),
        email:$("#email").val(),
        age:$("#age").val(),
        
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g4174897e2173b4-reto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta2){
            $("#resultadoCliente").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacionCliente();
            alert("¡Dato guardado!")
        }
    });
}

function editarInformacionCliente(){
    let myData={
        id:$("#idCliente").val(),
        name:$("#nameCliente").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g4174897e2173b4-reto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta2){
            $("#resultadoCliente").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacionCliente();
            alert("¡Dato actualizado!")
        }
    });
}
function borrarElementoCliente(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g4174897e2173b4-reto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta2){
            $("#resultadoCliente").empty();
            traerInformacionCliente();
            alert("¡Dato borrado!")
        }
    });
}


// MESSAGE-----------------------------------------------------------

function traerInformacionMensaje(){
    $.ajax({
        url:"https://g4174897e2173b4-reto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta3){
            console.log(respuesta3);
            pintarRespuestaMensaje(respuesta3.items);
        }

    });
}

function pintarRespuestaMensaje(items){

    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].messagetext+"</td>";
        myTable+="<td> <button onclick='borrarElementoMensaje("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoMensaje").append(myTable);

}
function guardarInformacionMensaje(){
    let myData={
        id:$("#idMensaje").val(),
        messagetext:$("#messagetext").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g4174897e2173b4-reto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta3){
            $("#resultadoMensaje").empty();
            $("#id").val("");
            $("#messagetext").val("");
            traerInformacionMensaje();
            alert("¡Dato guardado!")
        }
    });
}


function editarInformacionMensaje(){
    let myData={
        id:$("#idMensaje").val(),
        messagetext:$("#messagetext").val(),

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g4174897e2173b4-reto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta3){
            $("#resultadoMensaje").empty();
            $("#id").val("");
            $("#messagetext").val("");
            traerInformacionMensaje();
            alert("¡Dato actualizado!")
        }
    });
}

function borrarElementoMensaje(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g4174897e2173b4-reto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta3){
            $("#resultadoMensaje").empty();
            traerInformacionMensaje();
            alert("¡Dato borrado!")
        }
    });
}