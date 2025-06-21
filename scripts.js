

// Function to hide the landing page and show the gallery
function startJourney() {
    document.getElementById("landingPage").style.display = "none";
    document.getElementById("gallery").style.display = "none";
    document.getElementById("rando").style.display = "block";
}


function showRandomPost() {
    document.getElementById("gallery").style.display = "block";
    const posts = document.querySelectorAll('.post');
    posts.forEach(post => post.style.display = 'none');
    const randomIndex = Math.floor(Math.random() * posts.length);
    posts[randomIndex].style.display = 'block';
}
