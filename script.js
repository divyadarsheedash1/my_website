// Create twinkling stars
const starfield = document.getElementById('starfield');
for (let i = 0; i < 300; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.width = `${Math.random() * 2}px`;
    star.style.height = `${Math.random() * 2}px`;
    star.style.setProperty('--duration', `${2 + Math.random() * 5}s`);
    star.style.animationDelay = `${Math.random() * 5}s`;
    starfield.appendChild(star);
}

// Create floating white planets — motion handled by CSS, JS only sets position & delay
const solarSystem = document.getElementById('solarSystem');

for (let i = 0; i < 24; i++) {
    const planet = document.createElement('div');
    planet.className = 'planet';

    // Random position
    const left = 100 + Math.random() * 800;
    const top = 100 + Math.random() * 400;

    // Random size
    const size = 6 + Math.random() * 18;

    // Apply
    planet.style.left = `${left}px`;
    planet.style.top = `${top}px`;
    planet.style.width = `${size}px`;
    planet.style.height = `${size}px`;

    // Randomize start time
    planet.style.animationDelay = `${Math.random() * 10}s`;
    planet.style.zIndex = i;

    solarSystem.appendChild(planet);
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
