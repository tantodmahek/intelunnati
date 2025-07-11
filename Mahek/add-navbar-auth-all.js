const fs = require('fs');

const files = [
    'courses.html', 'features.html', 'quiz.html', 'video-lessons.html', 
    'books.html', 'contact.html', 'for-educators.html', 'how-it-works.html', 
    'timetable-planner.html', 'about.html', 'ai-practice.html', 'virtual-classroom.html',
    'course-learning.html', 'profile.html'
];

files.forEach(file => {
    try {
        let content = fs.readFileSync(file, 'utf8');
        
        // Check if login/signup buttons already exist
        if (!content.includes('loginBtnNav')) {
            // Add login and signup buttons before profile menu
            content = content.replace(
                /(\s*)<li class="profile-menu">/,
                `$1<li class="auth-buttons"><button id="loginBtnNav" class="nav-button">Login</button></li>
$1<li class="auth-buttons"><button id="signupBtnNav" class="nav-button">Sign Up</button></li>
$1<li class="profile-menu">`
            );
            
            console.log(`Added login/signup buttons to ${file}`);
        } else {
            console.log(`${file} already has login/signup buttons`);
        }
        
        fs.writeFileSync(file, content);
    } catch (error) {
        console.log(`Error updating ${file}: ${error.message}`);
    }
});

console.log('Login and signup buttons added to all navigation bars!');