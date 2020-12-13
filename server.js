const express = require('express');
const app = express();
const server = require('http').Server(app);

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.send('hello world')
})

server.listen(3000, () => console.log('server listening on port 3000'));
