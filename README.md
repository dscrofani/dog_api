#Setup

Install Node.js
Install npm is not already installed (check via npm -v or npm --version)
Open project in an IDE for future editing (VS Code, Atom etc.)
Terminal/Windows Powershell/Bash Shell: Navigate to the project directory and use:
 npm install express or if you already have a package.json file with dependencies then just: npm install
Setup Git version control if you wish
Note contents of public folder
Node server is configured to serve index.html by default
Note the port number used in the Node server
Run the server: node <name of node server file> . 
In our case it’s: node server.js
Visit your site in Chrome via 127.0.0.1:3000 or localhost:3000
Note that this is a single page app. There is no page refresh.
Note the network exchanges via the Chrome dev tools. There are really two requests made from the client to the 3rd party API. Understanding this flow is crucial. You make the first request when you click the button. Note that the first request receives a response that includes json. What is the second request and how is it made? 
Cross origin errors - there should not be one. Note the header from the dog-api server response (view in Chrome dev tools) server: -control-allow-origin: * . . . . all good here

ToDo

The button jumps around when the image loads. Fix this by editing the client-side UI.
The page looks like nothing special. Add UI elements and CSS styles to make it look somewhat decent.
It would be nice if the name of the dog breed showed on the page below every new image. Check out the <figcaption> element. Unfortunately the Dog API doesn’t include the breed name as a field in its response. But the URL that is returned does have the breed’s name embedded in it. Parse this URL to “extract” the breed name and display it below each image on the page. Note that you are already accessing the URL via data.message in your client-side javascript.
The client-side javascript makes use of the relatively new fetch API for making the XMLHttp request to get the URL to the picture. The file includes the syntax for using the older XMLHttpRequest object. The new code is more modern and cleaner. It is written using Promises. But it could be made even cleaner. Replace the anonymous function(){} syntax in the returned promises (.then().then().catch() etc.) with arrow function syntax.   

