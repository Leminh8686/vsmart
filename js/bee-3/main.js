var isMobile = false;
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)

    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {

    isMobile = true;

}
main = function () {


    //init
    initHome();
    setTimeout(onScroll, 500);
    $(document).unbind("scroll");
    $(document).on("scroll", onScroll);

    initMenuBtn();
    function initMenuBtn() {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                var meme = this;
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                //console.log(target);
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - menuHome.height()
                    }, 350, function () {

                    })
                    //console.log(target.name)                   
                    return false;
                }

            }
        });


        if (isMobile) {


        }
    }

    function onScroll() {
        var scrollPos = $(this).scrollTop() + menuHome.height();

        var sec1Pos = section1.position().top;
        var sec2Pos = section2.position().top;
        var sec3Pos = section3.position().top;
        var sec4Pos = section4.position().top;
        var sec5Pos = section5.position().top;
        var sec6Pos = section6.position().top;
        var sec7Pos = section7.position().top;

        var sec1H = section1.height();
        var sec2H = section2.height();
        var sec3H = section3.height();
        var sec4H = section4.height();
        var sec5H = section5.height();
        var sec6H = section6.height();
        var sec7H = section7.height();

        if (scrollPos > sec1Pos && scrollPos < sec1Pos + sec1H / 3 && !anim1) {
            anim1 = true;
           


        }
        if (scrollPos > sec1H + sec1Pos) {
            anim1 = false;
          
        }
        //2
        if (scrollPos > sec2Pos - sec2H / 4 && scrollPos < sec2Pos + sec2H / 3 && !anim2) {
            anim2 = true;
         gsap.to(".s2-phone-pic",{y:0,duration:1})

        }
        if (scrollPos > sec2H + sec2Pos || scrollPos < sec2Pos - sec2H / 2) {

            anim2 = false;
            gsap.set(".s2-phone-pic",{y:100})

        }
        //3
        if (scrollPos > sec3Pos - sec3H / 4 && scrollPos < sec3Pos + sec3H / 3 && !anim3) {
            anim3 = true;
          gsap.to(".s3-big .ani",{scale:1,duration:0.8})
        }
        if (scrollPos > sec3H + sec3Pos || scrollPos < sec3Pos - sec3H) {
            anim3 = false;
            gsap.set(".s3-big .ani",{scale:0.5})
        }
        //4
        if (scrollPos > sec4Pos - sec4H / 4 && scrollPos < sec4Pos + sec4H / 3 && !anim4) {
            anim4 = true;
           gsap.to("#s4-up",{x:0,duration:1.2})
           gsap.to("#s4-down",{x:0,duration:1.2})

        }
        if (scrollPos > sec4H + sec4Pos || scrollPos < sec4Pos - sec4H) {
            anim4 = false;
            gsap.set("#s4-up",{x:-90})
            gsap.set("#s4-down",{x:90})
        }
        //5

        if (scrollPos > sec5Pos - sec5H / 4 && scrollPos < sec5Pos + sec5H / 3 && !anim5) {
            anim5 = true;
            gsap.timeline().to(" .s5-flare",{alpha:1,ease:Power4.easeOut,duration:.6}).to(" .s5-flare",{x:0,duration:1.2})
        }
        if (scrollPos > sec5H + sec5Pos || scrollPos < sec5Pos - sec5H) {
            anim5 = false;
            var pos5=-230;
            if(isMobile) pos5=-170;
            gsap.set(" .s5-flare",{x:pos5,alpha:0})
        }
        //6

     
        if (scrollPos > sec6Pos - sec6H / 4 && scrollPos < sec6Pos + sec6H / 3 && !anim6) {
            anim6 = true;
            gsap.to("#s6p1",{x:0,y:0,duration:0.8})
        }
        if (scrollPos < sec6Pos - sec6H && anim6 || scrollPos >= sec7Pos && anim6) {
            anim6 = false;
            
            var posx6=-47,posy6=0
            if(isMobile) posx6=-20
            gsap.set("#s6p1",{x:posx6,y:posy6})
        }

        //7
        if (scrollPos > sec7Pos - sec7H / 4 && scrollPos < sec7Pos + sec7H / 3 && !anim6) {
            anim7 = true;
            gsap.to(".s7-phone",{y:0,duration:1.2})
            gsap.to("#f-right",{y:0,duration:1.2,delay:1.2})
            gsap.to("#f-left",{y:0,duration:1.2,delay:1.2})
            gsap.to("#f-bot",{x:0,duration:1.2,delay:1.2})
        }
        if (scrollPos < sec7Pos - sec7H || scrollPos > sec7Pos + sec7H) {
           anim7 = false;
           var pos7=230;
           if(isMobile) pos7=150
            gsap.set(".s7-phone",{y:100})
            gsap.set("#f-right",{y:-60})
            gsap.set("#f-left",{y:60})
            gsap.set("#f-bot",{x:pos7})
        }

    }

    var menuHome = $("#primary_header");
    
    var section1 = $("#kv");
    var section2 = $("#mau-sac")
    var section3 = $("#rong-hon")
    var section4 = $("#cpu")
    var section5 = $("#vos")
    var section6 = $("#de-dang")
    var section7 = $("#camera")
  
    var slider = 0;

    var anim1, anim2, anim3, anim4, anim5, anim6, anim7, anim8, anim9, anim10, anim11;
    function initHome() {
        var posx6=-47,posy6=0
        if(isMobile) posx6=-20
        gsap.set("#s6p1",{x:posx6,y:posy6})
    }


}
const checker = {
    check: function (item) {
        var hT = item.offset().top,
            hH = item.outerHeight(),
            wH = $(window).height(),
            wS = $(window).scrollTop();
        //console.log(hT,hH,wH,wS);
        if (wS > (hT + hH - wH) && item.css('opacity') == 0) {
            return true;
        }
        else {
            return false;
        }
    }
}
