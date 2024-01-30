    // var pag3 = document.querySelector("#pag3")
    // var icn = document.querySelector(".circle")
    // pag3.addEventListener("mousemove",function(dets){

    // icn.style.top = `${dets.y + 70}px`
    // icn.style.left = `${dets.x - 20}px`


    // })
    // gsap.to("#pag4 h1",{
    // marginTop:"6%",
    // prespective:"360deg",
    // rotateX :"90deg",
    // scale:1,
    //     duration:2,
    //     delay:1,
    //     scrollTrigger:{
    // trigger:"#pag4 h1",
    // scoller:"body",
    // // markers:true,
    // scrub:0.9,

    // start:"top 70%"
    //     }
    // })
    // setInterval(function(){
    // gsap.from("#pag5 .li",{
    // scale:0
    // })
    // },1200)
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
