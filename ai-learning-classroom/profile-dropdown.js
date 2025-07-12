// Enhanced Profile Dropdown JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const profileMenu = document.querySelector('.profile-menu');
    const profileBtn = document.getElementById('profileBtn');
    const profileDropdown = document.querySelector('.profile-dropdown');
    
    if (!profileMenu || !profileBtn || !profileDropdown) return;
    
    let isDropdownOpen = false;
    let hoverTimeout;
    
    // Toggle dropdown on click
    profileBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleDropdown();
    });
    
    // Show dropdown on hover
    profileMenu.addEventListener('mouseenter', function() {
        clearTimeout(hoverTimeout);
        showDropdown();
    });
    
    // Hide dropdown on mouse leave with delay
    profileMenu.addEventListener('mouseleave', function() {
        hoverTimeout = setTimeout(() => {
            hideDropdown();
        }, 200);
    });
    
    // Keep dropdown open when hovering over it
    profileDropdown.addEventListener('mouseenter', function() {
        clearTimeout(hoverTimeout);
    });
    
    profileDropdown.addEventListener('mouseleave', function() {
        hoverTimeout = setTimeout(() => {
            hideDropdown();
        }, 200);
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!profileMenu.contains(e.target)) {
            hideDropdown();
        }
    });
    
    // Handle profile link click
    const profileLink = profileDropdown.querySelector('a[href="profile.html"]');
    if (profileLink) {
        profileLink.addEventListener('click', function(e) {
            e.preventDefault();
            hideDropdown();
            // Smooth redirect to profile page
            setTimeout(() => {
                window.location.href = 'profile.html';
            }, 100);
        });
    }
    
    function showDropdown() {
        isDropdownOpen = true;
        profileMenu.classList.add('active');
        profileDropdown.style.display = 'block';
        // Force reflow for smooth animation
        profileDropdown.offsetHeight;
    }
    
    function hideDropdown() {
        isDropdownOpen = false;
        profileMenu.classList.remove('active');
        // Delay hiding to allow for smooth animation
        setTimeout(() => {
            if (!isDropdownOpen) {
                profileDropdown.style.display = 'none';
            }
        }, 300);
    }
    
    function toggleDropdown() {
        if (isDropdownOpen) {
            hideDropdown();
        } else {
            showDropdown();
        }
    }
    
    // Prevent dropdown from closing when clicking inside it
    profileDropdown.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});