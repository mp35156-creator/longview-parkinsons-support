// Smooth scrolling for navigation links

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){

            target.scrollIntoView({
                behavior: 'smooth'
            });

        }

    });

});

// Display current year automatically

const footer = document.querySelector("footer p");

if (footer) {

    const year = new Date().getFullYear();

    footer.innerHTML =
        `© ${year} Longview Parkinson's Support Group`;

}
