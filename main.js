const http = require('http');
const fs = require('fs');

const httpStatus = require('http-status-codes');

const router = require('./router');
const contentTypes = require('./contentTypes');
const utils = require('./utils');


// -------- Now Play with routes --------------- //


router.get("/", (req, res) => {
   res.writeHead(httpStatus.OK, contentTypes.html);
   utils.getFile("views/index.html", res);
})

router.get("/courses.html", (req, res) => {
   res.writeHead(httpStatus.OK, contentTypes.html);
   utils.getFile("views/courses.html", res);
})


router.get("/contact.html", (req, res) => {
   res.writeHead(httpStatus.OK, contentTypes.html);
   utils.getFile("views/contact.html", res);
})


router.post("/", (req, res) => {
   res.writeHead(httpStatus.OK, contentTypes.html);
   utils.getFile("views/thanks.html", res);
})


router.get("/graph.png", (req, res) => {
   res.writeHead(httpStatus.OK, contentTypes.png);
   utils.getFile("public/images/graph.png", res);
})


router.get("/people.jpg", (req, res) => {
   res.writeHead(httpStatus.OK, contentTypes.jpg);
   utils.getFile("public/images/people.jpg", res);
})

router.get("/product.jpg", (req, res) => {
   res.writeHead(httpStatus.OK, contentTypes.jpg);
   utils.getFile("public/images/product.jpg", res);
})


router.get("/izadora.css", (req, res) => {
   res.writeHead(httpStatus.OK, contentTypes.css);
   utils.getFile("public/css/izadora.css", res);
})


router.get("/bootstrap.css", (req, res) => {
   res.writeHead(httpStatus.OK, contentTypes.css);
   utils.getFile("public/css/bootstrap.css", res);
})


router.get("/izadora.js", (req, res) => {
   res.writeHead(httpStatus.OK, contentTypes.js);
   utils.getFile("public/js/izadora.js", res);
})



// ---------- port and run it ------------- //
const app = http.createServer(router.handle);
const port = 3000;

app.listen(port, () => {
   console.log(`Listen to port : ${port}`)
})