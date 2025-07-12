const fs = require('fs');

const files = [
    'index.html', 'features.html', 'courses.html', 'how-it-works.html', 
    'for-educators.html', 'about.html', 'contact.html'
];

const authSystemScript = `    <script>
        // Complete Authentication System
        document.addEventListener('DOMContentLoaded', function() {
            const loginBtn = document.getElementById('loginBtnNav');
            const signupBtn = document.getElementById('signupBtnNav');
            const loginModal = document.getElementById('loginModal');
            const signupModal = document.getElementById('signupModal');
            const authButtons = document.querySelectorAll('.auth-buttons');
            const profileMenu = document.querySelector('.profile-menu');
            const profileName = document.querySelector('.profile-name');
            const profileEmail = document.querySelector('.profile-email');
            
            // Check login status on page load
            checkAuthStatus();
            
            function checkAuthStatus() {
                const isLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
                const userName = localStorage.getItem('userName') || 'Student User';
                const userEmail = localStorage.getItem('userEmail') || 'student@digitallearning.edu';
                
                if (isLoggedIn) {
                    // Hide login/signup buttons
                    authButtons.forEach(btn => btn.style.display = 'none');
                    // Show profile menu
                    if (profileMenu) profileMenu.style.display = 'block';
                    // Update profile info
                    if (profileName) profileName.textContent = userName;
                    if (profileEmail) profileEmail.textContent = userEmail;
                } else {
                    // Show login/signup buttons
                    authButtons.forEach(btn => btn.style.display = 'block');
                    // Hide profile menu
                    if (profileMenu) profileMenu.style.display = 'none';
                }
            }
            
            function showModal(modal) {
                if (modal) {
                    document.querySelectorAll('.modal').forEach(m => {
                        m.style.display = 'none';
                        m.classList.remove('show');
                    });
                    modal.style.display = 'flex';
                    modal.classList.add('show');
                    document.body.style.overflow = 'hidden';
                }
            }
            
            function hideAllModals() {
                document.querySelectorAll('.modal').forEach(modal => {
                    modal.style.display = 'none';
                    modal.classList.remove('show');
                });
                document.body.style.overflow = 'auto';
            }
            
            function handleLogin(email, name) {
                localStorage.setItem('userLoggedIn', 'true');
                localStorage.setItem('userEmail', email);
                localStorage.setItem('userName', name);
                checkAuthStatus();
                hideAllModals();
            }
            
            // Login button click
            if (loginBtn) {
                loginBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    showModal(loginModal);
                });
            }
            
            // Signup button click
            if (signupBtn) {
                signupBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    showModal(signupModal);
                });
            }
            
            // Login form submission
            const loginForm = document.getElementById('loginForm');
            if (loginForm) {
                loginForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const email = document.getElementById('loginEmail').value;
                    const password = document.getElementById('loginPassword').value;
                    
                    if (email && password) {
                        const name = email.split('@')[0].replace(/[^a-zA-Z]/g, ' ').replace(/\\b\\w/g, l => l.toUpperCase());
                        handleLogin(email, name);
                        alert('Login successful! Welcome back.');
                    }
                });
            }
            
            // Signup form submission
            const signupForm = document.getElementById('signupForm');
            if (signupForm) {
                signupForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const name = document.getElementById('signupName').value;
                    const email = document.getElementById('signupEmail').value;
                    const password = document.getElementById('signupPassword').value;
                    const confirmPassword = document.getElementById('signupConfirmPassword').value;
                    
                    if (password !== confirmPassword) {
                        alert('Passwords do not match!');
                        return;
                    }
                    
                    if (name && email && password) {
                        handleLogin(email, name);
                        alert('Account created successfully! Welcome to Digital Learning.');
                    }
                });
            }
            
            // Logout function
            window.logout = function() {
                localStorage.removeItem('userLoggedIn');
                localStorage.removeItem('userName');
                localStorage.removeItem('userEmail');
                checkAuthStatus();
                alert('You have been logged out successfully.');
            };
            
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
            
            // Modal switching
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

files.forEach(file => {
    try {
        let content = fs.readFileSync(file, 'utf8');
        
        // Remove existing modal scripts
        content = content.replace(/<script>[\s\S]*?Perfect Modal System[\s\S]*?<\/script>/g, '');
        content = content.replace(/<script>[\s\S]*?Complete Authentication System[\s\S]*?<\/script>/g, '');
        
        // Add complete auth system script
        content = content.replace(
            /<\/body>/,
            `${authSystemScript}
</body>`
        );
        
        fs.writeFileSync(file, content);
        console.log(`Added complete auth system to ${file}`);
    } catch (error) {
        console.log(`Error updating ${file}: ${error.message}`);
    }
});

console.log('Complete authentication system added to all pages!');