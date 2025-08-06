function sendPrompt() {
    const prompt = document.getElementById('promptInput').value;

    fetch('/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: prompt }),
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('response').innerText = data.response;
        })
        .catch(error => {
            document.getElementById('response').innerText = 'Error: ' + error;
        });
}
