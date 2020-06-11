import express from 'express';

const routes = express.Router();

routes.get('/api', (request, response) => {
  return response.send("Esta é minha api :)");
});

routes.get('/api/person', (request, response) => {

});

routes.get('/api/person/:id', (request, response) => {
  return response.send("person " + request.params.id + "\n")
});

routes.get('/api/team', (request, response) => {

});

routes.get('/api/team/:id', (request, response) => {

});

routes.get('/api/event', (request, response) => {

});

export default routes;
