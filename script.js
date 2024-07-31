var tl=gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 95%",
    end:"50% 50%",
    scrub:true,
    // markers:true,
}})


tl.to("#fanta",{
    top:"125%",
    left: "5%",
    rotate:"360deg"
},"orange")

tl.to("#orange-cut",{
    top:"165%",
    left:"30%"
},"orange")

tl.to("#orange",{
    width:"16%",
    top:"165%",
    right:"0%"
},"orange")

tl.to("#leaf",{
    rotate:"400deg",
    top:"100%",
    left:"80%"
},"orange")

tl.to("#leaf2",{
    rotate:"260deg",
    top:"109%",
    left:"8%"
},"orange")


var tl2=gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"20% 90%",
    end:"50% 70%",
    scrub:true,
    // markers:true
}})

tl2.from(".lemon1",{
   top:"110%",
   left:"-50%",
    rotate:"-90deg"
},"ca")
tl2.from("#cocacola",{
   top:"110%",
   left:"-50%",
    rotate:"-90deg"
},"ca")

tl2.from(".lemon2",{
    top:"110%",
    left:"50%",
    rotate:"90deg"
 },"ca")

tl2.from("#pepsi",{
    top:"90%",
    left:"50%",
    rotate:"90deg"
},"ca")


tl2.to("#orange-cut",{
    top:"200%",
    left:"39.5%",
    width:"20%",
},"ca")

tl2.to("#fanta",{
    top:"213%",
    left:"32%",
    width:"35%"
},"ca")