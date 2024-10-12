/* Declare variables */
const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");

/* Attach element to eventlistener */
checkMessageButton.addEventListener("click",() => {
    if (messageInput.value === "") {
        alert("Please enter a message.")
        return;
    }
} );