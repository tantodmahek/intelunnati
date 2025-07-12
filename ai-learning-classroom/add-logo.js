const fs = require('fs');

const files = [
    'index.html', 'courses.html', 'features.html', 'quiz.html', 'video-lessons.html', 
    'books.html', 'contact.html', 'for-educators.html', 'how-it-works.html', 
    'timetable-planner.html', 'about.html', 'ai-practice.html', 'virtual-classroom.html',
    'course-learning.html'
];

const newLogo = `<div class="logo-container">
                    <div class="logo-icon">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="18" fill="url(#gradient1)" stroke="url(#gradient2)" stroke-width="2"/>
                            <path d="M12 16L20 24L28 16" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <circle cx="20" cy="12" r="3" fill="white"/>
                            <defs>
                                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style="stop-color:#6c5ce7"/>
                                    <stop offset="100%" style="stop-color:#00d4ff"/>
                                </linearGradient>
                                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style="stop-color:#a29bfe"/>
                                    <stop offset="100%" style="stop-color:#74b9ff"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <span class="logo-text">Digital Learning</span>
                </div>`;

files.forEach(file => {
    try {
        let content = fs.readFileSync(file, 'utf8');
        
        // Replace the logo div content
        content = content.replace(
            /<div class="logo"><a href="index\.html"[^>]*>Digital Learning<\/a><\/div>/g,
            `<div class="logo"><a href="index.html" style="color: white; text-decoration: none;">${newLogo}</a></div>`
        );
        
        fs.writeFileSync(file, content);
        console.log(`Added logo to ${file}`);
    } catch (error) {
        console.log(`Error updating ${file}: ${error.message}`);
    }
});

console.log('Logo added to all files!');