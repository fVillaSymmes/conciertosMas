let contadorSignUp = 0

const arraySignUp = []
const arrayVip = []

const correoSignUp = document.getElementById("correoSignUp")
const contraseñaSignUp = document.getElementById("contraseñaSignUp")
const terminosSignUp = document.getElementById("terminosSignUp")
const registroSignUp = document.getElementById("registroSignUp")

const correoVip = document.getElementById("correoVip")
const contraseñaVip = document.getElementById("contraseñaVip")
const nombreVip = document.getElementById("nombreVip")
const terminosVip = document.getElementById("terminosVip")
const registroVip = document.getElementById("registroVip")

const vip = document.getElementById("vip")
const signUp = document.getElementById("signUp")
const botonVip = document.getElementById("botonVip")
const botonSignUp = document.getElementById("botonSignUp")

// Vistas

botonVip.addEventListener("click", vistaVip)
botonSignUp.addEventListener("click", vistaSignUp)

function vistaVip() {
    signUp.setAttribute("class", "container-fluid d-none")
    vip.setAttribute("class", "container-fluid")
}

function vistaSignUp() {
    signUp.setAttribute("class", "container-fluid")
    vip.setAttribute("class", "container-fluid d-none")
}

// Verificadores 

function verificadorSignUp() {
    (correoSignUp.value != "" && contraseñaSignUp.value != "" && terminosSignUp.checked == true) ? registerSignUp() : alert('Rellene todos los campos y acepte los términos y condiciones para proceder con su registro.')
}

function verificadorVip() {
    (nombreVip.value != "" && correoVip.value != "" && contraseñaVip.value != "" && terminosVip.checked == true) ? registerVip() : alert('Rellene todos los campos y acepte los términos y condiciones para proceder con su registro.')
}

registroSignUp.addEventListener("click", verificadorSignUp)
registroVip.addEventListener("click", verificadorVip)

// Clases y herencias

class userSignUp {
    constructor(nombre, correo, contraseña) {
        this.nombre = nombre;
        this.correo = correo;
        this.contraseña = contraseña;
    }
    alertaSignUp() {
        alert(`Bienvenido ${this.nombre}\n E-mail: ${this.correo} Contraseña: ${this.contraseña}`)
    }
}

class userVip extends userSignUp {
    alertaVip(){
        alert(`Bienvenido ${this.nombre}\n Usuario: ${this.nombre } E-mail: ${this.correo} Contraseña: ${this.contraseña}`)
    }
}

function registerSignUp() {
    contadorSignUp += 1
    let username = `usuario${contadorSignUp}`
    const nuevoUser = new userSignUp(username, correoSignUp.value, contraseñaSignUp.value)
    nuevoUser.alertaSignUp()
    arraySignUp.push(nuevoUser)
    console.log(arraySignUp);
}

function registerVip() {
    const nuevoUser = new userVip(nombreVip.value, correoVip.value, contraseñaVip.value)
    nuevoUser.alertaVip()
    arrayVip.push(nuevoUser)
    console.log(arrayVip);
}