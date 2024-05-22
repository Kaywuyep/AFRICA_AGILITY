// declare the http in-built function
const http = require('http')
// declaring the port and the hostname
const port = 3000
const hostname = '127.0.0.1'
// Creating a HTML content with my autobiography
const Autobiography = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hello, World! - Kate's Backend Journey</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>Hi there, I'm Kate! My coding adventure began on May 22nd, 2023.</p>
  <p>As a graduate of Mathematics, I saw technology as a way to apply my problem-solving and analytical skills to solve real problems in the real world.</p>
  <p>I started out with C, but Python quickly became my first love. Django soon stole my heart when I built my first web app.</p>
  <p>Now, I'm mastering Node.js, its asynchronous nature fueling my passion for backend development. It's filled with so much 'Promises' &#128540; (see what I did there?).</p>
  <p>The journey's just begun, and I can't wait to see where code takes me next!</p>
</body>
</html>
`;
// creating the http server
http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(Autobiography)
    res.end();
    console.log(`http-server is running on ${hostname}:${port}`)
}).listen(port);