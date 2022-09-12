window.addEventListener('DOMContentLoaded',function(){
    window.addEventListener('scroll',()=>{
        let header = document.querySelector('header');
        header.classList.toggle('sticky',window.scrollY > 0);
    })
    let menuBtn = document.querySelector('.menu-btn');
    let nav = document.querySelector('.navigation');
    let navItems = document.querySelectorAll('.navigation a');
    menuBtn.addEventListener('click',()=>{
        menuBtn.classList.toggle('active');
        nav.classList.toggle('nav-active')
    })
    navItems.forEach(item=>{
        item.addEventListener('click',()=>{
            menuBtn.classList.remove('active');
             nav.classList.remove('nav-active')        
        })
    })
    let toTop = document.querySelector('.scrollToTop-btn');
    window.addEventListener('scroll',()=>{
        toTop.classList.toggle('active',window.scrollY>500);
    })
    toTop.addEventListener('click',()=>{
        document.body.scrollTop=0;
        document.documentElement.scrollTop = 0;
    })
    window.addEventListener('scroll',()=>{
        let reveals = document.querySelectorAll('.reveal');
        for(let i=0; i<reveals.length ; i++){
            let windowHeight= window.innerHeight;
            let revelTop = reveals[1].getBoundingClientRect().top;
            let revelPoint  = 50;
            if (revelTop < windowHeight - revelPoint) {
                reveals[i].classList.add('active');
            }
        }
    })
    
})