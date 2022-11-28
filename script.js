const  procurar= () =>{
    



    const input = document.querySelector('[data-form-input]')

    if(input.value.length==0){
        alert("preencha com algum valor")
    }else{
    
        console.log(input.value.length)
    const foto = Math.floor(Math.random()*3)
    document.getElementById("fotose").src = `pessoas/${foto}.jpg`;

    const pubAlvo = document.querySelector('[data-form-alvo')
    console.log(pubAlvo.value)

    console.log(input.value) 
    const menuInicial = document.querySelector('[menuinicial]')
    const menuCurriculo =document.querySelector('[menuCurriculo]')

    menuInicial.hidden = true;
    menuCurriculo.hidden = false;


    let citacao = document.querySelector('[data-citacao]')
    citacao.innerHTML=`" Eu amo trabalhar com ${input.value} e pessoas de faixa etária ${pubAlvo.value} "`

    return false;
    }
}



function bagulho(){
    window.open("marcas.html");

}