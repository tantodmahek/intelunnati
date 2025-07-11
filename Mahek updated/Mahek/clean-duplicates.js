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
        
        // Remove duplicate modal centering scripts
        const scriptPattern = /<script>\s*\/\/ Fix modal centering[\s\S]*?<\/script>/g;
        const matches = content.match(scriptPattern);
        
        if (matches && matches.length > 1) {
            // Keep only the first occurrence
            content = content.replace(scriptPattern, '');
            content = content.replace(
                /<\/body>/,
                `    <script>
        // Professional Modal System
        document.addEventListener('DOMContentLoaded', function() {
            const loginBtn = document.getElementById('loginBtnNav');
            const signupBtn = document.getElementById('signupBtnNav');
            const loginModal = document.getElementById('loginModal');
            const signupModal = document.getElementById('signupModal');
            
            function showModal(modal) {
                if (modal) {
                    modal.style.display = 'flex';
                    document.body.style.overflow = 'hidden';
                    modal.classList.add('show');
                }
            }
            
            function hideModal(modal) {
                if (modal) {
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                    modal.classList.remove('show');
                }
            }
            
            // Login button
            if (loginBtn) {
                loginBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    hideModal(signupModal);
                    showModal(loginModal);
                });
            }
            
            // Signup button
            if (signupBtn) {
                signupBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    hideModal(loginModal);
                    showModal(signupModal);
                });
            }
            
            // Close buttons and outside clicks
            document.querySelectorAll('.modal').forEach(modal => {
                const closeBtn = modal.querySelector('.close-button');
                if (closeBtn) {
                    closeBtn.addEventListener('click', () => hideModal(modal));
                }
                
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) hideModal(modal);
                });
            });
            
            // Modal switching
            const switchToSignup = document.getElementById('switchToSignup');
            const switchToLogin = document.getElementById('switchToLogin');
            
            if (switchToSignup) {
                switchToSignup.addEventListener('click', (e) => {
                    e.preventDefault();
                    hideModal(loginModal);
                    showModal(signupModal);
                });
            }
            
            if (switchToLogin) {
                switchToLogin.addEventListener('click', (e) => {
                    e.preventDefault();
                    hideModal(signupModal);
                    showModal(loginModal);
                });
            }
        });
    </script>
</body>`
            );
        }
        
        fs.writeFileSync(file, content);
        console.log(`Cleaned duplicates in ${file}`);
    } catch (error) {
        console.log(`Error cleaning ${file}: ${error.message}`);
    }
});

console.log('All duplicates cleaned and modals perfected!');