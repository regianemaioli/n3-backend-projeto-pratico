const express = require('express');
const server = express();
server.get('/', function(req,res){
    res.send('n3-backend-projeto-pratico');
})
server.listen(3000);
