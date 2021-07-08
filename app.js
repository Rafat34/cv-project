$(document).ready(function(){
    $('#profile_ripple').ripples({
        resolution: 512,
        dropRadius: 10
    });


     const bars = document.querySelectorAll('.progress_bar');

     bars.forEach(function(bar){
       let percentage = bar.dataset.percent;
       let tooltip = bar.children[0];
       tooltip.innerText = percentage + '%';
       bar.style.width = percentage + '%';
       console.log(percentage);
    })

    const counters = document.querySelectorAll('.counter');
    

    function runCounter () {
        counters.forEach(counter => {
            counter.innerText = 0;
            let target = +counter.dataset.count;
            let step = target / 100;


            

            let countIt = function() {
                let displayedcount = +counter.innerText;
                if(displayedcount < target) {

                    counter.innerText = Math.ceil(displayedcount + step);
                    setTimeout(countIt, 1);
                } else {
                    counter.innerText = target;
                }
            }
            countIt();
        })
    }
   
    let counterSection = document.querySelector('.counter_section');

    let Option = {
        rootMargin : '0px 0px -200px 0px'
    }
    let done = 0;

    const sectionObserver = new IntersectionObserver(function(entries){

        if(entries[0].isIntersecting && done !== 1) {
            done = 1;
            runCounter();
        }
    }, Option)

    sectionObserver.observe(counterSection);


    var $wrapper = $('.portfolio_wrapper');

    $wrapper.isotope({
        filter : '*',
        layoutMode : 'masonry',
        animationOption : {
            duration: 750,
            easing: 'linear'
        }
    })
    let links = document.querySelectorAll('.tabs a');

    links.forEach(link => {
        let selector = link.dataset.filter;
        console.log(selector)
       link.addEventListener('click', function(e) {
        e.preventDefault();
        
        $wrapper.isotope({
            filter : selector,
            layoutMode : 'masonry',
            animationOption : {
                duration: 750,
                easing: 'linear'
            }
        });
            links.forEach(link =>{
             link.classList.remove('active');   
            
            })
            e.target.classList.add('active');
       });
    })
    $('.magnify').magnificPopup({
        type: 'image',
        gallery: {
            enabled : true
        },
        zoom : {
           enabled : true
        }
    });

        $('.slider').slick({
            arrows: false,
            autoplay: true
        });

}); 