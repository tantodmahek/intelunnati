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
        
        // Remove duplicate auth buttons from navbar (keep only profile menu)
        content = content.replace(
            /<li class="auth-buttons"><button id="loginBtnNav" class="nav-button">Login<\/button><\/li>\s*<li class="auth-buttons"><button id="signupBtnNav" class="nav-button">Sign Up<\/button><\/li>/g,
            ''
        );
        
        // Remove any standalone auth button lines
        content = content.replace(
            /<li class="auth-buttons"><button id="loginBtnNav" class="nav-button">Login<\/button><\/li>/g,
            ''
        );
        content = content.replace(
            /<li class="auth-buttons"><button id="signupBtnNav" class="nav-button">Sign Up<\/button><\/li>/g,
            ''
        );
        
        // Remove any visible login/signup sections in page content (not modals)
        content = content.replace(
            /<section[^>]*login[^>]*>[\s\S]*?<\/section>/gi,
            ''
        );
        content = content.replace(
            /<section[^>]*signup[^>]*>[\s\S]*?<\/section>/gi,
            ''
        );
        
        // Remove any auth forms that are not in modals
        content = content.replace(
            /<form[^>]*(?:login|signup)[^>]*>[\s\S]*?<\/form>/gi,
            (match) => {
                // Keep if it's inside a modal
                if (match.includes('modal') || content.indexOf(match) > content.indexOf('modal')) {
                    return match;
                }
                return '';
            }
        );
        
        fs.writeFileSync(file, content);
        console.log(`Cleaned duplicate auth elements from ${file}`);
    } catch (error) {
        console.log(`Error cleaning ${file}: ${error.message}`);
    }
});

console.log('All duplicate auth elements removed!');