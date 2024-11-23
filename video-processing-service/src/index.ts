import express from 'express';
import ffmpeg from 'fluent-ffmpeg';

const app = express();
const port = 3000;

app.post('/process-video', (req, res) => {
    //Get path of the input video file form the request body
    const inputFilePath = req.body.inputFilepath;
    const outputFilePath = req.body.outputFilepath;

    if (!inputFilePath || !outputFilePath) {
        res.status(400).send("Bad request: Missing file path.")
    }

    ffmpeg(inputFilePath)
        .outputOptions()
});

app.listen(port, () => {
    console.log(`Video processing service listening at http://localhost:${port}`);
});