

function actualizarcountdow(){
    const fechaActual = new Date();
    const proximoAño = fechaActual.getFullYear() + 1;
    const fechaAñoNuevo = new Date('January 1, ${proximoAño} 00:00:00');
    const diferencia = fechaAñoNuevo - fechaActual;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;

}

setInterval(actualizarcountdow, 1000);