
var more = document.querySelector(".show")

function toggleClass(){
  if (more.classList=='show'){
    more.classList.remove('show')
    more.classList.add('show-description')
  }
  else{
    more.classList.remove('show-description')
    more.classList.add('show')
  }
}
