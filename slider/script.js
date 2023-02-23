const slides = document.querySelectorAll(".slider")
var a = 0;
slides.forEach(
    (slider, index) => {
    slider.style.left = `${index * 100}%`
    
}
)

const next = () => {
    a++
    slideImage()
    if(a > 3) {
        a=-1;
    }
}

const prev = () => {
    a--
    slideImage()
    if (a < 0) {
        a = 0;
    }
}
const slideImage = () => {
    slides.forEach(
        (slider) => {
            slider.style.transform = `translateX(-${a * 100}%)`
        }
        
    )
}