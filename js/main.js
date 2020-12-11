$(document).ready(function(){
    $('.menu-burger').click(function(event) {  
        $('.header__menu').toggleClass('nav-active');  
        $('.header__btn').toggleClass('active');   
        $('.menu-burger').toggleClass('active');
        
    });
});