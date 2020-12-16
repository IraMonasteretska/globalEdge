$(document).ready(function(){
    $('.menu-burger').click(function(event) { 
        $('.header').toggleClass('nav-active');   
        $('.menu-burger').toggleClass('active');
        $('body').toggleClass('lock');
        
    });

    if (document.querySelector("#typing")) {
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
    };

        
    

    if (document.querySelector("#myth-typed")) {
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

        if (document.querySelector("#why-typed")) {
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