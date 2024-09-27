var allelem = document.querySelectorAll('body')
var curvedText = document.querySelector("#curvedText")
var cream = document.querySelector(".cream")
var shoes = document.querySelector(".shoes")




curvedText.addEventListener("mousemove",function(){
    curvedText.style.transform = "rotate(4deg)"
})
curvedText.addEventListener("mouseleave",function(){
     curvedText.style.transform = "rotate(-4deg)"
})




var tl = gsap.timeline();

tl.from(".main1 .nav",{y: -50,opacity:0,duration:1,})
     
    .from(".restpart h1 ",{y:-50,opacity:0,duration:1,delay:0.5},0)
    .from(".restpart h2 ",{y:-50,opacity:0,duration:1, delay:0.5,},0)
    .from(".restpart h3",{y:-50,opacity:0,duration:1, delay:0.5,},0)
    .from(".restpart h4",{y:-50,opacity:0,duration:1, delay:0.5,},0)
     .from(".cream",{ x:152,opacity:0,delay:1,duration:1},0)
     .from(".shoes",{ x:-150,opacity:0,delay:1,duration:1},0)
     .from(".main1 .main1footer h1",{x:-50,opacity:0,duration:0.2})
     .from("#img3",{x:-30,opacity:0,})
     

     .from(".main2 .nav2",{
        scrollTrigger:{
            trigger:".main2",
            scroll:"body",
            start:"top 50%",
            end:"top 50%",
            scrub:2
         
        },
        y:-100,
        opacity:0
     },0)
     

     .from(".main2 #div1",{
        scrollTrigger:{
            trigger:".main2",
            scroll:"body",
            start:"top 15%",
            end:"top 50%",
            scrub:2,
            
        },
        y:-100,
        opacity:0,
        
     })
     .from(".main2 #div2",{
        scrollTrigger:{
            trigger:".main2",
            scroll:body,
            start:"top 11%",
            end:"top 52%",
            
            
         
        },
        y:-100,
        opacity:0,
        
     },1)
 
      .to(".main2 #div2",{backgroundColor:"rgb(96, 31, 235)"})

     .from(".main2 #div3",{
        scrollTrigger:{
            trigger:".main2",
            scroll:body,
            start:"top 9%",
            end:"top 50%",
            
        
         
        },
        y:-100,
        opacity:0,
    },1.2)

        .from(".main3 .part1 h1",{
         scrollTrigger:{
            trigger:".main3",
            start:"top 20%",
            end:"top 50%",
            scrub:1,
            
         },
          y:-100,
           opacity:0,
           duration:1,
           stagger:1   
    },0)
  
    .from(".main3 .part2",{
        scrollTrigger:{
            trigger:".main3",

            scroll:"body",
            start:"top 20%",
            end:"top 50%",
            scrub:1,
            
         },
          y:-100,
           opacity:0,
           duration:1,
           stagger:1  
    })

    .from(".lastdiv .lower .left",{
          scrollTrigger:{
            trigger:".lastdiv",
            start:"top 5%",
            end:"-100%",
            scrub:1,
            
          },
        x:-100,
        opacity:0,
        duration:1,
        stagger:1
    })

    .from(".lastdiv .lower .right",{
        scrollTrigger:{
          trigger:".lastdiv",
          start:"top 5%",
          end:"-100%",
          scrub:1,
          
        },
      x:-100,
      opacity:0,
      duration:2,
      stagger:1,
      
  })


   .from("#footer img",{
    scrollTrigger:{
        trigger:".lastdiv",
        start:"top 95%",
        end:"-100%",
        scrub:5,
        
      },
    y:-100,
    opacity:0,
    duration:1.5,
    stagger:1
   })

.from(".arrowicon2",{
    scrollTrigger:{
        trigger:"#imgdiv2",
        start:"top 5%",
        end:"-100%",
        scrub:1,
        
      },
    transform:"rotate(130deg)",
    duration:2,
})

