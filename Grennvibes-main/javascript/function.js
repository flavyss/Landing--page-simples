$(function(){
    menu();

    function menu(){

        let barra = $(".menu-mobile h2");
        let desliza = $(".menu-mobile ul")

        barra.click(function(){
            desliza.slideToggle()
        })
    }
})