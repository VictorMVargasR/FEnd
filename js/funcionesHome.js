///* 
// * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
// * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
// */
//
//let Username;
//let isAdmin = false;
//let isClient = false;
//
//$(document).ready(function () {
//
//    $.get("http://132.226.38.163:8081/api/user/user", function (data) {
//        Username = data.name;
//        validarAdmin();
//        validarCliente();
//        validarUsuario();
//    });
//
//});
//
//
//function validarUsuario() {
//
//    if (isAdmin) {
//        mostrarAdmin();
//    } else if (isClient) {
//        mostrarCliente();
//    } else {
//        $("#carousel").remove();
//
//    }
//}
//
//
//function mostrarAdmin() {
//
//    $("#navbarSupportedContent").empty();
//
//    let Menu;
//
//    Menu += '<ul class="navbar-nav me-auto mb-2 mb-lg-0">';
//    Menu += '<li class="nav-item">';
//    Menu += '<a class="nav-link" aria-current="page" href="../admin/admin.html">Administradores</a>';
//    Menu += '</li>';
//    Menu += '</ul>';
//
//    $("#navbarSupportedContent").append(Menu);
//}
//
//function mostrarAdmin() {
//
//    $("#navbarSupportedContent").empty();
//
//    let Menu;
//
//    Menu += '<ul class="navbar-nav me-auto mb-2 mb-lg-0">';
//    Menu += '<li class="nav-item">';
//    Menu += '<a class="nav-link" href="../cliente/cliente.html">Clientes</a>';
//    Menu += '</li>';
//    Menu += '</ul>';
//
//    $("#navbarSupportedContent").append(Menu);
//}
//
//function mostrarCliente() {
//
//    $.ajax({
//        url: "http://132.226.38.163:8081/api/Admin/all",
//        type: "GET",
//        datatype: "JSON",
//        contentType: "application/json",
//        success: function (Admins) {
//
//            console.log(Admins);
//            isAdmin = false;
//            for (var i = 0; i < Admins.length; i++) {
//                if (Admins[i].name === Username) {
//                    isAdmin = true;
//                    break;
//                }
//            }
//
//        },
//        error: function (xhr, status) {
//            alert('Ha sucedido un problema');
//        }
//    });
//}
//
//
//function validarCliente() {
//
//    $.ajax({
//        url: "http://132.226.38.163:8081/api/Client/all",
//        type: "GET",
//        datatype: "JSON",
//        contentType: "application/json",
//        success: function (Clients) {
//
//            console.log(Clients);
//            isClient = false;
//            for (var i = 0; i < Clients.length; i++) {
//                if (Clients[i].name === Username) {
//                    isClient = true;
//                    break;
//                }
//            }
//        },
//        error: function (xhr, status) {
//            alert('Ha sucedido un problema');
//        }
//    });
//}