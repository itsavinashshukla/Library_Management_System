// Handle Page Navigation
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

// Login Functionality
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const role = document.getElementById('role').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin' && role === 'admin') {
        alert('Login successful as Admin');
        document.getElementById('maintenanceLink').style.display = 'inline';
        showPage('dashboard');
    } else if (username === 'user' && password === 'user' && role === 'user') {
        alert('Login successful as User');
        document.getElementById('maintenanceLink').style.display = 'none';
        showPage('dashboard');
    } else {
        alert('Invalid credentials');
    }
});

// Logout Functionality
function logout() {
    alert('Logged out successfully');
    showPage('login');
}

// Add Membership
document.getElementById('addMembershipForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('membershipName').value;
    const duration = document.querySelector('input[name="duration"]:checked').value;
    alert(`Membership added: Name: ${name}, Duration: ${duration}`);
});

// Update Membership
document.getElementById('updateMembershipForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const membershipNumber = document.getElementById('membershipNumber').value;
    const extend = document.getElementById('extendMembership').checked ? 'Yes' : 'No';
    alert(`Membership updated: Number: ${membershipNumber}, Extend: ${extend}`);
});
