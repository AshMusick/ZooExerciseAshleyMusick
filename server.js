const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'src'), {
    setHeaders: (res, filePath) => {
        console.log(filePath)
        if (path.extname(filePath) === '.js') {
            res.setHeader('Content-Type', 'application/javascript');
        }
    }
}));

// Serve the index.html file for all routes except router.js
app.get(/^\/(?!.*\.js$).*/, (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
