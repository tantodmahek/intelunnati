const fs = require('fs');

const files = [
    'courses.html', 'features.html', 'quiz.html', 'video-lessons.html', 
    'books.html', 'contact.html', 'for-educators.html', 'how-it-works.html', 
    'timetable-planner.html', 'about.html', 'ai-practice.html', 'virtual-classroom.html',
    'course-learning.html'
];

files.forEach(file => {
    try {
        let content = fs.readFileSync(file, 'utf8');
        
        // Add back navbar auth buttons before profile menu
        const authButtons = `                <li class="auth-buttons"><button id="loginBtnNav" class="nav-button">Login</button></li>
                <li class="auth-buttons"><button id="signupBtnNav" class="nav-button">Sign Up</button></li>`;
        
        // Insert auth buttons before profile menu if not already present
        if (!content.includes('loginBtnNav') && content.includes('profile-menu')) {
            content = content.replace(
                /(\s*)<li class="profile-menu">/,
                `$1${authButtons}
$1<li class="profile-menu">`
            );
        }
        
        fs.writeFileSync(file, content);
        console.log(`Restored navbar auth buttons in ${file}`);
    } catch (error) {
        console.log(`Error restoring ${file}: ${error.message}`);
    }
});

console.log('Navbar auth buttons restored to all pages!');