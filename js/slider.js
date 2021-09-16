(function(){
    
    const sliders = [...document.querySelectorAll('.testimony__body')];/*Obtiene todos los elementos con la clase que se coloque en este caso = testimony__body. Los tres puntos es para pasarlo a un array las secciones con esa clase*/
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;   

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;/*Obtiene el slider con la clase que se coloque en este caso = testimony__body--show equivale al data_id*/
        value = Number(currentTestimony);
        value+= add;


        sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show');/*Remueve la clase testimony__body--show del elemento actual */
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('testimony__body--show');/*value-1 ya que queremos seleccionar el primer elemento que esta en la posicion 0, añade la clase testimony__body--show del elemento actual*/

    }

})();