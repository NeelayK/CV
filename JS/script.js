function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function togglePortfolio() {
    const button = document.getElementById('toggleButton');
    if (button.textContent === 'Skills') {
        button.textContent = 'Hobbies';
        scrollToSection('skills');
    } 
    else if (button.textContent === 'Hobbies') {
        button.textContent = 'About';
        scrollToSection('hobbies');
    } 
    else{
        button.textContent = 'Skills';
        scrollToSection('about');
    }
}

document.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
        window.scrollBy({ top: window.outerHeight*1.1, behavior: 'smooth' });
    } else {
        window.scrollBy({ top: -window.outerHeight*1.1, behavior: 'smooth' });
    }
});

const sections = document.querySelectorAll('section');
const header = document.querySelector('header');
const headerColors = {
    even: 'var(--primary)',
    odd: 'var(--secondary)',
};


function changeHeaderColor() {
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= window.outerHeight/10) {
            currentSection = section;
        }
    });

    if (currentSection) {
        const sectionIndex = Array.from(sections).indexOf(currentSection);
        const headerColor = headerColors[sectionIndex % 2 === 0 ? 'even' : 'odd'];
        header.style.backgroundColor = headerColor;

        const button = document.getElementById('toggleButton');
        const hoverColor = headerColors[sectionIndex % 2 === 0 ? 'odd' : 'even'];

        button.style.setProperty('--button-hover-color', hoverColor);
    }
}

window.addEventListener('scroll', changeHeaderColor);
