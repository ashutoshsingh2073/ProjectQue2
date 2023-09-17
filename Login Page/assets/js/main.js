/*=============== SHOW HIDDEN - PASSWORD ===============*/

const showHiddenPass = (inputPass, inputIcon) =>{
    const input = document.getElementById(inputPass),
          iconEye = document.getElementById(inputIcon)
          
    iconEye.addEventListener('click', () =>{
        // Change password to text
        if(input.type === 'password'){
            // Switch to text
            input.type = 'text'
 
            // Add icon
            iconEye.classList.add('ri-eye-line')
            // Remove icon
            iconEye.classList.remove('ri-eye-off-line')
        }else{
            // Change to password
            input.type = 'password'
 
            // Remove icon
            iconEye.classList.remove('ri-eye-line')
            // Add icon
            iconEye.classList.add('ri-eye-off-line')
        }
    })
 }
 
 const validLogins = {
     "ashutosh@jssaten.ac.in": 'dummypass1',
     "ujjwal@jssaten.ac.in": 'dummypass2'
 };
 
 // Function to handle login attempts
 const handleLogin = () => {
     const username = document.getElementById('input-username').value;
     const password = document.getElementById('input-pass').value;
 
     // Check if the entered username exists and the password matches
     if (validLogins.hasOwnProperty(username) && validLogins[username] === password) {
        const newPageURL = 'homepage/homepage.html'; // Replace with the URL of the new HTML file
        window.open(newPageURL, '_blank'); // Opens in a new tab or window
     } else {
         alert('Invalid username or password. Please try again.');
     }
 }
 showHiddenPass('input-pass','input-icon')
 document.addEventListener('DOMContentLoaded', () => {
     document.getElementById('loginbuttonid').addEventListener('click', handleLogin);
 });
 

 
 // Add a click event listener to the login button
 