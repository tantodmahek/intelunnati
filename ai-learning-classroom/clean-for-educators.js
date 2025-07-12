const fs = require('fs');

try {
    let content = fs.readFileSync('for-educators.html', 'utf8');
    
    // Remove login/signup navbar buttons
    content = content.replace(/<li class="auth-buttons"><button id="loginBtnNav" class="nav-button">Login<\/button><\/li>/g, '');
    content = content.replace(/<li class="auth-buttons"><button id="signupBtnNav" class="nav-button">Sign Up<\/button><\/li>/g, '');
    
    // Remove password input fields
    content = content.replace(/<input type="password"[^>]*>/g, '');
    
    // Remove login/signup forms
    content = content.replace(/<form[^>]*(?:login|signup)[^>]*>[\s\S]*?<\/form>/gi, '');
    
    // Remove login/signup modals
    content = content.replace(/<!-- Login Modal -->[\s\S]*?<\/div>\s*<\/div>/g, '');
    content = content.replace(/<!-- Signup Modal -->[\s\S]*?<\/div>\s*<\/div>/g, '');
    
    // Remove modal scripts
    content = content.replace(/<script>[\s\S]*?Perfect Modal System[\s\S]*?<\/script>/g, '');
    
    // Clean up broken divs and empty elements
    content = content.replace(/\s*<div>\s*<\/div>/g, '');
    content = content.replace(/\s*<div>\s*<input[^>]*>\s*<\/div>/g, '');
    
    fs.writeFileSync('for-educators.html', content);
    console.log('Cleaned For Educators page - removed all login/signup/password elements');
} catch (error) {
    console.log('Error:', error.message);
}