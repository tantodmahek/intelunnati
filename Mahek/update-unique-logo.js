const fs = require('fs');

const files = [
    'index.html', 'courses.html', 'features.html', 'quiz.html', 'video-lessons.html', 
    'books.html', 'contact.html', 'for-educators.html', 'how-it-works.html', 
    'timetable-planner.html', 'about.html', 'ai-practice.html', 'virtual-classroom.html',
    'course-learning.html'
];

const uniqueLogo = `<div class="logo-container">
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
                </div>`;

files.forEach(file => {
    try {
        let content = fs.readFileSync(file, 'utf8');
        
        // Replace the existing logo with unique design
        content = content.replace(
            /<div class="logo-container">[\s\S]*?<span class="logo-text">Digital Learning<\/span>\s*<\/div>/g,
            uniqueLogo
        );
        
        fs.writeFileSync(file, content);
        console.log(`Updated unique logo in ${file}`);
    } catch (error) {
        console.log(`Error updating ${file}: ${error.message}`);
    }
});

console.log('Unique logo updated in all files!');