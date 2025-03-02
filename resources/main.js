
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');

})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}))


const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
        entry.target.classList.add('show');

    }   else {

        entry.target.classList.remove('show');
    } 
});

});

const hiddenElements = document.querySelectorAll('.adjust1');
hiddenElements.forEach((el) => observer.observe(el));



const observers = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
    
        }   else {
    
            entry.target.classList.remove('show');
        } 
    });
    
    });
    
    const hiddenElement = document.querySelectorAll('.contact-pic');
    hiddenElement.forEach((el) => observer.observe(el));


    const observervant = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
        
            }   else {
        
                entry.target.classList.remove('show');
            } 
        });
        
        });
        
        const hiddenElementPic = document.querySelectorAll('.hideit');
        hiddenElementPic.forEach((el) => observervant.observe(el));

    
        const observerving = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry)
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
            
                }   else {
            
                    entry.target.classList.remove('show');
                } 
            });
            
            });
            
            const hiddenElemem = document.querySelectorAll('.gr11');
            hiddenElemem.forEach((el) => observerving.observe(el));


            const observervingss = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    console.log(entry)
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                
                    }   else {
                
                        entry.target.classList.remove('show');
                    } 
                });
                
                });
                
                const hiddenEleme = document.querySelectorAll('.gr12');
                hiddenEleme.forEach((el) => observervingss.observe(el));


                const observervingsss = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        console.log(entry)
                        if (entry.isIntersecting) {
                            entry.target.classList.add('show');
                    
                        }   else {
                    
                            entry.target.classList.remove('show');
                        } 
                    });
                    
                    });
                    
                    const hiddenElem = document.querySelectorAll('.gr13');
                    hiddenElem.forEach((el) => observervingsss.observe(el));