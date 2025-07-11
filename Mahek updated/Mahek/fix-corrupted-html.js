const fs = require('fs');

const cleanHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI-Powered Interactive Learning Assistant</title>
    <link rel="stylesheet" href="style-dark.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <header>
        <nav>
            <div class="logo">
                <a href="index.html" style="color: white; text-decoration: none;">
                    <div class="logo-container">
                        <div class="logo-icon">
                            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="2" y="2" width="38" height="38" rx="8" fill="url(#uniqueGrad1)" stroke="url(#uniqueGrad2)" stroke-width="2"/>
                                <path d="M12 15L21 24L30 15" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                <rect x="18" y="8" width="6" height="6" rx="3" fill="white"/>
                                <circle cx="15" cy="30" r="2" fill="rgba(255,255,255,0.8)"/>
                                <circle cx="21" cy="32" r="1.5" fill="rgba(255,255,255,0.6)"/>
                                <circle cx="27" cy="30" r="2" fill="rgba(255,255,255,0.8)"/>
                                <defs>
                                    <linearGradient id="uniqueGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style="stop-color:#667eea"/>
                                        <stop offset="50%" style="stop-color:#764ba2"/>
                                        <stop offset="100%" style="stop-color:#f093fb"/>
                                    </linearGradient>
                                    <linearGradient id="uniqueGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style="stop-color:#a8edea"/>
                                        <stop offset="100%" style="stop-color:#fed6e3"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <span class="logo-text">Digital Learning</span>
                    </div>
                </a>
            </div>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li class="dropdown">
                    <a href="features.html">Features</a>
                    <div class="dropdown-content">
                        <a href="video-lessons.html"><i class="fas fa-play-circle"></i> Video Lessons</a>
                        <a href="timetable-planner.html"><i class="fas fa-calendar-alt"></i> Timetable Planner</a>
                        <a href="ai-practice.html"><i class="fas fa-brain"></i> AI Practice</a>
                        <a href="virtual-classroom.html"><i class="fas fa-video"></i> Virtual Classroom</a>
                        <a href="books.html"><i class="fas fa-book"></i> Book Library</a>
                        <a href="quiz.html"><i class="fas fa-question-circle"></i> Quiz</a>
                    </div>
                </li>
                <li><a href="courses.html">Our Courses</a></li>
                <li><a href="how-it-works.html">How It Works</a></li>
                <li><a href="for-educators.html">For Educators</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
                
                <!-- Auth Buttons -->
                <li class="auth-buttons" id="loginBtn">
                    <button class="nav-button">Login</button>
                </li>
                <li class="auth-buttons" id="signupBtn">
                    <button class="nav-button">Sign Up</button>
                </li>
                
                <!-- Profile Menu -->
                <li class="profile-menu" id="profileMenu" style="display: none;">
                    <button id="profileBtn" class="nav-button">
                        <i class="fas fa-user"></i>
                    </button>
                    <div class="profile-dropdown">
                        <div class="profile-info">
                            <div class="profile-avatar"><i class="fas fa-user"></i></div>
                            <h4 class="profile-name" id="profileName">User</h4>
                            <p class="profile-email" id="profileEmail">user@example.com</p>
                        </div>
                        <ul class="profile-links">
                            <li><a href="profile.html"><i class="fas fa-user-cog"></i> My Profile</a></li>
                            <li><a href="#"><i class="fas fa-chart-line"></i> Progress</a></li>
                            <li><a href="#"><i class="fas fa-bookmark"></i> Bookmarks</a></li>
                            <li><a href="#"><i class="fas fa-cog"></i> Settings</a></li>
                            <li><a href="#" id="logoutBtn"><i class="fas fa-sign-out-alt"></i> Logout</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="hero">
            <div class="hero-content">
                <div class="hero-badge">
                    <i class="fas fa-star"></i>
                    <span>AI-Powered Learning Platform</span>
                </div>
                <h1><i class="fas fa-brain"></i> Welcome to the Future of Classroom Learning</h1>
                <p style="text-align: center; max-width: 600px; margin: 0 auto;">
                    Discover our AI-Powered Interactive Learning Assistant designed to revolutionize education with personalized learning experiences.
                </p>
                <div class="hero-buttons">
                    <a href="courses.html" class="cta-button primary">Explore</a>
                </div>
            </div>
        </section>

        <section id="overview" class="animate-on-scroll" style="text-align: center;">
            <h2><i class="fas fa-compass"></i> Discover Our Platform</h2>
            <p>Our Digital Learning offers a comprehensive suite of tools to enhance the learning experience for students and educators alike. Explore our key areas:</p>
            <div class="feature-grid">
                <div class="feature-item overview-item glass animate-on-scroll">
                    <div class="feature-icon"><i class="fas fa-star"></i></div>
                    <h3>Core Features</h3>
                    <p>Personalized learning, interactive content, real-time feedback, and robust teacher support.</p>
                    <a href="features.html" class="cta-button-secondary">Learn More</a>
                </div>
                <div class="feature-item overview-item glass animate-on-scroll">
                    <div class="feature-icon"><i class="fas fa-book-open"></i></div>
                    <h3>Diverse Courses</h3>
                    <p>Engaging courses in Math, Science, Languages, Coding, and more, adapted to individual needs.</p>
                    <a href="courses.html" class="cta-button-secondary">View Courses</a>
                </div>
                <div class="feature-item overview-item glass animate-on-scroll">
                    <div class="feature-icon"><i class="fas fa-play-circle"></i></div>
                    <h3>Video Lessons</h3>
                    <p>Access a library of high-quality video content to learn at your own pace.</p>
                    <a href="video-lessons.html" class="cta-button-secondary">Watch Videos</a>
                </div>
                <div class="feature-item overview-item glass animate-on-scroll">
                    <div class="feature-icon"><i class="fas fa-robot"></i></div>
                    <h3>AI-Powered Practice</h3>
                    <p>Sharpen skills with adaptive exercises and targeted feedback from our AI.</p>
                    <a href="ai-practice.html" class="cta-button-secondary">Practice Now</a>
                </div>
                <div class="feature-item overview-item glass animate-on-scroll">
                    <div class="feature-icon"><i class="fas fa-comments"></i></div>
                    <h3>Quiz Chatbot</h3>
                    <p>Get instant academic support and explanations from our friendly AI chatbot.</p>
                    <a href="quiz.html" class="cta-button-secondary">Meet Quiz</a>
                </div>
                <div class="feature-item overview-item glass animate-on-scroll">
                    <div class="feature-icon"><i class="fas fa-calendar-alt"></i></div>
                    <h3>Study Planner</h3>
                    <p>Organize your self-study schedule effectively with our personal timetable tool.</p>
                    <a href="timetable-planner.html" class="cta-button-secondary">Plan Your Time</a>
                </div>
                <div class="feature-item overview-item glass animate-on-scroll">
                    <div class="feature-icon"><i class="fas fa-video"></i></div>
                    <h3>Virtual Classroom</h3>
                    <p>Join live sessions with AI-powered attention monitoring to stay focused and engaged.</p>
                    <a href="virtual-classroom.html" class="cta-button-secondary">Join Classroom</a>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h3><i class="fas fa-brain"></i> Digital Learning</h3>
                <p>An innovative AI-powered learning platform designed to enhance educational experiences through intelligent technology.</p>
            </div>
        </div>
    </footer>

    <script>
        // Simple Authentication System
        document.addEventListener('DOMContentLoaded', function() {
            const loginBtn = document.getElementById('loginBtn');
            const signupBtn = document.getElementById('signupBtn');
            const profileMenu = document.getElementById('profileMenu');
            const profileName = document.getElementById('profileName');
            const profileEmail = document.getElementById('profileEmail');
            const logoutBtn = document.getElementById('logoutBtn');
            
            function updateNavbar() {
                const isLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
                const userName = localStorage.getItem('userName') || 'User';
                const userEmail = localStorage.getItem('userEmail') || 'user@example.com';
                
                if (isLoggedIn) {
                    loginBtn.style.display = 'none';
                    signupBtn.style.display = 'none';
                    profileMenu.style.display = 'block';
                    profileName.textContent = userName;
                    profileEmail.textContent = userEmail;
                } else {
                    loginBtn.style.display = 'block';
                    signupBtn.style.display = 'block';
                    profileMenu.style.display = 'none';
                }
            }
            
            loginBtn.addEventListener('click', function() {
                const email = prompt('Enter your email:');
                if (email) {
                    const name = email.split('@')[0];
                    localStorage.setItem('userLoggedIn', 'true');
                    localStorage.setItem('userName', name);
                    localStorage.setItem('userEmail', email);
                    updateNavbar();
                    alert('Login successful!');
                }
            });
            
            signupBtn.addEventListener('click', function() {
                const name = prompt('Enter your name:');
                const email = prompt('Enter your email:');
                if (name && email) {
                    localStorage.setItem('userLoggedIn', 'true');
                    localStorage.setItem('userName', name);
                    localStorage.setItem('userEmail', email);
                    updateNavbar();
                    alert('Account created!');
                }
            });
            
            logoutBtn.addEventListener('click', function() {
                localStorage.clear();
                updateNavbar();
                alert('Logged out!');
            });
            
            updateNavbar();
        });
    </script>
</body>
</html>`;

try {
    fs.writeFileSync('index.html', cleanHTML);
    console.log('✅ HTML file completely fixed and cleaned!');
} catch (error) {
    console.log('❌ Error:', error.message);
}