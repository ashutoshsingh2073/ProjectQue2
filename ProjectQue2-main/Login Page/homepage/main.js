// change navbar styles on scroll

window.addEventListener('scroll' , ()=>{
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY > 0)
}
)


//show hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq=>{
    faq.addEventListener('click',() => {
        faq.classList.toggle('open');

        // change icon
        const icon = faq.querySelector('.faq_icon i');
        if(icon.className==='uil uil-plus'){
            icon.className = "uil uil-minus"
        }else{
            icon.className = "uil uil-plus"
        }
    })
})

document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopButton = document.getElementById("scroll-to-top-btn");

    // Add a click event listener to the anchor tag
    scrollToTopButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Scroll to the top of the page smoothly
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

