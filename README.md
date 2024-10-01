**INSTALATION** 
git clone https://github.com/your-username/stream-validator.git
cd stream-validator
npm install
**DEPENDENCIES**
Express.js: Web framework for Node.js to create the server.
body-parser: Middleware to parse incoming request bodies in JSON format.
cors: Middleware to allow Cross-Origin Resource Sharing.
** TO Install all run -->
npm install express body-parser cors
**RUNNING THE SERVER**
node index.js
**HOW IT WORKS**
1. The user enters the TV channel feed URL and their email address in the form.
2. Upon submission, the frontend JavaScript (script.js) sends a POST request to the backend server with the input data.
3. The server forwards the request to an external API (https://castify.in.ngrok.io/buildapp), processes the stream validation, and sends a CSV result to the provided email.
4. The user is notified via the webpage about the status of the validation (success or failure).
