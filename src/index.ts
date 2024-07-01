import cors from 'cors';
import express, { Application } from 'express';
import helmet from 'helmet';

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// health check
app.get('/health', (req, res) => {
    res.send('OK');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
