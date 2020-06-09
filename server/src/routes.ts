import express from 'express';

const routes = express.Router();

routes.get('/api', (request, response) => {
  return response.json({'hey':'hey'});
});

routes.get('/api/id', (request, response) => {
  return response.json({'hey':'hey'});
});


export default routes;
