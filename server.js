var http = require('http')
var dispatcher = require('httpdispatcher')
var port = 1243

var server = http.createServer(handleRequest)
server.listen(port, function(){
    console.log("Server listening on: http://localhost:%s", port)
})

function handleRequest(request, response){
    try {
        console.log(request.url)
        dispatcher.dispatch(request, response)
    } catch(err) {
        console.log(err)
    }
}


dispatcher.onPost('/api/rest', function(req,res){
	res.writeHead(200, {'Content-Type': 'application/json'})
	res.write(JSON.stringify(req.params))
	res.end()
})


