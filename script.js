 //Fixa menu superior ao rolar a página para baixo  
 function titullax() {
    alturaDoTitulo = window.scrollY
    console.log(alturaDoTitulo)
       if (alturaDoTitulo >= 200) {
          document.querySelector('.titulo').style.position = 'fixed'
       }else {
           document.querySelector('.titulo').style.position = 'relative'
       }
     }
     window.addEventListener('scroll', titullax)