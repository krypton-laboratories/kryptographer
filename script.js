// Header
document.querySelector('header').innerHTML = `
    <a href="index.html" id="nav-logo"><img src="assets/img/logo.png" alt="Home" title="Home"></a>
    <nav>
        <a href="about.html"><p>About</p></a>
        <a href="model.html"><p>Model</p></a>
    </nav>
`;

// Fade-in animations
const observerOptions = {
    root: null, // Watches entire viewport
    threshold: 0.1 // Trigger: element 10% visible
};
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserver(entry.target); // Stops watching after element appears
        }
    });
}, observerOptions);
const fadeItems = document.querySelectorAll('.fade-in');
if (fadeItems.length > 0) {
    fadeItems.forEach(item => {
        observer.observe(item);
    });
}
