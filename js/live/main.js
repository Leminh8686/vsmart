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
        var sec8Pos = section8.position().top;
        var sec9Pos = section9.position().top;
        var sec10Pos = section10.position().top;

        var sec1H = section1.height();
        var sec2H = section2.height();
        var sec3H = section3.height();
        var sec4H = section4.height();
        var sec5H = section5.height();
        var sec6H = section6.height();
        var sec7H = section7.height();
        var sec8H = section8.height();
        var sec9H = section9.height();
        var sec10H = section10.height();
        if (scrollPos > sec1Pos && scrollPos < sec1Pos + sec1H / 3 && !anim1) {
            anim1 = true;
            var pos1 = 25
            if (isMobile) pos1 = 15
            gsap.fromTo(".s1-phone-1", { y: pos1 }, { y: 0, duration: 0.7, ease: Linear.easeNone });
            gsap.fromTo(".s1-phone-2", { y: -pos1 }, { y: 0, duration: 0.7, ease: Linear.easeNone });
            gsap.fromTo(".s1-phone-as", { opacity: 0 }, { opacity: 1, duration: 0.8, delay: .7, ease:"power4.out" });


        }
        if (scrollPos > sec1H + sec1Pos) {
            anim1 = false;
            var pos1 = 25
            if (isMobile) pos1 = 15
            gsap.set(".s1-phone-1", { y: pos1 });
            gsap.set(".s1-phone-2", { y: -pos1 });
            gsap.set(".s1-phone-as", { opacity: 0 });
        }
        //2
        if (scrollPos > sec2Pos - sec2H / 4 && scrollPos < sec2Pos + sec2H / 3 && !anim2) {
            anim2 = true;

            gsap.to(".s2-phone-1",  { y: 0, duration: 1, ease: Linear.easeNone });
            gsap.to(".s2-phone-2", { y: 0, duration: 1, ease: Linear.easeNone });
            gsap.to(".s2-phone-3",  { x: 0, duration: 1, ease: Linear.easeNone });
            /*  if (cpuRoot) {
                 cpuRoot.children[0].gotoAndPlay(1);
             }
             if (cpuRootMb) {
                 cpuRootMb.children[0].gotoAndPlay(1);
             } */

        }
        if (scrollPos > sec2H + sec2Pos || scrollPos < sec2Pos - sec2H / 2) {
            /*  if (cpuRoot) {
                 cpuRoot.children[0].gotoAndStop(0);
             }
             if (cpuRootMb) {
                 cpuRootMb.children[0].gotoAndStop(0);
             } */
            anim2 = false;
            var pos = 75;
            if (isMobile) pos = 20;
            gsap.set(".s2-phone-1", { y: pos });
            gsap.set(".s2-phone-2", { y: -pos });
            gsap.set(".s2-phone-3", { x: pos });
        }
        //3
        if (scrollPos > sec3Pos - sec3H / 4 && scrollPos < sec3Pos + sec3H / 3 && !anim3) {
            anim3 = true;


        }
        if (scrollPos > sec3H + sec3Pos || scrollPos < sec3Pos - sec3H) {
            anim3 = false;

            /*  gsap.set(".mah3500", { y: -150, alpha: 0 });
             gsap.set(".s3-sac", { x: -500, alpha: 0 });
             gsap.set(".s3-pin", { x: 500, alpha: 0 });
             gsap.set("#s3_up", { y: 50 })
             gsap.set("#s3_down", { y: -50 }) */
        }
        //4
        if (scrollPos > sec4Pos - sec4H / 4 && scrollPos < sec4Pos + sec4H / 3 && !anim4) {
            anim4 = true;
            /* gsap.set(".cam-truoc-pic", { alpha: 0 });
            gsap.set("#canvasCamera", { alpha: 0 });
            if (cameraRoot) {
                cameraRoot.children[0].gotoAndStop(0);
            }
            if (slider == 0) {
                gsap.fromTo(".cam-truoc-pic", { x: -150, alpha: 0 }, { alpha: 1, x: 0, duration: 1 });
            }
            else {
                gsap.fromTo("#canvasCamera", { x: -150, alpha: 0 }, {
                    alpha: 1, x: 0, duration: 1, onComplete: function () {
                        if (cameraRoot) {
                            cameraRoot.children[0].gotoAndPlay(1);
                        }
                    }
                });

            } */
        }
        if (scrollPos > sec4H + sec4Pos || scrollPos < sec4Pos - sec4H) {
            /*  gsap.set(".cam-truoc-pic", { alpha: 0 });
             gsap.set("#canvasCamera", { alpha: 0 });
             if (cameraRoot) {
                 cameraRoot.children[0].gotoAndStop(0);
             } */
            anim4 = false;
        }
        //5

        if (scrollPos > sec5Pos - sec5H / 4 && scrollPos < sec5Pos + sec5H / 3 && !anim5) {
            anim5 = true;
            gsap.timeline().fromTo(".s5-bg-pic", { opacity: 0 }, { opacity: 1, duration: 1, ease: Linear.easeNone });
            gsap.timeline().fromTo(".s5-bg-pic", { scaleX: 1.3, scaleY: 1.3 }, { scaleX: 1.0, scaleY: 1.0, duration: 1, delay: 0.6, ease: Linear.easeNone });
            /* 
            if (fingerRoot) {
                fingerRoot.children[0].gotoAndPlay(1);
            }
            if (fingerRootMb) {
                fingerRootMb.children[0].gotoAndPlay(1);

            }
            gsap.to(".s5-vantay", { opacity: 1, duration: 0.8, delay: 2.6 }); */
        }
        if (scrollPos > sec5H + sec5Pos || scrollPos < sec5Pos - sec5H) {
            anim5 = false;
            gsap.set(".s5-bg-pic", { opacity: 0, scaleX: 1.3, scaleY: 1.3 });
            /*  gsap.set(".s5-vantay", { opacity: 0 });
             anim5 = false;
             if (fingerRoot) {
                 fingerRoot.children[0].gotoAndStop(0);
             }
             if (fingerRootMb) {
                 fingerRootMb.children[0].gotoAndStop(0);
             } */
        }
        //6

        if (scrollPos > sec6Pos - sec6H / 4 && scrollPos < sec6Pos + sec6H / 3 && !anim6) {
            anim6 = true;
            if (faceRoot) {
                faceRoot.children[0].gotoAndPlay(1);
            }
            /* console.log("sec6")
            $(".func-list").each(function (index) {
                console.log(index);
                gsap.fromTo(this, { alpha: 0 }, { alpha: 1, duration: 1, delay: index / 3 });
            }) */

        }
        if (scrollPos < sec6Pos - sec6H && anim6 || scrollPos >= sec7Pos && anim6) {
            anim6 = false;
            /*  $(".func-list").each(function (index) {
                 console.log(index);
                 gsap.set(this, { alpha: 0 });
             }) */
            if (faceRoot) {
                faceRoot.children[0].gotoAndStop(1);
            }
        }
        //7
        if (scrollPos > sec7Pos - sec7H / 4 && scrollPos < sec7Pos + sec7H / 3 && !anim7) {
            anim7 = true;
            if (screenRoot) {
                screenRoot.children[0].gotoAndPlay(0);
            }
            if (screenRootMB) {
                screenRootMB.children[0].gotoAndPlay(0);
            }
        }
        if (scrollPos < sec7Pos - sec7H && anim7 || scrollPos >= sec8Pos && anim7) {
            anim7 = false;
            if (screenRoot) {
                screenRoot.children[0].gotoAndStop(0);
            }
            if (screenRootMB) {
                screenRootMB.children[0].gotoAndStop(0);
            }

        }
        // 8
        if (scrollPos > sec8Pos - sec8H / 4 && scrollPos < sec8Pos + sec8H / 3 && !anim8) {
            anim8 = true;
            var posx = 250, posy = 145;
            if (isMobile) {
                posx = 150;
                posy = 100
            }
            gsap.fromTo(".s8-flare", { y: posx, x: posy, alpha: 0 }, { y: 0, x: 0, alpha: 1, duration: 0.75, ease: Sine.easeOut });
        }
        if (scrollPos < sec8Pos - sec8H && anim8 || scrollPos >= sec9Pos && anim8) {
            anim8 = false;
            gsap.set(".s8-flare", { alpha: 0 });
        }

        // 9
        if (scrollPos > sec9Pos - sec9H / 4 && scrollPos < sec9Pos + sec9H / 3 && !anim9) {
            anim9 = true;
        }
        if (scrollPos < sec9Pos - sec9H && anim9 || scrollPos >= sec10Pos && anim9) {
            anim9 = false;
        }


        // 10
        if (scrollPos > sec10Pos - sec10H / 4 && scrollPos < sec10Pos + sec10H / 3 && !anim10) {
            anim10 = true;
            if (batteryRoot) {
                batteryRoot.children[0].gotoAndPlay(0);
            }
        }
        if (scrollPos < sec10Pos - sec10H && anim10 || scrollPos >= sec11Pos && anim10) {
            anim10 = false;
            if (batteryRoot) {
                batteryRoot.children[0].gotoAndStop(0);
            }
        }
        // 11
        if (scrollPos > sec11Pos - sec11H / 4 && scrollPos < sec11Pos + sec11H / 3 && !anim11) {
            anim11 = true;
            gsap.set($("#left1"), { x: $("#left1").width() + 20 })
            gsap.set($("#left2"), { x: $("#left1").width() * 2 + 20 })
            gsap.set($("#right1"), { x: -$("#right1").width() - 20 })
            gsap.set($("#right2"), { x: -$("#right1").width() * 2 - 20 })



            gsap.to($("#left1"), { x: 0, duration: 1, ease: Linear.easeNone })
            gsap.to($("#left2"), { x: 0, duration: 1, ease: Linear.easeNone })
            gsap.to($("#right1"), { x: 0, duration: 1, ease: Linear.easeNone })
            gsap.to($("#right2"), { x: 0, duration: 1, ease: Linear.easeNone })
        }
        if (scrollPos < sec11Pos - sec11H || scrollPos > sec11Pos + sec11H) {
            anim11 = false;
            gsap.set($("#left1"), { x: $("#left1").width() + 20 })
            gsap.set($("#left2"), { x: $("#left1").width() * 2 + 20 })
            gsap.set($("#right1"), { x: -$("#right1").width() - 20 })
            gsap.set($("#right2"), { x: -$("#right1").width() * 2 - 20 })
        }

    }

    var menuHome = $("#primary_header");
    var tl = gsap.timeline();
    var section1 = $("#kv");
    var section2 = $("#thong-tin")
    var section3 = $("#camera-triple")
    var section4 = $("#night-mode")
    var section5 = $("#panoramic")
    var section6 = $("#selfie")
    var section7 = $("#screen")
    var section8 = $("#finger")
    var section9 = $("#chip-core")
    var section10 = $("#battery")
    var section11 = $("#vos")
    var slider = 0;

    var anim1, anim2, anim3, anim4, anim5, anim6, anim7, anim8, anim9, anim10, anim11;
    function initHome() {
        var pos1 = 25,pos2=75;
        if (isMobile) pos1 = 15;
        gsap.set(".s1-phone-1", { y: pos1 });
        gsap.set(".s1-phone-2", { y: -pos1 });
        gsap.set(".s1-phone-as", { opacity: 0 });
        if (isMobile) pos2 = 20;
        gsap.set(".s2-phone-1", { y: pos2 });
        gsap.set(".s2-phone-2", { y: -pos2 });
        gsap.set(".s2-phone-3", { x: pos2 });

    }
    function initAnimation() {

    }
    $('.slider-cam').on("beforeChange", function (e, slick, currentSlide, nextSlide) {

        switch (currentSlide) {
            case 0:
                gsap.set("#canvasCamera", { alpha: 0 });
                if (cameraRoot) {
                    cameraRoot.children[0].gotoAndStop(1);
                }
                break;
            case 1:
                gsap.set(".cam-truoc-pic", { alpha: 0 });

                break;
            default:
                break
        }
    })
    $('.slider-cam').on("afterChange", function (e, slick, currentSlide, nextSlide) {
        if (slider == currentSlide) return
        slider = currentSlide;
        switch (currentSlide) {
            case 0:
                anim4 = true;
                gsap.fromTo(".cam-truoc-pic", { x: -150, alpha: 0 }, { alpha: 1, x: 0, duration: 1 });
                gsap.set("#canvasCamera", { alpha: 0 });
                break;
            case 1:
                gsap.fromTo("#canvasCamera", { x: -150, alpha: 0 }, {
                    alpha: 1, x: 0, duration: 1, onComplete: function () {
                        if (cameraRoot) {
                            cameraRoot.children[0].gotoAndPlay(1);
                        }
                    }
                });
                break;
            default:
                break;
        }
    })
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
