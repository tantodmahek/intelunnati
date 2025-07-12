const fs = require('fs');

const files = [
    'index.html', 'courses.html', 'features.html', 'quiz.html', 'video-lessons.html', 
    'books.html', 'contact.html', 'for-educators.html', 'how-it-works.html', 
    'timetable-planner.html', 'about.html', 'ai-practice.html', 'virtual-classroom.html',
    'course-learning.html'
];

files.forEach(file => {
    try {
        let content = fs.readFileSync(file, 'utf8');
        
        // Ensure navbar has login/signup buttons before profile menu
        if (!content.includes('loginBtnNav')) {
            content = content.replace(
                /(\s*)<li class="profile-menu">/,
                `$1<li class="auth-buttons"><button id="loginBtnNav" class="nav-button">Login</button></li>
$1<li class="auth-buttons"><button id="signupBtnNav" class="nav-button">Sign Up</button></li>
$1<li class="profile-menu">`
            );
        }
        
        // Remove any login/signup content from main page content (not navbar, not modals)
        // Remove standalone login/signup sections
        content = content.replace(
            /<section[^>]*(?:id="login"|class="[^"]*login[^"]*")[^>]*>[\s\S]*?<\/section>/gi,
            ''
        );
        content = content.replace(
            /<section[^>]*(?:id="signup"|class="[^"]*signup[^"]*")[^>]*>[\s\S]*?<\/section>/gi,
            ''
        );
        
        // Remove login/signup forms that are not in modals
        const formMatches = content.match(/<form[^>]*(?:id="(?:login|signup)Form"|class="[^"]*(?:login|signup)[^"]*")[^>]*>[\s\S]*?<\/form>/gi);
        if (formMatches) {
            formMatches.forEach(match => {
                // Only remove if it's not inside a modal
                const beforeMatch = content.substring(0, content.indexOf(match));
                const isInModal = beforeMatch.lastIndexOf('<div class="modal') > beforeMatch.lastIndexOf('</div>');
                if (!isInModal) {
                    content = content.replace(match, '');
                }
            });
        }
        
        // Remove any auth-related divs that are not modals
        content = content.replace(
            /<div[^>]*(?:class="[^"]*(?:login|signup|auth)[^"]*")[^>]*>(?![\s\S]*modal)[\s\S]*?<\/div>/gi,
            (match) => {
                // Keep if it contains modal
                if (match.includes('modal') || match.includes('Modal')) {
                    return match;
                }
                return '';
            }
        );
        
        fs.writeFileSync(file, content);
        console.log(`Cleaned auth elements from page content in ${file}`);
    } catch (error) {
        console.log(`Error cleaning ${file}: ${error.message}`);
    }
});

console.log('All pages cleaned - navbar auth preserved, page content cleaned!');