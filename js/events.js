function getIt() {
  $('p').on('click', function(e) {
    alert("Hey!")
  })
}

function frameIt() {
  $('img').on('load', img.append('.tasty'))
}

function pressIt() {
  $('form').on('keydown', function(e) {
    if(e.key === 71) {
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
