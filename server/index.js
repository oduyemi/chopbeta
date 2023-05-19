// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const { createProxyMiddleware } = require('http-proxy-middleware');

// const db = require("./db");

// const app = express();

// const productRouter = require("./routes/productRouter");

// var corsOptions = {
//     origin:"http://127.0.0.1:3000"
// }

// // // Enable CORS for all routes
// // app.use((req, res, next) => {
// //     res.setHeader('Access-Control-Allow-Origin', cors(corsOptions));
// //     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
// //     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
// //     res.setHeader('Access-Control-Allow-Credentials', 'true');
// //     next();
// // });

// app.use(cors(corsOptions));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use("/api/", productRouter);

// db.on("error", console.error.bind(console, "Mongodb Connection Error:"));


// app.get("/", (req, res) => {
// res.json({message: "Welcome to ChopBeta"});
// });


// const PORT = process.env.PORT || 7070;
// app.listen(PORT, () => {
//     console.log(`Server is running on ${PORT}`);
// });


// app.use("/api/", productRouter);

// // Proxy requests to the backend API server
// app.use('/api', createProxyMiddleware({
//     target: 'http://localhost:7070',  // Replace with your backend API server's URL
//     changeOrigin: true,
// }));

// // Serve the frontend static files (e.g., built React app)
// app.use(express.static('chopbeta/src'));  // Replace with the actual directory of your static files

// // Start the server
// app.listen(3000, () => {
//     console.log('Proxy server is running on port 3000');
// });

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { createProxyMiddleware } = require('http-proxy-middleware');

const db = require("./db");

const app = express();

const productRouter = require("./routes/productRouter");

var corsOptions = {
    origin:"http://localhost:3000"
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/api/", productRouter);

db.on("error", console.error.bind(console, "Mongodb Connection Error:"));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to ChopBeta" });
});

// Proxy requests to the backend API server
app.use('/api', createProxyMiddleware({
    target: 'http://192.168.43.113:3000/', 
    changeOrigin: true,
}));

// Serve the frontend static files (e.g., built React app)
app.use(express.static('../src'));  // Replace with the actual directory of your static files

const PORT = process.env.PORT || 7070;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});


// Require the cloudinary library
const cloudinary = require('cloudinary').v2;

// Return "https" URLs by setting secure: true
cloudinary.config({
  secure: true
});

// Log the configuration
console.log(cloudinary.config());