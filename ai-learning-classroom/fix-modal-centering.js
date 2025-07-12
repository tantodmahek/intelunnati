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
        
        // Add script to fix modal display
        const modalScript = `
    <script>
        // Fix modal centering
        document.addEventListener('DOMContentLoaded', function() {
            const modals = document.querySelectorAll('.modal');
            modals.forEach(modal => {
                const originalDisplay = modal.style.display;
                
                // Override modal display methods
                const showModal = () => {
                    modal.classList.add('show');
                    modal.style.display = 'flex';
                    document.body.style.overflow = 'hidden';
                };
                
                const hideModal = () => {
                    modal.classList.remove('show');
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                };
                
                // Apply to login/signup buttons
                const loginBtn = document.getElementById('loginBtnNav');
                const signupBtn = document.getElementById('signupBtnNav');
                const loginModal = document.getElementById('loginModal');
                const signupModal = document.getElementById('signupModal');
                
                if (loginBtn && loginModal) {
                    loginBtn.addEventListener('click', () => {
                        hideModal.call(signupModal);
                        showModal.call(loginModal);
                    });
                }
                
                if (signupBtn && signupModal) {
                    signupBtn.addEventListener('click', () => {
                        hideModal.call(loginModal);
                        showModal.call(signupModal);
                    });
                }
                
                // Close buttons
                const closeButtons = modal.querySelectorAll('.close-button');
                closeButtons.forEach(btn => {
                    btn.addEventListener('click', () => hideModal.call(modal));
                });
                
                // Click outside to close
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        hideModal.call(modal);
                    }
                });
            });
        });
    </script>`;
        
        // Add before closing body tag
        content = content.replace(
            /<\/body>/,
            modalScript + '\n</body>'
        );
        
        fs.writeFileSync(file, content);
        console.log(`Fixed modal centering in ${file}`);
    } catch (error) {
        console.log(`Error updating ${file}: ${error.message}`);
    }
});

console.log('Modal centering fixed in all files!');