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
        
        // Add profile dropdown script before closing body tag
        content = content.replace(
            /<script src="script-enhanced\.js"><\/script>/g,
            '<script src="script-enhanced.js"></script>\n    <script src="profile-dropdown.js"></script>'
        );
        
        fs.writeFileSync(file, content);
        console.log(`Added profile script to ${file}`);
    } catch (error) {
        console.log(`Error updating ${file}: ${error.message}`);
    }
});

console.log('Profile dropdown script added to all files!');