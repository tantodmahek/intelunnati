// Animated Particles for All Pages
document.addEventListener('DOMContentLoaded', function() {
    // Create particle container
    const particleContainer = document.createElement('div');
    particleContainer.id = 'particle-container';
    
    // Create 5 animated particles
    for (let i = 1; i <= 5; i++) {
        const particle = document.createElement('div');
        particle.className = `particle particle-${i}`;
        particleContainer.appendChild(particle);
    }
    
    // Add particles to body
    document.body.insertBefore(particleContainer, document.body.firstChild);
});