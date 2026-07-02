// Current year for footer if needed
const year = new Date().getFullYear();
console.log("CV Loaded - " + year);

// Smooth scroll for future menu links
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (e) {
        const target = this.getAttribute('href');

        if (target && target.startsWith('#')) {
            e.preventDefault();

            document.querySelector(target)
                .scrollIntoView({
                    behavior: 'smooth'
                });
        }
    });
});