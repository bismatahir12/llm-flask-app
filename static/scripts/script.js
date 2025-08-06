
function sendPrompt() {
    const prompt = document.getElementById("promptInput").value;

    fetch('/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
    })
        .then(res => res.json())
        .then(data => {
            document.getElementById("response").innerText = data.data || data.message;
        })
        .catch(err => {
            document.getElementById("response").innerText = "Error communicating with server.";
        });
}
