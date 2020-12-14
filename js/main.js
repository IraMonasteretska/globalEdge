$(document).ready(function(){
    $('.menu-burger').click(function(event) {  
        $('.header__menu').toggleClass('nav-active');  
        $('.header__btn').toggleClass('active');   
        $('.menu-burger').toggleClass('active');
        
    });

    if (top.location.pathname === '/ten-benefits.html'){
        $("#typing").typed({
            strings: [
            " Having the  <span class='benefits__typing-span' >  “perfect” SD-WAN for your   business </span> doesn’t have to be complicated or costly ",
            ],
            typeSpeed: 70,
            backDelay: 1500,
            startDelay: 2500,
            loop: true,
            loopCount: 500,
            contentType: "html",
        });
    }

    if (top.location.pathname === '/why-global.html')
        {

            $("#why-typed").typed({
                strings: [
                "Expect more. <span>Connect different.</span>",
                ],
                typeSpeed: 70,
                backDelay: 1500,
                startDelay: 2500,
                loop: true,
                loopCount: 500,
                contentType: "html",
            });
        }    
});