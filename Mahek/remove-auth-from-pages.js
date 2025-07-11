const fs = require('fs');

const files = ['contact.html', 'for-educators.html'];

files.forEach(file => {
    try {
        let content = fs.readFileSync(file, 'utf8');
        
        // Remove login/signup navbar buttons
        content = content.replace(/<li class="auth-buttons"><button id="loginBtnNav" class="nav-button">Login<\/button><\/li>/g, '');
        content = content.replace(/<li class="auth-buttons"><button id="signupBtnNav" class="nav-button">Sign Up<\/button><\/li>/g, '');
        
        // Remove login/signup modals
        content = content.replace(/<!-- Login Modal -->[\s\S]*?<\/div>\s*<\/div>/g, '');
        content = content.replace(/<!-- Signup Modal -->[\s\S]*?<\/div>\s*<\/div>/g, '');
        
        // Remove modal scripts
        content = content.replace(/<script>[\s\S]*?Perfect Modal System[\s\S]*?<\/script>/g, '');
        
        fs.writeFileSync(file, content);
        console.log(`Removed login/signup from ${file}`);
    } catch (error) {
        console.log(`Error cleaning ${file}: ${error.message}`);
    }
});

console.log('Login and signup removed from Contact and For Educators pages!');