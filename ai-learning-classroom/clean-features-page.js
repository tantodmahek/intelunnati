const fs = require('fs');

const cleanFeaturesHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Key Features - Digital Learning</title>
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
                    <a href="features.html" class="active">Features</a>
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
            </ul>
        </nav>
    </header>

    <main>
        <section id="features" class="animate-on-scroll">
            <h2><i class="fas fa-gem"></i> Why Choose Our Platform?</h2>
            <div class="feature-grid">
                <div class="feature-item glass animate-on-scroll">
                    <div class="feature-icon"><i class="fas fa-user-cog"></i></div>
                    <h3>Personalized Learning</h3>
                    <p>Tailored learning paths for each student based on their unique learning style and pace.</p>
                </div>
                <div class="feature-item glass animate-on-scroll">
                    <div class="feature-icon"><i class="fas fa-gamepad"></i></div>
                    <h3>Interactive Content</h3>
                    <p>Engaging and interactive lessons that make learning fun and memorable.</p>
                </div>
                <div class="feature-item glass animate-on-scroll">
                    <div class="feature-icon"><i class="fas fa-chart-line"></i></div>
                    <h3>Real-time Feedback</h3>
                    <p>Instant feedback and comprehensive progress tracking to monitor learning outcomes.</p>
                </div>
                <div class="feature-item glass animate-on-scroll">
                    <div class="feature-icon"><i class="fas fa-chalkboard-teacher"></i></div>
                    <h3>Teacher Support</h3>
                    <p>Comprehensive tools to assist teachers in managing their classrooms effectively.</p>
                </div>
                <div class="feature-item glass animate-on-scroll">
                    <div class="feature-icon"><i class="fas fa-video"></i></div>
                    <h3>Virtual Classroom</h3>
                    <p>Live video sessions with AI-powered attention monitoring and real-time interaction.</p>
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

    <script src="script-enhanced.js"></script>
    <script src="profile-dropdown.js"></script>
</body>
</html>`;

try {
    fs.writeFileSync('features.html', cleanFeaturesHTML);
    console.log('✅ Features page cleaned - login/signup removed!');
} catch (error) {
    console.log('❌ Error:', error.message);
}