let slideIndex = 1;
showSlides(slideIndex); 

function plusSlides(n){
    showSlides(slideIndex+=n);
}

function currentSlides(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    let i;
    let slides = document.querySelectorAll('.slider');
    let anotherSlides = document.querySelectorAll('.doctor_info-1');
    if(n > slides.length || n > anotherSlides.length){
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = slides.length;
        slideIndex = anotherSlides.length;
    }
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    for(let i = 0; i< anotherSlides.length; i++){
        anotherSlides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
    anotherSlides[slideIndex - 1].style.display = 'block';
}

function myFunction(x) {
    x.classList.toggle("change");
}
///

