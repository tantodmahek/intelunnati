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
        
        // Update logo text from EduTech to Digital Learning
        content = content.replace(
            /<i class="fas fa-rocket"><\/i> EduTech/g,
            'Digital Learning'
        );
        
        // Also update any other EduTech references in logos
        content = content.replace(
            /<i class="fas fa-brain"><\/i> <i class="fas fa-rocket"><\/i> EduTech/g,
            'Digital Learning'
        );
        
        fs.writeFileSync(file, content);
        console.log(`Updated logo in ${file}`);
    } catch (error) {
        console.log(`Error updating ${file}: ${error.message}`);
    }
});

console.log('Logo updated in all files!');