let currentUser = null;

function checkAuthStatus() {
    const token = localStorage.getItem('access_token');
    const userData = localStorage.getItem('user_data');
    
    if (token && userData) {
        currentUser = JSON.parse(userData);
        updateUIForLoggedInUser();
    }
}

function updateUIForLoggedInUser() {
    const authButtons = document.querySelectorAll('.auth-buttons');
    authButtons.forEach(section => {
        section.innerHTML = `
            <button onclick="window.location.href='profile.html'" class="nav-button">${currentUser.name}</button>
            <button onclick="logout()" class="nav-button">Logout</button>
        `;
    });
}

function logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_data');
    location.reload();
}

function setupModals() {
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    
    document.getElementById('loginBtnNav')?.addEventListener('click', () => {
        loginModal.style.display = 'block';
    });
    
    document.getElementById('signupBtnNav')?.addEventListener('click', () => {
        signupModal.style.display = 'block';
    });
    
    document.querySelectorAll('.close-button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.closest('.modal').style.display = 'none';
        });
    });
    
    document.getElementById('switchToSignup')?.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.style.display = 'none';
        signupModal.style.display = 'block';
    });
    
    document.getElementById('switchToLogin')?.addEventListener('click', (e) => {
        e.preventDefault();
        signupModal.style.display = 'none';
        loginModal.style.display = 'block';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
}

function setupAuthForms() {
    document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        
        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: formData.get('email'),
                    password: formData.get('password')
                })
            });
            
            const data = await response.json();
            
            if (response.ok) {
                localStorage.setItem('access_token', data.access_token);
                localStorage.setItem('user_data', JSON.stringify(data.user));
                currentUser = data.user;
                updateUIForLoggedInUser();
                document.getElementById('loginModal').style.display = 'none';
                alert('Login successful!');
            } else {
                alert(data.error || 'Login failed');
            }
        } catch (error) {
            alert('Error connecting to server');
        }
    });
    
    document.getElementById('signupForm')?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        
        if (formData.get('password') !== formData.get('confirmPassword')) {
            alert('Passwords do not match');
            return;
        }
        
        try {
            const response = await fetch('http://localhost:5000/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.get('name'),
                    email: formData.get('email'),
                    password: formData.get('password')
                })
            });
            
            const data = await response.json();
            
            if (response.ok) {
                localStorage.setItem('access_token', data.access_token);
                localStorage.setItem('user_data', JSON.stringify(data.user));
                currentUser = data.user;
                updateUIForLoggedInUser();
                document.getElementById('signupModal').style.display = 'none';
                alert('Registration successful!');
            } else {
                alert(data.error || 'Registration failed');
            }
        } catch (error) {
            alert('Error connecting to server');
        }
    });
}

function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Perfect Page Loading
window.addEventListener('load', () => {
    const loader = document.getElementById('pageLoader');
    setTimeout(() => {
        loader.classList.add('hidden');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 800);
});

// Enhanced Scroll Animations
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animated');
                }, index * 100);
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Perfect Smooth Scrolling
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    checkAuthStatus();
    setupModals();
    setupAuthForms();
    setupScrollAnimations();
    setupSmoothScrolling();
    
    // Google Sign-in buttons
    document.getElementById('googleLoginBtn')?.addEventListener('click', () => {
        alert('Google Sign-in integration would be implemented here with Google OAuth API');
    });
    
    document.getElementById('googleSignupBtn')?.addEventListener('click', () => {
        alert('Google Sign-up integration would be implemented here with Google OAuth API');
    });
    
    // Add perfect hover effects
    document.querySelectorAll('.feature-item, .course-item, .video-item, .book-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});