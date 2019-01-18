const express = require('express');

const app = express();

app.use(express.static('dist'));
app.get('/api/getConnectedUser', (req, res) => res.send({
  id: '123456', username: 'Paolina', firstname: 'Pauline', lastname: 'Thomas', avatar: { src: '/static/img/avatar.jpg' }
}));
app.get('/api/getTrackslist', (req, res) => res.send({ track: 'sdfsdf' }));
app.listen(8080, () => console.log('Listening on port 8080!'));
