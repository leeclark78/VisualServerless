import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { saveApplication, loadApplication } from './controllers/applicationController';
import { buildApplication, deployApplication } from './controllers/deploymentController';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/applications', saveApplication);
app.get('/api/applications/:id', loadApplication);
app.post('/api/build', buildApplication);
app.post('/api/deploy', deployApplication);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
