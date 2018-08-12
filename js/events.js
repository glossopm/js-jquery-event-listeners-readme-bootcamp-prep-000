function getIt() {
  $('p').on('click', function(e) {
    alert("Hey!")
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $('form').on('keydown', function(e) {
    if(e.which === 71) {
      alert("G was pressed")
      return
    }
  })
}
$(document).ready(function(){
getIT()
frameIt()
pressIt()

});
