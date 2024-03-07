// Existing chat submission functionality
document.getElementById('submit').addEventListener('click', function() {
    const prompt = document.getElementById('prompt').value;
    fetch('/api/chat', { // This endpoint should match your server-side route
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: prompt })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('response').innerText = data.responseMessage;
    })
    .catch(error => console.error('Error:', error));
});

// Existing toggle chat functionality
document.getElementById('toggle-chat-btn').addEventListener('click', function() {
    var chatContainer = document.querySelector('.chat-container');
    if (chatContainer.style.display === 'none' || chatContainer.style.display === '') {
        chatContainer.style.display = 'block';
    } else {
        chatContainer.style.display = 'none';
    }
});

// Existing modal functionality
var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.querySelector("img").src;
    captionText.innerHTML = this.querySelector("img").alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}

// Add zoom toggle functionality
modalImg.addEventListener('click', function() {
    this.classList.toggle('zoomed');
    // Toggle cursor style depending on whether the image is zoomed in or not
    this.style.cursor = this.classList.contains('zoomed') ? 'zoom-out' : 'zoom-in';
});
