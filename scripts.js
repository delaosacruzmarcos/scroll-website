
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }        
    });
});

//const hiddenElements = document.querySelectorAll('hidden');
const hiddenElements = document.getElementsByClassName('hidden');
hiddenElements.forEach((el) => alert(el));
hiddenElements.forEach((el) => observer.observe(el));
