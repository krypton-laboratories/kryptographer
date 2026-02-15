// Header
document.querySelector('header').innerHTML = `
    <a href="index.html" id="nav-logo"><img src="assets/img/logo.png" alt="Home" title="Home"></a>
    <nav>
        <a href="about.html"><p>About</p></a>
        <a href="model.html"><p>Model</p></a>
    </nav>
`;

// Fade-in animations
if (document.querySelector('body').classList.contains('about')) {
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

    document.querySelectorAll('.fade-in').forEach(card => {
        observer.observe(card);
    });
}
