const telefone = document.getElementById('input-fone')
telefone.addEventListener('keypress', () => {
  let inputlength = telefone.value.length

  if (inputlength === 0){
    telefone.value='('
  }
  if (inputlength === 3){
    telefone.value+=') '
  }
  if (inputlength === 10){
    telefone.value+='-'
  }
})
document.getElementById("input-name").addEventListener("keypress", function(evt){
  var charCode = (evt.which) ? evt.which : event.keyCode;
  if ((charCode < 65 || (charCode > 90 && charCode < 97) || charCode > 122) && charCode !== 32)
      evt.preventDefault();
});
document.getElementById("input-fone").addEventListener("keypress", function(evt){
  var charCode = (evt.which) ? evt.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57))
      evt.preventDefault();
});



