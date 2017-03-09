var express = require('express');
var port = process.env.PORT || 9999;
var app = express();

app.use(express.static(__dirname + '/public'));
app.listen(port, function(){
    console.log('listening on', port);
})
