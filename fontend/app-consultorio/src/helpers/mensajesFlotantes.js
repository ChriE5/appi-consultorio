import Swal from 'sweetalert2'

const mensajesFlotantes = (icon, msg) => {
    Swal.fire({
        position: 'top-end',
        icon: icon,
        title: msg,
        showConfirmButton: false,
        timer: 2000
    });
}

export default mensajesFlotantes;