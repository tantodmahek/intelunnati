// Profile dropdown hover fix
document.addEventListener('DOMContentLoaded', function() {
    const profileMenu = document.querySelector('.profile-menu');
    const profileDropdown = document.querySelector('.profile-dropdown');
    
    if (profileMenu && profileDropdown) {
        let hoverTimeout;
        
        profileMenu.addEventListener('mouseenter', function() {
            clearTimeout(hoverTimeout);
            profileDropdown.style.display = 'block';
        });
        
        profileMenu.addEventListener('mouseleave', function() {
            hoverTimeout = setTimeout(function() {
                profileDropdown.style.display = 'none';
            }, 100);
        });
        
        profileDropdown.addEventListener('mouseenter', function() {
            clearTimeout(hoverTimeout);
            profileDropdown.style.display = 'block';
        });
        
        profileDropdown.addEventListener('mouseleave', function() {
            profileDropdown.style.display = 'none';
        });
    }
});