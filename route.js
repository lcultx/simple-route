var bouncy = require('bouncy');

var port = 8088;

var server = bouncy(function (req, res, bounce) {
    if (req.headers.host === 'w3d.sanwu.org') {
        bounce(4567);
    }
    else if (req.headers.host === 'boop.example.com') {
        bounce(8002);
    }
    else {
        res.statusCode = 404;
        res.end('no such host');
    }
});


server.listen(port,function(){
	console.log("route is bind on " + port);
});
