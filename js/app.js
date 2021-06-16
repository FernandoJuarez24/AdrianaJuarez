/*MENU DE NAVEGACION*/
const menu = document.querySelector('.menuNav');
const contenedorLista = document.querySelector('.contenedorMenu');
const main = document.querySelector('#main');
const pegar = menu.offsetTop;
const btnMenu = document.querySelector('.btnMenu');
let on_off = true;

window.onscroll = () => {
	//PEGAR MENU
	if (window.pageYOffset >= pegar) {
       menu.classList.add('pegar');
       main.style.marginTop = '0px';
    }else{
        menu.classList.remove('pegar');
       	main.style.marginTop = '0px'; 
    }

	  //HOME
    if (window.pageYOffset >= 500) {
    	document.querySelector('.home').style.right = '10px';
    }else{
    	document.querySelector('.home').style.right = '-100%';
    }

    document.querySelector('.home').addEventListener('click', () => {
    	document.body.scrollTop = '0';
    	document.documentElement.scrollTop = '0';
    });
}

//MENU RESPONSIVO
btnMenu.addEventListener('click', () => {
	 document.querySelector('.btnMenu i').classList.toggle('fa-times');
	if(on_off){
		contenedorLista.style.left = '0';
		on_off = false;
	}else{
		on_off = false;
		contenedorLista.style.left = '-100%';
		on_off = true;
	}
});


//GALERIA MODAL
const images = document.querySelectorAll('.imgCard img');
const modal = document.querySelector('.galeriaModal');
const imgModal = document.querySelector('#imgModal');
const cierreModal = document.querySelector('.cierreModal');
const captionModal = document.querySelector('.captionModal');
const listaGaleria = document.querySelectorAll('.listaGaleria');


/*Boton Abajo*/
let abajo = document.querySelector('#abajo');

abajo.addEventListener('click', () => {
  document.body.scrollTop = 950;
  document.documentElement.scrollTop = 950;
});

