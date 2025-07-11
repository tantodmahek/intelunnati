const fs = require('fs');

const files = ['features.html', 'courses.html', 'how-it-works.html', 'for-educators.html', 'about.html', 'contact.html'];

files.forEach(file => {
    try {
        let content = fs.readFileSync(file, 'utf8');
        
        // Add login/signup buttons before profile menu if not already present
        if (!content.includes('loginBtnNav')) {
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

console.log('Login and signup buttons added to all specified pages!');