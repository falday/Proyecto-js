/*!
 * Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

/*Ferreteria Industrial, */

class usuario {
    constructor(nombre, email, clave, ) {
        this.nombre = nombre;
        this.email = email;
        this.clave = clave;
    }
}
let usuario1 = new usuario("hola", "hola@mail.com", "123")
const usuarios= JSON.parse(localStorage.getItem('usuarios')) ?? []
const mostrarusuario=JSON.parse(localStorage.getItem('usuarioLogueado'))


const usuarioLogin = document.getElementById("nombre");
const pasLogin = document.getElementById("password");

/*   usuarioLogin.oninput = () =>{console.log(usuarioLogin.value);
  }
  pasLogin.oninput = () =>{console.log(pasLogin.value);
  } */

function cargarUsuario () {
  if(localStorage.getItem('usuarioLogueado') !== null)
  {
   document.getElementById("cerrarSecion").innerHTML = '' ;
    document.getElementById("cerrarSecion").innerHTML =
   `<a class=" text-dark me-1" onclick="salirSesion()">${mostrarusuario.nombre}  Cerrar sesion</a>`;
   document.getElementById("inciarSesion").innerHTML = ''
   document.getElementById("inciarSesion").innerHTML = `<h2> Ya has Iniciado Secion ${mostrarusuario.nombre}<h2>`
                
  }
}
cargarUsuario();

function salirSesion() {
  localStorage.removeItem('usuarioLogueado')
  location.reload()
}


function inciarSesion() {
    usuarios.forEach((usuario) => {
            let Nusario = usuarios.findIndex(e => usuarioLogin.value == e.nombre)
            if (Nusario !== -1) {
              let usuariocargado =usuarios[Nusario];
                console.log(usuario.email);
                if (usuariocargado.clave === pasLogin.value) {
                 /*  let usuariocargado =usuarios[Nusario] */
                  localStorage.setItem('usuarioLogueado', JSON.stringify(usuariocargado));
                  window.location.href = `../index.html`;
                  
                    Swal.fire({
                      title: `HOLA ${usuario.nombre}`,
                      icon: 'success',
                  });

                  /* window.location.href = "../index.html";
                    setTimeout(() => {
                        window.location.href = "../index.html"; },1000) */ 
                        cargarUsuario ();
                    
                }
                 else {
                   /*  swal.fire("Los datos ingresado no son correctos", "Intenta nuevamente", "error");
                     }, 2000); */
                    document.getElementById("inciarSesion").innerHTML = ''
                    setTimeout(() => {
                        swal.fire("Los datos ingresado no son correctos", "Intenta nuevamente", "error");
                    }, 2000);
                    setTimeout(() => { location.reload();}, 4000)
                }
            }
            else {
            
                document.getElementById("inciarSesion").innerHTML = ''
                  setTimeout(() => {
                    swal.fire("Los datos ingresado no son correctos", "Intenta nuevamente", "error");
                     }
                     , 2000);

                     setTimeout(() => { location.reload();}, 4000)
                    
                 }
})
}


function registro() {
    document.getElementById("inciarSesion").innerHTML = ''
    document.getElementById("inciarSesion").innerHTML += ` <h1> Complete el formulario de registro para poder inciar Sesion</h1>
<div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Nombre Usuario</label>
                      <input type="text" class="form-control" id="usuarioRegis" aria-describedby="emailHelp">
                    
                    <label for="exampleInputEmail1" class="form-label">Ingrese su correo electronico</label>
                    <input type="mail" class="form-control" id="mailRegis" aria-describedby="emailHelp">
                  
                      <label for="exampleInputPassword1" class="form-label">Password</label>
                      <input type="password" class="form-lacel" id="pasRegis">
                    </div>
                    <a class="bg-success text-white rounded "  type="submit" onclick="guardarNusuario()">Cofirmar</a>`

                     
                   
};



function guardarNusuario(){
                    const usuarioRegistro = document.getElementById("usuarioRegis").value;
                    const mailRegistro = document.getElementById("mailRegis").value;
                    const pasRegistro = document.getElementById("pasRegis").value;   

    
const usuario2 = new usuario (usuarioRegistro, mailRegistro, pasRegistro,);
   usuarios.push(usuario2);
   localStorage.setItem('usuarios', JSON.stringify(usuarios))
  
                  setTimeout(() => {
                    Swal.fire({
                        title: 'se regitro correctamente"',
                        text: 'Inicie sesion para continuar',
                        icon: 'success',
                        showConfirmButton: false,
                      })
                    })
                    /* swal.fire("se regitro correctamente", 'success');
                     }, 2000); */
   /*  document.getElementById("inciarSesion").innerHTML = ''
    document.getElementById("inciarSesion").innerHTML += ` <h1>Bienvenido ${usuarioRegistro} </h1>
    <h2>inicia secion</h2>` */
    setTimeout(() => { location.reload();}, 3000)
   }                