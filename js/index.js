const user = JSON.parse(localStorage.getItem('login_success')) || false

// Si el usuario es falso, porque no se encontro en el localStorage, lo redireccionamos al login
if (!user) {
    window.location.href = 'login.html'
}

// Inicializamos una variable que permite salir del sistema cuando le demos en el boton de logout
const logout = document.getElementById('logout')

logout.addEventListener('click', () => {
    //Aparecera un msj de alerta diciendo que la sesion se ha cerrado
    alert('Sesion cerrada')
    // Removemos la informacion del usuario del localStorage
    localStorage.removeItem('login_success')
    // Cuando finalicemos la sesion, nos redigira al login
    window.location.href = 'login.html'
})


