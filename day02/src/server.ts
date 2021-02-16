import express from 'express';
import {Application, Response, Request} from 'express';
const app: Application = express();
const port = process.env.PORT || 8080;

app.get('/', (req: Request, res: Response) => {
    res.send('World');
});

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});