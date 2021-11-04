
const slides = document.querySelectorAll('.slide');

for(const slide of slides)
{
    slide.addEventListener('click', () =>  {
        clearActiveSlasses();
        slide.classList.add('active');
    });
}
function clearActiveSlasses()
{
    
    slides.forEach((slide) =>{
        slide.classList.remove('active');
    })
        
        
    
}

