const fs = require('fs');

const files = [
    'index.html', 'features.html', 'courses.html', 'how-it-works.html', 
    'for-educators.html', 'about.html', 'contact.html'
];

const perfectLoginModal = `        <!-- Login Modal -->
        <div id="loginModal" class="modal">
            <div class="modal-content glass">
                <span class="close-button" id="closeLoginModal">&times;</span>
                <div class="modal-header">
                    <div class="modal-icon"><i class="fas fa-sign-in-alt"></i></div>
                    <h2>Welcome Back</h2>
                    <p class="modal-subtitle">Sign in to your account</p>
                </div>
                <form id="loginForm">
                    <div class="input-group">
                        <div class="input-icon"><i class="fas fa-envelope"></i></div>
                        <input type="email" id="loginEmail" name="email" placeholder="Enter your email" required>
                    </div>
                    <div class="input-group">
                        <div class="input-icon"><i class="fas fa-lock"></i></div>
                        <input type="password" id="loginPassword" name="password" placeholder="Enter your password" required>
                    </div>
                    <div class="form-options">
                        <label class="checkbox-container">
                            <input type="checkbox" id="rememberMe">
                            <span class="checkmark"></span>
                            Remember me
                        </label>
                        <a href="#" class="forgot-password">Forgot Password?</a>
                    </div>
                    <button type="submit" class="cta-button modal-btn">
                        <i class="fas fa-sign-in-alt"></i> Sign In
                    </button>
                    <div class="modal-divider"><span>or</span></div>
                    <button type="button" class="social-btn google-btn">
                        <i class="fab fa-google"></i> Continue with Google
                    </button>
                    <p class="modal-switch">Don't have an account? <a href="#" id="switchToSignup">Create Account</a></p>
                </form>
            </div>
        </div>`;

const perfectSignupModal = `        <!-- Signup Modal -->
        <div id="signupModal" class="modal">
            <div class="modal-content glass">
                <span class="close-button" id="closeSignupModal">&times;</span>
                <div class="modal-header">
                    <div class="modal-icon"><i class="fas fa-user-plus"></i></div>
                    <h2>Join Us Today</h2>
                    <p class="modal-subtitle">Create your learning account</p>
                </div>
                <form id="signupForm">
                    <div class="input-group">
                        <div class="input-icon"><i class="fas fa-user"></i></div>
                        <input type="text" id="signupName" name="name" placeholder="Enter your full name" required>
                    </div>
                    <div class="input-group">
                        <div class="input-icon"><i class="fas fa-envelope"></i></div>
                        <input type="email" id="signupEmail" name="email" placeholder="Enter your email" required>
                    </div>
                    <div class="input-group">
                        <div class="input-icon"><i class="fas fa-lock"></i></div>
                        <input type="password" id="signupPassword" name="password" placeholder="Create a password" required>
                    </div>
                    <div class="input-group">
                        <div class="input-icon"><i class="fas fa-lock"></i></div>
                        <input type="password" id="signupConfirmPassword" name="confirmPassword" placeholder="Confirm your password" required>
                    </div>
                    <div class="form-options">
                        <label class="checkbox-container">
                            <input type="checkbox" id="agreeTerms" required>
                            <span class="checkmark"></span>
                            I agree to the <a href="#">Terms & Conditions</a>
                        </label>
                    </div>
                    <button type="submit" class="cta-button modal-btn">
                        <i class="fas fa-user-plus"></i> Create Account
                    </button>
                    <div class="modal-divider"><span>or</span></div>
                    <button type="button" class="social-btn google-btn">
                        <i class="fab fa-google"></i> Sign up with Google
                    </button>
                    <p class="modal-switch">Already have an account? <a href="#" id="switchToLogin">Sign In</a></p>
                </form>
            </div>
        </div>`;

const perfectModalScript = `    <script>
        // Perfect Modal System
        document.addEventListener('DOMContentLoaded', function() {
            const loginBtn = document.getElementById('loginBtnNav');
            const signupBtn = document.getElementById('signupBtnNav');
            const loginModal = document.getElementById('loginModal');
            const signupModal = document.getElementById('signupModal');
            
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
            
            if (loginBtn) {
                loginBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    showModal(loginModal);
                });
            }
            
            if (signupBtn) {
                signupBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    showModal(signupModal);
                });
            }
            
            document.querySelectorAll('.close-button').forEach(btn => {
                btn.addEventListener('click', hideAllModals);
            });
            
            document.querySelectorAll('.modal').forEach(modal => {
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) hideAllModals();
                });
            });
            
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
            
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') hideAllModals();
            });
        });
    </script>`;

files.forEach(file => {
    try {
        let content = fs.readFileSync(file, 'utf8');
        
        // Remove existing broken modals
        content = content.replace(/<!-- Login Modal -->[\s\S]*?<\/div>\s*<\/div>/g, '');
        content = content.replace(/<!-- Signup Modal -->[\s\S]*?<\/div>\s*<\/div>/g, '');
        content = content.replace(/<script>[\s\S]*?Perfect Modal System[\s\S]*?<\/script>/g, '');
        
        // Add perfect modals after main content
        content = content.replace(
            /<\/main>/,
            `</main>

${perfectLoginModal}

${perfectSignupModal}`
        );
        
        // Add perfect script before closing body
        content = content.replace(
            /<\/body>/,
            `${perfectModalScript}
</body>`
        );
        
        fs.writeFileSync(file, content);
        console.log(`Fixed perfect modals in ${file}`);
    } catch (error) {
        console.log(`Error fixing ${file}: ${error.message}`);
    }
});

console.log('Perfect modal system restored to all pages!');