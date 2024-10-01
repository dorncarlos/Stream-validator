document.getElementById('validation-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Validating...'; 

    const feedUrl = document.getElementById('feed-url').value;
    const email = document.getElementById('email').value;

    const requestData = {
        androidTvFeed: feedUrl,
        email: email,
        streamValidate: true
    };

    console.log('Request Data:', requestData); 

    fetch('https://castify.in.ngrok.io/buildapp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })
    .then(response => {
        if (!response.ok) {
            
            throw new Error(`Server error: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        resultDiv.innerHTML = 'Validation successful! The CSV will be sent to your email.';
        console.log('Success:', data); 
    })
    .catch(error => {
        
        resultDiv.innerHTML = `Error: ${error.message}. CSV will be sent.`;
        console.error('Error:', error); 
    });
});
