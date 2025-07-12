const fs = require('fs');

try {
    let content = fs.readFileSync('how-it-works.html', 'utf8');
    
    // Remove login form elements
    content = content.replace(/<div class="input-group">[\s\S]*?<\/div>/g, '');
    content = content.replace(/<button type="submit" class="cta-button">Login<\/button>/g, '');
    content = content.replace(/<p class="modal-switch">[\s\S]*?<\/p>/g, '');
    content = content.replace(/<\/form>[\s\S]*?<\/div>[\s\S]*?<\/div>/g, '');
    
    // Remove modals
    content = content.replace(/<!-- Login Modal -->[\s\S]*?<\/div>\s*<\/div>/g, '');
    content = content.replace(/<!-- Signup Modal -->[\s\S]*?<\/div>\s*<\/div>/g, '');
    
    // Remove modal script
    content = content.replace(/<script>[\s\S]*?Perfect Modal System[\s\S]*?<\/script>/g, '');
    
    // Clean up extra whitespace and broken tags
    content = content.replace(/\s*<div>\s*<\/div>/g, '');
    content = content.replace(/\s*<form[\s\S]*?<\/form>/g, '');
    
    fs.writeFileSync('how-it-works.html', content);
    console.log('Cleaned How It Works page - removed all login/signup elements');
} catch (error) {
    console.log('Error:', error.message);
}