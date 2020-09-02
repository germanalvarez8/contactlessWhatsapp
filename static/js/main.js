function sendMessage() {
    // Obtenemos el valor por el id
    let codArea = document.getElementById("cod-area").value; 
    var number = document.getElementById("cod-numero").value;
    var msgWithSpaces = document.getElementById("messageInput").value;


    var msgWithoutSpaces = msgWithSpaces.split(' ').join('%20');
    
    if(codArea == '' || number == ''){
      $("#test").removeClass('d-none');
      
      setTimeout(function(){ 
        $("#test").addClass('d-none'); 
      }, 4000)
    };
    window.open(`https://api.whatsapp.com/send?phone=${codArea}${number}&text=${msgWithoutSpaces}`, '_blank')
  }