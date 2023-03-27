'use strict'
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function(){
    document.body.classList.toggle('tema-escuro')
    document.body.classList.toggle('tema-claro')


    var className = document.body.className;
    if(className == "tema-claro"){
        this.textContent = "Tema Escuro";
    }
    else{
        this.textContent  = "Tema Claro"
    }
    console.log('current class name: ' + className)
});
