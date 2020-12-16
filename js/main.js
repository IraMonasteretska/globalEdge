$(document).ready(function(){
    $('.menu-burger').click(function(event) { 
        $('.header').toggleClass('nav-active');   
        $('.menu-burger').toggleClass('active');
        $('body').toggleClass('lock');
        
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

    if (top.location.pathname === '/myth-busters.html')
        {
            $("#myth-typed").typed({
                strings: [
                "Ask for <span> a demo </span> – we will show you.",
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