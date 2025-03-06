let openB = document.querySelector('.openBar');
let closeB = document.querySelector('.closeBar');
let t = true;


let enjoy = setTimeout( function() {
    alert("Do you like it? Please follow me on github :)")
}, 10000);


function change(){
    
    if(t){
        closeB.style.display = 'none';
        openB.style.display = 'block';
        t = !t;

        gsap.from(".openBar", {
            duration: 0.5,
            opacity: 0,
            x: 0,
            ease: "power2.out",
            stagger: 0.2
        });
    
    }

    else{
        openB.style.display = 'none';
        closeB.style.display = 'block';
        t = !t;
        gsap.from(".closeBar", {
            duration: 1,
            opacity: 0,
            x: -200, 
            ease: "power2.out",
            stagger: 0.2
        });
    }
}
