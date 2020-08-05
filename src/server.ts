import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  const users = [
    {
      name: 'Myke Albuquerque Pinto de Oliveira',
      age: 32
    },
    {
      name: 'Valdemar',
      age: 41
    }
  ];
  
  return response.json(users);
});

app.listen(3333);
