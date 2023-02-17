
const obeserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log("coba")
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})



const aosElement = document.querySelectorAll('.aos')
aosElement.forEach(el => obeserver.observe(el))