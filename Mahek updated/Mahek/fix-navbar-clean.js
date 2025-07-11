const fs = require('fs');

try {
    let content = fs.readFileSync('index.html', 'utf8');
    
    // Remove all content after Contact menu item and replace with clean auth system
    const beforeContact = content.substring(0, content.indexOf('<li><a href="contact.html">Contact</a></li>') + '<li><a href="contact.html">Contact</a></li>'.length);
    const afterNav = content.substring(content.indexOf('</ul>\n        </nav>'));
    
    const cleanAuthSection = `
                <!-- Auth Buttons (shown when not logged in) -->
                <li class="auth-buttons" id="loginBtn"><button class="nav-button">Login</button></li>
                <li class="auth-buttons" id="signupBtn"><button class="nav-button">Sign Up</button></li>
                
                <!-- Profile Menu (shown when logged in) -->
                <li class="profile-menu" id="profileMenu" style="display: none;">
                    <button id="profileBtn" class="nav-button"><i class="fas fa-user"></i></button>
                    <div class="profile-dropdown">
                        <div class="profile-info">
                            <div class="profile-avatar"><i class="fas fa-user"></i></div>
                            <h4 class="profile-name" id="profileName">User</h4>
                            <p class="profile-email" id="profileEmail">user@example.com</p>
                        </div>
                        <ul class="profile-links">
                            <li><a href="profile.html"><i class="fas fa-user-cog"></i> My Profile</a></li>
                            <li><a href="#"><i class="fas fa-chart-line"></i> Progress</a></li>
                            <li><a href="#"><i class="fas fa-bookmark"></i> Bookmarks</a></li>
                            <li><a href="#"><i class="fas fa-cog"></i> Settings</a></li>
                            <li><a href="#" id="logoutBtn"><i class="fas fa-sign-out-alt"></i> Logout</a></li>
                        </ul>
                    </div>
                </li>
            `;
    
    const cleanContent = beforeContact + cleanAuthSection + afterNav;
    
    // Add responsive navbar JavaScript
    const navbarScript = `    <script>
        // Clean Responsive Navbar System
        document.addEventListener('DOMContentLoaded', function() {
            const loginBtn = document.getElementById('loginBtn');
            const signupBtn = document.getElementById('signupBtn');
            const profileMenu = document.getElementById('profileMenu');
            const profileName = document.getElementById('profileName');
            const profileEmail = document.getElementById('profileEmail');
            const logoutBtn = document.getElementById('logoutBtn');
            
            // Check login status
            function updateNavbar() {
                const isLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
                const userName = localStorage.getItem('userName') || 'User';
                const userEmail = localStorage.getItem('userEmail') || 'user@example.com';
                
                if (isLoggedIn) {
                    loginBtn.style.display = 'none';
                    signupBtn.style.display = 'none';
                    profileMenu.style.display = 'block';
                    profileName.textContent = userName;
                    profileEmail.textContent = userEmail;
                } else {
                    loginBtn.style.display = 'block';
                    signupBtn.style.display = 'block';
                    profileMenu.style.display = 'none';
                }
            }
            
            // Login button click
            loginBtn.addEventListener('click', function() {
                const email = prompt('Enter your email:');
                const password = prompt('Enter your password:');
                
                if (email && password) {
                    const name = email.split('@')[0].replace(/[^a-zA-Z]/g, ' ').replace(/\\b\\w/g, l => l.toUpperCase());
                    localStorage.setItem('userLoggedIn', 'true');
                    localStorage.setItem('userName', name);
                    localStorage.setItem('userEmail', email);
                    updateNavbar();
                    alert('Login successful!');
                }
            });
            
            // Signup button click
            signupBtn.addEventListener('click', function() {
                const name = prompt('Enter your full name:');
                const email = prompt('Enter your email:');
                const password = prompt('Create a password:');
                
                if (name && email && password) {
                    localStorage.setItem('userLoggedIn', 'true');
                    localStorage.setItem('userName', name);
                    localStorage.setItem('userEmail', email);
                    updateNavbar();
                    alert('Account created successfully!');
                }
            });
            
            // Logout button click
            logoutBtn.addEventListener('click', function() {
                localStorage.removeItem('userLoggedIn');
                localStorage.removeItem('userName');
                localStorage.removeItem('userEmail');
                updateNavbar();
                alert('Logged out successfully!');
            });
            
            // Initialize navbar
            updateNavbar();
        });
    </script>`;
    
    // Add script before closing body tag
    const finalContent = cleanContent.replace('</body>', navbarScript + '\n</body>');
    
    fs.writeFileSync('index.html', finalContent);
    console.log('✅ Navbar cleaned and fixed successfully!');
    
} catch (error) {
    console.log('❌ Error:', error.message);
}