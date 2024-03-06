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
        // Assuming the server response includes the text directly
        document.getElementById('response').innerText = data.responseMessage;
    })
    .catch(error => console.error('Error:', error));
});

document.getElementById('toggle-chat-btn').addEventListener('click', function() {
    var chatContainer = document.querySelector('.chat-container');
    if (chatContainer.style.display === 'none' || chatContainer.style.display === '') {
        chatContainer.style.display = 'block'; // Show the chat interface
    } else {
        chatContainer.style.display = 'none'; // Hide the chat interface
    }
});





// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.querySelector("img").src;
    captionText.innerHTML = this.querySelector("img").alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
