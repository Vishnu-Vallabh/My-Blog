// Function to save the token to local storage
export function saveAuthToken(token) {
  localStorage.setItem('authToken', token);
}

// Function to get the token from local storage
export function getAuthToken() {
  return localStorage.getItem('authToken');
}

// Function to check if the user is authenticated
export function isAuthenticated() {
  const token = getAuthToken();
  // Add your token validation logic here
  return token !== null;
}

// Function to handle login
export function login(token) {
  saveAuthToken(token);
  // Redirect to the home page or dashboard
  window.location.href = '/';
}

// Function to handle logout
export function logout() {
  localStorage.removeItem('authToken');
  // Redirect to the login page
  window.location.href = '/login';
}

// Check authentication on page load
window.addEventListener('load', () => {
  if (!isAuthenticated()) {
    // Redirect to the login page if not authenticated
    window.location.href = '/login';
  }
});