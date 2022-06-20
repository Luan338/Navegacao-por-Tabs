const tabMenu = document.querySelectorAll(".lista-imgs img");
const conteudo = document.querySelectorAll(".conteudo div");



if(tabMenu.length){

    conteudo[0].classList.add("ativo");

    function activeSessao(index){
        conteudo.forEach((div) =>{
            div.classList.remove("ativo");
        });
    
        conteudo[index].classList.add("ativo");
    }
    
    tabMenu.forEach((item, index) => {
        item.addEventListener("click", () => {
            activeSessao(index);
        });
    })

}
