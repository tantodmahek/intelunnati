const fs = require('fs');

try {
    let content = fs.readFileSync('index.html', 'utf8');
    
    // Remove all existing modal scripts
    content = content.replace(/<script>[\s\S]*?Fix modal centering[\s\S]*?<\/script>/g, '');
    content = content.replace(/<script>[\s\S]*?Perfect Modal System[\s\S]*?<\/script>/g, '');
    
    // Add the perfect modal script before closing body
    const perfectScript = `    <script>
        // Perfect Modal System
        document.addEventListener('DOMContentLoaded', function() {
            const loginBtn = document.getElementById('loginBtnNav');
            const signupBtn = document.getElementById('signupBtnNav');
            const loginModal = document.getElementById('loginModal');
            const signupModal = document.getElementById('signupModal');
            
            function showModal(modal) {
                if (modal) {
                    // Hide all modals first
                    document.querySelectorAll('.modal').forEach(m => {
                        m.style.display = 'none';
                        m.classList.remove('show');
                    });
                    
                    // Show the requested modal
                    modal.style.display = 'flex';
                    modal.classList.add('show');
                    document.body.style.overflow = 'hidden';
                }
            }
            
            function hideModal(modal) {
                if (modal) {
                    modal.style.display = 'none';
                    modal.classList.remove('show');
                    document.body.style.overflow = 'auto';
                }
            }
            
            function hideAllModals() {
                document.querySelectorAll('.modal').forEach(modal => {
                    hideModal(modal);
                });
            }
            
            // Login button - shows LOGIN modal
            if (loginBtn) {
                loginBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    showModal(loginModal);
                });
            }
            
            // Signup button - shows SIGNUP modal
            if (signupBtn) {
                signupBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    showModal(signupModal);
                });
            }
            
            // Close buttons
            document.querySelectorAll('.close-button').forEach(btn => {
                btn.addEventListener('click', hideAllModals);
            });
            
            // Click outside to close
            document.querySelectorAll('.modal').forEach(modal => {
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) hideAllModals();
                });
            });
            
            // Modal switching links
            const switchToSignup = document.getElementById('switchToSignup');
            const switchToLogin = document.getElementById('switchToLogin');
            
            if (switchToSignup) {
                switchToSignup.addEventListener('click', (e) => {
                    e.preventDefault();
                    showModal(signupModal);
                });
            }
            
            if (switchToLogin) {
                switchToLogin.addEventListener('click', (e) => {
                    e.preventDefault();
                    showModal(loginModal);
                });
            }
            
            // ESC key to close
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') hideAllModals();
            });
        });
    </script>`;
    
    content = content.replace(/<\/body>/, perfectScript + '\n</body>');
    
    fs.writeFileSync('index.html', content);
    console.log('Homepage modal system fixed!');
} catch (error) {
    console.log('Error:', error.message);
}