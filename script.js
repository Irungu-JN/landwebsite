<script>
        // Get the Get Started button
    const getStartedBtn = document.getElementById('get-started-btn');

    // Get the login form section
    const loginForm = document.getElementById('login-form');

    // Add click event listener to the Get Started button
    getStartedBtn.addEventListener('click', function() {
        // Toggle the 'hidden' class to show/hide the login form
        loginForm.classList.toggle('hidden');
        });
</script>