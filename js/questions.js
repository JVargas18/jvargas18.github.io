(function(){
    const titleQuestions = [...document.querySelectorAll('.questions__title')];
    console.log(titleQuestions)

    titleQuestions.forEach(question =>{
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling;/* Ya que el siguiente elemento en el html es el parrafo */
            let addPadding = question.parentElement.parentElement;/*Que obtenga el padre del elemento */

            addPadding.classList.toggle('questions__padding--add');
            question.children[0].classList.toggle('questions__arrow--rotate');/*Se cuenta el primer hijo que en este caso es el span */

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;/*Nos da el alto minimo para que un elemento se muestre. */
            }

            answer.style.height = `${height}px`;/*Se utiliza el template litetal `*/
        });
    });
})();