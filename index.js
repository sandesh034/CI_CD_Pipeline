import express from 'express';

const app = express();
const PORT = 3000;

app.get('/api', (req, res) => {
    res.json({
        message: 'Hello from the API!',
        version: '1.0.0',
    });
});


app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date().toISOString(),
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});