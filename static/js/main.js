function capturar() {
    // Obtenemos el valor por el id
    var porId = document.getElementById("telefono").value;
    window.open(`https://api.whatsapp.com/send?phone=+549${porId}`, '_blank')
  }