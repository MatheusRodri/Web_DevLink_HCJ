function toggleMode(){
  const html = document.documentElement
  html.classList.toggle('light')
  
  const img = document.querySelector("#profile img")

  if(html.classList.contains('light')){
    img.setAttribute('src','./assets/avatar-light.png')
    img.setAttribute('alt', 'foto do Maykerito')
  }else{
    img.setAttribute('src', 'https://github.com/MatheusRodri.png')
    img.setAttribute('alt', 'foto de Matheus, com uma represa ao fundo')
  }


  // if(html.classList.contains('light')){
  //   html.classList.remove('light')
  // }else{
  //   html.classList.add('light')
  // }

  
}