$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY>20){
            $('.navbar').addClass("sticky");
            // console.log("he")
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');

    });
    
    var x = 0;
    $('#readmore').click(function(){
        x=x+1;
        $('.text2').toggleClass('active');
        if (x%2==0) {
            $('#readmore').html('<div>READ MORE</div>');    
          }
        else{
            $('#readmore').html('<div>READ LESS</div>');    
        }
        
        // $('.menu-btn i').toggleClass('active');

    });
    $('#btn').hover(function(){
        $('.main .leftsec button a').toggleClass('active');
        // console.log(hello)
    });
    $('.container .div1').hover(function(){
        $('.container .div1 i').toggleClass('active');
    })
    $('.container .div2').hover(function(){
        $('.container .div2 i').toggleClass('active');
    })
    $('.container .div3').hover(function(){
        $('.container .div3 i').toggleClass('active');
    })
});
//  typing effect 
var typed=new Typed(".typing",{
    strings : ["Youtubers","Developer","Blogger","Designer","Freelancer"],
    typeSpeed: 100,
    backSpeed:60,
    loop:true,
});
var typed2=new Typed(".typing2",{
    strings : ["Youtubers","Developer","Blogger","Designer","Freelancer"],
    typeSpeed: 100,
    backSpeed:60,
    loop:true,
});